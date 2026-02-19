export interface TourDay {
    day: number;
    title: string;
    description: string;
    accommodation: string;
    meals: string;
}

export interface Tour {
    id: string;
    slug: string;
    title: string;
    duration: string;
    price: string;
    description: string;
    highlightImage: string;
    itinerary: TourDay[];
    included: string[];
    notIncluded: string[];
}

export const landBasedTours: Tour[] = [
    {
        id: "5-days-island-hopping",
        slug: "island-hopping-5-days",
        title: "Essential Island Hopping",
        duration: "5 Days / 4 Nights",
        price: "Contact Us",
        description: "Experience the magic of the Galapagos in 5 days. Visit the lush highlands of Santa Cruz to see giant tortoises, explore the volcanic landscapes of Isabela Island, and snorkel with white-tip reef sharks and penguins in Tintoreras. A perfect blend of adventure and relaxation.",
        highlightImage: "/galapagos_giant_tortoise.png",
        included: [
            "Transfers in/out in Santa Cruz and Isabela",
            "All tours and services mentioned in the itinerary",
            "Lodging and guided excursions",
            "Meals as specified",
            "Lodging and accommodation included in all locations"
        ],
        notIncluded: [
            "Flights (Quito – Baltra – Quito)",
            "Tips",
            "Any additional expenses not mentioned in the itinerary"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival in Galápagos – Santa Cruz Highlands & Lava Tunnels",
                description: "Upon arrival at Baltra Airport, a representative will greet you and assist with the transfer to Santa Cruz Island. On the way to Puerto Ayora, we’ll explore the Highlands, where you’ll walk through the mysterious lava tunnels—natural formations created by volcanic activity. This area is also home to the famous Giant Tortoises (Geochelone nigrita), often seen grazing or relaxing in the wild. After lunch, check into your hotel in Puerto Ayora with the afternoon free to explore.",
                accommodation: "Dejavu Hotel or similar",
                meals: "Lunch"
            },
            {
                day: 2,
                title: "Isabela Island – Tintoreras Tour",
                description: "After breakfast, board a speedboat to Isabela Island. Upon arrival and check-in, enjoy a guided tour of Tintoreras Islet. Named after the white-tip reef sharks ('Tintoreras') resting in the lava crevices, this area is ideal for wildlife observation. Look out for penguins, marine iguanas, blue-footed boobies, and playful sea lions in the clear turquoise waters.",
                accommodation: "Cally Hotel or similar",
                meals: "Breakfast"
            },
            {
                day: 3,
                title: "Sierra Negra Volcano – Return to Santa Cruz",
                description: "Adventure to Sierra Negra Volcano, boasting the second-largest volcanic caldera in the world (over 10 km wide). Hike to the summit for panoramic views of the caldera and surrounding lunar landscapes. After a box lunch, transfer back to the dock for the speedboat return to Santa Cruz.",
                accommodation: "Dejavu Hotel or similar",
                meals: "Breakfast, Box Lunch"
            },
            {
                day: 4,
                title: "Free Day in Santa Cruz",
                description: "Enjoy a free day to explore Santa Cruz at your leisure. Recommended options include visiting the Charles Darwin Research Station to learn about conservation efforts, walking to the stunning Tortuga Bay beach, or simply relaxing around the lively town of Puerto Ayora.",
                accommodation: "Dejavu Hotel or similar",
                meals: "Breakfast"
            },
            {
                day: 5,
                title: "Transfer to Baltra Airport",
                description: "After breakfast, we will transfer you from your hotel to Baltra Airport for your return flight to the continent.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
        ]
    },
    {
        id: "6-days-island-hopping",
        slug: "island-hopping-6-days",
        title: "Adventure Island Hopping", // Changed from Galapagos 6 Day Island Hopping
        duration: "6 Days / 5 Nights",
        price: "Contact Us",
        description: "An immersive 6-day journey featuring a full-day tour to an uninhabited island, hiking the massive Sierra Negra volcano, and the spectacular Los Tuneles snorkeling experience—often called the most beautiful snorkeling site in Isabela.",
        highlightImage: "/galapagos_kicker_rock.png",
        included: [
            "Round trip flight tickets from Quito or Guayaquil to the Galapagos Islands",
            "Land transportation for tours and all local transfers",
            "Bilingual certified naturalist guide for all tours specified",
            "Meals and accommodations as described (double or triple occupancy)",
            "Snorkel equipment for tours"
        ],
        notIncluded: [
            "Entrance to the Galapagos National Park (USD $200 pp)",
            "Migration Document (USD $20 pp)",
            "Isabela port tax (USD $10 pp)",
            "Travel insurance",
            "Tips",
            "Personal expenses"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival & Santa Cruz Highlands",
                description: "Pick up from airport and private tour of Santa Cruz highlands. Visit Manzanillo Ranch to observe giant tortoises in the wild and explore a large lava tunnel. Afterward, visit Garrapatero beach, a beautiful white sand beach with mangroves. Optional kayaking available (extra cost).",
                accommodation: "Galapagos Suites or similar",
                meals: "Lunch"
            },
            {
                day: 2,
                title: "Uninhabited Island Day Tour",
                description: "Full day tour to an uninhabited island (North Seymour, Plazas, Bartolome, or similar depending on schedule). The visit includes a nature walk to observe unique wildlife like land iguanas and frigatebirds, followed by a snorkeling session in pristine waters.",
                accommodation: "Galapagos Suites or similar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 3,
                title: "Isabela Island & Tintoreras",
                description: "Early speedboat to Puerto Villamil. After check-in and lunch, embark on a tour of Tintoreras Islet. witness white-tip reef sharks, Galapagos penguins, and marine iguanas. Includes a hike on the islet and snorkeling to see colorful reef fish and turtles.",
                accommodation: "Isabela Beach House, Casa de Marita or similar",
                meals: "Breakfast"
            },
            {
                day: 4,
                title: "Sierra Negra Volcano Hike",
                description: "Hiking tour to Sierra Negra volcano and Volcan Chico. Witness one of the widest calderas in the world and explore a surreal landscape of colorful lava formations. The hike is approximately 16km total. Return to Puerto Ayora by speedboat in the afternoon.",
                accommodation: "Isabela Beach House, Casa de Marita or similar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 5,
                title: "Los Tuneles Snorkeling",
                description: "An amazing snorkeling tour to Los Tuneles, a geological wonder of lava arches over calm blue water. Snorkel with giant stingrays, sea turtles, sharks, and seahorses in this breathtaking natural aquarium. Return to Puerto Ayora in the afternoon.",
                accommodation: "Galapagos Suites or similar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 6,
                title: "Departure",
                description: "Free time in the morning to explore Puerto Ayora or visit the Charles Darwin Station ($10 fee). Transfer to Baltra airport for your flight back to the continent.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
        ]
    },
    {
        id: "7-days-island-hopping",
        slug: "island-hopping-7-days",
        title: "Ultimate Island Hopping", // Changed from Galapagos 7 Days Island Hopping
        duration: "7 Days / 6 Nights",
        price: "Contact Us",
        description: "The ultimate week-long exploration covering San Cristobal, Santa Cruz, and Isabela islands. Highlights include snorkeling at Kicker Rock, hiking Sierra Negra, and swimming in the lava arches of Los Tuneles. A complete wildlife experience.",
        highlightImage: "/galapagos_hammerhead_shark.png", // Reusing image as it fits "Kicker Rock" / diving vibes, or we could generate another if needed. User didn't ask for change here.
        included: [
            "Land transportation for tours and all local transfers",
            "Bilingual certified naturalist guide for all tours specified",
            "Meals and accommodations as described",
            "Snorkel equipment for tours",
            "All activities listed in the itinerary"
        ],
        notIncluded: [
            "Entrance to Galapagos National Park ($200 pp)",
            "Migration Document ($20 pp)",
            "Isabela port tax ($10 pp)",
            "Travel insurance",
            "Tips",
            "Flights to/from Galapagos",
            "Meals not listed"
        ],
        itinerary: [
            {
                day: 1,
                title: "Arrival San Cristobal - Tijeretas Hill",
                description: "Flight to San Cristobal. Your guide will welcome you and take you to the Interpretation Center for an overview of Galapagos history. Then, hike to Tijeretas Hill (Frigatebird Hill), where Darwin first landed. Finish with your first snorkel session swimming alongside playful sea lions.",
                accommodation: "Hotel Mar Azul or similar",
                meals: "N/A"
            },
            {
                day: 2,
                title: "Kicker Rock (Leon Dormido) Excursion",
                description: "Day tour to Kicker Rock, an iconic rock formation rising 500 feet from the ocean. It is one of the best snorkeling sites in Galapagos, home to hammerhead sharks, Galapagos sharks, rays, and sea turtles. Includes time to relax at a beautiful beach.",
                accommodation: "Hotel Mar Azul or similar",
                meals: "Breakfast, Box Lunch"
            },
            {
                day: 3,
                title: "Transfer to Santa Cruz - Bay Tour",
                description: "Early speedboat to Santa Cruz. Enjoy a Bay Tour visiting: La Lobería (swimming with sea lions), Canal del Amor (turquoise waters), Playa de los Perros (marine iguanas), and Punta Estrada for more snorkeling with tropical fish and rays.",
                accommodation: "Hotel Coloma or similar",
                meals: "Breakfast"
            },
            {
                day: 4,
                title: "Transfer to Isabela - Tintoreras",
                description: "Speedboat to Puerto Villamil, Isabela. In the afternoon, visit Tintoreras Islet. Walk through the volcanic landscape to see nesting iguanas and resting reef sharks. Snorkel in the clear waters with penguins and sea lions.",
                accommodation: "Hostal Loja or similar",
                meals: "Breakfast"
            },
            {
                day: 5,
                title: "Sierra Negra Volcano Hike",
                description: "Hike the majestic Sierra Negra Volcano, featuring a massive caldera. Continue to Volcan Chico to see parasitic craters and colorful lava fields. A 5-hour hike providing spectacular views of Isabela's northern volcanoes.",
                accommodation: "Hostal Loja or similar",
                meals: "Breakfast, Lunch"
            },
            {
                day: 6,
                title: "Los Tuneles Snorkeling - Return to Santa Cruz",
                description: "Explore Los Tuneles, a labyrinth of lava arches filled with marine life. It's a sanctuary for giant sea turtles, reef sharks, rays, and seahorses. In the afternoon, take the speedboat back to Santa Cruz.",
                accommodation: "Hotel Coloma or similar",
                meals: "Breakfast, Box Lunch"
            },
            {
                day: 7,
                title: "Departure",
                description: "Morning free to enjoy Puerto Ayora or visit the Charles Darwin Station. Transfer to Baltra Airport for your flight to the mainland.",
                accommodation: "N/A",
                meals: "Breakfast"
            }
        ]
    }
];
