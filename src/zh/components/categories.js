export const cateLists = {
  foodsZh: [
    {category: "食物",link: "/zh/foods"},
    {category: "饮料",link: "/zh/drinks"}
  ],
  geographyZh: [
    {category: "世界上的国家",link: "/zh/countries-in-the-world"}
  ],
  otherZh: [
    {category: "动物",link: "/zh/animals"},
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