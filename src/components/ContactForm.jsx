import { Mail, MessageCircleMore, MessageSquare, User } from "lucide-react";
import FormField from "./FormField";

export default function ContactForm({ formData, status, handleChange, handleSubmit }) {
    // const [status, setStatus] = useState('');
    return (
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
                name="subject"
                label="Subject"
                placeholder="e.g., Quote for a New Project"
                icon={<MessageCircleMore size={20} />}
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
    )
}