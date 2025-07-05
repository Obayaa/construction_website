import { Slide } from "react-awesome-reveal";
import { useIsMobile } from "../hooks/useMobile";

export function Card({ value, title }) {
    const isMobile = useIsMobile();

    if (isMobile) {
        return (
            <div className="bg-red-600 w-sm h-36 lg:size-48 p-10 rounded-md text-white text-center flex flex-col justify-center gap-4 shadow-lg hover:scale-105 duration-300">
                <h1 className="lg:text-5xl text-4xl font-black">{value}</h1>
                <p className="text-xl">{title}</p>
            </div>
        );
    }
    return (
        <Slide direction="left" duration={1000} cascade>
            <div className="bg-red-600 size-48 p-10 rounded-md text-white text-center flex flex-col justify-center gap-4 shadow-lg hover:scale-105 duration-300">
                <h1 className="lg:text-5xl text-4xl font-black">{value}</h1>
                <p className="text-xl">{title}</p>
            </div>
        </Slide>
    );
}