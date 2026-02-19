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
                            <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="#1877F2" />
                                <path d="M22.868 20.488L23.633 15.5H18.848V12.262C18.848 10.907 19.513 9.584 21.644 9.584H23.821V5.485C23.821 5.485 21.844 5.148 19.954 5.148C16.023 5.148 13.439 7.518 13.439 11.838V15.5H9.088V20.488H13.439V32.535C14.301 32.671 15.188 32.741 16.096 32.741C16.969 32.741 17.824 32.676 18.66 32.551L18.848 32.518V20.488H22.868Z" fill="white" />
                            </svg>
                        </a>

                        {/* Instagram */}
                        <a href="#" className="transform hover:scale-110 transition-transform duration-300" aria-label="Instagram">
                            <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="40" height="40" rx="10" fill="url(#paint0_radial_instagram)" />
                                <path d="M20 9.72974C23.344 9.72974 23.74 9.74274 25.06 9.80274C26.279 9.85874 26.936 10.0627 27.377 10.2337C27.962 10.4607 28.379 10.7327 28.817 11.1707C29.255 11.6087 29.528 12.0257 29.754 12.6107C29.926 13.0517 30.129 13.7087 30.185 14.9277C30.245 16.2477 30.258 16.6437 30.258 19.9877C30.258 23.3317 30.245 23.7277 30.185 25.0477C30.129 26.2667 29.926 26.9237 29.754 27.3647C29.528 27.9497 29.255 28.3667 28.817 28.8047C28.379 29.2427 27.962 29.5157 27.377 29.7417C26.936 29.9137 26.279 30.1167 25.06 30.1727C23.74 30.2327 23.344 30.2457 20 30.2457C16.656 30.2457 16.26 30.2327 14.94 30.1727C13.721 30.1167 13.064 29.9137 12.623 29.7417C12.038 29.5147 11.621 29.2427 11.183 28.8047C10.745 28.3667 10.472 27.9497 10.246 27.3647C10.074 26.9237 9.871 26.2667 9.815 25.0477C9.754 23.7277 9.741 23.3317 9.741 19.9877C9.741 16.6437 9.754 16.2477 9.815 14.9277C9.871 13.7087 10.074 13.0517 10.246 12.6107C10.473 12.0257 10.745 11.6087 11.183 11.1707C11.621 10.7327 12.038 10.4607 12.623 10.2337C13.064 10.0627 13.721 9.85874 14.94 9.80274C16.26 9.74274 16.656 9.72974 20 9.72974ZM20 7.89274C16.598 7.89274 16.172 7.90774 14.829 7.96874C13.488 8.02974 12.573 8.24274 11.772 8.55374C10.944 8.87574 10.242 9.30374 9.544 10.0027C8.845 10.7007 8.417 11.4027 8.095 12.2307C7.784 13.0317 7.571 13.9467 7.509 15.2877C7.448 16.6307 7.433 17.0567 7.433 20.4587V19.5167C7.433 22.9187 7.448 23.3447 7.509 24.6877C7.571 26.0287 7.784 26.9437 8.095 27.7447C8.417 28.5727 8.845 29.2747 9.544 29.9737C10.242 30.6717 10.944 31.0997 11.772 31.4217C12.573 31.7327 13.488 31.9457 14.829 32.0067C16.172 32.0677 16.598 32.0827 20 32.0827C23.402 32.0827 23.828 32.0677 25.171 32.0067C26.512 31.9457 27.427 31.7327 28.228 31.4217C29.056 31.0997 29.758 30.6717 30.456 29.9737C31.155 29.2757 31.583 28.5727 31.905 27.7447C32.216 26.9437 32.429 26.0287 32.491 24.6877C32.552 23.3447 32.567 22.9187 32.567 19.5167C32.567 16.1147 32.552 15.6887 32.491 14.3457C32.429 13.0047 32.216 12.0897 31.905 11.2887C31.583 10.4607 31.155 9.75874 30.456 9.06074C29.758 8.36174 29.056 7.93474 28.228 7.61274C27.427 7.30174 26.512 7.08874 25.171 7.02774C23.828 6.96674 23.402 6.95174 20 6.95174V7.89274ZM20 13.3857C16.353 13.3857 13.397 16.3417 13.397 19.9877C13.397 23.6337 16.353 26.5897 20 26.5897C23.647 26.5897 26.603 23.6337 26.603 19.9877C26.603 16.3417 23.647 13.3857 20 13.3857ZM20 24.7527C17.368 24.7527 15.234 22.6187 15.234 19.9877C15.234 17.3567 17.368 15.2227 20 15.2227C22.632 15.2227 24.766 17.3567 24.766 19.9877C24.766 22.6187 22.632 24.7527 20 24.7527ZM26.985 11.7947C26.985 12.4707 26.437 13.0187 25.761 13.0187C25.085 13.0187 24.537 12.4707 24.537 11.7947C24.537 11.1187 25.085 10.5707 25.761 10.5707C26.437 10.5707 26.985 11.1187 26.985 11.7947Z" fill="white" />
                                <defs>
                                    <radialGradient id="paint0_radial_instagram" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(14.5 35) rotate(-55.772) scale(40.4578 40.5408)">
                                        <stop stopColor="#FEC053" />
                                        <stop offset="0.327" stopColor="#F2203E" />
                                        <stop offset="0.648" stopColor="#B729A8" />
                                        <stop offset="1" stopColor="#5342D6" />
                                    </radialGradient>
                                </defs>
                            </svg>
                        </a>

                        {/* TikTok */}
                        <a href="#" className="transform hover:scale-110 transition-transform duration-300" aria-label="TikTok">
                            <svg className="w-5 h-5" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="20" cy="20" r="20" fill="black" />
                                <path d="M28.022 14.865C27.02 14.931 25.86 14.531 24.965 13.882C24.086 13.245 23.36 12.015 23.36 10.899V10.463H19.721V22.427C19.721 24.787 17.781 26.702 15.391 26.702C13.001 26.702 11.061 24.787 11.061 22.427C11.061 20.067 13.001 18.152 15.391 18.152C15.586 18.152 15.777 18.167 15.963 18.196V14.613C12.35 14.908 9.389 19.32 9.389 23.185C9.389 26.974 12.396 30.046 16.106 30.046C19.816 30.046 22.823 26.974 22.823 23.185V17.026C24.161 17.994 25.799 18.57 27.575 18.604V14.895C27.727 14.895 27.876 14.885 28.022 14.865Z" fill="#FE2C55" />
                                <path d="M28.022 14.865C27.876 14.885 27.727 14.895 27.575 14.895V18.604C25.799 18.57 24.161 17.994 22.823 17.026V13.881C25.101 13.881 27.061 14.964 28.022 14.865Z" fill="#25F4EE" />
                                <path d="M22.823 13.881V17.026C22.823 17.026 22.823 17.026 22.823 17.026C21.485 17.994 19.847 18.57 18.071 18.604V22.427C18.071 22.427 18.071 22.427 18.071 22.427C18.071 26.216 15.064 29.288 11.354 29.288C7.644 29.288 4.637 26.216 4.637 22.427C4.637 18.638 7.644 15.566 11.354 15.566C11.549 15.566 11.74 15.581 11.926 15.61V11.977C8.243 12.33 5.372 16.793 5.372 20.709C5.372 24.498 8.379 27.57 12.089 27.57C15.799 27.57 18.806 24.498 18.806 20.709V14.899C18.806 13.783 18.08 12.553 17.201 11.916C16.306 11.267 15.146 10.867 14.144 10.801V7.129H18.806V10.463C18.806 11.579 19.532 12.809 20.411 13.446C21.306 14.095 22.466 14.495 23.468 14.561V14.865C23.257 14.851 23.033 14.673 22.823 13.881Z" fill="white" />
                            </svg>
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
