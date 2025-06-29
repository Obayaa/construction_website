export default function Home() {
    return (
        <div className="relative w-full bg-[url(assets/modern6.jpeg)] bg-local bg-no-repeat bg-cover">
            {/* Gradient overlay */}
            <div className="absolute inset-0 bg-gradient-to-br from-black/80 to-black/60 z-0" />
            <div className="relative flex gap-6 flex-col max-w-7xl px-8 mx-auto text-white justify-center h-screen z-10">
                <h1 className="text-6xl font-bold leading-20">Building Tomorrow's <br /> Ghana Today</h1>
                <p className="text-lg">SamBisLight Construction - Ghana's premier construction company delivering <br /> excellence in building design, construction and modern housing solutions.</p>
                <div className="flex gap-3 text-lg font-bold">
                    <button type="button" className="bg-red-600 rounded-md px-3 py-2">Our services</button>
                    <button className="border border-white-50 rounded-md px-3 py-2">Contact Us</button>
                </div>
            </div>
        </div>
    )
}