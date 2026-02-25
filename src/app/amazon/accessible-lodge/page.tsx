import Image from 'next/image';
import Link from 'next/link';
import JsonLd from '@/components/JsonLd';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Amazon Accessible Lodge | Family-Friendly Rainforest Tours",
    description: "Experience the magic of the Amazon with comfort. Easy to reach, family-friendly eco-lodges perfect for relaxing jungle retreats in Ecuador.",
};

export default function AccessibleLodgePage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TouristDestination",
        "name": "Amazon Accessible Lodge",
        "description": "Comfortable, family-friendly and easily reachable rainforest eco-lodges in the Ecuadorian Amazon.",
        "url": "https://eosecuador.com/amazon/accessible-lodge"
    };

    return (
        <div className="min-h-screen pb-20 bg-background relative">
            <JsonLd data={jsonLd} />
            {/* Hero Section */}
            <section className="relative h-[60vh] flex items-center justify-center">
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/amazon.png"
                        alt="Accessible Amazon Lodge"
                        fill
                        className="object-cover"
                        sizes="100vw"
                        priority
                    />
                    <div className="absolute inset-0 bg-black/40" />
                </div>
                <div className="relative z-10 text-center text-white px-4">
                    <h1 className="text-5xl md:text-6xl font-serif font-bold mb-4">Accessible Lodges</h1>
                    <p className="text-xl font-light tracking-wide">Comfortable and captivating rainforest retreats</p>
                </div>
            </section>

            {/* SEO Description Section */}
            <section className="container mx-auto px-4 pt-16 pb-8 text-center max-w-4xl">
                <h2 className="text-3xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-6">Explore the Amazon in Comfort</h2>
                <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed font-light">
                    Our <strong>Accessible Amazon Lodges</strong> are explicitly designed to introduce you to the magnificent jungle without sacrificing the comforts of modern travel. Situated closer to regional hubs but deeply embedded in the forest, they are perfect for families, seniors, and travelers on a tighter schedule. These <strong> Ecuador eco-lodges</strong> boast excellent amenities, private bathrooms, and easily navigable trails. You&apos;ll still enjoy remarkable wildlife spotting along the Napo River, visit local indigenous communities, and experience the lush, green beauty of the <strong>Amazon rainforest</strong> with minimum travel hassle.
                </p>
            </section>

            {/* Content Placeholder */}
            <section className="container mx-auto px-4 py-8">
                <p className="text-center text-gray-500 italic dark:text-gray-400">Content for Accessible Lodges coming next...</p>
                <div className="flex justify-center mt-8">
                    <Link href="/amazon" className="text-[var(--color-brand-green)] hover:underline flex items-center gap-2">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18" />
                        </svg>
                        Back to Amazon overview
                    </Link>
                </div>
            </section>
        </div>
    );
}
