import { mangas } from './data/mangas';
import { searchMangaTitleCandidates, binarySearchMangaByTitle } from './algorithms/searching';
import chalk from 'chalk';
import { input, select } from "@inquirer/prompts";
import { greedyRecommendation } from './algorithms/greedy-recommendation';
import type { Manga } from './models/manga';


async function main(){
    const query = await input({message: 'masukan judul manga: '})
    const candidates = query ? searchMangaTitleCandidates(query, mangas) : []
    if(candidates.length === 0){
        console.log(chalk.red.bold("✖ Manga tidak ditemukan."));
        console.log(chalk.dim("Coba gunakan kata kunci lain!"));
        return;
    }
    console.log(chalk.green.bold(`\nDitemukan ${candidates.length} manga.`));

    const selectedManga = await select({
        message: "",
        choices: candidates.map((title) => ({
            name: title,
            value: title,
        })),
        theme: {
            prefix: chalk.dim("Maksudnya ini?")
        }
    });
    
    const manga = binarySearchMangaByTitle(selectedManga, mangas)
    const recommend = greedyRecommendation(manga as Manga, mangas, 5)
    recommend.forEach((manga, index) => {
        console.log(`${index + 1}. ${manga.title}: ${manga.score}`);
    });

}

main()