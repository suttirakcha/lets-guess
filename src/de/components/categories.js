export const cateLists = {
  eatingDe: [
    {category: "Essen",link: "/de/foods", words:["Suppe","Schnitzel","Sandwich","Salat","Pizza","Wurst","Brot","Steak","Bratwurst","Currywurst","Nudeln","Sushi","Pommes frites","Coleslaw","Ramyeon","Hamburger","Sauerkraut","Paella","Kimchi","Gebratenes Huhn","Gebratener Reis","Omelett","Ramen"]},
    {category: "Getränke",link: "/de/drinks", words:["Wasser","Orangensaft","Apfelsaft","Saft","Apfelschorle","Bier","Wein","Soda","Milch","Tee","Kaffee","Rotwein","Limonade","Mojito","Milchtee"]},
    {category: "Nachtische",link: "/de/desserts", words:["Kuchen","Macaron","Keks","Strudel","Torte","Berliner","Krapfen","Schokolade","Pudding"]}
  ],
  geographyDe: [
    {category: "Plätze",link: "/de/places", words:["Theater","Hotel","Schule","Haus","Museum","Bahnhof","Universität","Gebäude","Kino","Fitnessstudio","Laden","Restaurant","Kaffeeshop","Büro","Stadtzentrum","Krankenhaus","Bank","Supermarkt","Park","Garten","Station","Stadion","Polizeistation","Tankstelle","Flughafen","Apotheke","Bibliothek","Buchladen","Kirche","Zoo","Schloss","Wald","Höhle"]},
  ]
}

const flattenedCategories = Object.values(cateLists).reduce(
  (accumulator, currentCategory) => [...accumulator, ...currentCategory],
  []
);

export const sortedCategories = flattenedCategories.sort((a, b) => {
  const cateA = a.category.toLowerCase();
  const cateB = b.category.toLowerCase();
  return cateA.localeCompare(cateB);
});