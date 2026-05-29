import type { Manga } from "../models/manga"
import { Genre } from "../models/genre"

export const mangas: Manga[] = [
    {
        id: "0W8KDNYMJ8ivC67qiHSm4",
        title: 'Naruto',
        author: 'Masashi Kishimoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.MARTIAL_ARTS],
        tags: [
            'coming-of-age', 'friendship', 'rivalry', 'redemption', 'underdog-protagonist', 'never-give-up', 'hopeful', 'emotional', 'bittersweet', 'power-system', 'ninja', 'political-intrigue', 'long-running', 'completed'
        ]
    },
    {
        id: "3Y9Bl_Tx3BXcJjvCEqWNU",
        title: 'One Piece',
        author: 'Eiichiro Oda',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.FANTASY],
        tags: [
            'coming-of-age', 'friendship', 'found-family', 'freedom', 'underdog-protagonist', 'never-give-up', 'hopeful', 'emotional', 'world-building', 'political-intrigue', 'ensemble-cast', 'long-running'
        ]
    },
    {
        id: "NS_FAjfgqJf5CgBQeS3BJ",
        title: 'Bleach',
        author: 'Tite Kubo',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL],
        tags: [
            'power-up', 'rivalry', 'identity', 'duty', 'cool-protagonist', 'action-heavy', 'spirit-world', 'sword-fight', 'long-running', 'completed'
        ]
    },
    {
        id: "6RzuyXJ0Q_dp32AeRUKro",
        title: 'Attack on Titan',
        author: 'Hajime Isayama',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DRAMA, Genre.MYSTERY, Genre.THRILLER, Genre.MILITARY],
        tags: [
            'war', 'genocide', 'cycle-of-violence', 'freedom-vs-security', 'moral-ambiguity', 'morally-grey-protagonist', 'tragedy', 'dark', 'brutal', 'plot-twist', 'emotional', 'world-building', 'mystery', 'military', 'completed'
        ]
    },
    {
        id: "vFlnYzIPT0gZCOWXyJaIu",
        title: 'Death Note',
        author: 'Tsugumi Ohba',
        genre: [Genre.SHOUNEN, Genre.MYSTERY, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.SUPERNATURAL],
        tags: [
            'justice-vs-evil', 'moral-ambiguity', 'cat-and-mouse', 'genius-protagonist', 'villain-protagonist', 'morally-grey-protagonist', 'dark', 'tense', 'psychological', 'mind-game', 'mystery', 'completed'
        ]
    },
    {
        id: "XBGZMsRWZxFPuGY1iCwN6",
        title: 'Demon Slayer',
        author: 'Koyoharu Gotouge',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.HISTORICAL, Genre.TAISHO],
        tags: [
            'family-bond', 'sacrifice', 'redemption', 'grief', 'underdog-protagonist', 'never-give-up', 'emotional', 'hopeful', 'beautiful-artwork', 'sword-fight', 'power-system', 'historical-fiction', 'completed'
        ]
    },
    {
        id: "-CGp3ZfqqrhLviaot-LEF",
        title: 'My Hero Academia',
        author: 'Kohei Horikoshi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SCHOOL, Genre.COMEDY, Genre.DRAMA],
        tags: [
            'coming-of-age', 'found-family', 'rivalry', 'hero-vs-villain', 'sacrifice', 'tragedy', 'war', 'moral-ambiguity', 'underdog-protagonist', 'never-give-up', 'hopeful', 'emotional', 'dark', 'brutal', 'bittersweet', 'power-system', 'school-life', 'superhero', 'completed'
        ]
    },
    {
        id: "4FSq9c-DV1j8o3b0v7LQi",
        title: 'Tokyo Ghoul',
        author: 'Sui Ishida',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.HORROR, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.DARK_FANTASY],
        tags: [
            'identity-crisis', 'discrimination', 'tragedy', 'moral-ambiguity', 'anti-hero', 'morally-grey-protagonist', 'suffering-protagonist', 'dark', 'brutal', 'psychological', 'emotional', 'body-horror', 'completed'
        ]
    },
    {
        id: "PJX48EtP5kLoo-Z8xENO-",
        title: 'Hunter x Hunter',
        author: 'Yoshihiro Togashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY],
        tags: [
            'coming-of-age', 'friendship', 'moral-ambiguity', 'subverts-tropes', 'complex-antagonists', 'genius-protagonist', 'dark', 'psychological', 'unexpected', 'unique-power-system', 'world-building', 'hiatus'
        ]
    },
    {
        id: "m1ybGZYmUERZbZ-9-ekvK",
        title: 'Sword Art Online',
        author: 'Reki Kawahara',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.ROMANCE, Genre.ISEKAI, Genre.SCI_FI],
        tags: [
            'survival', 'romance', 'found-family', 'overpowered-protagonist', 'action-heavy', 'virtual-reality', 'trapped-in-another-world', 'light-novel-adaptation'
        ]
    },
    {
        id: "fQEGtxJRprp0kfkXPFzWg",
        title: 'No Game No Life',
        author: 'Yuu Kamiya',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI, Genre.ECCHI],
        tags: [
            'strategy', 'sibling-bond', 'overpowered-protagonist', 'genius-protagonist', 'colorful', 'game-world', 'transported-to-another-world', 'light-novel-adaptation'
        ]
    },
    {
        id: "z5xUH3029g-ar00abUPMM",
        title: 'Overlord',
        author: 'Kugane Maruyama',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.FANTASY, Genre.ISEKAI, Genre.DARK_FANTASY],
        tags: [
            'world-domination', 'strategy', 'moral-ambiguity', 'villain-protagonist', 'overpowered-protagonist', 'dark', 'political-intrigue', 'ensemble-cast', 'trapped-in-another-world', 'light-novel-adaptation'
        ]
    },
    {
        id: "ybxzKMFfBodTXNcOB_QqI",
        title: 'Re:Zero',
        author: 'Tappei Nagatsuki',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.FANTASY, Genre.PSYCHOLOGICAL, Genre.ISEKAI],
        tags: [
            'trauma', 'suffering', 'time-loop', 'grief', 'subverts-tropes', 'redemption', 'suffering-protagonist', 'dark', 'psychological', 'emotional', 'brutal', 'trapped-in-another-world', 'light-novel-adaptation'
        ]
    },
    {
        id: "lVZQLK9-A_gOxmXyIXqDz",
        title: 'Fairy Tail',
        author: 'Hiro Mashima',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.COMEDY, Genre.MAGIC],
        tags: [
            'friendship', 'found-family', 'never-give-up', 'ensemble-cast', 'hopeful', 'feel-good', 'magic', 'guild', 'long-running', 'completed'
        ]
    },
    {
        id: "1MtInO4kgycKouzR9gvdD",
        title: 'Black Clover',
        author: 'Yuki Tabata',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.FANTASY, Genre.MAGIC, Genre.SCHOOL],
        tags: [
            'rivalry', 'friendship', 'coming-of-age', 'underdog-protagonist', 'never-give-up', 'hopeful', 'action-heavy', 'magic', 'power-system'
        ]
    },
    {
        id: "iBuG4LasaV4zqyOAXtLOG",
        title: 'Vinland Saga',
        author: 'Makoto Yukimura',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.DRAMA, Genre.HISTORICAL],
        tags: [
            'war', 'revenge', 'redemption', 'pacifism', 'anti-war', 'cycle-of-violence', 'morally-grey-protagonist', 'suffering-protagonist', 'dark', 'brutal', 'emotional', 'philosophical', 'bittersweet', 'historical-fiction', 'completed'
        ]
    },
    {
        id: "GeRJN-006hOK797NBD9gf",
        title: 'Vagabond',
        author: 'Takehiko Inoue',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DRAMA, Genre.HISTORICAL, Genre.MARTIAL_ARTS, Genre.SAMURAI],
        tags: [
            'self-discovery', 'redemption', 'suffering', 'philosophy-of-violence', 'anti-war', 'morally-grey-protagonist', 'suffering-protagonist', 'philosophical', 'dark', 'emotional', 'beautiful-artwork', 'historical-fiction', 'sword-fight', 'hiatus'
        ]
    },
    {
        id: "ieNkCBtjVVP-ugmLkq2NG",
        title: 'Berserk',
        author: 'Kentaro Miura',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.HORROR, Genre.DARK_FANTASY],
        tags: [
            'revenge', 'trauma', 'suffering', 'tragedy', 'cycle-of-violence', 'betrayal', 'anti-hero', 'morally-grey-protagonist', 'suffering-protagonist', 'dark', 'brutal', 'philosophical', 'emotional', 'bittersweet', 'medieval', 'world-building', 'ongoing'
        ]
    },
    {
        id: "gxvIVs2XRAlMYP836asx2",
        title: 'Jujutsu Kaisen',
        author: 'Gege Akutami',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.HORROR, Genre.DARK_FANTASY],
        tags: [
            'sacrifice', 'tragedy', 'moral-ambiguity', 'subverts-tropes', 'morally-grey-protagonist', 'suffering-protagonist', 'dark', 'brutal', 'action-heavy', 'power-system', 'modern-setting'
        ]
    },
    {
        id: "QEky9OMBBoLfOCRjLa9bq",
        title: 'Chainsaw Man',
        author: 'Tatsuki Fujimoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.HORROR, Genre.SUPERNATURAL, Genre.DARK_FANTASY],
        tags: [
            'tragedy', 'trauma', 'subverts-tropes', 'moral-ambiguity', 'existential', 'suffering-protagonist', 'anti-hero', 'dark', 'brutal', 'unexpected', 'dark-comedy', 'psychological', 'modern-setting'
        ]
    },
    {
        id: "lTky2v0kci29T6gotcaX9",
        title: 'Spy x Family',
        author: 'Tatsuya Endo',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
        tags: [
            'found-family', 'family-bond', 'wholesome', 'cool-protagonist', 'ensemble-cast', 'feel-good', 'heartwarming', 'comedy', 'spy', 'action-light'
        ]
    },
    {
        id: "5-tF3UuC4qUcouyNYQ6LG",
        title: 'Kaguya-sama: Love is War',
        author: 'Aka Akasaka',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL, Genre.PSYCHOLOGICAL],
        tags: [
            'rivalry', 'slow-burn-romance', 'pride', 'coming-of-age', 'genius-protagonist', 'feel-good', 'comedy', 'mind-game', 'school-life', 'completed'
        ]
    },
    {
        id: "HeRj9T6J8tJ8IbXBqN-wg",
        title: 'Your Lie in April',
        author: 'Naoshi Arakawa',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.ROMANCE, Genre.MUSIC, Genre.TRAGEDY],
        tags: [
            'grief', 'terminal-illness', 'healing', 'coming-of-age', 'trauma', 'loss', 'suffering-protagonist', 'emotional', 'bittersweet', 'tear-jerker', 'beautiful', 'music', 'classical-music', 'completed'
        ]
    },
    {
        id: "QfM_cfiSE3BSg6VcZdFDq",
        title: 'Fruits Basket',
        author: 'Natsuki Takaya',
        genre: [Genre.SHOUJO, Genre.DRAMA, Genre.ROMANCE, Genre.COMEDY, Genre.SUPERNATURAL],
        tags: [
            'healing', 'trauma', 'family-dysfunction', 'belonging', 'found-family', 'redemption', 'suffering-protagonist', 'emotional', 'bittersweet', 'heartwarming', 'feel-good', 'curse', 'completed'
        ]
    },
    {
        id: "V2GVpB_-XEenbuHlDb8Ks",
        title: 'Ouran High School Host Club',
        author: 'Bisco Hatori',
        genre: [Genre.SHOUJO, Genre.COMEDY, Genre.ROMANCE, Genre.SCHOOL, Genre.REVERSE_HAREM],
        tags: [
            'found-family', 'friendship', 'class-difference', 'self-discovery', 'ensemble-cast', 'feel-good', 'comedy', 'heartwarming', 'parody', 'school-life', 'completed'
        ]
    },
    {
        id: "ojV_-MvH_aUKW1-FChYk6",
        title: 'Nana',
        author: 'Ai Yazawa',
        genre: [Genre.JOSEI, Genre.DRAMA, Genre.ROMANCE, Genre.MUSIC],
        tags: [
            'female-friendship', 'adult-life', 'love-triangle', 'loss', 'identity', 'ensemble-cast', 'emotional', 'bittersweet', 'realistic', 'music', 'band', 'hiatus'
        ]
    },
    {
        id: "OwpowlhtSXPBDOf522RUV",
        title: 'Mushishi',
        author: 'Yuki Urushibara',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.SLICE_OF_LIFE, Genre.HISTORICAL],
        tags: [
            'grief', 'healing', 'belonging', 'nature-connection', 'acceptance', 'lone-wanderer-protagonist', 'atmospheric', 'meditative', 'bittersweet', 'iyashikei', 'japanese-folklore', 'episodic', 'completed'
        ]
    },
    {
        id: "bVkxa2JgpgFsXWjHpJBll",
        title: 'Yotsuba&!',
        author: 'Kiyohiko Azuma',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'childhood-wonder', 'family-bond', 'child-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'no-conflict', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "ssdIaVmWi7YfdgBz7zbuK",
        title: 'Dragon Ball Z',
        author: 'Akira Toriyama',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.MARTIAL_ARTS, Genre.SCI_FI],
        tags: [
            'friendship', 'family-bond', 'sacrifice', 'rivalry', 'never-give-up', 'overpowered-protagonist', 'action-heavy', 'iconic', 'power-system', 'tournament', 'completed'
        ]
    },
    {
        id: "AShrjpo2qvnnM6asZIKmD",
        title: 'Nichijou',
        author: 'Keiichi Arawi',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship', 'school-life', 'ensemble-cast', 'absurd-comedy', 'heartwarming', 'feel-good', 'daily-life', 'completed'
        ]
    },
    {
        id: "IcO6-BxtFQFhDNubxkA1S",
        title: 'Non Non Biyori',
        author: 'Atto',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'childhood-wonder', 'friendship', 'child-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'meditative', 'no-conflict', 'rural', 'nature-connection', 'daily-life'
        ]
    },
    {
        id: "-LXdxRU97f0aoPYOct4X-",
        title: 'Barakamon',
        author: 'Satsuki Yoshino',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.DRAMA],
        tags: [
            'self-discovery', 'finding-purpose', 'healing', 'community', 'found-family', 'adult-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'comedy', 'rural', 'nature-connection', 'art', 'completed'
        ]
    },
    {
        id: "ou3TelOlg21qiui-TgZ10",
        title: "Chi's Sweet Home",
        author: 'Konami Kanata',
        genre: [Genre.SEINEN, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'family-bond', 'belonging', 'animal-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'no-conflict', 'cute', 'daily-life', 'completed'
        ]
    },
    {
        id: "zSe4e-_0r_VoC_neaHwBT",
        title: 'Takagi-san',
        author: 'Sōichirō Yamamoto',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.ROMANCE, Genre.SCHOOL],
        tags: [
            'slow-burn-romance', 'friendship', 'childhood-wonder', 'ensemble-cast', 'heartwarming', 'feel-good', 'wholesome', 'comedy', 'school-life', 'daily-life'
        ]
    },
    {
        id: "YByKs5jG3UyaZ5AwOJQL3",
        title: 'Azumanga Daioh',
        author: 'Kiyohiko Azuma',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship', 'school-life', 'ensemble-cast', 'absurd-comedy', 'heartwarming', 'feel-good', 'daily-life', 'completed'
        ]
    },
    {
        id: "bRfkDIYhNGBHwHnKwxHxK",
        title: 'Aria',
        author: 'Kozue Amano',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.SCI_FI, Genre.FANTASY],
        tags: [
            'finding-purpose', 'healing', 'self-discovery', 'nature-connection', 'belonging', 'lone-wanderer-protagonist', 'meditative', 'iyashikei', 'utopian', 'atmospheric', 'beautiful', 'world-building', 'completed'
        ]
    },
    {
        id: "-OiD5x03DiXq4yiwakQl-",
        title: 'Yuru Camp',
        author: 'Afro',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'friendship', 'nature-connection', 'self-discovery', 'introvert-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'meditative', 'outdoor', 'daily-life', 'educational'
        ]
    },
    {
        id: "Vg4ikIh3mlIpIRBMee_aE",
        title: 'Flying Witch',
        author: 'Chihiro Ishizuka',
        genre: [Genre.SHOUNEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MAGIC, Genre.SUPERNATURAL],
        tags: [
            'coming-of-age', 'family-bond', 'found-family', 'nature-connection', 'community', 'ensemble-cast', 'heartwarming', 'feel-good', 'iyashikei', 'meditative', 'rural', 'magic', 'daily-life'
        ]
    },
    {
        id: "xrUd4hcVlwdxYbcr-V4ld",
        title: 'K-ON!',
        author: 'Kakifly',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'friendship', 'finding-purpose', 'coming-of-age', 'ensemble-cast', 'heartwarming', 'feel-good', 'iyashikei', 'comedy', 'school-life', 'music', 'band', 'completed'
        ]
    },
    {
        id: "WLQCziyrQTrELSoXj3YZ-",
        title: 'A Man and His Cat',
        author: 'Umi Sakurai',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'healing', 'loneliness', 'belonging', 'grief', 'adult-protagonist', 'lone-wanderer-protagonist', 'heartwarming', 'feel-good', 'iyashikei', 'bittersweet', 'daily-life'
        ]
    },
    {
        id: "ztCCCR9bmdrXCPqW3sdB3",
        title: 'March Comes in Like a Lion',
        author: 'Chica Umino',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.SPORTS],
        tags: [
            'depression', 'healing', 'loneliness', 'found-family', 'belonging', 'grief', 'trauma', 'suffering-protagonist', 'introvert-protagonist', 'emotional', 'bittersweet', 'feel-good', 'psychological', 'coming-of-age', 'prodigy', 'ongoing'
        ]
    },
    {
        id: "W3KludWHX3PkW2lBrRkSZ",
        title: 'A Silent Voice',
        author: 'Yoshitoki Oima',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.ROMANCE, Genre.SLICE_OF_LIFE],
        tags: [
            'redemption', 'guilt', 'forgiveness', 'depression', 'loneliness', 'disability', 'belonging', 'trauma', 'suffering-protagonist', 'emotional', 'bittersweet', 'tear-jerker', 'psychological', 'coming-of-age', 'completed'
        ]
    },
    {
        id: "o97I7mHvoB6tQM4oDL8qk",
        title: 'Silver Spoon',
        author: 'Hiromu Arakawa',
        genre: [Genre.SHOUNEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.DRAMA, Genre.SCHOOL],
        tags: [
            'self-discovery', 'finding-purpose', 'coming-of-age', 'community', 'suffering-protagonist', 'feel-good', 'heartwarming', 'comedy', 'educational', 'school-life', 'rural', 'completed'
        ]
    },
    {
        id: "OTroq0p3qRkHsEujC2zV8",
        title: 'Delicious in Dungeon',
        author: 'Ryoko Kui',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.FANTASY, Genre.COMEDY, Genre.COOKING],
        tags: [
            'found-family', 'family-bond', 'self-discovery', 'ensemble-cast', 'feel-good', 'heartwarming', 'comedy', 'world-building', 'unique-premise', 'dungeon', 'food', 'completed'
        ]
    },
    {
        id: "T3GkukY8qS95FFJszO5Yh",
        title: "Frieren: Beyond Journey's End",
        author: 'Kanehito Yamada',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.FANTASY, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'grief', 'mortality', 'loss', 'found-family', 'healing', 'belonging', 'acceptance', 'lone-wanderer-protagonist', 'philosophical', 'bittersweet', 'meditative', 'emotional', 'beautiful', 'world-building', 'post-adventure', 'ongoing'
        ]
    },
    {
        id: "itQyGUfIr1jiGTlAGrAqO",
        title: 'Honey and Clover',
        author: 'Chica Umino',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.ROMANCE, Genre.COMEDY],
        tags: [
            'unrequited-love', 'finding-purpose', 'adult-life', 'friendship', 'coming-of-age', 'loss', 'ensemble-cast', 'emotional', 'bittersweet', 'feel-good', 'realistic', 'art', 'school-life', 'completed'
        ]
    },
    {
        id: "EAwlqOI27-pJLLteAkimn",
        title: 'Genshiken',
        author: 'Shimoku Kio',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'belonging', 'finding-purpose', 'adult-life', 'friendship', 'identity', 'introvert-protagonist', 'ensemble-cast', 'feel-good', 'comedy', 'realistic', 'school-life', 'otaku-culture', 'completed'
        ]
    },
    {
        id: "5kRDR-rYzXU2SMkm564dO",
        title: 'Hidamari Sketch',
        author: 'Ume Aoki',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.SCHOOL],
        tags: [
            'friendship', 'finding-purpose', 'coming-of-age', 'ensemble-cast', 'heartwarming', 'feel-good', 'iyashikei', 'comedy', 'school-life', 'art', 'daily-life'
        ]
    },
    {
        id: "eis2bh0fvVsuPQbUXi5_Q",
        title: "Natsume's Book of Friends",
        author: 'Yuki Midorikawa',
        genre: [Genre.SHOUJO, Genre.SLICE_OF_LIFE, Genre.SUPERNATURAL, Genre.DRAMA, Genre.FANTASY],
        tags: [
            'loneliness', 'belonging', 'healing', 'found-family', 'acceptance', 'grief', 'introvert-protagonist', 'suffering-protagonist', 'heartwarming', 'emotional', 'bittersweet', 'iyashikei', 'atmospheric', 'meditative', 'japanese-folklore', 'episodic', 'ongoing'
        ]
    },
    {
        id: "auAMv4CRxdgwGPUnkum_U",
        title: 'Wotakoi: Love is Hard for Otaku',
        author: 'Fujita',
        genre: [Genre.JOSEI, Genre.ROMANCE, Genre.COMEDY, Genre.SLICE_OF_LIFE],
        tags: [
            'found-family', 'adult-life', 'slow-burn-romance', 'belonging', 'friendship', 'introvert-protagonist', 'feel-good', 'wholesome', 'comedy', 'heartwarming', 'otaku-culture', 'workplace', 'completed'
        ]
    },
    {
        id: "3ZIXJXpM9bXhG4XZpNw2k",
        title: 'Sailor Moon',
        author: 'Naoko Takeuchi',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.ROMANCE, Genre.FANTASY, Genre.MAGIC],
        tags: [
            'friendship', 'found-family', 'love-story', 'sacrifice', 'reincarnation', 'ensemble-cast', 'hopeful', 'iconic', 'feel-good', 'magic', 'magical-girl', 'completed'
        ]
    },
    {
        id: "kySTiB03495rKapEx5SJm",
        title: 'Cardcaptor Sakura',
        author: 'CLAMP',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.ROMANCE, Genre.FANTASY, Genre.MAGIC, Genre.SCHOOL],
        tags: [
            'friendship', 'found-family', 'love-story', 'coming-of-age', 'child-protagonist', 'heartwarming', 'iconic', 'feel-good', 'cute', 'magic', 'magical-girl', 'school-life', 'completed'
        ]
    },
    {
        id: "8fJeDEWnlxZGfq8sq1cR3",
        title: 'Fullmetal Alchemist',
        author: 'Hiromu Arakawa',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.FANTASY, Genre.DRAMA],
        tags: [
            'brotherhood', 'sacrifice', 'war', 'redemption', 'family-bond', 'moral-ambiguity', 'found-family', 'never-give-up', 'morally-grey-protagonist', 'emotional', 'hopeful', 'action-heavy', 'philosophical', 'world-building', 'power-system', 'completed'
        ]
    },
    {
        id: "squw8azM1xz6DqQK1rDR3",
        title: 'Made in Abyss',
        author: 'Akihito Tsukushi',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.FANTASY, Genre.MYSTERY, Genre.HORROR],
        tags: [
            'sacrifice', 'grief', 'loss', 'suffering', 'trauma', 'found-family', 'child-protagonist', 'suffering-protagonist', 'dark', 'brutal', 'bittersweet', 'atmospheric', 'world-building', 'mystery', 'exploration', 'ongoing'
        ]
    },
    {
        id: "plD2XAlgcZalain0Etpmr",
        title: 'Slam Dunk',
        author: 'Takehiko Inoue',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY, Genre.DRAMA],
        tags: [
            'coming-of-age', 'rivalry', 'teamwork', 'finding-purpose', 'friendship', 'underdog-protagonist', 'never-give-up', 'feel-good', 'iconic', 'basketball', 'tournament', 'completed'
        ]
    },
    {
        id: "H0WHBr0h0IgDtCGQA0NIA",
        title: 'Haikyu!!',
        author: 'Haruichi Furudate',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY, Genre.DRAMA],
        tags: [
            'coming-of-age', 'rivalry', 'teamwork', 'finding-purpose', 'friendship', 'found-family', 'underdog-protagonist', 'never-give-up', 'hopeful', 'emotional', 'feel-good', 'volleyball', 'tournament', 'completed'
        ]
    },
    {
        id: "GjAsNE3VFFfX2CxbhI-53",
        title: 'Kuroko no Basket',
        author: 'Tadatoshi Fujimaki',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.COMEDY],
        tags: [
            'teamwork', 'rivalry', 'friendship', 'finding-purpose', 'underdog-protagonist', 'action-heavy', 'basketball', 'tournament', 'completed'
        ]
    },
    {
        id: "t_ip3qNLDNeUW1_ZTXIqC",
        title: 'Ping Pong the Animation',
        author: 'Taiyou Matsumoto',
        genre: [Genre.SEINEN, Genre.SPORTS, Genre.DRAMA, Genre.PSYCHOLOGICAL],
        tags: [
            'rivalry', 'identity', 'finding-purpose', 'self-discovery', 'coming-of-age', 'talent-vs-effort', 'suffering-protagonist', 'philosophical', 'emotional', 'psychological', 'bittersweet', 'tournament', 'completed'
        ]
    },
    {
        id: "mR1DvRHJlQ2kIsEktV2FT",
        title: 'Kaiji',
        author: 'Nobuyuki Fukumoto',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.DRAMA, Genre.GAME],
        tags: [
            'survival', 'desperation', 'class-difference', 'moral-ambiguity', 'suffering-protagonist', 'dark', 'tense', 'psychological', 'mind-game', 'gambling', 'ongoing'
        ]
    },
    {
        id: "kLBsecY4BtWHHjVrLpdBh",
        title: 'Akagi',
        author: 'Nobuyuki Fukumoto',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.GAME],
        tags: [
            'survival', 'moral-ambiguity', 'genius-protagonist', 'cool-protagonist', 'dark', 'tense', 'psychological', 'mind-game', 'gambling', 'completed'
        ]
    },
    {
        id: "25lQRugvfHzhsIwVocsRN",
        title: 'Monster',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.PSYCHOLOGICAL, Genre.DRAMA],
        tags: [
            'moral-ambiguity', 'redemption', 'cat-and-mouse', 'finding-purpose', 'identity', 'morally-grey-protagonist', 'genius-protagonist', 'dark', 'tense', 'psychological', 'realistic', 'mystery', 'completed'
        ]
    },
    {
        id: "6LSEsrW9cFTO_b0V3Y8Np",
        title: '20th Century Boys',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.SCI_FI, Genre.DRAMA],
        tags: [
            'friendship', 'conspiracy', 'nostalgia', 'finding-purpose', 'moral-ambiguity', 'ensemble-cast', 'dark', 'tense', 'psychological', 'emotional', 'mystery', 'completed'
        ]
    },
    {
        id: "SNagaU5XTtS7WlPO5R9F5",
        title: 'Pluto',
        author: 'Naoki Urasawa',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.MYSTERY, Genre.DRAMA],
        tags: [
            'war', 'grief', 'identity', 'moral-ambiguity', 'anti-war', 'suffering-protagonist', 'dark', 'emotional', 'philosophical', 'mystery', 'robot', 'completed'
        ]
    },
    {
        id: "j0Y4hk3GTfsL5uAtYSrfo",
        title: 'Doraemon',
        author: 'Fujiko F. Fujio',
        genre: [Genre.KODOMOMUKE, Genre.COMEDY, Genre.SCI_FI, Genre.SLICE_OF_LIFE, Genre.ADVENTURE],
        tags: [
            'friendship', 'family-bond', 'childhood-wonder', 'child-protagonist', 'heartwarming', 'feel-good', 'iconic', 'daily-life', 'long-running'
        ]
    },
    {
        id: "RGEM2Kqr1fm31jUbRpCIF",
        title: 'Dragon Ball',
        author: 'Akira Toriyama',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.MARTIAL_ARTS, Genre.FANTASY],
        tags: [
            'friendship', 'coming-of-age', 'rivalry', 'tournament', 'underdog-protagonist', 'never-give-up', 'action-heavy', 'iconic', 'power-system', 'martial-arts', 'completed'
        ]
    },
    {
        id: "OVTCjG7xCGR25GHWlJvwH",
        title: 'Rurouni Kenshin',
        author: 'Nobuhiro Watsuki',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.HISTORICAL, Genre.SAMURAI, Genre.ROMANCE, Genre.DRAMA],
        tags: [
            'redemption', 'guilt', 'found-family', 'anti-war', 'philosophy-of-violence', 'morally-grey-protagonist', 'suffering-protagonist', 'emotional', 'bittersweet', 'action-heavy', 'historical-fiction', 'sword-fight', 'completed'
        ]
    },
    {
        id: "qH1_mivfNV7QJdZGMGICg",
        title: 'Inuyasha',
        author: 'Rumiko Takahashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.ROMANCE, Genre.SUPERNATURAL, Genre.HISTORICAL],
        tags: [
            'found-family', 'romance', 'belonging', 'rivalry', 'ensemble-cast', 'action-heavy', 'hopeful', 'historical-fiction', 'time-travel', 'long-running', 'completed'
        ]
    },
    {
        id: "KoTClOZSjU4FdUoZOQuvg",
        title: 'Ranma 1/2',
        author: 'Rumiko Takahashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.COMEDY, Genre.ROMANCE, Genre.MARTIAL_ARTS, Genre.GENDER_BENDER],
        tags: [
            'rivalry', 'romance', 'identity', 'ensemble-cast', 'absurd-comedy', 'martial-arts', 'gender-swap', 'completed'
        ]
    },
    {
        id: "EGfOaWfNvo62JfFSP0yy_",
        title: 'Yu Yu Hakusho',
        author: 'Yoshihiro Togashi',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SUPERNATURAL, Genre.ADVENTURE],
        tags: [
            'friendship', 'found-family', 'rivalry', 'redemption', 'coming-of-age', 'anti-hero', 'cool-protagonist', 'action-heavy', 'hopeful', 'power-system', 'tournament', 'completed'
        ]
    },
    {
        id: "V-dH4ib4WxQiFdjGFPXxv",
        title: 'Shaman King',
        author: 'Hiroyuki Takei',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.SUPERNATURAL, Genre.COMEDY],
        tags: [
            'friendship', 'found-family', 'rivalry', 'acceptance', 'ensemble-cast', 'action-heavy', 'hopeful', 'japanese-folklore', 'tournament', 'completed'
        ]
    },
    {
        id: "0RcYP5WfyFjf-ohLnVhae",
        title: 'Oshi no Ko',
        author: 'Aka Akasaka',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.IDOL],
        tags: [
            'revenge', 'identity', 'grief', 'trauma', 'moral-ambiguity', 'reincarnation', 'morally-grey-protagonist', 'suffering-protagonist', 'dark', 'tense', 'emotional', 'unexpected', 'psychological', 'mystery', 'entertainment-industry', 'completed'
        ]
    },
    {
        id: "6MYNYuMCo2kQ2Z2cOh4cG",
        title: 'Bocchi the Rock!',
        author: 'Aki Hamaji',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'social-anxiety', 'loneliness', 'belonging', 'finding-purpose', 'friendship', 'coming-of-age', 'introvert-protagonist', 'heartwarming', 'feel-good', 'comedy', 'bittersweet', 'school-life', 'music', 'band', 'completed'
        ]
    },
    {
        id: "FMMpDim50jrlNVsgNDu8J",
        title: 'Uzaki-chan Wants to Hang Out!',
        author: 'Take',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY, Genre.ROMANCE],
        tags: [
            'friendship', 'slow-burn-romance', 'coming-of-age', 'introvert-protagonist', 'comedy', 'feel-good', 'school-life', 'college', 'ongoing'
        ]
    },
    {
        id: "1I1ULOCGqw1PJ340AnNuG",
        title: 'The Way of the Househusband',
        author: 'Kousuke Oono',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'found-family', 'redemption', 'adult-protagonist', 'absurd-comedy', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "skSI-W6dXef1nYtsYV9qn",
        title: 'Witch Hat Atelier',
        author: 'Kamome Shirahama',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.FANTASY, Genre.MAGIC, Genre.DRAMA],
        tags: [
            'finding-purpose', 'coming-of-age', 'belonging', 'friendship', 'underdog-protagonist', 'beautiful-artwork', 'atmospheric', 'world-building', 'magic', 'ongoing'
        ]
    },
    {
        id: "q5-QwabhgcZCbaUVk4cAm",
        title: 'The Girl from the Other Side',
        author: 'Nagabe',
        genre: [Genre.SEINEN, Genre.FANTASY, Genre.DRAMA, Genre.SUPERNATURAL, Genre.DARK_FANTASY],
        tags: [
            'found-family', 'grief', 'loneliness', 'belonging', 'sacrifice', 'child-protagonist', 'atmospheric', 'bittersweet', 'dark', 'beautiful', 'dark-fairy-tale', 'completed'
        ]
    },
    {
        id: "AKZNXVvU3dyZ1bCPBDkUS",
        title: 'To Your Eternity',
        author: 'Yoshitoki Oima',
        genre: [Genre.SHOUNEN, Genre.ADVENTURE, Genre.DRAMA, Genre.SUPERNATURAL, Genre.FANTASY],
        tags: [
            'grief', 'loss', 'mortality', 'belonging', 'healing', 'found-family', 'sacrifice', 'coming-of-age', 'suffering-protagonist', 'emotional', 'bittersweet', 'tear-jerker', 'episodic', 'ongoing'
        ]
    },
    {
        id: "BJVFTFbviEkBNmMHNW_Hl",
        title: 'Goodnight Punpun',
        author: 'Inio Asano',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.PSYCHOLOGICAL, Genre.SLICE_OF_LIFE],
        tags: [
            'depression', 'trauma', 'loneliness', 'identity-crisis', 'family-dysfunction', 'guilt', 'loss', 'suffering-protagonist', 'dark', 'brutal', 'psychological', 'realistic', 'surreal', 'coming-of-age', 'completed'
        ]
    },
    {
        id: "yvkaVw7X6EEdI5U5tBOjr",
        title: 'Solanin',
        author: 'Inio Asano',
        genre: [Genre.JOSEI, Genre.DRAMA, Genre.SLICE_OF_LIFE, Genre.MUSIC],
        tags: [
            'finding-purpose', 'grief', 'loss', 'adult-life', 'identity', 'suffering-protagonist', 'emotional', 'bittersweet', 'realistic', 'music', 'band', 'completed'
        ]
    },
    {
        id: "iqhgil7jWpn3H7mGrEWIn",
        title: 'I Am a Hero',
        author: 'Kengo Hanazawa',
        genre: [Genre.SEINEN, Genre.HORROR, Genre.ACTION, Genre.DRAMA, Genre.PSYCHOLOGICAL],
        tags: [
            'survival', 'identity-crisis', 'depression', 'trauma', 'suffering-protagonist', 'dark', 'brutal', 'gore', 'realistic', 'psychological', 'zombie', 'post-apocalyptic', 'completed'
        ]
    },
    {
        id: "v53_17hzh2rfQbLbt68UN",
        title: 'Golden Kamuy',
        author: 'Satoru Noda',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.ADVENTURE, Genre.HISTORICAL, Genre.COMEDY, Genre.COOKING],
        tags: [
            'found-family', 'survival', 'friendship', 'betrayal', 'redemption', 'ensemble-cast', 'morally-grey-protagonist', 'dark', 'unexpected', 'comedy', 'historical-fiction', 'food', 'completed'
        ]
    },
    {
        id: "1ZEnyRoM4pPHEpTNBmRzg",
        title: 'Planetes',
        author: 'Makoto Yukimura',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'finding-purpose', 'adult-life', 'self-discovery', 'love-story', 'sacrifice', 'adult-protagonist', 'emotional', 'realistic', 'bittersweet', 'philosophical', 'world-building', 'completed'
        ]
    },
    {
        id: "JCfmNphkn91Rr3jE7VATj",
        title: 'Otoyomegatari',
        author: 'Kaoru Mori',
        genre: [Genre.SEINEN, Genre.HISTORICAL, Genre.ROMANCE, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'love-story', 'community', 'family-bond', 'belonging', 'ensemble-cast', 'beautiful-artwork', 'meditative', 'bittersweet', 'historical-fiction', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "0jjFMj7th1s68kg4cLaXb",
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
        id: "zrIT_e_yY-lNpeJULLXr2",
        title: 'Emma',
        author: 'Kaoru Mori',
        genre: [Genre.SEINEN, Genre.HISTORICAL, Genre.ROMANCE, Genre.DRAMA],
        tags: [
            'love-story', 'class-difference', 'belonging', 'self-discovery', 'adult-protagonist', 'beautiful-artwork', 'emotional', 'bittersweet', 'historical-fiction', 'completed'
        ]
    },
    {
        id: "PNwbnhuBi0hRxpWxyWqff",
        title: 'Bunny Drop',
        author: 'Yumi Unita',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.COMEDY],
        tags: [
            'found-family', 'family-bond', 'healing', 'adult-life', 'adult-protagonist', 'child-protagonist', 'heartwarming', 'feel-good', 'bittersweet', 'daily-life', 'completed'
        ]
    },
    {
        id: "Bk2qEEFJg86kU3B_61v17",
        title: 'My Neighbor Seki',
        author: 'Takuma Morishige',
        genre: [Genre.SHOUNEN, Genre.COMEDY, Genre.SLICE_OF_LIFE, Genre.SCHOOL],
        tags: [
            'friendship', 'ensemble-cast', 'absurd-comedy', 'school-life', 'daily-life', 'completed'
        ]
    },
    {
        id: "V8FDDh8WkYb0wsyJtv0u9",
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
        id: "bhMsW2Z7li22N44ekKCSM",
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
        id: "QCD6l8VgE_c3x3mZ0CGTw",
        title: 'Neon Genesis Evangelion',
        author: 'Yoshiyuki Sadamoto',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.MECHA, Genre.PSYCHOLOGICAL, Genre.SCI_FI, Genre.DARK_FANTASY],
        tags: [
            'depression', 'trauma', 'identity-crisis', 'loneliness', 'belonging', 'family-dysfunction', 'existential', 'suffering-protagonist', 'introvert-protagonist', 'dark', 'psychological', 'philosophical', 'iconic', 'world-building', 'completed'
        ]
    },
    {
        id: "8lDs7uzmOvk-sLMtv7GAz",
        title: 'Code Geass: Lelouch of the Rebellion',
        author: 'Majiko!',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.MECHA, Genre.PSYCHOLOGICAL, Genre.MILITARY, Genre.DRAMA],
        tags: [
            'sacrifice', 'revenge', 'redemption', 'betrayal', 'moral-ambiguity', 'political-intrigue', 'genius-protagonist', 'morally-grey-protagonist', 'villain-protagonist', 'dark', 'tense', 'emotional', 'action-heavy', 'mind-game', 'strategy', 'completed'
        ]
    },
    {
        id: "3GqjFwziXztv8fqtJOxzB",
        title: 'Gundam: The Origin',
        author: 'Yoshikazu Yasuhiko',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.MECHA, Genre.MILITARY, Genre.SCI_FI, Genre.DRAMA],
        tags: [
            'war', 'anti-war', 'cycle-of-violence', 'moral-ambiguity', 'sacrifice', 'morally-grey-protagonist', 'dark', 'action-heavy', 'beautiful-artwork', 'political-intrigue', 'world-building', 'completed'
        ]
    },
    {
        id: "UdWVf5Dafp3_o4p1T0HyU",
        title: 'Kingdom',
        author: 'Yasuhisa Hara',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.HISTORICAL, Genre.MILITARY, Genre.DRAMA],
        tags: [
            'war', 'coming-of-age', 'rivalry', 'betrayal', 'found-family', 'underdog-protagonist', 'never-give-up', 'action-heavy', 'dark', 'brutal', 'strategy', 'historical-fiction', 'long-running', 'ongoing'
        ]
    },
    {
        id: "7iuWKU9BKA8TIH9-l_low",
        title: 'Blame!',
        author: 'Tsutomu Nihei',
        genre: [Genre.SEINEN, Genre.SCI_FI, Genre.ACTION, Genre.HORROR, Genre.POST_APOCALYPTIC, Genre.CYBERPUNK],
        tags: [
            'loneliness', 'survival', 'identity', 'lone-wanderer-protagonist', 'dark', 'atmospheric', 'brutal', 'world-building', 'dystopia', 'completed'
        ]
    },
    {
        id: "d8xcP7VczdishaGQmEyKW",
        title: 'That Time I Got Reincarnated as a Slime',
        author: 'Taiki Kawakami',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.ADVENTURE, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI],
        tags: [
            'found-family', 'friendship', 'community', 'political-intrigue', 'overpowered-protagonist', 'feel-good', 'hopeful', 'world-building', 'trapped-in-another-world', 'nation-building', 'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        id: "_Y5YVXBPcMl6GlY5AKail",
        title: 'Mushoku Tensei: Jobless Reincarnation',
        author: 'Rifujin na Magonote',
        genre: [Genre.SEINEN, Genre.ADVENTURE, Genre.DRAMA, Genre.FANTASY, Genre.ISEKAI, Genre.REINCARNATION],
        tags: [
            'redemption', 'self-discovery', 'coming-of-age', 'found-family', 'romance', 'suffering-protagonist', 'emotional', 'bittersweet', 'world-building', 'trapped-in-another-world', 'magic', 'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        id: "bujO1xWx2lWNeLeQnalI0",
        title: 'The Eminence in Shadow',
        author: 'Daisuke Aizawa',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.COMEDY, Genre.FANTASY, Genre.ISEKAI],
        tags: [
            'friendship', 'rivalry', 'overpowered-protagonist', 'cool-protagonist', 'absurd-comedy', 'parody', 'self-aware', 'trapped-in-another-world', 'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        id: "NqV5Mn-PSF0lllZOQnj49",
        title: 'My Next Life as a Villainess: All Routes Lead to Doom!',
        author: 'Satoru Yamaguchi',
        genre: [Genre.SHOUJO, Genre.COMEDY, Genre.ROMANCE, Genre.FANTASY, Genre.ISEKAI, Genre.VILLAINESS, Genre.OTOME_GAME, Genre.REINCARNATION],
        tags: [
            'found-family', 'friendship', 'subverts-tropes', 'romance', 'ensemble-cast', 'feel-good', 'wholesome', 'comedy', 'parody', 'trapped-in-another-world', 'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        id: "nGTKeXff-cfWozvvT1BeY",
        title: 'Blue Period',
        author: 'Tsubasa Yamaguchi',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.SCHOOL],
        tags: [
            'finding-purpose', 'self-discovery', 'coming-of-age', 'identity', 'belonging', 'suffering-protagonist', 'introvert-protagonist', 'emotional', 'realistic', 'bittersweet', 'art', 'school-life', 'ongoing'
        ]
    },
    {
        id: "6JTymKMbjhdaepHaFWhWL",
        title: 'Food Wars!: Shokugeki no Soma',
        author: 'Yuto Tsukuda',
        genre: [Genre.SHOUNEN, Genre.COOKING, Genre.SCHOOL, Genre.COMEDY, Genre.DRAMA, Genre.GOURMET],
        tags: [
            'rivalry', 'coming-of-age', 'finding-purpose', 'never-give-up', 'underdog-protagonist', 'feel-good', 'action-heavy', 'school-life', 'food', 'completed'
        ]
    },
    {
        id: "wgruddckE0YhdsT73fOiZ",
        title: 'Hikaru no Go',
        author: 'Yumi Hotta',
        genre: [Genre.SHOUNEN, Genre.SPORTS, Genre.SUPERNATURAL, Genre.DRAMA, Genre.SHOGI_GO],
        tags: [
            'coming-of-age', 'rivalry', 'finding-purpose', 'friendship', 'grief', 'underdog-protagonist', 'prodigy', 'emotional', 'feel-good', 'bittersweet', 'mind-game', 'supernatural', 'completed'
        ]
    },
    {
        id: "T8bYD6SMxTwDzyHs2ehFV",
        title: 'Kuroshitsuji',
        author: 'Yana Toboso',
        genre: [Genre.SHOUJO, Genre.ACTION, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.HISTORICAL, Genre.DARK_FANTASY],
        tags: [
            'revenge', 'betrayal', 'moral-ambiguity', 'sacrifice', 'guilt', 'morally-grey-protagonist', 'dark', 'stylish', 'tense', 'mystery', 'historical-fiction', 'ongoing'
        ]
    },
    {
        id: "6SY3T8TaMxHmNOA-uw7J-",
        title: 'Given',
        author: 'Natsuki Kizu',
        genre: [Genre.JOSEI, Genre.ROMANCE, Genre.DRAMA, Genre.MUSIC, Genre.BOYS_LOVE],
        tags: [
            'grief', 'healing', 'first-love', 'belonging', 'finding-purpose', 'introvert-protagonist', 'suffering-protagonist', 'emotional', 'bittersweet', 'music', 'band', 'ongoing'
        ]
    },
    {
        id: "5vejdzDKsFr5Xgqwj8z-R",
        title: 'My Dress-Up Darling',
        author: 'Shinichi Fukuda',
        genre: [Genre.SEINEN, Genre.ROMANCE, Genre.COMEDY, Genre.SCHOOL, Genre.OTAKU],
        tags: [
            'slow-burn-romance', 'finding-purpose', 'self-discovery', 'belonging', 'friendship', 'introvert-protagonist', 'feel-good', 'wholesome', 'heartwarming', 'comedy', 'school-life', 'otaku-culture', 'ongoing'
        ]
    },
    {
        id: "0GQ5YoWpobk-RB7l8r3hv",
        title: 'World Trigger',
        author: 'Daisuke Ashihara',
        genre: [Genre.SHOUNEN, Genre.ACTION, Genre.SCI_FI, Genre.MILITARY],
        tags: [
            'teamwork', 'strategy', 'coming-of-age', 'rivalry', 'found-family', 'underdog-protagonist', 'action-heavy', 'world-building', 'power-system', 'ongoing'
        ]
    },
    {
        id: "h0pSZdKsU1NnKYAJOfOa6",
        title: 'Classroom of the Elite',
        author: 'Shougo Kinugasa',
        genre: [Genre.SEINEN, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.SCHOOL, Genre.MYSTERY],
        tags: [
            'strategy', 'moral-ambiguity', 'survival', 'identity', 'betrayal', 'genius-protagonist', 'morally-grey-protagonist', 'dark', 'tense', 'psychological', 'mind-game', 'school-life', 'light-novel-adaptation', 'ongoing'
        ]
    },
    {
        id: "fH_cLuBhzuKTFCaWmUrTP",
        title: 'Talentless Nana',
        author: 'Looseboy',
        genre: [Genre.SHOUNEN, Genre.PSYCHOLOGICAL, Genre.THRILLER, Genre.MYSTERY, Genre.SUPERNATURAL, Genre.BATTLE_ROYALE],
        tags: [
            'survival', 'betrayal', 'moral-ambiguity', 'identity', 'cat-and-mouse', 'morally-grey-protagonist', 'dark', 'tense', 'psychological', 'unexpected', 'mind-game', 'mystery', 'ongoing'
        ]
    },
    {
        id: "HbkuIIIE4W9adz5Jt37fd",
        title: 'Dorohedoro',
        author: 'Q Hayashida',
        genre: [Genre.SEINEN, Genre.ACTION, Genre.DARK_FANTASY, Genre.HORROR, Genre.COMEDY],
        tags: [
            'found-family', 'identity-crisis', 'belonging', 'survival', 'ensemble-cast', 'morally-grey-protagonist', 'dark', 'brutal', 'unexpected', 'dark-comedy', 'world-building', 'completed'
        ]
    },
    {
        id: "7E5IytSCtaojwVA27cedy",
        title: 'Thermae Romae',
        author: 'Mari Yamazaki',
        genre: [Genre.JOSEI, Genre.COMEDY, Genre.HISTORICAL, Genre.TIME_TRAVEL],
        tags: [
            'finding-purpose', 'self-discovery', 'adult-protagonist', 'absurd-comedy', 'educational', 'historical-fiction', 'time-travel', 'completed'
        ]
    },
    {
        id: "Te7CqLcOBfdXivY7Mc-WQ",
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
        id: "nQOF_qxQE3jmneOrvVVvc",
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
        id: "juO-SDKUI78CgdggYOfPB",
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
        id: "etsZgdH5IAnfaD8t11zyA",
        title: 'Wakako-zake',
        author: 'Chie Shinohara',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.GOURMET, Genre.WORK_LIFE],
        tags: [
            'loneliness', 'self-discovery', 'adult-life', 'adult-protagonist', 'introvert-protagonist', 'meditative', 'iyashikei', 'bittersweet', 'food', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "6KgVu6gc1bntsgU54cHxS",
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
        id: "inT6PpM1WjPpVy8Ud24Rz",
        title: 'Kakukaku Shikajika',
        author: 'Akiko Higashimura',
        genre: [Genre.JOSEI, Genre.SLICE_OF_LIFE, Genre.DRAMA, Genre.COMEDY],
        tags: [
            'coming-of-age', 'self-discovery', 'finding-purpose', 'grief', 'mentor', 'adult-life', 'suffering-protagonist', 'emotional', 'bittersweet', 'realistic', 'art', 'completed'
        ]
    },
    {
        id: "KNewlqpr95IrIpHf30fRc",
        title: 'Sunny',
        author: 'Taiyo Matsumoto',
        genre: [Genre.SEINEN, Genre.DRAMA, Genre.SLICE_OF_LIFE],
        tags: [
            'loneliness', 'belonging', 'grief', 'family-dysfunction', 'childhood-wonder', 'found-family', 'child-protagonist', 'suffering-protagonist', 'emotional', 'bittersweet', 'atmospheric', 'daily-life', 'completed'
        ]
    },
    {
        id: "9fDZV0bvJRwJXvl7uZOKK",
        title: 'Dinosaur Sanctuary',
        author: 'Itaru Kinoshita',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.DRAMA],
        tags: [
            'finding-purpose', 'community', 'adult-life', 'adult-protagonist', 'heartwarming', 'feel-good', 'educational', 'workplace', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "RUt-JneLJulstLBI50y3E",
        title: 'Mitsuboshi Colors',
        author: 'Katsuwo',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'childhood-wonder', 'friendship', 'child-protagonist', 'ensemble-cast', 'heartwarming', 'feel-good', 'no-conflict', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "rdAcv7OXFP765sGuEenvJ",
        title: 'Ichigo Mashimaro',
        author: 'Barasui',
        genre: [Genre.SEINEN, Genre.SLICE_OF_LIFE, Genre.COMEDY],
        tags: [
            'childhood-wonder', 'friendship', 'child-protagonist', 'ensemble-cast', 'heartwarming', 'feel-good', 'cute', 'daily-life', 'ongoing'
        ]
    },
    {
        id: "lRBoui3yb9NlpWZwGLrHF",
        title: 'Wolf Children',
        author: 'Mamoru Hosoda',
        genre: [Genre.SHOUNEN, Genre.DRAMA, Genre.FANTASY, Genre.SLICE_OF_LIFE],
        tags: [
            'motherhood', 'coming-of-age', 'grief', 'loss', 'belonging', 'family-bond', 'self-discovery', 'child-protagonist', 'emotional', 'bittersweet', 'tear-jerker', 'rural', 'completed'
        ]
    },
    {
        id: "7jvKoKIMJOcQWsGH1lH7b",
        title: 'Fuuka',
        author: 'Kouji Seo',
        genre: [Genre.SHOUNEN, Genre.ROMANCE, Genre.DRAMA, Genre.MUSIC, Genre.SCHOOL],
        tags: [
            'romance', 'grief', 'finding-purpose', 'friendship', 'loss', 'suffering-protagonist', 'emotional', 'bittersweet', 'school-life', 'music', 'band', 'completed'
        ]
    },
    {
        id: "roua_fkq7FWF1YXg4-moB",
        title: 'Erased',
        author: 'Kei Sanbe',
        genre: [Genre.SEINEN, Genre.MYSTERY, Genre.THRILLER, Genre.PSYCHOLOGICAL, Genre.DRAMA, Genre.SUPERNATURAL],
        tags: [
            'redemption', 'guilt', 'grief', 'trauma', 'family-dysfunction', 'betrayal', 'time-loop', 'suffering-protagonist', 'morally-grey-protagonist', 'dark', 'tense', 'emotional', 'bittersweet', 'psychological', 'mystery', 'child-protagonist', 'time-travel', 'completed'
        ]
    },
]