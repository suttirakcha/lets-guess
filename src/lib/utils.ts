import { Category } from "src/types/categories";

export const flattenedCategories = (cates: Category) => {
  return Object.values(cates).reduce(
    (accumulator, currentCategory) => [...accumulator, ...currentCategory], []
  );
}

export const sortCategories = (cates: Category) => {
  return flattenedCategories(cates).sort((a, b) => {
    const cateA = a.category.toLowerCase();
    const cateB = b.category.toLowerCase();
    return cateA.localeCompare(cateB);
  });
}