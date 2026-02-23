export interface LodgeItineraryActivity {
    description: string;
    hasHiking?: boolean;
    hasCanoe?: boolean;
    hasCulture?: boolean;
    hasBirdwatching?: boolean;
}

export interface LodgeItineraryDay {
    day: string;
    am: LodgeItineraryActivity;
    pm: LodgeItineraryActivity;
}

export interface LodgeItinerary {
    id: string;
    name: string;
    title?: string;
    description?: string;
    image?: string;
    duration: string;
    category?: string;
    inclusions?: { title: string; description: string }[];
    included?: string[];
    notIncluded?: string[];
    days: LodgeItineraryDay[];
}

export interface AmazonLodge {
    id: string;
    slug: string;
    name: string;
    location: string;
    description: string;
    image: string;
    amenities: string[];
    itineraries: LodgeItinerary[];
}

export const amazonLodges: AmazonLodge[] = [
    {
        id: 'napo-wildlife-center',
        slug: 'napo-wildlife-center',
        name: 'Napo Wildlife Center',
        location: 'Yasuní National Park',
        description: 'A luxurious and award-winning eco-lodge nestled deep within the Yasuní National Park. 100% owned and managed entirely by the indigenous Kichwa Añangu community, featuring an impressive observation tower, private lakeside cabins, and unparalleled wildlife viewing.',
        image: '/amazon.png',
        amenities: [
            '20 Private Cabins & Suites',
            'Hot Water & Private Bathrooms',
            '130ft Observation Tower',
            'Restaurant & Bar',
            'Solar & Silent Generator Power',
            'Eco-Friendly Water Purification'
        ],
        itineraries: [
            {
                category: 'EXPLORE the Ecuadorian Amazon',
                id: 'premium-tour-4d3n',
                name: 'Premium Tour',
                title: 'Premium Tour',
                description: 'Immerse yourself in the Amazon with our Premium Tour. Discover an exclusive journey that seamlessly combines elegance with the authenticity of the jungle.',
                duration: '4 Days / 3 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the middle of the jungle', description: 'Unwind in our cozy rooms surrounded by nature, with views of the lush rainforest, where modern comfort meets the serenity of the jungle.' },
                    { title: 'River transportation', description: 'Travel comfortably on our river transport Coca - Napo Wildlife Center - Coca, enjoying the majestic Napo River as you head to the lodge and back to Coca.' },
                    { title: 'Entrance to Yasuni National Park', description: 'Explore the biodiversity of Yasuní National Park and visit the impressive parrot clay lick, a unique natural spectacle.' },
                    { title: 'Expert Guides', description: 'Community guide and naturalist bilingual guide will accompany you in every activity, sharing their knowledge of the culture and nature of the Amazon.' },
                    { title: 'All meals', description: 'Enjoy exquisite local cuisine made with organic ingredients from the region, offering you an authentic and flavorful experience.' },
                    { title: 'Equipment', description: 'We provide you with the necessary equipment (Rain poncho and rubber boots) so you can comfortably enjoy all the activities.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Embark on an exhilarating journey from Coca to the Napo Wildlife Center. Following a flight and a brief transfer, guests are warmly welcomed at a private dock with refreshments and a boxed lunch.', hasCanoe: true },
                        pm: { description: 'A two-hour motorboat ride along the Napo River is followed by a serene canoe trip through a creek to the lodge on a lake. Upon arrival, take in the breathtaking scenery of Lake Añangu, receive a welcome drink, and settle into comfortable jungle-view rooms.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Begins with an early visit to the parrot clay licks. Observe five species, including parrots, parakeets, and macaws. Following this, a trail leads to the Kichwa Interpretation Center "Kuri Muyu," providing insights into Kichwa culture.', hasBirdwatching: true, hasCulture: true },
                        pm: { description: 'The excursion proceeds to the second parrot and parakeet clay lick through the Terra Firme Forest. Return to the lodge via the main stream for wildlife observation. Night concludes with dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Sunrise hike to the observation tower in the Napo River area. Rising 36 meters high on a Ceibo tree, allowing observation of tanagers, macaws, toucans, and monkeys.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Hike through a terra firme forest to encounter diverse fauna like golden-mantled tamarin monkeys. Later, explore the lake by canoe to spy giant otters. Followed by a night walk for insects and reptiles.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Return to the welcome area. Cruise through the Añangu stream enjoying the morning sounds. Switch to the motorized boat for the journey back to Coca to check in for your flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'EXPLORE the Ecuadorian Amazon',
                id: 'extended-stay-5d4n',
                name: 'Extended Stay',
                title: 'Extended Stay',
                description: 'Extend your stay and immerse yourself in the Amazon with our Extended Stay. Enjoy an extended experience that allows you to explore every corner, delve into the richness of the jungle, and connect with nature on a deeper level.',
                duration: '5 Days / 4 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the middle of the jungle', description: 'Unwind in our cozy rooms surrounded by nature, with views of the lush rainforest, where modern comfort meets the serenity of the jungle.' },
                    { title: 'River transportation', description: 'Travel comfortably on our river transport Coca - Napo Wildlife Center - Coca, enjoying the majestic Napo River as you head to the lodge and back to Coca.' },
                    { title: 'Entrance to Yasuni National Park', description: 'Explore the biodiversity of Yasuní National Park and visit the impressive parrot clay lick, a unique natural spectacle.' },
                    { title: 'Expert Guides', description: 'Community guide and naturalist bilingual guide will accompany you in every activity, sharing their knowledge of the culture and nature of the Amazon.' },
                    { title: 'All meals', description: 'Enjoy exquisite local cuisine made with organic ingredients from the region, offering you an authentic and flavorful experience.' },
                    { title: 'Equipment', description: 'We provide you with the necessary equipment (Rain poncho and rubber boots) so you can comfortably enjoy all the activities.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Embark on an exhilarating journey from Coca to the Napo Wildlife Center. Following a flight and a brief transfer, guests are warmly welcomed at a private dock with refreshments and a boxed lunch.', hasCanoe: true },
                        pm: { description: 'A two-hour motorboat ride along the Napo River is followed by a serene canoe trip through a creek to the lodge on a lake. Upon arrival, take in the breathtaking scenery of Lake Añangu, receive a welcome drink, and get briefed on hotel services before settling into comfortable jungle-view rooms.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Begins with an early visit to the parrot clay licks. Observe five species, including parrots, parakeets, and macaws. Following this, a trail leads to the Kichwa Interpretation Center "Kuri Muyu," managed by local women, providing insights into Kichwa culture.', hasBirdwatching: true, hasCulture: true },
                        pm: { description: 'The excursion proceeds to the second parrot and parakeet clay lick through the Terra Firme Forest. Return to the lodge via the main stream for wildlife observation. Night concludes with dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Sunrise hike to the observation tower in the Napo River area. Rising 36 meters high on a Ceibo tree, allowing observation of tanagers, macaws, toucans, and monkeys.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Hike through a terra firme forest to encounter diverse fauna like golden-mantled tamarin monkeys. Later, explore the lake by canoe to spy giant otters. Followed by a night walk for insects and reptiles.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture into trails winding through terra firme and swamp forests, seeking out wildlife like golden-mantled tamarins, capuchin monkeys, and sloths.', hasHiking: true },
                        pm: { description: 'Glide through streams in rowing canoes, offering more opportunities to spot unique wildlife. Immerse in regional biodiversity from the comfort of our facilities.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Return to the welcome area. Cruise through the Añangu stream enjoying the morning sounds. Switch to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'EXPLORE the Ecuadorian Amazon',
                id: 'adventure-tour-6d5n',
                name: 'Adventure Tour',
                title: 'Adventure Tour',
                description: 'Extend your stay and immerse yourself in the Amazon with our Extended Stay. Enjoy an extended experience that allows you to explore every corner, delve into the richness of the jungle, and connect with nature on a deeper level.',
                duration: '6 Days / 5 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the middle of the jungle', description: 'Unwind in our cozy rooms surrounded by nature, with views of the lush rainforest, where modern comfort meets the serenity of the jungle.' },
                    { title: 'River transportation', description: 'Travel comfortably on our river transport Coca - Napo Wildlife Center - Coca, enjoying the majestic Napo River as you head to the lodge and back to Coca.' },
                    { title: 'Entrance to Yasuni National Park', description: 'Explore the biodiversity of Yasuní National Park and visit the impressive parrot clay lick, a unique natural spectacle.' },
                    { title: 'Expert Guides', description: 'Community guide and naturalist bilingual guide will accompany you in every activity, sharing their knowledge of the culture and nature of the Amazon.' },
                    { title: 'All meals', description: 'Enjoy exquisite local cuisine made with organic ingredients from the region, offering you an authentic and flavorful experience.' },
                    { title: 'Equipment', description: 'We provide you with the necessary equipment (Rain poncho and rubber boots) so you can comfortably enjoy all the activities.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Embark on an exhilarating journey from Coca to the Napo Wildlife Center. Following a flight and a brief transfer, guests are warmly welcomed at a private dock with refreshments and a boxed lunch.', hasCanoe: true },
                        pm: { description: 'A two-hour motorboat ride along the Napo River is followed by a serene canoe trip through a creek to the lodge on a lake. Upon arrival, take in the breathtaking scenery of Lake Añangu, receive a welcome drink, and get briefed on hotel services before settling into comfortable jungle-view rooms.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Begins with an early visit to the parrot clay licks. Observe five species, including parrots, parakeets, and macaws. Following this, a trail leads to the Kichwa Interpretation Center "Kuri Muyu," managed by local women, providing insights into Kichwa culture.', hasBirdwatching: true, hasCulture: true },
                        pm: { description: 'The excursion proceeds to the second parrot and parakeet clay lick through the Terra Firme Forest. Return to the lodge via the main stream for wildlife observation. Night concludes with dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Sunrise hike to the observation tower in the Napo River area. Rising 36 meters high on a Ceibo tree, allowing observation of tanagers, macaws, toucans, and monkeys.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Hike through a terra firme forest to encounter diverse fauna like golden-mantled tamarin monkeys. Later, explore the lake by canoe to spy giant otters. Followed by a night walk for insects and reptiles.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture into trails winding through terra firme and swamp forests, seeking out wildlife like golden-mantled tamarins, capuchin monkeys, and sloths.', hasHiking: true },
                        pm: { description: 'Glide through streams in rowing canoes, offering more opportunities to spot unique wildlife. Immerse in regional biodiversity from the comfort of our facilities.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Venture to the Pañacocha lagoon. Navigate through a magnificent stream discovering wildlife like pink dolphins, monkeys, and macaws. Enjoy a boxed lunch exploring the Igapó Forest.', hasCanoe: true, hasHiking: true },
                        pm: { description: 'Return to Napo Wildlife Center in the afternoon. After a delicious dinner, take a night walk along the forest trails to discover nocturnal jungle life.', hasHiking: true }
                    },
                    {
                        day: 'DAY 6',
                        am: { description: 'Return to the welcome area. Cruise through the Añangu stream enjoying the morning sounds. Switch to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'EXPLORE the Ecuadorian Amazon',
                id: 'explore-tour-7d6n',
                name: 'Explore Tour',
                title: 'Explore Tour',
                description: 'Be a true explorer, uncovering the hidden secrets of the Amazon through exclusive routes and experiences guided by local experts.',
                duration: '7 Days / 6 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the middle of the jungle', description: 'Unwind in our cozy rooms surrounded by nature, with views of the lush rainforest, where modern comfort meets the serenity of the jungle.' },
                    { title: 'River transportation', description: 'Travel comfortably on our river transport Coca - Napo Wildlife Center - Coca, enjoying the majestic Napo River as you head to the lodge and back to Coca.' },
                    { title: 'Entrance to Yasuni National Park', description: 'Explore the biodiversity of Yasuní National Park and visit the impressive parrot clay lick, a unique natural spectacle.' },
                    { title: 'Expert Guides', description: 'Community guide and naturalist bilingual guide will accompany you in every activity, sharing their knowledge of the culture and nature of the Amazon.' },
                    { title: 'All meals', description: 'Enjoy exquisite local cuisine made with organic ingredients from the region, offering you an authentic and flavorful experience.' },
                    { title: 'Equipment', description: 'We provide you with the necessary equipment (Rain poncho and rubber boots) so you can comfortably enjoy all the activities.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Embark on an exhilarating journey from Coca to the Napo Wildlife Center. Following a flight and a brief transfer, guests are warmly welcomed at a private dock with refreshments and a boxed lunch.', hasCanoe: true },
                        pm: { description: 'A two-hour motorboat ride along the Napo River is followed by a serene canoe trip through a creek to the lodge on a lake. Upon arrival, take in the breathtaking scenery of Lake Añangu, receive a welcome drink, and get briefed on hotel services before settling into comfortable jungle-view rooms.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Begins with an early visit to the parrot clay licks. Observe five species, including parrots, parakeets, and macaws. Following this, a trail leads to the Kichwa Interpretation Center "Kuri Muyu," managed by local women, providing insights into Kichwa culture.', hasBirdwatching: true, hasCulture: true },
                        pm: { description: 'The excursion proceeds to the second parrot and parakeet clay lick through the Terra Firme Forest. Return to the lodge via the main stream for wildlife observation. Night concludes with dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Sunrise hike to the observation tower in the Napo River area. Rising 36 meters high on a Ceibo tree, allowing observation of tanagers, macaws, toucans, and monkeys.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Hike through a terra firme forest to encounter diverse fauna like golden-mantled tamarin monkeys. Later, explore the lake by canoe to spy giant otters. Followed by a night walk for insects and reptiles.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture into trails winding through terra firme and swamp forests, seeking out wildlife like golden-mantled tamarins, capuchin monkeys, and sloths.', hasHiking: true },
                        pm: { description: 'Glide through streams in rowing canoes, offering more opportunities to spot unique wildlife. Immerse in regional biodiversity from the comfort of our facilities.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Venture to Pañacocha Lake, situated across the Napo River. Enjoy a scenic creek navigation. Arrive and receive an orientation with a boxed lunch.', hasCanoe: true },
                        pm: { description: 'Explore Pañacocha to spot wildlife including pink dolphins, monkeys, and anacondas. Return to Napo Wildlife Center in the afternoon for dinner, followed by a night hike.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 6',
                        am: { description: 'Visit the Kichwa Añangu Community. Interact with local people, visit the school, communal areas, and a family home to learn about their culture and traditions.', hasCulture: true },
                        pm: { description: 'Lunch at Napo Cultural Center. Walk to a 40-meter observation tower to spot birds. Return to the lodge for a delicious dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 7',
                        am: { description: 'Return to the welcome area. Cruise through the Añangu stream enjoying the morning sounds. Switch to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'EXPLORE the Ecuadorian Amazon',
                id: 'cultural-adventure-8d7n',
                name: 'Cultural and Adventure',
                title: 'Cultural and Adventure',
                description: 'Be a true explorer, uncovering the hidden secrets of the Amazon through exclusive routes and experiences guided by local experts.',
                duration: '8 Days / 7 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the middle of the jungle', description: 'Unwind in our cozy rooms surrounded by nature, with views of the lush rainforest, where modern comfort meets the serenity of the jungle.' },
                    { title: 'River transportation', description: 'Travel comfortably on our river transport Coca - Napo Wildlife Center - Coca, enjoying the majestic Napo River as you head to the lodge and back to Coca.' },
                    { title: 'Entrance to Yasuni National Park', description: 'Explore the biodiversity of Yasuní National Park and visit the impressive parrot clay lick, a unique natural spectacle.' },
                    { title: 'Expert Guides', description: 'Community guide and naturalist bilingual guide will accompany you in every activity, sharing their knowledge of the culture and nature of the Amazon.' },
                    { title: 'All meals', description: 'Enjoy exquisite local cuisine made with organic ingredients from the region, offering you an authentic and flavorful experience.' },
                    { title: 'Equipment', description: 'We provide you with the necessary equipment (Rain poncho and rubber boots) so you can comfortably enjoy all the activities.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Embark on an exhilarating journey from Coca to the Napo Wildlife Center. Following a flight and a brief transfer, guests are warmly welcomed at a private dock with refreshments and a boxed lunch.', hasCanoe: true },
                        pm: { description: 'A two-hour motorboat ride along the Napo River is followed by a serene canoe trip through a creek to the lodge on a lake. Upon arrival, take in the breathtaking scenery of Lake Añangu, receive a welcome drink, and get briefed on hotel services before settling into comfortable jungle-view rooms.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Begins with an early visit to the parrot clay licks. Observe five species, including parrots, parakeets, and macaws. Following this, a trail leads to the Kichwa Interpretation Center "Kuri Muyu," managed by local women, providing insights into Kichwa culture.', hasBirdwatching: true, hasCulture: true },
                        pm: { description: 'The excursion proceeds to the second parrot and parakeet clay lick through the Terra Firme Forest. Return to the lodge via the main stream for wildlife observation. Night concludes with dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Sunrise hike to the observation tower in the Napo River area. Rising 36 meters high on a Ceibo tree, allowing observation of tanagers, macaws, toucans, and monkeys.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Hike through a terra firme forest to encounter diverse fauna like golden-mantled tamarin monkeys. Later, explore the lake by canoe to spy giant otters. Followed by a night walk for insects and reptiles.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture into trails winding through terra firme and swamp forests, seeking out wildlife like golden-mantled tamarins, capuchin monkeys, and sloths.', hasHiking: true },
                        pm: { description: 'Glide through streams in rowing canoes, offering more opportunities to spot unique wildlife. Immerse in regional biodiversity from the comfort of our facilities.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Venture to Pañacocha Lake, situated across the Napo River. Enjoy a scenic creek navigation. Arrive and receive an orientation with a boxed lunch.', hasCanoe: true },
                        pm: { description: 'Explore Pañacocha to spot wildlife including pink dolphins, monkeys, and anacondas. Return to Napo Wildlife Center in the afternoon for dinner, followed by a night hike.', hasHiking: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 6',
                        am: { description: 'Visit the Kichwa Añangu Community. Interact with local people, visit the school, communal areas, and a family home to learn about their culture and traditions.', hasCulture: true },
                        pm: { description: 'Lunch at Napo Cultural Center. Walk to a 40-meter observation tower to spot birds. Return to the lodge for a delicious dinner.', hasHiking: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 7',
                        am: { description: 'Explore the Tiputini trail on a 5 to 6-hour hike. Marvel at ancient trees, tropical birds, and spot mammals like golden-mantled tamarins and sloths.', hasHiking: true },
                        pm: { description: 'Continue the guided hike through terra firme forests, learning about the dense Amazonian biodiversity. Return to the lodge for dinner.', hasHiking: true }
                    },
                    {
                        day: 'DAY 8',
                        am: { description: 'Return to the welcome area. Cruise through the Añangu stream enjoying the morning sounds. Switch to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'Explore Yasuní, a birdwatcher’s paradise',
                id: 'birding-tour-4d3n',
                name: 'Birding Tour (4 Days)',
                title: 'Birding Tour 4 days / 3 nights',
                description: 'Enjoy an exclusive 4-day / 3-night Birding Tour for the best birdwatching experience in Yasuni National Park. Spot more than 600 species, from macaws and toucans to rare birds such as the Zigzag Heron or the Orange-crested Manakin, guided by expert naturalists at the Napo Wildlife Center.',
                duration: '4 Days / 3 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the jungle', description: 'Relax in comfortable rooms surrounded by nature, with views of the tropical forest, where modern comfort meets Amazonian serenity.' },
                    { title: 'River transport', description: 'Travel comfortably on our Coca – Napo Wildlife Center – Coca transfer, enjoying the majestic Napo River along the way.' },
                    { title: 'Access to Yasuní', description: 'Includes entry to Yasuní National Park and a visit to the parrot clay lick, a unique natural spectacle in the Amazon.' },
                    { title: 'Expert guides', description: 'Be accompanied by community and bilingual naturalist guides who share their knowledge of Amazonian culture and nature.' },
                    { title: 'Amazonian cuisine', description: 'All meals are included during your stay. Enjoy exquisite local cuisine prepared with organic ingredients.' },
                    { title: 'Activity gear', description: 'Includes a rain poncho and rubber boots so you can comfortably enjoy all excursions.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Arrival in Puerto Francisco de Orellana (El Coca). Brief transfer to our exclusive dock, refresh, and receive a boxed lunch.', hasCanoe: true },
                        pm: { description: 'Two-hour motorboat journey along the Napo River to the welcome area. Switch to a rowing canoe for a tranquil ride through a narrow creek to the lodge. Enjoy a welcome drink, orientation session, and settle into your accommodations.', hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Visit the sturdy canopy tower for privileged access to the rainforest canopy. Spot flocks of oropendolas, aracaris, tanagers, euphonias, cotingas, raptors, and numerous parrots and macaws.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore forest trails seeking woodcreepers, antbirds, tinamous, and the striking Black-necked Red Cotinga. Canoe rides around the lake and adjacent creeks to spot Zigzag Heron and Giant River Otter.', hasHiking: true, hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Visit the clay licks (saladeros) to witness hundreds of parrots and parakeets coming in to eat clay.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore the river-edge forest near the local community, looking for Turquoise and Magpie Tanagers, Rufous-headed Woodpecker, and Swallow-winged Puffbird.', hasBirdwatching: true, hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Return to the welcome area via rowing canoe through the Añangu stream. Transfer to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'Explore Yasuní, a birdwatcher’s paradise',
                id: 'birding-tour-5d4n',
                name: 'Birding Tour (5 Days)',
                title: 'Birding Tour 5 Days / 4 Nights',
                description: 'Experience the ultimate birdwatching adventure in Yasuní National Park with our 5-day / 4-night Birding Tour at the Napo Wildlife Center. This program is designed for birdwatchers and nature photographers who wish to deeply explore the rich habitats and microhabitats of the Ecuadorian Amazon.',
                duration: '5 Days / 4 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the jungle', description: 'Relax in comfortable rooms surrounded by nature, with views of the tropical forest, where modern comfort meets Amazonian serenity.' },
                    { title: 'River transport', description: 'Travel comfortably on our Coca – Napo Wildlife Center – Coca transfer, enjoying the majestic Napo River along the way.' },
                    { title: 'Access to Yasuní', description: 'Includes entry to Yasuní National Park and a visit to the parrot clay lick, a unique natural spectacle in the Amazon.' },
                    { title: 'Expert guides', description: 'Be accompanied by community and bilingual naturalist guides who share their knowledge of Amazonian culture and nature.' },
                    { title: 'Amazonian cuisine', description: 'All meals are included during your stay. Enjoy exquisite local cuisine prepared with organic ingredients.' },
                    { title: 'Activity gear', description: 'Includes a rain poncho and rubber boots so you can comfortably enjoy all excursions.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Arrival in Puerto Francisco de Orellana (El Coca). Brief transfer to our exclusive dock, refresh, and receive a boxed lunch.', hasCanoe: true },
                        pm: { description: 'Two-hour motorboat journey along the Napo River to the welcome area. Switch to a rowing canoe for a tranquil ride through a narrow creek to the lodge. Enjoy a welcome drink, orientation session, and settle into your accommodations.', hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Visit the sturdy canopy tower for privileged access to the rainforest canopy. Spot flocks of oropendolas, aracaris, tanagers, euphonias, cotingas, raptors, and numerous parrots and macaws.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore forest trails seeking woodcreepers, antbirds, tinamous, and the striking Black-necked Red Cotinga. Canoe rides around the lake and adjacent creeks to spot Zigzag Heron and Giant River Otter.', hasHiking: true, hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Visit the clay licks (saladeros) to witness hundreds of parrots and parakeets coming in to eat clay.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore the river-edge forest near the local community, looking for Turquoise and Magpie Tanagers, Rufous-headed Woodpecker, and Swallow-winged Puffbird.', hasBirdwatching: true, hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture further into different rich microhabitats accessible from the lodge. Continue your deep exploration tracking habitat specialists and impressive bird diversity.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Navigate the flooded forests and lake by canoe searching for Silvered and Plumbeous Antbirds. Relax at the lodge in the evening.', hasBirdwatching: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Return to the welcome area via rowing canoe through the Añangu stream. Transfer to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            },
            {
                category: 'Explore Yasuní, a birdwatcher’s paradise',
                id: 'birding-tour-6d5n',
                name: 'Birding Tour (6 Days)',
                title: 'Birding Tour 6 Days / 5 Nights',
                description: 'Dive deeper into birdwatching in Yasuní National Park with the 6-day / 5-night Birding Tour at Napo Wildlife Center. With more time at the lodge, you’ll observe iconic species, explore diverse ecosystems, and maximize your wildlife photography opportunities.',
                duration: '6 Days / 5 Nights',
                image: '/amazon.png',
                inclusions: [
                    { title: 'Comfort in the jungle', description: 'Relax in comfortable rooms surrounded by nature, with views of the tropical forest, where modern comfort meets Amazonian serenity.' },
                    { title: 'River transport', description: 'Travel comfortably on our Coca – Napo Wildlife Center – Coca transfer, enjoying the majestic Napo River along the way.' },
                    { title: 'Access to Yasuní', description: 'Includes entry to Yasuní National Park and a visit to the parrot clay lick, a unique natural spectacle in the Amazon.' },
                    { title: 'Expert guides', description: 'Be accompanied by community and bilingual naturalist guides who share their knowledge of Amazonian culture and nature.' },
                    { title: 'Amazonian cuisine', description: 'All meals are included during your stay. Enjoy exquisite local cuisine prepared with organic ingredients.' },
                    { title: 'Activity gear', description: 'Includes a rain poncho and rubber boots so you can comfortably enjoy all excursions.' }
                ],
                included: [
                    'Transfers in/out Coca - Napo Wildlife Center - Coca',
                    'All tours and services mentioned in the itinerary',
                    'Lodging and guided excursions',
                    'All meals as specified',
                    'Entrance to Yasuni National Park and parrot clay licks'
                ],
                notIncluded: [
                    'Flights (Quito – Coca – Quito)',
                    'Tips',
                    'Any additional expenses not mentioned in the itinerary'
                ],
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Arrival in Puerto Francisco de Orellana (El Coca). Brief transfer to our exclusive dock, refresh, and receive a boxed lunch.', hasCanoe: true },
                        pm: { description: 'Two-hour motorboat journey along the Napo River to the welcome area. Switch to a rowing canoe for a tranquil ride through a narrow creek to the lodge. Enjoy a welcome drink, orientation session, and settle into your accommodations.', hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Visit the sturdy canopy tower for privileged access to the rainforest canopy. Spot flocks of oropendolas, aracaris, tanagers, euphonias, cotingas, raptors, and numerous parrots and macaws.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore forest trails seeking woodcreepers, antbirds, tinamous, and the striking Black-necked Red Cotinga. Canoe rides around the lake and adjacent creeks to spot Zigzag Heron and Giant River Otter.', hasHiking: true, hasCanoe: true, hasBirdwatching: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Visit the clay licks (saladeros) to witness hundreds of parrots and parakeets coming in to eat clay.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Explore the river-edge forest near the local community, looking for Turquoise and Magpie Tanagers, Rufous-headed Woodpecker, and Swallow-winged Puffbird.', hasBirdwatching: true, hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Venture further into different rich microhabitats accessible from the lodge. Continue your deep exploration tracking habitat specialists and impressive bird diversity.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Navigate the flooded forests and lake by canoe searching for Silvered and Plumbeous Antbirds. Relax at the lodge in the evening.', hasBirdwatching: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Dedicate an extra day for comprehensive birdwatching and maximizing wildlife photography. Explore deeper trails to locate elusive species in western Amazonia.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'A final serene canoe ride tracking unique avifauna, followed by dinner and a chance to review the dozens of species recorded during your stay.', hasBirdwatching: true, hasCanoe: true }
                    },
                    {
                        day: 'DAY 6',
                        am: { description: 'Return to the welcome area via rowing canoe through the Añangu stream. Transfer to the motorized boat for the journey back to Coca to check in for your return flight.', hasCanoe: true },
                        pm: { description: 'Departure.' }
                    }
                ]
            }
        ]
    },
    {
        id: 'napo-cultural-center',
        slug: 'napo-cultural-center',
        name: 'Napo Cultural Center',
        location: 'Yasuní National Park',
        description: 'Situated on the banks of the Napo River, this eco-lodge focuses on cultural immersion with the Kichwa Añangu community. Enjoy high-comfort, eco-friendly cabins and immersive traditional activities while exploring the Yasuní ecosystem.',
        image: '/amazon.png',
        amenities: [
            '16 Independent Eco-Cabins',
            'Private Bathrooms with Hot Water',
            'Balconies with Hammocks',
            'Restaurant with Local Cuisine',
            'Bar and Souvenir Shop',
            'Community Tour Experiences'
        ],
        itineraries: [
            {
                id: 'cultural-explorer-4d3n',
                name: 'Cultural Explorer (4D/3N)',
                title: 'Ancestral Traditions Meets Amazonian Nature',
                description: 'A 4-day deep dive into the ancestral traditions of the Kichwa Añangu community, perfectly blended with nature walks and river exploration.',
                image: '/amazon.png',
                duration: '4 Days / 3 Nights',
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Arrival in Coca. Transfer by motorized canoe to the Napo Cultural Center.', hasCanoe: true },
                        pm: { description: 'Welcome by the community. Sunset walk along the Napo River.', hasHiking: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Visit to the ancestral Kichwa Añangu community. Participation in daily activities.', hasCulture: true },
                        pm: { description: 'Hike through the rainforest observing monkeys, birds, and learning about medicinal plants.', hasHiking: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Early trip to the Parrot Clay lick. Canoe ride on the Napo River.', hasBirdwatching: true, hasCanoe: true },
                        pm: { description: 'Kayaking in the streams or traditional craft workshop.', hasCanoe: true, hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Traditional guayusa tea ceremony at sunrise.', hasCulture: true },
                        pm: { description: 'Transfer back to Coca for your departure flight/bus.' }
                    }
                ]
            }
        ]
    },
    {
        id: 'mandari-panga',
        slug: 'mandari-panga',
        name: 'Mandari Panga',
        location: 'Yasuní National Park (Tiputini River)',
        description: 'Located deep within Yasuní National Park along the pristine Tiputini River, this authentic eco-camping experience offers comfortable safari-style tents. Perfect for adventurous travelers looking for an untouched rainforest environment.',
        image: '/amazon.png',
        amenities: [
            'Safari-style Tents on Elevated Platforms',
            'Direct River Views',
            'Composting Toilets & Solar Panels',
            'Exclusive Access to Tiputini River',
            'Minimal Light Pollution',
            'Kichwa Community Managed'
        ],
        itineraries: [
            {
                id: 'jungle-expedition-5d4n',
                name: 'Jungle Expedition (5D/4N)',
                title: 'Deep Wilderness Eco-Camping Experience',
                description: 'Experience 5 days of thrilling eco-camping and deep forest exploration along the remote Tiputini River.',
                image: '/amazon.png',
                duration: '5 Days / 4 Nights',
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Depart from Coca. Transfer to the remote Tiputini River.', hasCanoe: true },
                        pm: { description: 'Arrival at Mandari Panga Camp. Settle into safari tents and enjoy a night hike.', hasHiking: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Canoe trip along the Tiputini. Spot river dolphins, anacondas, and otters.', hasCanoe: true },
                        pm: { description: 'Deep jungle trek learning about endemic flora and tracking wildlife.', hasHiking: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Piranha fishing and exploring hidden lagoons.', hasCanoe: true },
                        pm: { description: 'Visit the local Kichwa community. Learn traditional basket weaving.', hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Birdwatching expedition. Spotting toucans and macaws.', hasBirdwatching: true },
                        pm: { description: 'Chocolate making demonstration with local cacao.', hasCulture: true }
                    },
                    {
                        day: 'DAY 5',
                        am: { description: 'Sunrise over the Tiputini. Final breakfast in the jungle.' },
                        pm: { description: 'Journey back to Coca.' }
                    }
                ]
            }
        ]
    },
    {
        id: 'sani-lodge',
        slug: 'sani-lodge',
        name: 'Sani Lodge',
        location: 'Yasuní Edge (Challuacocha Lake)',
        description: 'Situated on the stunning Challuacocha Lake, this sustainable lodge is fully operated by the Sani Isla Kichwa community. Experience world-class birdwatching, thrilling night hikes, and see the rich biodiversity of the Amazon.',
        image: '/amazon.png',
        amenities: [
            'Thatch-roofed Cabanas',
            'Private Bathrooms with Running Water',
            '100-foot Kapok Tree Observation Tower',
            'Open-air Dining Area & Bar',
            'Solar Electricity',
            'Lake Views & Camping Options'
        ],
        itineraries: [
            {
                id: 'biodiversity-focus-4d3n',
                name: 'Biodiversity Focus (4D/3N)',
                title: 'Wildlife Encounters & Canoe Explorations',
                description: 'Spend 4 days exploring the incredible biodiversity of the Challuacocha Lake, featuring canopy birdwatching and night hikes.',
                image: '/amazon.png',
                duration: '4 Days / 3 Nights',
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Boat ride from Coca to the Sani territory.', hasCanoe: true },
                        pm: { description: 'Hike to the lodge. Introductory canoe ride on Challuacocha Lake.', hasCanoe: true, hasHiking: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Climb the 100ft Kapok Observation Tower for canopy birdwatching.', hasBirdwatching: true, hasHiking: true },
                        pm: { description: 'Canoe excursion searching for black caimans and rare monkeys.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Hike the Chorongo Trail through primary rainforest.', hasHiking: true },
                        pm: { description: 'Visit the Sani Isla community center. Learn about typical food and customs.', hasCulture: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Early morning wildlife viewing. Final breakfast.' },
                        pm: { description: 'Return transfer to Coca.' }
                    }
                ]
            }
        ]
    },
    {
        id: 'nicky-amazon-lodge',
        slug: 'nicky-amazon-lodge',
        name: 'Nicky Amazon Lodge',
        location: 'Cuyabeno Wildlife Reserve',
        description: 'A traditional, indigenous-style lodge located in the Cuyabeno Wildlife Reserve. Features guided canoe excursions through the flooded "Igapó" forest and incredible night hikes.',
        image: '/amazon.png',
        amenities: [
            'Traditional Rustic Cabins',
            'Private Bathrooms & Hot Showers',
            'Balconies with Hammocks',
            'Restaurant & Bar',
            'Solar Energy',
            'Welcome Cocktail & Purified Water'
        ],
        itineraries: [
            {
                id: 'cuyabeno-expedition-4d3n',
                name: 'Cuyabeno Expedition (4D/3N)',
                title: 'Flooded Forests & Pink River Dolphins',
                description: 'Venture into the Cuyabeno Wildlife Reserve on this 4-day expedition through flooded "Igapó" forests seeking pink river dolphins and exotic fauna.',
                image: '/amazon.png',
                duration: '4 Days / 3 Nights',
                days: [
                    {
                        day: 'DAY 1',
                        am: { description: 'Transfer from Lago Agrio to the Cuyabeno River entrance.', hasCanoe: true },
                        pm: { description: 'Canoe ride to the lodge. Sunset viewing at Laguna Grande.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 2',
                        am: { description: 'Trek through the primary forest focusing on medicinal plants.', hasHiking: true },
                        pm: { description: 'Canoe exploration of the flooded Igapó forest. Swim in Laguna Grande.', hasCanoe: true }
                    },
                    {
                        day: 'DAY 3',
                        am: { description: 'Visit to a local Siona indigenous community. Cassava bread preparation.', hasCulture: true },
                        pm: { description: 'Night expedition searching for caimans and nocturnal insects.', hasCanoe: true, hasHiking: true }
                    },
                    {
                        day: 'DAY 4',
                        am: { description: 'Early morning birdwatching canoe trip.', hasBirdwatching: true, hasCanoe: true },
                        pm: { description: 'Return journey to Lago Agrio.' }
                    }
                ]
            }
        ]
    }
];
