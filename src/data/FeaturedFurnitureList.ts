import {resolveAsset} from "@/utils/resolveAsset";

export const FeaturedFurnitureList = [
    {
        title: "Cloe", subtitle: "Modular Storage System", price: 1176,
        description: "An expansive way to furnish your space exactly how you need it and like it. Transform it in exactly what you need like a bookshelf, tv stand or show rack, you pick.",
        imageURL: resolveAsset('products', 'cloe.png')
    },
    {
        title: "Pelican", subtitle: "Shelves with hidden hooks", price: 89,
        description: "Store or exhibit your favorite objects in the entrance hall, modern hallways, living rooms and bedrooms with a decorative and minimalist touch.",
        imageURL: resolveAsset('products', 'pelican.png'),
        additions: ['3 sizes', '5 color finishes']
    },
    {
        mark: "New Favorite!",
        title: "Alada", subtitle: "Floating folding desk", price: 534,
        description: "A timeless and discreet folding desk that seamlessly transforms into a decorative shelf in seconds.",
        imageURL: resolveAsset('products', 'alada.png'),
        additions: ['4 color finishes']
    },
    {
        title: "Alba Collection", subtitle: "Modular bedside table & shelf", price: 272,
        description: "A versatile and modular piece with a sculptural touch that can be used as a wall shelf or as a bedside table with concealed storage.",
        imageURL: resolveAsset('products', 'alba.png'),
        additions: ['6 color finishes, infinite combinations'],
        awards: [
            resolveAsset('awards', 'ica.png'),
            resolveAsset('awards', 'ida.png'),
            resolveAsset('awards', 'epda.png')
        ]
    },
    {
        title: "Batea Collection", subtitle: "Tables with storage & tray tables", price: 169,
        description: "Composed of clean and rounded lines, the Batea Collection includes unique tables with extra functionality like a removable tray, and hidden storage.",
        imageURL: resolveAsset('products', 'batea.png'),
        additions: ['3 sizes', '6 color finishes']
    },
]