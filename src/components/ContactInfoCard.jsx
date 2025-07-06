export default function ContactInfoCard({ icon, title, content }) {
    return (
        <div className="flex items-start space-x-4 p-2 lg:p-4 rounded-lg transition-colors duration-300 bg-blue-50">
            <div className="flex-shrink-0 bg-blue-100 p-2 lg:p-3 rounded-full">
                {icon}
            </div>
            <div>
                <h3 className="text-lg text-gray-600 font-semibold">{title}</h3>
                <div className=" text-gray-600 opacity-90">{content}</div>
            </div>
        </div>
    );
};