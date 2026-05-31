import type { Manga } from "../../models/manga";
import { input } from "@inquirer/prompts";
import chalk from "chalk";
import { writeFileSync } from "fs";
import { Genre } from "../../models/genre";
import { kmp } from "../string-matching";
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import checkboxPlusPrompt from "inquirer-checkbox-plus-plus";
import { nanoid } from "nanoid";


const currentFile = fileURLToPath(import.meta.url)
const src = dirname(currentFile)

export async function add(mangas: Manga[]){
    while(true){
        const title = await input({ message: 'Masukan judul manga: ', theme: { prefix: '>' } })
        const isExit = mangas.some((manga)=> manga.title.toLocaleLowerCase() === title.toLowerCase())
        if(isExit) {
            console.log(
                chalk.red.bold(`\n✖ Manga dengan judul `) +
                chalk.gray.bold(title.toLowerCase()) +
                chalk.red.bold(` sudah ada.`)
            );
            return
        }

        const author = await input({ message: 'Masukan nama penulis (author): ', theme: { prefix: '>' } });
        const selectedGenres = await checkboxPlusPrompt({
            message: 'Pilih Genre',
            searchable: true,
            highlight: true,
            source: function(answer, input){
                input = input || '';

                return new Promise(function(resolve){
                    const genres = Object.values(Genre).map((genre) => ({
                        name: genre,
                        value: genre,
                    }))

                    if(!input) {
                        resolve(genres)
                        return
                    }

                    const data = genres.filter((genre) => 
                        kmp(input, genre.name).length > 0
                    )
                    resolve(data)
                })
            }
        })
        const tagsInput = await input({ message: 'Masukan tags (pisah koma): ' })
        const tags = tagsInput.split(',').map(t => t.trim()).filter(t => t !== "")

        const newManga: Manga = {
            id: nanoid(),
            title: title,
            author: author,
            genre: selectedGenres as Genre[], 
            tags: tags
        };

        mangas.push(newManga)
        try {
            const pathToJson = join(src, '..', '..', 'data', 'mangas.json'); 
            writeFileSync(pathToJson, JSON.stringify(mangas, null, 4), 'utf-8');
            console.log(`\n> Data manga "${newManga.title}" berhasil disimpan!`);
        } catch (error) {
            console.error("\n> Gagal menyimpan data:", error);
        }
    }   
}