import { Mail, MapPin, Phone } from "lucide-react";
import ContactInfoCard from "./ContactInfoCard";

export default function ContactInformation({ }) {
    return (
        <div className="p-8 lg:p-12 bg-blue-600 text-white">
            <h2 className="text-3xl font-bold mb-2">Get in Touch</h2>
            <p className="mb-8 text-blue-100">We are here to help you. Reach out to us via phone, email, or visit our locations.</p>

            <div className="space-y-6">
                <ContactInfoCard
                    icon={<Phone size={24} className="text-blue-600" />}
                    title="Phone"
                    content={
                        <div>
                            <a href="tel:0249278246" className="hover:underline">024 927 8246</a>
                            <span className="mx-2">/</span>
                            <a href="tel:0542906871" className="hover:underline">054 290 6871</a>
                        </div>
                    }
                />
                <ContactInfoCard
                    icon={<Mail size={24} className="text-blue-600" />}
                    title="Email"
                    content={
                        // The 'break-all' class is key to preventing overflow on small screens
                        <a href="mailto:sambislightconstruction10@gmail.com" className="hover:underline break-all">
                            sambislightconstruction10@gmail.com
                        </a>
                    }
                />
                <ContactInfoCard
                    icon={<MapPin size={24} className="text-blue-600" />}
                    title="Locations"
                    content="Accra, Sunyani, Kumasi - Ghana"
                />
            </div>
        </div>
    )
}