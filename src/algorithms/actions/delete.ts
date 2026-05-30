import type { Manga } from "../../models/manga"
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'


const currentFile = fileURLToPath(import.meta.url)
const src = dirname(currentFile)

export function del(mangas: Manga[]){
    
}