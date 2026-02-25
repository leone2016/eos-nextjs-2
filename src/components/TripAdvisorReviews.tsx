import { Quote } from 'lucide-react';

const reviews = [
    {
        name: "Rhin J",
        location: "Fernandina Beach, Florida",
        date: "dic de 2025 • Parejas",
        title: 'Leonardo "Leo" - the BEST tour guide!',
        text: "My husband and I spent a week touring the Andes with Leonardo over and including Christmas Day. Leo was the best guide you could ask for. He was extremely knowledgeable and professional, but also fun! He seemed to genuinely enjoy sharing his country, culture, food and energy with us. His enthusiasm and obvious pride in his country was infectious. He seemed to know everyone and had many suggestions for additional experiences. We went hiking at Cotopaxi and Chimborazo. We hiked down, kayaked, and rode donkeys back up Quilatoa Lagoon. We went horseback riding somewhere along the line. In Banos we went bike riding, paragliding, and had a spa day. We ate way too much. We would not have had such an enjoyable experience without him. He really made us feel like we were traveling with a friend, not a hired guide. Highly recommend!",
        rating: 5,
        link: "https://www.tripadvisor.co/ShowUserReviews-g294308-d4403439-r1044009673-Eos_Ecuador-Quito_Pichincha_Province.html"
    },
    {
        name: "Aaron G",
        location: "Chicago, Illinois",
        date: "oct de 2025 • Amigos",
        title: "Fantastic Itinerary",
        text: "David was fantastic in helping us plan our trip to The Galapagos! He recommended the Bonita yacht tour, and it was absolutely incredible. The trip exceeded our expectations in every way, from the itinerary to the accommodations and activities. We really appreciated his expertise, responsiveness, and thoughtful suggestions. It made the planning process seamelss. We'll definitely be using David for future trips and recommending him to anyone traveling to Ecuador!",
        rating: 5,
        link: "https://www.tripadvisor.co/ShowUserReviews-g294308-d4403439-r1037763079-Eos_Ecuador-Quito_Pichincha_Province.html"
    },
    {
        name: "Tommy S",
        location: "5 aportes",
        date: "mar de 2025 • Parejas",
        title: "Amazing experiences!",
        text: "We spent 3 days with Leonardo and they were just perfect. He took us to Quilotoa, Cotopaxi, Banos, and Mindo. Leonardo speaks perfect English and is very knowledgeable about his country and many other things! He taught and showed us a lot and we had a great time together. The itinerary was well planned and Leonardo always tried to make the most of each day. He motivated us to do things we wouldn't usually do and we are so grateful for that! If you're in Ecuador, definitely book some tours with this agency and ask for Leonardo!",
        rating: 5,
        link: "https://www.tripadvisor.co/ShowUserReviews-g294308-d4403439-r1000072804-Eos_Ecuador-Quito_Pichincha_Province.html"
    },
    /*{
        name: "LeslieBrownstyle",
        location: "Rochester, Estado de Nueva York",
        date: "oct de 2024",
        title: "The best travel guide ever!",
        text: "I never write reviews and yet I couldn't pass up the opportunity to sing EOS Ecudors praises. David was incredibly professional, found us an amazing deal on a superior boat, and walked me beautifully through the entire process of organizing the itinerary, and making all the reservations. I highly recommend David and Eos Ecuador",
        rating: 5,
        link: "https://www.tripadvisor.co/ShowUserReviews-g294308-d4403439-r981604828-Eos_Ecuador-Quito_Pichincha_Province.html"
    },
    {
        name: "Arno",
        location: "1 aporte",
        date: "oct de 2022",
        title: "Honeymoon to Ecuador and Galapagos",
        text: "We travelled to Ecuador and Galapagos for our honeymoon and arranged a couple of things via Eos. We are very happy and would recommend Eos to everyone travelling to this part of the world. We have absolutely no points of concern. We were in contact with David. His English is perfect and he is very knowledgeable about the things you can do in Ecuador and Galapagos. We had an extensive video call to discuss the various options and arranged everything via e-mail afterwards. Eos provides the option to fully arrange the trip from start to end, but we...",
        rating: 5,
        link: "https://www.tripadvisor.co/ShowUserReviews-g294308-d4403439-r865399247-Eos_Ecuador-Quito_Pichincha_Province.html"
    },
    {
        name: "Jamie van den Bergh",
        location: "4 aportes",
        date: "nov de 2021",
        title: "Ecuador and Galapagos Tour",
        text: "EOS travel booked us into excellent accommodation, great locations, spacious, clean and really friendly proprietors. The best part about EOS is that they helped guide us through the COVID crisis and were able to postpone a lot of events without us losing money. Everything was arranged like clockwork and while we were in Ecuador the agency kept in touch with us in case we had any last minute changes. The land tours and boat trips they organized were really interesting and a lot of fun. I would highly recommend EOS and appreciate all they have done for us.",
        rating: 5,
        link: "https://www.tripadvisor.co/Attraction_Review-g294308-d4403439-Reviews-Eos_Ecuador-Quito_Pichincha_Province.html"
    }*/
];

export default function TripAdvisorReviews() {
    return (
        <section className="py-32 bg-background relative overflow-hidden">
            {/* Dynamic Background Elements */}
            <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[var(--color-primary)]/5 to-transparent blur-3xl rounded-full translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-1/2 h-full bg-gradient-to-r from-green-500/5 to-transparent blur-3xl rounded-full -translate-x-1/2" />

            <div className="absolute inset-0 opacity-[0.03] pointer-events-none dark:opacity-[0.05]">
                <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_2px_2px,rgba(0,0,0,0.1)_1px,transparent_0)] bg-[length:40px_40px]"></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-7xl mx-auto flex flex-col items-center mb-20 text-center">
                    <p className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-400 text-xs font-bold tracking-[0.3em] uppercase mb-6 border border-green-200 dark:border-green-800/50">
                        <span className="w-2 h-2 rounded-full bg-[#00aa6c] animate-pulse"></span>
                        Testimonials
                    </p>
                    <h2 className="text-5xl md:text-7xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 tracking-tight">
                        What Our Travelers Say
                    </h2>

                    {/* Premium TripAdvisor Rating Badge */}
                    <div className="group relative inline-flex items-center gap-4 bg-white/80 dark:bg-gray-800/80 backdrop-blur-xl px-8 py-4 rounded-2xl shadow-2xl shadow-green-900/5 border border-white/20 dark:border-gray-700 hover:scale-105 transition-all duration-500 cursor-pointer">
                        <div className="absolute inset-0 bg-gradient-to-r from-green-500/10 to-transparent rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <div className="flex flex-col items-start relative z-10">
                            <span className="font-extrabold text-2xl text-gray-900 dark:text-white tracking-tight">Tripadvisor</span>
                            <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">Excellent 4.8 out of 5</span>
                        </div>
                        <div className="w-px h-12 bg-gray-200 dark:bg-gray-700 mx-2 relative z-10"></div>
                        <div className="flex gap-1.5 relative z-10">
                            {[1, 2, 3, 4, 5].map((circle) => (
                                <div key={circle} className="w-6 h-6 rounded-full bg-[#00aa6c] flex items-center justify-center">
                                    <div className="w-2.5 h-2.5 bg-white rounded-full"></div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {reviews.map((review, i) => (
                        <div
                            key={i}
                            className="group relative bg-white/60 dark:bg-gray-800/60 backdrop-blur-xl p-10 rounded-[2.5rem] shadow-xl shadow-gray-200/50 dark:shadow-none border border-white/50 dark:border-gray-700/50 flex flex-col hover:-translate-y-4 hover:shadow-2xl hover:shadow-[#00aa6c]/10 dark:hover:shadow-[#00aa6c]/5 transition-all duration-500"
                            style={{ transitionDelay: `${i * 100}ms` }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-br from-white/40 to-white/0 dark:from-white/5 dark:to-transparent rounded-[2.5rem] pointer-events-none"></div>

                            <Quote className="absolute top-8 right-8 w-16 h-16 text-gray-100 dark:text-gray-700/50 rotate-180 transition-transform duration-500 group-hover:scale-110 group-hover:text-[#00aa6c]/10" />

                            <div className="flex gap-1.5 mb-8 relative z-10">
                                {[...Array(review.rating)].map((_, index) => (
                                    <div key={index} className="w-4 h-4 rounded-full bg-[#00aa6c] shadow-sm shadow-[#00aa6c]/50"></div>
                                ))}
                            </div>

                            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6 relative z-10 leading-tight">
                                &quot;{review.title}&quot;
                            </h3>

                            <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow text-lg leading-relaxed relative z-10 font-light italic">
                                {review.text.length > 220 ? review.text.substring(0, 220) + "..." : review.text}
                            </p>

                            <a
                                href={review.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-[#00aa6c] font-bold hover:underline mb-8 relative z-10 w-fit group/link"
                            >
                                Leer más
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-4 h-4 transition-transform group-hover/link:translate-x-1">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m8.25 4.5 7.5 7.5-7.5 7.5" />
                                </svg>
                            </a>

                            <div className="flex items-center gap-5 mt-auto relative z-10 pt-6 border-t border-gray-100 dark:border-gray-700/50">
                                <div className="w-14 h-14 bg-gradient-to-br from-[#00aa6c] to-[#008855] rounded-full flex items-center justify-center font-bold text-white shadow-lg shadow-[#00aa6c]/30 text-xl group-hover:scale-110 transition-transform duration-500">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <p className="font-bold text-gray-900 dark:text-white text-base">{review.name}</p>
                                    <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 flex items-center gap-2">
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-3.5 h-3.5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
                                        </svg>
                                        {review.location}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
