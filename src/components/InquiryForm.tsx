'use client';

import React, { useState, useEffect } from 'react';

interface InquiryFormProps {
    selectedBoat?: string;
}

const INTERESTS = [
    {
        id: 'landTours',
        label: 'Land Tours',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z" />
            </svg>
        )
    },
    {
        id: 'amazonLodges',
        label: 'Amazon Lodges',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 0.778-0.099 1.533-0.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-0.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-0.856 0.12-1.683 0.344-2.467" />
            </svg>
        )
    },
    {
        id: 'galapagosFlight',
        label: 'Flights',
        icon: (
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 12 3.269 3.125A59.769 59.769 0 0 1 21.485 12 59.768 59.768 0 0 1 3.27 20.875L5.999 12Zm0 0h7.5" />
            </svg>
        )
    }
];

export default function InquiryForm({ selectedBoat }: InquiryFormProps) {
    const [formData, setFormData] = useState({
        adults: 1,
        children: 0,
        interests: {
            landTours: false,
            amazonLodges: false,
            galapagosFlight: false,
        },
        comments: selectedBoat ? `I'm interested in booking the ${selectedBoat} cruise. ` : '',
        contactPerson: '',
        email: '',
        phone: '',
        referenceName: '',
        agencyName: '',
        howFound: '',
        newsletter: false,
    });

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const params = new URLSearchParams(window.location.search);
            const subject = params.get('subject');
            if (subject) {
                const cleanSubject = subject.replace(/^Inquiry about (the )?/, '');
                // eslint-disable-next-line react-hooks/set-state-in-effect
                setFormData(prev => ({
                    ...prev,
                    comments: `I'm interested in booking the ${cleanSubject}. `
                }));
            }
        }
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        if (type === 'checkbox') {
            const checked = (e.target as HTMLInputElement).checked;
            if (name.startsWith('interest_')) {
                const interestKey = name.replace('interest_', '');
                setFormData(prev => ({
                    ...prev,
                    interests: { ...prev.interests, [interestKey]: checked }
                }));
            } else {
                setFormData(prev => ({ ...prev, [name]: checked }));
            }
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
    };

    const toggleInterest = (id: string) => {
        setFormData(prev => ({
            ...prev,
            interests: {
                ...prev.interests,
                //@ts-expect-error - Dynamic key access on interests object
                [id]: !prev.interests[id]
            }
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        alert('Thank you for your inquiry! We will get back to you soon.');
    };

    const inputClasses = "w-full bg-white/40 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl p-4 outline-none focus:ring-2 focus:ring-[var(--color-primary)]/30 focus:border-[var(--color-primary)] transition-all duration-300 placeholder:text-gray-500 dark:placeholder:text-gray-400 backdrop-blur-sm";
    const labelClasses = "block text-xs uppercase tracking-[0.1em] font-black text-gray-700 dark:text-gray-300 mb-2 ml-1";

    return (
        <div className="bg-white/40 dark:bg-[#121212]/60 backdrop-blur-xl rounded-[2.5rem] overflow-hidden border border-white dark:border-white/5 shadow-[0_20px_50px_rgba(0,0,0,0.05)] transition-all duration-500">
            <div className="p-8 md:p-14">

                {/* Header Section */}
                <div className="mb-14 relative">
                    <div className="absolute -top-6 -left-6 w-20 h-20 bg-[var(--color-primary)]/10 rounded-full blur-2xl animate-pulse"></div>
                    <div className="relative">
                        <h2 className="text-4xl md:text-6xl font-serif font-bold text-[var(--color-secondary)] dark:text-white mb-6 leading-tight">
                            Start Your <br />
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--color-primary)] to-[#8bbd2e]">Ecuadorian Adventure</span>
                        </h2>
                        <div className="h-1 w-24 bg-gradient-to-r from-[var(--color-primary)] to-transparent rounded-full mb-6"></div>
                        <p className="text-gray-500 dark:text-gray-400 max-w-xl text-lg font-light leading-relaxed">
                            Share your travel dreams with us. Our destination experts will curate a bespoke journey tailored just for you.
                        </p>
                    </div>
                </div>

                <form onSubmit={handleSubmit} className="space-y-14">

                    {/* Step 1: Trip Details */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="flex-none w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold font-serif text-xl border border-[var(--color-primary)]/20 shadow-inner">1</span>
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] dark:text-white">Trip Essentials</h3>
                        </div>

                        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
                            {/* Passengers */}
                            <div className="lg:col-span-4 grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="adults" className={labelClasses}>Adults</label>
                                    <div className="relative group">
                                        <input
                                            id="adults"
                                            type="number"
                                            name="adults"
                                            min="1"
                                            value={formData.adults}
                                            onChange={handleChange}
                                            className={`${inputClasses} text-center font-bold text-lg`}
                                        />
                                        <div className="absolute inset-y-0 right-3 flex flex-col justify-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <div className="w-4 h-4 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer">▲</div>
                                            <div className="w-4 h-4 text-gray-400 hover:text-[var(--color-primary)] cursor-pointer">▼</div>
                                        </div>
                                    </div>
                                </div>
                                <div>
                                    <label htmlFor="children" className={labelClasses}>Children</label>
                                    <input
                                        id="children"
                                        type="number"
                                        name="children"
                                        min="0"
                                        value={formData.children}
                                        onChange={handleChange}
                                        className={`${inputClasses} text-center font-bold text-lg`}
                                    />
                                </div>
                            </div>

                            {/* Interest Cards */}
                            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
                                {INTERESTS.map((item) => (
                                    <div
                                        key={item.id}
                                        onClick={() => toggleInterest(item.id)}
                                        className={`relative p-5 rounded-2xl border-2 transition-all duration-300 cursor-pointer flex flex-col items-center justify-center gap-3 text-center
                                            ${formData.interests[item.id as keyof typeof formData.interests]
                                                ? 'bg-[var(--color-primary)] border-[var(--color-primary)] text-white shadow-[0_10px_20px_rgba(92,124,30,0.2)]'
                                                : 'bg-white/50 dark:bg-white/5 border-gray-100 dark:border-white/5 text-gray-600 dark:text-gray-400 hover:border-[var(--color-primary)]/30'
                                            }`}
                                    >
                                        <div className={formData.interests[item.id as keyof typeof formData.interests] ? 'text-white' : 'text-[var(--color-primary)]'}>
                                            {item.icon}
                                        </div>
                                        <span className="text-xs font-bold uppercase tracking-wider">{item.label}</span>
                                        {formData.interests[item.id as keyof typeof formData.interests] && (
                                            <div className="absolute top-2 right-2">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                                                    <path fillRule="evenodd" d="M10 18a8 8 0 1 0 0-16 8 8 0 0 0 0 16Zm3.857-9.809a.75.75 0 0 0-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 1 0-1.06 1.061l2.5 2.5a.75.75 0 0 0 1.137-.089l4.01-5.51Z" clipRule="evenodd" />
                                                </svg>
                                            </div>
                                        )}
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Step 2: Personal Message */}
                    <div className="space-y-8">
                        <div className="flex items-center gap-4">
                            <span className="flex-none w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold font-serif text-xl border border-[var(--color-primary)]/20 shadow-inner">2</span>
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] dark:text-white">Your Vision</h3>
                        </div>
                        <div className="relative">
                            <label htmlFor="comments" className="sr-only">Detailed Inquiry Comments</label>
                            <textarea
                                id="comments"
                                name="comments"
                                rows={6}
                                value={formData.comments}
                                onChange={handleChange}
                                className={`${inputClasses} resize-none min-h-[160px]`}
                                placeholder="Tell us more about your dream dates, preferred pace, or specific islands you'd like to explore..."
                            ></textarea>
                            <div className="absolute top-4 right-4 text-[var(--color-primary)]/30">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    {/* Step 3: Contact Context */}
                    <div className="space-y-10">
                        <div className="flex items-center gap-4">
                            <span className="flex-none w-10 h-10 rounded-full bg-[var(--color-primary)]/10 text-[var(--color-primary)] flex items-center justify-center font-bold font-serif text-xl border border-[var(--color-primary)]/20 shadow-inner">3</span>
                            <h3 className="text-2xl font-serif font-bold text-[var(--color-secondary)] dark:text-white">How to Reach You</h3>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
                            {[
                                { name: 'contactPerson', label: 'Full Name *', placeholder: 'Leonardo Da Vinci', type: 'text', required: true },
                                { name: 'email', label: 'Email Address *', placeholder: 'leo@traveler.com', type: 'email', required: true },
                                { name: 'phone', label: 'Secure Phone', placeholder: '+593 9 888 7777', type: 'tel' }


                            ].map((field) => (
                                <div key={field.name} className="space-y-1">
                                    <label htmlFor={field.name} className={labelClasses}>{field.label}</label>
                                    <input
                                        id={field.name}
                                        type={field.type}
                                        name={field.name}
                                        required={field.required}
                                        //@ts-expect-error - Dynamic field name access
                                        value={formData[field.name as keyof typeof formData]}
                                        onChange={handleChange}
                                        className={inputClasses}
                                        placeholder={field.placeholder}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Submit Area */}
                    <div className="pt-10 border-t border-gray-100 dark:border-white/5 flex flex-col items-center">
                        <label htmlFor="newsletter" className="flex items-center group cursor-pointer mb-10 w-full max-w-lg">
                            <div className="relative flex items-center justify-center flex-none">
                                <input
                                    id="newsletter"
                                    type="checkbox"
                                    name="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleChange}
                                    className="peer appearance-none w-6 h-6 border-2 border-gray-200 dark:border-white/10 rounded-full checked:bg-[var(--color-primary)] checked:border-[var(--color-primary)] transition-all duration-300"
                                />
                                <svg className="absolute w-3 h-3 text-white opacity-0 peer-checked:opacity-100 transition-opacity pointer-events-none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
                                    <polyline points="20 6 9 17 4 12"></polyline>
                                </svg>
                            </div>
                            <span className="ml-4 text-xs tracking-tight text-gray-500 dark:text-gray-400 group-hover:text-gray-700 dark:group-hover:text-gray-200 transition-colors leading-relaxed">
                                Join our community of explorers to receive curated inspiration and unique private offers.
                            </span>
                        </label>

                        <button
                            type="submit"
                            className="group relative inline-flex items-center justify-center px-12 py-6 font-black text-white dark:text-black transition-all duration-500 bg-[var(--color-primary)] rounded-[2rem] hover:bg-[var(--color-primary-dark)] shadow-[0_15px_30px_rgba(92,124,30,0.3)] hover:-translate-y-2 active:scale-95 overflow-hidden w-full md:w-auto"
                        >
                            <span className="relative z-10 text-lg uppercase tracking-[0.3em]">Send Inquiry</span>
                            <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000 ease-in-out"></div>
                        </button>

                        <div className="mt-10 flex items-center gap-6 text-xs text-gray-600 dark:text-gray-300 font-bold uppercase tracking-widest bg-gray-50 dark:bg-white/5 px-8 py-3 rounded-full">
                            <span className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                                    <path fillRule="evenodd" d="M10 1a4.5 4.5 0 0 0-4.5 4.5V9H5a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-6a2 2 0 0 0-2-2h-0.5V5.5A4.5 4.5 0 0 0 10 1ZM13 9V5.5a3 3 0 1 0-6 0V9h6Z" clipRule="evenodd" />
                                </svg>
                                SSL Secure
                            </span>
                            <span className="flex items-center gap-2">
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4 text-[var(--color-primary)]">
                                    <path d="M10 2a0.75 0.75 0 0 1 0.75 0.75v1.5a0.75 0.75 0 0 1-1.5 0v-1.5A0.75 0.75 0 0 1 10 2ZM10 15a0.75 0.75 0 0 1 0.75 0.75v1.5a0.75 0.75 0 0 1-1.5 0v-1.5A0.75 0.75 0 0 1 10 15ZM10 7a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM15.657 4.343a0.75 0.75 0 0 1 0 1.06l-1.061 1.061a0.75 0.75 0 1 1-1.06-1.06l1.06-1.061a0.75 0.75 0 0 1 1.061 0ZM6.464 13.536a0.75 0.75 0 0 1 0 1.06l-1.06 1.061a0.75 0.75 0 0 1-1.061-1.06l1.06-1.061a0.75 0.75 0 0 1 1.061 0ZM18 10a0.75 0.75 0 0 1-0.75 0.75h-1.5a0.75 0.75 0 0 1 0-1.5h1.5A0.75 0.75 0 0 1 18 10ZM5 10a0.75 0.75 0 0 1-0.75 0.75h-1.5a0.75 0.75 0 0 1 0-1.5h1.5A0.75 0.75 0 0 1 5 10ZM15.657 15.657a0.75 0.75 0 0 1-1.06 0l-1.061-1.06a0.75 0.75 0 0 1 1.06-1.061l1.061 1.06a0.75 0.75 0 0 1 0 1.061ZM6.464 6.464a0.75 0.75 0 0 1-1.06 0l-1.061-1.06a0.75 0.75 0 0 1 1.061-1.061l1.06 1.06a0.75 0.75 0 0 1 0 1.061Z" />
                                </svg>
                                24h Response
                            </span>
                        </div>
                    </div>

                </form>
            </div>
        </div>
    );
}
