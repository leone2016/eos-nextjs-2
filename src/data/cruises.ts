
// Update Cruise Interface
export interface ItineraryActivity {
    description: string;
    hasHiking?: boolean;
    hasSnorkeling?: boolean;
    hasPangaRide?: boolean;
    hasPaddleBoard?: boolean;
    hasKayaking?: boolean;
}

export interface ItineraryDay {
    day: string;
    am: ItineraryActivity;
    pm: ItineraryActivity;
}

export interface Itinerary {
    name: string;
    title?: string;
    duration: string;
    mapImage: string;
    days: ItineraryDay[];
}

export interface Cruise {
    id: string;
    slug: string;
    name: string;
    category: 'Luxury' | 'First Class' | 'Tourist';
    capacity: number;
    length: number;
    description: string;
    image: string;
    itineraries?: Itinerary[];
    safetyEquipment?: string[];
    dimensions?: {
        length: string;
        beam: string;
    };
    factSheetUrl?: string;
    decks?: {
        name: string;
        image: string;
        description: string;
    }[];
}

export const cruises: Cruise[] = [
    // Luxury
    {
        id: 'alya',
        slug: 'alya',
        name: 'Alya',
        category: 'Luxury',
        capacity: 16,
        length: 32,
        description: 'It is a luxury yacht, with a length of 32 meters and a capacity of 16 passengers, with 9 spacious cabins, most with a private balcony.',
        image: '/galapagos_luxury_yacht.png',
        safetyEquipment: [
            '35 life jackets',
            '4 lifebuoys 9mm',
            'Flare gun, smoke signals, SOS flashlights and other types of visual signals',
            '2 survival rafts, 25 passengers each',
            'Fire extinguishers 10 lb and 2lb',
            'Fire hoses 15m',
            'Fire detectors and complete fire protection system'
        ],
        dimensions: {
            length: '31.50 mt2 / 103.34 ft',
            beam: '12.50 mt2 / 41.01 ft'
        },
        factSheetUrl: '#', // Placeholder
        decks: [
            {
                name: 'UPPER DECK',
                image: '/cruises/alya/deck-upper.png',
                description: 'On the Upper deck we have 4 cabins, the bridge and an Alfresco Area.'
            },
            {
                name: 'MAIN DECK',
                image: '/cruises/alya/deck-main.png',
                description: 'On the main deck, besides the 4 cabins with balcony, we have an additional one without balcony. There is also the Dining room with a coffee station, as well as the living room.'
            },
            {
                name: 'LOWER DECK',
                image: '/cruises/alya/deck-lower.png',
                description: 'On the lower deck, there is the kitchen, the Cruise Manager and crew cabins and the dining room for them.'
            }
        ],
        itineraries: [
            {
                name: 'Itinerary A (5D/4N)',
                title: 'Diving into the Wildlife Wonders and Marine Magic of the Galapagos',
                duration: '5 Days / 4 Nights',
                mapImage: '/cruises/alya/alya_mapa_5d4n-a.svg', // Placeholder
                days: [
                    {
                        day: 'THURSDAY',
                        am: { description: 'Santa Cruz Island : Baltra - airport (arrival)' },
                        pm: { description: 'Santa Cruz Island : Black Turtle Cove', hasPangaRide: true }
                    },
                    {
                        day: 'FRIDAY',
                        am: { description: 'Genovesa Island : Darwin Bay', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true },
                        pm: { description: 'Genovesa Island : Barranco', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true }
                    },
                    {
                        day: 'SATURDAY',
                        am: { description: 'Santiago Island : Sullivan Bay', hasHiking: true, hasSnorkeling: true, hasPangaRide: true },
                        pm: { description: 'Bartolome Island : Pinnacle Rock', hasHiking: true, hasSnorkeling: true, hasPangaRide: true }
                    },
                    {
                        day: 'SUNDAY',
                        am: { description: 'Santiago Island : Chinese Hat', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true },
                        pm: { description: 'Mosquera Islet', hasHiking: true, hasSnorkeling: true }
                    },
                    {
                        day: 'MONDAY',
                        am: { description: 'Santa Cruz Island : Charles Darwin Station', hasHiking: true },
                        pm: { description: 'Baltra Airport (Departure)' }
                    }
                ]
            },
            {
                name: 'Itinerary B (6D/5N)',
                title: 'The Unforgettable Journey Among Land Giants and Marine Marvels',
                duration: '6 Days / 5 Nights',
                mapImage: '/cruises/alya/alya_mapa_6d5n-b.svg', // Placeholder
                days: [
                    {
                        day: 'MONDAY',
                        am: { description: 'Santa Cruz Island : Baltra - airport (arrival)' },
                        pm: { description: 'Santa Cruz Island : Highlands', hasHiking: true }
                    },
                    {
                        day: 'TUESDAY',
                        am: { description: 'Isabela Island : Moreno Point', hasHiking: true, hasSnorkeling: true, hasPangaRide: true },
                        pm: { description: 'Isabela Island : Elizabeth Bay', hasPangaRide: true, hasPaddleBoard: true }
                    },
                    {
                        day: 'WEDNESDAY',
                        am: { description: 'Isabela Island : Urbina Bay', hasHiking: true, hasSnorkeling: true },
                        pm: { description: 'Isabela Island : Tagus Cove', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true }
                    },
                    {
                        day: 'THURSDAY',
                        am: { description: 'Fernandina Island : Espinoza Point', hasHiking: true, hasSnorkeling: true },
                        pm: { description: 'Isabela Island : Vicente Roca Point', hasSnorkeling: true, hasPangaRide: true }
                    },
                    {
                        day: 'FRIDAY',
                        am: { description: 'Santiago Island : Espumilla Beach / Buccaneer Cove', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true },
                        pm: { description: 'Santiago Island : Egas Port', hasHiking: true, hasSnorkeling: true }
                    },
                    {
                        day: 'SATURDAY',
                        am: { description: 'Santa Cruz Island : Bachas Beach', hasHiking: true, hasSnorkeling: true },
                        pm: { description: 'Baltra Airport (Departure)' }
                    }
                ]
            },
            {
                name: 'Itinerary C (6D/5N)',
                title: "Immerse in Nature's Grandeur: A Wildlife Expedition across the Galapagos",
                duration: '6 Days / 5 Nights',
                mapImage: '/cruises/alya/alya_mapa_6d5n-c.svg', // Placeholder
                days: [
                    {
                        day: 'SATURDAY',
                        am: { description: 'Santa Cruz Island : Baltra - airport (arrival)' },
                        pm: { description: 'Seymour Island : North Seymour', hasHiking: true }
                    },
                    {
                        day: 'SUNDAY',
                        am: { description: 'South Plazas Island : South Plaza', hasHiking: true },
                        pm: { description: 'Santa Fe Island : Santa Fe', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true }
                    },
                    {
                        day: 'MONDAY',
                        am: { description: 'San Cristobal Island : Interpretation Center / Kicker Rock', hasHiking: true },
                        pm: { description: 'San Cristobal Island : Lobos Island', hasHiking: true, hasSnorkeling: true, hasPangaRide: true }
                    },
                    {
                        day: 'TUESDAY',
                        am: { description: 'Española Island : Gardner Bay', hasSnorkeling: true, hasPaddleBoard: true },
                        pm: { description: 'Española Island : Suarez Point', hasHiking: true }
                    },
                    {
                        day: 'WEDNESDAY',
                        am: { description: 'Floreana Island : Cormorant Point / Devil\'s Crown', hasHiking: true, hasSnorkeling: true, hasPangaRide: true },
                        pm: { description: 'Floreana Island : Post Office Bay / Baroness Lookout', hasHiking: true, hasSnorkeling: true, hasPangaRide: true, hasPaddleBoard: true }
                    },
                    {
                        day: 'THURSDAY',
                        am: { description: 'Santa Cruz Island : Twin Craters', hasHiking: true },
                        pm: { description: 'Baltra Airport (Departure)' }
                    }
                ]
            }
        ]
    },
    {
        id: 'camila',
        slug: 'camila',
        name: 'Camila',
        category: 'Luxury',
        capacity: 16,
        length: 38, // Estimated
        description: 'The boat is elegant, fast, and quiet at sea. A motorized trimaran, the Camila is designed for comfort and stability and is equipped with spacious cabins, a comfortable lounge, and a jacuzzi.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'elite',
        slug: 'elite',
        name: 'Elite',
        category: 'Luxury',
        capacity: 16,
        length: 37.5,
        description: 'The Elite Galapagos cruise ship is a luxury catamaran, built in 2019, designed to offer a comfortable and safe experience in the Galapagos Islands. Measuring 37.5 meters in length, the boat features spacious common areas and comfortable cabins.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'endemic',
        slug: 'endemic',
        name: 'Endemic',
        category: 'Luxury',
        capacity: 16,
        length: 35, // Estimated
        description: 'Experience the "Enchanted Islands" on board the Endemic Luxury Cruise. Known for its design representing perfection, beauty, and uniqueness of this unique paradise.',
        image: '/galapagos_luxury_yacht.png',
    },
    // First Class
    {
        id: 'anahi',
        slug: 'anahi',
        name: 'Anahí',
        category: 'First Class',
        capacity: 16,
        length: 27, // Estimated
        description: 'Anahí is a cruise ship that promises an unforgettable experience. Its design provides stability while sailing, along with comfort and privacy. The Anahí Catamaran is the best option for making your Galapagos expedition unforgettable.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'beluga',
        slug: 'beluga',
        name: 'Beluga',
        category: 'First Class',
        capacity: 16,
        length: 27,
        description: 'The Beluga is a first-class motor yacht used for cruising in the Galapagos Islands. It is a sturdy and reliable vessel, built in 1968 and refurbished in 1986. It accommodates 16 passengers and has 8 cabins with private bathrooms, air conditioning, and safes.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'cachalote',
        slug: 'cachalote',
        name: 'Cachalote',
        category: 'First Class',
        capacity: 16, // Estimated
        length: 28, // Estimated
        description: 'Cruising aboard the M/Y Cachalote offers an intimate and relaxing experience. Enjoy the Galapagos sun on any of its three decks or simply relax with a book and the wind in your hair.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'nemo-ii',
        slug: 'nemo-ii',
        name: 'Nemo II',
        category: 'First Class',
        capacity: 14, // Estimated
        length: 22, // Estimated
        description: 'Experience the "Enchanted Islands" on board the Nemo II. Known for its design representing perfection, beauty, and uniqueness of this unique paradise.',
        image: '/galapagos_luxury_yacht.png',
    },
    // Tourist
    {
        id: 'danubio-azul',
        slug: 'danubio-azul',
        name: 'Danubio Azul',
        category: 'Tourist',
        capacity: 14,
        length: 20, // Estimated
        description: 'The Danubio Azul is a Tourist Class liveaboard. It offers naturalist and diving itineraries, visiting less-crowded sites and areas with greater biodiversity. It accommodates 14 passengers in 5 comfortable cabins with private bathrooms and air conditioning.',
        image: '/galapagos_luxury_yacht.png',
    },
    {
        id: 'darwin',
        slug: 'darwin',
        name: 'Darwin',
        category: 'Tourist',
        capacity: 16, // Esimated
        length: 20, // Estimated
        description: 'Experience the "Enchanted Islands" on board the Darwin. Known for its design representing perfection, beauty, and uniqueness of this unique paradise.',
        image: '/galapagos_luxury_yacht.png',
    }
];
