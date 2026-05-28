
function BuildPreference() {

}

export function greedyRecommendation(manga: string, limit: number){
    const preference = BuildPreference()
}

// misal mencari rekomendasi naruto, 
// 1, ambil tag + genre + author naruto, sebut saja preference
// 2. bandingkan preference saat ini dengan preference setiap manga yang belum diambil
// 2a. setiap perbandingan, hitung skor.
// 3. ambil skor terbanyak saat ini, misal bleach
// 4. merge preference naruto & bleach
// 5. kembali ke 2