import { Mail } from "lucide-react";
import Section_Title from "./Section_Title";
// import { flyer } from '../assets/flyer.jpeg'

export default function Contact() {
    return (

        <div className="max-w-5xl mx-auto">
            <Section_Title title={"Contact Us"} />
            <div>
                <div className="bg-white shadow-md size-fit p-4 rounded-lg ">
                    <p>Get in Touch</p>
                    <div>
                        <Mail size={24} className="bg-blue-100 rounded-full" />
                        <div>
                            <h1>Locations</h1>
                            <p>Accra, Sunyani, Kumasi, Ghana.</p>
                        </div>
                    </div>
                </div>
                {/* <img src={flyer} alt="" /> */}
            </div>
        </div>
    )
}