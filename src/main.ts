import { searchManga } from './algorithms/string-matching';
import readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'node:process';
const rl = readline.createInterface({ input, output });

async function main(){
    const manga = await rl.question('Ketik Manga: ')
    console.log(searchManga(manga))

}

main()