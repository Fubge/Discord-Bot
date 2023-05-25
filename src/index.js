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
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2019_04%2Frf4_4.0.11882_20190422_185001.thumb.png.86f0d47192a91f145d9f9d3fbbd625bb.png&f=1&nofb=1&ipt=2cde772db4d5072172373909dc4d809e04408b1adc014cbe7818cd7bac1c4375&ipo=images'
    },

    {
        name: 'Amur Wels',
        text: `Normale Trophäe: 5 kg
        Seltene Trophäe: 7 kg
        Lebensraum: Untere Tunguska
        
        Die wichtigsten Lebensräume des Amurwelses (Silurus asotus) in Russland sind die Flüsse und Seen des Amurbeckens. Der Körper des Amurwelses ist dunkelgrün gefärbt, der Bauch ist hell. In Verhalten und Lebensweise ähnelt diese Welse ihrem europäischen Pendant. Der Amurwels wird hauptsächlich mit Hilfe von Posen- und Gundangeln gefangen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQXXGAOAvnIs%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d448adb983188d4590688bf7cde155cf85428aa7b32fd1b2a94d04e674a4bfb4&ipo=images'
    },

    {
        name: 'Seesaibling',
        text: `Normale Trophäe: 11 kg
        Seltene Trophäe: 16 kg
        Lebensraum: Kuory, Untere Tunguska, Fluss Jama
        
        Beschreibung und natürliches Vorkommen:
         Der Seesaibling (Salvelinus alpinus) gehört zur Gattung der Saiblinge (Salvelinus). Er lebt sowohl in isolierten Binnenseen als auch in küstennahen Meeresgewässern im nördlichen Eismeer. In Europa reicht sein Verbreitungsgebiet von den sauerstoffreichen Seen der Alpen und Pyrenäen bis nach Finnland, Südschweden, Norwegen sowie den Zuflüssen des Weißen Meeres, Irland, Schottland und Island. Außerdem lebt er in Südgrönland sowie in Nordamerika in einigen Seen in Québec, Maine und New Hampshire. Er ist die einzige Fischart im Hazensee auf der Ellesmere-Insel, seinem nördlichsten Verbreitungsgebiet. Je nach Lebensraum besitzt der Seesaibling zwar unterschiedliche Färbungen, ist aber am weißen Vorderrand von Bauchflosse und Afterflosse sowie an der größeren Maulspalte stets von den Forellen zu unterscheiden. In der Regel ist der Körper silbern, der Rücken blau-grau, und die Flanken sind mit zahlreichen hellen Punkten überzogen. Der Saibling hat ziemlich kleine, runde Schuppen. Zur Laichzeit wandern die Saiblinge flussaufwärts. Dabei werden sie dunkler, der Rücken wird grün-braun, der Bauch silber-weiß und die Flanken weisen zahlreiche roten bis orange Punkte auf. Die Laichplätze liegen in unterschiedlicher Tiefe über kiesigem bzw. steinigem Grund, in den Seen daher der Nähe von Bachmündungen oder über Quell- und Grundwasseraustritten. Vor und während der Laichzeit kommt es zu heftigen Kämpfen unter den Milchnern, die versuchen, den Laichplatz gegen Konkurrenten zu verteidigen. Jungfische des Seesaiblings verbringen bis zu 4 Jahre im Fluss, dann ziehen sie Richtung Meer. Es gibt auch eine Seesaibling-Art, die nicht wandert. Sie ist dunkler, der Bauch rosa, Rückenflosse sowie Afterflosse sind weiß. Die Flanken sind mit gelb-orangen Punkten übersät. Ernährung: Die Nahrung der Seesaiblinge besteht ausschließlich aus Wirbellosen und Jungfischen. Maße: Seesaiblinge erreichen ein Gewicht von 2 bis 7 kg. Ihre Länge kann - bei einem Gewicht von bis zu 15 kg - an die 80 cm betragen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_04%2Frf4_4.0.18021_20220411_162540.png.0181544f355d778a790cfa8f6740db56.png&f=1&nofb=1&ipt=b746b7e48360909b070675f1f257c61e0008995bd2a185878d184d83df76c4f7&ipo=images'
    },

    {
        name: 'Arktische Äsche',
        text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        Lebensraum: Untere Tunguska
        
        Arktische Äschen (Thymallus arcticus arcticus) findet man in den Becken der Flüsse Kara, Ob und Jenissei. Die Fische haben einen schlanken Körper und eine kurze, breite Rückenflosse mit einem Muster aus großen Flecken mit hellem metallischen Glanz. Sie werden am besten mit Posen- und Spinnangeln gefangen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_121242.png.8074735dd3544386d9252917c46fb70b.png&f=1&nofb=1&ipt=e81f81eeb89cb462c3f6c9fc21856469a028271bae5b1299b31fe46a1c2da5e0&ipo=images'
    },

    {
        name: 'Arktische Maräne',
        text: `Normale Trophäe: 3 kg
        Seltene Trophäe: 4 kg
        Lebensraum: Untere Tunguska
        
        Die Arktische Maräne (Coregonus autumnalis) lebt in der Küstenzone der Jenissei-Bucht. Während der Brutzeit steigt sie in die Flüsse auf, wo sie laicht. Der Fisch hat einen länglichen, glatten Körper. Der Rücken ist bräunlich-grün, die Seiten sind silber, der Bauch ist hell. Zum Fangen der Arktischen Maräne eignen sich Posenangeln, aber auch Spinn- und Grundmontagen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_160554.png.b1103be26f9d7f395cfb0e51decaec20.png&f=1&nofb=1&ipt=d13746140969791985bd3a09770494d39790531482b56400d8824fc59cef6c4f&ipo=images'
    },

    {
        name: 'Arktischer Rochen',
        text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 10 kg (Konnte noch nie bestätitgt werden!)
        Lebensraum: Unbekannt`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2023_04%2Fimage.png.b59eb4ecf83e7ae88a29618eba2468e8.png&f=1&nofb=1&ipt=3ca9fb3bd5f61f482a08b72ec78fe7c2c933e8b06b6602d1ec342dd8a860cbf7&ipo=images'
    },

    {
        name: 'Regenbogenstint',
        text: `Normale Trophäe: 270 g
        Seltene Trophäe: 340 g 
        Lebensraum: Untere Tunguska, Fluss Jama
        
        Der Regenbogenstint (Osmerus mordax) lebt in den Küstengewässern des Arktischen Ozeans, von wo aus er in die in ihn mündenden Flüsse gelangt. Er hat einen länglichen Körper, der mit großen silberfarbigen Schuppen bedeckt ist. Er unterscheidet sich vom europäischen Stint durch einen vorstehenden Unterkiefer mit kräftigen Zähnen. Zum Fangen der Stinte können Posen- oder Spinnangeln eingesetzt werden.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHqXPODo6evo%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b9b685a487d57074b4cb5b604c6d6b591507b8f5198e9fb417d8645db5433f1c&ipo=images'
    },

    {
        name: 'Rapfen',
        text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 13 kg 
        Lebensraum: Windenbach, Fluss Belaja, Fluss Sura, Wolchow, Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Der Rapfen oder Schied (Leuciscus aspius) ist eine Fischart aus der Familie der Karpfenfische und lebt in ganz Mitteleuropa von östlich des Rheins bis zur Wolga in Osteuropa sowie im Schwarzen und im Kaspischen Meer. Der Rapfen bevorzugt Gewässer mit Strömung; in Seen ist er selten vertreten. Der Rapfen hat einen ausgeklügelte Jagd-Technik. Er besitzt keine scharfen Zähne; deshalb hat er eine besondere Methode entwickelt, um Fische zu erbeuten. Seine Schwanzflosse spielt dabei eine große Rolle: Der Rapfen rast in einen Fischschwarm, betäubt mit Schlägen der Schwanzflosse seine Opfer und frisst sie anschließend. Charakteristisch ist sein schlanker, langgestreckter, seitlich etwas zusammengedrückter Körper. Der Rücken ist grau bis grau-blau gefärbt, die Flanken schimmern silbrig und gehen in den weißen Bauch über. Die Afterflosse ist am Außenrand sichelförmig eingebuchtet. Das Maul ist oberständig und auffallend groß, die Maulspalte reicht bei erwachsenen Tieren bis unter die Augen. Der kräftige Unterkiefer ist verdickt und besitzt in der Mitte einen "Höcker", der vom Aussehen her etwas an einen Laichhaken erinnert; dieser dient zum Festhalten der Beutefische. Ernährung: Junge Rapfen leben anfangs von Zooplankton, stellen ihre Nahrung aber schon bald auf Fische um. Der Rapfen ist somit die einzige Karpfenart, die sich fast ausschließlich räuberisch ernährt. Er ist ein sehr schneller Jäger, der meist schlanke Kleinfische in Oberflächennähe jagt, wie z.B. Lauben, Gründlinge und Rotaugen. Maße: Der Rapfen gehört zu den großwüchsigen Karpfenartigen und erreicht eine Länge von über 100 cm und ausnahmsweise ein Gewicht von über 10 kg. Die Durchschnittsgröße liegt zwischen 45 und 60 cm bei einem Gewicht von 3 - 5 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_11%2Frf4_4.0.15158_20201115_145009.png.5d346f733e78496816846215090f4660.png&f=1&nofb=1&ipt=9dc8311736d822988c34089582f050def2075fa041daca40cdd54ee09317a0bd&ipo=images'
    },

    {
        name: 'Atlantischer Blauflossenthunfisch',
        text: `Normale Trophäe: ???
        Seltene Trophäe: ???
        Lebensraum: Unbekannt`,
        image:''
    },
    // to-do Ab hier kein Lebenraum mehr eingetragen 
    {
        name: 'Atlantischer Kabeljau',
        text: `Normale Trophäe: 50 kg
        Seltene Trophäe: 65 kg `,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.d8118fdb100c7b2b5aab8585f5ae6d11.png'
    },

    {
        name: 'Fußballfisch',
        text: `Normale Trophäe: 6,5 kg ?
        Seltene Trophäe: 8,5 kg ? `,
        image:'https://rf4.info/img/fish/158.png'
    },

    {
        name: 'Heilbutt',
        text: `Normale Trophäe: 150 kg 
        Seltene Trophäe: 250 kg (Noch nicht bestätigt) `,
        image:'https://rf4.info/img/fish/181.png'
    },

    {
        name: 'Makrele',
        text: `Normale Trophäe: 2 kg 
        Seltene Trophäe: 2,8 kg`,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.ae306f5767dec0e191691182e0485a06.png'
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
        Seltene Trophäe: 38 kg `,
        image:'https://rf4game.com/forum/uploads/monthly_2017_10/a_salmon_m.thumb.png.d812ac9171012b11c1fb50261f0599bf.png'
    },

    {
        name: 'Makrelenhecht',
        text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 750 g `,
        image:'https://rf4.info/img/fish/187.png'
    },

    {
        name: 'Gestreifter Seewolf',
        text: `Normale Trophäe: 14,5 kg 
        Seltene Trophäe: 19 kg `,
        image:'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.835d220ca87d24579c953ef93a524131.png'
    },

    {
        name: 'Baikal Maräne',
        text: `Normale Trophäe: 6 kg 
        Seltene Trophäe: 7 kg
        
        Die Baikal-Maräne (Coregonus migratorius) hat ihren Hauptlebensraum im Baikalsee, ist aber auch in anderen Seen und Flüssen Sibiriens zu finden. Ihr länglicher Körper ist mit feinen Schuppen bedeckt; die Seiten sind silberfarben. Die Färbung des Rückens variiert von braun bis grün. Zum Fangen der Baikal-Maräne eignen sich Posenruten, aber auch Spinn- und Grundmontagen.`,
        image:'https://rf4.info/img/fish/95.png'
    },

    {
        name: 'Baltischer Stör',
        text: `Normale Trophäe: 200 kg 
        Seltene Trophäe: 300 kg
        
        Beschreibung und natürliches Vorkommen:
         Der Baltische Stör (Acipenser oxyrinchus) ist ein atlantischer Stör, der in der Ostsee lebt. Zum Laichen wandert er von der Ostsee zur Newa, und von dort steigt er weiter zum Ladoga-See auf. Ernährung: Der Baltische Stör führt ein räuberisches Leben und jagt in der Wassersäule nach kleinen Schwarmfischen. Er frisst aber auch Mollusken und benthische Wirbellose. Maße: Dieser Stör kann eine Länge von 3 m und eine Masse von mehr als 200 kg erreichen. Besonders große Exemplare können bei einer Länge von ca. 6 m mehr als 400 kg wiegen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2018_11%2Frf4_4.0.10788_20181120_175125.png.4945c9a61e702eab085e5f4dadae88eb.png&f=1&nofb=1&ipt=3df84aac121f64b724cccf5b38290f6932e6daf18aaae7bf81d19c13e401ba1f&ipo=images'
    },

    {
        name: 'Glatt Stör',
        text: `Normale Trophäe: 50 kg 
        Seltene Trophäe: 70 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Glatt-Stör oder Glattdick (Acipenser nudiventris) ist ein anadromer Fisch aus der Störfamilie. Sein Lebensraum ist der Aralsee, das Kaspische Meer und das Schwarze Meer. Sein Maul hat eine konische Form. Die Körperfarbe ist heller als die anderer Störarten, weshalb dieser Fisch manchmal auch als Weißer Stör bezeichnet wird. Ernährung: Wie auch andere Störe ist der Glatt-Stör ein Raubfisch. Seine Nahrung besteht aus Insektenlarven, Krebstieren, Mollusken und kleinen Fischen Maße: Die Länge eines ausgewachsenes Fisches kann 2 m und das Gewicht 30 kg oder mehr betragen.`,
        image:'https://rf4.info/img/fish/154.png'
    },

    {
        name: 'Kleiner Rotbarsch',
        text: `Normale Trophäe: 5,5 kg 
        Seltene Trophäe: 7 kg`,
        image:'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.d7d5ef70b0053e47d5d68da2d94dc564.png'
    },

    {
        name: 'Barsch',
        text: `Normale Trophäe: 100kg
        Seltene Trophäe: 200kg
        Lebensraum: Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Flussbarsche (Perca fluviatilis) leben im Süßwasser auf der gesamten Nordhalbkugel. Teilweise dringen sie bis ins Brackwasser vor. Die paarigen, brustständigen Bauchflossen verfügen über einen Hart- und fünf Weichstrahlen. Barsche besitzen kräftige Kammschuppen. Typisch für Barsche sind die geteilte Rückenflosse sowie die rötliche Färbung der Brust- und Bauchflossen. Die Bauchflossen sind brustständig. Die Haut zwischen den Flossenstrahlen weisen häufig vereinzelte schwarze Flecken verschiedener Größe auf. Der Körper besitzt ein Muster aus 6 bis 8 senkrechten dunklen Streifen und ist grau-grün gefärbt. Das Maul ist leicht oberständig. Ernährung: Flussbarsche ernähren sich von Wasserinsekten, Würmern, Krebstieren und Fischlaich. Ältere Barsche jagen als Raubfische auch andere Fischarten. Selbst Kannibalismus ist nicht selten. Maße: Flussbarsche erreichen je nach Nahrungsangebot eine maximale Länge von 50 cm und werden bis 4 kg schwer. Allerdings wachsen manche Flussbarsch-Population auch außerordentlich langsam; mit 8 bis 10 Jahren sind die Tiere dann erst 25 cm lang.`,
        image:'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frf4foryou.de%2Fwp-content%2Fuploads%2F2019%2F09%2FBarsch.png&f=1&nofb=1&ipt=79319935860323b8a14c39ad5dbf7a6bad3c29ed925bbbabe534cdd23bf2a0c2&ipo=images'
        
    },

    {
        name: 'Kleiner Rotbarsch',
        text: `Normale Trophäe: 5,5 kg 
        Seltene Trophäe: 7 kg`,
        image:'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.d7d5ef70b0053e47d5d68da2d94dc564.png'
    },

    {
        name: 'Weißlachs',
        text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 25 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Weißlachs (Stenodus leucichthys) ist ein Vertreter der Lachsfamilie. Es bewohnt die Gewässer des Kaspischen Meeresbeckens und ist auch kommerziell sehr wertvoll. Es hat einen langgestreckten, spindelförmigen Körper mit silberner Farbe, bräunlichblauem Rücken und weißem Bauch. Die Rücken- und Schwanzflossen sind bräunlichgrau, die anderen Flossen grau. Ernährung: Krebstiere sowie Insektenlarven bilden die Grundlage für die Ernährung junger Weißlachse. Erwachsene Fische ernähren sich ausschließlich von Fisch. Maße: Ausgewachsene Weißlachse können eine Länge von 130 cm und ein Gewicht von 14 kg erreichen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtSm9PrsIsh8%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=115e9f3e16080d78a62afe1e2c6e4494d168084f8f4d97d235519db99781df7a&ipo=images'
    },

    {
        name: 'Beluga Stör',
        text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Beluga-Stör (Huso huso) ist ein kommerziell sehr wertvoller Fisch. Es bewohnt die Becken des Kaspischen, Schwarzen, Asowschen und Adriatischen Meeres. Belugas haben einen runden Körper und einen kurzen spitzen Kopf. Der Rücken und die Seiten sind aschgrau, der Bauch ist hell. Ernährung: Die Hauptnahrung des Beluga besteht meistens aus Fisch. Beluga-Jungfische ernähren sich von Mollusken und Krebstieren. Maße: Der Beluga wird nicht umsonst auch als "Königsfisch" bezeichnet. Sein Gewicht kann über eine Tonne, und die Länge mehr als vier Meter betragen. Das durchschnittliche Gewicht des Belugas in der Wolga-Kaspischen Region ist 65-150 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Finjs5TXF_uk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d651855052522a90ee5e127e4c15fc4fb7e4136a727a34abb3ef2399cc5403d4&ipo=images'
    },

    {
        name: 'Marmorkarpfen',
        text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 45 kg
        
        Beschreibung und natürliches Vorkommen:
        Der Marmorkarpfen (Hypophthalmichthys nobilis) ist ein geselliger Freiwasserfisch aus der Familie der Karpfenfische, der in den 1960er Jahren aus Asien nach Europa eingeführt wurde. Heute findet man ihn in Weihern, Seen und einigen Talsperren, aber auch in Strömen und vereinzelt in kleineren Flüssen. Ernährung: Die Nahrung des Marmorkarpfens besteht vorwiegend aus Wasserpflanzen, wobei Jungpflanzen bevorzugt werden. Als erwachsener Fisch nutzt er im wesentlichen tierisches Plankton. Maße: Unter guten Lebensbedingungen kann der Marmorkarpfen bis zu ca. 150 cm lang und an die 30 kg schwer werden.`,
        image:'https://rf4game.com/forum/uploads/monthly_2017_10/bh_carp_m.thumb.png.b15246057f25e07c33020038f935af46.png'
    },

    {
        name: 'Schwarzer Büffelfisch',
        text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 20 kg
        
        Beschreibung und natürliches Vorkommen:
        Wie der Großmäulige Büffelfisch wurde auch der Schwarze Büffelfisch (Ictiobus niger) 1971 aus Nordamerika nach Russland eingeführt. Er bevorzugt Gewässer mit stark verschlammtem Boden. Der Fisch hat eine lange Rückenflosse, einen runden Körper und einen kompakten Kopf. Der Körper ist am Rücken und an den Seiten dunkel graugrün. Ernährung: Der Schwarze Büffelfisch ernährt sich von Plankton, Insektenlarven, kleinen Mollusken und Wasserpflanzen. Maße: Die durchschnittliche Länge eines ausgewachsenen Fisches beträgt etwa 50 cm, das Gewicht erreicht bis zu 7 kg. Gelegentlich gibt es Exemplare, die bis zu 20 kg wiegen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2018_12%2Fbl_buffalo.thumb.png.f22650b4376082db9c888319f05cb700.png&f=1&nofb=1&ipt=1b40e08dd36c289c9b6a30a94b31682db46fa6b9ae2e7175cd40b2129a63d9c6&ipo=images'
    },

    {
        name: 'Schwarzer Amur',
        text: `Normale Trophäe: 28 kg 
        Seltene Trophäe: 40 kg
        
        Beschreibung und natürliches Vorkommen:
        Das ursprüngliche Verbreitungsgebiet des Schwarzen Amurs (Mylopharyngodon piceus) ist Ostasien. In China kommt er in vielen Flüssen vor, die in den Pazifik münden, wie zum Beispiel dem Perlfluss (Zhu Jiang) oder dem Amur, außerdem in der Mandschurei und im süddöstlichen Russland sowie im Honghe und im Roten Fluss im nördlichen Vietnam. Aus seinem Heimatgebiet China wurde er in zahlreiche Länder Europas, Asiens und Amerikas eingeführt. Der Schwarze Amur bevorzugt Süßwasser, aber kann auch im Salzwasser überleben. Er hat einen schlanken, langgestreckten, im Querschnitt fast drehrunden Körper mit relativ breiter Schwanzwurzel. Auffällig ist die dunkelgraue bis blauschwarze Färbung dieser Fischart, nur die Bauchseite ist silbrig weiß. Die Hautlappen der Nasenöffnung sind groß. Die Schlundzähne sind zu massiven Mahlzähnen ausgebildet. In Russland wurde der Schwarze Amur auf die Rote Liste gesetzt und wird durch den Staat geschützt. Ernährung: Der Schwarze Amur ernährt sich zum größten Teil von Mollusken. Maße: Der Schwarze Amur ist ein großwüchsiger Fisch und erreicht eine Maximal-Länge von über 80 cm mit einem Gewicht bis zu 30 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmjgWq3auno4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=779c3c00aefc48d2ce4fdcc73cc4efc02a1c9399c7145d22b686547fa9f3a84a&ipo=images'
    },

    {
        name: 'Schwarzfisch',
        text: `Normale Trophäe: 23 kg 
        Seltene Trophäe: 30 kg`,
        image:'https://rf4.info/img/fish/194.png'
    },

    {
        name: 'Schwarzmeer Beluga',
        text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Lebensraum des Belugas (Huso huso ponticus) umfasst die Wasserflächen des Schwarzen und Desowschen Meeres. Dieser Fisch hat einen kräftigen, zylindrischen Körper von aschgrauer Farbe und einen hellen Bauch. Er lässt sich Grundnah sowohl mit Karpfen, Posen als auch mit der Spinnrute beangeln. Maße: Dieser Stör kann eine Länge von 4,6 m erreichen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s7ZSzVTydNIFqDIi4BAJyAHaEK%26pid%3DApi&f=1&ipt=9a1b1ea0c37c69175773e632634ce4c6673fa79bc60a07c730a846281f6f7ae6&ipo=images'
    },

    {
        name: 'Schwarzmeer Kutum',
        text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen:
        Der Schwarzmeer-Kutum (Rutilus frisii) ist ein Mitglied der Karpfenfamilie und lebt im Schwarzen und Asowschen Meer. Der gedrungene Körper ist mit großen Schuppen bedeckt; der Rücken ist dunkelgrün, die Seiten sind silbrig. Ernährung: In der Regel ziehen es die Fische vor, in Bodennähe zu bleiben und dort nach Kleinlebewesen und anderer Nahrung zu suchen. Gelegentlich kommen sie aber auch an die Wasseroberfläche. Man kann sie also mit einer Vielzahl unterschiedlicher Angel-Montagen fangen. Maße: Erwachsene Fische können bis zu 75 cm lang werden.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_03%2Frf4_4.0.14177_20200320_161454.thumb.png.dbc4b8228dab45adbd8972ea0138300e.png&f=1&nofb=1&ipt=91165d67f86ad0df7b50640af4c4d141022ee78a1329b1528f9d59f06892170a&ipo=images'
    },

    {
        name: 'Schwarzmeer Seelaube',
        text: `Normale Trophäe: 500 g 
        Seltene Trophäe: 700 g
        
        Beschreibung und natürliches Vorkommen: 
        Schwarzmeer-Seelauben (Alburnus mento) leben im Schwarzmeer- und Azov-Becken. Die Fische haben einen länglichen, seitlich zusammengedrückten Körper von mittlerer Höhe. Der Rücken ist dunkelgrün mit einem bläulichen Schimmer, die Seiten sind heller und glänzen silbrig, der Bauch ist weiß. Ernährung: Der Fisch ernährt sich in freier Natur von Zooplankton. Am besten fängt man Schwarzmeer-Seelauben auf Schwimmer-Montagen, aber man kann es auch mit der Grundangel versuchen. Maße: Erwachsene Fische können bis zu 28 cm lang werden.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_09%2Frf4_4.0.15158_20200929_094300.png.d5c30000b29941fdbaa22ede2d6db86d.png&f=1&nofb=1&ipt=ec1fc4614e6ea4f8789344d68a290fbdc0dac3dfe5ef08a1de8b7be02c4b0ca7&ipo=images'
    },

    {
        name: 'Schwarze Felchen',
        text: `Normale Trophäe: 3,5 kg 
        Seltene Trophäe: 5 kg
        
        Das Schwarze Felchen ist eine Unterart der Gemeinen Felchen und bewohnen den Ladogasee. Ihr Aussehen ähnelt dem Gemeinen Felchen, die Schuppen sind im Vergleich jedoch dunkler. Der effektivste Weg das Schwarze Felchen zu fangen, sind Spinnfisch-Methoden.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgfXNBwKcd6k%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b666564124c22ce4ea2bb5fa428371a1b2c41debb04845f97ab9933b1436b99b&ipo=images'
    },

    {
        name: 'Kaspischer Schwarzrücken Hering',
        text: `Normale Trophäe: 250 g 
        Seltene Trophäe: 340 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Kaspische Schwarzrücken-Hering (Alosa kessleri) ist ein anadromer Fisch. Sein Habitat ist das Kaspische Meeresbecken. Er hat einen länglichen Körper, einen Bauch mit ausgeprägtem Kiel von den Kiemen bis zum Beginn der Afterflosse, und einen ziemlich großen, breiten Kopf mit gut entwickelten Zähnen. Der obere Teil des Kopfes und die Brustflossen sind dunkel. Ernährung: Die Nahrung des Kaspischen Schwarzrückens besteht aus Krebstieren, Insektenlarven sowie Jungfischen. Maße: Der Fisch kann eine Länge von bis zu 50 cm und ein Gewicht bis zu 2 kg erreichen.`,
        image:'https://rf4game.com/forum/uploads/monthly_2018_12/1961923033_blackspinedherring.thumb.png.341768c09281a3377cc4b83c5157e6fa.png'
    },

    {
        name: 'Laube',
        text: `Normale Trophäe: 110 g 
        Seltene Trophäe: 160 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Laube oder Ukelei (Alburnus alburnus) gehört zur Familie der karpfenartigen Fische (Cyprinidae). Lauben leben in größeren Schwärmen in Seen und langsamen Fließgewässern von der Barbenregion bis in die Brachsenregion. Aber auch im Brackwasser der Ostsee sind sie heimisch. Die Laube hat einen schlanken Körper mit seitlich abgeflachter Schwanzwurzel. Das Maul ist deutlich oberständig. Der Rücken zeigt eine grün-graue bzw. blaugrüne Farbe, Seiten und Bauch haben einen silbernen Glanz. Die Flossen sind etwas dunkler als der Rücken. Die Afterflosse liegt unmittelbar unter der Rückenflosse. Eine Besonderheit der Ukelei ist, dass ihre Schuppen sehr locker in der Haut sitzen und sich deshalb bei Berührung leicht ablösen. Ernährung: Die Laube ernährt sich von Plankton sowie von Insekten an der Wasseroberfläche Maße: Lauben werden bis 20 cm, selten bis 25 cm lang. Das Gewicht liegt bei 60-70 g.`,
        image:'https://rf4game.com/forum/uploads/monthly_2017_10/c_bleak_s.thumb.png.b567389e13df65622f11a3bca293bf32.png'
    },

    {
        name: 'Zope',
        text: `Normale Trophäe: 750 g 
        Seltene Trophäe: 1100 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Zope (Ballerus ballerus) ist ein Karpfenfisch, der hauptsächlich an den Unterläufen der Weser und Elbe, in der Donau sowie an Zuflüssen zur Ost- und Nordsee beheimatet ist. Zopen haben einen hochrückigen, seitlich abgeflachten Körper. Von den Brachsen kann man sie an der sehr langen, über 30-strahligen Afterflosse unterscheiden. Das Maul ist endständig und die Maulspalte eng. Zopen haben eine grausilbrige Körperfarbe mit einer orangefarbenen Kehle, der Rücken ist dunkelgrün oder dunkelblau mit einem metallischen Glanz. Die Brust- und Bauchflossen sind gelblich mit dunklen Kanten, die anderen Flossen sind schmutzig-weiß mit grauem Rand Ernährung: Zopen leben überwiegend von Insektenlarven, Würmern und Kleinkrebsen. Maße: Ausgewachsene Zopen im Alter von acht bis elf Jahren werden bis 40 cm lang. Das Durchschnittsgewicht beträgt 500 - 600 g.`,
        image:'https://rf4.info/img/fish/36.png'
    },

    {
        name: 'Blauleng',
        text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 35 kg`,
        image:'https://rf4.info/img/fish/175.png'
    },

    {
        name: 'Blauer Wittling',
        text: `Normale Trophäe: 900 g 
        Seltene Trophäe: 1200 g`,
        image:'https://rf4.info/img/fish/185.png'
    },

    {
        name: 'Braschnikow Hering',
        text: `Normale Trophäe: 700 g 
        Seltene Trophäe: 1000 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Braschnikow-Hering (Alosa braschnikowi) ist ein Fisch aus der Heringsfamilie, der endemisch in den Gewässern des Kaspischen Meeresbeckens lebt. Sein Rücken und der obere Kopfteil sind grünlich-schwarz. Er hat gut entwickelte Zähne. Ernährung: Die Nahrung des Der Braschnikow-Herings besteht aus kleinen Fischen und Krebstieren. Maße: Alosa braschnikowi ist ein für Heringsarten ziemlich großer Fisch, dessen Länge 50 cm erreichen kann.`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_12/b_herring.thumb.png.8a5866ebc8d6c4381b3d69dd9c65cf47.png'
    },

    {
        name: 'Brachse',
        text: `Normale Trophäe: 4,4 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Brachse (Abramis brama) ist Fischart aus der Familie der Karpfenfische (Cyprinidae). Brachsen sind in Europa nördlich der Alpen und Pyrenäen sowie auf dem Balkan weit verbreitet. Im Osten findet man sie bis zum Kaspischen Meer, dem Schwarzen Meer sowie dem Aralsee und Balchaschsee. Brachsen bevorzugen Gewässer mit schlammigem Grund und Wasserpflanzenteppichen, welche Deckung und Nahrung bieten. Sie leben vor allem in der nach ihnen benannten Brachsenregion sehr langsam fließender Flüsse (vor allem in Unterläufen) und in Seen mit einem hohen Nährstoffanteil und schlammigem Grund. Brachsen haben einen seitlich stark zusammengedrückten und sehr hochrückigen Körper. Der Rücken ist meist dunkel und braun bis grüngold. Die Flanken variieren zwischen dunkelbraun und goldbraun. Der Bauch ist weiß. Der untere Teil der Schwanzflosse ist länger als der obere. Die Spitzen der Brustflossen reichen bis zum Ansatz der Bauchflossen. Der Ansatz der Afterflosse liegt bei der Brachse meistens gegenüber dem Ansatz bzw. der vorderen Hälfte der Rückenflosse. Der Kopf ist ebenso wie die Augen verhältnismäßig klein. Das Maul ist mäßig unterständig und leicht vorstülpbar. Die Brachse ist ein scheuer Fisch und reagiert rasch auf Störgeräusche, deshalb hält sie sich gern in tieferen Wasserlöchern auf. Durch ihre Wühltätigkeit bei der Nahrungsaufnahme trübt sich das Wasser in ihrer Umgebung meist deutlich ein und es bleiben die typischen Fraßtrichter zurück, die ein Hinweis auf ihr Vorkommen sind. Die Brachse hat 10 einreihige Schlundzähne, um ihre Nahrung festzuhalten und zu zerquetschen. Ernährung: Brachsen suchen ihre aus Kleinlebewesen, Würmern und Insektenlarven bestehende Nahrung in der Schlammschicht des Gewässergrundes. Auch pflanzliche Kost wird gefressen. Maße: Die Durchschnittsgröße einer Brachse beträgt 30 - 45 cm, große Exemplare können bis zu 75 cm groß werden und ein Gewicht bis zu 8 kg erreichen`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FafTRtzS_BJM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a61125d6148f7d5794c6addd8060a294f10a0f5c9048e5dd650262e78f961565&ipo=images'
    },

    {
        name: 'Große Bodenrenke',
        text: `Normale Trophäe: 7 kg 
        Seltene Trophäe: 10 kg
        
        Die Große Bodenrenke (Coregonus nasus) ist in den Flüssen und Seen des europäischen Teils Sibiriens und in Kamtschatka verbreitet. Sie hat einen hohen, an den Seiten zusammengedrückten, massiven Körper mit großen Schuppen. Die Farbe der Flanke ist dunkel mit einem bronzenen Schimmer an den Seiten. Die Große Bodenrenke wird am besten mit Posen- und Spinnangeln gefangen.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2021_09%2Frf4_4.0.16557_20210920_144848.png.345c48f0cb256dcbd33b6c9c63ab72fe.png&f=1&nofb=1&ipt=07de2321412f95fb7db6bbe22e7e3808e714682522e407c67c2cb3aaddec1354&ipo=images'
    },

    {
        name: 'Bachforelle',
        text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 5 kg
        
        Beschreibung und natürliches Vorkommen:
        Die Bachforelle (Salmo trutta) bewohnt viele Flüsse im europäischen Teil Russlands. Gewöhnlich findet man sie in den Gewässern, wo auch See- oder Meerforellen vorkommen können. Bachforellen zeichnen sich durch eine helle Grundfärbung aus, wobei ihr Rücken dunkler ist und der Bauch einen goldenem Schimmer aufweist. An den Seiten und an den Flossen finden sich schwarze, orange und rote Flecken mit einem hellen Rand. Intensität und Tönung dieser Färbung hängen von der Farbe des Gewässers und des Gewässergrunds ab. Ernährung: Die Bachforelle ernährt sich von kleinen Krebsen, Insekten, Kaulquappen und Fischbrut. Maße: Das übliche Gewicht von erwachsenen Fischen beträgt 300 bis 500 g, aber es gibt auch Individuen, die bis zu 1-2 kg heranwachsen`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2019_04%2F1419371668_Bachforelle01-01.Trophy.png.c4bbe95c89515f863965170bbd08dbcc.png&f=1&nofb=1&ipt=7946c59bb7f6a2e39035d4771b207c72e2be4ff6d25686adcaf1a9271622a49f&ipo=images'
    },

    {
        name: 'Großmäuliger Büffelfisch',
        text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 20 kg
        
        Beschreibung und natürliches Vorkommen: Der Großmäulige Büffelfisch (Ictiobus cyprinellus) ist ein im Süßwasser lebender Schwarmfisch. Sein natürlicher Lebensraum befindet sich in den Gewässern Nordamerikas. 1971 wurde er über die Fischbrutstätte Gorjatschi Kljutsch im Krasnodar-Territorium nach Russland eingebracht. Inzwischen ist er in vielen Gewässern des Kuban, des Don und der Wolga verbreitet. Er bevorzugt die bodennahen Regionen von großen, langsam fließenden Flüssen sowie deren Altarme und Strömungskehren. Sein Körper ist mit großen Schuppen bedeckt und hat eine runde Form. Der Rücken ist hellbraun, die Seiten sind matt, die Flossen grau. Ernährung: Der Fisch ernährt sich von Phytoplankton, Mollusken, Wasserinsekten und deren Larven. Maße: Die maximale Größe eines ausgewachsenen Fisches beträgt bis zu 120 cm, und das Gewicht bis zu 45 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZvIlmLMmvqg%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=3bde815fa1e58667d95c23ebcb59d1f21828665c722d478cd8bbda7396ad37ca&ipo=images'
    },

    {
        name: 'Quappe',
        text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 14 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Quappe (Lota lota) ist ein Knochenfisch aus der Familie der Lotiden. Ihr Verbreitungsgebiet ist in Europa durch die Rhone, den Po und den nördlichen Balkan begrenzt. Die Quappe ist der einzige Fisch aus der Ordnung der Dorschartigen, der ausschließlich im Süß- oder Brackwasser vorkommt. Sie ist daher zwar auch im Brackwasser von Flussmündungen zu finden, bevorzugt aber das Süßwasser tiefer Seen und kühler Flüsse. Ihr langgestreckter Körper ist vorn im Querschnitt rund und nach hinten zunehmend seitlich abgeflacht. Die Quappe trägt eine braune oder schwarze Marmorierung auf gelbem, hellbraunem oder braunem Grund. Der Bauch ist hell. Die Quappe hat zwei weichstrahlige Rückenflossen, von denen die zweite etwa sechsmal länger ist als die erste und fast über die halbe Körperlänge reicht. Auffallend lang ist auch die Afterflosse. Das breite Maul der Quappe ist leicht unterständig und trägt am Kinn ein lange Bartel. Zwei sehr kurze Barteln befinden sich außerdem hinter den vorderen Nasenlöchern. Gehört in Deutschland zu den stark gefährdeten Fischarten Ernährung: Die Quappe ist ein bodenlebender und nachtaktiver Raubfisch. Maße: Quappen können bis zu einer Länge von 150 cm und einem Gewicht von 34 kg heranwachsen, werden in der Regel allerdings nicht größer als 40 cm und nicht schwerer als 3 kg.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2020_01%2F700207818_Quappe07-07.Trophy.jpg.c4ec35639d94b933b8174ea318e8a7b4.jpg&f=1&nofb=1&ipt=fd0fa3d33105f112d756878676ca30de3bfefc43e38bd78b5f99c19bb709330f&ipo=images'
    },

    {
        name: 'Kaspische Forelle',
        text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 50 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Kaspische Forelle (Salmo labrax), auch Schwarzmeeforelle genannt, ist eine der größten Forellenarten. Ihr Habitat ist das Kaspische Meeresbecken. Sie bevorzugt Gewässer mit hohem Sauerstoffgehalt. Die Körperform der Kaspischen Forelle ähnelt dem Atlantischen Lachs. Die Körperseiten sind silbrig, der Rücken ist dunkel. An den Flanken und am Kopf trägt die Kaspische Forelle dunkelgraue Flecken. Ernährung: Die Hauptnahrung der Kaspischen Forelle besteht aus Krebstieren, Wasser- und Fluginsekten und deren Larven. Ausgewachsene Tiere ernähren sich von Fischen. Maße: Das durchschnittliche Gewicht eines erwachsenen Fisches beträgt etwa10 kg bei einer Körperlänge von bis zu 130 cm.`,
        image:'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2021_11%2Frf4_4.0.17239_20211104_183400.png.51f43601ccee3be7d2da7692d2ce84f6.png&f=1&nofb=1&ipt=a526d67222c1580c80e41d0952e100e7e08cfb2c7059864a3864509d00d460cd&ipo=images'
    },

    {
        name: 'Kutum',
        text: `Normale Trophäe: 5 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Kutum oder Kaspische Weißfisch (Rutilus kutum) ist ein großer Fisch aus der Familie der der Karpfenartigen. Er lebt im Becken des Kaspischen Meeres sowohl im Süß- als auch im Brackwasser. Der Kutum hat einen langgestreckten Körper, der mit zunehmendem Alter "vierkantig" wird. Der Rücken ist dunkel und grün getönt. Die Seiten sind silbrig. Ernährung: Die Nahrung des Kutum besteht aus Wasserinsekten und verschiedenen benthischen Wirbellosen. Maße: Erwachsene Fische erreichen eine Länge von 75 cm und ein Gewicht von mehr als 6 kg.`,
        image:'https://rf4.info/img/fish/57.png'
    },

    {
        name: 'Kaspineunauge',
        text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 200 g
        
        Beschreibung und natürliches Vorkommen:
        Das Kaspineunauge (Caspiomyzon wagneri) ist ein anadromer Fisch. Es lebt im Becken des Kaspischen Meeres und hat einen langen, schlangenartigen, schuppenlosen sowie mit Schleim bedeckten Körper. Seine Körperfarbe ist gleichmäßig grau. Ernährung: Grundnahrungsquelle der Kaspineunaugen sind Algen, Überreste verwesender Tiere und Pflanzen, tote Fische oder Kleintiere. Maße: Ausgewachsene Exemplare können eine Länge von 55 cm erreichen und bis zu 200 g wiegen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_12/c_lamprey.thumb.png.e1f5dca16d4c6eb08a150c2043f49821.png'
    },

    {
        name: 'Wobla',
        text: `Normale Trophäe: 500 g 
        Seltene Trophäe: 800 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Wobla (Rutilus caspicus) ist ein Vertreter der Karpfenfamilie. Sie lebt im Becken des Kaspischen Meeres. Woblas haben einen eher breiten Körper, der an den Seiten abgeflacht ist. Die Schuppen sind groß und grau. Eine Wobla ähnelt einem Rotauge, ist im Unterschied zu diesem jedoch größer. Ernährung: Die Nahrung von Woblas sind kleine Krebstiere, Insekten und ihre Larven. Maße: Die durchschnittliche Körperlänge einer erwachsenen Wobla beträgt etwa 30 cm.`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_12/vobla.thumb.png.996eb20c8cfdfa50a309d1fa02735b33.png'
    },

    {
        name: 'Wels',
        text: `Normale Trophäe: 100 kg 
        Seltene Trophäe: 200 kg
        
        Beschreibung und natürliches Vorkommen: 
        Das Verbreitungsgebiet des Welses (Silurus glanis) erstreckt sich von Mittel- und Osteuropa bis Zentralasien. Dabei werden bevorzugt große Flüsse und Seen mit schlammigem Grund besiedelt. Der Wels ist der größte reine Süßwasserfisch Europas. Welse sind vorwiegend nacht- und dämmerungsaktive Raubfische. Ernährung: Welse ernähren sich von lebenden und toten Fischen, aber auch von Wirbellosen und gelegentlich von kleinen Wasservögeln und Säugetieren. Sie nehmen nahezu alles an, was von der Größe her bewältigt werden kann.. Maße: Welse wachsen ihr Leben lang und erreichen eine Länge von bis zu 5 m und ein Gewicht von 300 kg.`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_08/w_catfish_m.thumb.png.f25654c9cb972eb10cb8c86e168d3df2.png'
    },

    {
        name: 'Bachsaibling',
        text: `Normale Trophäe: 5 kg 
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Bachsaibling (Salvelinus fontinalis) gehört zur Familie der Salmoniden. Er wurde 1884 aus Nordamerika eingeführt und besiedelt jetzt viele Gewässer Europas, Asiens und Nordamerikas. Der Bachsaibling gilt als einer der schönsten und farbenprächtigsten Vertreter der Salmoniden. Sein Körper ist typisch torpedoförmig. Die bauchseitigen Flossen haben einen auffällig rot-orange gefärbten Saum mit weißem Rand. Charakteristisch ist auch die schmale schwarze Abgrenzung dieses weißen Randes gegen das Rot der Flossen. Der Rücken ist braun gefärbt und oliv marmoriert. Bachsaiblinge haben kleine Schuppen und ein großes, tief eingeschnittenes Maul. Ernährung: Die Nahrung der Bachsaiblinge besteht überwiegend aus Planktonkrebsen und Bodenlebewesen. Im Sommer erbeuten Bachsaiblinge auch Anflugnahrung, wie z.B. Heuschrecken. Größere Exemplare ernähren sich von Fischen. Maße: Entscheidend für das Wachstum der Saiblinge sind unter anderem Gewässerbeschaffenheit und Nahrungsmenge. Die Länge wildlebender Bachsaiblinge in Europa überschreitet selten 35, maximal 55 cm. Nordamerikanische Saiblinge können hingegen bis zu 4 kg schwer werden.`,
        image:'https://rf4game.de/forum/uploads/monthly_2021_04/salvel_l_m.thumb.png.0c803469366054c799de6f7b642aaeed.png.dc66d7faf04d838d997bbe1715f7d031.png'
    },

    {
        name: 'Schläfergrundel',
        text: `Normale Trophäe: 400 g 
        Seltene Trophäe: 700 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Amur-Schläfergrundel (Perccottus gleniii) ist ein Süßwasserfisch aus der Familie der Zahn-Schläfergrundeln. Sie kommt im Amurbecken im fernen Osten Russlands, im nordöstlichen China sowie im nördlichen Korea vor. Diese Grundel lebt in stehenden Gewässern wie Seen, Teichen, Altarmen und Sümpfen mit dichtem Pflanzenbewuchs und meidet selbst langsam strömendes Wasser. Die Bauchflossen dieser Grundel-Art sind nicht zu einer Saugscheibe zusammengewachsen. Männliche Schläfergrundeln sind zur Paarungszeit schwärzlich mit einem grünen Schimmer und zeigen leuchtend grüne Punkte auf dem Rumpf und auf den unpaarigen Flossen sowie einen Buckel im Nacken. Ernährung: Schläfergrundeln leben räuberisch von Larven, insbesondere Kaulquappen, kleinen Krebstieren und Fischen sowie Wirbellosen. Außerdem kann es zu Kannibalismus kommen. Maße: Die Schläfergrundel erreicht eine Länge bis 25 cm und ein Maximalgewicht von 300 g.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_10/a.sleeper_b.thumb.png.3fbac008002ebd94b162d57c30273afd.png'
    },

    {
        name: 'Königslachs',
        text: `Normale Trophäe: 40 kg 
        Seltene Trophäe: 60 kg
        
        Der Königslachs (lat. Oncorhynchus tshawytscha ) ist einer der größten Vertreter in der Lachsfamilie. Er bewohnt Gewässer in Kamtschatka, Tschukotka und im Bering- und Ochotskischen Meer. Er hat einen großen Kopf und einen kräftigen, torpedoförmigen Körper. Auf dem Rücken und den Schwanzflossen befinden sich kleine schwarze Flecken. Während des Laichens färbt sich der Körper des Fisches rötlich-braun. Die Körperproportionen bleiben gleich, aber der Kiefer des Männchens wird leicht gebogen, was zu dem berühmten Laichhaken führt. Königslachse können mit Posen- oder Spinnfischmontagen gefangen werden.`,
        image:'https://rf4game.de/forum/uploads/monthly_2021_05/chavycha.thumb.jpg.81427fb56124a1301d589a6efbd09f51.jpg'
    },

    {
        name: 'Döbel',
        text: `Normale Trophäe: 4 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Döbel (Squalius cephalus) ist in fast ganz Europa mit Ausnahme Schottlands, Irlands und dem äußersten Norden Skandinaviens zu finden. Außerdem lebt er in der Türkei, Russland, Armenien, Georgien und dem Iran. Der Döbel gehört, was sein Lebensraum betrifft, wohl zu den anpassungsfähigsten Fischen überhaupt. Er kommt von kühlen kleinen Bächen bis hin zu den Niederungsflüssen der Brachsenregion ebenso vor wie in nahezu jeder Art von stehendem Gewässer. Sein bevorzugter Lebensraum sind jedoch eher sommerwarme, langsam fließende oder stehende Gewässer mit reichlich Deckung. Der Döbel hält sich gerne in Ufernähe unter überhängenden Ästen und in der Nähe von Totholzbereichen auf. Der Döbel ist ein ansehnlicher Fisch. Sein Rücken ist dunkelgrün, fast schwarz, die Seiten schimmern silbern. Die Brustflossen sind orange, Bauch und Afterflossen sind rot, die Schwanzflosse ist schwarz. Sein Kopf ist relativ groß und breit. Ernährung: Der Döbel ist ein Raubfisch. Während bei den Jugendstadien Insektenlarven, kleine Muscheln und pflanzliche Kost noch einen erheblichen Teil der Nahrung darstellen, ernähren sich erwachsene Döbel meist von Mollusken, Regenwürmern, Jungfischen, Flusskrebsen oder Grasfröschen. Maße: Der Döbel erreicht eine Maximalgröße von 80 cm mit einem Gewicht von ca. 8 kg.`,
        image:'https://rf4.info/img/fish/27.png'
    },

    {
        name: 'Keta Lachs',
        text: `Normale Trophäe: 8 kg 
        Seltene Trophäe: 10 kg
        
        Der Ketalachs (Oncorhynchus keta), auch Hundslachs genannt, ist einer der am häufigsten vorkommenden Lachsfische. Sein Lebensraum ist unglaublich groß. In Russland ist er im Raum des Arktischen Ozeans, im Bering- und Ochotskischen Meer, auf Kamtschatka, Sachalin und den Kurilen zu finden. Beim Laichen ändert er seine silberne Färbung zum Paarungskleid: Kopf und Oberkörper werden schwarz, auf dem Körper erscheinen dunkelviolette oder dunkelrote Streifen. Bei den Weibchen ändern sich die Proportionen von Körper und Kopf während der Laichzeit fast nicht. Bei den Männchen ragt der zugewachsene Oberkiefer in Form eines kräftigen Laichhakens über dem Unterkiefer. Der Körper wird durch die Entwicklung eines großen Höckers hinter dem Kopf noch höher. Dieser Fisch lässt sich vor allem mit Kunstködern und Lebendködern beangeln.`,
        image:'https://rf4game.de/forum/uploads/monthly_2021_05/keta.thumb.jpg.1c2a29fb16a3ecec1cbf58031bbbb32b.jpg'
    },

    {
        name: 'Tyulka Sardine',
        text: `Normale Trophäe: 24 g
        Seltene Trophäe: 28 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Schwarzmeertyulka oder Tyulka-Sardine (Clupeonella cultriventris) ist ein kleiner Heringsfisch. Sie lebt im Schwarzen sowie im Kaspischen Meer sowie in den dort einmündenden Flüssen. Ihr Bauch und ihre Seiten sind silberfarben, der Rücken und die Oberseite des Kopfes hingegen dunkler mit einen blaugrünen Farbton. Ernährung: Die Tyulka-Sardine ernährt sich hauptsächlich von Zooplankton. Dieser Fisch kann gut mit der Stipp-Angel gefangen werden. Er eignet sich auch als Köderfisch für Barsch, Quappe oder Hecht. Maße: Die Länge der erwachsenen Exemplare beträgt 9-15 cm.`,
        image:'https://rf4game.de/forum/uploads/monthly_2020_02/tiulka.thumb.jpg.f38b506a65116f0d664f252d41050b2a.jpg'
    },

    {
        name: 'Silberlachs',
        text: `Normale Trophäe: 5,5 kg
        Seltene Trophäe: 7 kg
        
        Der Silberlachs ist im Nordpazifik entlang der Westküste Nordamerikas und vor Kamtschatka vom Anadyr-Fluss bis zu den Flüssen des nordwestlichen Ochotskischen Meeres verbreitet. Er wird wegen seiner hellen, silberfarbenen Schuppen oft auch als Silberlachs bezeichnet. Während des Laichens beginnt sich sein Aussehen schnell zu verändern. Der Körper wird höher, der Kopf länger, und die Kiefer werden wie zu einem Schnabel gebogen. Wie bei allen pazifischen Lachsen sind diese Veränderungen bei den Männchen stärker ausgeprägt. Auch ihre Färbung ändert sich - ihre Flanken werden karminrot, während der Rücken und der Kopf bläulich-grün werden. Silberlachse werden oft mit Kunst- und Lebendködern gefangen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2021_05/kijuch.thumb.jpg.9d855dfc4d7fdea55b9743336a51f46b.jpg'
    },

    {
        name: 'Barbe',
        text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 12 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Barbe (Barbus barbus) ist ein europäischer Süßwasserfisch aus der Familie der Karpfenfische (Cyprinidae) und Namensgeber der Unterfamilie Barbinae. Sie kommt in Europa von den Pyrenäen bis zum Pregel und zum Dnjepr vor. Die Barbe lebt in sauerstoffreichen Fließgewässern der nach ihr benannten Barbenregion und bevorzugt sandigen oder kiesigen Bodengrund. Sie hat einen langgestreckten Körper. Die Seitenlinie ist fast gerade, der Rücken nur leicht gewölbt, der Körper mit mittelgroßen Schuppen besetzt. Barben haben ein rüsselartiges, unterständiges Maul mit fleischigen Lippen und vier dicken Barteln an der Oberlippe. Die Fische gehen vorwiegend nachts auf Nahrungssuche. Sie überwintern in großen Gruppen unter Wurzeln oder in strömungsarmen Flussabschnitten. Der Laich der Barbe und das ihn umgebende Bauchfleisch ist beim Verzehr für Menschen gesundheitsschädlich! Ernährung: Die Barbe ernährt sich von Fischlaich, Insektenlarven, Muscheln, Schnecken, Würmern und in geringem Maße von pflanzlicher Kost. Größere Barben stellen auch kleinen Fischen nach. Maße: Die Barbe erreicht eine Länge bis 85 cm bei einem Körpergewicht von 4-6 kg. In Ausnahmefällen wird sie bis zu einem Meter lang.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_09/c_barbel_m.thumb.png.64e455d3c3ca05453908ff316f963238.png'
    },

    {
        name: 'Schuppenkarpfen',
        text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Schuppenkarpfen (Cyprinus carpio) ist eine der bekanntesten europäischen Fischarten, und als Typusart der Gattung Cyprinus sowohl im Deutschen als auch in der Fachsprache Namensgeber der Familie der Karpfenfische (Cyprinidae), der Überfamilie der Karpfenfischähnlichen (Cyprinoidei) und der Ordnung der Karpfenartigen (Cypriniformes). Er ist seit der Antike ein beliebter Speisefisch, der häufig in Fischteichen gezüchtet wird und dazu auch in zahlreichen Ländern weltweit eingeführt wurde. Teilweise tritt er dort als invasive Art auf. Das ursprüngliche Verbreitungsgebiet des Karpfens umfasst die Zuflüsse des Kaspischen und des Schwarzen Meers sowie des Aralsees und reicht in Europa bis zur mittleren Donau. Karpfen leben bevorzugt im warmen, flachen Süßwasser von Teichen, Baggerseen und langsam strömenden Flussabschnitten. Der Schuppenkarpfen ist vollständig mit großen Schuppen bedeckt und besitzt einen relativ schlanken Körper; Zuchtfische sind hochrückig. Der Rücken ist meist dunkelbraun bis grau, bei größeren Exemplaren ist manchmal auch ein blauschwarzer Schimmer erkennbar. Die Farben an den Flanken variieren zwischen dunkelbraun und goldgelb. Aus dem Grad der Beschuppung ergeben sich bei Zuchtfischen auch ihre Bezeichnungen (Schuppen,- Spiegel,- Zeil,- bzw. Lederkarpfen). Charakteristisch bei allen Karpfen ist die lange Rücken - und die kurze Afterflosse. Der längste Hartstrahl der Rücken- und Afterflosse ist stark gesägt. Die Schlundzähne sind dreireihig. An der Oberlippe sitzt an jeder Seite eine kurze und dahinter im Maulwinkel eine längere Bartel. Ernährung: Der Karpfen ernährt sich als Jungtier von Zooplankton, später hauptsächlich von am Boden lebenden Kleinlebewesen wie Insektenlarven, Schnecken und Würmern. Maße: Die Durchschnittsgröße liegt je nach Gewässer bei einem Gewicht von 500 - 600 g um 30 cm. Da der Karpfen zu den großwüchsigen Vertretern der Cypriniden zählt, kann er bei optimalen Bedingungen sowie genügend Nahrungsvorräten aber ein Maximalgewicht von mehr als 20 kg und eine Länge von über 100 cm erreichen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_09/carp_m.thumb.png.a229af7fe328de01dc57b1f348894e0b.png'
    },

    {
        name: 'Geister Schuppenkarpfen',
        text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Die Geister-Variante des Schuppenkarpfens ist eine Mischung aus Schuppenkarpfen und Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie auch viel schwerer zu fangen sind.`,
        image:'https://rf4game.de/forum/uploads/monthly_2019_12/carp_ghost.thumb.jpg.dbb71234b5b9182cc2a80c606060070d.jpg'
    },

    {
        name: 'Sumpfelritze',
        text: `Normale Trophäe: 100 g
        Seltene Trophäe: 160 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Sumpfelritze (Rhynchocypris percnurus) ist ein Kleinfisch aus der Familie der Karpfenfische. Die Art kommt in Seen und Flussbecken des Arktischen Ozeans von der nördlichen Dwina bis nach Kolyma, aber auch in Becken des Pazifischen Ozeans, des Schwarzen Meers und der Ostsee vor. Sie hat einen kompakten, mit flachen goldenen Schuppen bedeckten Körper. Ernährung: Die Sumpfelritze ernährt sich von Algen, Insekten und kleinen benthischen Organismen. Maße: Die Sumpfelritze ist ein kleiner Fisch. Ihre durchschnittliche Länge beträgt etwa 10 cm, große Exemplare erreichen eine Länge von 15 cm und ein Gewicht von 100 g`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_09/golyan.thumb.jpg.740d2ed498b26a3aa89fe6d1b315b8e4.jpg'
    },

    {
        name: 'Rotauge',
        text: `Normale Trophäe: 1,2 kg
        Seltene Trophäe: 2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Das Rotauge (Rutilus rutilus), auch Plötze genannt, ist ein Fisch aus der Familie der Karpfenfische (Cyprinidae). Rotaugen lebt als anspruchsloser Schwarmfisch in stehenden und langsam fließenden Gewässern in fast ganz Europa nördlich der Alpen und der Pyrenäen bis zum Ural. Sie haben einen hochrückigen Körper mit grünlicher Ober- und weißer Bauchseite. Ein besonders auffallendes Kennzeichen ist die leuchtend rote Iris, daher rührt die Namensgebung. Ernährung: Die Nahrung der Rotaugen besteht einerseits aus verschiedenen Wasserpflanzen und andererseits aus Kleintieren wie Zooplankton, Würmern, Insektenlarven, Insekten, kleinen Schnecken und Muscheln. Maße: Das Rotauge erreicht eine Länge von bis zu 50 cm und ein Gewicht bis 3 kg.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_09/c.roach_m.thumb.png.a8cb56990a9e886094c868b8dedce7ac.png'
    },

    {
        name: 'Albino Schuppenkarpfen',
        text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Wie andere Albino-Fische hat auch diese Form des Schuppenkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb sie schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
        image:'https://rf4.info/img/fish/145.png'
    },

    {
        name: 'Karausche',
        text: `Normale Trophäe: 1,8 kg
        Seltene Trophäe: 2,9 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Karausche (Carassius carassius) ist eine Fischart aus der Familie der Karpfenfische (Cyprinidae). Sie ist nahe mit dem Giebel verwandt, unterscheidet sich von diesem aber durch ihren runderen Körper und der goldenen Farbe des Schuppenkleides. Die Karausche lebt fast in ganz Europa mit Ausnahme von Irland, Schottland und Wales. Sie ist großschuppig, hochrückiger als der Karpfen und hat - anders als dieser - keine Barteln. Die Oberseite des Körpers ist bräunlich mit grünlichem Glanz, die Flanken sind heller, die Unterseite hell gelblich bis schmutzig-weiß. Die Schwanzflosse ist nur geringfügig eingekerbt. Die Karausche bevorzugt flache, stark bewachsene Seen, Weiher und Teiche und meidet kalte, schnellfließende Gewässer. Sie ist selbst in kleinsten sauerstoffarmen, verschlammten Tümpeln noch zu finden, denn Karauschen können mehrere Tage lang fast ohne Sauerstoff überleben. Von Anglern wird die Karausche als Köderfisch sehr geschätzt, weil sie eine bevorzugte Beute von Hechten und anderen Raubfischen ist. Ernährung: Karauschen ernähren sich von Kleintieren und Insektenlarven, nehmen aber auch Pflanzennahrung auf. Maße: Die Karausche wächst langsam und erreicht innerhalb von 2 Jahren ein Durchschnittsgewicht von ca. 200 g. Wird sie älter, kann sie aber bis über 60 cm lang werden und ein Gewicht von 3 kg erreichen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_09/c.carp_m.thumb.png.be008527142dba85e3c2688764ee62e9.png'
    },

    {
        name: 'Lumb',
        text: `Normale Trophäe: 18 kg
        Seltene Trophäe: 24 kg (Noch nicht bestätigt)`,
        image:'https://rf4.info/img/fish/170.png'
    },

    {
        name: 'Hasel',
        text: `Normale Trophäe: 250 g
        Seltene Trophäe: 390 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Hasel (Leuciscus leuciscus) ist ein kleinwüchsiger Vertreter der Karpfenfische. Er hat in Europa nur eine sehr geringe wirtschaftliche Bedeutung und wird wegen seiner typischen „Weißfischgestalt“ leicht mit anderen Vertretern seiner Familie verwechselt. Der Hasel bewohnt überwiegend Fließgewässer mit steinigem Grund von der Forellen- bis zur Barbenregion in Europa, Sibirien und Kasachstan. Er ist auch in Stauseen anzutreffen, aber insgesamt seltener in stehenden Gewässern. Bevorzugt hält er sich in in ruhigen oder langsam strömenden Klarwasserzonen auf. In Deutschland ist der Hasel im gesamten Bundesgebiet zu finden, wobei die Bestandsdichte von Süden nach Norden hin abnimmt. Hasel sind gesellige, in kleinen Schwärmen lebende Fische. Als besonders scheue und vorsichtige Tiere meiden sie Lärm und laute Geräusche. Das Maul des Hasels ist eher klein und leicht unterständig; der Maulspalt reicht nicht bis zum Vorderrand der Augen. Die Schuppen sind vergleichsweise groß. Der Rücken ist meist graublau, die Seiten schimmern silbrig, der Bauch ist weiß. Die Flossen tragen meist eine orange Färbung. Ein Unterscheidungsmerkmal gegenüber dem Döbel ist der nach innen gewölbte Rand der Afterflosse. Ernährung: Hasel ernähren sich von Insekten und deren Larven, Kleinmuscheln, Schnecken und Zooplankton. Maße: Die Durchschnittsgröße liegt zwischen 15 und 17 cm bei einem Gewicht von 250 - 350 g.`,
        image:'https://rf4.info/img/fish/26.png'
    },

    {
        name: 'Dolly Varden Forelle',
        text: `Normale Trophäe: 7,5 kg
        Seltene Trophäe: 10 kg
        
        Die Dolly-Varden-Forelle (Salvelinus malma) ist eine der größten Saibling Arten. Sie ist im Nordpazifik und entlang der asiatischen Küste von der Chaun Bay bis Korea weit verbreitet, sowie entlang der amerikanischen Küste von Alaska bis Kalifornien. Die Dolly-Varden-Forelle hat einen hohen, seitlich abgeflachten Körper. Der obere Teil des Saiblings ist dunkelblau, die Seiten sind blaugrün, und der Bauch ist silbrig-weiß. Auf dem Rücken und den Seiten des Körpers befinden sich zahlreiche kleine weiße und gelbliche kreisförmige Flecken. Während des Laichens nehmen die Fische eine Prachtfärbung mit einem anderen Farbmuster an. Zum Fangen der Dolly-Varden-Forelle können sowohl Posen- als auch Spinnfisch-Montagen verwendet werden.`,
        image:'https://rf4.info/img/fish/118.png'
    },

    {
        name: 'Don Kaulbarsch',
        text: `Normale Trophäe: 250 g
        Seltene Trophäe: 350 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Heimat des Don-Kaulbarsches (Gymnocephalus acerina) ist auf die ins Schwarze Meer mündenden Flüsse Don, Dnepr, Dnjestr und Kuban beschränkt. Verirrte Einzel-Exemplare können darüber hinaus auch im Donaudelta auftauchen. Er ist aber nirgends häufig und hat keine wirtschaftliche Bedeutung. Die noch aus vergangenen Tagen stammende Kunde, dass er sehr wohlschmeckend sei, ist aber in der ukrainischen Bevölkerung durchaus noch lebendig. Der Don-Kaulbarsch ist weniger hochrückig als die klassischen Arten dieser Untergattung. Er besitzt auch kleinere Schuppen und mehr Dorsalis-Stacheln. Der Körper ist silbrig gelbgrau mit unregelmäßig verteilten runden dunklen Flecken unterschiedlicher Größe. Der Don-Kaulbarsch ist dämmerungs- aber auch tagaktiv. Im Herbst zieht er sich in größeren Schwärmen in tieferes Wasser zurück und überdauert dort inaktiv den Winter. Obwohl dieser Barsch auch im Stillwasser und in Seen vorkommt, bevorzugt er doch die sandigen (aber auch grob-kiesigen) Abschnitte größerer Flüsse, durchaus auch mit stärkerer Strömung. Er lebt gesellig. Ernährung: Don-Kaulbarsche ernähren sich von Benthos (Insektenlarven, Krebsen, Würmern, Mollusken), und eher selten von Fischen. Maße: Am häufigsten findet man Exemplare mit einer Länge von 17-22 cm und einem Körpergewicht von etwa 200-250g.`,
        image:'https://rf4game.de/forum/uploads/monthly_2017_12/Barsch.thumb.png.3d72bb39154a67132c343274da5b0a91.png'
    },

    {
        name: 'Dryagin Saibling',
        text: `Normale Trophäe: 10 kg
        Seltene Trophäe: 15 kg
        
        Der Dryagin-Saibling (Salvelinus drjagini) ist ein Mitglied der Salmoniden-Familie und ein endemischer Bewohner der Süßwasser-Seen Sibiriens. Ausgewachsene Fische können eine Länge von mehr als einem Meter erreichen. Der Rücken ist graugrün, die Seiten des Fisches sind mit einem hellen Punktmuster bedeckt, und der Bauch sowie der untere Teil des Kopfes sind weiß oder rot-orange. Vorzugsweise werden Posen- oder Spinnangeln verwendet, um diesen Fisch zu fangen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2020_07/dr_char.thumb.jpg.e82a5798d78dcbb7814e2be2d87fa71d.jpg'
    },

    {
        name: 'Ostsibirische Äsche',
        text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        
        Der Lebensraum der Ostsibirischen Äsche (Thymallus arcticus pallasii) befindet sich im Strom Jenissei und dessen Nebelflüssen. Die Seiten und die Rückenflosse dieses Fisches sind mit kleinen schwarzen, roten und violetten Tupfen verziert. Die Rückenflosse selbst ist sehr hoch. Ein roter Streifen verläuft entlang ihres Randes. Sie wird am besten mit Posen- und Spinnangeln gefangen.`,
        image:'https://rf4game.de/forum/uploads/monthly_2020_07/os_grayling.thumb.jpg.65ff29900ad171e1d3ab781c15928e45.jpg'
    },

    {
        name: 'Sibirischer Stör',
        text: `Normale Trophäe: 100 kg
        Seltene Trophäe: 150 kg
        
        Der Lebensraum des Sibirischer Störs (Acipenser baeri stenorrhynchus Nikolsky) sind die großen Flüsse Ostsibiriens. Der Sibirischer Stör ist eine sehr variable Art. Er zeichnet sich durch Unterschiede sowohl in der Schnauzenform als auch in der Farbe aus. Der Rücken kann von hellgrau bis dunkelbraun, und die Farbe des Bauches von weiß bis hellgelb variieren. Sibirische Störe können auf Posen-, aber auch mit Spinn- und Grundmontagen gefangen werden.`,
        image:'https://rf4game.de/forum/uploads/monthly_2020_07/zs_sturgeon.thumb.jpg.0be43f797c70ad1e32bd4a45938a7973.jpg'
    },

    {
        name: 'Ostbrasse',
        text: `Normale Trophäe: 4,4 kg
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Lebensraum der Ostbrasse (Abramis brama bergi) sind die Becken des Schwarzen, Kaspischen und Asowschen Meeres. Ostbrassen sind Süßwasserschwarmfische. Sie bevorzugen Gewässerbereiche mit verschlammtem Boden. Der Körper dieser Brassen ist hochrückig und seitlich abgeflacht. Der Kopf ist klein. Der untere Teil der Schwanzflosse ist länger als der obere. Die Körper-Oberseite ist dunkel. Die Flanken haben je nach Alter eine Silber- oder Bronzefarbe. Ernährung: Algen, Würmer, Insektenlarven und Schnecken bilden die Nahrung der Ostbrasse Maße: Ausgewachsene Fische erreichen eine Länge von 50 cm und ein Gewicht von 5 kg.`,
        image:'https://rf4game.de/forum/uploads/monthly_2018_12/e_bream.thumb.png.d60a10af7aa8d545e45c4dc06c0aedf2.png'
    },

    {
        name: 'Aal',
        text: `Normale Trophäe: 4 kg
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Europäische Aal (Anguilla anguilla) ist in ganz Europa, Kleinasien und Nordafrika beheimatet. Er hat einen schlangenförmigen, langgestreckten, drehrunden Körper. Die Rücken-, Schwanz- und Afterflosse bilden einen durchgängigen Flossensaum. In der dicken Haut sind sehr kleine Rundschuppen eingebettet. Der Europäische Aal hat ein oberständiges Maul. Aale sind insbesondere in der Dämmerung und in der Nacht aktiv und gehen dann auf Nahrungssuche. Sie kommen in zwei Ernährungsvarianten vor: Dem Spitzkopfaal mit schmalem Kopf und spitz zulaufender Schnauze, der sich vorwiegend von Krebsen und anderen Wirbellosen ernährt, und dem Breitkopfaal mit breitem Kopf und breiter Schnauze, der ein Fischjäger ist. Der Europäische Aal gilt inzwischen als stark gefährdet. Ernährung: Aale ernähren sich vorwiegend von Würmern, (Klein-)Krebsen, Insektenlarven etc., aber auch von Fischlaich und Fischen. Kleinfische werden aktiv im Mittelwasser und an der Wasseroberfläche gejagt. Dabei erweist sich der Aal als geschickter Jäger. Maße: Erwachsene Weibchen können bis zu 200 cm lang und 6 kg schwer werden, Männchen erreichen nur 60 cm Länge. Solche Größen werden aber extrem selten erreicht und schon ein Weibchen von einem Meter Länge ist ausgesprochen groß`,
        image:'https://rf4.info/img/fish/49.png'
    },

    {
        name: 'Aal',
        text: `Normale Trophäe: 4 kg
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Europäische Aal (Anguilla anguilla) ist in ganz Europa, Kleinasien und Nordafrika beheimatet. Er hat einen schlangenförmigen, langgestreckten, drehrunden Körper. Die Rücken-, Schwanz- und Afterflosse bilden einen durchgängigen Flossensaum. In der dicken Haut sind sehr kleine Rundschuppen eingebettet. Der Europäische Aal hat ein oberständiges Maul. Aale sind insbesondere in der Dämmerung und in der Nacht aktiv und gehen dann auf Nahrungssuche. Sie kommen in zwei Ernährungsvarianten vor: Dem Spitzkopfaal mit schmalem Kopf und spitz zulaufender Schnauze, der sich vorwiegend von Krebsen und anderen Wirbellosen ernährt, und dem Breitkopfaal mit breitem Kopf und breiter Schnauze, der ein Fischjäger ist. Der Europäische Aal gilt inzwischen als stark gefährdet. Ernährung: Aale ernähren sich vorwiegend von Würmern, (Klein-)Krebsen, Insektenlarven etc., aber auch von Fischlaich und Fischen. Kleinfische werden aktiv im Mittelwasser und an der Wasseroberfläche gejagt. Dabei erweist sich der Aal als geschickter Jäger. Maße: Erwachsene Weibchen können bis zu 200 cm lang und 6 kg schwer werden, Männchen erreichen nur 60 cm Länge. Solche Größen werden aber extrem selten erreicht und schon ein Weibchen von einem Meter Länge ist ausgesprochen groß`,
        image:'https://rf4.info/img/fish/49.png'
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

