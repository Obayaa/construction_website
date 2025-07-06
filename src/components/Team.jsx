import Section_Title from "./Section_Title";
import bismark from "../assets/bismark2.jpeg";
import sam from "../assets/sam.jpeg";
import TeamCard from "./Team_Card";

// export default function Team() {
//     return (
//         <div className="max-w-7xl mx-auto px-8 flex flex-col gap-10 p7-10">
//             <div className="flex flex-col gap-7">
//                 <Section_Title title={"Meet Our Team"} />
//                 <p className="text-center text-lg">Get to know the dedicated professionals whose expertise and passion drive our company's success.</p>
//             </div>
//             <div className="flex gap-6 lg:justify-between flex-wrap lg:flex-nowrap justify-center">
//                 <TeamCard image={bismark} member={"Kru Bismark"} position={"Project Manager"} />
//                 <TeamCard image={sam} member={"Samuel Nartey"} position={"Head of Engineers"} />
//                 <TeamCard image={bismark} member={"Bright Adjaho"} position={"Quantity Surveyor"} />
//                 <TeamCard image={sam} member={"Ransford France"} position={"Architect"} />
//             </div>
//         </div>
//     )
// }

export default function Team() {

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

    return (
            <div className="max-w-7xl mx-auto">
                <div className="flex flex-col mb-12">
                    <Section_Title title={"Meet Our Team"} />
                    <p className="text-center text-lg text-gray-600 max-w-3xl mx-auto">Get to know the dedicated professionals whose expertise and passion drive our company's success.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {teamMembers.map((member, index) => (
                        <TeamCard key={index} {...member} />
                    ))}
                </div>
            </div>
    )
}