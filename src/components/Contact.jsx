import { Mail, Phone, MapPin, User, MessageSquare } from 'lucide-react';
import Section_Title from "./Section_Title";
import FormField from './FormField';
import ContactInfoCard from './ContactInfoCard';
import { useState } from 'react';


export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Form Submitted:", formData);
        alert("Thank you for your message! We'll get back to you soon.");
        setFormData({ name: '', email: '', message: '' });
    };


    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Section_Title title={"Contact Us"} />

            <div className="mt-12 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">

                    {/* Contact Information Section */}
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

                    {/* Contact Form Section */}
                    <div className="p-8 lg:p-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                        <form onSubmit={handleSubmit} className="space-y-6">
                            <FormField
                                id="name"
                                label="Full Name"
                                placeholder="John Doe"
                                icon={<User size={20} />}
                                value={formData.name}
                                onChange={handleChange}
                            />
                            <FormField
                                id="email"
                                label="Email Address"
                                type="email"
                                placeholder="you@example.com"
                                icon={<Mail size={20} />}
                                value={formData.email}
                                onChange={handleChange}
                            />
                            <FormField
                                id="message"
                                label="Message"
                                type="textarea"
                                placeholder="Your message..."
                                icon={<MessageSquare size={20} />}
                                value={formData.message}
                                onChange={handleChange}
                            />
                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                                >
                                    Submit
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
