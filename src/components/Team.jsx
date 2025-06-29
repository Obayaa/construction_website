import Section_Title from "./Section_Title";
import bismark from "../assets/bismark2.jpeg";
import sam from "../assets/sam.jpeg";
import TeamCard from "./Team_Card";

export default function Team() {
    return (
        <div className="max-w-7xl mx-auto px-8 flex flex-col gap-14">
            <Section_Title title={"Meet Our Team"} />
            <div className="flex gap-6 justify-between">
                {/* <div className="bg-white shadow-lg hover:scale-110 duration-300 h-fit px-4 py-7 rounded-lg">
                    <img src={bismark} alt="" className="w-72 h-72 rounded-lg" />
                    <div className="text-center flex flex-col gap-2 pt-2">
                        <h1 className="font-bold text-2xl">Kru Bismark</h1>
                        <p className="text-base text-blue-400">Project Manager</p>
                    </div>
                </div> */}
                <TeamCard member={"Kru Bismark"} position={"Project Manager"} />
                <TeamCard member={"Samuel Nartey"} position={"Head of Engineers"} />
                <TeamCard member={"Bright Adjaho"} position={"Quantity Surveyor"} />
                <TeamCard member={"Ransford France"} position={"Architect"} />

            </div>
        </div>
    )
}