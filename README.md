# Graph Based Recommendation System

Proyek UAS Algoritma Pemrograman II sistem rekomendasi manga berbasis graph menggunakan TypeScript. Dengan use case sistem rekomendasi komik Jepang atau Manga

## Konsep

Setiap manga direpresentasikan sebagai **node** dalam graph. Dua manga selalu terhubung (complete graph), namun memiliki **weight** yang merepresentasikan seberapa mirip keduanya. Weight dihitung otomatis berdasarkan kesamaan atribut manga (genre, author, aktor, dll) — semakin banyak kesamaan, semakin kecil weightnya.

## Algoritma yang Digunakan

- **Traversal (Depth-First Search)** — traversal seluruh node di dalam graph untuk mencari manga
- **String Searching (Knuth-Morris-Pratt)** — bersamaan dengan traversal, string matching keyword dengan judul manga
- **Shortest Path (Dijkstra)** — cari rekomendasi manga paling relevan dari manga pilihan

## Alur Program

```
User input keyword
      ↓
Traversal + String Searching → temukan node manga
      ↓
Shortest Path → cari manga paling relevan
      ↓
Tampilkan rekomendasi di CLI
```

## Struktur Project

```
project/
├── src/
│   ├── data/
│   │   └── mangas.ts          # Data manga (hardcode)
│   ├── models/
│   │   └── manga.ts           # Interface manga & Edge
│   ├── graph/
│   │   ├── Graph.ts          # Class Graph (adjacency list)
│   │   └── buildGraph.ts     # Generate graph & hitung weight
│   ├── algorithms/
│   │   ├── searching.ts      # String searching + DFS
│   │   ├── shortestPath.ts   # Dijkstra
│   │   └── mst.ts            # Prim / Kruskal
│   └── cli/
│       └── menu.ts           # Interaksi CLI
│   
├── package.json
├── tsconfig.json
└── README.md
```

## Cara Menghitung Weight

Weight antar dua manga dihitung dari jumlah kesamaan atribut:

| Atribut sama | Bobot |
|---|---|
| Genre | +10 |
| author | +5 |
| Aktor | +3 |

Total weight = 1 / 1 + weight 

## Setup

```bash
npm install
npm run dev
```

## Tech Stack

- TypeScript
- Clack

## Catatan

- Data manga di-hardcode manual di `src/data/mangas.ts`
- Weight dihitung otomatis saat graph di-generate, bukan hardcode per pasangan manga
- Hanya proyek akademik dan untuk membuktikan bahwa graph + shortest path juga bisa membangun algoritma rekomendasi sederhana
