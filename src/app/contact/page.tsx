import Image from 'next/image';
import JsonLd from '@/components/JsonLd';
import InquiryForm from '@/components/InquiryForm';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: "Contact Us | EOS Ecuador Travel Agency",
    description: "Get in touch with EOS Ecuador to plan your trip. Contact us via phone, email, or visit our office in Quito.",
};

export default function ContactPage() {
    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "TravelAgency",
        "name": "EOS Ecuador Travel",
        "image": "https://eosecuador.com/logo-eos.svg",
        "telephone": "+593 98 694 5555",
        "email": "eos@eosecuador.com",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Av. Jerónimo Carrion E8-132",
            "addressLocality": "Quito",
            "addressCountry": "EC"
        }
    };

    return (
        <div className="flex flex-col min-h-screen bg-[var(--background)] overflow-hidden">
            <JsonLd data={jsonLd} />

            {/* Hero Section */}
            <section className="relative h-[70vh] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0 z-0 scale-105">
                    <Image
                        src="/hero.jpg"
                        alt="Contact EOS Ecuador"
                        fill
                        priority
                        className="object-cover opacity-90"
                        sizes="100vw"
                        quality={95}
                    />
                    <div className="absolute inset-0 bg-black/40 z-10" />

                </div>

                {/* Floating Elements */}
                <div className="absolute top-1/4 left-10 w-64 h-64 bg-[var(--color-primary)]/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-[var(--color-primary)]/5 rounded-full blur-[120px] animate-pulse transition-all duration-1000"></div>

                <div className="relative z-10 text-center text-white px-4 max-w-4xl">
                    <span className="inline-block px-4 py-1 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-[10px] sm:text-xs font-bold tracking-[0.4em] uppercase mb-8 animate-fade-in">
                        Begin Your Journey
                    </span>
                    <h1 className="text-6xl md:text-8xl font-serif font-bold mb-8 drop-shadow-2xl tracking-tight leading-[0.9]">
                        Let&apos;s Plan <br />
                        <span className="italic text-[var(--color-primary)]">Something Extraordinary</span>
                    </h1>
                </div>

                {/* Bottom Wave/Pattern */}
                <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-[var(--background)] to-transparent z-10"></div>
            </section>

            {/* Contact Content Area */}
            <section className="relative py-32 -mt-20 z-20">
                <div className="container mx-auto px-4">
                    <div className="max-w-7xl mx-auto grid lg:grid-cols-12 gap-16 xl:gap-24 items-start">

                        {/* Information Column (4 cols) */}
                        <div className="lg:col-span-4 space-y-16">
                            <div className="relative">
                                <div className="absolute -left-10 top-0 w-1 h-20 bg-[var(--color-primary)] rounded-full hidden lg:block"></div>
                                <h2 className="text-4xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-8 leading-tight">
                                    Tailored <br /> Expertise
                                </h2>
                                <p className="text-gray-500 dark:text-gray-400 leading-relaxed text-lg font-light">
                                    Our destination specialists are ready to help you navigate the wonders of <span className="text-[var(--color-primary)] font-bold">Ecuador & the Galapagos Islands</span>. Whether you seek a private expedition or a classic cruise, we take care of every detail.
                                </p>
                            </div>

                            {/* Contact Info Cards */}
                            <div className="grid gap-6">
                                {[
                                    {
                                        title: 'Direct Support',
                                        subtitle: 'WhatsApp / Mobile',
                                        value: '+593 98 694 5555',
                                        link: 'https://wa.me/593986945555',
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z" />
                                            </svg>
                                        )
                                    },
                                    {
                                        title: 'Email Inquiry',
                                        subtitle: 'Specialist Direct',
                                        value: 'eos@eosecuador.com',
                                        link: 'mailto:eos@eosecuador.com',
                                        icon: (
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75" />
                                            </svg>
                                        )
                                    }

                                ].map((item, idx) => (
                                    <div key={idx} className="group relative p-6 bg-white dark:bg-white/5 rounded-[2rem] border border-gray-100 dark:border-white/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[var(--color-primary)]/5">
                                        <div className="flex items-center gap-5">
                                            <div className="w-12 h-12 rounded-2xl bg-gray-50 dark:bg-white/5 text-[var(--color-primary)] flex items-center justify-center group-hover:bg-[var(--color-primary)] group-hover:text-white transition-all duration-500">
                                                {item.icon}
                                            </div>
                                            <div>
                                                <h3 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-500 dark:text-gray-400 mb-0.5">{item.subtitle}</h3>
                                                {item.link ? (
                                                    <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-lg font-bold text-[var(--color-secondary)] dark:text-gray-200 hover:text-[var(--color-primary)] transition-colors">
                                                        {item.value}
                                                    </a>
                                                ) : (
                                                    <p className="text-lg font-bold text-[var(--color-secondary)] dark:text-gray-200">
                                                        {item.value}
                                                    </p>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Inquiry Form (8 cols) */}
                        <div className="lg:col-span-8 relative">
                            {/* Decorative Pattern Background */}
                            <div className="absolute -right-20 -bottom-20 w-96 h-96 opacity-5 dark:opacity-10 pointer-events-none overflow-hidden hidden xl:block">
                                <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
                                    <path d="M0,100 C20,80 40,80 60,100 C80,120 100,120 120,100" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    <path d="M0,80 C20,60 40,60 60,80 C80,100 100,100 120,80" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                    <path d="M0,60 C20,40 40,40 60,60 C80,80 100,80 120,60" fill="none" stroke="currentColor" strokeWidth="0.5" />
                                </svg>
                            </div>

                            <InquiryForm />
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}
