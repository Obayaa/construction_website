import { useState } from 'react';
import { Fade } from "react-awesome-reveal";

// --- IMAGE IMPORTS ---
// NOTE: Please ensure these image paths are correct in your project structure.
import modern1 from '../assets/modern1.jpeg';
import modern2 from '../assets/modern2.jpeg';
import modern3 from '../assets/modern3.jpeg';
import modern4 from '../assets/modern4.jpeg';
import modern5 from '../assets/modern5.jpeg';
import modern6 from '../assets/modern6.jpeg';
import modern7 from '../assets/modern7.jpeg';
import modern8 from '../assets/modern8.jpeg';
import modern9 from '../assets/modern9.jpeg';
import { useIsMobile } from '../hooks/useMobile';
import Section_Title from './Section_Title';
import ImageModal from './ImageModal';


// --- MODERN HOMES COMPONENT ---
const HomeCard = ({ image, title, onImageClick }) => (
    <div className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer" onClick={() => onImageClick(image)}>
        <img src={image} alt={title} className="w-full h-80 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110" onError={(e) => { e.target.onerror = null; e.target.src='https://placehold.co/600x400/e2e8f0/4a5568?text=Image'; }}/>
        <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-black/70 to-transparent pointer-events-none">
            <h3 className="text-xl font-bold text-white transition-transform duration-300 group-hover:-translate-y-2">{title}</h3>
        </div>
    </div>
);

export default function ModernHomes() {
    const isMobile = useIsMobile();
    const [selectedImage, setSelectedImage] = useState(null);

    const homesData = [
        { image: modern1, title: "The Signature Villa" },
        { image: modern2, title: "Urban Oasis Residence" },
        { image: modern3, title: "The Executive Estate" },
        { image: modern4, title: "Contemporary Family Home" },
        { image: modern5, title: "Serenity House" },
        { image: modern6, title: "The Glass Pavilion" },
        { image: modern7, title: "Minimalist Manor" },
        { image: modern8, title: "The Courtyard Abode" },
        { image: modern9, title: "Hillside View Mansion" },
    ];

    const titleSection = (
        <div className="flex flex-col mb-5">
            <Section_Title title={"Modern Homes For Sale"} />
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">Discover our collection of exquisitely designed modern homes, built with precision and ready for you to move in.</p>
        </div>
    );

    const homesGrid = (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {homesData.map((home, index) => <HomeCard key={index} {...home} onImageClick={setSelectedImage} />)}
        </div>
    );

    return (
        // As requested, this component does not have its own <section> tag.
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
             {isMobile ? titleSection : <Fade direction="down" triggerOnce>{titleSection}</Fade>}
             {isMobile ? homesGrid : <Fade direction="up" cascade damping={0.1} triggerOnce>{homesGrid}</Fade>}
             <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    );
}
