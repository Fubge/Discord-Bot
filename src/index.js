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
        name: 'Albino Wels',
        text: `Normale Trophäe: 100 kg
        Seltene Trophäe: 200 kg
        Lebensraum: Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Dieser Fisch ist eine natürliche Farbvariante des europäischen Welses (Silurus glanis) mit ungewöhnlich heller Körperfarbe. Ein solcher Wels ist in der Natur ziemlich selten. Ansonsten unterscheidet sich der Raubfisch nicht von einem normalen Wels. Er lebt in Süßwassergewässern Europas und Asiens. Ernährung: Die Ernährung des Fisches besteht aus Fröschen, Fischen und Mollusken. Maße: Ein Albino-Wels kann eine Länge von 5 m und eine Masse von 300 kg erreichen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2019_04%2Frf4_4.0.11882_20190422_185001.thumb.png.86f0d47192a91f145d9f9d3fbbd625bb.png&f=1&nofb=1&ipt=2cde772db4d5072172373909dc4d809e04408b1adc014cbe7818cd7bac1c4375&ipo=images',
    },

    {
        name: 'Amur Wels',
        text: `Normale Trophäe: 5 kg
        Seltene Trophäe: 7 kg
        Lebensraum: Untere Tunguska
        
        Die wichtigsten Lebensräume des Amurwelses (Silurus asotus) in Russland sind die Flüsse und Seen des Amurbeckens. Der Körper des Amurwelses ist dunkelgrün gefärbt, der Bauch ist hell. In Verhalten und Lebensweise ähnelt diese Welse ihrem europäischen Pendant. Der Amurwels wird hauptsächlich mit Hilfe von Posen- und Gundangeln gefangen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQXXGAOAvnIs%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d448adb983188d4590688bf7cde155cf85428aa7b32fd1b2a94d04e674a4bfb4&ipo=images',
    },

    {
        name: 'Seesaibling',
        text: `Normale Trophäe: 11 kg
        Seltene Trophäe: 16 kg
        Lebensraum: Kuory, Untere Tunguska, Fluss Jama
        
        Beschreibung und natürliches Vorkommen:
         Der Seesaibling (Salvelinus alpinus) gehört zur Gattung der Saiblinge (Salvelinus). Er lebt sowohl in isolierten Binnenseen als auch in küstennahen Meeresgewässern im nördlichen Eismeer. In Europa reicht sein Verbreitungsgebiet von den sauerstoffreichen Seen der Alpen und Pyrenäen bis nach Finnland, Südschweden, Norwegen sowie den Zuflüssen des Weißen Meeres, Irland, Schottland und Island. Außerdem lebt er in Südgrönland sowie in Nordamerika in einigen Seen in Québec, Maine und New Hampshire. Er ist die einzige Fischart im Hazensee auf der Ellesmere-Insel, seinem nördlichsten Verbreitungsgebiet. Je nach Lebensraum besitzt der Seesaibling zwar unterschiedliche Färbungen, ist aber am weißen Vorderrand von Bauchflosse und Afterflosse sowie an der größeren Maulspalte stets von den Forellen zu unterscheiden. In der Regel ist der Körper silbern, der Rücken blau-grau, und die Flanken sind mit zahlreichen hellen Punkten überzogen. Der Saibling hat ziemlich kleine, runde Schuppen. Zur Laichzeit wandern die Saiblinge flussaufwärts. Dabei werden sie dunkler, der Rücken wird grün-braun, der Bauch silber-weiß und die Flanken weisen zahlreiche roten bis orange Punkte auf. Die Laichplätze liegen in unterschiedlicher Tiefe über kiesigem bzw. steinigem Grund, in den Seen daher der Nähe von Bachmündungen oder über Quell- und Grundwasseraustritten. Vor und während der Laichzeit kommt es zu heftigen Kämpfen unter den Milchnern, die versuchen, den Laichplatz gegen Konkurrenten zu verteidigen. Jungfische des Seesaiblings verbringen bis zu 4 Jahre im Fluss, dann ziehen sie Richtung Meer. Es gibt auch eine Seesaibling-Art, die nicht wandert. Sie ist dunkler, der Bauch rosa, Rückenflosse sowie Afterflosse sind weiß. Die Flanken sind mit gelb-orangen Punkten übersät. Ernährung: Die Nahrung der Seesaiblinge besteht ausschließlich aus Wirbellosen und Jungfischen. Maße: Seesaiblinge erreichen ein Gewicht von 2 bis 7 kg. Ihre Länge kann - bei einem Gewicht von bis zu 15 kg - an die 80 cm betragen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_04%2Frf4_4.0.18021_20220411_162540.png.0181544f355d778a790cfa8f6740db56.png&f=1&nofb=1&ipt=b746b7e48360909b070675f1f257c61e0008995bd2a185878d184d83df76c4f7&ipo=images',
    },

    {
        name: 'Arktische Äsche',
        text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        Lebensraum: Untere Tunguska
        
        Arktische Äschen (Thymallus arcticus arcticus) findet man in den Becken der Flüsse Kara, Ob und Jenissei. Die Fische haben einen schlanken Körper und eine kurze, breite Rückenflosse mit einem Muster aus großen Flecken mit hellem metallischen Glanz. Sie werden am besten mit Posen- und Spinnangeln gefangen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_121242.png.8074735dd3544386d9252917c46fb70b.png&f=1&nofb=1&ipt=e81f81eeb89cb462c3f6c9fc21856469a028271bae5b1299b31fe46a1c2da5e0&ipo=images',
    },

    {
        name: 'Arktische Maräne',
        text: `Normale Trophäe: 3 kg
        Seltene Trophäe: 4 kg
        Lebensraum: Untere Tunguska
        
        Die Arktische Maräne (Coregonus autumnalis) lebt in der Küstenzone der Jenissei-Bucht. Während der Brutzeit steigt sie in die Flüsse auf, wo sie laicht. Der Fisch hat einen länglichen, glatten Körper. Der Rücken ist bräunlich-grün, die Seiten sind silber, der Bauch ist hell. Zum Fangen der Arktischen Maräne eignen sich Posenangeln, aber auch Spinn- und Grundmontagen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_160554.png.b1103be26f9d7f395cfb0e51decaec20.png&f=1&nofb=1&ipt=d13746140969791985bd3a09770494d39790531482b56400d8824fc59cef6c4f&ipo=images',
    },

    {
        name: 'Arktischer Rochen',
        text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 10 kg (Konnte noch nie bestätitgt werden!)
        Lebensraum: Unbekannt`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2023_04%2Fimage.png.b59eb4ecf83e7ae88a29618eba2468e8.png&f=1&nofb=1&ipt=3ca9fb3bd5f61f482a08b72ec78fe7c2c933e8b06b6602d1ec342dd8a860cbf7&ipo=images',
    },

    {
        name: 'Regenbogenstint',
        text: `Normale Trophäe: 270 g
        Seltene Trophäe: 340 g 
        Lebensraum: Untere Tunguska, Fluss Jama
        
        Der Regenbogenstint (Osmerus mordax) lebt in den Küstengewässern des Arktischen Ozeans, von wo aus er in die in ihn mündenden Flüsse gelangt. Er hat einen länglichen Körper, der mit großen silberfarbigen Schuppen bedeckt ist. Er unterscheidet sich vom europäischen Stint durch einen vorstehenden Unterkiefer mit kräftigen Zähnen. Zum Fangen der Stinte können Posen- oder Spinnangeln eingesetzt werden.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHqXPODo6evo%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b9b685a487d57074b4cb5b604c6d6b591507b8f5198e9fb417d8645db5433f1c&ipo=images',
    },

    {
        name: 'Rapfen',
        text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 13 kg 
        Lebensraum: Windenbach, Fluss Belaja, Fluss Sura, Wolchow, Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Der Rapfen oder Schied (Leuciscus aspius) ist eine Fischart aus der Familie der Karpfenfische und lebt in ganz Mitteleuropa von östlich des Rheins bis zur Wolga in Osteuropa sowie im Schwarzen und im Kaspischen Meer. Der Rapfen bevorzugt Gewässer mit Strömung; in Seen ist er selten vertreten. Der Rapfen hat einen ausgeklügelte Jagd-Technik. Er besitzt keine scharfen Zähne; deshalb hat er eine besondere Methode entwickelt, um Fische zu erbeuten. Seine Schwanzflosse spielt dabei eine große Rolle: Der Rapfen rast in einen Fischschwarm, betäubt mit Schlägen der Schwanzflosse seine Opfer und frisst sie anschließend. Charakteristisch ist sein schlanker, langgestreckter, seitlich etwas zusammengedrückter Körper. Der Rücken ist grau bis grau-blau gefärbt, die Flanken schimmern silbrig und gehen in den weißen Bauch über. Die Afterflosse ist am Außenrand sichelförmig eingebuchtet. Das Maul ist oberständig und auffallend groß, die Maulspalte reicht bei erwachsenen Tieren bis unter die Augen. Der kräftige Unterkiefer ist verdickt und besitzt in der Mitte einen "Höcker", der vom Aussehen her etwas an einen Laichhaken erinnert; dieser dient zum Festhalten der Beutefische. Ernährung: Junge Rapfen leben anfangs von Zooplankton, stellen ihre Nahrung aber schon bald auf Fische um. Der Rapfen ist somit die einzige Karpfenart, die sich fast ausschließlich räuberisch ernährt. Er ist ein sehr schneller Jäger, der meist schlanke Kleinfische in Oberflächennähe jagt, wie z.B. Lauben, Gründlinge und Rotaugen. Maße: Der Rapfen gehört zu den großwüchsigen Karpfenartigen und erreicht eine Länge von über 100 cm und ausnahmsweise ein Gewicht von über 10 kg. Die Durchschnittsgröße liegt zwischen 45 und 60 cm bei einem Gewicht von 3 - 5 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_11%2Frf4_4.0.15158_20201115_145009.png.5d346f733e78496816846215090f4660.png&f=1&nofb=1&ipt=9dc8311736d822988c34089582f050def2075fa041daca40cdd54ee09317a0bd&ipo=images',
    },

    {
        name: 'Atlantischer Blauflossenthunfisch',
        text: `Normale Trophäe: ???
        Seltene Trophäe: ???
        Lebensraum: Unbekannt`,
        image:'',
    },
    // to-do Ab hier kein Lebenraum mehr eingetragen 
    {
        name: 'Atlantischer Kabeljau',
        text: `Normale Trophäe: 50 kg
        Seltene Trophäe: 65 kg `,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.d8118fdb100c7b2b5aab8585f5ae6d11.png',
    },

    {
        name: 'Fußballfisch',
        text: `Normale Trophäe: 6,5 kg ?
        Seltene Trophäe: 8,5 kg ? `,
        image:'https://rf4.info/img/fish/158.png',
    },

    {
        name: 'Heilbutt',
        text: `Normale Trophäe: 150 kg 
        Seltene Trophäe: 250 kg (Noch nicht bestätigt) `,
        image:'https://rf4.info/img/fish/181.png',
    },

    {
        name: 'Makrele',
        text: `Normale Trophäe: 2 kg 
        Seltene Trophäe: 2,8 kg`,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.ae306f5767dec0e191691182e0485a06.png',
    },

    {
        name: 'Rotbarsch',
        text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 11 kg (Noch nicht bestätigt)`,
        image:'https://rf4.info/img/fish/177.png'
    },
    // to-do beschreibung einfügen atlantischer lachs
    {
        name: 'Atlantischer Lachs',
        text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 38 kg (Noch nicht bestätigt)`,
        image:'https://rf4game.com/forum/uploads/monthly_2017_10/a_salmon_m.thumb.png.d812ac9171012b11c1fb50261f0599bf.png'
    },

    {
        name: 'Makrelenhecht',
        text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 750 g (Noch nicht bestätigt)`,
        image:'https://rf4.info/img/fish/187.png'
    },

    {
        name: 'Gestreifter Seewolf',
        text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 750 g (Noch nicht bestätigt)`,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.835d220ca87d24579c953ef93a524131.png'
    },









    {
        name: 'Barsch',
        text: `Normale Trophäe: 100kg
        Seltene Trophäe: 200kg
        Lebensraum: Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Flussbarsche (Perca fluviatilis) leben im Süßwasser auf der gesamten Nordhalbkugel. Teilweise dringen sie bis ins Brackwasser vor. Die paarigen, brustständigen Bauchflossen verfügen über einen Hart- und fünf Weichstrahlen. Barsche besitzen kräftige Kammschuppen. Typisch für Barsche sind die geteilte Rückenflosse sowie die rötliche Färbung der Brust- und Bauchflossen. Die Bauchflossen sind brustständig. Die Haut zwischen den Flossenstrahlen weisen häufig vereinzelte schwarze Flecken verschiedener Größe auf. Der Körper besitzt ein Muster aus 6 bis 8 senkrechten dunklen Streifen und ist grau-grün gefärbt. Das Maul ist leicht oberständig. Ernährung: Flussbarsche ernähren sich von Wasserinsekten, Würmern, Krebstieren und Fischlaich. Ältere Barsche jagen als Raubfische auch andere Fischarten. Selbst Kannibalismus ist nicht selten. Maße: Flussbarsche erreichen je nach Nahrungsangebot eine maximale Länge von 50 cm und werden bis 4 kg schwer. Allerdings wachsen manche Flussbarsch-Population auch außerordentlich langsam; mit 8 bis 10 Jahren sind die Tiere dann erst 25 cm lang.`,
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

