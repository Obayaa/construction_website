export function Card({ value, title }) {
    return (
        <div className="bg-red-600 size-48 p-10 rounded-md text-white text-center flex flex-col justify-center gap-4 shadow-md hover:scale-105 duration-300">
            <h1 className="lg:text-5xl text-4xl font-black">{value}</h1>
            <p className="text-xl">{title}</p>
        </div>
    );
}