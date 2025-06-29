import { Mail } from "lucide-react";
import Section_Title from "./Section_Title";

export default function Contact() {
    return (

        <div className="max-w-5xl mx-auto">
            <Section_Title title={"Contact Us"} />
            <div className="">
                <p>Get in Touch</p>
                <div>
                    <Mail width={24} height={24} className=" bg-blue-100 rounded-full" />
                    <div>
                        <h1>Locations</h1>
                        <p>Accra, Sunyani, Kumasi, Ghana.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}