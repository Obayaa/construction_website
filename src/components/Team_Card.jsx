
// export default function TeamCard({ member, position, image }) {
//     return (
//         <div className="bg-white shadow-lg hover:scale-110 duration-300 h-fit px-4 py-7 rounded-tl-4xl rounded-br-4xl">
//             <img src={image} alt="" className="w-72 h-72 rounded-lg object-cover self-center" />
//             <div className="text-center flex flex-col gap-2 pt-2">
//                 <h1 className="font-bold text-xl">{member}</h1>
//                 <p className="text-sm text-blue-400">{position}</p>
//             </div>
//         </div>
//     )
// }

import { Linkedin, Twitter } from "lucide-react";


export default function TeamCard({ name, position, image, socials }) {
    return (
        // Using your original styling with a more subtle hover transition
        <div className="bg-white shadow-lg rounded-tl-3xl rounded-br-3xl p-6 text-center transition-all duration-300 hover:shadow-xl hover:-translate-y-2 w-full max-w-xs mx-auto">
            <img
                src={image}
                alt={`Photo of ${name}`}
                className="w-48 h-48 rounded-full object-cover mx-auto mb-4 border-4 border-gray-100"
                onError={(e) => { e.target.onerror = null; e.target.src = 'https://placehold.co/200x200/e2e8f0/4a5568?text=Image'; }}
            />
            <h1 className="font-bold text-xl text-gray-800">{name}</h1>
            <p className="text-sm text-blue-500 font-medium">{position}</p>

            {/* Social media links section */}
            {socials && (
                <div className="flex justify-center space-x-4 mt-4 pt-4 border-t border-gray-100">
                    {socials.linkedin && (
                        <a href={socials.linkedin} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600 transition-colors duration-300">
                            <Linkedin size={20} />
                        </a>
                    )}
                    {socials.twitter && (
                        <a href={socials.twitter} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-sky-500 transition-colors duration-300">
                            <Twitter size={20} />
                        </a>
                    )}
                </div>
            )}
        </div>
    )
}