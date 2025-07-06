import { X } from 'lucide-react';


export default function ImageModal({ src, onClose }) {
    if (!src) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-80 z-50 flex justify-center items-center p-4 animate-fade-in"
            onClick={onClose} // Close modal on backdrop click
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-white hover:text-gray-300 z-50"
            >
                <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <img src={src} alt="Full-screen project view" className="max-w-full max-h-[90vh] object-contain rounded-lg" />
            </div>
        </div>
    );

}









