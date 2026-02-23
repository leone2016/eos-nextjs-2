import { Ship, Mountain, Waves, Map, Bike, Landmark, Leaf } from 'lucide-react';

const experiences = [
    {
        title: "Cruise the Galapagos",
        description: "Navigate through the enchanted islands and witness unique wildlife that inspired scientific revolutions.",
        icon: Ship,
        color: "text-blue-500",
        bgColor: "bg-blue-500/10 dark:bg-blue-500/20",
    },
    {
        title: "Climb Volcanoes",
        description: "Conquer the Avenue of the Volcanoes and stand in awe of the world's most impressive Andean peaks.",
        icon: Mountain,
        color: "text-orange-500",
        bgColor: "bg-orange-500/10 dark:bg-orange-500/20",
    },
    {
        title: "Raft Spectacular Rivers",
        description: "Feel the rush of adrenaline as you navigate world-class rapids surrounded by lush tropical rainforests.",
        icon: Waves,
        color: "text-cyan-500",
        bgColor: "bg-cyan-500/10 dark:bg-cyan-500/20",
    },
    {
        title: "Trek Cloud Forests",
        description: "Hike through mystical paramo landscapes and cloud forests, discovering hidden waterfalls and exotic bird species.",
        icon: Map,
        color: "text-green-500",
        bgColor: "bg-green-500/10 dark:bg-green-500/20",
    },
    {
        title: "Bike the Countryside",
        description: "Pedal through breathtaking sceneries, indigenous villages, and ancient trails across the Andean highlands.",
        icon: Bike,
        color: "text-purple-500",
        bgColor: "bg-purple-500/10 dark:bg-purple-500/20",
    },
    {
        title: "Explore Historic Cities",
        description: "Step back in time as you wander through UNESCO World Heritage sites and stunning colonial architecture.",
        icon: Landmark,
        color: "text-amber-500",
        bgColor: "bg-amber-500/10 dark:bg-amber-500/20",
    },
];

export default function EcuadorExperiences() {
    return (
        <section className="py-24 bg-[#f6f5f5] dark:bg-gray-900 relative overflow-hidden">
            {/* Background Decorations */}
            <div className="absolute top-0 right-0 w-full h-[500px] bg-gradient-to-b from-[var(--color-accent)]/30 to-transparent dark:from-[var(--color-primary)]/5 pointer-events-none"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-4xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 tracking-tight">
                        Endless Ways to Experience Ecuador
                    </h2>
                    <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 font-light leading-relaxed">
                        Whether you want to <strong className="font-semibold text-[var(--color-primary)] dark:text-green-400">cruise the Galapagos islands</strong>, climb active volcanoes, or explore ancient cities—discover the unparalleled biodiversity, breathtaking sceneries, and vibrant cultures that Ecuador offers to every traveler.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                    {experiences.map((exp, index) => {
                        const Icon = exp.icon;
                        return (
                            <article
                                key={index}
                                className="group bg-gray-50 dark:bg-gray-800/80 p-8 rounded-[2rem] border border-gray-100 dark:border-gray-700/50 hover:bg-white dark:hover:bg-gray-800 hover:shadow-2xl hover:shadow-[var(--color-primary)]/5 transition-all duration-500 hover:-translate-y-2 overflow-hidden relative"
                            >
                                <div className="flex items-center gap-4 mb-4">
                                    <div className={`w-16 h-16 rounded-2xl ${exp.bgColor} flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform duration-500 shadow-inner`}>
                                        <Icon className={`w-8 h-8 ${exp.color}`} />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-[var(--color-primary)] dark:group-hover:text-green-400 transition-colors">
                                        {exp.title}
                                    </h3>
                                </div>

                                <p className="text-gray-600 dark:text-gray-400 leading-relaxed font-light relative z-10">
                                    {exp.description}
                                </p>
                            </article>
                        );
                    })}
                </div>

                {/* Highlight Section for Biodiversity */}
                <div className="mt-20 max-w-5xl mx-auto bg-[var(--color-secondary)] dark:bg-gray-800 rounded-[2.5rem] p-10 md:p-14 shadow-2xl overflow-hidden relative group">
                    <div className="absolute inset-0 bg-gradient-to-r from-[var(--color-primary)]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-1000"></div>

                    <div className="relative z-10 flex flex-col md:flex-row items-center gap-10">
                        <div className="w-20 h-20 bg-white/10 rounded-full flex items-center justify-center shrink-0 backdrop-blur-sm">
                            <Leaf className="w-10 h-10 text-[var(--color-primary)]" />
                        </div>
                        <div>
                            <h3 className="text-3xl font-bold text-white mb-4 font-serif">A World of Biodiversity Awaits</h3>
                            <p className="text-gray-300 text-lg leading-relaxed font-light">
                                From the lush Amazon rainforest to the peaks of the Andes and the shores of the Pacific, Ecuador is a sanctuary for Earth&apos;s most incredible flora and fauna. Every tour we craft is designed to immerse you respectfully in this natural wonder.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
