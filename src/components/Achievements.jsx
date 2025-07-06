import { Card } from "./Card"
import Section_Title from "./Section_Title"

export default function Achievements() {
    const achievementsData = [
        { value: "150+", title: "Projects Completed" },
        { value: "50+", title: "Modern Homes" },
        { value: "75+", title: "Happy Clients" },
        { value: "25+", title: "Years Experience" },
    ];

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col">
            <Section_Title title={"Our Achievements"} />

            <div className="flex gap-6 lg:justify-between flex-wrap p-3 justify-center lg:flex-nowrap mt-12">
                {achievementsData.map((achievement, index) => (
                    <Card key={index} {...achievement} />
                ))}
            </div>
        </div>
    );
}