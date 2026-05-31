import chalk from 'chalk';
import { searchMangaTitleCandidates, binarySearchMangaByTitle } from '../searching';
import { input, select } from "@inquirer/prompts";
import { greedyRecommendation } from '../greedy-recommendation';
import type { Manga } from '../../models/manga';

export async function recommend(mangas: Manga[]){
    const query = await input({ message: 'Masukan judul manga: ' })
    const candidates = query ? searchMangaTitleCandidates(query, mangas) : []

    if(candidates.length === 0){
        console.log(chalk.red.bold('\n✖ Manga tidak ditemukan.'))
        console.log(chalk.dim('Coba gunakan kata kunci lain!\n'))
        
        return
    }

    console.log(chalk.green.bold(`\nDitemukan ${candidates.length} manga.`))

    const selectedTitle = await select({
        message: '',
        choices: candidates.map((title) => ({
            name: title,
            value: title,
        })),
        theme: {
            prefix: chalk.dim('Maksudnya ini?')
        }
    })

    const manga = binarySearchMangaByTitle(selectedTitle, mangas)
    const recommendation = greedyRecommendation(manga as Manga, mangas, 5)

    console.log(chalk.hex('#ff9f43').bold(`\nRekomendasi berdasarkan: ${selectedTitle}\n`))
    recommendation.forEach((manga, index) => {
        console.log(
            chalk.bold(`  ${chalk.dim('#' + (index + 1))} ${manga.title}`) +
            chalk.dim(` — skor: ${manga.score.toFixed(2)} `)
        )
    })
}