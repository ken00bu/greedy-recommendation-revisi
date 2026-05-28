import { kmp } from "./string-matching"
import type { Manga } from "../models/manga"

function searchMangaTitleCandidates(query: string, mangas: Manga[]): string[]{
    let candidates: string[] = []

    for(const manga of mangas){
        kmp(query, manga.title).length > 0 && candidates.push(manga.title) 
    }

    return candidates
}

function binarySearchMangaByTitle( targetTitle: string, mangas: Manga[] ): Manga | undefined {

  const sortedMangas = [...mangas].sort((a, b) =>
    a.title.localeCompare(b.title)
  );

  let left = 0;
  let right = sortedMangas.length - 1;

  const target = targetTitle.toLowerCase();

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    const currentTitle = sortedMangas[mid].title.toLowerCase();

    if (currentTitle === target) {
      return sortedMangas[mid];
    }

    if (currentTitle < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return undefined;
}
export { searchMangaTitleCandidates, binarySearchMangaByTitle }