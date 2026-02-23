import { notFound } from 'next/navigation';
import { amazonLodges } from '@/data/amazon-lodges';
import LodgeDetail from '@/components/amazon/LodgeDetail';
import type { Metadata } from 'next';
import JsonLd from '@/components/JsonLd';

interface PageProps {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return amazonLodges.map((lodge) => ({
        slug: lodge.slug,
    }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { slug } = await params;
    const lodge = amazonLodges.find((l) => l.slug === slug);

    if (!lodge) {
        return {
            title: 'Lodge Not Found',
        };
    }

    return {
        title: `${lodge.name} | Amazon Deep Jungle Lodge`,
        description: lodge.description,
    };
}

export default async function LodgePage({ params }: PageProps) {
    const { slug } = await params;
    const lodge = amazonLodges.find((l) => l.slug === slug);

    if (!lodge) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Product",
        "name": lodge.name,
        "description": lodge.description,
        "image": lodge.image,
        "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceCurrency": "USD"
        }
    };

    return (
        <>
            <JsonLd data={jsonLd} />
            <LodgeDetail lodge={lodge} />
        </>
    );
}
