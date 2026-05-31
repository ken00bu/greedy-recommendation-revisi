import chalk from 'chalk';
import { binarySearchMangaByTitle, searchMangaTitleCandidates } from '../algorithms/searching';
import { input, select } from "@inquirer/prompts";
import { greedyRecommendation } from '../algorithms/greedy-recommendation';
import type { Manga } from '../models/manga';
import type { Genre } from '../models/genre';

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

        const matchedGenre = manga.matched.filter(m => manga.genre.includes(m as Genre))
        const matchedTags = manga.matched.filter(m => manga.tags.includes(m))
        const authorMatch = manga.matched.includes(manga.author)

        const parts: string[] = []
        if(authorMatch) parts.push(chalk.cyan(manga.author))
        if(matchedGenre.length) parts.push(matchedGenre.map(g => chalk.green(g)).join(', '))
        if(matchedTags.length) parts.push(
            matchedTags
                .slice(0, 4)
                .map(t => chalk.yellow(t))
                .join(', ') + (matchedTags.length > 4 ? chalk.dim(`... +${matchedTags.length - 4}`) : '')
        )

        console.log('     ' + parts.join(' '))
    })
}