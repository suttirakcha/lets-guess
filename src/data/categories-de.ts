import { sortCategories } from "../lib/utils";
import { Category, CateTitles } from "../types/categories";

export const cateListsGerman: Category = {
  eatingDe: [
    {category: "Essen",link: "/de/foods", words:["Suppe","Schnitzel","Sandwich","Salat","Pizza","Wurst","Brot","Steak","Bratwurst","Currywurst","Nudeln","Sushi","Pommes frites","Coleslaw","Ramyeon","Hamburger","Sauerkraut","Paella","Kimchi","Gebratenes Huhn","Gebratener Reis","Omelett","Ramen","Bibimbap","Tom Yum Kung","Schinken","Brezel","Curry"]},
    {category: "Getränke",link: "/de/drinks", words:["Wasser","Orangensaft","Apfelsaft","Saft","Apfelschorle","Bier","Wein","Soda","Milch","Tee","Kaffee","Rotwein","Limonade","Mojito","Milchtee","Glühwein","Sekt"]},
    {category: "Nachtische",link: "/de/desserts", words:["Kuchen","Macaron","Keks","Strudel","Torte","Berliner","Krapfen","Schokolade","Pudding","Mousse","Eiscreme","Gelato","Bingsu","Brownie","Mochi","Daifuku","Bananenkuchen","Apfelkuchen"]}
  ],
  geographyDe: [
    {category: "Länder in der Welt", link: "/de/countries-in-the-world", words:["Afghanistan","Ägypten","Albanien","Algerien","Andorra","Angola","Antigua und Barbuda","Äquatorialguinea","Argentinien","Armenien","Aserbaidschan","Äthiopien","Australien","Bahamas","Bahrain","Bangladesch","Barbados","Belarus","Belgien","Belize","Benin","Bhutan","Bolivien","Bosnien und Herzegowina","Botswana","Brasilien","Brunei","Bulgarien","Burkina Faso","Burundi","Chile","China","Costa Rica","Dänemark","Deutschland","Dominica","Dominikanische Republik","Dschibuti","Ecuador","El Salvador","Elfenbeinküste","Eritrea","Estland","Eswatini","Fidschi","Finnland","Frankreich","Gabun","Gambia","Georgien","Ghana","Grenada","Griechenland","Guatemala","Guinea","Guinea-Bissau","Guyana","Haiti","Honduras","Indien","Indonesien","Irak","Iran","Irland","Island","Israel","Italien","Jamaika","Japan","Jemen","Jordanien","Kambodscha","Kamerun","Kanada","Kap Verde","Kasachstan","Katar","Kirgisistan","Kiribati","Kolumbien","Demokratische Republik Kongo","Republik Kongo","NordKorea","Südkorea","Kosovo","Kroatien","Kuba","Kuwait","Laos","Lesotho","Lettland","Libanon","Liberia","Libyen","Liechtenstein","Litauen","Luxemburg","Madagaskar","Malawi","Malaysia","Malediven","Mali","Malta","Marokko","Marshallinseln","Mauretanien","Mauritius","Mexiko","Mikronesien","Moldau","Monaco","Mongolei","Montenegro","Mosambik","Myanmar","Namibia","Nauru","Nepal","Neuseeland","Nicaragua","Niederlande","Niger","Nigeria","Niue","Nordmazedonien","Norwegen","Oman","Österreich","Osttimor","Pakistan","Palästina","Palau","Panama","Papua-Neuguinea","Paraguay","Peru","Philippinen","Polen","Portugal","Ruanda","Rumänien","Russland","Salomonen","Sambia","San Marino","São Tomé und Príncipe","Saudi-Arabien","Schweden","Schweiz","Senegal","Serbien","Seychellen","Sierra Leone","Simbabwe","Singapur","Slowakei","Slowenien","Somalia","Spanien","Sri Lanka","St. Kitts und Nevis","St. Lucia","St. Vincent und die Grenadinen","Südafrika","Sudan","Südsudan","Suriname","Syrien","Tadschikistan","Tansania","Thailand","Togo","Tonga","Trinidad und Tobago","Tschad","Tschechien","Tunesien","Türkei","Turkmenistan","Tuvalu","Uganda","Ukraine","Ungarn","Uruguay","Usbekistan","Vanuatu","Vatikanstadt","Venezuela","Vereinigte Arabische Emirate","Vereinigte Staaten","Vereinigtes Königreich","Vietnam","Zentral­afrikanische Republik","Zypern"]},
    {category: "Plätze",link: "/de/places", words:["Theater","Hotel","Schule","Haus","Museum","Bahnhof","Universität","Gebäude","Kino","Fitnessstudio","Laden","Restaurant","Kaffeeshop","Büro","Stadtzentrum","Krankenhaus","Bank","Supermarkt","Park","Garten","Station","Stadion","Polizeistation","Tankstelle","Flughafen","Apotheke","Bibliothek","Buchladen","Kirche","Zoo","Schloss","Wald","Höhle","Parkplatz"]},
  ],
  otherDe: [
    {category: "Kleidung", link: "/de/clothing", words:["Hemd","Rock","Hose","Schuhe","Socken","Jacke","Sakko","Schal","Pullover","Bluse","Handschuhe","Hut","Brille","Krone","Halskette","Mantel","Regenmantel"]},
    {category: "Tiere", link: "/de/animals", words:["Hund","Katze","Pferd","Vogel","Schnecke","Schlange","Spinne","Tiger","Löwe","Fisch","Ameise","Kuh","Schaf","Ente","Eule","Kaninchen","Hähnchen","Auster","Krabbe","Moskito","Schildkröte","Krokodil","Giraffe","Biene","Schwein","Qualle","Skorpion","Maus","Elefant","Schwan","Eidechse"]}
  ]
}

export const cateTitlesGerman: CateTitles[] = [
  {key: 'Essen', title:'Essen', dataKey: 'eatingDe'},
  {key: 'Geografie', title:'Geografie', dataKey: 'geographyDe'},
  {key: 'Weiter', title:'Weiter', dataKey: 'otherDe'},
]

export const sortedCategoriesGerman = sortCategories(cateListsGerman);