export const cateLists = {
  eatingTh: [
    {category: "ขนมไทย",link: "/th/thai-desserts"},
    {category: "ขนมหวาน",link: "/th/desserts"},
    {category: "เครื่องดื่ม",link: "/th/drinks"},
    {category: "เครื่องปรุง",link: "/th/seasoning"},
    {category: "ผลไม้ต่างๆ",link: "/th/fruits"},
    {category: "อาหาร",link: "/th/foods"},
  ],
  geographyTh: [
    {category: "เขตและแขวงในกรุงเทพ",link: "/th/bangkok-districts-and-subdistricts"},
    {category: "จังหวัดในประเทศไทย",link: "/th/provinces-in-thailand"},
    {category: "ประเทศในโลก",link: "/th/countries-in-the-world"},
    {category: "สถานที่",link: "/th/places"},
    {category: "สถานที่ท่องเที่ยวในกรุงเทพ",link: "/th/places-in-bangkok"}
  ],
  musicTh: [
    {category: "เครื่องดนตรี",link: "/th/musical-instruments"},
    {category: "นักร้องไทย",link: "/th/thai-singers"},
    {category: "เพลงของ BOWKYLION",link: "/th/bowkylion-songs"},
    {category: "เพลงยุค 2000s",link: "/th/2000s-songs"},
    {category: "เพลงวง Cocktail",link: "/th/cocktail-songs"},
    {category: "เพลงวง ETC",link: "/th/etc-songs"},
    {category: "เพลงวง Tattoo Colour",link: "/th/tattoo-colour"}
  ],
  filmsTh: [
    {category: "ภาพยนตร์ตลกไทย",link: "/th/thai-comedy-films"}
  ],
  gamesTh: [
    {category: "ตัวละครในเกม ROV",link: "/th/characters-in-rov"}
  ],
  businessesTh: [
    {category: "คำศัพท์เกี่ยวกับการตลาด",link: "/th/marketing-words"}
  ],
  languagesTh: [
    {category: "คำที่มาจากภาษาจีน",link: "/th/chinese-loanwords"},
    {category: "คำที่มาจากภาษาบาลี-สันสกฤต",link: "/th/bali-sanskrit-loanwords"},
    {category: "คำที่มาจากภาษาอังกฤษ",link: "/th/english-loanwords"},
    {category: "ภาษาที่ใช้อักษรละติน",link: "/th/latin-used-languages"},
  ],
  thingsTh: [
    {category: "ของใช้ในบ้าน",link: "/th/household-items"},
    {category: "เครื่องครัว",link: "/th/kitchenware"},
    {category: "เครื่องแต่งกาย",link: "/th/clothing"},
  ],
  scienceTh: [
    {category: "อวกาศ",link: "/th/space"},
  ],
  otherTh: [
    {category: "การศึกษา",link: "/th/education"},
    {category: "ไปต่างประเทศ",link: "/th/travel-to-foreign-countries"},
    {category: "มหาวิทยาลัยในไทย",link: "/th/universities-in-thailand"},
    {category: "วันสำคัญ",link: "/th/holidays"},
    {category: "สภาพอากาศ",link: "/th/weather"},
    {category: "สัตว์ต่างๆ",link: "/th/animals"},
    {category: "อาชีพ",link: "/th/occupations"},
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