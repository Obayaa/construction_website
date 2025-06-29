export default function TeamCard({ member, position }) {
    return (
        <div className="bg-white shadow-lg hover:scale-110 duration-300 h-fit px-4 py-7 rounded-lg">
            <img src={bismark} alt="" className="w-72 h-72 rounded-lg" />
            <div className="text-center flex flex-col gap-2 pt-2">
                <h1 className="font-bold text-2xl">{member}</h1>
                <p className="text-base text-blue-400">{position}</p>
            </div>
        </div>
    )
}