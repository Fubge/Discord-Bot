require('dotenv').config();

const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder} = require('discord.js');

const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.MessageContent,
        GatewayIntentBits.GuildMessages,
    ],
});

client.on('ready', (c) => {
    console.log(`✅ ${c.user.username} is online.`);
})

const fishes = [

    {
        name: 'Albino-Wels',
        text: `Normale Trophäe: 100 kg
        Seltene Trophäe: 200 kg
        Lebensraum: Achtuba`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2019_04%2Frf4_4.0.11882_20190422_185001.thumb.png.86f0d47192a91f145d9f9d3fbbd625bb.png&f=1&nofb=1&ipt=2cde772db4d5072172373909dc4d809e04408b1adc014cbe7818cd7bac1c4375&ipo=images',
    },

    {
        name: 'Amur-Wels',
        text: `Normale Trophäe: 5 kg
        Seltene Trophäe: 7 kg
        Lebensraum: Untere Tunguska`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQXXGAOAvnIs%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d448adb983188d4590688bf7cde155cf85428aa7b32fd1b2a94d04e674a4bfb4&ipo=images',
    },

    {
        name: 'Seesaibling',
        text: `Normale Trophäe: 11 kg
        Seltene Trophäe: 16 kg
        Lebensraum: Kuory, Untere Tunguska, Fluss Jama`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_04%2Frf4_4.0.18021_20220411_162540.png.0181544f355d778a790cfa8f6740db56.png&f=1&nofb=1&ipt=b746b7e48360909b070675f1f257c61e0008995bd2a185878d184d83df76c4f7&ipo=images',
    },

    {
        name: 'Arktische-Äsche',
        text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        Lebensraum: Untere Tunguska`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_121242.png.8074735dd3544386d9252917c46fb70b.png&f=1&nofb=1&ipt=e81f81eeb89cb462c3f6c9fc21856469a028271bae5b1299b31fe46a1c2da5e0&ipo=images',
    },








    {
        name: 'Barsch',
        text: `Normale Trophäe: 100kg
        Seltene Trophäe: 200kg
        Lebensraum: Achtuba`,
        image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frf4foryou.de%2Fwp-content%2Fuploads%2F2019%2F09%2FBarsch.png&f=1&nofb=1&ipt=79319935860323b8a14c39ad5dbf7a6bad3c29ed925bbbabe534cdd23bf2a0c2&ipo=images',
        
    },
];

client.on('messageCreate', (message) => {
    if (message.author.bot) {
        return;
    }
    for (fish of fishes){
        if (message.content.toLowerCase() == fish.name.toLowerCase()) {
            message.reply ({ 
                embeds: [
                    new EmbedBuilder()
                    .setDescription(fish.text)
                    .setTitle(fish.name)
                    .setAuthor({
                        name: client.user.username,
                        iconURL: client.user.avatarURL(),
                    })
                    .setColor('Random')
                    .setImage(fish.image)
                ], 
            });
        }
    }
});

client.login(process.env.TOKEN);

