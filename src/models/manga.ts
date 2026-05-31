import { Genre } from "./genre"

export interface Manga {
    title: string,
    author: string,
    genre: Genre[],
    tags: string[]
}