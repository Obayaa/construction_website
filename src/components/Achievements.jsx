import { Card } from "./Card"
import Section_Title from "./Section_Title"

export default function Achievements() {
    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col">
            <Section_Title title={"Our Achievements"} />
            <div className="flex gap-6 lg:justify-between flex-wrap p-3 justify-center lg:flex-nowrap">
                <Card value={"150+"} title={"Projects Completed"} />
                <Card value={"50+"} title={"Modern Homes"} />
                <Card value={"75+"} title={"Happy Clients"} />
                <Card value={"25+"} title={"Years Experience"} />
            </div>
        </div>
    )
}