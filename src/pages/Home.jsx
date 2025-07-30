import { useIsMobile } from "../hooks/useMobile";
import { Fade } from "react-awesome-reveal";

export default function Home() {
    const isMobile = useIsMobile();


    return (
        <div className="relative w-full bg-[url(assets/modern6.jpeg)] bg-local bg-no-repeat bg-cover">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-0" />
            <div className="relative flex gap-6 flex-col max-w-7xl px-4 lg:px-8 mx-auto text-white justify-center h-screen z-10">
                {isMobile ?
                    // Mobile
                    <div className="flex gap-6 flex-col">
                        <div className="lg:text-6xl text-3xl md:text-5xl font-bold lg:leading-20">Building Tomorrow's <br /> Ghana Today</div>
                        <p className="text-md lg:text-lg">
                            SamBisLight Construction - Ghana's premier construction company delivering excellence in building design, construction and modern housing solutions.
                        </p>
                        <p className="text-md lg:text-lg">
                            From residential to commercial projects, our experienced team ensures timely and reliable delivery.
                        </p>
                        <div className="flex gap-3 text-lg font-bold">
                            <button type="button" className="bg-red-600 rounded-md text-sm lg:text-md p-1 lg:px-3 lg:py-2">Our services</button>
                            <button className="border border-white-50 rounded-md p-2 text-sm lg:text-md lg:px-3 lg:py-2">Contact Us</button>
                        </div>
                    </div>
                    :
                    // Web Interface
                    <div className="flex gap-11 flex-col">
                        <Fade direction="left" duration={1000}>
                            <div className="lg:text-6xl text-4xl md:text-5xl font-bold lg:leading-20">Building Tomorrow's <br /> Ghana Today</div>
                        </Fade>
                        <Fade direction="right" duration={1000}>
                            <div className="flex flex-col gap-2">
                                <p className="text-lg">
                                    SamBisLight Construction - Ghana's premier construction company <br /> delivering excellence in building design, construction and modern housing solutions.
                                </p>
                                <p className="text-lg">
                                    From residential to commercial projects, our experienced team ensures timely and reliable delivery.
                                </p>
                            </div>
                        </Fade>
                        <Fade direction="up" duration={1500}>
                            <div className="flex gap-3 text-lg font-bold">
                                <a href="#services" className="bg-red-600 text-white rounded-md p-1 lg:px-3 lg:py-2 transition-colors duration-300 hover:bg-red-700">
                                    Our services
                                </a>
                                <a href="#contact" className="border border-white text-white rounded-md p-1 lg:px-3 lg:py-2 transition-colors duration-300 hover:bg-white hover:text-blue-900">
                                    Contact Us
                                </a>                            </div>
                        </Fade>
                    </div>
                }
            </div>
        </div>
    )
}