import type { Manga } from "../models/manga"
import { Genre } from "../models/genre"

export const mangas: Manga[] = [
    {
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.MARTIAL_ARTS],
        tags: [
            // Tema & Narasi
            'coming-of-age', 'redemption', 'war', 'cycle-of-violence', 'found-family', 'rivalry',
            // Protagonis
            'underdog-protagonist', 'never-give-up',
            // Atmosfer
            'hopeful', 'emotional', 'bittersweet',
            // Elemen dunia
            'power-system', 'ninja', 'political-intrigue',
            // Format
            'long-running', 'completed'
        ]
    },
    {
        title: 'One Piece',
        author: 'Eiichiro Oda',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.FANTASY],
        tags: [
            'found-family', 'freedom', 'coming-of-age', 'friendship',
            'underdog-protagonist', 'never-give-up',
            'hopeful', 'fun', 'emotional',
            'world-building', 'political-intrigue', 'ensemble-cast',
            'long-running'
        ]
    },
    {
        title: 'Bleach',
        author: 'Tite Kubo',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL],
        tags: [
            'power-up', 'rivalry', 'identity',
            'cool-protagonist',
            'stylish', 'action-heavy',
            'spirit-world', 'sword-fight',
            'long-running', 'completed'
        ]
    },
    {
        title: 'Attack on Titan',
        author: 'Hajime Isayama',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DRAMA, Genre.MYSTERY, Genre.THRILLER, Genre.MILITARY],
        tags: [
            'war', 'genocide', 'cycle-of-violence', 'freedom-vs-security', 'political-allegory', 'moral-ambiguity',
            'morally-grey-protagonist', 'tragedy',
            'dark', 'brutal', 'plot-twist', 'emotional',
            'world-building', 'mystery',
            'completed'
        ]
    },
    {
        title: 'Death Note',
        author: 'Tsugumi Ohba',
        genre: [Genre.SHOUNEN, Genre.MYSTERY, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.SUPERNATURAL],
        tags: [
            'justice-vs-evil', 'moral-ambiguity', 'cat-and-mouse',
            'genius-protagonist', 'villain-protagonist', 'morally-grey-protagonist',
            'dark', 'tense', 'psychological',
            'mind-game', 'mystery',
            'completed'
        ]
    },
    {
        title: 'Demon Slayer',
        author: 'Koyoharu Gotouge',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.HISTORICAL, Genre.TAISHO],
        tags: [
            'family-bond', 'sacrifice', 'redemption', 'grief',
            'underdog-protagonist', 'never-give-up',
            'emotional', 'hopeful', 'beautiful-artwork',
            'sword-fight', 'taisho-era', 'power-system',
            'completed'
        ]
    },
    {
        title: 'My Hero Academia',
        author: 'Kohei Horikoshi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SCHOOL, Genre.COMEDY, Genre.DRAMA],
        tags: [
            // Tema & Narasi
            'coming-of-age', 'found-family', 'rivalry', 'hero-vs-villain', 'sacrifice',
            'tragedy', 'war', 'cycle-of-violence', 'moral-ambiguity', 'death-of-side-characters',
            // Protagonis
            'underdog-protagonist', 'never-give-up', 'suffering-protagonist', 'morally-grey-protagonist',
            // Atmosfer
            'hopeful', 'emotional', 'dark', 'brutal', 'bittersweet',
            // Elemen dunia
            'power-system', 'school-life', 'superhero'
        ]
    },
    {
        title: 'Tokyo Ghoul',
        author: 'Sui Ishida',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.HORROR, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.DARK_FANTASY],
        tags: [
            'identity-crisis', 'discrimination', 'tragedy', 'moral-ambiguity', 'belonging',
            'anti-hero', 'morally-grey-protagonist', 'suffering-protagonist',
            'dark', 'brutal', 'psychological', 'emotional',
            'body-horror',
            'completed'
        ]
    },
    {
        title: 'Hunter x Hunter',
        author: 'Yoshihiro Togashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY],
        tags: [
            'coming-of-age', 'friendship', 'moral-ambiguity', 'dark-themes', 'subverts-tropes',
            'complex-antagonists', 'genius-protagonist',
            'dark', 'psychological', 'unexpected',
            'unique-power-system', 'world-building',
            'hiatus'
        ]
    },
    {
        title: 'Sword Art Online',
        author: 'Reki Kawahara',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.ROMANCE, Genre.ISEKAI, Genre.SCI_FI],
        tags: [
            'survival', 'romance', 'found-family',
            'overpowered-protagonist',
            'action-heavy', 'fun',
            'virtual-reality', 'trapped-in-another-world',
            'light-novel-adaptation'
        ]
    },
    {
        title: 'No Game No Life',
        author: 'Yuu Kamiya',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI, Genre.ECCHI],
        tags: [
            'strategy', 'sibling-bond',
            'overpowered-protagonist', 'genius-protagonist',
            'fun', 'colorful',
            'game-world', 'transported-to-another-world',
            'light-novel-adaptation', 'hiatus'
        ]
    },
    {
        title: 'Overlord',
        author: 'Kugane Maruyama',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.FANTASY, Genre.ISEKAI, Genre.DARK_FANTASY],
        tags: [
            'world-domination', 'strategy', 'moral-ambiguity',
            'villain-protagonist', 'overpowered-protagonist',
            'dark', 'political-intrigue',
            'ensemble-cast', 'trapped-in-another-world',
            'light-novel-adaptation'
        ]
    },
    {
        title: 'Re:Zero',
        author: 'Tappei Nagatsuki',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.FANTASY, Genre.PSYCHOLOGICAL, Genre.ISEKAI],
        tags: [
            'trauma', 'suffering', 'time-loop', 'grief', 'subverts-tropes', 'redemption',
            'suffering-protagonist',
            'dark', 'psychological', 'emotional', 'brutal',
            'trapped-in-another-world',
            'light-novel-adaptation'
        ]
    },
    {
        title: 'Fairy Tail',
        author: 'Hiro Mashima',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.COMEDY, Genre.MAGIC],
        tags: [
            'friendship', 'found-family', 'never-give-up',
            'ensemble-cast',
            'fun', 'hopeful', 'feel-good',
            'magic', 'guild',
            'long-running', 'completed'
        ]
    },
    {
        title: 'Black Clover',
        author: 'Yuki Tabata',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.FANTASY, Genre.MAGIC, Genre.SCHOOL],
        tags: [
            'rivalry', 'friendship', 'coming-of-age',
            'underdog-protagonist', 'never-give-up',
            'hopeful', 'fun', 'action-heavy',
            'magic', 'power-system'
        ]
    },
    {
        title: 'Vinland Saga',
        author: 'Makoto Yukimura',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.DRAMA, Genre.HISTORICAL],
        tags: [
            'war', 'revenge', 'redemption', 'pacifism', 'anti-war', 'suffering', 'cycle-of-violence', 'philosophy-of-violence',
            'morally-grey-protagonist', 'suffering-protagonist',
            'dark', 'brutal', 'emotional', 'philosophical', 'bittersweet',
            'historical-fiction', 'viking',
            'completed'
        ]
    },
    {
        title: 'Vagabond',
        author: 'Takehiko Inoue',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DRAMA, Genre.HISTORICAL, Genre.MARTIAL_ARTS, Genre.SAMURAI],
        tags: [
            'self-discovery', 'redemption', 'suffering', 'philosophy-of-violence', 'anti-war', 'war',
            'morally-grey-protagonist', 'suffering-protagonist',
            'philosophical', 'dark', 'emotional', 'beautiful-artwork',
            'historical-fiction', 'sword-fight',
            'hiatus'
        ]
    },
    {
        title: 'Berserk',
        author: 'Kentaro Miura',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.HORROR, Genre.DARK_FANTASY],
        tags: [
            'revenge', 'trauma', 'suffering', 'tragedy', 'war', 'cycle-of-violence', 'philosophy-of-violence', 'betrayal',
            'anti-hero', 'morally-grey-protagonist', 'suffering-protagonist',
            'dark', 'brutal', 'gore', 'philosophical', 'emotional', 'bittersweet',
            'medieval', 'world-building',
            'ongoing'
        ]
    },
    {
        title: 'Jujutsu Kaisen',
        author: 'Gege Akutami',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.HORROR, Genre.DARK_FANTASY],
        tags: [
            'sacrifice', 'tragedy', 'moral-ambiguity', 'death-of-side-characters', 'subverts-tropes',
            'morally-grey-protagonist', 'suffering-protagonist',
            'dark', 'brutal', 'action-heavy',
            'power-system', 'modern-setting'
        ]
    },
    {
        title: 'Chainsaw Man',
        author: 'Tatsuki Fujimoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.HORROR, Genre.SUPERNATURAL, Genre.DARK_FANTASY],
        tags: [
            'tragedy', 'trauma', 'subverts-tropes', 'moral-ambiguity', 'dark-themes', 'existential',
            'suffering-protagonist', 'anti-hero',
            'dark', 'brutal', 'unexpected', 'dark-comedy', 'psychological',
            'modern-setting'
        ]
    },
    {
        title: 'Spy x Family',
        author: 'Tatsuya Endo',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
        tags: [
            'found-family', 'found-family-non-biological', 'family-bond', 'wholesome',
            'cool-protagonist', 'ensemble-cast',
            'feel-good', 'fun', 'heartwarming', 'comedy',
            'spy', 'action-light'
        ]
    },
    {
        title: 'Kaguya-sama: Love is War',
        author: 'Aka Akasaka',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL, Genre.PSYCHOLOGICAL],
        tags: [
            'rivalry', 'slow-burn-romance', 'pride', 'coming-of-age',
            'genius-protagonist', 'tsundere',
            'fun', 'feel-good', 'comedy',
            'mind-game', 'school-life',
            'completed'
        ]
    },
    {
        title: 'Your Lie in April',
        author: 'Naoshi Arakawa',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.ROMANCE, Genre.MUSIC, Genre.TRAGEDY],
        tags: [
            'grief', 'terminal-illness', 'healing', 'coming-of-age', 'trauma', 'loss',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'tear-jerker', 'beautiful',
            'music', 'classical-music',
            'completed'
        ]
    },
    {
        title: 'Fruits Basket',
        author: 'Natsuki Takaya',
        genre: [Genre.SHOUJO, Genre.DRAMA, Genre.ROMANCE, Genre.COMEDY, Genre.SUPERNATURAL],
        tags: [
            'healing', 'trauma', 'family-dysfunction', 'belonging', 'found-family', 'redemption',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'heartwarming', 'feel-good',
            'curse',
            'completed'
        ]
    },
    {
        title: 'Ouran High School Host Club',
        author: 'Bisco Hatori',
        genre: [Genre.SHOUJO, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL, Genre.REVERSE_HAREM],
        tags: [
            'found-family', 'friendship', 'class-difference', 'self-discovery',
            'ensemble-cast',
            'fun', 'feel-good', 'comedy', 'heartwarming', 'parody',
            'school-life', 'wealthy',
            'completed'
        ]
    },
    {
        title: 'Nana',
        author: 'Ai Yazawa',
        genre: [Genre.JOSEI, Genre.DRAMA, Genre.ROMANCE, Genre.MUSIC],
        tags: [
            'female-friendship', 'adult-life', 'love-triangle', 'loss', 'finding-purpose', 'identity',
            'ensemble-cast',
            'emotional', 'bittersweet', 'realistic',
            'music', 'band',
            'hiatus'
        ]
    },
    {
        title: 'Mushishi',
        author: 'Yuki Urushibara',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.SLICE_OF_LIFE, Genre.HISTORICAL],
        tags: [
            'grief', 'healing', 'belonging', 'nature-connection', 'acceptance',
            'lone-wanderer-protagonist',
            'atmospheric', 'meditative', 'bittersweet', 'iyashikei',
            'japanese-folklore', 'episodic', 'mystery',
            'completed'
        ]
    },
    {
        title: 'Yotsuba&!',
        author: 'Kiyohiko Azuma',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'childhood-wonder', 'family-bond', 'found-family-non-biological',
            'child-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'no-conflict',
            'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Dragon Ball Z',
        author: 'Akira Toriyama',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.MARTIAL_ARTS, Genre.SCI_FI],
        tags: [
            'friendship', 'family-bond', 'sacrifice', 'rivalry',
            'never-give-up', 'overpowered-protagonist',
            'fun', 'action-heavy', 'iconic',
            'power-system', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Nichijou',
        author: 'Keiichi Arawi',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship', 'school-life',
            'ensemble-cast',
            'fun', 'absurd-comedy', 'heartwarming', 'feel-good',
            'daily-life',
            'completed'
        ]
    },
    {
        title: 'Non Non Biyori',
        author: 'Atto',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'childhood-wonder', 'friendship',
            'child-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'meditative', 'no-conflict',
            'rural', 'nature-connection', 'daily-life'
        ]
    },
    {
        title: 'Barakamon',
        author: 'Satsuki Yoshino',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
        tags: [
            'self-discovery', 'finding-purpose', 'healing', 'community', 'found-family',
            'adult-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'comedy',
            'rural', 'nature-connection', 'art',
            'completed'
        ]
    },
    {
        title: "Chi's Sweet Home",
        author: 'Konami Kanata',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'family-bond', 'belonging',
            'animal-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'no-conflict', 'cute',
            'daily-life',
            'completed'
        ]
    },
    {
        title: 'Takagi-san',
        author: 'Sōichirō Yamamoto',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.ROMANCE, Genre.SCHOOL],
        tags: [
            'slow-burn-romance', 'friendship', 'childhood-wonder',
            'ensemble-cast',
            'heartwarming', 'feel-good', 'wholesome', 'comedy',
            'school-life', 'daily-life'
        ]
    },
    {
        title: 'Azumanga Daioh',
        author: 'Kiyohiko Azuma',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship', 'school-life',
            'ensemble-cast',
            'fun', 'absurd-comedy', 'heartwarming', 'feel-good',
            'daily-life',
            'completed'
        ]
    },
    {
        title: 'Aria',
        author: 'Kozue Amano',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.SCI_FI, Genre.FANTASY],
        tags: [
            'finding-purpose', 'healing', 'self-discovery', 'nature-connection', 'belonging',
            'lone-wanderer-protagonist',
            'meditative', 'iyashikei', 'utopian', 'atmospheric', 'beautiful',
            'world-building',
            'completed'
        ]
    },
    {
        title: 'Yuru Camp',
        author: 'Afro',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'friendship', 'nature-connection', 'self-discovery',
            'introvert-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'meditative',
            'outdoor', 'daily-life', 'educational'
        ]
    },
    {
        title: 'Flying Witch',
        author: 'Chihiro Ishizuka',
        genre: [Genre.SHOUNEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MAGIC, Genre.SUPERNATURAL],
        tags: [
            'coming-of-age', 'family-bond', 'found-family', 'nature-connection', 'community',
            'ensemble-cast',
            'heartwarming', 'feel-good', 'iyashikei', 'meditative',
            'rural', 'magic', 'daily-life'
        ]
    },
    {
        title: 'K-ON!',
        author: 'Kakifly',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'friendship', 'finding-purpose', 'coming-of-age',
            'ensemble-cast',
            'heartwarming', 'feel-good', 'iyashikei', 'comedy',
            'school-life', 'music', 'band',
            'completed'
        ]
    },
    {
        title: 'A Man and His Cat',
        author: 'Umi Sakurai',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'healing', 'loneliness', 'belonging', 'grief',
            'adult-protagonist', 'lone-wanderer-protagonist',
            'heartwarming', 'feel-good', 'iyashikei', 'bittersweet',
            'daily-life'
        ]
    },
    {
        title: 'March Comes in Like a Lion',
        author: 'Chica Umino',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.SPORTS],
        tags: [
            'depression', 'healing', 'loneliness', 'found-family', 'belonging', 'grief', 'trauma',
            'suffering-protagonist', 'introvert-protagonist',
            'emotional', 'bittersweet', 'feel-good', 'psychological',
            'coming-of-age', 'prodigy',
            'ongoing'
        ]
    },
    {
        title: 'A Silent Voice',
        author: 'Yoshitoki Oima',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
        tags: [
            'redemption', 'guilt', 'forgiveness', 'depression', 'loneliness', 'disability', 'belonging', 'trauma',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'tear-jerker', 'psychological',
            'coming-of-age',
            'completed'
        ]
    },
    {
        title: 'Silver Spoon',
        author: 'Hiromu Arakawa',
        genre: [Genre.SHOUNEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.DRAMA, Genre.SCHOOL],
        tags: [
            'self-discovery', 'finding-purpose', 'coming-of-age', 'community',
            'suffering-protagonist',
            'feel-good', 'heartwarming', 'comedy', 'educational',
            'school-life', 'rural',
            'completed'
        ]
    },
    {
        title: 'Delicious in Dungeon',
        author: 'Ryoko Kui',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.FANTASY, Genre.COMEDY, Genre.COOKING],
        tags: [
            'found-family', 'family-bond', 'self-discovery',
            'ensemble-cast',
            'feel-good', 'fun', 'heartwarming', 'comedy',
            'world-building', 'unique-premise', 'dungeon', 'food',
            'completed'
        ]
    },
    {
        title: "Frieren: Beyond Journey's End",
        author: 'Kanehito Yamada',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.FANTASY, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'grief', 'mortality', 'loss', 'found-family', 'healing', 'belonging', 'acceptance',
            'lone-wanderer-protagonist',
            'philosophical', 'bittersweet', 'meditative', 'emotional', 'beautiful',
            'world-building', 'post-adventure',
            'completed'
        ]
    },
    {
        title: 'Honey and Clover',
        author: 'Chica Umino',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.ROMANCE, Genre.COMEDY],
        tags: [
            'unrequited-love', 'finding-purpose', 'adult-life', 'friendship', 'coming-of-age', 'loss',
            'ensemble-cast',
            'emotional', 'bittersweet', 'feel-good', 'realistic',
            'art', 'school-life',
            'completed'
        ]
    },
    {
        title: 'Genshiken',
        author: 'Shimoku Kio',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'belonging', 'finding-purpose', 'adult-life', 'friendship', 'identity',
            'introvert-protagonist', 'ensemble-cast',
            'feel-good', 'comedy', 'realistic',
            'school-life', 'otaku-culture',
            'completed'
        ]
    },
    {
        title: 'Hidamari Sketch',
        author: 'Ume Aoki',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.SCHOOL],
        tags: [
            'friendship', 'finding-purpose', 'coming-of-age',
            'ensemble-cast',
            'heartwarming', 'feel-good', 'iyashikei', 'comedy',
            'school-life', 'art', 'daily-life'
        ]
    },
    {
        title: "Natsume's Book of Friends",
        author: 'Yuki Midorikawa',
        genre: [Genre.SHOUJO, Genre.SLICE_OF_LIFE, Genre.SUPERNATURAL, Genre.DRAMA, Genre.FANTASY],
        tags: [
            'loneliness', 'belonging', 'healing', 'found-family', 'acceptance', 'grief',
            'introvert-protagonist', 'suffering-protagonist',
            'heartwarming', 'emotional', 'bittersweet', 'iyashikei', 'atmospheric', 'meditative',
            'japanese-folklore', 'episodic',
            'ongoing'
        ]
    },
    {
        title: 'Wotakoi: Love is Hard for Otaku',
        author: 'Fujita',
        genre: [Genre.JOSEI, Genre.ROMANCE, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'found-family', 'adult-life', 'slow-burn-romance', 'belonging', 'friendship',
            'introvert-protagonist',
            'feel-good', 'wholesome', 'comedy', 'heartwarming',
            'otaku-culture', 'workplace',
            'completed'
        ]
    },
    {
        title: 'Sailor Moon',
        author: 'Naoko Takeuchi',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.ROMANCE, Genre.FANTASY, Genre.MAGIC],
        tags: [
            'friendship', 'found-family', 'love-story', 'sacrifice', 'reincarnation',
            'ensemble-cast',
            'hopeful', 'fun', 'iconic', 'feel-good',
            'magic', 'magical-girl',
            'completed'
        ]
    },
    {
        title: 'Cardcaptor Sakura',
        author: 'CLAMP',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.ROMANCE, Genre.FANTASY, Genre.MAGIC, Genre.SCHOOL],
        tags: [
            'friendship', 'found-family', 'love-story', 'coming-of-age',
            'child-protagonist',
            'heartwarming', 'fun', 'iconic', 'feel-good', 'cute',
            'magic', 'magical-girl', 'school-life',
            'completed'
        ]
    },
    {
        title: 'Fullmetal Alchemist',
        author: 'Hiromu Arakawa',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.DRAMA],
        tags: [
            'brotherhood', 'sacrifice', 'war', 'redemption', 'family-bond', 'moral-ambiguity', 'found-family',
            'never-give-up', 'morally-grey-protagonist',
            'emotional', 'hopeful', 'action-heavy', 'philosophical',
            'world-building', 'power-system',
            'completed'
        ]
    },
    {
        title: 'Made in Abyss',
        author: 'Akihito Tsukushi',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.FANTASY, Genre.MYSTERY, Genre.HORROR],
        tags: [
            'sacrifice', 'grief', 'loss', 'suffering', 'trauma', 'found-family',
            'child-protagonist', 'suffering-protagonist',
            'dark', 'brutal', 'bittersweet', 'atmospheric',
            'world-building', 'mystery', 'exploration',
            'ongoing'
        ]
    },
    {
        title: 'Slam Dunk',
        author: 'Takehiko Inoue',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY, Genre.DRAMA],
        tags: [
            'coming-of-age', 'rivalry', 'teamwork', 'finding-purpose', 'friendship',
            'underdog-protagonist', 'never-give-up',
            'fun', 'hopeful', 'feel-good', 'iconic',
            'basketball', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Haikyu!!',
        author: 'Haruichi Furudate',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY, Genre.DRAMA],
        tags: [
            'coming-of-age', 'rivalry', 'teamwork', 'finding-purpose', 'friendship', 'found-family',
            'underdog-protagonist', 'never-give-up',
            'fun', 'hopeful', 'emotional', 'feel-good',
            'volleyball', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Kuroko no Basket',
        author: 'Tadatoshi Fujimaki',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY],
        tags: [
            'teamwork', 'rivalry', 'friendship', 'finding-purpose',
            'underdog-protagonist',
            'fun', 'action-heavy',
            'basketball', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Ping Pong the Animation',
        author: 'Taiyou Matsumoto',
        genre: [Genre.SEINEN, Genre.SPORTS, Genre.DRAMA, Genre.PSYCHOLOGICAL],
        tags: [
            'rivalry', 'identity', 'finding-purpose', 'self-discovery', 'coming-of-age', 'talent-vs-effort',
            'suffering-protagonist',
            'philosophical', 'emotional', 'psychological', 'bittersweet',
            'tournament',
            'completed'
        ]
    },
    {
        title: 'Kaiji',
        author: 'Nobuyuki Fukumoto',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.DRAMA, Genre.GAME],
        tags: [
            'survival', 'desperation', 'class-difference', 'moral-ambiguity',
            'suffering-protagonist',
            'dark', 'tense', 'psychological',
            'mind-game', 'gambling',
            'ongoing'
        ]
    },
    {
        title: 'Akagi',
        author: 'Nobuyuki Fukumoto',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.GAME],
        tags: [
            'survival', 'moral-ambiguity',
            'genius-protagonist', 'cool-protagonist',
            'dark', 'tense', 'psychological',
            'mind-game', 'gambling',
            'completed'
        ]
    },
    {
        title: 'Monster',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.PSYCHOLOGICAL, Genre.DRAMA],
        tags: [
            'moral-ambiguity', 'redemption', 'cat-and-mouse', 'finding-purpose', 'identity',
            'morally-grey-protagonist', 'genius-protagonist',
            'dark', 'tense', 'psychological', 'realistic',
            'mystery',
            'completed'
        ]
    },
    {
        title: '20th Century Boys',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.SCI_FI, Genre.DRAMA],
        tags: [
            'friendship', 'conspiracy', 'nostalgia', 'finding-purpose', 'moral-ambiguity',
            'ensemble-cast',
            'dark', 'tense', 'psychological', 'emotional',
            'mystery',
            'completed'
        ]
    },
    {
        title: 'Pluto',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.MYSTERY, Genre.DRAMA],
        tags: [
            'war', 'grief', 'identity', 'moral-ambiguity', 'anti-war',
            'suffering-protagonist',
            'dark', 'emotional', 'philosophical',
            'mystery', 'robot',
            'completed'
        ]
    },
    {
        title: 'Doraemon',
        author: 'Fujiko F. Fujio',
        genre: [Genre.KODOMOMUKE, Genre.COMEDY, Genre.SCI_FI, Genre.SLICE_OF_LIFE, Genre.ADVENTURE],
        tags: [
            'friendship', 'family-bond', 'childhood-wonder',
            'child-protagonist',
            'fun', 'heartwarming', 'feel-good', 'iconic',
            'daily-life',
            'long-running'
        ]
    },
    {
        title: 'Dragon Ball',
        author: 'Akira Toriyama',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.MARTIAL_ARTS, Genre.FANTASY],
        tags: [
            'friendship', 'coming-of-age', 'rivalry', 'tournament',
            'underdog-protagonist', 'never-give-up',
            'fun', 'action-heavy', 'iconic',
            'power-system', 'martial-arts',
            'completed'
        ]
    },
    {
        title: 'Rurouni Kenshin',
        author: 'Nobuhiro Watsuki',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.HISTORICAL, Genre.SAMURAI, Genre.ROMANCE, Genre.DRAMA],
        tags: [
            'redemption', 'guilt', 'found-family', 'anti-war', 'philosophy-of-violence',
            'morally-grey-protagonist', 'suffering-protagonist',
            'emotional', 'bittersweet', 'action-heavy',
            'historical-fiction', 'sword-fight',
            'completed'
        ]
    },
    {
        title: 'Inuyasha',
        author: 'Rumiko Takahashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.ROMANCE, Genre.SUPERNATURAL, Genre.HISTORICAL],
        tags: [
            'found-family', 'romance', 'belonging', 'rivalry',
            'ensemble-cast',
            'fun', 'action-heavy', 'hopeful',
            'historical-fiction', 'time-travel',
            'long-running', 'completed'
        ]
    },
    {
        title: 'Ranma 1/2',
        author: 'Rumiko Takahashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.ROMANCE, Genre.MARTIAL_ARTS, Genre.GENDER_BENDER],
        tags: [
            'rivalry', 'romance', 'identity',
            'ensemble-cast',
            'fun', 'absurd-comedy',
            'martial-arts', 'gender-swap',
            'completed'
        ]
    },
    {
        title: 'Yu Yu Hakusho',
        author: 'Yoshihiro Togashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.ADVENTURE],
        tags: [
            'friendship', 'found-family', 'rivalry', 'redemption', 'coming-of-age',
            'anti-hero', 'cool-protagonist',
            'fun', 'action-heavy', 'hopeful',
            'power-system', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Shaman King',
        author: 'Hiroyuki Takei',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.SUPERNATURAL, Genre.COMEDY],
        tags: [
            'friendship', 'found-family', 'rivalry', 'acceptance',
            'ensemble-cast',
            'fun', 'action-heavy', 'hopeful',
            'japanese-folklore', 'tournament',
            'completed'
        ]
    },
    {
        title: 'Oshi no Ko',
        author: 'Aka Akasaka',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.IDOL],
        tags: [
            'revenge', 'identity', 'grief', 'trauma', 'moral-ambiguity', 'reincarnation',
            'morally-grey-protagonist', 'suffering-protagonist',
            'dark', 'tense', 'emotional', 'unexpected', 'psychological',
            'mystery', 'celebrity',
            'ongoing'
        ]
    },
    {
        title: 'Bocchi the Rock!',
        author: 'Aki Hamaji',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'social-anxiety', 'loneliness', 'belonging', 'finding-purpose', 'friendship', 'coming-of-age',
            'introvert-protagonist', 'lack-of-communication',
            'heartwarming', 'feel-good', 'comedy', 'bittersweet',
            'school-life', 'music', 'band',
            'completed'
        ]
    },
    {
        title: 'Uzaki-chan Wants to Hang Out!',
        author: 'Take',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.ROMANCE],
        tags: [
            'friendship', 'slow-burn-romance', 'coming-of-age',
            'introvert-protagonist',
            'fun', 'comedy', 'feel-good',
            'school-life', 'college',
            'ongoing'
        ]
    },
    {
        title: 'The Way of the Househusband',
        author: 'Kousuke Oono',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'found-family', 'redemption',
            'adult-protagonist',
            'fun', 'absurd-comedy',
            'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Witch Hat Atelier',
        author: 'Kamome Shirahama',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.FANTASY, Genre.MAGIC, Genre.DRAMA],
        tags: [
            'finding-purpose', 'coming-of-age', 'belonging', 'friendship',
            'underdog-protagonist',
            'beautiful-artwork', 'atmospheric',
            'world-building', 'magic',
            'ongoing'
        ]
    },
    {
        title: 'The Girl from the Other Side',
        author: 'Nagabe',
        genre: [Genre.SEINEN, Genre.FANTASY, Genre.DRAMA, Genre.SUPERNATURAL, Genre.DARK_FANTASY],
        tags: [
            'found-family-non-biological', 'grief', 'loneliness', 'belonging', 'sacrifice',
            'child-protagonist',
            'atmospheric', 'bittersweet', 'dark', 'beautiful',
            'dark-fairy-tale',
            'completed'
        ]
    },
    {
        title: 'To Your Eternity',
        author: 'Yoshitoki Oima',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.DRAMA, Genre.SUPERNATURAL, Genre.FANTASY],
        tags: [
            'grief', 'loss', 'mortality', 'belonging', 'healing', 'found-family', 'sacrifice', 'coming-of-age',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'tear-jerker',
            'episodic',
            'ongoing'
        ]
    },
    {
        title: 'Goodnight Punpun',
        author: 'Inio Asano',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.PSYCHOLOGICAL, Genre.SLICE_OF_LIFE],
        tags: [
            'depression', 'trauma', 'loneliness', 'identity-crisis', 'family-dysfunction', 'guilt', 'loss',
            'suffering-protagonist',
            'dark', 'brutal', 'psychological', 'realistic', 'surreal',
            'coming-of-age',
            'completed'
        ]
    },
    {
        title: 'Solanin',
        author: 'Inio Asano',
        genre: [Genre.JOSEI, Genre.DRAMA, Genre.SLICE_OF_LIFE, Genre.MUSIC],
        tags: [
            'finding-purpose', 'grief', 'loss', 'adult-life', 'identity',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'realistic',
            'music', 'band',
            'completed'
        ]
    },
    {
        title: 'I Am a Hero',
        author: 'Kengo Hanazawa',
        genre: [Genre.SEINEN, Genre.HORROR, Genre.ACTION, Genre.DRAMA, Genre.PSYCHOLOGICAL],
        tags: [
            'survival', 'identity-crisis', 'depression', 'trauma',
            'suffering-protagonist',
            'dark', 'brutal', 'gore', 'realistic', 'psychological',
            'zombie', 'post-apocalyptic',
            'completed'
        ]
    },
    {
        title: 'Golden Kamuy',
        author: 'Satoru Noda',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.HISTORICAL, Genre.COMEDY, Genre.COOKING],
        tags: [
            'found-family', 'survival', 'friendship', 'betrayal', 'redemption',
            'ensemble-cast', 'morally-grey-protagonist',
            'dark', 'fun', 'unexpected', 'comedy',
            'historical-fiction', 'food',
            'completed'
        ]
    },
    {
        title: 'Planetes',
        author: 'Makoto Yukimura',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'finding-purpose', 'adult-life', 'self-discovery', 'love-story', 'sacrifice',
            'adult-protagonist',
            'emotional', 'realistic', 'bittersweet', 'philosophical',
            'world-building',
            'completed'
        ]
    },
    {
        title: 'Otoyomegatari',
        author: 'Kaoru Mori',
        genre: [Genre.SEINEN, Genre.HISTORICAL, Genre.ROMANCE, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'love-story', 'community', 'family-bond', 'belonging',
            'ensemble-cast',
            'beautiful-artwork', 'meditative', 'bittersweet',
            'historical-fiction', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: "A Bride's Story",
        author: 'Kaoru Mori',
        genre: [Genre.SEINEN, Genre.HISTORICAL, Genre.ROMANCE, Genre.DRAMA],
        tags: [
            'love-story', 'community', 'family-bond', 'belonging', 'survival',
            'ensemble-cast',
            'beautiful-artwork', 'bittersweet',
            'historical-fiction',
            'ongoing'
        ]
    },
    {
        title: 'Emma',
        author: 'Kaoru Mori',
        genre: [Genre.SEINEN, Genre.HISTORICAL, Genre.ROMANCE, Genre.DRAMA],
        tags: [
            'love-story', 'class-difference', 'belonging', 'self-discovery',
            'adult-protagonist',
            'beautiful-artwork', 'emotional', 'bittersweet',
            'historical-fiction',
            'completed'
        ]
    },
    {
        title: 'Bunny Drop',
        author: 'Yumi Unita',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.COMEDY],
        tags: [
            'found-family-non-biological', 'family-bond', 'healing', 'adult-life',
            'adult-protagonist', 'child-protagonist',
            'heartwarming', 'feel-good', 'bittersweet',
            'daily-life',
            'completed'
        ]
    },
    {
        title: 'My Neighbor Seki',
        author: 'Takuma Morishige',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship',
            'ensemble-cast',
            'fun', 'absurd-comedy',
            'school-life', 'daily-life',
            'completed'
        ]
    },
    {
        title: 'Teasing Master Takagi-san',
        author: 'Sōichirō Yamamoto',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.ROMANCE, Genre.SCHOOL],
        tags: [
            'slow-burn-romance', 'friendship', 'childhood-wonder',
            'ensemble-cast',
            'heartwarming', 'feel-good', 'wholesome', 'comedy',
            'school-life', 'daily-life',
            'completed'
        ]
    },
    {
        title: 'Skip and Loafer',
        author: 'Misaki Takamatsu',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.ROMANCE, Genre.COMEDY, Genre.SCHOOL],
        tags: [
            'coming-of-age', 'friendship', 'slow-burn-romance', 'self-discovery', 'belonging',
            'underdog-protagonist',
            'feel-good', 'wholesome', 'heartwarming', 'comedy',
            'school-life', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Neon Genesis Evangelion',
        author: 'Yoshiyuki Sadamoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.MECHA, Genre.PSYCHOLOGICAL, Genre.SCI_FI, Genre.DARK_FANTASY],
        tags: [
            'depression', 'trauma', 'identity-crisis', 'loneliness', 'belonging', 'family-dysfunction', 'existential',
            'suffering-protagonist', 'introvert-protagonist',
            'dark', 'psychological', 'philosophical', 'iconic',
            'world-building',
            'completed'
        ]
    },
    {
        title: 'Code Geass: Lelouch of the Rebellion',
        author: 'Majiko!',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.MECHA, Genre.PSYCHOLOGICAL, Genre.MILITARY, Genre.DRAMA],
        tags: [
            'sacrifice', 'revenge', 'redemption', 'betrayal', 'moral-ambiguity', 'political-intrigue',
            'genius-protagonist', 'morally-grey-protagonist', 'villain-protagonist',
            'dark', 'tense', 'emotional', 'action-heavy',
            'mind-game', 'strategy',
            'completed'
        ]
    },
    {
        title: 'Gundam: The Origin',
        author: 'Yoshikazu Yasuhiko',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.MECHA, Genre.MILITARY, Genre.SCI_FI, Genre.DRAMA],
        tags: [
            'war', 'anti-war', 'cycle-of-violence', 'moral-ambiguity', 'sacrifice',
            'morally-grey-protagonist',
            'dark', 'action-heavy', 'beautiful-artwork',
            'political-intrigue', 'world-building',
            'completed'
        ]
    },
    {
        title: 'Kingdom',
        author: 'Yasuhisa Hara',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.HISTORICAL, Genre.MILITARY, Genre.DRAMA],
        tags: [
            'war', 'coming-of-age', 'rivalry', 'betrayal', 'found-family',
            'underdog-protagonist', 'never-give-up',
            'action-heavy', 'dark', 'brutal',
            'strategy', 'historical-fiction',
            'long-running', 'ongoing'
        ]
    },
    {
        title: 'Blame!',
        author: 'Tsutomu Nihei',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.ACTION, Genre.HORROR, Genre.POST_APOCALYPTIC, Genre.CYBERPUNK],
        tags: [
            'loneliness', 'survival', 'identity',
            'lone-wanderer-protagonist',
            'dark', 'atmospheric', 'brutal',
            'world-building', 'dystopia',
            'completed'
        ]
    },
    {
        title: 'That Time I Got Reincarnated as a Slime',
        author: 'Taiki Kawakami',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI],
        tags: [
            'found-family', 'friendship', 'community', 'political-intrigue',
            'overpowered-protagonist',
            'fun', 'feel-good', 'hopeful',
            'world-building', 'trapped-in-another-world', 'nation-building',
            'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        title: 'Mushoku Tensei: Jobless Reincarnation',
        author: 'Fujikawa Yuka',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.DRAMA, Genre.FANTASY, Genre.ISEKAI, Genre.REINCARNATION],
        tags: [
            'redemption', 'self-discovery', 'coming-of-age', 'found-family', 'romance',
            'suffering-protagonist',
            'emotional', 'bittersweet',
            'world-building', 'trapped-in-another-world', 'magic',
            'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        title: 'The Eminence in Shadow',
        author: 'Anri Sakano',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI],
        tags: [
            'friendship', 'rivalry',
            'overpowered-protagonist', 'cool-protagonist',
            'fun', 'absurd-comedy', 'parody', 'self-aware',
            'trapped-in-another-world',
            'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        title: 'My Next Life as a Villainess: All Routes Lead to Doom!',
        author: 'Nami Hidaka',
        genre: [Genre.SHOUJO, Genre.COMEDY, Genre.ROMANCE, Genre.FANTASY, Genre.ISEKAI, Genre.VILLAINESS, Genre.OTOME_GAME, Genre.REINCARNATION],
        tags: [
            'found-family', 'friendship', 'subverts-tropes', 'romance',
            'ensemble-cast',
            'fun', 'feel-good', 'wholesome', 'comedy', 'parody',
            'trapped-in-another-world',
            'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        title: 'Blue Period',
        author: 'Tsubasa Yamaguchi',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.SCHOOL],
        tags: [
            'finding-purpose', 'self-discovery', 'coming-of-age', 'identity', 'belonging',
            'suffering-protagonist', 'introvert-protagonist',
            'emotional', 'realistic', 'bittersweet',
            'art', 'school-life',
            'ongoing'
        ]
    },
    {
        title: 'Food Wars!: Shokugeki no Soma',
        author: 'Yuto Tsukuda',
        genre: [Genre.SHOUNEN, Genre.COOKING, Genre.SCHOOL, Genre.COMEDY, Genre.DRAMA, Genre.GOURMET],
        tags: [
            'rivalry', 'coming-of-age', 'finding-purpose', 'never-give-up',
            'underdog-protagonist',
            'fun', 'feel-good', 'action-heavy',
            'school-life', 'food',
            'completed'
        ]
    },
    {
        title: 'Hikaru no Go',
        author: 'Yumi Hotta',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.SUPERNATURAL, Genre.DRAMA, Genre.SHOGI_GO],
        tags: [
            'coming-of-age', 'rivalry', 'finding-purpose', 'friendship', 'grief',
            'underdog-protagonist', 'prodigy',
            'emotional', 'feel-good', 'bittersweet',
            'mind-game', 'ghost',
            'completed'
        ]
    },
    {
        title: 'Kuroshitsuji',
        author: 'Yana Toboso',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.HISTORICAL, Genre.DARK_FANTASY],
        tags: [
            'revenge', 'betrayal', 'moral-ambiguity', 'sacrifice', 'guilt',
            'morally-grey-protagonist',
            'dark', 'stylish', 'tense',
            'mystery', 'historical-fiction',
            'ongoing'
        ]
    },
    {
        title: 'Given',
        author: 'Natsuki Kizu',
        genre: [Genre.JOSEI, Genre.ROMANCE, Genre.DRAMA, Genre.MUSIC, Genre.BOYS_LOVE],
        tags: [
            'grief', 'healing', 'first-love', 'belonging', 'finding-purpose',
            'introvert-protagonist', 'suffering-protagonist',
            'emotional', 'bittersweet',
            'music', 'band',
            'ongoing'
        ]
    },
    {
        title: 'My Dress-Up Darling',
        author: 'Shinichi Fukuda',
        genre: [Genre.SEINEN, Genre.ROMANCE, Genre.COMEDY, Genre.SCHOOL, Genre.OTAKU],
        tags: [
            'slow-burn-romance', 'finding-purpose', 'self-discovery', 'belonging', 'friendship',
            'introvert-protagonist',
            'feel-good', 'wholesome', 'heartwarming', 'comedy',
            'school-life', 'otaku-culture',
            'ongoing'
        ]
    },
    {
        title: 'World Trigger',
        author: 'Daisuke Ashihara',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SCI_FI, Genre.MILITARY],
        tags: [
            'teamwork', 'strategy', 'coming-of-age', 'rivalry', 'found-family',
            'underdog-protagonist',
            'action-heavy',
            'world-building', 'power-system',
            'ongoing'
        ]
    },
    {
        title: 'Classroom of the Elite',
        author: 'Yuyu Ichino',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.SCHOOL, Genre.MYSTERY],
        tags: [
            'strategy', 'moral-ambiguity', 'survival', 'identity', 'betrayal',
            'genius-protagonist', 'morally-grey-protagonist',
            'dark', 'tense', 'psychological',
            'mind-game', 'school-life',
            'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        title: 'Talentless Nana',
        author: 'Looseboy',
        genre: [Genre.SHOUNEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.BATTLE_ROYALE],
        tags: [
            'survival', 'betrayal', 'moral-ambiguity', 'identity', 'cat-and-mouse',
            'morally-grey-protagonist',
            'dark', 'tense', 'psychological', 'unexpected',
            'mind-game', 'mystery',
            'ongoing'
        ]
    },
    {
        title: 'Dorohedoro',
        author: 'Q Hayashida',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DARK_FANTASY, Genre.HORROR, Genre.COMEDY],
        tags: [
            'found-family', 'identity-crisis', 'belonging', 'survival',
            'ensemble-cast', 'morally-grey-protagonist',
            'dark', 'brutal', 'unexpected', 'dark-comedy',
            'world-building',
            'completed'
        ]
    },
    {
        title: 'Thermae Romae',
        author: 'Mari Yamazaki',
        genre: [Genre.JOSEI, Genre.COMEDY, Genre.HISTORICAL, Genre.TIME_TRAVEL],
        tags: [
            'finding-purpose', 'self-discovery',
            'adult-protagonist',
            'fun', 'absurd-comedy', 'educational',
            'historical-fiction', 'time-travel',
            'completed'
        ]
    },
    {
        title: 'Komi Can\'t Communicate',
        author: 'Tomohito Oda',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL, Genre.SLICE_OF_LIFE],
        tags: [
            'social-anxiety', 'loneliness', 'belonging', 'friendship', 'coming-of-age',
            'introvert-protagonist', 'lack-of-communication',
            'heartwarming', 'feel-good', 'comedy', 'wholesome',
            'school-life', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Monthly Girls\' Nozaki-kun',
        author: 'Izumi Tsubaki',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL],
        tags: [
            'slow-burn-romance', 'friendship', 'found-family',
            'ensemble-cast',
            'fun', 'absurd-comedy', 'feel-good', 'parody',
            'school-life',
            'ongoing'
        ]
    },
    {
        title: 'Skip and Loafer',
        author: 'Misaki Takamatsu',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.ROMANCE, Genre.COMEDY, Genre.SCHOOL],
        tags: [
            'coming-of-age', 'friendship', 'slow-burn-romance', 'self-discovery', 'belonging',
            'underdog-protagonist',
            'feel-good', 'wholesome', 'heartwarming', 'comedy',
            'school-life', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Wakako-zake',
        author: 'Chie Shinohara',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.GOURMET, Genre.WORK_LIFE],
        tags: [
            'loneliness', 'self-discovery', 'adult-life',
            'adult-protagonist', 'introvert-protagonist',
            'meditative', 'iyashikei', 'bittersweet',
            'food', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'March Comes in Like a Lion',
        author: 'Chica Umino',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.SPORTS],
        tags: [
            'depression', 'healing', 'loneliness', 'found-family', 'belonging', 'grief', 'trauma',
            'suffering-protagonist', 'introvert-protagonist',
            'emotional', 'bittersweet', 'feel-good', 'psychological',
            'coming-of-age', 'prodigy',
            'ongoing'
        ]
    },
    {
        title: 'Kakukaku Shikajika',
        author: 'Akiko Higashimura',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.COMEDY],
        tags: [
            'coming-of-age', 'self-discovery', 'finding-purpose', 'grief', 'mentor', 'adult-life',
            'suffering-protagonist',
            'emotional', 'bittersweet', 'realistic',
            'art',
            'completed'
        ]
    },
    {
        title: 'Sunny',
        author: 'Taiyo Matsumoto',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'loneliness', 'belonging', 'grief', 'family-dysfunction', 'childhood-wonder', 'found-family',
            'child-protagonist', 'suffering-protagonist',
            'emotional', 'bittersweet', 'atmospheric',
            'daily-life',
            'completed'
        ]
    },
    {
        title: 'Dinosaur Sanctuary',
        author: 'Itaru Kinoshita',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA],
        tags: [
            'finding-purpose', 'community', 'adult-life',
            'adult-protagonist',
            'heartwarming', 'feel-good', 'educational',
            'workplace', 'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Mitsuboshi Colors',
        author: 'Katsuwo',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'childhood-wonder', 'friendship',
            'child-protagonist', 'ensemble-cast',
            'heartwarming', 'feel-good', 'no-conflict', 'fun',
            'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Ichigo Mashimaro',
        author: 'Barasui',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'childhood-wonder', 'friendship',
            'child-protagonist', 'ensemble-cast',
            'heartwarming', 'feel-good', 'absurd-comedy', 'cute',
            'daily-life',
            'ongoing'
        ]
    },
    {
        title: 'Wolf Children',
        author: 'Mamoru Hosoda',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.FANTASY, Genre.SLICE_OF_LIFE, Genre.KEMONO],
        tags: [
            'motherhood', 'coming-of-age', 'grief', 'loss', 'belonging', 'family-bond', 'self-discovery',
            'child-protagonist',
            'emotional', 'bittersweet', 'tear-jerker',
            'rural',
            'completed'
        ]
    },
    {
        title: 'Fuuka',
        author: 'Kouji Seo',
        genre: [Genre.SHOUNEN, Genre.ROMANCE, Genre.DRAMA, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'romance', 'grief', 'finding-purpose', 'friendship', 'loss',
            'suffering-protagonist',
            'emotional', 'bittersweet',
            'school-life', 'music', 'band',
            'completed'
        ]
    },
    {
        title: 'Erased',
        author: 'Kei Sanbe',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.SUPERNATURAL],
        tags: [
            // Tema & Narasi
            'redemption', 'guilt', 'grief', 'trauma', 'family-dysfunction', 'betrayal', 'time-loop',
            // Protagonis
            'suffering-protagonist', 'morally-grey-protagonist',
            // Atmosfer
            'dark', 'tense', 'emotional', 'bittersweet', 'psychological',
            // Elemen dunia
            'mystery', 'child-protagonist', 'time-travel',
            // Format
            'completed'
        ]
    },
]