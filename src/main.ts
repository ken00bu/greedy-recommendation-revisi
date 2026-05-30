import chalk from 'chalk';
import { readFileSync } from 'node:fs';
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'
import { recommend } from './algorithms/actions/recommend';
import { add } from './algorithms/actions/add';
import { del } from './algorithms/actions/delete';
import { input, select } from "@inquirer/prompts";

const currentFile = fileURLToPath(import.meta.url)
const src = dirname(currentFile)

function exit(){
    console.log(chalk.dim('\nDadah!'))
    process.exit(0)
}

function getMangasData(){
    const raw = readFileSync(join(src, "data", "mangas.json"), "utf-8")
    return JSON.parse(raw)
}

async function main(){
    
    while(true){
        
        // ambil data paling baru setiap kembali ke menu
        const mangas = getMangasData()

        console.clear()
        console.log('\n')
        const action = await select({
            message: chalk.bold('Menu Utama'),
            choices: [
                { name: '» Cari Rekomendasi', value: 'recommend' },
                { name: '+ Tambah Data Manga', value: 'add' },
                { name: '- Hapus Data Manga', value: 'delete' },
                { name: '✖ Exit', value: 'exit' },
            ]
        })

        switch(action){
            case('recommend'): {
                await recommend(mangas)
                break
            }
            case('add'): {
                await add(mangas)
                break
            }
            case('delete'): {
                await del(mangas)
                break
            }
            case('exit'): {
                exit()
                break
            }
        }

        await input({
            message: chalk.dim('\nTekan Enter untuk kembali...'),
            theme: {
                prefix: ''
            }
        })

    }
}

main()