import { Mail, Phone, MapPin, User, MessageSquare } from 'lucide-react';
import Section_Title from "./Section_Title";
import FormField from './FormField';
import ContactInfoCard from './ContactInfoCard';
import { useState } from 'react';


export default function Contact() {
    const [status, setStatus] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
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
        setStatus("sending");

        // Prepare the template parameters from your form state
        // These names (user_name, user_email) must match the variables in your EmailJS template
        const templateParams = {
            user_name: formData.name,
            user_email: formData.email,
            message: formData.message,
        };

        emailjs.send(
            import.meta.env.VITE_EMAILJS_SERVICE_ID,
            import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
            templateParams,
            import.meta.env.VITE_EMAILJS_PUBLIC_KEY
        )
            .then(() => {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' }); // Clear form on success
                setTimeout(() => setStatus(''), 4000); // Reset status message after 4 seconds
            })
            .catch((error) => {
                console.error('FAILED...', error);
                setStatus('error');
                setTimeout(() => setStatus(''), 4000); // Reset status message after 4 seconds
            });
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
                                id="subject"
                                label="Subject"
                                type="text"
                                placeholder="e.g., Quote for a New Project"
                                icon={<MessageSquare size={20} />}
                                value={formData.subject}
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
                                    disabled={status === 'sending'}
                                    className="w-full bg-blue-600 text-white font-bold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:bg-gray-400 disabled:cursor-not-allowed"
                                >
                                    {status === 'sending' ? 'Sending...' : 'Submit'}
                                </button>
                                {/* Submission status message */}
                                {status === 'success' && <p className="text-green-600 font-semibold text-center">Thank you for your message!</p>}
                                {status === 'error' && <p className="text-red-600 font-semibold text-center">Something went wrong. Please try again.</p>}
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}
