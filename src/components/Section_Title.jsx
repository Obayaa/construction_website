export default function Section_Title({ title }) {
    return (
        <div className="text-center my-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-800">{title}</h2>
            <div className="mt-2 h-1 w-24 bg-red-600 mx-auto rounded"></div>
        </div>
    )
}