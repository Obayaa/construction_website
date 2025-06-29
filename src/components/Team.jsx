import Section_Title from "./Section_Title";
import bismark from "../assets/bismark2.jpeg";
import sam from "../assets/sam.jpeg";
import TeamCard from "./Team_Card";

export default function Team() {
    return (
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-10">
            <div className="flex flex-col gap-7">
                <Section_Title title={"Meet Our Team"} />
                <p className="text-center text-lg">Get to know the dedicated professionals whose expertise and passion drive our company's success.</p>
            </div>
            <div className="flex gap-6 lg:justify-between flex-wrap lg:flex-nowrap justify-center">
                <TeamCard image={bismark} member={"Kru Bismark"} position={"Project Manager"} />
                <TeamCard image={sam} member={"Samuel Nartey"} position={"Head of Engineers"} />
                <TeamCard image={bismark} member={"Bright Adjaho"} position={"Quantity Surveyor"} />
                <TeamCard image={sam} member={"Ransford France"} position={"Architect"} />
            </div>
        </div>
    )
}