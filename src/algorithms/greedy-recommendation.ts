import type { Manga } from "../models/manga"
const BASE_PREFERENCE_WEIGHT = 3;
const INITIAL_PREFERENCE_WEIGHT = 0;

function buildPreference(manga: Manga): string[] {
     return [ manga.author, ...manga.genre, ...manga.tags ] 
}

// semakin besar weight otomatis akan dibuat semakin kecil angkanya, agar bisa bikin mekanisme semakin jauh expand preferencenya semakin kecil weight dari tag barunya
function buildPreferenceWithWeight(manga: Manga, depth: number = 0): Record<string, number> {
    const decay = 1 / (1 + depth);

    return {
        [manga.author]: 1 * decay,

        ...Object.fromEntries(
            manga.genre.map((genre) => [genre, 1.5 * decay])
        ),

        ...Object.fromEntries(
            manga.tags.map((tag) => [tag, 2 * decay])
        ),
    };
}

// semakin tinggi nilainya, semakin akurat rekomendasinya
function getBestManga(mangaWithScoreList: (Manga & { score: number, matched: string[] })[]){
    return mangaWithScoreList.reduce((best, current) => 
        current.score > best.score ? current : best
    )
}

// expand preference dengan weight yang jauh lebih rendah dari initial
function mergePreference(oldPreferences: Record<string, number>, manga: Manga, index: number){

    const filteredGenre = manga.genre.filter((genre)=>!oldPreferences.hasOwnProperty(genre))
    const filteredTags = manga.tags.filter((tag)=>!oldPreferences.hasOwnProperty(tag))

    const newPreferences = {
        author: manga.author,
        genre: filteredGenre,
        tags: filteredTags
    }


    return {
        ...buildPreferenceWithWeight(newPreferences as Manga, BASE_PREFERENCE_WEIGHT + index),
        ...oldPreferences
    }
}

export function greedyRecommendation(selectedManga: Manga, mangas: Manga[], limit: number){

    // Weight untuk initial harus gamblang bobotnya dari expand agar tidak terlalu halu
    let preferenceWeights = buildPreferenceWithWeight(selectedManga, INITIAL_PREFERENCE_WEIGHT)
    const recommendation: (Manga & { score: number, matched: string[] })[] = []
    let i = 0
    while(i < limit){
        let bestManga: (Manga & { score: number, matched: string[] }) 
        const mangaWithScoreList: (Manga & { score: number, matched: string[] })[] = []
        for(const manga of mangas){
            //guard jika manga adalah selectedManga atau manga sudah diambil maka skip
            if(manga.title === selectedManga.title || recommendation.some(r => r.title === manga.title)) continue

            // current tag + genre + author
            const preferences = buildPreference(manga)
            
            // hitung score manga saat ini
            let score = 0
            const matchedItems: string[] = [] 
            for(const item of preferences){
                const w = preferenceWeights[item] ?? 0
                score += w
                if(w > 0) matchedItems.push(item)
                
            }
            mangaWithScoreList.push({
                ...manga,
                score,
                matched: matchedItems 
            })
        }

        bestManga = getBestManga(mangaWithScoreList)
        
        preferenceWeights = mergePreference(preferenceWeights, bestManga, i)
        recommendation.push(bestManga)
        i++
    }
    
    return recommendation.sort((a, b) => b.score - a.score);
}

// misal mencari rekomendasi naruto, 
// 1, ambil tag + genre + author naruto, sebut saja preference
// 2. bandingkan preference saat ini dengan preference setiap manga yang belum diambil
// 2a. setiap perbandingan, hitung skor.
// 3. ambil skor terbanyak saat ini, misal bleach
// 4. merge preference naruto & bleach
// 5. kembali ke 2