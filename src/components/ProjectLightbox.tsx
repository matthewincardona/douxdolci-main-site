// src/components/ProjectLightbox.jsx
import { motion, AnimatePresence } from "motion/react";
import { useEffect, useCallback } from "react";

export default function ProjectLightbox({
  project,
  isOpen,
  onClose,
  currentImage,
  setCurrentImage,
}) {
  const images = project.images || [project.src];

  const handleKey = useCallback(
    (e) => {
      if (!isOpen) return;
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowRight")
        setCurrentImage((prev) => (prev + 1) % images.length);
      if (e.key === "ArrowLeft")
        setCurrentImage((prev) => (prev - 1 + images.length) % images.length);
    },
    [isOpen, images.length, onClose, setCurrentImage]
  );

  useEffect(() => {
    window.addEventListener("keydown", handleKey);
    return () => window.removeEventListener("keydown", handleKey);
  }, [handleKey]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-100 backdrop-blur-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
        >
          <motion.div
            className="relative flex flex-col md:flex-row items-center justify-center gap-8 bg-black/40 rounded-lg overflow-hidden z-100"
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image */}
            <img
              src={images[currentImage]}
              alt={project.alt}
              className="object-contain max-h-[85vh] md:max-w-[65%] rounded-md"
            />

            {/* Info Panel */}
            <div className="text-white flex flex-col justify-center md:w-[35%] p-8">
              <h3 className="text-3xl font-semibold mb-4">{project.title}</h3>
              <p className="text-lg mb-6 text-gray-200 leading-relaxed">
                {project.description}
              </p>
              {project.link && (
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-white text-black text-lg px-5 py-2 rounded-md hover:bg-gray-200 transition-colors"
                >
                  View Project
                </a>
              )}
              {images.length > 1 && (
                <p className="text-sm mt-4 text-gray-400">
                  Image {currentImage + 1} of {images.length}
                </p>
              )}
            </div>
          </motion.div>

          {/* Navigation Buttons */}
          {images.length > 1 && (
            <>
              <button
                className="absolute left-0 top-0 h-full w-[120px] flex items-center justify-start text-white text-6xl z-100 hover:bg-black/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage(
                    (currentImage - 1 + images.length) % images.length
                  );
                }}
              >
                <span className="pl-6 select-none">‹</span>
              </button>

              <button
                className="absolute right-0 top-0 h-full w-[120px] flex items-center justify-end text-white text-6xl z-100 hover:bg-black/20 transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImage((currentImage + 1) % images.length);
                }}
              >
                <span className="pr-6 select-none">›</span>
              </button>
            </>
          )}

          {/* Close Button */}
          <button
            className="absolute top-8 right-8 text-white text-5xl z-100 rounded-full p-4 hover:bg-black/30 transition-colors"
            onClick={onClose}
          >
            ×
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
