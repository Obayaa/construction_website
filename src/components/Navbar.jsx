import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
// NOTE: Please ensure the path to your logo is correct.
import logo from '../assets/logo.jpeg';

function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hasScrolled, setHasScrolled] = useState(false);

    // Effect to detect scroll and add a shadow to the navbar
    useEffect(() => {
        const handleScroll = () => {
            setHasScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const navItems = [
        { href: "#home", label: "Home" },
        { href: "#about", label: "About" },
        { href: "#services", label: "Services" },
        { href: "#projects", label: "Projects" },
        { href: "#team", label: "Team" },
        { href: "#contact", label: "Contact" }
    ];

    return (
        <nav className={`w-full bg-white sticky top-0 z-50 transition-shadow duration-300 ${hasScrolled ? 'shadow-md' : 'shadow-none'}`}>
            <div className="max-w-7xl mx-auto px-4 md:px-8">
                <div className="flex items-center justify-between h-20">
                    {/* Logo */}
                    <div className="flex-shrink-0">
                        <a href="#home" className="flex items-center gap-3 group">
                            <img 
                                src={logo} 
                                alt="Sambislight Logo" 
                                className="h-14 rounded-md transition-transform duration-300 group-hover:scale-105"
                            />
                             <p className="hidden sm:block text-2xl font-bold text-blue-900">
                                Sam<span className="text-red-500">BisLight</span>
                            </p>
                        </a>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden lg:block">
                        <ul className="flex items-center space-x-8">
                            {navItems.map((item, index) => (
                                <li key={item.href}>
                                    <a
                                        href={item.href}
                                        className="font-semibold text-gray-700 hover:text-blue-600 transition-all duration-200 relative group"
                                    >
                                        {item.label}
                                        <span className="absolute bottom-[-4px] left-0 w-0 h-0.5 bg-blue-600 group-hover:w-full transition-all duration-300"></span>
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Mobile menu button */}
                    <div className="lg:hidden">
                        <button
                            onClick={() => setIsMenuOpen(!isMenuOpen)}
                            className="text-gray-700 p-2"
                            aria-label="Toggle menu"
                        >
                            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Navigation */}
            <div className={`lg:hidden transition-all duration-300 ease-in-out ${isMenuOpen ? 'opacity-100' : 'max-h-0 opacity-0'} overflow-hidden bg-white border-t border-gray-100`}>
                <div className="px-8 py-4 space-y-3">
                    {navItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block text-gray-700 font-semibold text-lg hover:text-blue-600 hover:bg-gray-50 p-3 rounded-md transition-all duration-200"
                            onClick={() => {
                                setIsMenuOpen(false)
                            }}
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
