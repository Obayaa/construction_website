import { CheckCircle, Home, Building } from 'lucide-react';
// Make sure the path to your flyer image is correct
import flyer from '../assets/flyer.jpeg';
import Section_Title from './Section_Title';
import { Fade, Slide } from "react-awesome-reveal";
import { useIsMobile } from '../hooks/useMobile';



// A small reusable component for individual service points
const ServicePoint = ({ icon, text }) => (
    <li className="flex items-start space-x-3">
        <div className="flex-shrink-0 mt-1 text-blue-600">
            {icon}
        </div>
        <span>{text}</span>
    </li>
);

export default function Services() {
    const isMobile = useIsMobile();

    // Content for the list of service points
    const servicePointsContent = (
        <>
            <ServicePoint icon={<CheckCircle size={20} />} text="Architectural Design & Planning" />
            <ServicePoint icon={<CheckCircle size={20} />} text="Full-Service General Contracting" />
            <ServicePoint icon={<CheckCircle size={20} />} text="Custom Renovation & Remodeling" />
            <ServicePoint icon={<CheckCircle size={20} />} text="Project Management & Supervision" />
        </>
    );

    // Content for the entire left column (text details)
    const textContent = (
        <div className="space-y-8">
            <div>
                <div className="flex items-center space-x-3 mb-3">
                    <Building className="text-blue-600" size={28} />
                    <h3 className="text-2xl font-semibold text-gray-800">Design & Build</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    At Sambislight Construction, we specialize in end-to-end construction services. Our expert team manages every phase of your project, ensuring seamless execution and exceptional results for both residential and commercial properties.
                </p>
                <ul className="mt-4 space-y-3 text-gray-700">
                    {/* Conditionally apply cascade animation to the list items */}
                    {isMobile
                        ? servicePointsContent
                        : <Fade direction="up" cascade damping={0.1}>{servicePointsContent}</Fade>}
                </ul>
            </div>

            <div>
                <div className="flex items-center space-x-3 mb-3">
                    <Home className="text-blue-600" size={28} />
                    <h3 className="text-2xl font-semibold text-gray-800">Modern Homes For Sale</h3>
                </div>
                <p className="text-gray-600 leading-relaxed">
                    We offer a curated selection of newly-built, modern homes in prime locations. These properties feature contemporary design, high-end finishes, and all the amenities for a luxurious lifestyle, ready for you to move in.
                </p>
                <div className="mt-6">
                    <a
                        href="#modern-homes" // This would link to your modern homes gallery section
                        className="inline-block bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                        View Available Homes
                    </a>
                </div>
            </div>
        </div>
    );

    // Content for the right column (flyer image)
    const imageContent = (
        <div className="flex justify-center lg:justify-end">
            <img
                src={flyer}
                alt="Sambislight Construction Services Flyer"
                className="rounded-lg shadow-2xl w-full max-w-md object-contain transform transition-transform duration-500 hover:scale-105"
            />
        </div>
    );

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            {isMobile ? (
                <>
                    <Section_Title title="Our Services" />
                    <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto my-6">
                        From initial design to final construction, we provide comprehensive solutions to bring your vision to life with quality and precision.
                    </p>
                </>
            ) : (
                <Fade direction="down">
                    <Section_Title title="Our Services" />
                    <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mt-4 mb-16">
                        From initial design to final construction, we provide comprehensive solutions to bring your vision to life with quality and precision.
                    </p>
                </Fade>
            )}

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                {/* Conditionally wrap the left column with the Slide animation */}
                {isMobile ? textContent : <Slide direction="left">{textContent}</Slide>}

                {/* Conditionally wrap the right column with the Slide animation */}
                {isMobile ? imageContent : <Slide direction="right">{imageContent}</Slide>}
            </div>
        </div>
    );
}
