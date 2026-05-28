import type { Manga } from "../models/manga"
const BASE_PREFERENCE_WEIGHT = 5;

function buildPreference(manga: Manga): string[] {
    return [
        manga.author,
        ...manga.genre,
        ...manga.tags
    ]
}

// semakin besar weight otomatis akan dibuat semakin kecil angkanya, agar bisa bikin mekanisme semakin jauh expand preferencenya semakin kecil weight dari tag barunya
function buildPreferenceWithWeight(preference: string[], weight: number): Record<string, number> {
    return Object.fromEntries(
        preference.map((item) => [item, 1 / (1 + weight)])
    );
}

// semakin tinggi nilainya, semakin akurat rekomendasinya
function getBestManga(mangaWithScoreList: (Manga & { score: number })[]){
    return mangaWithScoreList.reduce((best, current) => 
        current.score > best.score ? current : best
    )
}

function mergePreference(preferenceWeight: Record<string, number>, preference: string[], index: number){
    return {
        ...buildPreferenceWithWeight(preference, BASE_PREFERENCE_WEIGHT + index),
        ...preferenceWeight
    }
}

export function greedyRecommendation(selectedManga: Manga, mangas: Manga[], limit: number){
    let preferenceWeights = buildPreferenceWithWeight(buildPreference(selectedManga), BASE_PREFERENCE_WEIGHT)
    const recommendation: (Manga & { score: number })[] = []
    let i = 0
    while(i < limit){
        let bestManga: (Manga & { score: number }) 
        const mangaWithScoreList: (Manga & { score: number })[] = []
        for(const manga of mangas){
            //guard jika manga adalah selectedManga atau manga sudah diambil maka skip
            if(manga.title === selectedManga.title || recommendation.some(r => r.title === manga.title)) continue
            // current tag + genre + author
            const preferences = buildPreference(manga)
            // hitung score manga saat ini
            let score = 0
            for(const item of preferences){
                score += preferenceWeights[item] ?? 0
            }
            mangaWithScoreList.push({
                ...manga,
                score
            })
        }

        bestManga = getBestManga(mangaWithScoreList)
        preferenceWeights = mergePreference(preferenceWeights, buildPreference(bestManga), i)
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