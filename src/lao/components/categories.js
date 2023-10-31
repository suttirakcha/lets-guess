export const cateLists = {
  eatingLo: [
    {category: "ເຂົ້າໜົມຫວານ",link: "/lo/desserts"},
    {category: "ເຄື່ອງດື່ມ",link: "/lo/drinks"},
    {category: "ອາຫານ",link: "/lo/foods"},
  ],
  geographyLo: [
    {category: "ແຂວງໃນປະເທດລາວ",link: "/lo/laos-provinces"},
    {category: "ສະຖານທີ່",link: "/lo/places"}
  ],
  otherLo: [
    {category: "ເຄື່ອງຄົວ",link: "/lo/kitchenware"},
    {category: "ສັດຕ່າງໆ",link: "/lo/animals"},
  ],
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