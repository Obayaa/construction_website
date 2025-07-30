import { useState, useEffect } from 'react';
import { Fade } from "react-awesome-reveal";

// NOTE: Please ensure these image paths are correct in your project structure.
import site1 from '../assets/site1.jpeg';
import site2 from '../assets/site2.jpeg';
import site3 from '../assets/site3.jpeg';
import site4 from '../assets/site4.jpeg';
import site5 from '../assets/site5.jpeg';
import ImageModal from '../components/ImageModal';
import { useIsMobile } from '../hooks/useMobile';
import Section_Title from '../components/Section_Title';


// A reusable card for each project, now with an onClick handler
const ProjectCard = ({ image, title, onImageClick }) => {
    return (
        <div
            className="group relative overflow-hidden rounded-lg shadow-lg cursor-pointer"
            onClick={() => onImageClick(image)}
        >
            <img
                src={image}
                alt={title}
                className="w-full h-72 object-cover transform transition-transform duration-500 ease-in-out group-hover:scale-110"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/600x400/e2e8f0/4a5568?text=Project+Image'; }}
            />
            {/* Subtle gradient overlay for text readability */}
            <div className="absolute inset-x-0 bottom-0 h-2/3 bg-gradient-to-t from-black/70 via-black/40 to-transparent pointer-events-none"></div>

            {/* Text content positioned at the bottom */}
            <div className="absolute inset-x-0 bottom-0 p-6 transition-transform duration-300 ease-in-out transform group-hover:-translate-y-2">
                <h3 className="text-xl font-bold text-white">{title}</h3>
            </div>
        </div>
    );
};


// Your updated Projects component with modal state management
export default function Projects() {
    const isMobile = useIsMobile();
    const [selectedImage, setSelectedImage] = useState(null);

    const projectData = [
        {
            image: site1,
            title: "On-Site Project Supervision",
        },
        {
            image: site2,
            title: "Multi-Story Residential Construction",
        },
        {
            image: site3,
            title: "Structural Concrete Framework",
        },
        {
            image: site4,
            title: "Foundation & Rebar Installation",
        },
        {
            image: site5,
            title: "Collaborative Site Planning",
        },
    ];

    const titleSection = (
        <div className="flex flex-col mb-6">
            <Section_Title title={"Our Projects"} />
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">
                Explore a selection of our finest work, showcasing our commitment to quality, innovation, and client satisfaction.
            </p>
        </div>
    );

    const projectsGrid = (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {projectData.map((project, index) => (
                <ProjectCard key={index} {...project} onImageClick={setSelectedImage} />
            ))}
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {isMobile ? titleSection : <Fade direction="down" triggerOnce>{titleSection}</Fade>}
            {isMobile ? projectsGrid : <Fade direction="up" cascade damping={0.1} triggerOnce>{projectsGrid}</Fade>}

            <ImageModal src={selectedImage} onClose={() => setSelectedImage(null)} />
        </div>
    )
}
