import emailjs from "@emailjs/browser";
import ContactInfo from "./ContactInfo";
import Section_Title from "./Section_Title";
import { useState } from "react";
import ContactForm from "./ContactForm";

export default function Contact() {
    const [status, setStatus] = useState("");
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value,
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
            subject: formData.subject,
            message: formData.message,
        };

        emailjs
            .send(
                import.meta.env.VITE_EMAILJS_SERVICE_ID,
                import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
                templateParams,
                import.meta.env.VITE_EMAILJS_PUBLIC_KEY
            )
            .then(() => {
                setStatus("success");
                setFormData({ name: "", email: "", subject: "", message: "" }); // Clear form on success
                setTimeout(() => setStatus(""), 4000); // Reset status message after 4 seconds
            })
            .catch((error) => {
                console.error("FAILED...", error);
                setStatus("error");
                setTimeout(() => setStatus(""), 4000); // Reset status message after 4 seconds
            });
    };

    return (
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Section_Title title={"Contact Us"} />

            <div className="mt-12 bg-white shadow-xl rounded-2xl overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {/* Contact Information Section */}
                    <ContactInfo />

                    {/* Contact Form Section */}
                    <div className="p-8 lg:p-12">
                        <h2 className="text-2xl font-bold text-gray-800 mb-6">
                            Send us a Message
                        </h2>
                        {/* Contact Form Component. */}
                        <ContactForm
                            formData={formData}
                            status={status}
                            handleChange={handleChange}
                            handleSubmit={handleSubmit}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}
