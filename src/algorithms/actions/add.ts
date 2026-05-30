import type { Manga } from "../../models/manga";
import { input, select, checkbox } from "@inquirer/prompts";
import { Genre } from "../../models/genre";
import { kmp } from "../string-matching";
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import checkboxPlusPrompt from "inquirer-checkbox-plus-plus";


const currentFile = fileURLToPath(import.meta.url)
const src = dirname(currentFile)

export async function add(mangas: Manga[]){
    const title = await input({ message: 'Masukan judul manga: ', theme: { prefix: '>' } })
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
    
}