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