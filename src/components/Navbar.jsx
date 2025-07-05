import { useState } from 'react';
import { Menu, X } from 'lucide-react';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className="w-full bg-gradient-to-r from-blue-900/95 via-blue-800 to-blue-600 shadow-lg sticky top-0 z-50 backdrop-blur-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <p className="text-2xl lg:text-3xl font-bold text-white hover:scale-105 transition-transform duration-200 cursor-pointer">
                            Sam<span className="text-red-500 drop-shadow-sm font-extrabold">BisLight</span>
                        </p>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <ul className="flex items-center space-x-5 lg:space-x-7">
                            {navItems.map((item, index) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="text-white font-medium text-lg hover:text-orange-400 hover:scale-110 transition-all duration-200 relative group px-2 py-1"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-white p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`md:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                } overflow-hidden bg-blue-900/95 backdrop-blur-sm`}>
                <div className="px-4 pb-2 space-y-2">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block text-white font-medium text-lg hover:text-orange-400 hover:bg-blue-800/50 px-3 rounded-md transition-all duration-200"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
}

export default Navbar;