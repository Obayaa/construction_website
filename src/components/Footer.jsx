
import { MapPin, Mail, Phone, ArrowRight, Twitter, Linkedin, Instagram, Facebook } from 'lucide-react';

// --- IMAGE IMPORTS ---
// NOTE: Please ensure these image paths are correct in your project structure.
import logo from '../assets/logo.jpeg';

export function Footer() {
    const quickLinks = ["home", "about", "services", "projects", "modern-homes", "team", "contact"];
    const socialLinks = [
        { icon: <Twitter size={20} />, href: "#", name: "Twitter" },
        { icon: <Linkedin size={20} />, href: "#", name: "LinkedIn" },
        { icon: <Facebook size={20} />, href: "#", name: "Facebook" },
        { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    ];

    return (
        <footer className="bg-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Company Info */}
                    <div className="md:col-span-2 lg:col-span-1">
                        <img src={logo} alt="Sambislight Logo" className="w-24 h-24 bg-white p-2 rounded-full mb-4" />
                        <p className="text-gray-400 text-sm leading-relaxed">
                            A dependable, private limited liability construction company in Ghana, recognized for unmatched quality and timely delivery in all fields of construction.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Quick Links</h3>
                        <ul className="space-y-3">
                            {quickLinks.map(link => (
                                <li key={link}>
                                    <a href={`#${link}`} className="text-gray-400 hover:text-white capitalize flex items-center gap-2 transition-colors">
                                        <ArrowRight size={16} />
                                        {link.replace('-', ' ')}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Contact Us</h3>
                        <ul className="space-y-4 text-gray-400">
                            <li className="flex items-start gap-3">
                                <MapPin size={20} className="mt-1 flex-shrink-0" />
                                <span>Accra, Sunyani, Kumasi - Ghana</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <Mail size={20} className="mt-1 flex-shrink-0" />
                                <a href="mailto:sambislightconstruction10@gmail.com" className="hover:text-white break-all">sambislightconstruction10@gmail.com</a>
                            </li>
                            <li className="flex items-start gap-3">
                                <Phone size={20} className="mt-1 flex-shrink-0" />
                                <div>
                                    <a href="tel:0249278246" className="hover:text-white block">024 927 8246</a>
                                    <a href="tel:0542906871" className="hover:text-white block">054 290 6871</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h3 className="font-bold text-lg mb-4">Follow Us</h3>
                        <p className="text-gray-400 text-sm mb-4">Stay connected with us on our social networks.</p>
                        <div className="flex space-x-4">
                            {socialLinks.map(social => (
                                <a key={social.name} href={social.href} aria-label={social.name} className="bg-gray-700 hover:bg-blue-600 p-3 rounded-full transition-colors">
                                    {social.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="mt-10 pt-8 border-t border-gray-700 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Sambislight Construction Co. Ltd. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
}
