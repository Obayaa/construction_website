import { Card } from "./Card"
import SectionTitle from "./SectionTitle"

export default function Achievements() {
    const achievementsData = [
        { value: "20+", title: "Projects Completed" },
        { value: "15+", title: "Modern Homes" },
        { value: "20+", title: "Happy Clients" },
        { value: "4+", title: "Years Experience" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col">
            <SectionTitle title={"Our Achievements"} />

            <div className="flex gap-6 lg:justify-between flex-wrap p-3 justify-center lg:flex-nowrap">
                {achievementsData.map((achievement, index) => (
                    <Card key={index} {...achievement} />
                ))}
            </div>
        </div>
    );
}