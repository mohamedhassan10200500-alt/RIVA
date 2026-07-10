/* ============================================================
   RIVA STORE — products.js
   بيانات المنتجات
   ============================================================ */

export const products = [
  {
    id: 1,
    name: "سكراب RIVA الكلاسيكي",
    brand: "RIVA Med",
    category: "women",
    badge: "الأكثر مبيعاً",
    price: 750,
    originalPrice: null,
    rating: 4.9,
    reviews: 218,
    addedDate: 2024,
    colors: [
      { name: "بنفسجي",    hex: "#8D6A8E" },
      { name: "وردي",      hex: "#D6B3BC" },
      { name: "كحلي",      hex: "#1B3A6B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL"],
    images: [
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب نسائي كلاسيكي فاخر من RIVA. مناسب للمستشفيات والعيادات وطوال اليوم. خامة ناعمة ومريحة جداً حتى في أصعب الورديات.",
    fabric: "٩٢% بوليستر / ٨% إسبانديكس — مضاد للبكتيريا، سريع الجفاف، مضاد للتجعد.",
    features: ["مرونة ٤ اتجاهات", "مضاد للبكتيريا", "جيبين جانبيين واسعين", "سهل الغسيل والعناية", "ألوان ثابتة بعد الغسيل"]
  },
  {
    id: 2,
    name: "طقم كومفورت نسائي",
    brand: "CareStyle",
    category: "women",
    badge: "جديد",
    price: 1200,
    originalPrice: 1450,
    rating: 4.8,
    reviews: 143,
    addedDate: 2024,
    colors: [
      { name: "وردي",        hex: "#D6B3BC" },
      { name: "أبيض",        hex: "#F0EBE8" },
      { name: "نعناعي",      hex: "#7DAF9A" }
    ],
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "طقم كامل من التوب والبنطلون بتصميم عصري ومريح. مناسب للدكتورات والممرضات والصيدلانيات. خامة ممتازة تتحمل الغسيل المتكرر.",
    fabric: "٨٨% بوليستر / ١٢% إسبانديكس — خامة سوفت ستريتش فاخرة.",
    features: ["توب وبنطلون متناسقين", "جيب صدر مزدوج", "حزام خصر مطاطي قابل للتعديل", "قصة مريحة واسعة", "مناسب للمقاسات الكبيرة"]
  },
  {
    id: 3,
    name: "سكراب رجالي برو",
    brand: "MedPro",
    category: "men",
    badge: null,
    price: 850,
    originalPrice: null,
    rating: 4.7,
    reviews: 89,
    addedDate: 2023,
    colors: [
      { name: "كحلي",    hex: "#1B3A6B" },
      { name: "أسود",    hex: "#1C1C1C" },
      { name: "رمادي",   hex: "#6B6B6B" }
    ],
    sizes: ["S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/4386466/pexels-photo-4386466.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب رجالي احترافي من MedPro. تصميم كلاسيكي أنيق مناسب لجميع بيئات العمل الطبية. راحة ومرونة طوال الوردية.",
    fabric: "٩٥% بوليستر / ٥% إسبانديكس — خامة مقاومة للبقع والاهتراء.",
    features: ["قصة كلاسيكية مريحة", "٤ جيوب وظيفية", "مرونة في الحركة", "مضاد للبكتيريا", "طوق مريح"]
  },
  {
    id: 4,
    name: "بنطلون كارجو طبي",
    brand: "RIVA Med",
    category: "unisex",
    badge: null,
    price: 550,
    originalPrice: null,
    rating: 4.6,
    reviews: 67,
    addedDate: 2023,
    colors: [
      { name: "أسود",   hex: "#1C1C1C" },
      { name: "كحلي",   hex: "#1B3A6B" },
      { name: "رمادي",  hex: "#6B6B6B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "بنطلون كارجو طبي يونيسكس بجيوب كتير ومريح جداً. مثالي للي بيحتاج حاجات كتير معاه في الشغل.",
    fabric: "٩٥% قطن / ٥% إيلاستين — خامة ناعمة ومتينة.",
    features: ["٦ جيوب وظيفية", "حزام مطاطي قابل للتعديل", "قصة مستقيمة كلاسيكية", "مريح للحركة الطويلة", "سهل الغسيل"]
  },
  {
    id: 5,
    name: "سكراب موضة نسائي",
    brand: "ScrubLux",
    category: "women",
    badge: "جديد",
    price: 780,
    originalPrice: null,
    rating: 4.7,
    reviews: 92,
    addedDate: 2024,
    colors: [
      { name: "وردي",    hex: "#D6B3BC" },
      { name: "بنفسجي",  hex: "#8D6A8E" },
      { name: "سيل بلو", hex: "#7CB9E8" }
    ],
    sizes: ["XS","S","M","L","XL"],
    images: [
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب نسائي عصري بتصميم موضة من ScrubLux. يجمع بين الأناقة والراحة في نفس الوقت. هتلفتي نظر زميلاتك كل يوم.",
    fabric: "٩٠% بوليستر / ١٠% إسبانديكس — ستريتش ٤ اتجاهات فاخر.",
    features: ["تصميم V-نيك أنيق", "جيبين جانبيين عميقين", "قصة سليم فلاترينج", "ألوان شيك ومتجددة", "ناعم على الجلد"]
  },
  {
    id: 6,
    name: "سكراب رجالي أثلتيك",
    brand: "SportMed",
    category: "men",
    badge: "تخفيض",
    price: 780,
    originalPrice: 980,
    rating: 4.8,
    reviews: 176,
    addedDate: 2024,
    colors: [
      { name: "أسود",        hex: "#1C1C1C" },
      { name: "كحلي",        hex: "#1B3A6B" },
      { name: "أخضر غامق",   hex: "#1B4D3E" }
    ],
    sizes: ["S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/7579831/pexels-photo-7579831.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5452201/pexels-photo-5452201.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب رجالي أثلتيك من SportMed. مصمم للحركة السريعة والمرونة القصوى. مثالي للأطباء والممرضين النشيطين.",
    fabric: "٨٥% بوليستر / ١٥% إسبانديكس — خامة أثلتيك سريعة الجفاف.",
    features: ["مرونة فائقة في الحركة", "فتحات تهوية جانبية", "جيوب كارجو عملية", "مضاد للتعرق والروائح", "خفيف الوزن جداً"]
  },
  {
    id: 7,
    name: "طقم أنيق نسائي",
    brand: "RIVA Med",
    category: "women",
    badge: "الأكثر مبيعاً",
    price: 1150,
    originalPrice: 1400,
    rating: 4.9,
    reviews: 195,
    addedDate: 2024,
    colors: [
      { name: "بنفسجي فاتح", hex: "#A987AA" },
      { name: "وردي فاتح",   hex: "#E8CEDA" },
      { name: "بيج",          hex: "#C4A882" }
    ],
    sizes: ["XS","S","M","L","XL","2XL"],
    images: [
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "طقم نسائي أنيق ومتكامل من RIVA Med. تصميم عصري يناسب كل بيئات العمل الطبية. خامة فاخرة بتدوم معاكي لفترة طويلة.",
    fabric: "٩٠% بوليستر / ١٠% إسبانديكس — خامة بريميوم ريزيستنت.",
    features: ["توب وبنطلون مودرن", "طباعة تطريز فاخرة", "قصة فلاترينج أنيقة", "مطابق ومتناسق", "حزام كورد متطابق"]
  },
  {
    id: 8,
    name: "سكراب يونيسكس كلاسيك",
    brand: "MedPro",
    category: "unisex",
    badge: null,
    price: 720,
    originalPrice: null,
    rating: 4.5,
    reviews: 103,
    addedDate: 2023,
    colors: [
      { name: "أسود",    hex: "#1C1C1C" },
      { name: "كحلي",   hex: "#1B3A6B" },
      { name: "رمادي",  hex: "#6B6B6B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب يونيسكس كلاسيكي من MedPro. مناسب للجنسين وجميع التخصصات الطبية. تصميم بسيط وأنيق يناسب كل الأذواق.",
    fabric: "١٠٠% بوليستر — مقاوم للتجعد وسهل العناية.",
    features: ["مناسب للجنسين", "تصميم كلاسيكي بسيط", "جيوب جانبية وصدرية", "حزام مطاطي مريح", "ألوان متعددة"]
  },
  {
    id: 9,
    name: "سكراب فاخر نسائي",
    brand: "ScrubLux",
    category: "women",
    badge: "الأكثر مبيعاً",
    price: 950,
    originalPrice: null,
    rating: 4.9,
    reviews: 284,
    addedDate: 2024,
    colors: [
      { name: "بنفسجي",      hex: "#8D6A8E" },
      { name: "تيل",          hex: "#1B6B5E" },
      { name: "وردي داكن",    hex: "#B8909B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL"],
    images: [
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب نسائي فاخر الأكثر طلباً في RIVA Store. خامة بريميوم بتحسي بالفرق من أول لمسة. مثالي للدكتورات والممرضات الأنيقات.",
    fabric: "٩١% بوليستر / ٩% إسبانديكس — خامة جيرسي ستريتش بريميوم، مضاد للبكتيريا.",
    features: ["موك-راب نيك أنيق", "جيوب جانبية عميقة", "شيرتيل هيم", "شقوق جانبية للراحة", "خامة ناعمة جداً"]
  },
  {
    id: 10,
    name: "بنطلون جوجر طبي",
    brand: "SportMed",
    category: "unisex",
    badge: null,
    price: 620,
    originalPrice: null,
    rating: 4.6,
    reviews: 58,
    addedDate: 2023,
    colors: [
      { name: "أسود",   hex: "#1C1C1C" },
      { name: "رمادي",  hex: "#6B6B6B" },
      { name: "كحلي",   hex: "#1B3A6B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6823568/pexels-photo-6823568.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "بنطلون جوجر طبي عصري من SportMed. تيبيرد فيت أنيق مع مطاطة وحزام للتعديل. مناسب للجنسين وجميع التخصصات.",
    fabric: "٨٥% بوليستر / ١٥% إسبانديكس — بيرفورمانس أثلتيك فابريك.",
    features: ["قصة جوجر تيبيرد أنيقة", "جيب خفي في الخصر", "حزام درابسترينج", "مرونة ٣٦٠°", "خفيف الوزن"]
  },
  {
    id: 11,
    name: "سكراب نسائي فيوجن",
    brand: "RIVA Med",
    category: "women",
    badge: "جديد",
    price: 830,
    originalPrice: null,
    rating: 4.8,
    reviews: 121,
    addedDate: 2024,
    colors: [
      { name: "سيل بلو",  hex: "#7CB9E8" },
      { name: "وردي",     hex: "#D6B3BC" },
      { name: "بنفسجي",   hex: "#8D6A8E" }
    ],
    sizes: ["XS","S","M","L","XL","2XL"],
    images: [
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5407206/pexels-photo-5407206.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب RIVA فيوجن مزيج مثالي بين العصرية والراحة. تصميم مبتكر يناسب الدكتورة الحديثة اللي بتحب تبان أنيقة في الشغل.",
    fabric: "٩٠% بوليستر / ١٠% إسبانديكس — فور-واي ستريتش.",
    features: ["تصميم بانيلينج عصري", "V-نيك بتفاصيل أنيقة", "جيبين صدر وظيفيين", "هيم مزدوج", "مناسب للمقاسات XS-2XL"]
  },
  {
    id: 12,
    name: "سكراب رجالي سليم فيت",
    brand: "CareStyle",
    category: "men",
    badge: null,
    price: 790,
    originalPrice: null,
    rating: 4.7,
    reviews: 74,
    addedDate: 2023,
    colors: [
      { name: "كحلي",    hex: "#1B3A6B" },
      { name: "أسود",    hex: "#1C1C1C" },
      { name: "روية",    hex: "#355E3B" }
    ],
    sizes: ["S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/4386467/pexels-photo-4386467.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب رجالي سليم فيت من CareStyle. تصميم عصري وأنيق مناسب للأطباء اللي بيحبوا الإطلالة النظيفة والمرتبة.",
    fabric: "٨٩% بوليستر / ١١% إسبانديكس — بيرفورمانس ستريتش سليم.",
    features: ["قصة سليم فيت أنيقة", "كولار منظم", "جيبين جانبيين وصدري", "مرونة مريحة", "خامة خفيفة ١٤٠جم"]
  },
  {
    id: 13,
    name: "طقم سكراب مطرز",
    brand: "ScrubLux",
    category: "women",
    badge: "تخفيض",
    price: 1050,
    originalPrice: 1300,
    rating: 4.8,
    reviews: 86,
    addedDate: 2024,
    colors: [
      { name: "بنفسجي",    hex: "#8D6A8E" },
      { name: "وردي كابي",  hex: "#C4687A" },
      { name: "بيج",        hex: "#C4A882" }
    ],
    sizes: ["XS","S","M","L","XL","2XL"],
    images: [
      "https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/6749778/pexels-photo-6749778.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "طقم سكراب مطرز فاخر من ScrubLux. تطريز أنيق على الخامة البريميوم يديكي إطلالة مميزة ومختلفة عن الكل.",
    fabric: "٩٠% بوليستر / ١٠% إسبانديكس — خامة بريميوم وزن متوسط.",
    features: ["تطريز توقيعي فاخر", "بانيلينج أنيق", "تناسق كامل توب وبنطلون", "حزام كورد متطابق", "مناسب لجميع المناسبات"]
  },
  {
    id: 14,
    name: "سكراب يونيسكس سبورت",
    brand: "SportMed",
    category: "unisex",
    badge: null,
    price: 760,
    originalPrice: null,
    rating: 4.7,
    reviews: 62,
    addedDate: 2024,
    colors: [
      { name: "أسود",    hex: "#1C1C1C" },
      { name: "أزرق",    hex: "#2255A4" },
      { name: "رمادي",   hex: "#6B6B6B" }
    ],
    sizes: ["XS","S","M","L","XL","2XL","3XL"],
    images: [
      "https://images.pexels.com/photos/5327585/pexels-photo-5327585.jpeg?auto=compress&cs=tinysrgb&w=600",
      "https://images.pexels.com/photos/3985163/pexels-photo-3985163.jpeg?auto=compress&cs=tinysrgb&w=600"
    ],
    description: "سكراب يونيسكس سبورت من SportMed. تصميم أثلتيك عصري للجنسين. لو بتحب الراحة والحركة الحرة في شغلك، ده الاختيار المثالي.",
    fabric: "٩٣% بوليستر / ٧% إسبانديكس — بيرفورمانس هاي-ستريتش.",
    features: ["خامة ستريتش فائقة", "فتحات تهوية في الظهر", "جيبين جانبيين كبيرين", "حزام تعديل داخلي", "مناسب للجنسين"]
  }
];
