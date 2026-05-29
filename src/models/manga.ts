import { Genre } from "./genre"

export interface Manga {
    id: string,
    title: string,
    author: string,
    genre: Genre[],
    tags: string[]
}