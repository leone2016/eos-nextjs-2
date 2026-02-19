import { notFound } from 'next/navigation';
import { cruises } from '@/data/cruises';
import CruiseDetail from '@/components/galapagos/CruiseDetail';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return cruises.map((cruise) => ({
        slug: cruise.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const cruise = cruises.find((c) => c.slug === slug);

    if (!cruise) {
        return {
            title: 'Cruise Not Found',
        };
    }

    return {
        title: `${cruise.name} Galapagos Cruise | Itineraries & Booking`,
        description: cruise.description,
    };
}

export default async function CruisePage({ params }: PageProps) {
    const { slug } = await params;
    const cruise = cruises.find((c) => c.slug === slug);

    if (!cruise) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": cruise.name,
        "description": cruise.description,
        "image": cruise.image,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <CruiseDetail cruise={cruise} />
        </>
    );
}
