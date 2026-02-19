import Link from 'next/link';

export default function Footer() {
    return (
        <footer className="bg-[var(--color-gray-dark)] text-white py-4 border-t border-white/10 mt-auto">
            <div className="container mx-auto px-6 md:px-12">

                {/* Top Section: Branding */}
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="flex items-center gap-3 mb-2">
                        {/* You might want to replace this with an actual Logo Image component if available */}
                        <div className="w-6 h-6 bg-white/10 rounded-sm flex items-center justify-center">
                            <span className="block w-3 h-3 bg-white/40 transform rotate-45"></span>
                        </div>
                        <h2 className="text-lg font-serif tracking-widest text-white">
                            <span className="font-light">eos Travel by Ecuador Quest</span>
                        </h2>
                    </div>
                </div>

                {/* Divider */}
                <hr className="border-white/10 mb-4" />

                {/* Middle Section: Columns */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-4 text-center md:text-left">

                    {/* Column 1: Address (Allows slightly more space: 4 cols) */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Address</h3>
                        <address className="not-italic text-gray-300 text-xs space-y-1 font-light leading-relaxed">
                            <p>Av. Jerónimo Carrion E8-132</p>
                            <p>Quito - Ecuador</p>
                        </address>
                    </div>

                    {/* Column 2: Contact (4 cols) */}
                    <div className="md:col-span-5 flex flex-col items-center md:items-start">
                        <h3 className="text-xs font-bold uppercase tracking-widest text-white mb-1">Contact Us</h3>
                        <div className="space-y-1 text-gray-300 text-xs font-light">
                            <p>Phone: <a href="tel:+593986945555" className="hover:text-[var(--color-brand-green)] transition-colors">+593 98 694 5555</a></p>
                            <p>Email: <a href="mailto:eos@eosecuador.com" className="hover:text-[var(--color-brand-green)] transition-colors">eos@eosecuador.com</a></p>
                        </div>
                    </div>

                    {/* Column 3: Social Icons (2 cols - aligned right on desktop) */}
                    <div className="md:col-span-2 flex flex-col items-center md:items-end justify-start gap-2">
                        {/* Facebook */}
                        <a href="#" className="transform hover:scale-110 transition-transform duration-300" aria-label="Facebook">

                        </a>

                        {/* Instagram */}
                        <a href="#" className="transform hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                        </a>

                        {/* TikTok */}
                        <a href="#" className="transform hover:scale-110 transition-transform duration-300" aria-label="TikTok">

                        </a>
                    </div>

                </div>

                {/* Footer Bottom */}
                <div className="text-center text-gray-500 text-xs font-light tracking-widest pt-2 border-t border-white/5">
                    <p className="text-[10px]">&copy; EOS Ecuador Travel. Developed by ECUADOR QUEST Company.&reg;</p>
                </div>
            </div>
        </footer>
    );
}
