function FormField({ id, label, type = "text", placeholder, icon, value, onChange }) {
    return (
        <div>
            <label htmlFor={id} className="sr-only">{label}</label>
            <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    {icon}
                </div>
                {type === 'textarea' ? (
                    <textarea
                        id={id}
                        name={id}
                        rows="4"
                        className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required
                    />
                ) : (
                    <input
                        type={type}
                        id={id}
                        name={id}
                        className="w-full pl-10 pr-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 focus:border-blue-500"
                        placeholder={placeholder}
                        value={value}
                        onChange={onChange}
                        required
                    />
                )}
            </div>
        </div>
    );
};


export default FormField;