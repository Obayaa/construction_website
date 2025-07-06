import { Slide } from "react-awesome-reveal";
import { useIsMobile } from "../hooks/useMobile";
import CountUp from 'react-countup';

import { useInView } from 'react-intersection-observer';


export function Card({ value, title }) {
    const isMobile = useIsMobile();

    // The 'useInView' hook tracks when the component enters the viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // Animation will only run once
        threshold: 0.1,    // Trigger when 10% of the card is visible
    });

    // Extracts the number and any suffix (like '+') from the value string
    const endValue = parseInt(value.replace('+', ''), 10);
    const suffix = value.includes('+') ? '+' : '';

    // if (isMobile) {
    //     return (
    //         <div className="bg-red-600 w-sm h-36 lg:size-48 p-10 rounded-md text-white text-center flex flex-col justify-center gap-4 shadow-lg hover:scale-105 duration-300">
    //             <h1 className="lg:text-5xl text-4xl font-black">{value}</h1>
    //             <p className="text-xl">{title}</p>
    //         </div>
    //     );
    // }
    // return (
    //     <Slide direction="left" duration={1000} cascade>
    //         <div className="bg-red-600 size-48 p-10 rounded-md text-white text-center flex flex-col justify-center gap-4 shadow-lg hover:scale-105 duration-300">
    //             <h1 className="lg:text-5xl text-3xl font-black">{value}</h1>
    //             <p className="text-xl">{title}</p>
    //         </div>
    //     </Slide>
    // );

    return (
        <div ref={ref} className="bg-blue-600 text-white text-center flex flex-col justify-center gap-2 shadow-lg rounded-lg p-6 w-full sm:w-48 h-40 transform transition-transform duration-300 hover:scale-105 hover:-translate-y-2">
            <h1 className="text-5xl font-black">
                {/* The counter will only start when the card is in view */}
                {inView ? <CountUp end={endValue} duration={2.5} /> : '0'}
                {suffix}
            </h1>
            <p className="text-lg font-medium">{title}</p>
        </div>
    );
}