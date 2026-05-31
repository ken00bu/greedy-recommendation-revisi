import type { Manga } from "../../models/manga"
import { input, select } from "@inquirer/prompts";
import chalk from "chalk";
import { searchMangaTitleCandidates } from "../searching";
import { writeFileSync } from "fs"
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'


const currentFile = fileURLToPath(import.meta.url)
const src = dirname(currentFile)

export async function del(mangas: Manga[]){
    const query = await input({ 
        message: 'Masukan judul manga yang ingin dihapus: ', 
        theme: { prefix: '>' } 
    });
    const candidates = query ? searchMangaTitleCandidates(query, mangas) : []

    if(candidates.length === 0){
        console.log(chalk.red.bold('\n✖ Manga tidak ditemukan.'))
        console.log(chalk.dim('Coba gunakan kata kunci lain!\n'))
        
        return
    }

    console.log(chalk.green.bold(`\nDitemukan ${candidates.length} manga.`))

    const titleToDelete = await select({
        message: '',
        choices: candidates.map((title) => ({
            name: title,
            value: title,
        })),
        theme: {
            prefix: chalk.dim('Maksudnya ini?')
        }
    })


    const index = mangas.findIndex((manga) => manga.title.toLowerCase() === titleToDelete.toLowerCase());

    if (index !== -1) {
        const deletedManga = mangas.splice(index, 1)[0];

        try {
            const pathToJson = join(src, '..', '..', 'data', 'mangas.json'); 
            writeFileSync(pathToJson, JSON.stringify(mangas, null, 4), 'utf-8');
            
            console.log(`\n> Data manga "${deletedManga.title}" berhasil dihapus!`);
        } catch (error) {
            console.error("\n> Gagal menyimpan penghapusan data:", error);
        }
    } else {
        console.log(`\n> Manga dengan judul "${titleToDelete}" tidak ditemukan.`);
    }
}