const products = [
  {
    id: "1",

    name: "Classic Red Jacket",

    colors: ["red"],

    category: "Jackets",

    price: "$120.00",

    images: [
      "images/product1.webp",
      "images/product1b.webp",
      "images/product1c.webp",
    ],

    reviewsCount: 128,

    rating: 5,

    description:
      "Crafted from premium materials and designed with timeless elegance, this jacket delivers the perfect balance of luxury and comfort. A wardrobe essential for every season.",

    fullDescription: `
      <p>
        The Classic Red Jacket is crafted from premium fabrics and designed
        with a modern silhouette. Built for both comfort and sophistication,
        it complements casual and formal outfits effortlessly.
      </p>

      <p>
        Featuring durable stitching, luxurious textures, and timeless design
        details, this piece is made to remain a staple in your wardrobe season
        after season.
      </p>
    `,

    shipping: `
      <p>
        Free shipping on orders above $100. Standard delivery takes 3-7
        business days.
      </p>

      <p>
        Returns are accepted within 30 days of delivery, provided items remain
        unworn and in original condition.
      </p>
    `,

    reviews: [
      {
        name: "Sarah Johnson",

        rating: "★★★★★",

        text: "Amazing quality. The fit is perfect and the fabric feels incredibly premium.",
      },

      {
        name: "Michael Adams",

        rating: "★★★★★",

        text: "One of the best jackets I've purchased online. Exactly as described.",
      },
    ],
  },

  {
    id: "2",

    name: "Osaka Black Shirt",

    colors: ["black"],

    category: "Shirts",

    price: "$85.00",

    images: [
      "images/product2.webp",
      "images/product2b.webp",
      "images/product2c.webp",
    ],

    reviewsCount: 94,

    rating: 5,

    description:
      "An elegant black shirt tailored with precision and crafted from luxurious fabric for everyday sophistication.",

    fullDescription: `
      <p>
        The Osaka Black Shirt combines modern tailoring with premium
        craftsmanship, creating a refined piece suitable for both casual and
        formal occasions.
      </p>

      <p>
        Its breathable fabric, structured fit, and attention to detail make it
        a versatile addition to any wardrobe.
      </p>
    `,

    shipping: `
      <p>
        Free shipping on orders above $100. Standard delivery takes 3-7
        business days.
      </p>

      <p>
        Returns are accepted within 30 days of delivery, provided items remain
        unworn and in original condition.
      </p>
    `,

    reviews: [
      {
        name: "David Wilson",

        rating: "★★★★★",

        text: "Excellent fit and premium feel.",
      },
    ],
  },

  {
    id: "3",

    name: " Lacoste Neo Shot Sneakers",

    colors: ["black", "beige", "camel"],

    category: "Shoes",

    price: "$140.00",

    images: [
      "images/product3.webp",
      "images/product3b.webp",
      "images/product3c.webp",
    ],

    reviewsCount: 76,

    rating: 5,

    description:
      "Premium sneakers designed for comfort, performance, and effortless style.",

    fullDescription: `
      <p>
        Lacoste Neo Shot Sneakers are built with lightweight materials and advanced
        cushioning technology to provide all-day comfort.
      </p>

      <p>
        Their modern design makes them suitable for both casual and elevated
        fashion looks.
      </p>
    `,

    shipping: `
      <p>
        Free shipping on orders above $100. Standard delivery takes 3-7
        business days.
      </p>

      <p>
        Returns are accepted within 30 days of delivery, provided items remain
        unworn and in original condition.
      </p>
    `,

    reviews: [
      {
        name: "James Carter",

        rating: "★★★★★",

        text: "Extremely comfortable and stylish.",
      },
    ],
  },

  {
    id: "4",

    name: "Justcavali Leather Handbag",

    colors: ["gray"],

    category: "Bags",

    price: "$145.00",

    images: [
      "images/product4.webp",
      "images/product4b.webp",
      "images/product4c.webp",
    ],

    reviewsCount: 94,

    rating: 5,

    description:
      "A luxury handbag designed for modern women who value sophistication, practicality, and timeless style.",

    fullDescription: `
    <p>
      The Justcavali  Leather Handbag combines elegant craftsmanship with everyday
      functionality. Designed with premium materials and refined detailing,
      it elevates any outfit effortlessly.
    </p>

    <p>
      Spacious enough for your essentials while maintaining a sleek profile,
      this handbag is the perfect companion for work, travel, or special occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Carter",

        rating: "★★★★★",

        text: "Beautiful handbag. The quality exceeded my expectations.",
      },

      {
        name: "Sophia Martinez",

        rating: "★★★★★",

        text: "Elegant and practical. I've received so many compliments.",
      },
    ],
  },

  {
    id: "5",

    name: "Nike Sportswear Sneakers",

    colors: ["white"],

    category: "Shoes",

    price: "$95.00",

    images: [
      "images/product5.webp",
      "images/product5b.webp",
      "images/product5c.webp",
    ],

    reviewsCount: 173,

    rating: 5,

    description:
      "Minimalist sneakers crafted for comfort, versatility, and effortless everyday style.",

    fullDescription: `
    <p>
      These Nike Sportswear Sneakers feature a clean silhouette and premium
      construction designed for all-day comfort.
    </p>

    <p>
      Whether paired with denim, tailored trousers, or dresses, they deliver
      a polished yet relaxed aesthetic suitable for any occasion.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Brooks",

        rating: "★★★★★",

        text: "Extremely comfortable and stylish.",
      },

      {
        name: "Jessica Lane",

        rating: "★★★★★",

        text: "The perfect sneakers for everyday wear.",
      },
    ],
  },

  {
    id: "6",

    name: "Luxury Silk Dress",

    colors: ["pink"],

    category: "Dresses",

    price: "$180.00",

    images: [
      "images/product6.webp",
      "images/product6b.webp",
      "images/product6c.webp",
    ],

    reviewsCount: 88,

    rating: 5,

    description:
      "An elegant silk dress designed to make a statement with effortless sophistication.",

    fullDescription: `
    <p>
      Crafted from premium silk fabric, this dress offers a graceful drape
      and luxurious feel against the skin.
    </p>

    <p>
      Its timeless silhouette makes it suitable for formal events,
      celebrations, and memorable evenings.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Brown",

        rating: "★★★★★",

        text: "The fabric feels incredibly luxurious.",
      },

      {
        name: "Grace Wilson",

        rating: "★★★★★",

        text: "Absolutely stunning. Perfect fit and beautiful design.",
      },
    ],
  },

  {
    id: "7",

    name: "Classic Chronograph Watch",

    colors: ["black", "silver"],

    category: "Accessories",

    price: "$220.00",

    images: [
      "images/product7.webp",
      "images/product7b.webp",
      "images/product7c.webp",
    ],

    reviewsCount: 141,

    rating: 5,

    description:
      "A sophisticated timepiece blending modern precision with timeless design.",

    fullDescription: `
    <p>
      The Classic Chronograph Watch is crafted with attention to detail,
      offering reliable performance and enduring style.
    </p>

    <p>
      Featuring a refined dial and premium materials, it transitions
      effortlessly from business meetings to evening events.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ryan Cooper",

        rating: "★★★★★",

        text: "Premium quality and excellent craftsmanship.",
      },

      {
        name: "James Foster",

        rating: "★★★★★",

        text: "Looks far more expensive than it is.",
      },
    ],
  },

  {
    id: "8",

    name: "Luxury Knitwear",

    colors: ["navy"],

    category: "Jackets",

    price: "$110.00",

    images: [
      "images/product8.webp",
      "images/product8b.webp",
      "images/product8c.webp",
    ],

    reviewsCount: 86,

    rating: 5,

    description:
      "Soft premium knitwear designed for warmth, comfort, and understated luxury.",

    fullDescription: `
    <p>
      The Luxury Knitwear collection combines exceptional softness with a
      refined silhouette, making it perfect for both casual and elevated looks.
    </p>

    <p>
      Crafted from premium yarns, this piece offers lasting comfort while
      maintaining its sophisticated appearance season after season.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Amanda Lee",

        rating: "★★★★★",

        text: "Incredibly soft and very premium looking.",
      },

      {
        name: "Rachel Scott",

        rating: "★★★★★",

        text: "Perfect fit and amazing quality knit.",
      },
    ],
  },

  {
    id: "9",

    name: "Faded Street Hoodie",

    colors: ["black", "green"],

    category: "Jackets",

    price: "$95.00",

    images: [
      "images/product9.webp",
      "images/product9b.webp",
      "images/product9c.webp",
    ],

    reviewsCount: 117,

    rating: 5,

    description:
      "A modern streetwear hoodie blending comfort, versatility, and everyday style.",

    fullDescription: `
    <p>
      Designed for urban lifestyles, this hoodie delivers a relaxed fit,
      premium fabric, and effortless style.
    </p>

    <p>
      Whether layered with jackets or worn on its own, it remains a go-to
      wardrobe essential for every season.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Tyler Brooks",

        rating: "★★★★★",

        text: "The fit is perfect and the material feels great.",
      },

      {
        name: "Jordan Miles",

        rating: "★★★★★",

        text: "My new favorite hoodie.",
      },
    ],
  },

  {
    id: "10",

    name: "JDY Button-down blouse",

    colors: ["white", "blue"],

    category: "Shirts",

    price: "$75.00",

    images: [
      "images/product10.webp",
      "images/product10b.webp",
      "images/product10c.webp",
    ],

    reviewsCount: 143,

    rating: 5,

    description:
      "A timeless wardrobe staple tailored for sophistication, comfort, and versatility.",

    fullDescription: `
    <p>
      The Button-down blouse is carefully tailored to provide a clean,
      polished appearance suitable for both professional and casual settings.
    </p>

    <p>
      Its premium construction ensures lasting comfort while maintaining
      a crisp and elegant look throughout the day.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Christopher Reed",

        rating: "★★★★★",

        text: "Every wardrobe needs a shirt like this.",
      },

      {
        name: "David Morgan",

        rating: "★★★★★",

        text: "Excellent fit and premium fabric.",
      },
    ],
  },

  {
    id: "11",

    name: "Carrera Sunglasses",

    colors: ["gold", "blue"],

    category: "Accessories",

    price: "$90.00",

    images: [
      "images/product11.webp",
      "images/product11b.webp",
      "images/product11c.webp",
    ],

    reviewsCount: 98,

    rating: 5,

    description:
      "Luxury sunglasses designed to deliver style, comfort, and UV protection.",

    fullDescription: `
    <p>
      The Carrera Sunglasses feature a contemporary frame design crafted
      for both elegance and everyday wear.
    </p>

    <p>
      Lightweight construction and premium lenses ensure comfort while
      providing reliable protection from the sun.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Turner",

        rating: "★★★★★",

        text: "Stylish, comfortable, and surprisingly lightweight.",
      },

      {
        name: "Ethan Clark",

        rating: "★★★★★",

        text: "Looks incredibly premium for the price.",
      },
    ],
  },

  {
    id: "12",

    name: "Jordan Premium Travel Bag",

    colors: ["orange", "blue"],

    category: "Bags",

    price: "$165.00",

    images: [
      "images/product12.webp",
      "images/product12b.webp",
      "images/product12c.webp",
    ],

    reviewsCount: 112,

    rating: 5,

    description:
      "A sophisticated travel companion designed for style, durability, and functionality.",

    fullDescription: `
    <p>
      The Jordan Premium Travel Bag is crafted from high-quality materials and built
      to handle both business trips and weekend getaways with ease.
    </p>

    <p>
      Featuring spacious compartments, durable hardware, and a timeless
      design, it combines practicality with luxury.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Carter",

        rating: "★★★★★",

        text: "Excellent quality and perfect size for travel.",
      },

      {
        name: "Michael Brown",

        rating: "★★★★★",

        text: "Looks premium and feels extremely durable.",
      },
    ],
  },

  {
    id: "13",

    name: "Velora Runner Sneakers",

    colors: ["white", "black"],

    category: "Shoes",

    price: "$150.00",

    images: [
      "images/product13.webp",
      "images/product13b.webp",
      "images/product13c.webp",
    ],

    reviewsCount: 167,

    rating: 5,

    description:
      "Performance-inspired sneakers engineered for comfort, movement, and style.",

    fullDescription: `
    <p>
      The Velora Runner Sneakers combine lightweight construction with a
      sleek design suitable for both active lifestyles and casual wear.
    </p>

    <p>
      Cushioned support and premium materials provide all-day comfort while
      maintaining a modern aesthetic.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ryan Adams",

        rating: "★★★★★",

        text: "Comfortable from the first wear.",
      },

      {
        name: "Chris Taylor",

        rating: "★★★★★",

        text: "Perfect balance of performance and style.",
      },
    ],
  },

  {
    id: "14",

    name: "Elite Bomber Jacket",

    colors: ["green"],

    category: "Jackets",

    price: "$175.00",

    images: [
      "images/product14.webp",
      "images/product14b.webp",
      "images/product14c.webp",
    ],

    reviewsCount: 139,

    rating: 5,

    description:
      "A modern bomber jacket crafted for confidence, comfort, and timeless appeal.",

    fullDescription: `
    <p>
      The Elite Bomber Jacket features premium construction and refined
      detailing that elevates any casual outfit.
    </p>

    <p>
      Its versatile design makes it a reliable wardrobe staple for every
      season.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Jacob White",

        rating: "★★★★★",

        text: "Outstanding fit and premium feel.",
      },

      {
        name: "Nathan Cooper",

        rating: "★★★★★",

        text: "Exactly what I wanted from a bomber jacket.",
      },
    ],
  },

  {
    id: "15",

    name: "Emporio Trousers",

    colors: ["black"],

    category: "Trousers",

    price: "$105.00",

    images: [
      "images/product15.webp",
      "images/product15b.webp",
      "images/product15c.webp",
    ],

    reviewsCount: 91,

    rating: 5,

    description:
      "Tailored trousers designed for elegance, versatility, and all-day comfort.",

    fullDescription: `
    <p>
      The Emporio Trousers offer a refined silhouette and premium fabric
      selection that transitions effortlessly from office wear to evening
      occasions.
    </p>

    <p>
      Precision tailoring ensures a flattering fit while maintaining
      exceptional comfort.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Oliver James",

        rating: "★★★★★",

        text: "Very comfortable and beautifully tailored.",
      },

      {
        name: "William Scott",

        rating: "★★★★★",

        text: "Premium quality at a great price.",
      },
    ],
  },

  {
    id: "16",

    name: "Essential Overshirt",

    colors: ["gray"],

    category: "Shirts",

    price: "$115.00",

    images: [
      "images/product16.webp",
      "images/product16b.webp",
      "images/product16c.webp",
    ],

    reviewsCount: 104,

    rating: 5,

    description:
      "A versatile overshirt designed to bridge the gap between comfort and sophistication.",

    fullDescription: `
    <p>
      The Essential Overshirt is crafted from premium fabrics and designed
      for effortless layering throughout the year.
    </p>

    <p>
      Whether worn over a t-shirt or under a jacket, it provides a polished
      and contemporary look.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Walker",

        rating: "★★★★★",

        text: "Perfect layering piece for every season.",
      },

      {
        name: "Noah Green",

        rating: "★★★★★",

        text: "Stylish, comfortable, and very versatile.",
      },
    ],
  },

  {
    id: "17",

    name: "Loose Fit Suede Jacket",

    colors: ["brown"],

    category: "Jackets",

    price: "$165.00",

    images: [
      "images/product17.webp",
      "images/product17b.webp",
      "images/product17c.webp",
    ],

    reviewsCount: 87,

    rating: 5,

    description:
      "A relaxed-fit suede jacket designed with a modern silhouette and a soft, premium finish for effortless everyday styling.",

    fullDescription: `
    <p>
      The Loose Fit Suede Jacket is crafted from high-quality suede that offers a soft texture and a refined matte finish.
    </p>

    <p>
      Designed with a relaxed silhouette, it provides comfort and layering flexibility while maintaining a premium streetwear aesthetic.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Carter",
        rating: "★★★★★",
        text: "The suede quality is amazing and it fits perfectly relaxed.",
      },
      {
        name: "James Mitchell",
        rating: "★★★★★",
        text: "Looks expensive and feels very comfortable. Great everyday jacket.",
      },
    ],
  },

  {
    id: "18",

    name: "Waterproof Hiking Jacket",

    colors: ["purple"],

    category: "Jackets",

    price: "$175.00",

    images: [
      "images/product18.webp",
      "images/product18b.webp",
      "images/product18c.webp",
    ],

    reviewsCount: 132,

    rating: 5,

    description:
      "A high-performance waterproof hiking jacket designed to keep you dry and comfortable in unpredictable outdoor conditions.",

    fullDescription: `
    <p>
      The Waterproof Hiking Jacket is built for durability and protection, using advanced water-resistant fabric to handle heavy rain and wind.
    </p>

    <p>
      Lightweight yet rugged, it’s ideal for hiking, trekking, and outdoor adventures where weather conditions can change quickly.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Rachel Reed",
        rating: "★★★★★",
        text: "Completely waterproof and held up perfectly during a heavy storm hike.",
      },
      {
        name: "Anita Bennett",
        rating: "★★★★★",
        text: "Lightweight, breathable, and great for long outdoor trips.",
      },
    ],
  },

  {
    id: "19",

    name: "Lacoste Tracksuit",

    colors: ["dark green"],

    category: "Jackets",

    price: "$185.00",

    images: [
      "images/product19.webp",
      "images/product19b.webp",
      "images/product19c.webp",
    ],

    reviewsCount: 156,

    rating: 5,

    description:
      "A premium Lacoste-inspired tracksuit combining sporty elegance with everyday comfort and a clean modern fit.",

    fullDescription: `
    <p>
      The Lacoste Tracksuit is designed with a sleek athletic silhouette, offering a perfect balance between comfort and refined streetwear style.
    </p>

    <p>
      Made from soft, breathable fabric, it's ideal for training sessions, casual outings, or relaxed everyday wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Adrian Cole",
        rating: "★★★★★",
        text: "Very comfortable and the fit is clean. Looks premium in person.",
      },
      {
        name: "Samuel Wright",
        rating: "★★★★★",
        text: "Perfect for casual wear and light workouts. Great quality fabric.",
      },
    ],
  },

  {
    id: "20",

    name: "Set Suit",

    colors: ["dark green"],

    category: "Suits",

    price: "$210.00",

    images: [
      "images/product20.webp",
      "images/product20b.webp",
      "images/product20c.webp",
    ],

    reviewsCount: 118,

    rating: 5,

    description:
      "A modern tailored suit set designed for a sharp, confident look with a refined dark green finish.",

    fullDescription: `
    <p>
      The Set Suit is crafted with precision tailoring to deliver a structured yet comfortable fit suitable for both formal and semi-formal occasions.
    </p>

    <p>
      Its dark green tone adds a contemporary twist to classic suiting, making it a standout choice for modern wardrobes.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Jordan Hayes",
        rating: "★★★★★",
        text: "Excellent fit and the color looks even better in person.",
      },
      {
        name: "Marcus Allen",
        rating: "★★★★★",
        text: "Very sharp suit, perfect for events and formal occasions.",
      },
    ],
  },

  {
    id: "21",

    name: "Kaleb Faded Overshirt",

    colors: ["black", "orange"],

    category: "Shirts",

    price: "$125.00",

    images: [
      "images/product21.webp",
      "images/product21b.webp",
      "images/product21c.webp",
    ],

    reviewsCount: 91,

    rating: 5,

    description:
      "A bold faded overshirt designed with a modern streetwear edge, combining comfort with a striking dual-tone aesthetic.",

    fullDescription: `
    <p>
      The Kaleb Faded Overshirt features a relaxed fit with a washed fade effect that gives it a worn-in, premium streetwear look.
    </p>

    <p>
      Perfect for layering, it works effortlessly over tees or lightweight tops, offering both versatility and standout style.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Tyler Brooks",
        rating: "★★★★★",
        text: "The fade effect is clean and the fit is exactly what I wanted.",
      },
      {
        name: "Evan Morris",
        rating: "★★★★★",
        text: "Looks premium and goes well with almost anything I wear.",
      },
    ],
  },

  {
    id: "22",

    name: "Collar Loose Trench Jacket",

    colors: ["red"],

    category: "Jackets",

    price: "$190.00",

    images: [
      "images/product22.webp",
      "images/product22b.webp",
      "images/product22c.webp",
    ],

    reviewsCount: 76,

    rating: 5,

    description:
      "A bold loose-fit trench jacket featuring a structured collar and a relaxed silhouette for standout modern styling.",

    fullDescription: `
    <p>
      The Collar Loose Trench Jacket blends classic trench inspiration with a contemporary oversized fit for a strong fashion-forward look.
    </p>

    <p>
      Its lightweight construction and flowing structure make it ideal for layering while maintaining a sharp, elevated appearance.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Mary Dalton",
        rating: "★★★★★",
        text: "The fit is oversized but still very structured. Looks amazing.",
      },
      {
        name: "Samantha Foster",
        rating: "★★★★★",
        text: "Great statement jacket. The red color really stands out.",
      },
    ],
  },

  {
    id: "23",

    name: "Massimo Dutti Shirt",

    colors: ["brown", "blue"],

    category: "Shirts",

    price: "$135.00",

    images: [
      "images/product23.webp",
      "images/product23b.webp",
      "images/product23c.webp",
    ],

    reviewsCount: 119,

    rating: 5,

    description:
      "A refined Massimo Dutti-inspired shirt crafted for a clean, elegant look with a modern tailored fit.",

    fullDescription: `
    <p>
      The Massimo Dutti Shirt is designed with premium cotton fabric that delivers both comfort and a crisp, polished appearance.
    </p>

    <p>
      Its tailored cut makes it suitable for formal and smart-casual occasions, offering versatility across different styling needs.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Brooks",
        rating: "★★★★★",
        text: "Very clean fit and the fabric feels premium. Perfect for office wear.",
      },
      {
        name: "James Carter",
        rating: "★★★★★",
        text: "Simple, elegant, and well-tailored. Exactly what I was looking for.",
      },
    ],
  },

  {
    id: "24",

    name: "Lacoste Shirt",

    colors: ["white"],

    category: "Shirts",

    price: "$128.00",

    images: [
      "images/product24.webp",
      "images/product24b.webp",
      "images/product24c.webp",
    ],

    reviewsCount: 142,

    rating: 5,

    description:
      "A clean and timeless Lacoste-inspired shirt designed with a sharp fit and premium breathable fabric for everyday elegance.",

    fullDescription: `
    <p>
      The Lacoste Shirt is crafted from high-quality cotton blend fabric that ensures comfort, breathability, and a crisp finish throughout the day.
    </p>

    <p>
      Its minimalist design and tailored cut make it perfect for both casual styling and smart occasions where a clean look is required.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Michael Grant",
        rating: "★★★★★",
        text: "Very comfortable and fits perfectly. Great quality for the price.",
      },
      {
        name: "Andrew Collins",
        rating: "★★★★★",
        text: "Clean design and excellent fabric. I wear it all the time.",
      },
    ],
  },

  {
    id: "25",

    name: "Redefined Rebel Maurice Shirt",

    colors: ["white", "brown"],

    category: "Shirts",

    price: "$132.00",

    images: [
      "images/product25.webp",
      "images/product25b.webp",
      "images/product25c.webp",
    ],

    reviewsCount: 96,

    rating: 5,

    description:
      "A modern Redefined Rebel-inspired shirt featuring a clean silhouette with subtle contrast tones for a bold yet minimal look.",

    fullDescription: `
    <p>
      The Maurice Shirt combines a structured fit with lightweight fabric, offering comfort and style in equal measure.
    </p>

    <p>
      Its white and brown tones create a refined contrast, making it suitable for both casual and semi-formal outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Oliver Hayes",
        rating: "★★★★★",
        text: "The contrast design is subtle but really stylish. Fits perfectly.",
      },
      {
        name: "Noah Bennett",
        rating: "★★★★★",
        text: "Light, comfortable, and very versatile for different occasions.",
      },
    ],
  },

  {
    id: "26",

    name: "Vila Viprisilla Long Sleeved Blouse",

    colors: ["green"],

    category: "Shirts",

    price: "$118.00",

    images: [
      "images/product26.webp",
      "images/product26b.webp",
      "images/product26c.webp",
    ],

    reviewsCount: 84,

    rating: 5,

    description:
      "A soft and elegant long-sleeved blouse designed with a flattering feminine fit and a refined minimalist style.",

    fullDescription: `
    <p>
      The Viprisilla Blouse by Vila is crafted from lightweight fabric that drapes beautifully, offering both comfort and elegance.
    </p>

    <p>
      Its long sleeves and clean silhouette make it perfect for both office wear and elevated casual outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Carter",
        rating: "★★★★★",
        text: "So elegant and comfortable. The fit is very flattering.",
      },
      {
        name: "Sophie Bennett",
        rating: "★★★★★",
        text: "Beautiful blouse, perfect for both work and casual outings.",
      },
    ],
  },

  {
    id: "27",

    name: "Leo Print Satin Button-Down Blouse",

    colors: ["brown"],

    category: "Shirts",

    price: "$122.00",

    images: [
      "images/product27.webp",
      "images/product27b.webp",
      "images/product27c.webp",
    ],

    reviewsCount: 93,

    rating: 5,

    description:
      "A bold satin button-down blouse featuring a refined leopard-inspired print and a smooth, elegant finish.",

    fullDescription: `
    <p>
      The Leo Print Satin Blouse is crafted from silky satin fabric that offers a luxurious feel and a soft, fluid drape.
    </p>

    <p>
      Its button-down design and animal-inspired print create a statement piece that balances elegance with bold personality.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Harper",
        rating: "★★★★★",
        text: "The satin feels amazing and the print is very stylish without being too loud.",
      },
      {
        name: "Chloe Martin",
        rating: "★★★★★",
        text: "Fits beautifully and looks very high-end. I love wearing it out.",
      },
    ],
  },

  {
    id: "28",

    name: "Horseshoe Mini Denim Dress",

    colors: ["green"],

    category: "Dresses",

    price: "$140.00",

    images: [
      "images/product28.webp",
      "images/product28b.webp",
      "images/product28c.webp",
    ],

    reviewsCount: 101,

    rating: 5,

    description:
      "A stylish mini denim dress with a modern horseshoe-inspired design detail, blending casual edge with feminine flair.",

    fullDescription: `
    <p>
      The Horseshoe Mini Denim Dress is crafted from durable yet soft denim, designed to provide structure while maintaining all-day comfort.
    </p>

    <p>
      Its mini length and tailored cut create a youthful silhouette, making it perfect for casual outings and standout streetwear styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emma Lawson",
        rating: "★★★★★",
        text: "The fit is perfect and the denim quality feels really premium.",
      },
      {
        name: "Isabella Moore",
        rating: "★★★★★",
        text: "Super cute dress and very comfortable to wear all day.",
      },
    ],
  },

  {
    id: "29",

    name: "Lacoste CF8235 Set",

    colors: ["cream", "black"],

    category: "Shirts",

    price: "$205.00",

    images: [
      "images/product29.webp",
      "images/product29b.webp",
      "images/product29c.webp",
    ],

    reviewsCount: 124,

    rating: 5,

    description:
      "A refined Lacoste-inspired two-piece set designed with a clean contrast of cream and black for a polished, modern feminine look.",

    fullDescription: `
    <p>
      The Lacoste CF8235 Set combines effortless elegance with everyday comfort, featuring a coordinated top and bottom designed for a sleek silhouette.
    </p>

    <p>
      Its cream and black contrast detailing adds a sophisticated edge, making it suitable for both casual luxury styling and relaxed outings.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Bennett",
        rating: "★★★★★",
        text: "The set looks so elegant and fits beautifully. I love the contrast colors.",
      },
      {
        name: "Ava Collins",
        rating: "★★★★★",
        text: "Very comfortable and stylish. Perfect for a clean luxury look.",
      },
    ],
  },

  {
    id: "30",

    name: "Adidas Originals Football Polo Shirt",

    colors: ["black", "white"],

    category: "Shirts",

    price: "$138.00",

    images: [
      "images/product30.webp",
      "images/product30b.webp",
      "images/product30c.webp",
    ],

    reviewsCount: 167,

    rating: 5,

    description:
      "A sporty Adidas Originals-inspired football polo shirt blending athletic heritage with a modern feminine streetwear edge.",

    fullDescription: `
    <p>
      The Adidas Originals Football Polo Shirt is designed with a sleek athletic fit that merges football-inspired styling with everyday streetwear appeal.
    </p>

    <p>
      Crafted from breathable fabric, it delivers comfort and movement while maintaining a sharp, structured look suitable for casual or sporty outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Amelia Johnson",
        rating: "★★★★★",
        text: "Super stylish and comfortable. The fit is perfect for everyday wear.",
      },
      {
        name: "Harper Williams",
        rating: "★★★★★",
        text: "Love the sporty look. It feels high quality and breathable.",
      },
    ],
  },

  {
    id: "31",

    name: "Saunders Ruched Comma Heel Boots",

    colors: ["brown"],

    category: "Shoes",

    price: "$158.00",

    images: [
      "images/product31.webp",
      "images/product31b.webp",
      "images/product31c.webp",
    ],

    reviewsCount: 112,

    rating: 5,

    description:
      "Elegant ruched comma heel boots designed with a sculpted silhouette and a modern feminine edge for elevated styling.",

    fullDescription: `
    <p>
      The Saunders Ruched Comma Heel Boots feature a soft ruched upper that creates a refined textured look while enhancing the overall silhouette.
    </p>

    <p>
      Built with a distinctive comma heel, they offer a balance of comfort and statement design, perfect for both day and evening outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Charlotte Evans",
        rating: "★★★★★",
        text: "Absolutely beautiful boots. The heel is unique and very comfortable.",
      },
      {
        name: "Mia Thompson",
        rating: "★★★★★",
        text: "Stylish and elegant. They elevate every outfit I wear.",
      },
    ],
  },

  {
    id: "32",

    name: "Adidas Originals Resort Unisex Off white",

    colors: ["white"],

    category: "Shirts",

    price: "$130.00",

    images: [
      "images/product32.webp",
      "images/product32b.webp",
      "images/product32c.webp",
    ],

    reviewsCount: 148,

    rating: 5,

    description:
      "A relaxed Adidas Originals-inspired resort shirt designed with a clean unisex silhouette and effortless warm-weather comfort.",

    fullDescription: `
    <p>
      The Adidas Originals Resort Unisex shirt is crafted from lightweight, breathable fabric that keeps you comfortable while maintaining a polished casual look.
    </p>

    <p>
      Featuring a relaxed fit and minimalist design, it transitions seamlessly from vacation styling to everyday streetwear outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Liam Foster",
        rating: "★★★★★",
        text: "Very comfortable and lightweight. Perfect for warm weather.",
      },
      {
        name: "Ethan Parker",
        rating: "★★★★★",
        text: "Clean design, great fit, and the fabric feels premium.",
      },
    ],
  },

  {
    id: "33",

    name: "Hugo Evito Shirt",

    colors: ["dark blue"],

    category: "Shirts",

    price: "$142.00",

    images: [
      "images/product33.webp",
      "images/product33b.webp",
      "images/product33c.webp",
    ],

    reviewsCount: 127,

    rating: 5,

    description:
      "A sophisticated Hugo-inspired shirt crafted with a tailored fit and premium fabric for a sharp contemporary look.",

    fullDescription: `
    <p>
      The Hugo Evito Shirt is designed with attention to detail, offering a refined silhouette that balances comfort with modern elegance.
    </p>

    <p>
      Its rich dark blue tone and clean construction make it a versatile choice for business settings, evening occasions, and elevated casual wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Benjamin Hayes",
        rating: "★★★★★",
        text: "Excellent fit and quality. The dark blue color looks very premium.",
      },
      {
        name: "Nathan Brooks",
        rating: "★★★★★",
        text: "Comfortable, stylish, and easy to dress up or down.",
      },
    ],
  },

  {
    id: "34",

    name: "Puma Austria X Salehe Bembury King Track Jacket",

    colors: ["green"],

    category: "Jackets",

    price: "$168.00",

    images: [
      "images/product34.webp",
      "images/product34b.webp",
      "images/product34c.webp",
    ],

    reviewsCount: 173,

    rating: 5,

    description:
      "A statement track jacket inspired by Salehe Bembury's bold design language, combining athletic heritage with contemporary streetwear appeal.",

    fullDescription: `
    <p>
      The Puma Salehe Bembury King Track Jacket features premium construction, lightweight comfort, and distinctive design details that elevate its sporty silhouette.
    </p>

    <p>
      Designed for versatility, it delivers a modern look that works equally well for casual outings, travel, or everyday streetwear styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Mason Turner",
        rating: "★★★★★",
        text: "The design is incredible and the quality exceeded my expectations.",
      },
      {
        name: "Logan Mitchell",
        rating: "★★★★★",
        text: "Comfortable, stylish, and easily one of my favorite jackets.",
      },
    ],
  },

  {
    id: "35",

    name: "Puma Morocco x Salehe Bembury King Jersey",

    colors: ["green"],

    category: "Shirts",

    price: "$145.00",

    images: [
      "images/product35.webp",
      "images/product35b.webp",
      "images/product35c.webp",
    ],

    reviewsCount: 188,

    rating: 5,

    description:
      "A bold Puma x Salehe Bembury collaboration jersey inspired by Moroccan football heritage, blending performance design with streetwear aesthetics.",

    fullDescription: `
    <p>
      The Puma Morocco x Salehe Bembury King Jersey delivers a lightweight, breathable construction designed for both sport performance and lifestyle wear.
    </p>

    <p>
      Its vibrant green palette and unique design detailing pay tribute to Moroccan football culture while maintaining a modern streetwear identity.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Youssef Rahman",
        rating: "★★★★★",
        text: "Amazing jersey design, very breathable and comfortable to wear.",
      },
      {
        name: "Omar Khalid",
        rating: "★★★★★",
        text: "The detailing is incredible and the quality feels premium.",
      },
    ],
  },

  {
    id: "36",

    name: "Trenchcoat Rula2",

    colors: ["brown"],

    category: "Jackets",

    price: "$198.00",

    images: [
      "images/product36.webp",
      "images/product36b.webp",
      "images/product36c.webp",
    ],

    reviewsCount: 109,

    rating: 5,

    description:
      "A refined oversized trenchcoat designed with a modern feminine silhouette and a timeless structured finish.",

    fullDescription: `
    <p>
      The Trenchcoat Rula2 is crafted from durable premium fabric with a smooth finish that balances structure and elegance.
    </p>

    <p>
      Its oversized cut allows for effortless layering while maintaining a clean, fashion-forward silhouette suitable for both casual and formal styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Amelia Brooks",
        rating: "★★★★★",
        text: "Absolutely stunning coat. The fit and fabric feel very premium.",
      },
      {
        name: "Ella Thompson",
        rating: "★★★★★",
        text: "Perfect trench for layering. Looks elegant and modern at the same time.",
      },
    ],
  },

  {
    id: "37",

    name: "Michael Kors Shrunken Trenchcoat",

    colors: ["blue"],

    category: "Jackets",

    price: "$215.00",

    images: [
      "images/product37.webp",
      "images/product37b.webp",
      "images/product37c.webp",
    ],

    reviewsCount: 134,

    rating: 5,

    description:
      "A modern shrunken trenchcoat designed with a tailored feminine fit and a sleek, contemporary silhouette.",

    fullDescription: `
    <p>
      The Michael Kors Shrunken Trenchcoat reimagines the classic trench with a more fitted, structured cut that enhances the body’s natural shape.
    </p>

    <p>
      Its refined blue tone and clean detailing make it a versatile outerwear piece for both professional and casual styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Bennett",
        rating: "★★★★★",
        text: "The fit is perfect and very flattering. Looks very high-end.",
      },
      {
        name: "Sophia Carter",
        rating: "★★★★★",
        text: "Elegant and stylish trenchcoat. I get compliments every time I wear it.",
      },
    ],
  },

  {
    id: "38",

    name: "Button Down Tiered Dress",

    colors: ["black"],

    category: "Dresses",

    price: "$155.00",

    images: [
      "images/product38.webp",
      "images/product38b.webp",
      "images/product38c.webp",
    ],

    reviewsCount: 121,

    rating: 5,

    description:
      "A flowy button-down tiered dress designed with a feminine silhouette and elegant layered structure for effortless styling.",

    fullDescription: `
    <p>
      The Button Down Tiered Dress is crafted from lightweight fabric that creates soft movement and a graceful drape with every step.
    </p>

    <p>
      Its tiered construction and button-down front give it a balanced blend of casual charm and refined elegance, suitable for multiple occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Isabella Reed",
        rating: "★★★★★",
        text: "So elegant and flowy. It fits beautifully and feels very comfortable.",
      },
      {
        name: "Mia Collins",
        rating: "★★★★★",
        text: "Perfect dress for both casual and semi-formal occasions.",
      },
    ],
  },

  {
    id: "39",

    name: "Wrap Dress Viravenna Maxi",

    colors: ["brown"],

    category: "Dresses",

    price: "$162.00",

    images: [
      "images/product39.webp",
      "images/product39b.webp",
      "images/product39c.webp",
    ],

    reviewsCount: 128,

    rating: 5,

    description:
      "A flowing maxi wrap dress designed with an elegant silhouette that enhances natural shape and movement.",

    fullDescription: `
    <p>
      The Wrap Dress Viravenna Maxi is crafted from soft, breathable fabric that drapes beautifully for a flattering wrap-style fit.
    </p>

    <p>
      Its maxi length and adjustable waist tie create a balanced silhouette that works perfectly for both casual elegance and elevated occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Amelia Scott",
        rating: "★★★★★",
        text: "The fit is stunning and the wrap style is very flattering.",
      },
      {
        name: "Chloe Williams",
        rating: "★★★★★",
        text: "Elegant, comfortable, and perfect for special occasions.",
      },
    ],
  },

  {
    id: "40",

    name: "Hugo Espino Shirt",

    colors: ["beige", "black"],

    category: "Shirts",

    price: "$140.00",

    images: [
      "images/product40.webp",
      "images/product40b.webp",
      "images/product40c.webp",
    ],

    reviewsCount: 136,

    rating: 5,

    description:
      "A refined Hugo-inspired shirt featuring a modern contrast palette and a sharp tailored fit for elevated everyday styling.",

    fullDescription: `
    <p>
      The Hugo Espino Shirt is designed with premium fabric and precise tailoring, offering a clean silhouette that balances structure and comfort.
    </p>

    <p>
      Its beige and black contrast detailing adds a subtle but bold visual edge, making it suitable for both smart and casual occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Liam Carter",
        rating: "★★★★★",
        text: "Very sharp shirt. The contrast design looks even better in person.",
      },
      {
        name: "Noah Bennett",
        rating: "★★★★★",
        text: "Perfect fit and great fabric quality. Feels premium.",
      },
    ],
  },

  {
    id: "41",

    name: "Boss Chronograph Watch",

    colors: ["blue"],

    category: "Accessories",

    price: "$260.00",

    images: [
      "images/product41.webp",
      "images/product41b.webp",
      "images/product41c.webp",
    ],

    reviewsCount: 149,

    rating: 5,

    description:
      "A sleek Boss chronograph watch designed with a bold blue dial and precision detailing for a refined modern look.",

    fullDescription: `
    <p>
      The Boss Chronograph Watch combines precision engineering with a sophisticated design, featuring a detailed chronograph dial and durable stainless steel build.
    </p>

    <p>
      Its deep blue finish adds a premium edge, making it suitable for both formal wear and everyday elegance.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Brooks",
        rating: "★★★★★",
        text: "Looks extremely premium and keeps perfect time.",
      },
      {
        name: "James Walker",
        rating: "★★★★★",
        text: "The blue dial is stunning and really stands out.",
      },
    ],
  },

  {
    id: "42",

    name: "Guess Phoenix Chronograph Watch",

    colors: ["black"],

    category: "Accessories",

    price: "$245.00",

    images: [
      "images/product42.webp",
      "images/product42b.webp",
      "images/product42c.webp",
    ],

    reviewsCount: 162,

    rating: 5,

    description:
      "A bold Guess Phoenix chronograph watch featuring a sleek black design and sporty-luxury detailing for everyday sophistication.",

    fullDescription: `
    <p>
      The Guess Phoenix Chronograph Watch combines a strong masculine design with precise chronograph functionality and a modern black finish.
    </p>

    <p>
      Built for versatility, it transitions effortlessly from casual outfits to more refined evening wear while maintaining a striking presence on the wrist.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Foster",
        rating: "★★★★★",
        text: "Very stylish watch. The black finish looks premium and sharp.",
      },
      {
        name: "Michael Turner",
        rating: "★★★★★",
        text: "Great build quality and feels solid on the wrist.",
      },
    ],
  },

  {
    id: "43",

    name: "Guess Quattro Clear Watch",

    colors: ["gold"],

    category: "Accessories",

    price: "$255.00",

    images: [
      "images/product43.webp",
      "images/product43b.webp",
      "images/product43c.webp",
    ],

    reviewsCount: 154,

    rating: 5,

    description:
      "A luxurious Guess Quattro Clear watch featuring a radiant gold finish with elegant transparent detailing for a modern feminine look.",

    fullDescription: `
    <p>
      The Guess Quattro Clear Watch blends bold glamour with contemporary design, showcasing a striking gold-tone case and refined transparent accents.
    </p>

    <p>
      Designed for standout styling, it adds a touch of luxury to both everyday outfits and special occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Bennett",
        rating: "★★★★★",
        text: "Absolutely stunning watch. The gold finish is very elegant.",
      },
      {
        name: "Sophia Martin",
        rating: "★★★★★",
        text: "Looks luxurious and feels high quality. I get compliments every time.",
      },
    ],
  },

  {
    id: "44",

    name: "Guess Tri Glitz Watch",

    colors: ["silver"],

    category: "Accessories",

    price: "$248.00",

    images: [
      "images/product44.webp",
      "images/product44b.webp",
      "images/product44c.webp",
    ],

    reviewsCount: 171,

    rating: 5,

    description:
      "A dazzling Guess Tri Glitz watch featuring a silver-tone finish with sparkling crystal detailing for a luxurious feminine appeal.",

    fullDescription: `
    <p>
      The Guess Tri Glitz Watch is designed to stand out with its shimmering crystal accents and polished silver-tone case.
    </p>

    <p>
      Combining elegance and glamour, it elevates both everyday outfits and special occasion looks with a refined sparkle.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emma Johnson",
        rating: "★★★★★",
        text: "So shiny and elegant. The crystals really make it stand out.",
      },
      {
        name: "Ava Wilson",
        rating: "★★★★★",
        text: "Beautiful watch, feels very luxurious on the wrist.",
      },
    ],
  },

  {
    id: "45",

    name: "Vogue Eyewear Sunglasses",

    colors: ["pink"],

    category: "Accessories",

    price: "$135.00",

    images: [
      "images/product45.webp",
      "images/product45b.webp",
      "images/product45c.webp",
    ],

    reviewsCount: 138,

    rating: 5,

    description:
      "A stylish pair of Vogue Eyewear sunglasses featuring a soft pink tint and elegant feminine frames for a chic modern look.",

    fullDescription: `
    <p>
      The Vogue Eyewear Sunglasses are designed with lightweight frames and UV-protective lenses, combining fashion and function effortlessly.
    </p>

    <p>
      Their soft pink tone adds a playful yet sophisticated touch, making them perfect for sunny days and elevated casual outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Chloe Anderson",
        rating: "★★★★★",
        text: "Super stylish and lightweight. The pink tint is gorgeous.",
      },
      {
        name: "Isabella Brown",
        rating: "★★★★★",
        text: "Very comfortable and perfect for sunny days. Love the design.",
      },
    ],
  },

  {
    id: "46",

    name: "Michael Kors Sea Island Sunglasses",

    colors: ["black"],

    category: "Accessories",

    price: "$145.00",

    images: [
      "images/product46.webp",
      "images/product46b.webp",
      "images/product46c.webp",
    ],

    reviewsCount: 159,

    rating: 5,

    description:
      "Elegant Michael Kors Sea Island sunglasses featuring bold black frames with a refined feminine silhouette and premium UV protection.",

    fullDescription: `
    <p>
      The Michael Kors Sea Island Sunglasses are designed with a modern oversized frame that blends luxury styling with everyday practicality.
    </p>

    <p>
      Built with high-quality UV-protective lenses, they offer both sun protection and a polished, high-fashion finish for any outfit.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Miller",
        rating: "★★★★★",
        text: "Very classy and comfortable. The black frames look amazing.",
      },
      {
        name: "Olivia Davis",
        rating: "★★★★★",
        text: "Perfect oversized sunglasses. They feel luxurious and stylish.",
      },
    ],
  },

  {
    id: "47",

    name: "Ray-Ban The Marshal Sunglasses",

    colors: ["gold", "green"],

    category: "Accessories",

    price: "$170.00",

    images: [
      "images/product47.webp",
      "images/product47b.webp",
      "images/product47c.webp",
    ],

    reviewsCount: 184,

    rating: 5,

    description:
      "A bold Ray-Ban Marshal design featuring a gold frame and green lenses for a timeless pilot-inspired luxury look.",

    fullDescription: `
    <p>
      The Ray-Ban The Marshal Sunglasses combine classic aviator inspiration with modern detailing, featuring a sleek gold metal frame and signature green lenses.
    </p>

    <p>
      Built for durability and comfort, they offer full UV protection while maintaining a sharp, iconic aesthetic suitable for everyday wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Collins",
        rating: "★★★★★",
        text: "Classic Ray-Ban quality. The gold and green combo looks perfect.",
      },
      {
        name: "Noah Thompson",
        rating: "★★★★★",
        text: "Very comfortable and stylish. They feel premium in every way.",
      },
    ],
  },

  {
    id: "48",

    name: "Versace Sunglasses",

    colors: ["gold", "dark gray"],

    category: "Accessories",

    price: "$190.00",

    images: [
      "images/product48.webp",
      "images/product48b.webp",
      "images/product48c.webp",
    ],

    reviewsCount: 201,

    rating: 5,

    description:
      "A bold Versace-inspired pair of sunglasses featuring a luxurious gold frame and dark gray lenses for a strong high-fashion look.",

    fullDescription: `
    <p>
      The Versace Sunglasses are designed with a premium gold-tone frame that delivers a striking and confident aesthetic.
    </p>

    <p>
      Paired with dark gray lenses, they offer full UV protection while maintaining a sleek, fashion-forward appearance suitable for everyday luxury styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Walker",
        rating: "★★★★★",
        text: "Very premium feel. The gold frame really stands out.",
      },
      {
        name: "Marcus Johnson",
        rating: "★★★★★",
        text: "Stylish and comfortable. Perfect for a luxury streetwear look.",
      },
    ],
  },

  {
    id: "49",

    name: "Pier One Smart Lace-Ups Shoes",

    colors: ["black"],

    category: "Shoes",

    price: "$165.00",

    images: [
      "images/product49.webp",
      "images/product49b.webp",
      "images/product49c.webp",
    ],

    reviewsCount: 143,

    rating: 5,

    description:
      "Sophisticated smart lace-up shoes designed with a sleek black finish and timeless styling for formal and business occasions.",

    fullDescription: `
    <p>
      The Pier One Smart Lace-Ups Shoes are crafted with premium materials and a refined silhouette that delivers both elegance and lasting comfort.
    </p>

    <p>
      Their classic lace-up construction and polished black finish make them a versatile choice for office wear, formal events, and special occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Alexander Brooks",
        rating: "★★★★★",
        text: "Excellent craftsmanship and very comfortable for long hours of wear.",
      },
      {
        name: "Matthew Carter",
        rating: "★★★★★",
        text: "Sharp, elegant, and perfect for formal occasions. Highly recommended.",
      },
    ],
  },

  {
    id: "50",

    name: "Zign Smart Slip-Ons Shoes",

    colors: ["dark red"],

    category: "Shoes",

    price: "$158.00",

    images: [
      "images/product50.webp",
      "images/product50b.webp",
      "images/product50c.webp",
    ],

    reviewsCount: 137,

    rating: 5,

    description:
      "Refined smart slip-on shoes featuring a rich dark red finish and a sleek silhouette for effortless sophistication.",

    fullDescription: `
    <p>
      The Zign Smart Slip-Ons Shoes are crafted for modern gentlemen who value both style and convenience, offering a polished look without compromising comfort.
    </p>

    <p>
      Their slip-on construction, premium materials, and elegant dark red tone make them ideal for business-casual outfits, formal gatherings, and evening occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ryan Mitchell",
        rating: "★★★★★",
        text: "Very comfortable and the dark red color looks incredibly classy.",
      },
      {
        name: "Jacob Turner",
        rating: "★★★★★",
        text: "Easy to wear, stylish, and surprisingly versatile with different outfits.",
      },
    ],
  },

  {
    id: "51",

    name: "Hugo Varian Loafers",

    colors: ["black"],

    category: "Shoes",

    price: "$178.00",

    images: [
      "images/product51.webp",
      "images/product51b.webp",
      "images/product51c.webp",
    ],

    reviewsCount: 151,

    rating: 5,

    description:
      "Premium Hugo-inspired loafers featuring a sleek black finish and a sophisticated design for effortless smart-casual styling.",

    fullDescription: `
    <p>
      The Hugo Varian Loafers are crafted with premium materials and a streamlined silhouette, delivering exceptional comfort and timeless elegance.
    </p>

    <p>
      Designed for versatility, they pair seamlessly with tailored trousers, chinos, or smart denim, making them a staple for modern wardrobes.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Christopher Hayes",
        rating: "★★★★★",
        text: "Elegant loafers with excellent comfort. Perfect for work and events.",
      },
      {
        name: "Benjamin Foster",
        rating: "★★★★★",
        text: "The quality is outstanding and they look even better in person.",
      },
    ],
  },

  {
    id: "52",

    name: "Pier One Leather Loafers",

    colors: ["brown"],

    category: "Shoes",

    price: "$172.00",

    images: [
      "images/product52.webp",
      "images/product52b.webp",
      "images/product52c.webp",
    ],

    reviewsCount: 146,

    rating: 5,

    description:
      "Classic leather loafers crafted with a rich brown finish and timeless detailing for sophisticated everyday wear.",

    fullDescription: `
    <p>
      The Pier One Leather Loafers are made from premium leather, offering a refined appearance and exceptional comfort throughout the day.
    </p>

    <p>
      Their versatile design makes them an ideal choice for business-casual outfits, formal occasions, and smart weekend styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Jonathan Reed",
        rating: "★★★★★",
        text: "Beautiful leather quality and very comfortable right out of the box.",
      },
      {
        name: "Andrew Collins",
        rating: "★★★★★",
        text: "Stylish, durable, and perfect for both office and casual wear.",
      },
    ],
  },

  {
    id: "53",

    name: "Anna Field Wide Fit Shoes",

    colors: ["black"],

    category: "Shoes",

    price: "$145.00",

    images: [
      "images/product53.webp",
      "images/product53b.webp",
      "images/product53c.webp",
    ],

    reviewsCount: 132,

    rating: 5,

    description:
      "Elegant wide-fit shoes designed for enhanced comfort without compromising on style, featuring a sleek black finish.",

    fullDescription: `
    <p>
      The Anna Field Wide Fit Shoes are thoughtfully designed to provide additional room and support while maintaining a refined and feminine silhouette.
    </p>

    <p>
      Their versatile black finish and comfortable construction make them suitable for workdays, special occasions, and everyday wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Grace Bennett",
        rating: "★★★★★",
        text: "Finally found a stylish shoe that is genuinely comfortable all day.",
      },
      {
        name: "Lily Thompson",
        rating: "★★★★★",
        text: "Great fit, elegant design, and excellent support for wider feet.",
      },
    ],
  },

  {
    id: "54",

    name: "Hugo Kris Newloafer Slip-Ons",

    colors: ["cream"],

    category: "Shoes",

    price: "$182.00",

    images: [
      "images/product54.webp",
      "images/product54b.webp",
      "images/product54c.webp",
    ],

    reviewsCount: 141,

    rating: 5,

    description:
      "Sophisticated slip-on loafers featuring a refined cream finish and a modern feminine silhouette for effortless elegance.",

    fullDescription: `
    <p>
      The Hugo Kris Newloafer Slip-Ons are crafted from premium materials and designed for all-day comfort with a sleek, contemporary aesthetic.
    </p>

    <p>
      Their versatile cream tone and streamlined profile make them an ideal choice for smart-casual outfits, office wear, and elevated everyday styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Evans",
        rating: "★★★★★",
        text: "Beautiful loafers with a very elegant finish. Extremely comfortable.",
      },
      {
        name: "Charlotte Reed",
        rating: "★★★★★",
        text: "The cream color is gorgeous and pairs well with so many outfits.",
      },
    ],
  },

  {
    id: "55",

    name: "Ralph Lauren Khloe Leather Classic Heels",

    colors: ["black"],

    category: "Shoes",

    price: "$195.00",

    images: [
      "images/product55.webp",
      "images/product55b.webp",
      "images/product55c.webp",
    ],

    reviewsCount: 167,

    rating: 5,

    description:
      "Elegant Ralph Lauren-inspired classic heels crafted from premium leather with a timeless black finish for refined femininity.",

    fullDescription: `
    <p>
      The Ralph Lauren Khloe Leather Classic Heels are designed with a sleek pointed silhouette and high-quality leather construction for a polished, luxurious look.
    </p>

    <p>
      Their timeless design makes them perfect for formal events, office wear, and sophisticated evening outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Isabella Brooks",
        rating: "★★★★★",
        text: "Absolutely stunning heels. They feel comfortable and look very elegant.",
      },
      {
        name: "Amelia Carter",
        rating: "★★★★★",
        text: "Perfect black heels for formal occasions. Very high quality.",
      },
    ],
  },

  {
    id: "56",

    name: "Anna Field High Heels",

    colors: ["red"],

    category: "Shoes",

    price: "$150.00",

    images: [
      "images/product56.webp",
      "images/product56b.webp",
      "images/product56c.webp",
    ],

    reviewsCount: 139,

    rating: 5,

    description:
      "Elegant Anna Field high heels featuring a bold red finish and a sleek feminine silhouette designed for confident styling.",

    fullDescription: `
    <p>
      The Anna Field High Heels are crafted with a refined pointed silhouette and smooth finish that enhances their bold and elegant appearance.
    </p>

    <p>
      Their striking red color adds a confident statement touch, making them perfect for evening wear, special occasions, and standout outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Carter",
        rating: "★★★★★",
        text: "Absolutely stunning heels. The red color is bold and beautiful.",
      },
      {
        name: "Sophia Wilson",
        rating: "★★★★★",
        text: "Very comfortable for heels and perfect for special occasions.",
      },
    ],
  },

  {
    id: "57",

    name: "ICANIWILL Contrast Cropped T-Shirt",

    colors: ["white"],

    category: "Shirts",

    price: "$98.00",

    images: [
      "images/product57.webp",
      "images/product57b.webp",
      "images/product57c.webp",
    ],

    reviewsCount: 126,

    rating: 5,

    description:
      "A sporty ICANIWILL-inspired cropped T-shirt featuring a clean white base with subtle contrast detailing for an active modern look.",

    fullDescription: `
    <p>
      The ICANIWILL Contrast Cropped T-Shirt is designed with breathable fabric and a flattering cropped fit that supports both performance and lifestyle wear.
    </p>

    <p>
      Its minimalist white design with contrast accents makes it easy to pair with leggings, joggers, or high-waisted jeans for a sleek athletic aesthetic.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ava Johnson",
        rating: "★★★★★",
        text: "Super comfortable and perfect for workouts or casual wear.",
      },
      {
        name: "Chloe Adams",
        rating: "★★★★★",
        text: "Love the fit and the cropped style. Very flattering.",
      },
    ],
  },

  {
    id: "58",

    name: "Guess Britney Crop Tee",

    colors: ["beige"],

    category: "Shirts",

    price: "$102.00",

    images: [
      "images/product58.webp",
      "images/product58b.webp",
      "images/product58c.webp",
    ],

    reviewsCount: 118,

    rating: 5,

    description:
      "A stylish Guess-inspired cropped tee featuring a soft beige tone and a flattering fitted silhouette for effortless everyday wear.",

    fullDescription: `
    <p>
      The Guess Britney Crop Tee is designed with soft, breathable fabric and a modern cropped cut that enhances a clean feminine silhouette.
    </p>

    <p>
      Its neutral beige tone makes it easy to style with denim, joggers, or skirts for a versatile casual look.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Mia Johnson",
        rating: "★★★★★",
        text: "Very soft and comfortable. The fit is perfect for a cropped tee.",
      },
      {
        name: "Emma Brown",
        rating: "★★★★★",
        text: "Simple but very stylish. I wear it all the time.",
      },
    ],
  },

  {
    id: "59",

    name: "Adidas Originals Sports Shirt",

    colors: ["red", "black"],

    category: "Shirts",

    price: "$110.00",

    images: [
      "images/product59.webp",
      "images/product59b.webp",
      "images/product59c.webp",
    ],

    reviewsCount: 162,

    rating: 5,

    description:
      "A bold Adidas Originals-inspired sports shirt featuring a dynamic red and black design for a confident athletic look.",

    fullDescription: `
    <p>
      The Adidas Originals Sports Shirt is designed with lightweight, breathable fabric that supports movement and comfort during both training and casual wear.
    </p>

    <p>
      Its striking red and black color combination delivers a strong athletic aesthetic while maintaining everyday versatility.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Williams",
        rating: "★★★★★",
        text: "Very comfortable and perfect for workouts or casual outings.",
      },
      {
        name: "Ava Thompson",
        rating: "★★★★★",
        text: "Love the color combo. It looks sporty and stylish at the same time.",
      },
    ],
  },

  {
    id: "60",

    name: "Levi's Harlie Button-Down Shirt",

    colors: ["white"],

    category: "Shirts",

    price: "$118.00",

    images: [
      "images/product60.webp",
      "images/product60b.webp",
      "images/product60c.webp",
    ],

    reviewsCount: 129,

    rating: 5,

    description:
      "A clean Levi’s-inspired button-down shirt designed with a crisp white finish and a relaxed feminine fit for effortless everyday styling.",

    fullDescription: `
    <p>
      The Levi's Harlie Button-Down Shirt is crafted from lightweight, breathable fabric that delivers all-day comfort with a polished appearance.
    </p>

    <p>
      Its classic button-down design and relaxed silhouette make it a versatile wardrobe staple suitable for both casual and smart outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Watson",
        rating: "★★★★★",
        text: "Perfect white shirt. Fits beautifully and feels very comfortable.",
      },
      {
        name: "Sophie Clark",
        rating: "★★★★★",
        text: "Very clean and stylish. I wear it for both work and casual days.",
      },
    ],
  },

  {
    id: "61",

    name: "Tommy Hilfiger 1985 Slim Fit Polo Shirt",

    colors: ["pink"],

    category: "Shirts",

    price: "$125.00",

    images: [
      "images/product61.webp",
      "images/product61b.webp",
      "images/product61c.webp",
    ],

    reviewsCount: 154,

    rating: 5,

    description:
      "A classic Tommy Hilfiger-inspired slim fit polo shirt featuring a soft pink tone and a clean, sporty feminine silhouette.",

    fullDescription: `
    <p>
      The Tommy Hilfiger 1985 Slim Fit Polo Shirt is crafted from breathable cotton fabric, offering comfort and a structured yet flexible fit.
    </p>

    <p>
      Its slim silhouette and timeless polo design make it perfect for casual wear, sporty styling, and elevated everyday outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Brown",
        rating: "★★★★★",
        text: "Super flattering fit and very comfortable. The pink shade is beautiful.",
      },
      {
        name: "Ava Mitchell",
        rating: "★★★★★",
        text: "Perfect polo shirt for casual outings. Feels high quality.",
      },
    ],
  },

  {
    id: "62",

    name: "Yourturn Unisex Relaxed Jacket",

    colors: ["blue"],

    category: "Jackets",

    price: "$135.00",

    images: [
      "images/product62.webp",
      "images/product62b.webp",
      "images/product62c.webp",
    ],

    reviewsCount: 147,

    rating: 5,

    description:
      "A versatile Yourturn unisex relaxed jacket designed with a casual oversized fit and a clean blue finish for everyday street styling.",

    fullDescription: `
    <p>
      The Yourturn Unisex Relaxed Jacket is crafted for comfort and ease, featuring a laid-back silhouette that suits both men and women.
    </p>

    <p>
      Its lightweight construction and relaxed fit make it ideal for layering across seasons while maintaining a modern streetwear aesthetic.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Jordan Blake",
        rating: "★★★★★",
        text: "Really comfortable and stylish. Fits perfectly for a relaxed look.",
      },
      {
        name: "Taylor Morgan",
        rating: "★★★★★",
        text: "Great unisex jacket, lightweight and easy to style.",
      },
    ],
  },

  {
    id: "63",

    name: "Adidas Originals Stadium Bomber Jacket",

    colors: ["black"],

    category: "Jackets",

    price: "$185.00",

    images: [
      "images/product63.webp",
      "images/product63b.webp",
      "images/product63c.webp",
    ],

    reviewsCount: 171,

    rating: 5,

    description:
      "A sleek Adidas Originals-inspired stadium bomber jacket featuring a bold black finish and classic athletic streetwear styling.",

    fullDescription: `
    <p>
      The Adidas Originals Stadium Bomber Jacket is designed with a structured silhouette and premium materials that combine comfort with a strong athletic edge.
    </p>

    <p>
      Its timeless bomber design makes it a versatile outerwear piece for casual wear, travel, and street-inspired outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Marcus Reed",
        rating: "★★★★★",
        text: "Very high quality and fits perfectly. Looks amazing in black.",
      },
      {
        name: "Dylan Carter",
        rating: "★★★★★",
        text: "Comfortable bomber jacket with a premium feel.",
      },
    ],
  },

  {
    id: "64",

    name: "Nike Performance Korea 2026 Stadium Home Jersey",

    colors: ["red"],

    category: "Shirts",

    price: "$155.00",

    images: [
      "images/product64.webp",
      "images/product64b.webp",
      "images/product64c.webp",
    ],

    reviewsCount: 176,

    rating: 5,

    description:
      "A high-performance Nike Korea 2026 stadium home jersey featuring a bold red design inspired by national team heritage and modern athletic styling.",

    fullDescription: `
    <p>
      The Nike Performance Korea 2026 Stadium Home Jersey is designed for both performance and lifestyle wear, offering a lightweight and breathable construction.
    </p>

    <p>
      Its bold red colorway represents national pride while maintaining a sleek, modern fit suitable for fans and everyday streetwear styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Brooks",
        rating: "★★★★★",
        text: "Amazing quality jersey. Fits perfectly and feels very lightweight.",
      },
      {
        name: "Michael Carter",
        rating: "★★★★★",
        text: "Love the design and the material is very breathable.",
      },
    ],
  },

  {
    id: "65",

    name: "Versace Jeans Couture Sneakers",

    colors: ["white"],

    category: "Shoes",

    price: "$210.00",

    images: [
      "images/product65.webp",
      "images/product65b.webp",
      "images/product65c.webp",
    ],

    reviewsCount: 163,

    rating: 5,

    description:
      "A bold Versace Jeans Couture-inspired sneaker featuring a clean white design with luxury streetwear detailing.",

    fullDescription: `
    <p>
      The Versace Jeans Couture Sneakers are designed with premium materials and a modern silhouette that blends comfort with high-fashion street style.
    </p>

    <p>
      Their clean white finish and subtle branding accents make them a versatile choice for everyday wear, casual outfits, and elevated streetwear looks.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Walker",
        rating: "★★★★★",
        text: "Very clean and stylish sneakers. They go with everything.",
      },
      {
        name: "Liam Johnson",
        rating: "★★★★★",
        text: "Comfortable and premium feel. Definitely worth it.",
      },
    ],
  },

  {
    id: "66",

    name: "Air Jordan 1 Mid Sneakers",

    colors: ["white", "black"],

    category: "Shoes",

    price: "$225.00",

    images: [
      "images/product66.webp",
      "images/product66b.webp",
      "images/product66c.webp",
    ],

    reviewsCount: 219,

    rating: 5,

    description:
      "Iconic Air Jordan 1 Mid sneakers featuring a clean white and black colorway with a timeless basketball-inspired streetwear design.",

    fullDescription: `
    <p>
      The Air Jordan 1 Mid Sneakers are built with a durable leather upper and classic silhouette that pays tribute to the original Jordan heritage.
    </p>

    <p>
      Their white and black color combination makes them a versatile staple for both sporty and everyday streetwear outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Derrick Brown",
        rating: "★★★★★",
        text: "Classic Jordans. Comfortable and stylish with great build quality.",
      },
      {
        name: "Jordan Lewis",
        rating: "★★★★★",
        text: "Perfect everyday sneakers. The black and white combo is clean.",
      },
    ],
  },

  {
    id: "67",

    name: "Michael Kors Zuma Trainers",

    colors: ["white"],

    category: "Shoes",

    price: "$205.00",

    images: [
      "images/product67.webp",
      "images/product67b.webp",
      "images/product67c.webp",
    ],

    reviewsCount: 152,

    rating: 5,

    description:
      "A sleek Michael Kors-inspired Zuma trainers design featuring a clean white finish and modern sporty-luxury aesthetic for everyday wear.",

    fullDescription: `
    <p>
      The Michael Kors Zuma Trainers are crafted with premium materials and a chunky yet refined silhouette that blends comfort with high-fashion street style.
    </p>

    <p>
      Their all-white design makes them a versatile staple that pairs effortlessly with casual, sporty, and elevated everyday outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Bennett",
        rating: "★★★★★",
        text: "Super comfortable and stylish. The all-white look is perfect.",
      },
      {
        name: "Emma Collins",
        rating: "★★★★★",
        text: "Love the chunky design. Very trendy and easy to wear daily.",
      },
    ],
  },

  {
    id: "68",

    name: "Michael Kors Arla Trainers",

    colors: ["black", "white"],

    category: "Shoes",

    price: "$198.00",

    images: [
      "images/product68.webp",
      "images/product68b.webp",
      "images/product68c.webp",
    ],

    reviewsCount: 158,

    rating: 5,

    description:
      "Stylish Michael Kors-inspired Arla trainers featuring a bold black and white contrast design with a modern sporty-luxury finish.",

    fullDescription: `
    <p>
      The Michael Kors Arla Trainers are designed with a lightweight, cushioned sole and a sleek upper that blends comfort with elevated street style.
    </p>

    <p>
      Their black and white contrast colorway gives them a versatile, fashion-forward look suitable for everyday casual and sporty outfits.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Harris",
        rating: "★★★★★",
        text: "Very comfortable and stylish. The contrast design is beautiful.",
      },
      {
        name: "Chloe Martin",
        rating: "★★★★★",
        text: "Perfect trainers for everyday wear. Lightweight and trendy.",
      },
    ],
  },

  {
    id: "69",

    name: "Hugo Arti Suit",

    colors: ["black"],

    category: "Suits",

    price: "$320.00",

    images: [
      "images/product69.webp",
      "images/product69b.webp",
      "images/product69c.webp",
    ],

    reviewsCount: 186,

    rating: 5,

    description:
      "A sharp Hugo-inspired Arti suit featuring a sleek black finish and modern tailored fit for refined formal styling.",

    fullDescription: `
    <p>
      The Hugo Arti Suit is crafted with premium suiting fabric and designed with a slim, structured silhouette that enhances a modern masculine profile.
    </p>

    <p>
      Its classic black finish makes it a versatile choice for business meetings, formal events, and sophisticated evening wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Daniel Brooks",
        rating: "★★★★★",
        text: "Extremely sharp fit. Looks very premium and well-tailored.",
      },
      {
        name: "Michael Carter",
        rating: "★★★★★",
        text: "Perfect formal suit. Comfortable and very elegant.",
      },
    ],
  },

  {
    id: "70",

    name: "Jack & Jones Premium Suit",

    colors: ["navy"],

    category: "Suits",

    price: "$295.00",

    images: [
      "images/product70.webp",
      "images/product70b.webp",
      "images/product70c.webp",
    ],

    reviewsCount: 178,

    rating: 5,

    description:
      "A refined Jack & Jones-inspired premium suit in a deep navy tone, designed for modern tailoring and sharp formal styling.",

    fullDescription: `
    <p>
      The Jack & Jones Premium Suit is crafted with high-quality fabric and a modern slim-fit cut that delivers a clean and confident silhouette.
    </p>

    <p>
      Its deep navy color offers a versatile alternative to black, making it ideal for business meetings, weddings, and elegant evening occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Walker",
        rating: "★★★★★",
        text: "Excellent fit and very comfortable. The navy color looks premium.",
      },
      {
        name: "Noah Bennett",
        rating: "★★★★★",
        text: "Perfect suit for formal events. Clean and stylish design.",
      },
    ],
  },

  {
    id: "71",

    name: "Hugo Trousers",

    colors: ["black"],

    category: "Trousers",

    price: "$155.00",

    images: [
      "images/product71.webp",
      "images/product71b.webp",
      "images/product71c.webp",
    ],

    reviewsCount: 164,

    rating: 5,

    description:
      "Sleek Hugo-inspired trousers in a classic black finish, designed for a modern tailored fit and versatile styling.",

    fullDescription: `
    <p>
      The Hugo Trousers are crafted with premium fabric and designed for a clean, structured silhouette that works perfectly for both formal and smart-casual outfits.
    </p>

    <p>
      Their minimalist design and refined black tone make them a wardrobe essential for professional and elevated everyday wear.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Marcus Johnson",
        rating: "★★★★★",
        text: "Perfect fit and very comfortable. Great for office wear.",
      },
      {
        name: "Daniel Carter",
        rating: "★★★★★",
        text: "Clean design and high-quality material. Looks very premium.",
      },
    ],
  },

  {
    id: "72",

    name: "Only & Sons Joggers Loose Fit Trousers",

    colors: ["cream"],

    category: "Trousers",

    price: "$128.00",

    images: [
      "images/product72.webp",
      "images/product72b.webp",
      "images/product72c.webp",
    ],

    reviewsCount: 149,

    rating: 5,

    description:
      "Comfortable Only & Sons-inspired loose fit jogger trousers in a clean cream tone, designed for relaxed everyday streetwear styling.",

    fullDescription: `
    <p>
      The Only & Sons Joggers Loose Fit Trousers are designed with a relaxed silhouette that prioritizes comfort without sacrificing style.
    </p>

    <p>
      Their soft cream color and loose fit make them perfect for casual outings, lounging, and modern streetwear-inspired looks.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Ethan Parker",
        rating: "★★★★★",
        text: "Super comfortable and stylish. Perfect relaxed fit.",
      },
      {
        name: "Liam Walker",
        rating: "★★★★★",
        text: "Great quality joggers. The cream color looks very clean.",
      },
    ],
  },

  {
    id: "73",

    name: "Pier One Fashion Set Suit",

    colors: ["dark green"],

    category: "Suits",

    price: "$310.00",

    images: [
      "images/product73.webp",
      "images/product73b.webp",
      "images/product73c.webp",
    ],

    reviewsCount: 171,

    rating: 5,

    description:
      "A stylish Pier One-inspired fashion set suit in a deep dark green tone, designed for modern elegance and confident formal styling.",

    fullDescription: `
    <p>
      The Pier One Fashion Set Suit is tailored for a sharp and refined silhouette, combining a structured blazer with matching trousers for a complete coordinated look.
    </p>

    <p>
      Its rich dark green color adds a bold yet sophisticated twist to classic suiting, making it ideal for events, parties, and standout formal occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Marcus Reed",
        rating: "★★★★★",
        text: "Very unique and stylish suit. The green looks premium.",
      },
      {
        name: "Daniel Brooks",
        rating: "★★★★★",
        text: "Perfect fit and great quality. I got many compliments wearing it.",
      },
    ],
  },

  {
    id: "74",

    name: "WAL G. Chiara Dress",

    colors: ["olive green"],

    category: "Dresses",

    price: "$168.00",

    images: [
      "images/product74.webp",
      "images/product74b.webp",
      "images/product74c.webp",
    ],

    reviewsCount: 158,

    rating: 5,

    description:
      "Elegant WAL G. Chiara dress in an olive green tone, designed with a flattering feminine silhouette and modern evening-ready style.",

    fullDescription: `
    <p>
      The WAL G. Chiara Dress is crafted with soft, flowing fabric that enhances movement while maintaining a structured and elegant fit.
    </p>

    <p>
      Its olive green shade adds a refined, earthy tone that makes it perfect for special occasions, dinner events, and stylish outings.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Carter",
        rating: "★★★★★",
        text: "Absolutely beautiful dress. The fit and color are perfect.",
      },
      {
        name: "Sophia Bennett",
        rating: "★★★★★",
        text: "Very elegant and comfortable. Got so many compliments.",
      },
    ],
  },

  {
    id: "75",

    name: "Ralph Lauren Equestrian Dress",

    colors: ["cream"],

    category: "Dresses",

    price: "$245.00",

    images: [
      "images/product75.webp",
      "images/product75b.webp",
      "images/product75c.webp",
    ],

    reviewsCount: 172,

    rating: 5,

    description:
      "A refined Ralph Lauren-inspired equestrian dress in a soft cream tone, blending timeless elegance with a graceful feminine silhouette.",

    fullDescription: `
    <p>
      The Ralph Lauren Equestrian Dress is designed with a structured yet flowing fit that reflects classic equestrian-inspired elegance.
    </p>

    <p>
      Its soft cream color and tailored detailing make it perfect for formal gatherings, upscale daytime events, and sophisticated styling.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Isabella Moore",
        rating: "★★★★★",
        text: "Absolutely stunning dress. Very elegant and high quality.",
      },
      {
        name: "Amelia Clark",
        rating: "★★★★★",
        text: "Perfect fit and beautiful cream color. Very classy look.",
      },
    ],
  },

  {
    id: "76",

    name: "Abercrombie & Fitch Mini Floral Day Dress",

    colors: ["dark red"],

    category: "Dresses",

    price: "$155.00",

    images: [
      "images/product76.webp",
      "images/product76b.webp",
      "images/product76c.webp",
    ],

    reviewsCount: 163,

    rating: 5,

    description:
      "A feminine Abercrombie & Fitch-inspired mini floral day dress in a rich dark red tone, designed for effortless daytime elegance.",

    fullDescription: `
    <p>
      The Abercrombie & Fitch Mini Floral Day Dress is crafted with lightweight, breathable fabric that ensures comfort while maintaining a flattering silhouette.
    </p>

    <p>
      Its subtle floral detailing and dark red base make it a perfect choice for casual outings, brunch dates, and warm-weather occasions.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Emily Johnson",
        rating: "★★★★★",
        text: "Very pretty and comfortable dress. Perfect for summer days.",
      },
      {
        name: "Sophia Williams",
        rating: "★★★★★",
        text: "Love the floral design and the fit is amazing.",
      },
    ],
  },

  {
    id: "77",

    name: "VILA Viclara Dress",

    colors: ["navy"],

    category: "Dresses",

    price: "$148.00",

    images: [
      "images/product77.webp",
      "images/product77b.webp",
      "images/product77c.webp",
    ],

    reviewsCount: 151,

    rating: 5,

    description:
      "A sophisticated VILA-inspired Viclara dress in a deep navy tone, designed with a flattering feminine silhouette for elegant everyday and occasion wear.",

    fullDescription: `
    <p>
      The VILA Viclara Dress is crafted from soft, lightweight fabric that drapes beautifully while offering all-day comfort.
    </p>

    <p>
      Its timeless navy color and refined cut make it suitable for both formal settings and stylish casual outings.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Olivia Brown",
        rating: "★★★★★",
        text: "Very elegant dress. The fit is flattering and comfortable.",
      },
      {
        name: "Emma Wilson",
        rating: "★★★★★",
        text: "Perfect navy dress for both work and evening wear.",
      },
    ],
  },

  {
    id: "78",

    name: "Guess Noelle Luxury Satchel Handbag",

    colors: ["brown"],

    category: "Bags",

    price: "$185.00",

    images: [
      "images/product78.webp",
      "images/product78b.webp",
      "images/product78c.webp",
    ],

    reviewsCount: 167,

    rating: 5,

    description:
      "A refined Guess-inspired Noelle luxury satchel handbag in a rich brown tone, designed for elegant everyday sophistication and practicality.",

    fullDescription: `
    <p>
      The Guess Noelle Luxury Satchel Handbag is crafted with premium materials and a structured silhouette that combines style with functionality.
    </p>

    <p>
      Its spacious interior and elegant brown finish make it perfect for daily use, work, and elevated casual outings.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Bennett",
        rating: "★★★★★",
        text: "Beautiful handbag. Very spacious and looks luxurious.",
      },
      {
        name: "Olivia Harris",
        rating: "★★★★★",
        text: "Perfect everyday bag. The brown color is elegant and rich.",
      },
    ],
  },

  {
    id: "79",

    name: "Valentino Divina Summer Handbag",

    colors: ["gold", "black"],

    category: "Bags",

    price: "$240.00",

    images: [
      "images/product79.webp",
      "images/product79b.webp",
      "images/product79c.webp",
    ],

    reviewsCount: 181,

    rating: 5,

    description:
      "A luxurious Valentino-inspired Divina Summer bag featuring a striking gold and black design, perfect for elegant seasonal styling.",

    fullDescription: `
    <p>
      The Valentino Divina Summer Handbag is designed with a refined structured silhouette and premium finish that blends glamour with everyday functionality.
    </p>

    <p>
      Its bold gold and black color combination makes it a standout accessory for evening outings, summer events, and elevated fashion looks.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Isabella Moore",
        rating: "★★★★★",
        text: "Absolutely stunning bag. The gold detail is very luxurious.",
      },
      {
        name: "Amelia Carter",
        rating: "★★★★★",
        text: "Perfect for summer events. Elegant and high quality.",
      },
    ],
  },

  {
    id: "80",

    name: "Anna Field Holdall Bag",

    colors: ["black"],

    category: "Bags",

    price: "$165.00",

    images: [
      "images/product80.webp",
      "images/product80b.webp",
      "images/product80c.webp",
    ],

    reviewsCount: 158,

    rating: 5,

    description:
      "A practical Anna Field-inspired holdall bag in a sleek black finish, designed for spacious storage and everyday versatility.",

    fullDescription: `
    <p>
      The Anna Field Holdall Bag is crafted with durable materials and a roomy interior, making it ideal for travel, gym use, or busy daily routines.
    </p>

    <p>
      Its minimalist black design ensures it remains stylish while offering maximum functionality for modern lifestyles.
    </p>
  `,

    shipping: `
    <p>
      Free shipping on orders above $100. Standard delivery takes 3-7
      business days.
    </p>

    <p>
      Returns are accepted within 30 days of delivery, provided items remain
      unworn and in original condition.
    </p>
  `,

    reviews: [
      {
        name: "Sophia Williams",
        rating: "★★★★★",
        text: "Very spacious and strong. Perfect for travel and gym.",
      },
      {
        name: "Emily Johnson",
        rating: "★★★★★",
        text: "Simple but stylish. I use it almost every day.",
      },
    ],
  },
];
