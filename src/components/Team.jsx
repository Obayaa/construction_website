import Section_Title from "./Section_Title";
import bismark from "../assets/bismark2.jpeg";
import sam from "../assets/sam.jpeg";
import TeamCard from "./Team_Card";
import { useIsMobile } from "../hooks/useMobile";
import { Fade } from "react-awesome-reveal";


export default function Team() {
    const isMobile = useIsMobile();

    const teamMembers = [
        {
            name: "Kru Bismark",
            position: "Project Manager",
            image: bismark,
            socials: {
                linkedin: '#',
                twitter: '#',
            }
        },
        {
            name: "Samuel Nartey",
            position: "Head of Engineers",
            image: sam,
            socials: {
                linkedin: '#',
            }
        },
        {
            name: "Bright Adjaho",
            position: "Quantity Surveyor",
            image: "https://placehold.co/200x200/f59e0b/ffffff?text=BA",
            socials: {
                twitter: '#',
            }
        },
        {
            name: "Ransford France",
            position: "Architect",
            image: "https://placehold.co/200x200/10b981/ffffff?text=RF",
            socials: {
                linkedin: '#',
                twitter: '#',
            }
        }
    ];

    // The JSX for the grid of team cards
    const teamGrid = (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
                <TeamCard key={index} {...member} />
            ))}
        </div>
    );

    // The JSX for the section title and description
    const titleSection = (
        <div className="flex flex-col">
            <Section_Title title={"Meet Our Team"} />
            <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto mb-4">Get to know the dedicated professionals whose expertise and passion drive our company's success.</p>
        </div>
    );

    return (
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
                {/* Conditionally apply Fade animation to the title */}
                {isMobile ? titleSection : <Fade direction="down">{titleSection}</Fade>}

                {/* Conditionally apply cascading Fade animation to the team cards */}
                {isMobile ? teamGrid : <Fade direction="up" cascade damping={0.1}>{teamGrid}</Fade>}
            </div>
    )
}
