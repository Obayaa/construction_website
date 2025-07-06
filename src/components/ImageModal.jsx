import { X } from 'lucide-react';

export default function ImageModal({ src, onClose }) {
    if (!src) return null;

    return (
        <div
            className="fixed inset-0 bg-gradient-to-br from-white/40 via-gray-100/20 to-white/10 backdrop-blur-md z-50 flex justify-center items-center p-4 animate-fade-in"
            onClick={onClose}
        >
            <button
                onClick={onClose}
                className="absolute top-4 right-4 text-gray-800 hover:text-gray-600 z-50"
            >
                <X size={32} />
            </button>
            <div className="relative max-w-4xl max-h-full" onClick={(e) => e.stopPropagation()}>
                <img
                    src={src}
                    alt="Full-screen project view"
                    className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
}
