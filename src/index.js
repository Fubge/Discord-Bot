require('dotenv').config();
const keep_alive = require("./keep_alive.js");
const mySecret = process.env['MY-KEY']
const { Client, GatewayIntentBits, EmbedBuilder, AttachmentBuilder } = require('discord.js');

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
        Seltene Trophäe: 200 kg^
        Lebensraum: Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Dieser Fisch ist eine natürliche Farbvariante des europäischen Welses (Silurus glanis) mit ungewöhnlich heller Körperfarbe. Ein solcher Wels ist in der Natur ziemlich selten. Ansonsten unterscheidet sich der Raubfisch nicht von einem normalen Wels. Er lebt in Süßwassergewässern Europas und Asiens. Ernährung: Die Ernährung des Fisches besteht aus Fröschen, Fischen und Mollusken. Maße: Ein Albino-Wels kann eine Länge von 5 m und eine Masse von 300 kg erreichen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2019_04%2Frf4_4.0.11882_20190422_185001.thumb.png.86f0d47192a91f145d9f9d3fbbd625bb.png&f=1&nofb=1&ipt=2cde772db4d5072172373909dc4d809e04408b1adc014cbe7818cd7bac1c4375&ipo=images'
  },

  {
    name: 'Amur Wels',
    text: `Normale Trophäe: 5 kg
        Seltene Trophäe: 7 kg
        Lebensraum: Untere Tunguska
        
        Die wichtigsten Lebensräume des Amurwelses (Silurus asotus) in Russland sind die Flüsse und Seen des Amurbeckens. Der Körper des Amurwelses ist dunkelgrün gefärbt, der Bauch ist hell. In Verhalten und Lebensweise ähnelt diese Welse ihrem europäischen Pendant. Der Amurwels wird hauptsächlich mit Hilfe von Posen- und Gundangeln gefangen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FQXXGAOAvnIs%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d448adb983188d4590688bf7cde155cf85428aa7b32fd1b2a94d04e674a4bfb4&ipo=images'
  },

  {
    name: 'Seesaibling',
    text: `Normale Trophäe: 11 kg
        Seltene Trophäe: 16 kg
        Lebensraum: Kuory, Untere Tunguska, Fluss Jama
        
        Beschreibung und natürliches Vorkommen:
         Der Seesaibling (Salvelinus alpinus) gehört zur Gattung der Saiblinge (Salvelinus). Er lebt sowohl in isolierten Binnenseen als auch in küstennahen Meeresgewässern im nördlichen Eismeer. In Europa reicht sein Verbreitungsgebiet von den sauerstoffreichen Seen der Alpen und Pyrenäen bis nach Finnland, Südschweden, Norwegen sowie den Zuflüssen des Weißen Meeres, Irland, Schottland und Island. Außerdem lebt er in Südgrönland sowie in Nordamerika in einigen Seen in Québec, Maine und New Hampshire. Er ist die einzige Fischart im Hazensee auf der Ellesmere-Insel, seinem nördlichsten Verbreitungsgebiet. Je nach Lebensraum besitzt der Seesaibling zwar unterschiedliche Färbungen, ist aber am weißen Vorderrand von Bauchflosse und Afterflosse sowie an der größeren Maulspalte stets von den Forellen zu unterscheiden. In der Regel ist der Körper silbern, der Rücken blau-grau, und die Flanken sind mit zahlreichen hellen Punkten überzogen. Der Saibling hat ziemlich kleine, runde Schuppen. Zur Laichzeit wandern die Saiblinge flussaufwärts. Dabei werden sie dunkler, der Rücken wird grün-braun, der Bauch silber-weiß und die Flanken weisen zahlreiche roten bis orange Punkte auf. Die Laichplätze liegen in unterschiedlicher Tiefe über kiesigem bzw. steinigem Grund, in den Seen daher der Nähe von Bachmündungen oder über Quell- und Grundwasseraustritten. Vor und während der Laichzeit kommt es zu heftigen Kämpfen unter den Milchnern, die versuchen, den Laichplatz gegen Konkurrenten zu verteidigen. Jungfische des Seesaiblings verbringen bis zu 4 Jahre im Fluss, dann ziehen sie Richtung Meer. Es gibt auch eine Seesaibling-Art, die nicht wandert. Sie ist dunkler, der Bauch rosa, Rückenflosse sowie Afterflosse sind weiß. Die Flanken sind mit gelb-orangen Punkten übersät. Ernährung: Die Nahrung der Seesaiblinge besteht ausschließlich aus Wirbellosen und Jungfischen. Maße: Seesaiblinge erreichen ein Gewicht von 2 bis 7 kg. Ihre Länge kann - bei einem Gewicht von bis zu 15 kg - an die 80 cm betragen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_04%2Frf4_4.0.18021_20220411_162540.png.0181544f355d778a790cfa8f6740db56.png&f=1&nofb=1&ipt=b746b7e48360909b070675f1f257c61e0008995bd2a185878d184d83df76c4f7&ipo=images'
  },

  {
    name: 'Arktische Äsche',
    text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        Lebensraum: Untere Tunguska
        
        Arktische Äschen (Thymallus arcticus arcticus) findet man in den Becken der Flüsse Kara, Ob und Jenissei. Die Fische haben einen schlanken Körper und eine kurze, breite Rückenflosse mit einem Muster aus großen Flecken mit hellem metallischen Glanz. Sie werden am besten mit Posen- und Spinnangeln gefangen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2022_08%2Frf4_4.0.18354_20220801_121242.png.8074735dd3544386d9252917c46fb70b.png&f=1&nofb=1&ipt=e81f81eeb89cb462c3f6c9fc21856469a028271bae5b1299b31fe46a1c2da5e0&ipo=images'
  },

  {
    name: 'Arktische Maräne',
    text: `Normale Trophäe: 3 kg
        Seltene Trophäe: 4 kg
        Lebensraum: Untere Tunguska
        
        Die Arktische Maräne (Coregonus autumnalis) lebt in der unteren Tunguska. Während der Brutzeit steigt sie in die Flüsse auf, wo sie laicht. Der Fisch hat einen länglichen, glatten Körper. Der Rücken ist bräunlich-grün, die Seiten sind silber, der Bauch ist hell. Zum Fangen der Arktischen Maräne eignen sich Posenangeln, aber auch Spinn- und Grundmontagen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/a_omul.thumb.jpg.a0dcf5c15583bd54b7a6fbaca70d755c.jpg'
  },

  {
    name: 'Arktischer Rochen',
    text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 10 kg (Konnte noch nie bestätitgt werden!)
        Lebensraum: Unbekannt`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2023_04%2Fimage.png.b59eb4ecf83e7ae88a29618eba2468e8.png&f=1&nofb=1&ipt=3ca9fb3bd5f61f482a08b72ec78fe7c2c933e8b06b6602d1ec342dd8a860cbf7&ipo=images'
  },

  {
    name: 'Regenbogenstint',
    text: `Normale Trophäe: 270 g
        Seltene Trophäe: 340 g 
        Lebensraum: Untere Tunguska, Fluss Jama
        
        Der Regenbogenstint (Osmerus mordax) lebt in den Küstengewässern des Arktischen Ozeans, von wo aus er in die in ihn mündenden Flüsse gelangt. Er hat einen länglichen Körper, der mit großen silberfarbigen Schuppen bedeckt ist. Er unterscheidet sich vom europäischen Stint durch einen vorstehenden Unterkiefer mit kräftigen Zähnen. Zum Fangen der Stinte können Posen- oder Spinnangeln eingesetzt werden.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FHqXPODo6evo%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b9b685a487d57074b4cb5b604c6d6b591507b8f5198e9fb417d8645db5433f1c&ipo=images'
  },

  {
    name: 'Rapfen',
    text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 13 kg 
        Lebensraum: Windenbach, Fluss Belaja, Fluss Sura, Wolchow, Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Der Rapfen oder Schied (Leuciscus aspius) ist eine Fischart aus der Familie der Karpfenfische und lebt in ganz Mitteleuropa von östlich des Rheins bis zur Wolga in Osteuropa sowie im Schwarzen und im Kaspischen Meer. Der Rapfen bevorzugt Gewässer mit Strömung; in Seen ist er selten vertreten. Der Rapfen hat einen ausgeklügelte Jagd-Technik. Er besitzt keine scharfen Zähne; deshalb hat er eine besondere Methode entwickelt, um Fische zu erbeuten. Seine Schwanzflosse spielt dabei eine große Rolle: Der Rapfen rast in einen Fischschwarm, betäubt mit Schlägen der Schwanzflosse seine Opfer und frisst sie anschließend. Charakteristisch ist sein schlanker, langgestreckter, seitlich etwas zusammengedrückter Körper. Der Rücken ist grau bis grau-blau gefärbt, die Flanken schimmern silbrig und gehen in den weißen Bauch über. Die Afterflosse ist am Außenrand sichelförmig eingebuchtet. Das Maul ist oberständig und auffallend groß, die Maulspalte reicht bei erwachsenen Tieren bis unter die Augen. Der kräftige Unterkiefer ist verdickt und besitzt in der Mitte einen "Höcker", der vom Aussehen her etwas an einen Laichhaken erinnert; dieser dient zum Festhalten der Beutefische. Ernährung: Junge Rapfen leben anfangs von Zooplankton, stellen ihre Nahrung aber schon bald auf Fische um. Der Rapfen ist somit die einzige Karpfenart, die sich fast ausschließlich räuberisch ernährt. Er ist ein sehr schneller Jäger, der meist schlanke Kleinfische in Oberflächennähe jagt, wie z.B. Lauben, Gründlinge und Rotaugen. Maße: Der Rapfen gehört zu den großwüchsigen Karpfenartigen und erreicht eine Länge von über 100 cm und ausnahmsweise ein Gewicht von über 10 kg. Die Durchschnittsgröße liegt zwischen 45 und 60 cm bei einem Gewicht von 3 - 5 kg.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_11%2Frf4_4.0.15158_20201115_145009.png.5d346f733e78496816846215090f4660.png&f=1&nofb=1&ipt=9dc8311736d822988c34089582f050def2075fa041daca40cdd54ee09317a0bd&ipo=images'
  },

  {
    name: 'Blauflossen Thunfisch',
    text: `Normale Trophäe: ???
        Seltene Trophäe: ???`,
    image: 'https://rf4.info/img/fish/191.png'
  },
  // to-do Ab hier kein Lebenraum mehr eingetragen 
  {
    name: 'Atlantischer Kabeljau',
    text: `Normale Trophäe: 50 kg
        Seltene Trophäe: 65 kg `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.d8118fdb100c7b2b5aab8585f5ae6d11.png'
  },

  {
    name: 'Fußballfisch',
    text: `Normale Trophäe: 6,5 kg ?
        Seltene Trophäe: 8,5 kg ? `,
    image: 'https://rf4.info/img/fish/158.png'
  },

  {
    name: 'Heilbutt',
    text: `Normale Trophäe: 150 kg 
        Seltene Trophäe: 250 kg (Noch nicht bestätigt) `,
    image: 'https://rf4.info/img/fish/181.png'
  },

  {
    name: 'Makrele',
    text: `Normale Trophäe: 2 kg 
        Seltene Trophäe: 2,8 kg`,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.ae306f5767dec0e191691182e0485a06.png'
  },

  {
    name: 'Rotbarsch',
    text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 11 kg (Noch nicht bestätigt)`,
    image: 'https://rf4.info/img/fish/177.png'
  },
  // to-do beschreibung einfügen atlantischer lachs
  {
    name: 'Atlantischer Lachs',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 38 kg `,
    image: 'https://rf4game.com/forum/uploads/monthly_2017_10/a_salmon_m.thumb.png.d812ac9171012b11c1fb50261f0599bf.png'
  },

  {
    name: 'Makrelenhecht',
    text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 750 g `,
    image: 'https://rf4.info/img/fish/187.png'
  },

  {
    name: 'Gestreifter Seewolf',
    text: `Normale Trophäe: 14,5 kg 
        Seltene Trophäe: 19 kg `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.835d220ca87d24579c953ef93a524131.png'
  },

  {
    name: 'Baikal Maräne',
    text: `Normale Trophäe: 6 kg 
        Seltene Trophäe: 7 kg
        
        Die Baikal-Maräne (Coregonus migratorius) hat ihren Hauptlebensraum im Baikalsee, ist aber auch in anderen Seen und Flüssen Sibiriens zu finden. Ihr länglicher Körper ist mit feinen Schuppen bedeckt; die Seiten sind silberfarben. Die Färbung des Rückens variiert von braun bis grün. Zum Fangen der Baikal-Maräne eignen sich Posenruten, aber auch Spinn- und Grundmontagen.`,
    image: 'https://rf4.info/img/fish/95.png'
  },

  {
    name: 'Baltischer Stör',
    text: `Normale Trophäe: 200 kg 
        Seltene Trophäe: 300 kg
        
        Beschreibung und natürliches Vorkommen:
         Der Baltische Stör (Acipenser oxyrinchus) ist ein atlantischer Stör, der in der Ostsee lebt. Zum Laichen wandert er von der Ostsee zur Newa, und von dort steigt er weiter zum Ladoga-See auf. Ernährung: Der Baltische Stör führt ein räuberisches Leben und jagt in der Wassersäule nach kleinen Schwarmfischen. Er frisst aber auch Mollusken und benthische Wirbellose. Maße: Dieser Stör kann eine Länge von 3 m und eine Masse von mehr als 200 kg erreichen. Besonders große Exemplare können bei einer Länge von ca. 6 m mehr als 400 kg wiegen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2018_11%2Frf4_4.0.10788_20181120_175125.png.4945c9a61e702eab085e5f4dadae88eb.png&f=1&nofb=1&ipt=3df84aac121f64b724cccf5b38290f6932e6daf18aaae7bf81d19c13e401ba1f&ipo=images'
  },

  {
    name: 'Glatt Stör',
    text: `Normale Trophäe: 50 kg 
        Seltene Trophäe: 70 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Glatt-Stör oder Glattdick (Acipenser nudiventris) ist ein anadromer Fisch aus der Störfamilie. Sein Lebensraum ist der Aralsee, das Kaspische Meer und das Schwarze Meer. Sein Maul hat eine konische Form. Die Körperfarbe ist heller als die anderer Störarten, weshalb dieser Fisch manchmal auch als Weißer Stör bezeichnet wird. Ernährung: Wie auch andere Störe ist der Glatt-Stör ein Raubfisch. Seine Nahrung besteht aus Insektenlarven, Krebstieren, Mollusken und kleinen Fischen Maße: Die Länge eines ausgewachsenes Fisches kann 2 m und das Gewicht 30 kg oder mehr betragen.`,
    image: 'https://rf4.info/img/fish/154.png'
  },

  {
    name: 'Kleiner Rotbarsch',
    text: `Normale Trophäe: 5,5 kg 
        Seltene Trophäe: 7 kg`,
    image: 'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.d7d5ef70b0053e47d5d68da2d94dc564.png'
  },

  {
    name: 'Barsch',
    text: `Normale Trophäe: 100kg
        Seltene Trophäe: 200kg
        Lebensraum: Achtuba
        
        Beschreibung und natürliches Vorkommen: 
        Flussbarsche (Perca fluviatilis) leben im Süßwasser auf der gesamten Nordhalbkugel. Teilweise dringen sie bis ins Brackwasser vor. Die paarigen, brustständigen Bauchflossen verfügen über einen Hart- und fünf Weichstrahlen. Barsche besitzen kräftige Kammschuppen. Typisch für Barsche sind die geteilte Rückenflosse sowie die rötliche Färbung der Brust- und Bauchflossen. Die Bauchflossen sind brustständig. Die Haut zwischen den Flossenstrahlen weisen häufig vereinzelte schwarze Flecken verschiedener Größe auf. Der Körper besitzt ein Muster aus 6 bis 8 senkrechten dunklen Streifen und ist grau-grün gefärbt. Das Maul ist leicht oberständig. Ernährung: Flussbarsche ernähren sich von Wasserinsekten, Würmern, Krebstieren und Fischlaich. Ältere Barsche jagen als Raubfische auch andere Fischarten. Selbst Kannibalismus ist nicht selten. Maße: Flussbarsche erreichen je nach Nahrungsangebot eine maximale Länge von 50 cm und werden bis 4 kg schwer. Allerdings wachsen manche Flussbarsch-Population auch außerordentlich langsam; mit 8 bis 10 Jahren sind die Tiere dann erst 25 cm lang.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Frf4foryou.de%2Fwp-content%2Fuploads%2F2019%2F09%2FBarsch.png&f=1&nofb=1&ipt=79319935860323b8a14c39ad5dbf7a6bad3c29ed925bbbabe534cdd23bf2a0c2&ipo=images'

  },

  {
    name: 'Kleiner Rotbarsch',
    text: `Normale Trophäe: 5,5 kg 
        Seltene Trophäe: 7 kg`,
    image: 'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.d7d5ef70b0053e47d5d68da2d94dc564.png'
  },

  {
    name: 'Weißlachs',
    text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 25 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Weißlachs (Stenodus leucichthys) ist ein Vertreter der Lachsfamilie. Es bewohnt die Gewässer des Kaspischen Meeresbeckens und ist auch kommerziell sehr wertvoll. Es hat einen langgestreckten, spindelförmigen Körper mit silberner Farbe, bräunlichblauem Rücken und weißem Bauch. Die Rücken- und Schwanzflossen sind bräunlichgrau, die anderen Flossen grau. Ernährung: Krebstiere sowie Insektenlarven bilden die Grundlage für die Ernährung junger Weißlachse. Erwachsene Fische ernähren sich ausschließlich von Fisch. Maße: Ausgewachsene Weißlachse können eine Länge von 130 cm und ein Gewicht von 14 kg erreichen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FtSm9PrsIsh8%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=115e9f3e16080d78a62afe1e2c6e4494d168084f8f4d97d235519db99781df7a&ipo=images'
  },

  {
    name: 'Beluga Stör',
    text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Beluga-Stör (Huso huso) ist ein kommerziell sehr wertvoller Fisch. Es bewohnt die Becken des Kaspischen, Schwarzen, Asowschen und Adriatischen Meeres. Belugas haben einen runden Körper und einen kurzen spitzen Kopf. Der Rücken und die Seiten sind aschgrau, der Bauch ist hell. Ernährung: Die Hauptnahrung des Beluga besteht meistens aus Fisch. Beluga-Jungfische ernähren sich von Mollusken und Krebstieren. Maße: Der Beluga wird nicht umsonst auch als "Königsfisch" bezeichnet. Sein Gewicht kann über eine Tonne, und die Länge mehr als vier Meter betragen. Das durchschnittliche Gewicht des Belugas in der Wolga-Kaspischen Region ist 65-150 kg.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2Finjs5TXF_uk%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=d651855052522a90ee5e127e4c15fc4fb7e4136a727a34abb3ef2399cc5403d4&ipo=images'
  },

  {
    name: 'Marmorkarpfen',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 45 kg
        
        Beschreibung und natürliches Vorkommen:
        Der Marmorkarpfen (Hypophthalmichthys nobilis) ist ein geselliger Freiwasserfisch aus der Familie der Karpfenfische, der in den 1960er Jahren aus Asien nach Europa eingeführt wurde. Heute findet man ihn in Weihern, Seen und einigen Talsperren, aber auch in Strömen und vereinzelt in kleineren Flüssen. Ernährung: Die Nahrung des Marmorkarpfens besteht vorwiegend aus Wasserpflanzen, wobei Jungpflanzen bevorzugt werden. Als erwachsener Fisch nutzt er im wesentlichen tierisches Plankton. Maße: Unter guten Lebensbedingungen kann der Marmorkarpfen bis zu ca. 150 cm lang und an die 30 kg schwer werden.`,
    image: 'https://rf4game.com/forum/uploads/monthly_2017_10/bh_carp_m.thumb.png.b15246057f25e07c33020038f935af46.png'
  },

  {
    name: 'Schwarzer Büffelfisch',
    text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 20 kg
        
        Beschreibung und natürliches Vorkommen:
        Wie der Großmäulige Büffelfisch wurde auch der Schwarze Büffelfisch (Ictiobus niger) 1971 aus Nordamerika nach Russland eingeführt. Er bevorzugt Gewässer mit stark verschlammtem Boden. Der Fisch hat eine lange Rückenflosse, einen runden Körper und einen kompakten Kopf. Der Körper ist am Rücken und an den Seiten dunkel graugrün. Ernährung: Der Schwarze Büffelfisch ernährt sich von Plankton, Insektenlarven, kleinen Mollusken und Wasserpflanzen. Maße: Die durchschnittliche Länge eines ausgewachsenen Fisches beträgt etwa 50 cm, das Gewicht erreicht bis zu 7 kg. Gelegentlich gibt es Exemplare, die bis zu 20 kg wiegen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2018_12%2Fbl_buffalo.thumb.png.f22650b4376082db9c888319f05cb700.png&f=1&nofb=1&ipt=1b40e08dd36c289c9b6a30a94b31682db46fa6b9ae2e7175cd40b2129a63d9c6&ipo=images'
  },

  {
    name: 'Schwarzer Amur',
    text: `Normale Trophäe: 28 kg 
        Seltene Trophäe: 40 kg
        
        Beschreibung und natürliches Vorkommen:
        Das ursprüngliche Verbreitungsgebiet des Schwarzen Amurs (Mylopharyngodon piceus) ist Ostasien. In China kommt er in vielen Flüssen vor, die in den Pazifik münden, wie zum Beispiel dem Perlfluss (Zhu Jiang) oder dem Amur, außerdem in der Mandschurei und im süddöstlichen Russland sowie im Honghe und im Roten Fluss im nördlichen Vietnam. Aus seinem Heimatgebiet China wurde er in zahlreiche Länder Europas, Asiens und Amerikas eingeführt. Der Schwarze Amur bevorzugt Süßwasser, aber kann auch im Salzwasser überleben. Er hat einen schlanken, langgestreckten, im Querschnitt fast drehrunden Körper mit relativ breiter Schwanzwurzel. Auffällig ist die dunkelgraue bis blauschwarze Färbung dieser Fischart, nur die Bauchseite ist silbrig weiß. Die Hautlappen der Nasenöffnung sind groß. Die Schlundzähne sind zu massiven Mahlzähnen ausgebildet. In Russland wurde der Schwarze Amur auf die Rote Liste gesetzt und wird durch den Staat geschützt. Ernährung: Der Schwarze Amur ernährt sich zum größten Teil von Mollusken. Maße: Der Schwarze Amur ist ein großwüchsiger Fisch und erreicht eine Maximal-Länge von über 80 cm mit einem Gewicht bis zu 30 kg.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FmjgWq3auno4%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=779c3c00aefc48d2ce4fdcc73cc4efc02a1c9399c7145d22b686547fa9f3a84a&ipo=images'
  },

  {
    name: 'Schwarzfisch',
    text: `Normale Trophäe: 23 kg 
        Seltene Trophäe: 30 kg`,
    image: 'https://rf4.info/img/fish/194.png'
  },

  {
    name: 'Schwarzmeer Beluga',
    text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Lebensraum des Belugas (Huso huso ponticus) umfasst die Wasserflächen des Schwarzen und Desowschen Meeres. Dieser Fisch hat einen kräftigen, zylindrischen Körper von aschgrauer Farbe und einen hellen Bauch. Er lässt sich Grundnah sowohl mit Karpfen, Posen als auch mit der Spinnrute beangeln. Maße: Dieser Stör kann eine Länge von 4,6 m erreichen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.s7ZSzVTydNIFqDIi4BAJyAHaEK%26pid%3DApi&f=1&ipt=9a1b1ea0c37c69175773e632634ce4c6673fa79bc60a07c730a846281f6f7ae6&ipo=images'
  },

  {
    name: 'Schwarzmeer Kutum',
    text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg
        
        Beschreibung und natürliches Vorkommen:
        Der Schwarzmeer-Kutum (Rutilus frisii) ist ein Mitglied der Karpfenfamilie und lebt im Schwarzen und Asowschen Meer. Der gedrungene Körper ist mit großen Schuppen bedeckt; der Rücken ist dunkelgrün, die Seiten sind silbrig. Ernährung: In der Regel ziehen es die Fische vor, in Bodennähe zu bleiben und dort nach Kleinlebewesen und anderer Nahrung zu suchen. Gelegentlich kommen sie aber auch an die Wasseroberfläche. Man kann sie also mit einer Vielzahl unterschiedlicher Angel-Montagen fangen. Maße: Erwachsene Fische können bis zu 75 cm lang werden.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_03%2Frf4_4.0.14177_20200320_161454.thumb.png.dbc4b8228dab45adbd8972ea0138300e.png&f=1&nofb=1&ipt=91165d67f86ad0df7b50640af4c4d141022ee78a1329b1528f9d59f06892170a&ipo=images'
  },

  {
    name: 'Schwarzmeer Seelaube',
    text: `Normale Trophäe: 500 g 
        Seltene Trophäe: 700 g
        
        Beschreibung und natürliches Vorkommen: 
        Schwarzmeer-Seelauben (Alburnus mento) leben im Schwarzmeer- und Azov-Becken. Die Fische haben einen länglichen, seitlich zusammengedrückten Körper von mittlerer Höhe. Der Rücken ist dunkelgrün mit einem bläulichen Schimmer, die Seiten sind heller und glänzen silbrig, der Bauch ist weiß. Ernährung: Der Fisch ernährt sich in freier Natur von Zooplankton. Am besten fängt man Schwarzmeer-Seelauben auf Schwimmer-Montagen, aber man kann es auch mit der Grundangel versuchen. Maße: Erwachsene Fische können bis zu 28 cm lang werden.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.com%2Fforum%2Fuploads%2Fmonthly_2020_09%2Frf4_4.0.15158_20200929_094300.png.d5c30000b29941fdbaa22ede2d6db86d.png&f=1&nofb=1&ipt=ec1fc4614e6ea4f8789344d68a290fbdc0dac3dfe5ef08a1de8b7be02c4b0ca7&ipo=images'
  },

  {
    name: 'Schwarze Felchen',
    text: `Normale Trophäe: 3,5 kg 
        Seltene Trophäe: 5 kg
        
        Das Schwarze Felchen ist eine Unterart der Gemeinen Felchen und bewohnen den Ladogasee. Ihr Aussehen ähnelt dem Gemeinen Felchen, die Schuppen sind im Vergleich jedoch dunkler. Der effektivste Weg das Schwarze Felchen zu fangen, sind Spinnfisch-Methoden.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FgfXNBwKcd6k%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=b666564124c22ce4ea2bb5fa428371a1b2c41debb04845f97ab9933b1436b99b&ipo=images'
  },

  {
    name: 'Kaspischer Schwarzrücken Hering',
    text: `Normale Trophäe: 250 g 
        Seltene Trophäe: 340 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Kaspische Schwarzrücken-Hering (Alosa kessleri) ist ein anadromer Fisch. Sein Habitat ist das Kaspische Meeresbecken. Er hat einen länglichen Körper, einen Bauch mit ausgeprägtem Kiel von den Kiemen bis zum Beginn der Afterflosse, und einen ziemlich großen, breiten Kopf mit gut entwickelten Zähnen. Der obere Teil des Kopfes und die Brustflossen sind dunkel. Ernährung: Die Nahrung des Kaspischen Schwarzrückens besteht aus Krebstieren, Insektenlarven sowie Jungfischen. Maße: Der Fisch kann eine Länge von bis zu 50 cm und ein Gewicht bis zu 2 kg erreichen.`,
    image: 'https://rf4game.com/forum/uploads/monthly_2018_12/1961923033_blackspinedherring.thumb.png.341768c09281a3377cc4b83c5157e6fa.png'
  },

  {
    name: 'Laube',
    text: `Normale Trophäe: 110 g 
        Seltene Trophäe: 160 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Laube oder Ukelei (Alburnus alburnus) gehört zur Familie der karpfenartigen Fische (Cyprinidae). Lauben leben in größeren Schwärmen in Seen und langsamen Fließgewässern von der Barbenregion bis in die Brachsenregion. Aber auch im Brackwasser der Ostsee sind sie heimisch. Die Laube hat einen schlanken Körper mit seitlich abgeflachter Schwanzwurzel. Das Maul ist deutlich oberständig. Der Rücken zeigt eine grün-graue bzw. blaugrüne Farbe, Seiten und Bauch haben einen silbernen Glanz. Die Flossen sind etwas dunkler als der Rücken. Die Afterflosse liegt unmittelbar unter der Rückenflosse. Eine Besonderheit der Ukelei ist, dass ihre Schuppen sehr locker in der Haut sitzen und sich deshalb bei Berührung leicht ablösen. Ernährung: Die Laube ernährt sich von Plankton sowie von Insekten an der Wasseroberfläche Maße: Lauben werden bis 20 cm, selten bis 25 cm lang. Das Gewicht liegt bei 60-70 g.`,
    image: 'https://rf4game.com/forum/uploads/monthly_2017_10/c_bleak_s.thumb.png.b567389e13df65622f11a3bca293bf32.png'
  },

  {
    name: 'Zope',
    text: `Normale Trophäe: 750 g 
        Seltene Trophäe: 1100 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Zope (Ballerus ballerus) ist ein Karpfenfisch, der hauptsächlich an den Unterläufen der Weser und Elbe, in der Donau sowie an Zuflüssen zur Ost- und Nordsee beheimatet ist. Zopen haben einen hochrückigen, seitlich abgeflachten Körper. Von den Brachsen kann man sie an der sehr langen, über 30-strahligen Afterflosse unterscheiden. Das Maul ist endständig und die Maulspalte eng. Zopen haben eine grausilbrige Körperfarbe mit einer orangefarbenen Kehle, der Rücken ist dunkelgrün oder dunkelblau mit einem metallischen Glanz. Die Brust- und Bauchflossen sind gelblich mit dunklen Kanten, die anderen Flossen sind schmutzig-weiß mit grauem Rand Ernährung: Zopen leben überwiegend von Insektenlarven, Würmern und Kleinkrebsen. Maße: Ausgewachsene Zopen im Alter von acht bis elf Jahren werden bis 40 cm lang. Das Durchschnittsgewicht beträgt 500 - 600 g.`,
    image: 'https://rf4.info/img/fish/36.png'
  },

  {
    name: 'Blauleng',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 35 kg`,
    image: 'https://rf4.info/img/fish/175.png'
  },

  {
    name: 'Blauer Wittling',
    text: `Normale Trophäe: 900 g 
        Seltene Trophäe: 1200 g`,
    image: 'https://rf4.info/img/fish/185.png'
  },

  {
    name: 'Braschnikow Hering',
    text: `Normale Trophäe: 700 g 
        Seltene Trophäe: 1000 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Braschnikow-Hering (Alosa braschnikowi) ist ein Fisch aus der Heringsfamilie, der endemisch in den Gewässern des Kaspischen Meeresbeckens lebt. Sein Rücken und der obere Kopfteil sind grünlich-schwarz. Er hat gut entwickelte Zähne. Ernährung: Die Nahrung des Der Braschnikow-Herings besteht aus kleinen Fischen und Krebstieren. Maße: Alosa braschnikowi ist ein für Heringsarten ziemlich großer Fisch, dessen Länge 50 cm erreichen kann.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/b_herring.thumb.png.8a5866ebc8d6c4381b3d69dd9c65cf47.png'
  },

  {
    name: 'Brachse',
    text: `Normale Trophäe: 4,4 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Brachse (Abramis brama) ist Fischart aus der Familie der Karpfenfische (Cyprinidae). Brachsen sind in Europa nördlich der Alpen und Pyrenäen sowie auf dem Balkan weit verbreitet. Im Osten findet man sie bis zum Kaspischen Meer, dem Schwarzen Meer sowie dem Aralsee und Balchaschsee. Brachsen bevorzugen Gewässer mit schlammigem Grund und Wasserpflanzenteppichen, welche Deckung und Nahrung bieten. Sie leben vor allem in der nach ihnen benannten Brachsenregion sehr langsam fließender Flüsse (vor allem in Unterläufen) und in Seen mit einem hohen Nährstoffanteil und schlammigem Grund. Brachsen haben einen seitlich stark zusammengedrückten und sehr hochrückigen Körper. Der Rücken ist meist dunkel und braun bis grüngold. Die Flanken variieren zwischen dunkelbraun und goldbraun. Der Bauch ist weiß. Der untere Teil der Schwanzflosse ist länger als der obere. Die Spitzen der Brustflossen reichen bis zum Ansatz der Bauchflossen. Der Ansatz der Afterflosse liegt bei der Brachse meistens gegenüber dem Ansatz bzw. der vorderen Hälfte der Rückenflosse. Der Kopf ist ebenso wie die Augen verhältnismäßig klein. Das Maul ist mäßig unterständig und leicht vorstülpbar. Die Brachse ist ein scheuer Fisch und reagiert rasch auf Störgeräusche, deshalb hält sie sich gern in tieferen Wasserlöchern auf. Durch ihre Wühltätigkeit bei der Nahrungsaufnahme trübt sich das Wasser in ihrer Umgebung meist deutlich ein und es bleiben die typischen Fraßtrichter zurück, die ein Hinweis auf ihr Vorkommen sind. Die Brachse hat 10 einreihige Schlundzähne, um ihre Nahrung festzuhalten und zu zerquetschen. Ernährung: Brachsen suchen ihre aus Kleinlebewesen, Würmern und Insektenlarven bestehende Nahrung in der Schlammschicht des Gewässergrundes. Auch pflanzliche Kost wird gefressen. Maße: Die Durchschnittsgröße einer Brachse beträgt 30 - 45 cm, große Exemplare können bis zu 75 cm groß werden und ein Gewicht bis zu 8 kg erreichen`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FafTRtzS_BJM%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=a61125d6148f7d5794c6addd8060a294f10a0f5c9048e5dd650262e78f961565&ipo=images'
  },

  {
    name: 'Große Bodenrenke',
    text: `Normale Trophäe: 7 kg 
        Seltene Trophäe: 10 kg
        
        Die Große Bodenrenke (Coregonus nasus) ist in den Flüssen und Seen des europäischen Teils Sibiriens und in Kamtschatka verbreitet. Sie hat einen hohen, an den Seiten zusammengedrückten, massiven Körper mit großen Schuppen. Die Farbe der Flanke ist dunkel mit einem bronzenen Schimmer an den Seiten. Die Große Bodenrenke wird am besten mit Posen- und Spinnangeln gefangen.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2021_09%2Frf4_4.0.16557_20210920_144848.png.345c48f0cb256dcbd33b6c9c63ab72fe.png&f=1&nofb=1&ipt=07de2321412f95fb7db6bbe22e7e3808e714682522e407c67c2cb3aaddec1354&ipo=images'
  },

  {
    name: 'Bachforelle',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 5 kg
        
        Beschreibung und natürliches Vorkommen:
        Die Bachforelle (Salmo trutta) bewohnt viele Flüsse im europäischen Teil Russlands. Gewöhnlich findet man sie in den Gewässern, wo auch See- oder Meerforellen vorkommen können. Bachforellen zeichnen sich durch eine helle Grundfärbung aus, wobei ihr Rücken dunkler ist und der Bauch einen goldenem Schimmer aufweist. An den Seiten und an den Flossen finden sich schwarze, orange und rote Flecken mit einem hellen Rand. Intensität und Tönung dieser Färbung hängen von der Farbe des Gewässers und des Gewässergrunds ab. Ernährung: Die Bachforelle ernährt sich von kleinen Krebsen, Insekten, Kaulquappen und Fischbrut. Maße: Das übliche Gewicht von erwachsenen Fischen beträgt 300 bis 500 g, aber es gibt auch Individuen, die bis zu 1-2 kg heranwachsen`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2019_04%2F1419371668_Bachforelle01-01.Trophy.png.c4bbe95c89515f863965170bbd08dbcc.png&f=1&nofb=1&ipt=7946c59bb7f6a2e39035d4771b207c72e2be4ff6d25686adcaf1a9271622a49f&ipo=images'
  },

  {
    name: 'Großmäuliger Büffelfisch',
    text: `Normale Trophäe: 15 kg 
        Seltene Trophäe: 20 kg
        
        Beschreibung und natürliches Vorkommen: Der Großmäulige Büffelfisch (Ictiobus cyprinellus) ist ein im Süßwasser lebender Schwarmfisch. Sein natürlicher Lebensraum befindet sich in den Gewässern Nordamerikas. 1971 wurde er über die Fischbrutstätte Gorjatschi Kljutsch im Krasnodar-Territorium nach Russland eingebracht. Inzwischen ist er in vielen Gewässern des Kuban, des Don und der Wolga verbreitet. Er bevorzugt die bodennahen Regionen von großen, langsam fließenden Flüssen sowie deren Altarme und Strömungskehren. Sein Körper ist mit großen Schuppen bedeckt und hat eine runde Form. Der Rücken ist hellbraun, die Seiten sind matt, die Flossen grau. Ernährung: Der Fisch ernährt sich von Phytoplankton, Mollusken, Wasserinsekten und deren Larven. Maße: Die maximale Größe eines ausgewachsenen Fisches beträgt bis zu 120 cm, und das Gewicht bis zu 45 kg.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FZvIlmLMmvqg%2Fmaxresdefault.jpg&f=1&nofb=1&ipt=3bde815fa1e58667d95c23ebcb59d1f21828665c722d478cd8bbda7396ad37ca&ipo=images'
  },

  {
    name: 'Quappe',
    text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 14 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Quappe (Lota lota) ist ein Knochenfisch aus der Familie der Lotiden. Ihr Verbreitungsgebiet ist in Europa durch die Rhone, den Po und den nördlichen Balkan begrenzt. Die Quappe ist der einzige Fisch aus der Ordnung der Dorschartigen, der ausschließlich im Süß- oder Brackwasser vorkommt. Sie ist daher zwar auch im Brackwasser von Flussmündungen zu finden, bevorzugt aber das Süßwasser tiefer Seen und kühler Flüsse. Ihr langgestreckter Körper ist vorn im Querschnitt rund und nach hinten zunehmend seitlich abgeflacht. Die Quappe trägt eine braune oder schwarze Marmorierung auf gelbem, hellbraunem oder braunem Grund. Der Bauch ist hell. Die Quappe hat zwei weichstrahlige Rückenflossen, von denen die zweite etwa sechsmal länger ist als die erste und fast über die halbe Körperlänge reicht. Auffallend lang ist auch die Afterflosse. Das breite Maul der Quappe ist leicht unterständig und trägt am Kinn ein lange Bartel. Zwei sehr kurze Barteln befinden sich außerdem hinter den vorderen Nasenlöchern. Gehört in Deutschland zu den stark gefährdeten Fischarten Ernährung: Die Quappe ist ein bodenlebender und nachtaktiver Raubfisch. Maße: Quappen können bis zu einer Länge von 150 cm und einem Gewicht von 34 kg heranwachsen, werden in der Regel allerdings nicht größer als 40 cm und nicht schwerer als 3 kg.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2020_01%2F700207818_Quappe07-07.Trophy.jpg.c4ec35639d94b933b8174ea318e8a7b4.jpg&f=1&nofb=1&ipt=fd0fa3d33105f112d756878676ca30de3bfefc43e38bd78b5f99c19bb709330f&ipo=images'
  },

  {
    name: 'Kaspische Forelle',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 50 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Kaspische Forelle (Salmo labrax), auch Schwarzmeeforelle genannt, ist eine der größten Forellenarten. Ihr Habitat ist das Kaspische Meeresbecken. Sie bevorzugt Gewässer mit hohem Sauerstoffgehalt. Die Körperform der Kaspischen Forelle ähnelt dem Atlantischen Lachs. Die Körperseiten sind silbrig, der Rücken ist dunkel. An den Flanken und am Kopf trägt die Kaspische Forelle dunkelgraue Flecken. Ernährung: Die Hauptnahrung der Kaspischen Forelle besteht aus Krebstieren, Wasser- und Fluginsekten und deren Larven. Ausgewachsene Tiere ernähren sich von Fischen. Maße: Das durchschnittliche Gewicht eines erwachsenen Fisches beträgt etwa10 kg bei einer Körperlänge von bis zu 130 cm.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2021_11%2Frf4_4.0.17239_20211104_183400.png.51f43601ccee3be7d2da7692d2ce84f6.png&f=1&nofb=1&ipt=a526d67222c1580c80e41d0952e100e7e08cfb2c7059864a3864509d00d460cd&ipo=images'
  },

  {
    name: 'Kutum',
    text: `Normale Trophäe: 5 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Kutum oder Kaspische Weißfisch (Rutilus kutum) ist ein großer Fisch aus der Familie der der Karpfenartigen. Er lebt im Becken des Kaspischen Meeres sowohl im Süß- als auch im Brackwasser. Der Kutum hat einen langgestreckten Körper, der mit zunehmendem Alter "vierkantig" wird. Der Rücken ist dunkel und grün getönt. Die Seiten sind silbrig. Ernährung: Die Nahrung des Kutum besteht aus Wasserinsekten und verschiedenen benthischen Wirbellosen. Maße: Erwachsene Fische erreichen eine Länge von 75 cm und ein Gewicht von mehr als 6 kg.`,
    image: 'https://rf4.info/img/fish/57.png'
  },

  {
    name: 'Kaspineunauge',
    text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 200 g
        
        Beschreibung und natürliches Vorkommen:
        Das Kaspineunauge (Caspiomyzon wagneri) ist ein anadromer Fisch. Es lebt im Becken des Kaspischen Meeres und hat einen langen, schlangenartigen, schuppenlosen sowie mit Schleim bedeckten Körper. Seine Körperfarbe ist gleichmäßig grau. Ernährung: Grundnahrungsquelle der Kaspineunaugen sind Algen, Überreste verwesender Tiere und Pflanzen, tote Fische oder Kleintiere. Maße: Ausgewachsene Exemplare können eine Länge von 55 cm erreichen und bis zu 200 g wiegen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/c_lamprey.thumb.png.e1f5dca16d4c6eb08a150c2043f49821.png'
  },

  {
    name: 'Wobla',
    text: `Normale Trophäe: 500 g 
        Seltene Trophäe: 800 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Wobla (Rutilus caspicus) ist ein Vertreter der Karpfenfamilie. Sie lebt im Becken des Kaspischen Meeres. Woblas haben einen eher breiten Körper, der an den Seiten abgeflacht ist. Die Schuppen sind groß und grau. Eine Wobla ähnelt einem Rotauge, ist im Unterschied zu diesem jedoch größer. Ernährung: Die Nahrung von Woblas sind kleine Krebstiere, Insekten und ihre Larven. Maße: Die durchschnittliche Körperlänge einer erwachsenen Wobla beträgt etwa 30 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/vobla.thumb.png.996eb20c8cfdfa50a309d1fa02735b33.png'
  },

  {
    name: 'Wels',
    text: `Normale Trophäe: 100 kg 
        Seltene Trophäe: 200 kg
        
        Beschreibung und natürliches Vorkommen: 
        Das Verbreitungsgebiet des Welses (Silurus glanis) erstreckt sich von Mittel- und Osteuropa bis Zentralasien. Dabei werden bevorzugt große Flüsse und Seen mit schlammigem Grund besiedelt. Der Wels ist der größte reine Süßwasserfisch Europas. Welse sind vorwiegend nacht- und dämmerungsaktive Raubfische. Ernährung: Welse ernähren sich von lebenden und toten Fischen, aber auch von Wirbellosen und gelegentlich von kleinen Wasservögeln und Säugetieren. Sie nehmen nahezu alles an, was von der Größe her bewältigt werden kann.. Maße: Welse wachsen ihr Leben lang und erreichen eine Länge von bis zu 5 m und ein Gewicht von 300 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_08/w_catfish_m.thumb.png.f25654c9cb972eb10cb8c86e168d3df2.png'
  },

  {
    name: 'Bachsaibling',
    text: `Normale Trophäe: 5 kg 
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Bachsaibling (Salvelinus fontinalis) gehört zur Familie der Salmoniden. Er wurde 1884 aus Nordamerika eingeführt und besiedelt jetzt viele Gewässer Europas, Asiens und Nordamerikas. Der Bachsaibling gilt als einer der schönsten und farbenprächtigsten Vertreter der Salmoniden. Sein Körper ist typisch torpedoförmig. Die bauchseitigen Flossen haben einen auffällig rot-orange gefärbten Saum mit weißem Rand. Charakteristisch ist auch die schmale schwarze Abgrenzung dieses weißen Randes gegen das Rot der Flossen. Der Rücken ist braun gefärbt und oliv marmoriert. Bachsaiblinge haben kleine Schuppen und ein großes, tief eingeschnittenes Maul. Ernährung: Die Nahrung der Bachsaiblinge besteht überwiegend aus Planktonkrebsen und Bodenlebewesen. Im Sommer erbeuten Bachsaiblinge auch Anflugnahrung, wie z.B. Heuschrecken. Größere Exemplare ernähren sich von Fischen. Maße: Entscheidend für das Wachstum der Saiblinge sind unter anderem Gewässerbeschaffenheit und Nahrungsmenge. Die Länge wildlebender Bachsaiblinge in Europa überschreitet selten 35, maximal 55 cm. Nordamerikanische Saiblinge können hingegen bis zu 4 kg schwer werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_04/salvel_l_m.thumb.png.0c803469366054c799de6f7b642aaeed.png.dc66d7faf04d838d997bbe1715f7d031.png'
  },

  {
    name: 'Schläfergrundel',
    text: `Normale Trophäe: 400 g 
        Seltene Trophäe: 700 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Amur-Schläfergrundel (Perccottus gleniii) ist ein Süßwasserfisch aus der Familie der Zahn-Schläfergrundeln. Sie kommt im Amurbecken im fernen Osten Russlands, im nordöstlichen China sowie im nördlichen Korea vor. Diese Grundel lebt in stehenden Gewässern wie Seen, Teichen, Altarmen und Sümpfen mit dichtem Pflanzenbewuchs und meidet selbst langsam strömendes Wasser. Die Bauchflossen dieser Grundel-Art sind nicht zu einer Saugscheibe zusammengewachsen. Männliche Schläfergrundeln sind zur Paarungszeit schwärzlich mit einem grünen Schimmer und zeigen leuchtend grüne Punkte auf dem Rumpf und auf den unpaarigen Flossen sowie einen Buckel im Nacken. Ernährung: Schläfergrundeln leben räuberisch von Larven, insbesondere Kaulquappen, kleinen Krebstieren und Fischen sowie Wirbellosen. Außerdem kann es zu Kannibalismus kommen. Maße: Die Schläfergrundel erreicht eine Länge bis 25 cm und ein Maximalgewicht von 300 g.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_10/a.sleeper_b.thumb.png.3fbac008002ebd94b162d57c30273afd.png'
  },

  {
    name: 'Königslachs',
    text: `Normale Trophäe: 40 kg 
        Seltene Trophäe: 60 kg
        
        Der Königslachs (lat. Oncorhynchus tshawytscha ) ist einer der größten Vertreter in der Lachsfamilie. Er bewohnt Gewässer in Kamtschatka, Tschukotka und im Bering- und Ochotskischen Meer. Er hat einen großen Kopf und einen kräftigen, torpedoförmigen Körper. Auf dem Rücken und den Schwanzflossen befinden sich kleine schwarze Flecken. Während des Laichens färbt sich der Körper des Fisches rötlich-braun. Die Körperproportionen bleiben gleich, aber der Kiefer des Männchens wird leicht gebogen, was zu dem berühmten Laichhaken führt. Königslachse können mit Posen- oder Spinnfischmontagen gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/chavycha.thumb.jpg.81427fb56124a1301d589a6efbd09f51.jpg'
  },

  {
    name: 'Döbel',
    text: `Normale Trophäe: 4 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Döbel (Squalius cephalus) ist in fast ganz Europa mit Ausnahme Schottlands, Irlands und dem äußersten Norden Skandinaviens zu finden. Außerdem lebt er in der Türkei, Russland, Armenien, Georgien und dem Iran. Der Döbel gehört, was sein Lebensraum betrifft, wohl zu den anpassungsfähigsten Fischen überhaupt. Er kommt von kühlen kleinen Bächen bis hin zu den Niederungsflüssen der Brachsenregion ebenso vor wie in nahezu jeder Art von stehendem Gewässer. Sein bevorzugter Lebensraum sind jedoch eher sommerwarme, langsam fließende oder stehende Gewässer mit reichlich Deckung. Der Döbel hält sich gerne in Ufernähe unter überhängenden Ästen und in der Nähe von Totholzbereichen auf. Der Döbel ist ein ansehnlicher Fisch. Sein Rücken ist dunkelgrün, fast schwarz, die Seiten schimmern silbern. Die Brustflossen sind orange, Bauch und Afterflossen sind rot, die Schwanzflosse ist schwarz. Sein Kopf ist relativ groß und breit. Ernährung: Der Döbel ist ein Raubfisch. Während bei den Jugendstadien Insektenlarven, kleine Muscheln und pflanzliche Kost noch einen erheblichen Teil der Nahrung darstellen, ernähren sich erwachsene Döbel meist von Mollusken, Regenwürmern, Jungfischen, Flusskrebsen oder Grasfröschen. Maße: Der Döbel erreicht eine Maximalgröße von 80 cm mit einem Gewicht von ca. 8 kg.`,
    image: 'https://rf4.info/img/fish/27.png'
  },

  {
    name: 'Keta Lachs',
    text: `Normale Trophäe: 8 kg 
        Seltene Trophäe: 10 kg
        
        Der Ketalachs (Oncorhynchus keta), auch Hundslachs genannt, ist einer der am häufigsten vorkommenden Lachsfische. Sein Lebensraum ist unglaublich groß. In Russland ist er im Raum des Arktischen Ozeans, im Bering- und Ochotskischen Meer, auf Kamtschatka, Sachalin und den Kurilen zu finden. Beim Laichen ändert er seine silberne Färbung zum Paarungskleid: Kopf und Oberkörper werden schwarz, auf dem Körper erscheinen dunkelviolette oder dunkelrote Streifen. Bei den Weibchen ändern sich die Proportionen von Körper und Kopf während der Laichzeit fast nicht. Bei den Männchen ragt der zugewachsene Oberkiefer in Form eines kräftigen Laichhakens über dem Unterkiefer. Der Körper wird durch die Entwicklung eines großen Höckers hinter dem Kopf noch höher. Dieser Fisch lässt sich vor allem mit Kunstködern und Lebendködern beangeln.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/keta.thumb.jpg.1c2a29fb16a3ecec1cbf58031bbbb32b.jpg'
  },

  {
    name: 'Tyulka Sardine',
    text: `Normale Trophäe: 24 g
        Seltene Trophäe: 28 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Schwarzmeertyulka oder Tyulka-Sardine (Clupeonella cultriventris) ist ein kleiner Heringsfisch. Sie lebt im Schwarzen sowie im Kaspischen Meer sowie in den dort einmündenden Flüssen. Ihr Bauch und ihre Seiten sind silberfarben, der Rücken und die Oberseite des Kopfes hingegen dunkler mit einen blaugrünen Farbton. Ernährung: Die Tyulka-Sardine ernährt sich hauptsächlich von Zooplankton. Dieser Fisch kann gut mit der Stipp-Angel gefangen werden. Er eignet sich auch als Köderfisch für Barsch, Quappe oder Hecht. Maße: Die Länge der erwachsenen Exemplare beträgt 9-15 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_02/tiulka.thumb.jpg.f38b506a65116f0d664f252d41050b2a.jpg'
  },

  {
    name: 'Silberlachs',
    text: `Normale Trophäe: 5,5 kg
        Seltene Trophäe: 7 kg
        
        Der Silberlachs ist im Nordpazifik entlang der Westküste Nordamerikas und vor Kamtschatka vom Anadyr-Fluss bis zu den Flüssen des nordwestlichen Ochotskischen Meeres verbreitet. Er wird wegen seiner hellen, silberfarbenen Schuppen oft auch als Silberlachs bezeichnet. Während des Laichens beginnt sich sein Aussehen schnell zu verändern. Der Körper wird höher, der Kopf länger, und die Kiefer werden wie zu einem Schnabel gebogen. Wie bei allen pazifischen Lachsen sind diese Veränderungen bei den Männchen stärker ausgeprägt. Auch ihre Färbung ändert sich - ihre Flanken werden karminrot, während der Rücken und der Kopf bläulich-grün werden. Silberlachse werden oft mit Kunst- und Lebendködern gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/kijuch.thumb.jpg.9d855dfc4d7fdea55b9743336a51f46b.jpg'
  },

  {
    name: 'Barbe',
    text: `Normale Trophäe: 8 kg
        Seltene Trophäe: 12 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Barbe (Barbus barbus) ist ein europäischer Süßwasserfisch aus der Familie der Karpfenfische (Cyprinidae) und Namensgeber der Unterfamilie Barbinae. Sie kommt in Europa von den Pyrenäen bis zum Pregel und zum Dnjepr vor. Die Barbe lebt in sauerstoffreichen Fließgewässern der nach ihr benannten Barbenregion und bevorzugt sandigen oder kiesigen Bodengrund. Sie hat einen langgestreckten Körper. Die Seitenlinie ist fast gerade, der Rücken nur leicht gewölbt, der Körper mit mittelgroßen Schuppen besetzt. Barben haben ein rüsselartiges, unterständiges Maul mit fleischigen Lippen und vier dicken Barteln an der Oberlippe. Die Fische gehen vorwiegend nachts auf Nahrungssuche. Sie überwintern in großen Gruppen unter Wurzeln oder in strömungsarmen Flussabschnitten. Der Laich der Barbe und das ihn umgebende Bauchfleisch ist beim Verzehr für Menschen gesundheitsschädlich! Ernährung: Die Barbe ernährt sich von Fischlaich, Insektenlarven, Muscheln, Schnecken, Würmern und in geringem Maße von pflanzlicher Kost. Größere Barben stellen auch kleinen Fischen nach. Maße: Die Barbe erreicht eine Länge bis 85 cm bei einem Körpergewicht von 4-6 kg. In Ausnahmefällen wird sie bis zu einem Meter lang.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/c_barbel_m.thumb.png.64e455d3c3ca05453908ff316f963238.png'
  },

  {
    name: 'Schuppenkarpfen',
    text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Schuppenkarpfen (Cyprinus carpio) ist eine der bekanntesten europäischen Fischarten, und als Typusart der Gattung Cyprinus sowohl im Deutschen als auch in der Fachsprache Namensgeber der Familie der Karpfenfische (Cyprinidae), der Überfamilie der Karpfenfischähnlichen (Cyprinoidei) und der Ordnung der Karpfenartigen (Cypriniformes). Er ist seit der Antike ein beliebter Speisefisch, der häufig in Fischteichen gezüchtet wird und dazu auch in zahlreichen Ländern weltweit eingeführt wurde. Teilweise tritt er dort als invasive Art auf. Das ursprüngliche Verbreitungsgebiet des Karpfens umfasst die Zuflüsse des Kaspischen und des Schwarzen Meers sowie des Aralsees und reicht in Europa bis zur mittleren Donau. Karpfen leben bevorzugt im warmen, flachen Süßwasser von Teichen, Baggerseen und langsam strömenden Flussabschnitten. Der Schuppenkarpfen ist vollständig mit großen Schuppen bedeckt und besitzt einen relativ schlanken Körper; Zuchtfische sind hochrückig. Der Rücken ist meist dunkelbraun bis grau, bei größeren Exemplaren ist manchmal auch ein blauschwarzer Schimmer erkennbar. Die Farben an den Flanken variieren zwischen dunkelbraun und goldgelb. Aus dem Grad der Beschuppung ergeben sich bei Zuchtfischen auch ihre Bezeichnungen (Schuppen,- Spiegel,- Zeil,- bzw. Lederkarpfen). Charakteristisch bei allen Karpfen ist die lange Rücken - und die kurze Afterflosse. Der längste Hartstrahl der Rücken- und Afterflosse ist stark gesägt. Die Schlundzähne sind dreireihig. An der Oberlippe sitzt an jeder Seite eine kurze und dahinter im Maulwinkel eine längere Bartel. Ernährung: Der Karpfen ernährt sich als Jungtier von Zooplankton, später hauptsächlich von am Boden lebenden Kleinlebewesen wie Insektenlarven, Schnecken und Würmern. Maße: Die Durchschnittsgröße liegt je nach Gewässer bei einem Gewicht von 500 - 600 g um 30 cm. Da der Karpfen zu den großwüchsigen Vertretern der Cypriniden zählt, kann er bei optimalen Bedingungen sowie genügend Nahrungsvorräten aber ein Maximalgewicht von mehr als 20 kg und eine Länge von über 100 cm erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/carp_m.thumb.png.a229af7fe328de01dc57b1f348894e0b.png'
  },

  {
    name: 'Geister Schuppenkarpfen',
    text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Die Geister-Variante des Schuppenkarpfens ist eine Mischung aus Schuppenkarpfen und Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie auch viel schwerer zu fangen sind.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/carp_ghost.thumb.jpg.dbb71234b5b9182cc2a80c606060070d.jpg'
  },

  {
    name: 'Sumpfelritze',
    text: `Normale Trophäe: 100 g
        Seltene Trophäe: 160 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Sumpfelritze (Rhynchocypris percnurus) ist ein Kleinfisch aus der Familie der Karpfenfische. Die Art kommt in Seen und Flussbecken des Arktischen Ozeans von der nördlichen Dwina bis nach Kolyma, aber auch in Becken des Pazifischen Ozeans, des Schwarzen Meers und der Ostsee vor. Sie hat einen kompakten, mit flachen goldenen Schuppen bedeckten Körper. Ernährung: Die Sumpfelritze ernährt sich von Algen, Insekten und kleinen benthischen Organismen. Maße: Die Sumpfelritze ist ein kleiner Fisch. Ihre durchschnittliche Länge beträgt etwa 10 cm, große Exemplare erreichen eine Länge von 15 cm und ein Gewicht von 100 g`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/golyan.thumb.jpg.740d2ed498b26a3aa89fe6d1b315b8e4.jpg'
  },

  {
    name: 'Rotauge',
    text: `Normale Trophäe: 1,2 kg
        Seltene Trophäe: 2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Das Rotauge (Rutilus rutilus), auch Plötze genannt, ist ein Fisch aus der Familie der Karpfenfische (Cyprinidae). Rotaugen lebt als anspruchsloser Schwarmfisch in stehenden und langsam fließenden Gewässern in fast ganz Europa nördlich der Alpen und der Pyrenäen bis zum Ural. Sie haben einen hochrückigen Körper mit grünlicher Ober- und weißer Bauchseite. Ein besonders auffallendes Kennzeichen ist die leuchtend rote Iris, daher rührt die Namensgebung. Ernährung: Die Nahrung der Rotaugen besteht einerseits aus verschiedenen Wasserpflanzen und andererseits aus Kleintieren wie Zooplankton, Würmern, Insektenlarven, Insekten, kleinen Schnecken und Muscheln. Maße: Das Rotauge erreicht eine Länge von bis zu 50 cm und ein Gewicht bis 3 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/c.roach_m.thumb.png.a8cb56990a9e886094c868b8dedce7ac.png'
  },

  {
    name: 'Albino Schuppenkarpfen',
    text: `Normale Trophäe: 20 kg
        Seltene Trophäe: 30 kg
        
        Wie andere Albino-Fische hat auch diese Form des Schuppenkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb sie schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
    image: 'https://rf4.info/img/fish/145.png'
  },

  {
    name: 'Karausche',
    text: `Normale Trophäe: 1,8 kg
        Seltene Trophäe: 2,9 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Karausche (Carassius carassius) ist eine Fischart aus der Familie der Karpfenfische (Cyprinidae). Sie ist nahe mit dem Giebel verwandt, unterscheidet sich von diesem aber durch ihren runderen Körper und der goldenen Farbe des Schuppenkleides. Die Karausche lebt fast in ganz Europa mit Ausnahme von Irland, Schottland und Wales. Sie ist großschuppig, hochrückiger als der Karpfen und hat - anders als dieser - keine Barteln. Die Oberseite des Körpers ist bräunlich mit grünlichem Glanz, die Flanken sind heller, die Unterseite hell gelblich bis schmutzig-weiß. Die Schwanzflosse ist nur geringfügig eingekerbt. Die Karausche bevorzugt flache, stark bewachsene Seen, Weiher und Teiche und meidet kalte, schnellfließende Gewässer. Sie ist selbst in kleinsten sauerstoffarmen, verschlammten Tümpeln noch zu finden, denn Karauschen können mehrere Tage lang fast ohne Sauerstoff überleben. Von Anglern wird die Karausche als Köderfisch sehr geschätzt, weil sie eine bevorzugte Beute von Hechten und anderen Raubfischen ist. Ernährung: Karauschen ernähren sich von Kleintieren und Insektenlarven, nehmen aber auch Pflanzennahrung auf. Maße: Die Karausche wächst langsam und erreicht innerhalb von 2 Jahren ein Durchschnittsgewicht von ca. 200 g. Wird sie älter, kann sie aber bis über 60 cm lang werden und ein Gewicht von 3 kg erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/c.carp_m.thumb.png.be008527142dba85e3c2688764ee62e9.png'
  },

  {
    name: 'Lumb',
    text: `Normale Trophäe: 18 kg
        Seltene Trophäe: 24 kg (Noch nicht bestätigt)`,
    image: 'https://rf4.info/img/fish/170.png'
  },

  {
    name: 'Hasel',
    text: `Normale Trophäe: 250 g
        Seltene Trophäe: 390 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Hasel (Leuciscus leuciscus) ist ein kleinwüchsiger Vertreter der Karpfenfische. Er hat in Europa nur eine sehr geringe wirtschaftliche Bedeutung und wird wegen seiner typischen „Weißfischgestalt“ leicht mit anderen Vertretern seiner Familie verwechselt. Der Hasel bewohnt überwiegend Fließgewässer mit steinigem Grund von der Forellen- bis zur Barbenregion in Europa, Sibirien und Kasachstan. Er ist auch in Stauseen anzutreffen, aber insgesamt seltener in stehenden Gewässern. Bevorzugt hält er sich in in ruhigen oder langsam strömenden Klarwasserzonen auf. In Deutschland ist der Hasel im gesamten Bundesgebiet zu finden, wobei die Bestandsdichte von Süden nach Norden hin abnimmt. Hasel sind gesellige, in kleinen Schwärmen lebende Fische. Als besonders scheue und vorsichtige Tiere meiden sie Lärm und laute Geräusche. Das Maul des Hasels ist eher klein und leicht unterständig; der Maulspalt reicht nicht bis zum Vorderrand der Augen. Die Schuppen sind vergleichsweise groß. Der Rücken ist meist graublau, die Seiten schimmern silbrig, der Bauch ist weiß. Die Flossen tragen meist eine orange Färbung. Ein Unterscheidungsmerkmal gegenüber dem Döbel ist der nach innen gewölbte Rand der Afterflosse. Ernährung: Hasel ernähren sich von Insekten und deren Larven, Kleinmuscheln, Schnecken und Zooplankton. Maße: Die Durchschnittsgröße liegt zwischen 15 und 17 cm bei einem Gewicht von 250 - 350 g.`,
    image: 'https://rf4.info/img/fish/26.png'
  },

  {
    name: 'Dolly Varden Forelle',
    text: `Normale Trophäe: 7,5 kg
        Seltene Trophäe: 10 kg
        
        Die Dolly-Varden-Forelle (Salvelinus malma) ist eine der größten Saibling Arten. Sie ist im Nordpazifik und entlang der asiatischen Küste von der Chaun Bay bis Korea weit verbreitet, sowie entlang der amerikanischen Küste von Alaska bis Kalifornien. Die Dolly-Varden-Forelle hat einen hohen, seitlich abgeflachten Körper. Der obere Teil des Saiblings ist dunkelblau, die Seiten sind blaugrün, und der Bauch ist silbrig-weiß. Auf dem Rücken und den Seiten des Körpers befinden sich zahlreiche kleine weiße und gelbliche kreisförmige Flecken. Während des Laichens nehmen die Fische eine Prachtfärbung mit einem anderen Farbmuster an. Zum Fangen der Dolly-Varden-Forelle können sowohl Posen- als auch Spinnfisch-Montagen verwendet werden.`,
    image: 'https://rf4.info/img/fish/118.png'
  },

  {
    name: 'Don Kaulbarsch',
    text: `Normale Trophäe: 250 g
        Seltene Trophäe: 350 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Heimat des Don-Kaulbarsches (Gymnocephalus acerina) ist auf die ins Schwarze Meer mündenden Flüsse Don, Dnepr, Dnjestr und Kuban beschränkt. Verirrte Einzel-Exemplare können darüber hinaus auch im Donaudelta auftauchen. Er ist aber nirgends häufig und hat keine wirtschaftliche Bedeutung. Die noch aus vergangenen Tagen stammende Kunde, dass er sehr wohlschmeckend sei, ist aber in der ukrainischen Bevölkerung durchaus noch lebendig. Der Don-Kaulbarsch ist weniger hochrückig als die klassischen Arten dieser Untergattung. Er besitzt auch kleinere Schuppen und mehr Dorsalis-Stacheln. Der Körper ist silbrig gelbgrau mit unregelmäßig verteilten runden dunklen Flecken unterschiedlicher Größe. Der Don-Kaulbarsch ist dämmerungs- aber auch tagaktiv. Im Herbst zieht er sich in größeren Schwärmen in tieferes Wasser zurück und überdauert dort inaktiv den Winter. Obwohl dieser Barsch auch im Stillwasser und in Seen vorkommt, bevorzugt er doch die sandigen (aber auch grob-kiesigen) Abschnitte größerer Flüsse, durchaus auch mit stärkerer Strömung. Er lebt gesellig. Ernährung: Don-Kaulbarsche ernähren sich von Benthos (Insektenlarven, Krebsen, Würmern, Mollusken), und eher selten von Fischen. Maße: Am häufigsten findet man Exemplare mit einer Länge von 17-22 cm und einem Körpergewicht von etwa 200-250g.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_12/Barsch.thumb.png.3d72bb39154a67132c343274da5b0a91.png'
  },

  {
    name: 'Dryagin Saibling',
    text: `Normale Trophäe: 10 kg
        Seltene Trophäe: 15 kg
        
        Der Dryagin-Saibling (Salvelinus drjagini) ist ein Mitglied der Salmoniden-Familie und ein endemischer Bewohner der Süßwasser-Seen Sibiriens. Ausgewachsene Fische können eine Länge von mehr als einem Meter erreichen. Der Rücken ist graugrün, die Seiten des Fisches sind mit einem hellen Punktmuster bedeckt, und der Bauch sowie der untere Teil des Kopfes sind weiß oder rot-orange. Vorzugsweise werden Posen- oder Spinnangeln verwendet, um diesen Fisch zu fangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/dr_char.thumb.jpg.e82a5798d78dcbb7814e2be2d87fa71d.jpg'
  },

  {
    name: 'Ostsibirische Äsche',
    text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,5 kg
        
        Der Lebensraum der Ostsibirischen Äsche (Thymallus arcticus pallasii) befindet sich in der unteren Tunguska. Die Seiten und die Rückenflosse dieses Fisches sind mit kleinen schwarzen, roten und violetten Tupfen verziert. Die Rückenflosse selbst ist sehr hoch. Ein roter Streifen verläuft entlang ihres Randes. Sie wird am besten mit Posen- und Spinnangeln gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/os_grayling.thumb.jpg.65ff29900ad171e1d3ab781c15928e45.jpg'
  },

  {
    name: 'Sibirischer Stör',
    text: `Normale Trophäe: 100 kg
        Seltene Trophäe: 150 kg
        
        Der Lebensraum des Sibirischer Störs (Acipenser baeri stenorrhynchus Nikolsky) sind die großen Flüsse Ostsibiriens. Der Sibirischer Stör ist eine sehr variable Art. Er zeichnet sich durch Unterschiede sowohl in der Schnauzenform als auch in der Farbe aus. Der Rücken kann von hellgrau bis dunkelbraun, und die Farbe des Bauches von weiß bis hellgelb variieren. Sibirische Störe können auf Posen-, aber auch mit Spinn- und Grundmontagen gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/zs_sturgeon.thumb.jpg.0be43f797c70ad1e32bd4a45938a7973.jpg'
  },

  {
    name: 'Ostbrasse',
    text: `Normale Trophäe: 4,4 kg
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Lebensraum der Ostbrasse (Abramis brama bergi) sind die Becken des Schwarzen, Kaspischen und Asowschen Meeres. Ostbrassen sind Süßwasserschwarmfische. Sie bevorzugen Gewässerbereiche mit verschlammtem Boden. Der Körper dieser Brassen ist hochrückig und seitlich abgeflacht. Der Kopf ist klein. Der untere Teil der Schwanzflosse ist länger als der obere. Die Körper-Oberseite ist dunkel. Die Flanken haben je nach Alter eine Silber- oder Bronzefarbe. Ernährung: Algen, Würmer, Insektenlarven und Schnecken bilden die Nahrung der Ostbrasse Maße: Ausgewachsene Fische erreichen eine Länge von 50 cm und ein Gewicht von 5 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/e_bream.thumb.png.d60a10af7aa8d545e45c4dc06c0aedf2.png'
  },

  {
    name: 'Aal',
    text: `Normale Trophäe: 4 kg
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Europäische Aal (Anguilla anguilla) ist in ganz Europa, Kleinasien und Nordafrika beheimatet. Er hat einen schlangenförmigen, langgestreckten, drehrunden Körper. Die Rücken-, Schwanz- und Afterflosse bilden einen durchgängigen Flossensaum. In der dicken Haut sind sehr kleine Rundschuppen eingebettet. Der Europäische Aal hat ein oberständiges Maul. Aale sind insbesondere in der Dämmerung und in der Nacht aktiv und gehen dann auf Nahrungssuche. Sie kommen in zwei Ernährungsvarianten vor: Dem Spitzkopfaal mit schmalem Kopf und spitz zulaufender Schnauze, der sich vorwiegend von Krebsen und anderen Wirbellosen ernährt, und dem Breitkopfaal mit breitem Kopf und breiter Schnauze, der ein Fischjäger ist. Der Europäische Aal gilt inzwischen als stark gefährdet. Ernährung: Aale ernähren sich vorwiegend von Würmern, (Klein-)Krebsen, Insektenlarven etc., aber auch von Fischlaich und Fischen. Kleinfische werden aktiv im Mittelwasser und an der Wasseroberfläche gejagt. Dabei erweist sich der Aal als geschickter Jäger. Maße: Erwachsene Weibchen können bis zu 200 cm lang und 6 kg schwer werden, Männchen erreichen nur 60 cm Länge. Solche Größen werden aber extrem selten erreicht und schon ein Weibchen von einem Meter Länge ist ausgesprochen groß`,
    image: 'https://rf4.info/img/fish/49.png'
  },

  {
    name: 'Esmarks Aalmutter',
    text: `Normale Trophäe: 1,5 kg (Noch nicht bestätigt)
        Seltene Trophäe: 2 kg (Noch nicht bestätigt)`,
    image: 'https://rf4.info/img/fish/167.png'
  },

  {
    name: 'Seeteufel',
    text: `Normale Trophäe: 35 kg
        Seltene Trophäe: 45 kg`,
    image: 'https://rf4.info/img/fish/176.png'
  },

  {
    name: 'Europäischer Seehecht',
    text: `Normale Trophäe: 9 kg
        Seltene Trophäe: 12 kg`,
    image: 'https://rf4.info/img/fish/172.png'
  },

  {
    name: 'Scholle',
    text: `Normale Trophäe: 4,5 kg
        Seltene Trophäe: 5,5 kg`,
    image: 'https://rf4.info/img/fish/164.png'
  },

  {
    name: 'Gemeiner Kalmar',
    text: `Normale Trophäe: 2 kg
        Seltene Trophäe: 2,4 kg`,
    image: 'https://rf4.info/img/fish/163.png'
  },

  {
    name: 'Fernöstliches Neunauge',
    text: `Normale Trophäe: 40 g (Noch nicht bestätigt)
        Seltene Trophäe: 60 g (Noch nicht bestätigt)`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/fe_lamprey.thumb.jpg.d11297ad5a9b09aadf7d3bc2d8bf4612.jpg'
  },

  {
    name: 'Albino Gerahmter Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg
        Seltene Trophäe: 40 kg
        
        Wie andere Albino-Fische hat auch diese Form des Gerahmten Spiegelkarpfen eine leichte Färbung des Körpers, die durch die fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen der Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb sie schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von den gewöhnlichen Karpfen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/r_carp_albino.thumb.jpg.1199724bf597ef41c6ddfa24d4597960.jpg'
  },

  {
    name: 'Gerahmter Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg
        Seltene Trophäe: 40 kg
        
        Dieser Spiegelkarpfen zeichnet sich durch seinen hohen Körper aus. Er erhielt seinen Namen für die charakteristische Lage des Schuppenkleides. Groß und glänzend umrahmt es gleichsam den Fisch-Körper. Die Flanken des Gerahmten Spiegelkarpfen sind in der Regel schuppenfrei, können aber einzelne kleine Schuppen aufweisen. Bei der Zucht dieses Karpfens wurde besonderes Augenmerk auf die Erhöhung von Gewicht und Körperkraft gelegt.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/r_carp.thumb.jpg.bf9be17495755c307a8e46b0f530efc5.jpg'
  },

  {
    name: 'Geister Gerahmter Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg
        Seltene Trophäe: 40 kg
        
        Die Geister-Variante des Gerahmten Spiegelkarpfens ist eine Mischung aus der Gerahmten Form des Spiegelkarpfens und dem Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie viel schwerer zu fangen sind.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/r_carp_ghost.thumb.jpg.6b1c23c82eccb2aa6b377981f88973af.jpg'
  },

  {
    name: 'Flusskrebs',
    text: `Normale Trophäe: 200 g
        Seltene Trophäe: 325 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Flusskrebs (Astacus astacus) ist der größte unter den in Europa heimischen Krebsarten. Der Flusskrebs kommt fast in ganz Europa vor. Der Flusskrebs liebt nährstoffreiche Gewässer der Niederungen, er ist aber auch in Fließgewässern höherer Lagen zu finden. Der Körper ist meist dunkelbraun bis rotbraun, seltener findet man auch Exemplare auch mit blauer Färbung. Der Kopf- und Rückenpanzer ist spitz auslaufend. Er ist vom Aussterben bedroht. Ernährung: Flusskrebse ernähren sich von vielfältigem organischem Material des Bodengrundes, aber auch kleinen Tieren und Fischen. Maße: Flusskrebse erreichen eine Länge bis 20 cm und ein Gewicht von bis zu 350 g.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/crawfish_m.thumb.png.4c79ac9c355faf641682021ec165084e.png'
  },


  {
    name: 'Grasfrosch',
    text: `Normale Trophäe: 190 g
        Seltene Trophäe: 250 g
        
        Beschreibung und natürliches Vorkommen:
        Der Grasfrosch (Rana temporaria) ist im größten Teil Europas vertreten. Sein bevorzugter Lebensraum sind sonnige stehende oder sehr langsam fließende Gewässer. Die Färbung der Körper-Oberseite kann von gelb-rot bis zu dunkelbraun variieren, ebenso ist die Bemusterung individuell sehr verschieden. Nachts sind Grasfrösche aktiv, wogegen sie sich tagsüber gerne an bewachsenen, aber sonnigen Orten verstecken. Ernährung: Bei der Nahrungsaufnahme bevorzugen Grasfrösche Insekten wie Käfer, Heuschrecken, Würmer und Fliegen. Maße: Erwachsene Grasfrösche erreichen maximal 11 cm; Weibchen können geringfügig größer werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/frog_m.thumb.png.fbf26d7dedd3dc62dfe498b92550bd71.png'
  },

  {
    name: 'Giebel',
    text: `Normale Trophäe: 1,9 kg
        Seltene Trophäe: 3,2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Giebel, auch Silberkarausche genannt (Carassius gibelio), lebt in Eurasien im Süß- und Brackwasser und gehört zu den Karpfenartigen. Der Giebel ist die Stammform des Goldfisches. Er ist der Karausche (Carassius carassius) sowohl im Aussehen als auch in der Biologie sehr ähnlich. Der Giebel ist seit langem in Westasien und dem Schwarzmeergebiet bekannt, und sein Lebensraum erstreckt sich vermutlich bis nach Zentralasien. Die ursprüngliche Heimat des Giebels liegt in Ostasien und Sibirien. Giebel stellen an den Lebensraum keine hohen Ansprüche und leben gesellig in sommerwarmen, stehenden und fließenden Gewässern. Sie haben einen seitlich zusammengedrückten Körper, der mäßig hochrückig ist. Der Übergang vom Kopf zum Rücken verläuft beim Giebel in einem Knick. Der Rücken ist grün-grau bis graubraun gefärbt, die Flanken schimmern meist auffällig silbrig. Die Flossen sind hell- bis dunkelbraun gefärbt. Der Außenrand der Rückenflosse verläuft gerade oder ist leicht nach innen gewölbt. Die Schwanzflosse ist deutlich gegabelt. Das Maul ist endständig bis leicht unterständig, Barteln fehlen. Die Schuppen sind ziemlich groß. Das Bauchfell des Giebels ist dunkel pigmentiert. Ernährung Giebel sind hinsichtlich ihrer Ernährung sehr flexibel und ernähren sich sowohl von Insektenlarven als auch von pflanzlicher Nahrung. Maße: Der Giebel erreicht eine Länge von etwas über 40 cm und ein Gewicht von 1,5 - 2 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/crucian_m.thumb.png.10526d18031438322348308961152d23.png'
  },

  {
    name: 'Goldschleie',
    text: `Normale Trophäe: 4 kg
        Seltene Trophäe: 6 kg
        
        Beschreibung und natürliches Vorkommen: 
        Ein Fisch aus der Familie der Karpfenfische (Cyprinidae). Die Goldschleie ist eine Zuchtform der Schleie (Tinca tinca). Als Herkunftsgebiet der Schleie gelten Europa, Kleinasien und Westsibirien. Die Schleie bevorzugt sommerwarme stehende oder langsam fließende Gewässer mit reicher Unterwasservegetation. Schleien sind hinsichtlich ihres Lebensraumes und der Wasserqualität nicht sehr anspruchsvoll, benötigen allerdings naturbelassene Uferbereiche mit guten Unterwasserpflanzenbeständen. Die Hauptaktivität der Goldschleien liegt in der Dämmerung und in den Nachtstunden. Sie stehen während der Nahrungsaufnahme regelrecht auf dem Kopf und durchwühlen mit ihrem vorstülpbaren Maul die Schlammschicht des Gewässergrundes. Die Schleie hat ein mäßig hochrückigen Körper mit deutlich abgerundeten Flossen, die Schwanzwurzel ist auffällig hoch, die kleinen Schuppen sind von eine dicken Schleimschicht überzogen. Die Iris der Augen ist meist intensiv rot oder dunkelorange gefärbt. Das Maul ist vorstülpbar, und in den Maulwinkeln sitzt jeweils eine relativ kurzer Bartel. Die Schlundzähne sind einreihig und sehen aus wie ein Haken. Typisch für die Schleie ihr gemächliches Verhalten während der Nahrungsaufnahme; aber auch sonst fallen die Bewegungen der Schleie meist recht langsam aus. Ernährung: Die Nahrung besteht großteils aus Insektenlarven, Würmer, Schnecken, kleinen Muschelarten und pflanzlicher Kost Maße: Durchschnittliche Länge: 20-40 cm. Maximal bis 70 cm und einem Gewicht um 7 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/59bc3565e6b52_.thumb.jpg.5e9c3472b7fe0cd5819dddab541aa5d5.jpg'
  },

  {
    name: 'Weißer Amur',
    text: `Normale Trophäe: 28 kg
        Seltene Trophäe: 40 kg
        
        Beschreibung und natürliches Vorkommen: 
        Diese Graskarpfen-Art stammt ursprünglich aus China, wo sie in ruhigen, tiefen Flüssen und Seen der Ebenen vorkommt. Die natürliche Verbreitung ist heute kaum noch festzustellen, da der Weiße Amur bereits im 10. Jahrhundert in China künstlich besetzt wurde. In den 1960er-Jahren wurde er auch in vielen Gewässern in Europa und Amerika zur Bekämpfung von Wasserpflanzen ausgesetzt. Der Weiße Amur hat einen schlanken, langgestreckten, im Querschnitt fast runden Körper und einen relativ breiten Schwanzstiel. Der Rücken ist grau, die Flanken schimmern silbrig bis bronzefarben. Die Körperunterseite ist vom Unterkiefer bis zur Afterflosse weiß bis gelblich gefärbt. Das leicht unterständige Maul ist eher klein und spitz zulaufend, mit einer scharfkantigen Unterlippe. Die Schlundzähne sind zweireihig und deutlich eingekerbt. Ernährung: Der Weiße Amur bevorzugt stark verkrautete Biotope, wo er sich überwiegend von pflanzlicher Nahrung ernährt. Maße: Der Weiße Amur gehört zu den großwüchsigen Fischen und erreicht eine Maximal-Länge von über 1 m. Das Maximalgewicht liegt bei ca. 30 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/g_carp_m.thumb.png.21af0ea0ab26d064108c83cc57250ffd.png'
  },

  {
    name: 'Klotzsaibling',
    text: `Normale Trophäe: 3 kg
        Seltene Trophäe: 4,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Klotzsaibling repräsentiert eine der beiden endemischen Saiblingsarten (Savelinus spec.), die im Ladoga- und Onega-Seengebiet vorkommen. Seine Schuppen sind heller als die des Ludoga-Saiblings. Man findet ihn insbesondere in großer Tiefe vor. Ernährung: Der Klotzsaibling ernährt sich von kleinen Fischen, Mollusken, Krebsen und Insekten. Maße: Das Durchschnittsgewicht eines ausgewachsenen Fisches beträgt 2 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/palia_kr.thumb.jpg.db21d930f15e2a7c82f57fd75a4eb450.jpg'
  },

  {
    name: 'Europäische Äsche',
    text: `Normale Trophäe: 3,2 kg
        Seltene Trophäe: 5,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Europäische Äsche (Thymallus thymallus) ist ein Süßwasserfisch aus der Familie Salmonidae. Sie kommt von England und Wales über die (Mittel-) Gebirgsregionen Nord-, Mittel-, Ost- und Westeuropas bis ans Schwarze Meer vor. Wichtige Merkmale der Äsche sind die hohe Rückenflosse sowie auffallende, im Verhältnis zur Körpergröße große Rundschuppen. Durch Gewässerverschmutzung und -verbauten ist die Äsche immer mehr im Rückgang begriffen. Sie benötigt klares, kühles Wasser und wächst eher langsam. Kontrovers wird diskutiert, ob die Äschenbestände insbesondere durch den Fraßdruck des Kormorans in Europa zurückgegangen sind. Ernährung: Äschen leben von Insekten der Wasseroberfläche, aber auch von Würmern und Insektenlarven. Zusätzlich erbeuten sie gelegentlich kleine Fischchen. Maße: Der Das Gewicht einer ausgewachsenen Äsche beträgt etwa 500 bis 1500 g; die Länge liegt dann in der Regel zwischen 30 und 50 cm. Besonders große Exemplare können bis zu 3000 g schwer und bis zu 60 cm lang werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/a_grayling_m.thumb.png.b103551d7ecb956928657f4e3f6cb2c2.png'
  },

  {
    name: 'Schwarzer Heilbutt',
    text: `Normale Trophäe: 25 kg
        Seltene Trophäe: 35 kg (Noch nicht bestätigt)`,
    image: 'https://rf4.info/img/fish/182.png'
  },

  {
    name: 'Grönlandhai',
    text: `Normale Trophäe: 600 kg (Noch nicht bestätigt)
        Seltene Trophäe: 700 kg (Noch nicht bestätigt)`,
    image: 'https://rf4.info/img/fish/155.png'
  },

  {
    name: 'Gründling',
    text: `Normale Trophäe: 100 g
        Seltene Trophäe: 160 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Gründling (Gobio gobio) ist Fisch aus der Familie der Karpfenartigen (Cyprinidae). In West- und Nordeuropa ist er weit verbreitet. Er lebt in schnell fließenden, aber auch stehenden Gewässern mit kiesigem oder sandigem Grund. Der Gründling hat einen rundlichen Körper, einen relativ großen Kopf, ein unterständiges Maul und ein Paar tastempfindliche Barteln. Er hält sich stets auf dem Gewässergrund auf (Name!). Auch als Köderfisch ist der Gründling sehr beliebt. Ernährung: Der Gründling ernährt sich von Insektenlarven, Weich- und Krebstieren. Maße: Gründlinge werden selten über 15 cm lang.`,
    image: 'https://rf4.info/img/fish/53.png'
  },

  {
    name: 'Schellfisch',
    text: `Normale Trophäe: 11 kg
        Seltene Trophäe: 13 kg`,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.c5d76ccb8b1ee3c28105e78035991a6d.png'
  },

  {
    name: 'Kleine Bodenrenke',
    text: `Normale Trophäe: 4,5 kg
        Seltene Trophäe: 6 kg
        
        Kleine Bodenrenken (Coregonus pidshian) leben im Jenissei-Fluss und seinen Nebenflüssen. Sie haben einen hohen Körper mit einem gut sichtbaren Buckel. Die Oberseite des Kopfes und der Rücken sind dunkelgrau, die Seiten sind silbern. Dieser Fisch ist gut auf Posen- und Spinnmontagen zu fangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/sig_p.thumb.jpg.e3bab229a76e5de9324d6dbfdbe2f73c.jpg'
  },

  {
    name: 'Isländische Kammmuschel',
    text: `Normale Trophäe: 350 g
        Seltene Trophäe: 450 g`,
    image: 'https://rf4.info/img/fish/159.png'
  },

  {
    name: 'Aland',
    text: `Normale Trophäe: 4 kg
        Seltene Trophäe: 6,6 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Aland (Leuciscus idus) ist eine Fischart aus der Familie der Karpfenfische (Cyprinidae). Er ist in fast ganz Mittel- und Osteuropa nördlich der Alpen und auf dem Balkan heimisch. Alande haben einen gestreckten und seitlich abgeflachten Körper sowie ein endständiges Maul und ähneln dem Döbel und dem Rotauge. Der Aland hat aber kleinere Schuppen und eine nach innen gebogene Afterflosse. Der Aland gehört zu den charakteristischen Leitfischarten im Unterlauf von langsam fließenden Tieflandflüssen und -strömen wie Rhein, Weser, Elbe, Oder und Weichsel, die in Nord- und Ostsee münden. Er ist nicht nur im Süßwasser, sondern auch im Brackwasser, beispielsweise in der Ostsee heimisch. Größere Exemplare halten sich, ähnlich wie Döbel, in kleineren Fließgewässern bevorzugt unter überhängenden Bäumen oder Sträuchern auf und warten dort auf vorbeitreibende Nahrung. Ernährung: Der Aland ist ein Allesfresser. Jungfische ernähren sich von Zooplankton, später von Insektenlarven, Schnecken, Muscheln und kleineren Fischen Maße: Alande erreichen im Durchschnitt eine Länge von 30 bis 50 cm; dabei bringen sie ca. 3 kg auf die Waage. Maximal sind Gewichte bis 7-8 kg bekannt.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/s.orfe_m.thumb.png.919a45484cab354234d2bc99f2aec214.png'
  },

  {
    name: 'Kaluga Hausen',
    text: `Normale Trophäe: 500 kg 
        Seltene Trophäe: 1000 kg 
        
        Der Kaluga gehört zur Familie der Störe. Sein Hauptlebensraum ist das Flussgebiet des Amur. Er kommt auch in der Küstenzone des Ochotskischen Meeres und in einigen Flüssen vor, die in dieses Meer münden. Dieser Fisch hat einen dicken, zylindrischen Körper. Die Hauptfarbe des Körpers ist grünlich-grau, während der Bauch hell gefärbt ist. Die maximale bestätigte Länge eines erwachsenen Tieres beträgt 5,6 m. Der Kaluga-Hausen ist ein Raubfisch; er ernährt sich von kleinen wirbellosen Tieren und Fischen. Er kann mit verschiedenen Arten von Posen-, Grund- oder Spinngeräten gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/kaluga.thumb.jpg.b7c1b70e116a832613a3eb7341d057d9.jpg'
  },

  {
    name: 'Kamtschatka Regenbogenforelle',
    text: `Normale Trophäe: 8 kg 
        Seltene Trophäe: 10 kg 
        
        Die Kamtschatka-Regenbogenforelle (Oncorhynchus mykiss), ist ein Mitglied der Lachsfamilie, im Russischen wird Sie auch Kamtschatka-Lachs genannt. Sie kommt in den Gewässern von Kamtschatka und in den Flüssen der Festlandsküste des Ochotskischen Meeres vor. Der Rücken der Forelle hat einen grünlichen Farbton, während der Bauch meist silbrig-weiß ist. Der Körper und die Flossen haben kleine dunkle Flecken. Die Kamtschatka-Regenbogenforelle wird bevorzugt mit Schwimmer oder mit Kunstködern gefangen. Das Angeln mit lebenden Ködern bringt ebenfalls gute Ergebnisse.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/mikija.thumb.jpg.c2597da3d08c87645b17e8e074697f9c.jpg'
  },

  {
    name: 'Kaspischer Schwarzrücken Hering',
    text: `Normale Trophäe: 1,2 kg 
        Seltene Trophäe: 1,7 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Der Kaspische Schwarzrücken-Hering (Alosa kessleri) ist ein anadromer Fisch. Sein Habitat ist das Kaspische Meeresbecken. Er hat einen länglichen Körper, einen Bauch mit ausgeprägtem Kiel von den Kiemen bis zum Beginn der Afterflosse, und einen ziemlich großen, breiten Kopf mit gut entwickelten Zähnen. Der obere Teil des Kopfes und die Brustflossen sind dunkel. Ernährung: Die Nahrung des Kaspischen Schwarzrückens besteht aus Krebstieren, Insektenlarven sowie Jungfischen. Maße: Der Fisch kann eine Länge von bis zu 50 cm und ein Gewicht bis zu 2 kg erreichen.`,
    image: 'https://rf4.info/img/fish/44.png'
  },

  {
    name: 'Seesaibling Kuorsky',
    text: `Normale Trophäe: 22 kg 
        Seltene Trophäe: 30 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Beim Kuorsky-Seesaibling handelt es sich um eine endemische Form des Seesaiblings mit heller Körperfarbe. Die Population dieses Fisches wurde in den 50er-Jahren des letzten Jahrhunderts im Nordwesten Russlands in einem kleinen See namens „Kuory“ entdeckt. Wie auch der normale Seesaibling ist der Kuorsky ein Vertreter der Lachsartigen. Ernährung: Der Kuorsky-Seesaibling führt ein räuberisches Leben. Die Grundlage seiner Ernährung sind Krebstiere, Insektenlarven und Jungfische. Maße: Eine Besonderheit des Kuorsky-Seesaibling ist seine ungewöhnliche Länge. Er kann bis zu 1,5 m erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_12/chartus_kuoriius_m.thumb.png.a22c521061653a1aa02bdb9bed2a358b.png'
  },

  {
    name: 'Kuori Felchen',
    text: `Normale Trophäe: 3,5 kg 
        Seltene Trophäe: 5 kg 
        
        Das Kuori Felchen ist eine endemische Form der gemeinen Felchen und ist heimisch im Kuori-See. Das Felchen hat einen länglich geformten Körper, mit einer recht breiten Stirn und kleinen Augen. Wenn sie älter werden, nimmt das Schuppenkleid eine grünliche Färbung an. Am erfolgreichsten wird das Kuori Felchen mit Posen und Spinnfischausrüstung gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_10/sig_kuor.thumb.jpg.1c019af252bde57a7e77bee40c7ef06d.jpg'
  },

  {
    name: 'Ladogasee Felchen',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg 
        
        Das Ladogasee-Felchen ist eine der vier endemischen Formen der Ladoga-Felchen. Es hat einen großen länglichen Körper. Die Oberseite seines Kopfes und Rückens sind dunkelgrau, seine Seiten sind silbrig. Der Unterkiefer des Maules ist kurz. Spinning Rigs eignen sich am besten, um diesen Fisch zu fangen. Es können aber auch lebende Köder verwendet werden.`,
    image: 'https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Frf4game.de%2Fforum%2Fuploads%2Fmonthly_2021_12%2Fsig_o_l_m.thumb.jpg.83c0e142d072240d5ba18471cda72fc7.jpg&f=1&nofb=1&ipt=f2de8a6d278d6f015723d09ec6bcc4911fe809365917a09e3b9edb3730a2c2ea&ipo=images'
  },

  {
    name: 'Ladoga Lachs',
    text: `Normale Trophäe: 14 kg 
        Seltene Trophäe: 20 kg 
        
        Der Ladoga-Lachs ähnelt im Aussehen dem Atlantischen Lachs, aber im Gegensatz zu letzterem hat er mehr schwarze Flecken auf seinem Körper. Ladoga-Lachse können mit den meisten Grundmontagen sowie einigen Arten von Posen- und Spinning-Rigs gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_12/l_salmon.thumb.jpg.d9ac596f2a0a8b5d602002640593ccd4.jpg'
  },

  {
    name: 'Ladoga Stör',
    text: `Normale Trophäe: 60 kg 
        Seltene Trophäe: 85 kg 
        
        Der Ladoga-Stör ist eine endemische Form des Atlantischen Störs. Es ist ein großer Fisch mit einer langen, schlanken, leicht erhöhten Schnauze. Er hat eine bläulich-olivfarbene Körperfärbung und einen weißen Bauch. Dieser Fisch kann erfolgreich mit den meisten Arten von Grund- und Spinning-Rigs gefangen werden.`,
    image: 'https://rf4.info/img/fish/126.png'
  },

  {
    name: 'See Elritze',
    text: `Normale Trophäe: 100 g 
        Seltene Trophäe: 160 g 
        
        Die See-Elritze (Phynchocypris percnurus) bewohnt Süßwasserzonen des Arktischen Ozeans und des Ochotskischen Meeres. Der hohe, dicke Körper der Elritze ist dicht mit Schuppen bedeckt. Die Farbe des Rückens ist grünlich-grau, die Seiten sind golden mit einem grünlichen Schimmer. Diese Elritze wird hauptsächlich mit der Posenangel gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/l_minnow.thumb.jpg.122c473f9de7089c728b8c1dd6bb1920.jpg'
  },

  {
    name: 'Seeforelle',
    text: `Normale Trophäe: 10 kg 
        Seltene Trophäe: 15 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Als Seeforelle wird eine in tiefen sauerstoffreichen Seen lebende Form der Bachforelle (Salmo trutta) bezeichnet. Bei Seeforellen handelt es sich um großwüchsige Populationen, die untereinander nicht näher miteinander verwandt sind als mit den Bachforellen der Fließgewässer, die ihre Wohngewässer umgeben. Ihr Körper ist langgestreckt, seitlich leicht abgeflacht und hat eine je nach Gewässer etwas unterschiedliche Färbung. Immer sind die meist sehr hellen Flanken mit unregelmäßigen schwärzlichen, gelegentlich auch braunen oder rötlichen Punkten oder Ringen gemustert. Ältere Seeforellen sind hochrückiger als junge. Seeforellen sind Wanderfische, die zur Fortpflanzung in die Zuflüsse ihrer Wohngewässer aufsteigen und nur gelegentlich in den Seen selbst laichen. Das maximale Alter liegt bei etwa 10 Jahren. Wegen des großen Anteils an Krebstieren in der Ernährung ist das Fleisch der Seeforelle rosa, und sie wird im Handel (wie auch andere Salmoniden mit rötlichem Fleisch) als "Lachsforelle" angeboten. Ernährung: Seeforellen ernähren sich von Kleintieren, Krebsen und später auch von Fischen. Maße: Seeforellen erreichen durchschnittlich von 40 bis 80 cm Länge. Im Ladogasee (dem größten See Europas, der in Nordwestrussland liegt) erreichen sie ein besonders hohes Gewicht von 8-10 kg.`,
    image: 'https://rf4.info/img/fish/52.png'
  },

  {
    name: 'Lederkarpfen',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 45 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Der Lederkarpfen (auch Nacktkarpfen genannt) ist eine weitere Zuchtform des Karpfens (Cyprinus carpio) aus der weitverbreiteten Familie der Karpfenfische (Cyprinidae). Ihm fehlen die Schuppen vollständig. Lederkarpfen sind im Süßwasser lebende Friedfische, die stets zwei lange und zwei kurze Barteln sowie ein vorstülpbares Maul besitzen. Karpfen bevorzugen warme stehende oder langsam fließende Gewässer mit einem Schlamm- oder Sandgrund. Außerdem sollten viele Pflanzen vorhanden sein, damit für den notwendigen Sauerstoff gesorgt ist. An windigen Tagen sollte man den Fisch dort suchen, wo Wellen ans Ufer schlagen. In der warmen Jahreszeit sind der frühe Morgen oder der späte Abend die aussichtsreichsten Fangzeiten. Wenn die Temperaturen zurückgehen verschiebt sich die Beißzeit - wie bei vielen Fischen - zum Mittag hin. Die bevorzugte Aufenthaltsorte des Lederkarpfens sind, wie bei allen Karpfen, Seerosenfelder, Schilfkanten und Landzungen. Ernährung: Die Nahrung von Lederkarpfen besteht aus am Boden lebenden Kleinlebewesen. Maße: Im Vergleich zu den anderen Karpfenrassen haben Lederkarpfen durchschnittlich ein deutlich kleineres Gewicht. Dies liegt an der verringerten Anzahl von Blutzellen in ihrem Körper. Im Schnitt bringt dieser Karpfen 10-20 kg auf die Waage. Es gibt aber auch Exemplare mit bis zu 35 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_10/n_carp_m.thumb.png.5452eaf5927272b67ae954b848d5ab1f.png'
  },

  {
    name: 'Chereshnev Saibling',
    text: `Normale Trophäe: 1,6 kg 
        Seltene Trophäe: 2,2 kg 
        
        Der Chereshnev (Salvelinus Levanidovi) ist eine endemische asiatische Saiblingsart. Er bewohnt die nordöstliche Küste des Ochotskischen Meeres und die Flussbecken von Yama, Takhtoyama und Penzhin. Der Fisch hat einen niedrigen, stromlinienförmigen Körperbau. Kopf und Maul sind überproportional groß. Während des Laichens färben sich die Seiten des Fisches olivgelb, weswegen die Einheimischen diesen Saibling "Zitronengras" nennen. Er bevorzugt Flüsse mit schneller Strömung und kiesig-sandigem Substrat. Er wird hauptsächlich mit Kunstködern oder lebenden Ködern gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/golets_lev.thumb.jpg.0e9d3e097aa66259b260362a1681feb2.jpg'
  },

  {
    name: 'Albino-Zeilkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Wie andere Albino-Fische hat auch diese Form des Zeilkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb die Tiere schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/l_carp_albino.thumb.jpg.1fa554e1631f48d91d934e979c581a58.jpg'
  },

  {
    name: 'Albino-Zeilkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Wie andere Albino-Fische hat auch diese Form des Zeilkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb die Tiere schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/l_carp_albino.thumb.jpg.1fa554e1631f48d91d934e979c581a58.jpg'
  },

  {
    name: 'Zeilkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Die lineare Schuppenanordnung gibt diesem Karpfen seinen Namen. Er ist dem Lederkarpfen und Spiegelkarpfen sehr ähnlich, aber im Gegensatz zu diesen sind beim Zeilkarpfen die Schuppen entlang der Seitenlinie aufgereiht. Zeilkarpfen weisen keine hohen Bestände auf und sind nicht in allen Karpfen-Gewässern vertreten. Daher genießen sie einen höheren Stellenwert bei Anglern.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/l_carp_ghost.thumb.jpg.4b27a1ed73a65b1fe5f6f33671bafa46.jpg'
  },

  {
    name: 'Geister Zeilkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Zeilkarpfen - Die Geister-Variante ist eine Mischung aus Zeilkarpfen und Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie auch viel schwerer zu fangen sind.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/l_carp_ghost.thumb.jpg.4b27a1ed73a65b1fe5f6f33671bafa46.jpg'
  },

  {
    name: 'Schlammpeitzger',
    text: `Normale Trophäe: 200 g 
        Seltene Trophäe: 250 g 
        
        Beschreibung und natürliches Vorkommen: 
        Der Schlammpeitzger (Misgurnus fossilis) kommt in Gewässern des europäischen Kontinents vor, kann aber auch im Süden und Osten Asiens gefunden werden. Schlammpeitzger bevorzugen ruhige Flüsse und schlammige, schattige Seen. Die Hauptaktivität dieses Fisches ist meistens nachts. Die Fische haben einen langen, schlangenförmigen, mit kleinen Schuppen bedeckten Körper. Die runden Flossen sind mit kleinen braunen Flecken bedeckt. Die Färbung des Fisches hängt von seiner Umgebung ab. Ernährung: Der Schlammpeitzger ernährt sich von Krebstieren, Insektenlarven und dem Laich anderer Fische. Maße: Die durchschnittliche Länge eines erwachsenen Fisches beträgt 15-20 cm. Seltene Exemplare können eine Länge von 35 cm erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/vjun.thumb.png.bf7d854256e0209f680ee4255c52bae5.png'
  },

  {
    name: 'Langnasen-Saugdöbel',
    text: `Normale Trophäe: 1,8 kg 
        Seltene Trophäe: 2,2 kg 
        
        Der Langnasen-Saugdöbel (lat. Catostomus catostomus), kommt häufig in Gewässern Nordamerikas und Nordost-Sibiriens vor. Der Körper des Fisches hat eine längliche Form, der Rücken ist grau-oliv und der Bauch ist weiß. Während der Laichzeit, erscheint ein hellrosa gefärbter Längsstreifen entlang des gesamten Körpers an den Seiten des Langnasen-Saugdöbel. Zum Fangen eignen sich Posen- oder Spinnfischmontagen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/chukuchan.thumb.jpg.85d51739c9f7814754053cb552f5a69b.jpg'
  },

  {
    name: 'Ludoga-Renke',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 7 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Die Ludoga-Renke ist eine der Renken-Arten (Coregonus spec.), die in den kalten Gewässern des Ladoga -und Oneg-Seengebiets leben. Das Wort "Ludoga" kommt von "lud", was soviel bedeutet wie ein steiniger Grund unter Wasser. Dieser Fisch bevorzugt entsprechende Gebiete, daher sein Name. Auffällig ist sein kleiner Kopf, der nach vorne spitz zuläuft. Der vorstehende Oberkiefer bildet eine konvexe Nase. Die Augen sind silbrig. Ernährung: Ludoga-Renken ernähren sich von kleinen Krebsen, Mollusken und Fischrogen. Maße: Die Körperlänge beträgt zwischen 30-50 cm, das Durchschnittsgewicht 800-900 g.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/sig_ludoga.thumb.jpg.a38ee615b5bd7df8fde1506b33f8cfd4.jpg'
  },

  {
    name: 'Albino-Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Wie andere Albino-Fische hat auch diese Form des Spiegelkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb sie schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/m_carp_albino.thumb.jpg.0c0c9d835ee62d2030682b7697b6d650.jpg'
  },

  {
    name: 'Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Beschreibung und natürliches Vorkommen: 
        Der Spiegelkarpfen ist eine Zuchtvariante der ursprünglichen Wild-Form des Karpfens. Er hat einen langgestreckten, kegelförmigen Kopf mit kleinen Augen und ein zu einem Rüssel ausstülpbares Maul. Sein Körper ist unvollständig beschuppt; die verbliebenen Schuppen sind groß und kräftig. Entlang der Seitenlinie weist der Körper Glanz auf. Spiegelkarpfen sind im Süßwasser Europas und Asiens weit verbreitet. Karpfen können sauerstoffarmes Wasser tolerieren, so dass Seen mit warmem, stehendem Wasser und mit leicht verschlammten Böden hervorragende Biotope darstellen. Bei Wärme hält sich der Karpfen gern in flachen Gewässer-Zonen auf, wogegen er bei kühlerem Wetter tiefere Stellen bevorzugt. Besonders beliebte Lebensräume sind Schilfkanten, Seerosenfelder und verkrautete Gewässerabschnitte entlang von Inseln, Landzungen und versunkenen Bäumen. Ernährung: Die Nahrung von Spiegelkarpfen ist vielseitig: Hauptsächlich sind es am Boden lebende Kleinlebewesen wie Insektenlarven, Schnecken und Würmer, aber auch Plankton und pflanzliche Kost. Maße: Spiegelkarpfen wachsen sehr schnell und können 30 kg oder mehr erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/m_carp_m.thumb.png.997aeb372a6f923393996b78925b5f0d.png'
  },

  {
    name: 'Geister-Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg 
        
        Die Geister-Variante des Spiegelkarpfens ist eine Mischung aus Spiegelkarpfen und Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie auch viel schwerer zu fangen sind.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/m_carp_ghost.thumb.jpg.7f10a4dbf4e4924886f01d70190760b0.jpg'
  },

  {
    name: 'Gemeine Miesmuschel',
    text: `Normale Trophäe: 130 g 
        Seltene Trophäe: 150 g`,
    image: 'https://rf4.info/img/fish/174.png'
  },

  {
    name: 'Nase',
    text: `Normale Trophäe: 800 g 
        Seltene Trophäe: 1300 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Nase (Chondrostoma nasus) ist ein Fisch aus der Familie der Karpfenfische (Cyprinidae). Sie ist in Europa weit verbreitet: Sie kommt in Mitteleuropa nördlich der Alpen bis nach Osteuropa vor, fehlt allerdings im Einzugsgebiet der Elbe. Besonders häufig findet man die Nase im Rhein- und Donaugebiet. Sie ist ein geselliger, oft in großen Schwärmen lebender, strömungsliebender Fisch. Die Nase hält sich die meiste Zeit in Grundnähe auf. Mit ihren scharfkantigen Hornkiefern schabt und zupft sie dort Algenaufwuchs. Nasen haben einen kompakt erscheinenden, länglichen Körperbau und einen relativ kleinen Kopf. Die Brust-, Bauch-, und Afterflossen, manchmal auch die untere Hälfte der Schwanzflossen erwachsener Nasen sind mehr oder weniger kräftig grau/orange gefärbt. Charakteristisch ist das stark unterständige Maul mit scharfkantigen und verhornten Kanten. Ernährung: Von der Nase werden Algen, aber auch Würmer, Insektenlarven sowie Laich anderer Fische verzehrt. Maße: Die Durchschnittsgröße von Nasen liegt zwischen 25 - 30 cm bei einem Gewicht von 0,3 - 0,4 kg. Großwüchsige Tiere können bis zu 40 cm lang werden und 1,5 kg wiegen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/c_nase_m.thumb.png.2a9eba479f00f217111fa82b38a47a14.png'
  },

  {
    name: 'Neiva',
    text: `Normale Trophäe: 1,4 kg 
        Seltene Trophäe: 1,7 kg
        
        Der Neiva Saibling (lat. Salvelinus neiva) ist eine endemische Saiblingsart im Nordosten Russlands, die das Ueginsky See-Fluss-System an der Festlandsküste des Ochotskischen Meeres bewohnt. Normalerweise sind die Schuppen des Neiva silbrig, während der Laichzeit nehmen sie eine leuchtend gelbe oder rubinrote Farbe an. Zum Angeln auf Neiva können sowohl Posen als auch Spinnfisch Montagen verwendet werden.`,
    image: 'https://rf4game.com/forum/uploads/monthly_2021_05/neiva.thumb.jpg.6264ca06b16076206b939a5126c6e985.jpg'
  },

  {
    name: 'Nelma',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 30 kg
        
        Der Sibirische Weißlachs (Stenodus leucichthys nelma), auch Nelma genannt, lebt im Becken des Arktischen Ozeans. Er ist dort der größte Weißfisch-Vertreter. Sein länglicher, spindelförmiger Körper ist mit silberfarbenen Schuppen bedeckt. Zum Fangen der Sibirischen Weißlachse eignen sich Posen- und Spinnmontagen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/nelma.thumb.jpg.48174096855d076b382f958d1c16f379.jpg'
  },

  {
    name: 'Neunstachliger Stichling',
    text: `Normale Trophäe: 70 g 
        Seltene Trophäe: 90 g
        
        Dieser Stichling mit neun Stacheln lebt in den Becken des Arktischen Ozeans, der Ostsee und des Weißen Meeres, den Küstengewässern von Westkamtschatka, Sachalin und den Kurilen. Der Neunstachlige Stichling hat einen schuppenfreien, länglichen Körper. Die Farbe der Rückseite des Fisches ist olivgrün, der Bauch ist hellgrün, die Unterseite des Kopfes ist rötlich. Schwarze Flecken säumen die Flanken. Dieser Fisch wird hauptsächlich mit Posen-Rigs gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/stickleback_ninesp.thumb.jpg.9829503062fd64998343e23e9a5ddcd1.jpg'
  },

  {
    name: 'Blauer Seewolf',
    text: `Normale Trophäe: 13 kg 
        Seltene Trophäe: 17 kg`,
    image: 'https://rf4.info/img/fish/162.png'
  },

  {
    name: 'Gotteslachs',
    text: `Normale Trophäe: 120 kg 
        Seltene Trophäe: 150 kg`,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.e83480891bec5942f3d49eda27791327.png'
  },

  {
    name: 'Auster',
    text: `Normale Trophäe: 300 g 
        Seltene Trophäe: 380 g`,
    image: 'https://rf4.info/img/fish/193.png'
  },

  {
    name: 'Peledmaräne',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        Die Peledmaräne ( Coregonus peled) ist ein Süßwasserfisch aus der Familie der Weißfische. Er bewohnt die Flüsse, die in den Arktischen Ozean münden. Er hat einen hohen, seitlich zusammengedrückten Körpers. Seine Farbe ist silbrig mit dunkelgrauem Rücken. Am Kopf und der Rückenflosse befinden sich kleine schwarze Punkte. Der effektivste Weg, Pelads zu fangen, ist der Einsatz von Posenangeln.`,
    image: 'https://rf4.info/img/fish/83.png'
  },

  {
    name: 'Persischer Stör',
    text: `Normale Trophäe: 100 kg 
        Seltene Trophäe: 150 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Persische Stör (Acipenser persicus) kommt in den Becken des Kaspischen Meeres und des Schwarzen Meeres vor. Er hat eine massivere Schnauze als der Russische Stör, die leicht nach unten versetzt ist. Die Körper-Oberseite ist grau-blau, der Bauch ist weiß. Ernährung: Die Hauptnahrung der Persischen Störe sind Krebstiere und Fische. Maße: Ausgewachsene Exemplare erreichen eine Länge von 2 m.`,
    image: 'https://rf4.info/img/fish/152.png'
  },

  {
    name: 'Hecht',
    text: `Normale Trophäe: 12 kg 
        Seltene Trophäe: 20 kg
        
        Beschreibung und natürliches Vorkommen: 
        Hechte stellen eine weit verbreitete Gattung spindelförmiger Raubfische mit insgesamt sieben Arten dar. Der Europäische Hecht (Esox lucius) besitzt einen lang gestreckten, walzenförmigen und seitlich nur mäßig abgeflachten Körper und einen relativ langen Kopf mit einem entenschnabelähnlichen, oberständigen Maul. Die Rücken- und Afterflosse sind weit nach hinten verlagert und ermöglichen dadurch blitzartige Beschleunigungen und Wendemanöver. Die Färbung variiert je nach Lebensraum: Der Rücken ist meist grün-bräunlich, die Flanken werden bis zum weißen Bauch hin immer heller. Die Kiefer sind mit umklappbaren Fang- und Hechelzähnen bewehrt, die nach hinten gebogen sind. Ernährung: Hechte ernähren sich von anderen Fischen, Fröschen, Molchen, Mäusen, Ratten und jungen Enten, gelegentlich sogar Krebsen und scheuen auch nicht vor ihren eigenen Artgenossen zurück. Maße: Europäische Hechte werden 40 cm bis maximal 1,80 Meter lang, bei einem Maximal-Gewicht von 35 kg. Durchschnittlich erreichen sie 5-8 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/n.pike_m.thumb.png.031c64a463057c6504af4dbcf7a9feae.png'
  },

  {
    name: 'Buckellachs',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        In Russland ist der Lebensraum des Buckellachses (Oncorhynchus gorbuscha) das Becken des Arktischen Ozeans. Wenn der Buckellachs zum Laichen in die Flüsse aufsteigt, bekommt er ein Hochzeitskleid. Sein Körper wird flacher und die Körperfarbe wechselt ins Braune. Kopf und Flossen werden schwarz. Die Kiefer verformen sich und entwickeln große Zähne. Zum Angeln des Buckellachses eignen sich Posen- oder Spinnmontagen am besten.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/gorbusha.thumb.jpg.95746b80766684fc54054b9c8762f613.jpg'
  },

  {
    name: 'Steinköhler',
    text: `Normale Trophäe: 11 kg 
        Seltene Trophäe: 14 kg
        
        Der Steinköhler auch bekannt als Pollok kommt im nordöstlichen Atlantik von Skandinavien bis Marokko vor, als auch im östlichen Mittelmeer und in der Nordess. Er zieht es vor, in einer Tiefe von 250m zu bleiben. Manchmnal in die unteren Schichten abzusinken und bevorzugt Felsoerflächen. Jungtiere versammeln sich in Schwärmen. Der Körpfer hat eine Spidnelform, der Kopf und der obere Rücken sind dunkelgrau mit einem olivfarbenen Glanz. Die Flanken sind hellbräunlich und der Bauch ist hellsilbern. Die Antennen am unterkiefer fehlen, die Seitenlinee an den Brustflossen hat eine Krümmung. Große Exemplare können 130cm erreichen mit einem Körpergewicht von etwa 20kg. Die Durchschnittliche Länge beträgt 70 - 75 cm. `,
    image: 'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.f1f3d358a53c497a5994a4f88fe7a654.png'
  },

  {
    name: 'Donauhering',
    text: `Normale Trophäe: 650 g 
        Seltene Trophäe: 900 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Donauhering (Alosa immaculata) lebt im Schwarzmeer- und Azow-Becken.Er hat einen seitlich abgeflachten Körper mit grünlich-blauem Rücken und silbrig-weißer Flanke. Ernährung: Dieser Fisch ernährt sich hauptsächlich von kleinen Krebsen und Larven. Er wird meist mit Posenmontagen oder der Grundangel gefangen. Maße: Der Donauhering kann bis zu 53 cm lang werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_02/cha_herring.thumb.jpg.a3bc5c6be1dfda860d24d95fac5ed90b.jpg'
  },

  {
    name: 'Heringshai',
    text: `Normale Trophäe: 150 kg 
        Seltene Trophäe: 200 kg
        
        Lamna nasus range extends from the western Atlantic to the coast of Argentina. In the eastern Atlantic it can be found in both Iceland and South Africa. It is most commonly found near the water's surface but can descend to depths of 500 meters. The Porbeagle has a characteristic appearance of a typical shark. The upper part of its spindle-shaped body has a bluish-gray color, while the belly is light, almost white. The Porbeagle has large triangular teeth. Individuals of this shark species can reach just over 4 m in length with a weight of about 250 kg. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.914a0ccf6d235aa7ce804ca59c6fd7e4.png'
  },

  {
    name: 'Kürbiskernbarsch',
    text: `Normale Trophäe: 450 g 
        Seltene Trophäe: 600 g
        
        The Pumpkinseed (Lepomis gibbosus) is a Sunfish that was introduced to Europe from North America. In its natural environment, it can be found in many European water bodies, including rivers flowing into the Black Sea. 
        The sunny perch has a high, flattened body and can reach 40 cm in length. Its bright color can vary from silver-green to red-orange. 
        This fish prefers shallow shoreline areas. You can catch it using both, the float and the spinning.  `,
    image: 'https://rf4game.com/forum/uploads/monthly_2020_02/pumps_sunfish.thumb.jpg.68243dad75e72d20482054e271c4865c.jpg'
  },

  {
    name: 'Regenbogenforelle',
    text: `Normale Trophäe: 10 kg 
        Seltene Trophäe: 13 kg
        
        Die ursprüngliche Heimat der Regenbogenforelle (Oncorhynchus mykiss) sind die Gewässer der Pazifikküste Nordamerikas. Später wurde diese bekannte Forelle aber auch in viele andere Länder der Welt eingeführt. Sie unterscheidet sich von der Bachforelle dadurch, dass sie einen längeren Körper, eine eingebuchtete Schwanzflosse und einen breiten schillernden Streifen an den Flanken hat. Man fängt sie hauptsächlich auf Schwimmer und beim Spinnfischen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_10/riv_rb_trout.thumb.jpg.1294f2832154fc80039a4dbe3c8c444b.jpg'
  },

  {
    name: 'Ludoga-Saibling',
    text: `Normale Trophäe: 5 kg 
        Seltene Trophäe: 7,5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Ludoga-Saibling repräsentiert eine der beiden endemischen Saiblingsarten (Savelinus spec.), die im Ladoga- und Onega-Seengebiet vorkommen. Seine Schuppen sind dunkler als die des Klotzsaiblings. Man findet ihn in flacheren Bereichen des Gewässers. Ernährung: Der Ludoga-Saibling ernährt sich von kleinen Fischen, Mollusken, Krebsen, Wasser- und Fluginsekten. Maße: Das Durchschnittsgewicht eines ausgewachsenen Fisches beträgt 5 bis 7 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/palia_lud.thumb.jpg.1e1020abcd9448ca497b65bd9943c7c3.jpg'
  },

  {
    name: 'Goldkarpfen',
    text: `Normale Trophäe: 20 kg 
        Seltene Trophäe: 30 kg
        
        Der Goldkarpfen wurde in Ungarn gezüchtet und ist eine Hybridform aus ungarischem Schuppenkarpfen und Koi-Karpfen. Als Folge dieser Kreuzung besitzt der Karpfen einen schlankeren Körper als andere Karpfen sowie rötlich gefärbte Schuppen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/carp_red.thumb.jpg.4f6dc4f4c29ce3eeac7520c7cb895f39.jpg'
  },

  {
    name: 'Ripus-Maräne',
    text: `Normale Trophäe: 1,2 kg 
        Seltene Trophäe: 1,7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Ripus-Maräne (Coregonus albula ladogensis) ist eine großwüchsige Unterart der kleinen Maräne (C. albula). Dieser Fisch kommt in großen Gewässern der Nordhalbkugel sowie im Ladoga- und Onega-Seengebiet vor. Ernährung: Die Ernährungsgrundlage der Ripus-Maräne sind Zooplankton und kleine Fische. Maße: Die durchschnittliche Länge beträgt etwa 20 cm bei einem Gewicht von 200-400 g. Große Exemplare können eine Länge von mehr als 40 cm und ein Körpergewicht bis zu 1,5 kg erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/ripus.thumb.jpg.f1442587671639293ededc94c8cd8d6c.jpg'
  },

  {
    name: 'Flussmuschel',
    text: `Normale Trophäe: 190 g 
        Seltene Trophäe: 280 g
        
        Beschreibung und natürliches Vorkommen: 
        Flussmuscheln (Unio) stellen eine Gattung innerhalb der Familie der Unionidae dar. Sie kommt weit verbreitet in Fließ- und Stillgewässern in Europa, Nordafrika und dem Nahen Osten vor; eine Art auch in Ostasien. Wenn sich eine Flussmuschel am Grund fortbewegt, hinterlässt sie dort eine gezackte Bahn; deshalb ist es einfach, sie zu entdecken. Die Flussmuschel gehört zum Nahrungsspektrum fast aller Fischarten, da sie eine ausgezeichnete Quelle für reines Eiweiß ist. Als hervorragender Angelköder wird der Fuß der Flussmuschel verwendet. Idealerweise wird dieser in Kombination mit anderen Ködern verwendet („Köderkombination - Montage“). Dabei ist zu beachten, dass der andere Köder der Festigkeit Flussmuschelfleisches ähneln sollte. Wenn man zum Beispiel Flussmuschelfleisch mit einer Maikäferlarve kombiniert, ergibt sich ein ausgezeichneter Köder für kapitale Brachsen oder den Wels. Für den Fang einer kapitalen Schleie kombiniert man Flussmuschelfleisch mit einem Wurm oder einer Made. Ernährung: Flussmuscheln filtern Algen, Schwebeteilchen und kleines Plankton aus dem Wasser. Maße: Die Flussmuschel ist oval mit einem Umfang von 5-10 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/freshwater_mussel_one.thumb.png.d69f1e17548b5bf8e3904ec92a5a79e9.png'
  },

  {
    name: 'Grenadierfisch',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 3,5 kg
        
        A commercial fish from the Cod family, found in the cold waters of the western, eastern and northern Atlantic Ocean. In the Barents Sea, it is found off the coast of Murmansk. It lives in deep waters (from 100 to 600 m or more), rarely rising in the middle layers of water. It inhabits the continental slopes.
        Its body is broad and gray (with a darker back), narrowing towards the tail at the head. The mouth is lower with small teeth. The eyes are large and oval in shape. The body is covered with large and dense scales with stiff barbs pointing toward the tail. The tail fin is absent. The weight of commercial specimens ranges from 400 g to 1.5 kg with a body length of 40-60 cm. The maximum size is about 1 m with a weight of about 5 kg.`,
    image: 'https://rf4.info/img/fish/169.png'
  },

  {
    name: 'Prosopium',
    text: `Normale Trophäe: 1,2 kg 
        Seltene Trophäe: 1,6 kg
        
        Der Prosopium (Prosopium cylindraceum) ist über die rechten Nebenflüsse des Yenisei bis hin zum Kolyma-Fluss in sibirischen Gewässern weit verbreitet. Der Fisch hat einen runden Körper, der mit feinen Schuppen bedeckt ist. Der Rücken ist dunkelgrau, die Seiten silbrig mit einem goldenen Schimmer. Zum Fang mit der Angel ist eine Posen- oder Spinnmontage am besten geeignet.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/valyok.thumb.jpg.e620115454147634fe3ffd6d6b8e7737.jpg'
  },

  {
    name: 'Rotfeder',
    text: `Normale Trophäe: 1,5 kg 
        Seltene Trophäe: 2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Rotfeder (Scardinius erythrophthalmus) ist eine Fischart aus der Familie der Karpfenfische. Sie kommt in Europa vom Ural, Kaspischen Meer und Aralsee bis zu den Pyrenäen vor. Als genetischer Ursprungsort und Heimat der Rotfeder werden der Donauraum und Zentralasien angesehen. Rotfedern haben einen hochrückigen, seitlich abgeflachten Körper. Die Bauchkante ist zwischen Bauchflossen und After gekielt. Das Vorderende der Rückenflosse liegt deutlich hinter dem Bauchflossenansatz. Die Rotfeder wird oft mit dem Rotauge verwechselt. Die Rotfeder besitzt aber ein oberständiges Maul, das Rotauge ein endständiges. Ein weiteres Unterscheidungsmerkmal ist, dass die Rückenflosse der Rotfeder hinter den Bauchflossen beginnt, während beim Rotauge diese Flossen senkrecht übereinander angeordnet sind. Ernährung: Erwachsene Rotfedern ernähren sich hauptsächlich von Algen und Wasserpflanzen, und in geringerem Maße von Wirbellosen der Uferzone. Maße: Die Rotfeder hat durchschnittlich eine Länge von 16–19 cm und ein Gewicht von 100-400 g. Sehr große Exemplare werden über 50 cm lang und 2 kg schwer.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_01/Rotfeder.thumb.png.defa8e7df8d95e3d719ee5af464040ac.png'
  },

  {
    name: 'Kaulbarsch',
    text: `Normale Trophäe: 140 g 
        Seltene Trophäe: 220 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Kaulbarsch (Gymnocephalus cernua) ist ein in mittel- und osteuropäischen Flüssen und der Ostsee verbreiteter Brack- und Süßwasserfisch aus der Familie der Echten Barsche (Percidae). Er kommt in Europa nördlich der Pyrenäen und der Alpen in Flüssen vor, die in die Nordsee, Ostsee, das Weiße Meer, die Barentssee, das Schwarze und das Kaspische Meer münden, außerdem in Seen im Einzugsgebiet dieser Flüsse. In West- und Mittelfrankreich wurde er ausgesetzt. Ferner lebt er in Sibirien in Flüssen, die ins nördliche Polarmeer münden (östlich bis Kolyma). Er fehlt auf dem Balkan südlich der Donau und in Westnorwegen, ist aber auch im Brackwasser der Ostsee zu Hause. Der Kaulbarsch vermeidet Sonnenlicht und Wärme. Deshalb ist er vorwiegend nachts und bei Regen aktiv. Er bewohnt in kleinen Gruppen nährstoffreiche, stehende oder langsam fließende Gewässer und hält sich dort vor allem über sandigem Grund auf. Der Körper des Kaulbarsches ist seitlich zusammengedrückt. Er hat einen relativ großen Kopf mit stumpfer Schnauze und eher kleinem Maul. Die großen Augen schimmern bei entsprechendem Lichteinfall blau bis violett. Der Körper ist mit Kammschuppen bedeckt. Der Kaulbarsch besitzt zwei zusammenhängende Rückenflossen, deren erste mit kräftigen Stachelstrahlen bedeckt ist. Beide Rückenflossen sind mit dunklen Flecken übersät, ebenso die Schwanzflosse. Ernährung: Die Nahrung des Kaulbarsches ist vielseitig – er verspeist Würmer, Kleinkrebse und Insektenlarven, aber auch Laich und Brut anderer Fischarten. Maße: Die Durchschnittsgröße des Kaulbarschs liegt bei etwa 8 - 10 cm, das Gewicht bei 15 - 25 g. Größere Exemplare können bei einem Gewicht von rund 200 g bis zu 20 cm lang werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/ruffe_m.thumb.png.f39ca8a3be71259e4aa5824d31d82f4f.png'
  },

  {
    name: 'Russischer Stör',
    text: `Normale Trophäe: 50 kg 
        Seltene Trophäe: 100 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Heimat des Russischen Störs (Acipenser gueldenstaedtii) ist das Schwarze Meer, das Asowsche Meer und das Kaspische Meer einschließlich deren Zuflüsse. Der Stör hat einen langgestreckten und spindelförmiger Körperbau. Entlang des Körpers finden sich fünf Längsreihen gebuckelter Knochenplatten (Scuta). Die restliche Haut ist nackt und körnig. An der Unterseite der relativ kurzen und stumpfen Schnauze sitzen 4 nicht gefranste Barteln. Diese befinden sich näher an der Schnauzenspitze als am Maul. An der Schnauze befinden sich auch Sinnesorgane, mit denen selbst schwache elektrische Felder und feine Temperaturunterschiede wahrgenommen und somit Beutetiere geortet werden können. Rücken und Oberkörper des Störs sind dunkelgrün bis bläulich-schwarz. Darunter ist er hellgrau bis hell-bräunlich gefärbt; seine Bauchseite ist cremefarben bis gelblich-weiß. Der Russische Stör ist ein anadromer Wanderfisch, der zum Ablaichen in die Süßwasserflüsse aufsteigt. Hierbei legt er große Strecken von teilweise über 1.000 km zurück. Der Stör ist eine gefährdete Fischart Ernährung: Der Russische Stör ernährt sich primär von am Boden lebenden Mollusken (Weichtieren), Würmern und Krebstieren; erwachsene Fische auch von Fischen. Maße: Der Russische Stör ist ein Meeresfisch, der ungefähr 230-240 cm lang und über 100 kg schwer wird und maximal ca. 50 Jahre alt werden kann.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_01/5a4e80fc1ab6d_Str.thumb.JPG.ea8878079a2f92fb7cdc710aeea6c556.JPG'
  },

  {
    name: 'Köhler',
    text: `Normale Trophäe: 19 kg 
        Seltene Trophäe: 28 kg
        
        Pollachius virens is a schooling fish of the cod family. It is widespread in the northern Atlantic Ocean and North Sea. The species lives at depths of up to 250 m. The saithe has an elongated body. The back is colored a dark green, sometimes almost black. Its sides are lighter than the back and have a pronounced sideline. The belly is silvery. Its average body length is on average 60-90 cm and can be up to 1.5 m long with a weight of more than 30 kg. The meat of this fish is often used as bait. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.a43a0cdaedcca94a664dd86827ae862a.png'
  },

  {
    name: 'Europäische Sardine',
    text: `Normale Trophäe: 180 g 
        Seltene Trophäe: 240 g
        
        Die Sardine (lat. Sardina pilchardus) auch europäische oder atlantische Sardine genannt, bewohnt den nordöstlichen Atlantik von Island und der norwegischen Küste bis zur Küste Nordafrikas. Sie ist im Schwarzen Meer, im Mittelmeer, im Marmarameer und im Adriatischen Meer verbreitet. Sie halten sich in Schwärmen in der Dicke der Küstengewässer auf, gewöhnlich in einer Tiefe von 10 bis 100 m.
        Der Körper ist dicht, im Querschnitt abgerundet und mit feinen, ungleich großen, abfallenden Schuppen bedeckt. Die Hauptfarbe des Körpers ist silbrig; der Rücken ist grünlich-blau mit einem Schimmer; Flanken und Bauch sind hell. An den Seiten hinter dem Kiemendeckel befinden sich mehrere dunkle Flecken in einer Reihe. Rücken- und Schwanzflossen graublau. Kiemendeckel mit goldener Färbung. Zähne sind nicht vorhanden. Die maximale Körperlänge beträgt ca. 30 cm, der Durchschnitt etwa 15-20 cm. `,
    image: 'https://rf4game.de/forum/uploads/monthly_2023_04/image.thumb.png.cbf31e84d4045067e787744f570dad0e.png'
  },

  {
    name: 'Albino-Lederkarpfen',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 45 kg
        
        Wie andere Albino-Fische hat auch diese Form des Lederkarpfens eine helle Körperfärbung, die durch eine fehlende Pigmentierung von Schuppen und Haut verursacht wird. Außerdem sind die Augen von Albinokarpfen empfindlicher gegen Sonnenlicht, weshalb sie schattige Bereiche im Gewässer bevorzugen. Ansonsten unterscheiden sich diese Fische nicht von gewöhnlichen Karpfen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/n_carp_albino.thumb.jpg.c343c69cb5ab2698280fe4f9df2631b4.jpg'
  },

  {
    name: 'Geister-Lederkarpfen',
    text: `Normale Trophäe: 30 kg 
        Seltene Trophäe: 45 kg
        
        Die Geister-Variante des Lederkarpfens ist eine Mischung aus Lederkarpfen und Koi-Karpfen. Das Ergebnis dieser Kreuzung ist ein ungewöhnlich farbenfroher Körper. Diese seltenen Karpfen werden von vielen Fischern geschätzt. Es wird angenommen, dass sie schlauer sind als ihre üblichen Verwandten, was bedeutet, dass sie auch viel schwerer zu fangen sind.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/n_carp_ghost.thumb.jpg.91bbcd1a315e9f1fc24d003dff4fbc52.jpg'
  },

  {
    name: 'Sewan-Forelle',
    text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 14 kg
        
        Beschreibung und natürliches Vorkommen: 
        Sewan (Ischchan) bedeutet aus dem Armenischen übersetzt "Fürst". Ihren natürlichen Lebensraum hat die Sewan-Forelle im armenischen Sewansee; sie wurde aber auch in anderen Gewässern angesiedelt. Die Sewan-Forelle besitzt vier Unterarten, die sich in Wachstumsrate, Laichzeit und -ort voneinander unterscheiden. Während der aktiven Nahrungssuche sind die Fische dieser Art silberweiß mit stahlgrauem Rücken. Sie tragen nur wenige dunkle Tupfen, die - anders als bei der Regenbogenforelle - nicht x-förmig sind. Während der Laichzeit sind die Milchner dunkler, ihre Flossen werden fast ganz schwarz und die Flanken bekommen 2-3 rote Tupfen. Die Sewan-Forelle ist die größte Forellenart, die in der ehemaligen UdSSR vorkommt. Ernährung: Ausgewachsene Sewan-Forellen leben räuberisch, verschmähen aber auch Würmer, Larven und Insekten nicht. Maße: Durchschnittliches Gewicht ausgewachsener Fische: 2 kg. In großen Seen wie dem Sewansee oder Yssykköl kommen Exemplare mit einem Gewicht von mehr als 15 kg vor.`,
    image: 'https://rf4game.de/forum/applications/core/interface/js/spacer.png'
  },

  {
    name: 'Lenok',
    text: `Normale Trophäe: 5,5 kg 
        Seltene Trophäe: 7 kg
        
        Der Lenok (Brachymystax lenok) wird in den Gewässern des Fernen Ostens, Sibiriens und in Primorye gefunden. Es handelt sich um einen räuberischen Süßwasserfisch mit einem kräftigen, geschwungenen Körper, der mit feinen, dichten Schuppen bedeckt ist. Die Färbung des Lenok is abhängig vom Alter des Fisches und den Bedingungen, unter denen er lebt. Der Lenok kann mit Posen- und Spinnmontagen gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/lenok_o.thumb.jpg.6c3fadbef0efbf0b62e4309c626f2201.jpg'
  },

  {
    name: 'Seelaube',
    text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 900 g
        
        Beschreibung und natürliches Vorkommen: 
        Das Verbreitungszentrum der Seelaube, auch Mairenke (Alburnus chalcoides) genannt, befindet sich in den Becken des Schwarzen und des Kaspischen Meeres sowie des Aralsees. In den Flüssen bevorzugt sie Orte mit starker Strömung. Seelauben haben einen länglichen Körper und einen kleinen Kopf. Der Rücken ist oliv-braun, Seiten und Bauch sind silbrig. Ernährung: Seelauben ernähren sich von Insekten, Mollusken, pelagischem Laich, Larven und Jungfischen.. Maße: Ausgewachsene Seelauben erreichen eine Länge von 32 cm und ein Gewicht bis zu 390 g.`,
    image: 'https://rf4game.de/forum/applications/core/interface/js/spacer.png'
  },

  {
    name: 'Aral Barbe',
    text: `Normale Trophäe: 13 kg 
        Seltene Trophäe: 18 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Aralbarbe ist eine Barben-Gattung (Luciobarbus) mit zwei Unterarten, wovon eine (L. brachycephalus caspius) im Einzugsgebiet des Schwarzen Meeres und im Kaspischen Meeresbecken lebt. Der Fisch unterscheidet sich durch seine Größe von den Vertretern der Gattung Barbus. Er hat eine längliche Schnauze, der Rücken ist dunkel, und der untere Teil der Flanken ist hell. Ernährung: Die Hauptnahrung der Aral-Barbe besteht aus Mollusken, Krebstieren und Larven von Wasserinsekten. Maße: Die Länge eines ausgewachsenen Fisches kann 1 Meter erreichen und seine Masse 21 kg überschreiten.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/sh_barbel.thumb.png.3b435263b587cf4d048cd14c0139c26a.png'
  },

  {
    name: 'Seeskorpion',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        Myoxocephalus scorpius is found in the northern part of the Atlantic Ocean, off the coast of Iceland and in the White, Barents, Kara and Baltic Seas at depths up to 60 m. The variegated color of the Shorthorn sculpin directly depends on the color of the bottom and can vary from yellow to dark brown, with an abundance of spots and stripes. It has strongly developed pectoral fins and a broad head with a large mouth. There are many small spines along the lateral line of the body and scales are absent. The Shorthorn sculpin is one of the largest representatives of its family. The length of an adult can reach 65 cm. `,
    image: 'https://rf4.info/img/fish/166.png'
  },

  {
    name: 'Bachschmerle',
    text: `Normale Trophäe: 65 g 
        Seltene Trophäe: 80 g
        
        Die Bachschmerle (Barbatula toni Dybowski) lebt in Russland in allen Flüssen, die Richtung Arktis oder in den Pazifik fließen. Sie hat einen länglichen, seitlich zusammengedrückten Körper. Die Farbe des Rückens ist grünlich-braun, die Seiten sind heller. Um diesen Fisch zu fangen, ist eine Posen- oder Spinnausrüstung perfekt.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/barb_toni.thumb.jpg.f031459ebb0829e5d79b247926738319.jpg'
  },

  {
    name: 'Sibirischer Hasel',
    text: `Normale Trophäe: 250 g 
        Seltene Trophäe: 390 g
        
        Lebensräume des sibirischen Hasels (Leuciscus leuciscus baicalensis) sind die Seen und Flüsse Sibiriens, insbesondere aber der Baikalsee. Sibirische Hasel sind eine Unterart Art des gewöhnlichen Hasels. Von letzterem unterscheiden sie sich durch die Maulform. Die Körperfarbe ist silbrig, der Rücken dunkelgrün. Zum Fang der sibirischen Hasel ist eine Posen- oder Spinnmontage am besten geeignet.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/syb_elets.thumb.jpg.8233cc1349f4406e8c4274e126fa47b3.jpg'
  },

  {
    name: 'Sibirischer Gründling',
    text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 200 g
        
        (Gobio gobio cynocephalus) Dieser Fisch ist in den Bächen und Flüssen Sibiriens weit verbreitet. Er hat einen länglichen, zylindrischen Körper. Seine Schuppen sind verhältnismäßig groß. Der Rücken besitzt eine grünlich-braune Farbe, die Flanken sind silbrig mit schwarzen Flecken. Er wird gut auf Schwimmer gefangen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/syb_gudgeon.thumb.jpg.a00577c144e9e5dea70de4bf636e1736.jpg'
  },

  {
    name: 'Sibirisches Bachneunauge',
    text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 200 g
        
        Das Sibirische Bachneunauge (Lethenteron kessleri) kommt in Flüssen des arktischen und atlantischen Ozeanbeckens vor. Sein langer gerundeter Körper hat eine leichte Verdickung im Kopfbereich. Die Färbung ist grünlich-grau. Außer mit Posenangeln können diese Neunaugen auch mit Hilfe von Spinn- und Grundangeln gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/s_lamprey.thumb.jpg.a0ec914a1310f23e32ab4703e7b41f2c.jpg'
  },

  {
    name: 'Tunguska Rotauge',
    text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 700 g
        
        Das Tunguska Rotauge (Rutilus rutilus lacustris) ist eine häufig vertretene Fischart im Jenissei und seinen Nebenflüssen. Die Seiten des Fisches sind dunkel, mit einem silberfarbigen Schuppenkleid die einen blauen oder grünen Farbschimmer ausstrahlen. Die Flossen sowie die Iris des Auges sind rötlich gefärbt. Das Rotauge wird erfolgreich auf Posenmontagen gefangen; es funktionieren aber auch einige Spinn- und Grundmontagen für den erfolgreichen Ansitz.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/syb_roach.thumb.jpg.fb0d6cc5abdef6208f0353962424c15d.jpg'
  },

  {
    name: 'Kleine Sibirische Maräne',
    text: `Normale Trophäe: 800 g 
        Seltene Trophäe: 1100 g
        
        Die kleine Sibirische Maräne (Coregonus sardinella) lebt in den Gewässer-Becken des arktischen Ozeans, vom Weißen Meer bis hin zu Alaska. Die kleine Sibirische Maräne hat einen flachen, seitlich zusammengedrückten Körper. Ihr Rücken ist olivgrün, die Flanken und der Bauch sind silbrig. Sibirische Maränen fängt man am besten mit Posen- und Spinnangeln`,
    image: 'https://rf4.info/img/fish/81.png'
  },

  {
    name: 'Sibirische Groppe',
    text: `Normale Trophäe: 45 g 
        Seltene Trophäe: 55 g
        
        Sibirische Groppe (Cottus sibiricus) sind im Jenissei-Fluss und seinen Nebenflüssen weit verbreitet. Dieser kleine Fisch hat einen großen abgeflachten Kopf und einen sich zum Schwanz hin verjüngenden Körper. Er ist hellbraun mit dunklen Flecken, die an Steine erinnern und ihn vor dem Hintergrund felsiger Böden fast unsichtbar machen. Das beste Werkzeug zum Fangen eines Sibirischer Dickkopfs ist eine Posenangel.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/bullhead_syb.thumb.jpg.320c047a1cec6c08089da95efaeb97dd.jpg'
  },

  {
    name: 'Sibirischer Sterlet',
    text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 14 kg
        
        Der Lebensraum der Sibirischen Sterlets (Acipenser ruthenus marsiglii) ist auf das Ob-Irtysch-Becken und den Yenisei-Fluss beschränkt. Dieser Störfisch mit durchschnittlicher Größe hat einen länglichen, spindelartigen Körper. Die Färbung ist variabel und hängt von den Lebensbedingungen ab. Sibirisches Sterlets können auf Posen- Grund- und einigen Spinnmontagen gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/syb_sterlet.thumb.jpg.d64035a3465c2617792ed48bae883a62.jpg'
  },

  {
    name: 'Sichling',
    text: `Normale Trophäe: 1,5 kg 
        Seltene Trophäe: 2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Sichling, auch Ziege genannt, (Pelecus cultratus), ist ein karpfenartiger Süßwasserfisch. Der Sichling lebt in Osteuropa von der Oder bis zur Wolga und zum Ural, in der Donau, der Ostsee, dem Schwarzen und Kaspischen Meer, im Aralsee und in Südschweden. Sichlinge sind Schwarmfische, die sich tagsüber in der Nähe des Gewässergrunds aufhalten und nachts an die Oberfläche steigen. Der Sichling hat eine schlanke Gestalt, gerade Rückenlinie, ein oberständiges Maul und eine scharfe Bauchkante, so dass keine „Bauchseite“ vorhanden und der Fisch von unten sehr schlecht zu erkennen ist. Ernährung: Sichlinge ernähren sich von Würmern, Fisch, Insekten und deren Larven. Maße: Die Fische werden durchschnittlich 20 bis 30 cm lang bei einem Gewicht 100-150 Gramm. Maximal erreichen sie 60 cm und bis zu 900 Gramm Gewicht.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_01/Ziege.thumb.png.3b7e96f5763f4d15ae83894698970ff0.png'
  },

  {
    name: 'Silberkarpfen ',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg
        
        Beschreibung und natürliches Vorkommen:
         Der Silberkarpfen (Hypophthalmichthys molitrix), auch Tolstolob oder Silberamur genannt, ist ein geselliger Freiwasserfisch aus der Familie der Karpfenfische. Der Silberkarpfen bewohnt tiefe, warme Fließgewässer und Seen Ostasiens. In Fließgewässern werden kraftsparende, ruhige Standplätze bevorzugt. Der Silberkarpfen hat einen breiten, zugespitzten Kopf sowie einen gestreckten und seitlich abgeflachten, mehr oder weniger hochrückigen Körper. Ernährung: Silberkarpfen ernähren sich von feinstem pflanzlichem Plankton mit einer Partikelgröße von weniger als 0,1 mm, das sie mit Hilfe ihres zu einem feinen Sieb verwachsenen Kiemenreusenapparates aus dem Wasser filtern. Maße: Unter guten Lebensbedingungen kann der Silberkarpfen über 100 cm lang und an die 15 kg schwer werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_01/Silbkarp.thumb.png.69651c376f7d9ba74b4dd130fa816167.png'
  },

  {
    name: 'Kleiner Rotbarsch',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        Sebastes viviparus lives in the northern waters of the Atlantic Ocean and is common off the coast of Norway. It lives in small shoals at depths of 80 to 500 m. Its body is compressed from the sides has a bright red-pink coloration as an adult. Young fish are more muted, brownish and do not descend to greater depths. The maximum size is about 70 cm in length, with a body weight of 5 kg. The average length is 40 - 50 cm. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.f9c7b12c55952c1b088acdca6b991950.png'
  },

  {
    name: 'Südlicher Neunstachliger Stichling',
    text: `Normale Trophäe: 70 g 
        Seltene Trophäe: 90 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Südliche Neunstachlige Stichling (Pungitius platygaster) bewohnt die Becken des Schwarzen, Asowschen und Kaspischen Meeres. Er bevorzugt flache Gewässerbereiche, die reichlich mit Wasservegetation bewachsen sind. Der Körper des Fisches ist mit kleinen Knochenplatten bedeckt. Auf dem Rücken befinden sich 8-11 einzelne spitze Stacheln, die in verschiedene Richtungen weisen. Sein Rücken ist olivgrün, die Flanken sind hell. Ernährung: Der Fisch ernährt sich von Insektenlarven, Krebstieren, Mollusken, Fischlaich sowie Wasserpflanzen. Maße: Die Körperlänge eines ausgewachsenen Exemplares kann bis zu 7 cm betragen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/stickleback_ss.thumb.png.4d10b68f338422649002bf15be6428e6.png'
  },

  {
    name: 'Stint',
    text: `Normale Trophäe: 130 g 
        Seltene Trophäe: 200 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Stint (Osmerus eperlanus) gehört zu der Gattung der Salmoniden. Beheimatet ist er an den Küstengewässern Europas von der Ostsee bis Biskaya. Er hat einen schlanken, leicht transparenten Körper, dessen Seiten, graugrün bis leicht rosa/silbrig glänzend schimmern. Stinte leben meist in riesigen Schwärmen Besonders charakteristisch für den Stint ist, dass sein Geruch an frische Gurken erinnert. Ernährung: Stinte ernähren sich von Planktonkrebsen, Bodentieren oder auch Jungfischen der eigenen Art. Maße: Das Alter von 6 Jahren überschreitet ein Stint sehr selten. Bis dahin erreicht er eine maximale Größe von 10 bis 20 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/e_smelt.thumb.jpg.572b9bacb7edce20afdd3965a1ddc10f.jpg'
  },

  {
    name: 'Rotlachs',
    text: `Normale Trophäe: 4,5 kg 
        Seltene Trophäe: 6 kg
        
        Der Rotlachs (Oncorhynchus nerka) ist ein Mitglied der Lachsfamilie. In Russland findet man diesen Fisch an der West- und Ostküste der Halbinsel Kamtschatka, auf den Kurilen und in den Gewässern von Tschukotka. Die Körperform des Rotlachses ähnelt der des Keta-Lachses. Während der Laichzeit, ist der Körper in einem himbeerfarbenen Laichkleid eingefärbt. Der Kopf nimmt eine grünliche Färbung an, die Kiefer werden länger, wobei der Oberkiefer wie ein Schnabel nach unten gebogen wird und so den Laichhaken formt. Die Form des Rückens ändert sich und wird buckelig. Bei weiblichen Tieren sind diese Veränderungen viel milder ausgeprägt. Beim Angeln auf den Rotlachs können sowohl Posenausrüstung als auch einige Spinnfisch Montagen verwendet werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/nerka.thumb.jpg.62d9231c373c825b9fd967adb3b0e944.jpg'
  },

  {
    name: 'Dornhai',
    text: `Normale Trophäe: 7 kg 
        Seltene Trophäe: 10 kg
        
        Squalus acanthias is one of the most common shark species in the world. It is equally comfortable in both the Black Sea and the Barents Sea.  It prefers to live close to shore at shallow depths. This is a small shark, whose length can reach just under 1.5 m, and weigh up to 12 kg. A streamlined body, covered with tough grayish brown scales, makes the Spiny dogfish an excellent swimmer. Between the front and rear fins, this shark has spines that almost reach the size of the fins. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.85d71b96faac5a924c9e453a35af58c7.png'
  },

  {
    name: 'Gefleckter Seewolf',
    text: `Normale Trophäe: 17 kg 
        Seltene Trophäe: 22 kg
        
        Anarhichas minor lives in the northern Atlantic, Barents and Norwegian Seas. It prefers the near-bottom zone at depths of up to 500 meters. The spotted wolffish has a long, predatory body and flattened head. Wide, black, transverse body stripes form individual spots in adults. The length of the spotted wolffish is usually about 1 meter, but can be up to 2 m with a weight of about 30 kg. It is most often caught on special bottom tackle with rattles and brightly colored attractants. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.f51bcad4627fde1e10b87696c3d28be4.png'
  },

  {
    name: 'Goldener Spiegelkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 40 kg
        
        Dies ist eine rötliche Variante des Spiegelkarpfens. Goldene Spiegelkarpfen stammen ursprünglich aus Ungarn. Es ist eine gezüchtete Sorte, die auf schnelles Wachstum und hohe Fruchtbarkeit ausgerichtet ist. Das Hauptmerkmal dieser Hybridform ist die rötlich-orange Farbe der Haut.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2019_12/m_carp_red.thumb.jpg.808ca4e4f70cf19f05dfbfaf638d4436.jpg'
  },

  {
    name: 'Scherg',
    text: `Normale Trophäe: 50 kg 
        Seltene Trophäe: 70 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Scherg oder Sternhausen (Acipenser stellatus) ist ein Vertreter der Störfamilie. Seine Lebensräume sind die Becken des Kaspischen, Schwarzen und Asowschen Meeres. Charakteristisch für das Aussehen dieses Fisches ist die stark verlängerte Maulspitze, deren Länge etwa 60% der gesamten Länge des Kopfes ausmacht. Der Rücken des Schergs ist in der Regel schwarzbraun, die Seiten sind hell, und der Bauch ist weiß. Ernährung: Die Ernährungsbasis des Schergs sind Krebstiere. Erwachsene Tiere fressen aber auch Fische. Maße: Der Scherg ist etwas kleiner als andere Störarten. Sein durchschnittliches Gewicht beträgt etwa 7 - 10 kg. Einige Exemplare erreichen jedoch eine Länge von mehr als 2 m und ein Gewicht von 80 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_12/st_sturgeon.thumb.png.89ca608487eeeaaf6f29f0989e255779.png'
  },

  {
    name: 'Sterlet',
    text: `Normale Trophäe: 9 kg 
        Seltene Trophäe: 14 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Sterlet (Acipenser ruthenus) ist eine wertvolle Speisefischart. Er gehört zur Familie der Störe. Der Sterlet lebt in Flüssen Nordrusslands, welche ins Kaspische Meer, ins Asowsche Meer und in das mit ihm verbundene Schwarzen Meer sowie ins Weiße Meer und die Karasee münden. In Flussbett findet man ihn an tiefen Stellen mit sandigen Böden ohne Schlamm. Er bevorzugt dabei Bereiche mit schnell fließendem und kaltem Wasser. Von anderen Störartigen unterscheidet sich der Sterlet durch seine geringere Größe. Das ausstülpbare und unterständige Maul besitzt wulstige Lippen, die Unterlippe ist in der Mitte eingeschnitten. Der Sterlet besitzt einen langgestreckten, schlanken und spindelförmigen Körper, der mit 5 Längsreihen aus Knochenschildern bedeckt ist. Er hat eine dunkelgraue bis braune Grundfärbung. Der Bauch ist gelblich bis weiß mit rotem Schimmer. Ernährung: Der Sterlet ernährt sich hauptsächlich von bodenlebenden Insektenlarven (z.B. Eintagsfliegen), kleinen Krebstieren, Würmern und anderen Wirbellosen, aber auch von Fischlaich. Er steigt auch an die Wasseroberfläche, um dort treibende Insekten zu fressen. Maße: Der Sterlet wird durchschnittlich 40-60 cm lang und hat ein Gewicht von 500 g bis 2 kg. Große Exemplare erreichen eine Länge von 120 cm und ein Gewicht von über 10 kg.`,
    image: 'https://rf4game.com/forum/uploads/monthly_2017_10/sterlet_m.png.22b8bc352a3231d626557312ea7f91d2.png'
  },

  {
    name: 'Svir Felchen',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        Das Svir-Felchen ist dem Wolchow-Felchen sehr ähnlich, hat aber einen kürzeren Kopf, einen schlanken Körper und eine dunklere Farbe. Wie andere Felchenarten kann es erfolgreich mit Posen und einigen Arten von Spinning-Rigs gefangen werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_12/sv_sig.thumb.jpg.0c53883c33e8cf9b9cecfcf27db08600.jpg'
  },

  {
    name: 'Schwertfisch',
    text: `Normale Trophäe: 300 kg 
        Seltene Trophäe: 400 kg
        
        Xiphias gladius is a valuable commercial fish. Its range is in the Indian, Pacific and Atlantic Oceans. An active and voracious predator, it is solitary and prone to long-distance migrations - in summer to more northern areas, in winter it moves southwards to warmer waters. It lives at depths of up to 400 m and is often found in the uppermost layer of water. It is one of the fastest fish. It is believed that it can reach speeds of over 100 km / h. The body of swordfish is strong, elongated, cylindrical in the section, and the tail narrows. The jaw is quite large. As an adult, the upper jaw takes on a characteristic elongated shape in the form of a pointed sword. The eyes are large, blue, in colour. The first dorsal fin is triangular and pointed much larger than the second, which is closer to the tail. The upper part of the body is dark brown, laterally to the belly turns to a light brown tone. All fins are dark brown. Large specimens can be up to 6 m long and weigh over 600 kg. The average length is about 3 m. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.c71b561d617e2160d438ca5d07dfc90b.png'
  },

  {
    name: 'Taimen',
    text: `Normale Trophäe: 50 kg 
        Seltene Trophäe: 80 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Taimen (Hucho taimen) ist ein Fisch aus der der Lachsfamilie. Er lebt in den sibirischen Stromsystemen im fernen Osten Russlands, kommt aber auch in großen Flüssen des europäischen Teils von Russland vor. Der längliche Körper des Taimens ist mit flachen Schuppen bedeckt. Sein Rücken ist dunkelbraun, manchmal auch grünlich. Die Seiten sind hellbraun mit dunklen Flecken, der Bauch ist weißlich. Der Taimen ähnelt in der Körperform dem europäischen Huchen, sein Kopf ist aber stärker abgeflacht und das Maul mit scharfen gebogenen Zähnen versehen. In dieser Hinsicht gleicht der Fisch eher einem Hecht und wird aus diesem Grund im Ural manchmal auch "Roter Hecht" genannt. Ernährung: Im Beutespektrum dieses Raubfisches befinden sich nicht nur andere Fische; er frisst auch kleine Säugetiere, die ins Wasser gelangen. Maße: Ausgewachsene Taimens können beeindruckende Größen von 1,5-2 Meter erreichen und mehr als 60 kg wiegen. Die durchschnittliche Länge von erwachsenen Fischen überschreitet aber normalerweise, bei einem Körpergewicht von 3-4 kg, keine 70 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_07/Taimenistr.png.ae310959640c8e8ac6afcf250519be0a.png'
  },

  {
    name: 'Sibirische Plötze',
    text: `Normale Trophäe: 1,3 kg 
        Seltene Trophäe: 1,9 kg
        
        Der Hauptlebensraum der Plötze sind die Becken des Asowschen und Schwarzen Meeres. Die Sibirische Plötze hat einen länglichen, von den Seiten verdichteten, hohen Körper. Schuppen sind an den Seiten silber bestickt. Der obere Teil von Kopf und Rücken ist dunkel. Die maximale Länge der Erwachsenen Fische beträgt 35 cm. Die Sibirische Plötze ist perfekt auf einem fang mit einem Schwimmer geeignet.`,
    image: 'https://rf4.info/img/fish/16.png'
  },

  {
    name: 'Schleie',
    text: `Normale Trophäe: 4 kg 
        Seltene Trophäe: 6 kg
        
        Beschreibung und natürliches Vorkommen:
        Die Schleie (Tinca tinca) ist ein Fisch aus der Familie der Karpfenfische (Cyprinidae). Sie kommt praktisch in ganz Europa vor. Als Herkunftsgebiet der Schleie gelten Europa, Kleinasien und Westsibirien. Die Schleie lebt gesellig, bildet aber keine Schwärme wie andere Cypriniden. Der Fisch bevorzugt sommerwarme stehende oder langsam fließende Gewässer. Schleien sind hinsichtlich ihres Lebensraumes und der Wasserqualität nicht sehr anspruchsvoll, benötigen allerdings naturbelassene Uferbereiche mit reichen Unterwasserpflanzenbeständen. Schleien haben ein mäßig hochrückigen Körper mit deutlich abgerundeten Flossen. Die Schwanzwurzel ist auffällig breit, und die kleinen Schuppen sind von einer dicken Schleimschicht überzogen. Die Iris der Augen ist meist intensiv rot oder dunkelorange gefärbt. Das Maul ist vorstülpbar. In den Maulwinkeln sitzt jeweils ein relativ kurzer Bartfaden. Die Schlundzähne sind einreihig und sehen aus wie Haken. Die Färbung der Schleie variiert zwischen dunkelblau und dunkelgrün am Rücken und gelbgrün an den Flanken; zusätzlich findet man oft einen goldfarbenen Schimmer. Typisch für die Schleie ist ihr gemächliches Verhalten während der Nahrungsaufnahme, aber auch sonst fallen die Bewegungen der Schleie meist recht langsam aus. Die Hauptaktivität liegt in der Dämmerung und in den Nachtstunden. Ernährung: Schleien sind bei ihrer Nahrungssuche auf Benthoslebewesen spezialisiert. Sie stehen während der Nahrungsaufnahme regelrecht kopfüber und durchwühlen die Schlammschicht des Gewässergrundes. Insektenlarven, Würmer, Schnecken, kleine Muschelarten und pflanzliche Kost stellen den Großteil ihrer Nahrung dar. Maße: Die Schleie erreicht unter günstigen Bedingungen ein Gewicht bis über 7 kg und eine Länge über 70 cm, die Durchschnittsgröße liegt bei 20 - 40 cm.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/tench_m.thumb.png.a0dfafd14d8a1aeacc1c1686900e6e98.png'
  },

  {
    name: 'Pazifisches Neunauge',
    text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 200 g
        
        Entosphenus tridentatus is a fairly large representative of the Cyclostomata superclass. Its range is from the Bering Sea to the Northern California coast. It is also found off the coast of Asia, the Commander Islands and the island of Hokkaido. Like all lampreys it has a scaleless, cylindrical body from head to dorsal fin that flattens slightly at the tail. The mouth is round and the maxillary plate has three teeth. Lamprey can be caught with a variety of fishing equipment. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2021_05/trid_lamprey.thumb.jpg.224a0dfda7f9e9d0725d8687af64e6a6.jpg'
  },

  {
    name: 'Dreistachliger Stichling',
    text: `Normale Trophäe: 70 g 
        Seltene Trophäe: 90 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Dreistachlige Stichling (Gasterosteus aculeatus) ist ein Mitglied der Stichlings-Familie der. Diese Fische sind in den nördlichen Regionen des Pazifiks und des Atlantischen Ozeans, im Weißen Meer und auch in Gewässern Europas weit verbreitet. Namensgebend und besonders auffällig sind die drei Stacheln vor der Rückenflosse. Ernährung: Der Dreistachlige Stichling ernährt sich von kleinen Krebsen, Fischrogen, Insektenlarven und Fischbrut. Maße: Die Körperlänge des Dreistachligen Stichlings variiert von 4 bis 10 cm bei einem Körpergewicht von bis zu 10 g.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/stickleback_threesp.thumb.jpg.2f9fb5616537b038469a1783e6949dd2.jpg'
  },

  {
    name: 'Tugun',
    text: `Normale Trophäe: 60 g 
        Seltene Trophäe: 70 g
        
        Der Tugun (Coregonus tugun) ist ein endemischer Bewohner sibirischer Stauseen und Flüsse, die in den Arktischen Ozean münden. Er hat einen glatten Körper, der mit feinen Silberschuppen bedeckt ist. Tuguns fängt man auf Schwimmer und mit einigen Spinnmontagen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2020_07/tugun.thumb.jpg.d81ced8a3ec0b24dbe8e1184e8c79989.jpg'
  },

  {
    name: 'Ukrainisches Bachneunauge',
    text: `Normale Trophäe: 70 g 
        Seltene Trophäe: 100 g
        
        Beschreibung und natürliches Vorkommen: 
        Das ukrainische Bachneunauge (Eudontomyzon mariae) lebt in den Flussbetten des Dnjepr, Dnjestr, Don und Kuban. Es hat einen wurmförmigen, länglichen, schuppenfreien Körper. Das Bachneunauge ist in der Regel dunkelgrau mit hellem Bauch. Der Fisch hält sich vorzugsweise im Schutz der Ufervegetation an Stellen mit schneller Strömung und steinigem Grund auf. Maße: Die Länge eines erwachsenen Tieres beträgt im Durchschnitt 15 - 20 cm.`,
    image: 'https://rf4game.de/forum/applications/core/interface/js/spacer.png'
  },


  {
    name: 'Ukrainisches Bachneunauge',
    text: `Normale Trophäe: 70 g 
        Seltene Trophäe: 100 g
        
        Beschreibung und natürliches Vorkommen: 
        Das ukrainische Bachneunauge (Eudontomyzon mariae) lebt in den Flussbetten des Dnjepr, Dnjestr, Don und Kuban. Es hat einen wurmförmigen, länglichen, schuppenfreien Körper. Das Bachneunauge ist in der Regel dunkelgrau mit hellem Bauch. Der Fisch hält sich vorzugsweise im Schutz der Ufervegetation an Stellen mit schneller Strömung und steinigem Grund auf. Maße: Die Länge eines erwachsenen Tieres beträgt im Durchschnitt 15 - 20 cm.`,
    image: 'https://rf4game.de/forum/applications/core/interface/js/spacer.png'
  },

  {
    name: 'Valaam Buckelmaräne',
    text: `Normale Trophäe: 1,5 kg 
        Seltene Trophäe: 2,4 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Buckelmaräne (Coregonus widegreni) ist mit den wandernden Renken der Ost -und Nordseen verwandt, kommt aber spezifsch im Ladoga- und Onega-Seengebiet vor. Im Ladoga-See findet man sie oft in der Nähe der Walaam-Insel - daher der russische Name "Walaam-Renke". Sie kommt in einer Tiefe von mehr als 50 m vor. Bei einer Aufwärtsbewegung zur Oberfläche bläht sich die Schwimmblase auf und kann dann den gesamten Bauchraum ausfüllen. Ernährung: Buckelmaränen ernähren sich von benthischen Organismen und Plankton. Maße: Die übliche Länge von Buckelmaränen liegt zwischen 40-50 cm; das Gewicht beträgt zwischen 1-1,5 kg. Große Exemplare erreichen eine Länge von mehr als einem halben Meter und eine Masse von mehr als 2 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/sig_valaam.thumb.jpg.97d9246c5d8c3b2ca124c31a31ff907a.jpg'
  },

  {
    name: 'Zwergmaräne',
    text: `Normale Trophäe: 500 g 
        Seltene Trophäe: 800 g
        
        Beschreibung und natürliches Vorkommen: 
        Ein Süßwasserfisch aus der Familie der Lachsfische (Salmonidae). Er kommt in Nordeuropa von Großbritannien bis in den Nordwesten Russlands vor. Die Kleine Maräne hat eine schlanke Körperform. Sie wirkt heringsähnlich, hat aber - wie andere Maränen - eine Fettflosse. Das Maul ist oberständig, da der Unterkiefer etwas vorsteht. Die Seiten und der Bauch sind silbern, während der Rücken blaugrün gefärbt ist. Ernährung: Die Nahrung besteht überwiegend aus Zooplankton. Maße: Durchschnittliche Länge: 25 cm. Maximal bis 35 cm`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/vendace_b.thumb.png.b1442b373f4e0f226b01d185e0cd4873.png'
  },

  {
    name: 'Zährte',
    text: `Normale Trophäe: 1,5 kg 
        Seltene Trophäe: 2,4 kg
        
        Beschreibung und natürliches Vorkommen: 
        Eine Fischart aus der Familie der Karpfenfische (Cyprinidae). Die Zährte lebt gesellig - teils als Stand-, teils als Wanderform - vor allem am Grund langsam fließender Unterläufe der großen Flüsse, die in die Nordsee, die Ostsee, das Schwarze und das Kaspische Meer münden. Die Zährte hat einen gestreckten, seitlich schwach abgeflachten Körper. Die Kopfspitze ist nasenartig verlängert und trägt eine schwarze Färbung, was dem Fisch den umgangssprachlichen Namen Rußnase verleiht. Der Rücken der Zährte ist dunkelgrau bis bläulich, während die Flanken heller und meist rötlich getönt sind und silbern glänzen. Der Bauch ist orangefarben bis silberweiß. Brust-, Bauch- und Afterflossen sind gelblich mit rötlich getönter Basis. Ernährung: Die Zährte ernährt sich von Insektenlarven und anderen Kleintieren, wie Muscheln, Würmer und Schnecken, nimmt aber auch auch pflanzliche Nahrung. Maße: Der schlanke, auch als Speisefisch genutzte Fisch wird etwa 20 bis 35 cm lang und wiegt 700 bis 1.000 g. Große Exemplare erreichen auch bis 50 cm und werden ca.3 kg schwer.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/v_bream_m.thumb.png.d0eedf98804c2638b2186d4b6a6b4fc4.png'
  },

  {
    name: 'Aalmutter',
    text: `Normale Trophäe: 900 g 
        Seltene Trophäe: 1300 g
        
        Zoarces viviparus is common along the European coast from the La Manche Strait all the way to northern Norway. It can also be found in the White Sea and the Barents Sea. This coastal saltwater fish is most commonly found in water depths of up to 40 meters. The body of the eelpout is muscular, with dense skin and fine rounded or oval scales. The body is yellowish- or greenish-brown. The abdomen is yellowish-gray. Adults usually reach 30 cm in length, but some specimens can grow to 50 – 60 cm and weigh about 1.5 kg. `,
    image: 'https://rf4game.com/forum/uploads/monthly_2023_04/image.thumb.png.6b53fc6f88aca9b231256b0eae1d6dee.png'
  },

  {
    name: 'Steinschill',
    text: `Normale Trophäe: 1,4 kg 
        Seltene Trophäe: 2,2 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Wolgazander oder Steinschill (Sander volgensis) ist ein Fisch aus der Familie der Echten Barsche. Er bewohnt die tieferen sandigen Flussabschnitte der Donau und der Wolga bis hin zum Ural, kommt aber auch im Kaspischen Meer sowie im Schwarzen Meer vor. Er bevorzugt sauberes Wasser und nicht allzu starke Strömung. Sandgrund und Steingrund sind seine beliebten Aufenthaltsorte. Vom Körperbau her könnte man den Steinschill als eine "Mischung" aus Zander und Flussbarsch bezeichnen. Im Vergleich zum Zander hat er einen relativ stumpfen Kopf mit vergleichsweise großen Augen. Das Maul ist endständig und mit kleinen spitzten Zähnen besetzt; die charakteristischen Hundszähne des Zanders an den Ecken am Ober und - Unterkieferfehlen fehlen. Am Ende der Kiemendeckel sitzt ein kurzer Knochendorn. Die Körperfärbung des Steinstills ähnelt sehr dem Zander: Helle und dunkle Grau-, am Rücken auch zarte Grüntöne dominieren. Vom Rücken bis über die Seitenlinie fast bis hinter den Bauch ziehen sich deutliche schwarze bis dunkelblau gefärbte Querbänder. Der Steinschill besitzt zwei durch einen sehr kurzen Abstand getrennte Rückenflossen, deren erste mit kräftigen Stachelstrahlen bewehrt und auffallend hoch ist. Aufgrund seines insgesamt relativ kleinen Mauls und dem Fehlen der "Hundszähne" kann der Steinschill keine Beutefische über 5 cm zu sich nehmen. Ernährung: In der Jugend (bis zu 4 cm Länge) besteht die Nahrung ausschließlich aus Zooplankton. Ab dem zweiten Lebensjahr wird die Nahrung komplett auf kleine Fische umgestellt. Maße: Das Durchschnittsgewicht liegt etwa bei 0,8 - 1,2 kg. Die Endgröße liegt bei 45 cm mit einem Maximalgewicht von 2 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/barsch_m.thumb.png.01bd45cdf0a40e68f61af1752adcc4b4.png'
  },

  {
    name: 'Wolchow Renke',
    text: `Normale Trophäe: 4 kg 
        Seltene Trophäe: 7 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Wolchow-Renke (Coregonus spec.) kommt innerhalb des Ladogasees am häufigsten nahe der Mündung der Flüsse Wolchow und Swir vor. Äußerlich ähnelt sie mit ihrem länglichen Körper, dem Kopf mit breiter Stirn sowie den kleinen Augen und großen Schuppen. einer gewöhnlichen Renke. Ihr Rücken ist dunkel, fast schwarz, der Bauch heller. Die Farbe der Flossen variiert von Grau bis Schwarz. Ernährung: Die Fische ernähren sich von Mollusken, kleinen Krebstieren und Insekten. Sie können auch Fischlaich und kleine Fische fressen. Maße: Die durchschnittliche Körperlänge beträgt 40-50 cm, das Gewicht 1-1,5 kg. Große Exemplare können 60 cm lang und 2 kg schwer werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_09/sig.thumb.jpg.c09b1fd69caff340ab6b4cf464e3d42d.jpg'
  },

  {
    name: 'Vuoksi Renke',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 5 kg
        
        Beschreibung und natürliches Vorkommen: 
        Die Wolchow-Renke (Coregonus spec.) kommt innerhalb des Ladogasees am häufigsten nahe der Mündung der Flüsse Wolchow und Swir vor. Äußerlich ähnelt sie mit ihrem länglichen Körper, dem Kopf mit breiter Stirn sowie den kleinen Augen und großen Schuppen. einer gewöhnlichen Renke. Ihr Rücken ist dunkel, fast schwarz, der Bauch heller. Die Farbe der Flossen variiert von Grau bis Schwarz. Ernährung: Die Fische ernähren sich von Mollusken, kleinen Krebstieren und Insekten. Sie können auch Fischlaich und kleine Fische fressen. Maße: Die durchschnittliche Körperlänge beträgt 40-50 cm, das Gewicht 1-1,5 kg. Große Exemplare können 60 cm lang und 2 kg schwer werden.`,
    image: 'https://rf4.info/img/fish/68.png'
  },

  {
    name: 'Güster',
    text: `Normale Trophäe: 800 g 
        Seltene Trophäe: 1200 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Güster (Blicca bjoerkna) zählt zu den Karpfenfischen. Er ist in den Binnengewässern Mitteleuropas nördlich der Alpen und den Pyrenäen verbreitet. In Großbritannien kommt der Güster lediglich in einigen östlichen Flüssen vor, im Norden Skandinaviens und auf dem Balkan findet man ihn nicht. Der Güster wird in Deutschland auch Blicke, Halbbrachse oder Pliete genannt. Der Güster ist ein geselliger Schwarmfisch und bevorzugt stille oder langsam fließende Gewässer (Brachsenregion). Dort lebt er am Gewässergrund oder in Ufernähe. Im Aussehen ähnelt der Güster stark der Brachse. Der Unterschied ist, dass der Güster zweireihige Schlundzähne hat, etwas größere Schuppen, und eine weniger stark eingebuchtete Afterflosse. Der silbrige Körper ist seitlich stark zusammengedrückt und sehr hochrückig. Die Ansätze der paarigen Flossen sind rötlich gefärbt. Ernährung: Der Güster hat ein ziemlich variables Nahrunsspektrum: Zooplankton, Mollusken, Würmer, Insekten und deren Larven. Maße: Der durchschnittliche Güster ist 30 cm lang, mit einem Gewicht von 400 g. Kapitale Güster können auch 1200 g erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/s.bream_m.thumb.png.88a289da5d467f6bd250ba6db4205b0c.png'
  },

  {
    name: 'Zobel',
    text: `Normale Trophäe: 600 g 
        Seltene Trophäe: 900 g
        
        Beschreibung und natürliches Vorkommen: 
        Der Zobel (Ballerus sapa) lebt überwiegend in fließenden Gewässerabschnitten der Flüsse des europäischen Kontinents (z.B.: Donau, Dnister, Bug, Dnepr, Don, Wolga, Kama, Wjatka, Ural). Er bevorzugt starke Strömung. Kapitale Zobel halten sich in der Tiefe auf, Jungfische dagegen in Ufernähe. Zobel haben einen seitlich stark zusammengedrückten, beinahe so hochrückigen Körper wie die Brachse oder Güster. Der Rücken ist meist dunkel und grau-schwarz bis grau-grün gefärbt. Die paarigen Flossen sind hellgrau bis gelb-weiß, After-, Rücken- und Schwanzflosse zeigen oft einen dunklen Saum. Als besonders Merkmal des Zobels gilt seine lange Afterflosse. Der Kopf ist verhältnismäßig klein, die Augen sitzen weit vorne am Kopf und sind relativ groß. Zobel suchen ihre Nahrung am Gewässergrund. Dabei halten sie sich sowohl im Hauptfluss als auch in den Mündungsbereichen größerer Zubringer auf. Der natürliche Bestand ist stark gefährdet. Ernährung: Zobel nehmen mit ihrem empfindsamen Rüsselmaul Zuckmückenlarven, Muscheln sowie andere Insekten auf. Maße: Durchschnittsgröße je nach Gewässer: Etwas über 40 cm; Gewicht bis zu 1 kg. Jedoch gibt es auch Ausnahmen, die den Durchschnitt übersteigen und bis zu 1,5 kg schwer werden können.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/wa_bream_m.thumb.png.316873bbd5faa195a6f7fc4209080407.png'
  },

  {
    name: 'Japanischer Saibling',
    text: `Normale Trophäe: 10 kg 
        Seltene Trophäe: 14 kg
        
        Der Japanische Saibling (Salvelinus leucomaenis) lebt in der Beringsee, Ochotsk und vor Japan. Er kommt außerdem im Nordwesten des Pazifischen Ozeans, im Amur und in den Flüssen Kamtschatkas vor. Der Japanische Saibling hat einen kräftigen, muskulösen Körper und einen massiven Kopf. Seine Farbe ist normalerweise hellgelb mit großen hellen runden Flecken. Während der Laichzeit verdunkeln sich die Schuppen und nehmen eine dunkelgraue Farbe an. Die hellen Flecken an den Seiten werden weniger wahrnehmbar. Für das Fischen auf diesen Saibling eignen sich vor allem Kunstköder oder lebende Köder.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2021_05/kunja.thumb.jpg.854e97ca2570566b2b32a5fda27d29e6.jpg'
  },

  {
    name: 'Wittling',
    text: `Normale Trophäe: 3 kg 
        Seltene Trophäe: 4 kg
        
        Merlangius merlangus lives in the north-east Atlantic Ocean from the Barents Sea to Portugal. It occurs in the Aegean, Black Sea and Adriatic Sea. Generally lives at depths of 20 to 200 m, preferring muddy, gravelly-sandy or rocky substrates. The body is elongated, with a whitish belly and grey or grey-green back. The caudal fin is almost square. Body length is usually up to 30 - 35 cm. They can grow up to one meter in length with a weight of 5 kg. `,
    image: 'https://rf4.info/img/fish/171.png'
  },

  {
    name: 'Wildkarpfen',
    text: `Normale Trophäe: 25 kg 
        Seltene Trophäe: 35 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Wildkarpfen (Cyprinus carpio) ist die Urform des Karpfens. Aus ihm wurden alle anderen Varianten herausgezüchtet. Genetisch reine Wildkarpfen sind heute in Deutschland und in ganz Europa nur noch selten zu finden. Der Wildkarpfen wächst wesentlich langsamer als seine Zuchtvarianten; grundsätzlich hängt sein Wachstum aber ebenfalls von Temperatur und Länge der Vegetationsperiode ab. Karpfen sind Schwarmfische, die den Winter an den tiefsten Stellen überdauern und in dieser Zeit keine Nahrung aufnehmen. Der Wildkarpfen ist lang gestreckt und seitlich etwas abgeflacht mit vollständig beschupptem Körper. Der Rücken ist olivgrün mit helleren Flanken und gelblichem bis weißlichem Bauch. Im Gegensatz zu den anderen in Europa vorkommenden Cypriniden hat der Wildkarpfen zwei Paar Barteln seitlich an der Oberlippe, von denen das vordere Paar kürzer ist. Die Schuppen sind sehr groß und kräftig. Ernährung: Als Nahrung dienen vorwiegend Bodentiere (Würmer, Schnecken, Muscheln, Kleinkrebse, Insektenlarven), die durch Vorstülpen des Maules aufgenommen werden. Fehlt dem Karpfen die nötige Proteinmenge, verzehrt er auch ab und an kleine Fische wie Lauben oder Rotaugen. Maße: Karpfen erreichen meist eine Länge von 40 bis 80 Zentimetern, können in Einzelfällen bis 1 Meter lang und über 20 Kilogramm schwer werden.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_01/Wildkarpf.thumb.png.b70993947faacce21d0a404815636b04.png'
  },

  {
    name: 'Zander',
    text: `Normale Trophäe: 8 kg 
        Seltene Trophäe: 12 kg
        
        Beschreibung und natürliches Vorkommen: 
        Der Zander (Sander lucioperca) gehört zur Familie der Barsche. Er ist der größte im Süßwasser lebende Vertreter der Barschartigen Europas. Dort lebt er vom Stromgebiet des Rheins bis zum Ural sowie in West-Asien, in der nordwestlichen Türkei und rund um das Kaspische Meer. Zander kommen auch im Brackwasser der gesamten Ostsee vor. Der Zander hat einen langgestreckten, spindelförmigen Körper. Als Vertreter der Barschartigen besitzt er zwei Rückenflossen, die vordere mit harten Stachelstrahlen, die hintere mit Weichstrahlen. Der Kopf ist zugespitzt, das Maul tief gespalten. Darin stehen ungleichmäßig die langen, spitzen Fangzähne (Hundszähne) neben kleineren Bürstenzähnen. Der Körper ist von kleinen Kammschuppen bedeckt. Ernährung: Der Zander jagt kleinere Fische wie Rotaugen, Güstern, Barsche oder Lauben. Maße: Mittlere Länge: 40-50 cm. In seltenen Fällen wird der Zander aber bis 1,30 m lang und erreicht dabei ein Gewicht von bis zu 20 kg.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2018_05/e.pikeperch_m.thumb.png.6b29158857948b05ea78e63aa1340fe9.png'
  },

  {
    name: 'Fluss Wandermuschel',
    text: `Normale Trophäe: 150 g 
        Seltene Trophäe: 210 g
        
        Beschreibung und natürliches Vorkommen: 
        Die Wandermuschel (Dreissena polymorpha), auch Zebramuschel genannt, ist ein weit verbreiteter Bewohner der einheimischen Gewässer. Sie hat eine charakteristische dreieckige Form, ist gelblich oder grünlich gefärbt und trägt eine typische Zeichnung in Form eines Zickzack- Musters oder querlaufenden braunen Streifen. Manchmal können wegen der Besonderheiten des Gewässers kleinere Wandermuscheln auch eine dunkle Färbung haben. Wandermuscheln siedeln in Kolonien und kleben dabei an Steinen oder anderen Gegenständen bzw. liegen auf dem Grund. Das Fleisch der Wandermuschel ist ein guter Köder für den Fang von Fischen wie Jungbrachsen, Brachsen und sogar Rotaugen. Gern wird es auch von Karpfen und Welsen verspeist. Ernährung: Muscheln filtern Algen, Schwebeteilchen und kleines Plankton aus dem Wasser. Maße: Die Muschel kann eine Länge von 26–40 mm bei einer Breite von 17-20 mm erreichen.`,
    image: 'https://rf4game.de/forum/uploads/monthly_2017_09/dreissena_one.thumb.png.08516157f9ab79539e53cad75f18c634.png'
  },

  // to-do 
    // kaspi Maifisch fehlt


];

client.on('messageCreate', (message) => {
  if (message.author.bot) {
    return;
  }
  for (fish of fishes) {
    if (message.content.toLowerCase() == fish.name.toLowerCase()) {
      message.reply({
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

client.login(mySecret);

