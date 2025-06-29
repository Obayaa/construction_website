import team1 from '../assets/team1.jpeg';
import Section_Title from './Section_Title'

export default function About() {
    return (
        <div className="max-w-7xl mx-auto px-8 flex flex-col pt-16 gap-14">
            <Section_Title title={"About Us"} />

            <div className=' flex flex-row gap-10'>
                <img
                    src={team1}
                    alt="The team that makes SamBisLight"
                    className="w-1/2 object-cover rounded-md"
                />

                <div className='w-1/2 flex flex-col text-neutral-600 gap-4'>
                    <h2 className='text-4xl font-bold text-blue-800'>Ghana's Most Dependable Construction Company.</h2>
                    <p>SamBisLight is a private limited liability company incorporated and domiciled in Ghana. Due to
                        sound and effective management policy and practice, the company has earned recognition as a
                        dependable construction company and has also achieved a reputation which is unmatched in the
                        building industry.
                    </p>
                    <p>The company's area of operation covers all fields in the construction industry. We have
                        established excellent business relationship with the public and private sector like the
                        financial institutions, industries, educational institutions among others.
                    </p>
                    <p>The key to our enviable success is our noble ability to perform and deliver on schedule to the
                        contentment of our treasured clients. Our practice is matchless, backed by expertise of both
                        technical and administrative staff making up the supervisory team.
                    </p>
                    <p>Our success story is the result of the allegiance, experience, sacrifice and perseverance of our
                        workforce, who over the years have strongly defended and upheld the image of the company.
                    </p>
                    <a
                        href="#services"
                        className="bg-red-600 text-white rounded-md px-3 py-2 self-start"
                    >
                        Our services
                    </a>
                </div>
            </div>
        </div>
    )
}