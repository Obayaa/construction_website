import team1 from '../assets/team1.jpeg';
import Section_Title from './Section_Title';
import { Slide } from "react-awesome-reveal";
import { useIsMobile } from '../hooks/useMobile';


export default function About() {
    const isMobile = useIsMobile();


    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8 flex flex-col">
            <Section_Title title={"About Us"} />

            <div className=' flex flex-row flex-wrap gap-10 lg:flex-nowrap'>
                {isMobile ?
                    <img
                        src={team1}
                        alt="The team that makes SamBisLight"
                        className="lg:w-full object-cover rounded-md"
                    />
                    : <Slide direction='left' className='lg:w-1/2'>
                        <img
                            src={team1}
                            alt="The team that makes SamBisLight"
                            className="lg:w-full object-cover rounded-md"
                        />
                    </Slide>}
                {isMobile ?
                    <div className='lg:w-full flex flex-col text-neutral-600 gap-4'>
                        <h2 className='lg:text-4xl text-2xl font-bold text-blue-800'>Ghana's Most Dependable Construction Company.</h2>
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
                            className="bg-red-600 text-white rounded-md px-3 py-2 self-center lg:self-start"
                        >
                            Visit Our services
                        </a>

                    </div> :
                    <Slide direction='right' className='lg:w-1/2'>
                        <div className='lg:w-full flex flex-col text-neutral-600 gap-4'>
                            <h2 className='lg:text-4xl text-3xl font-bold text-blue-800'>Ghana's Most Dependable Construction Company.</h2>
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
                                className="bg-red-600 text-white rounded-md px-3 py-2 self-center lg:self-start"
                            >
                                Visit Our services
                            </a>
                        </div>
                    </Slide>}
            </div>
        </div>
    )
}