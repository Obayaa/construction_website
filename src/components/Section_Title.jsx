export default function Section_Title({ title }) {
    return (
        <h1
            className='lg:text-5xl text-3xl md:text-4xl text-center font-bold text-blue-800 border-0 border-b-4 border-b-red-600 pb-3 '>
            {title}
        </h1>
    )
}