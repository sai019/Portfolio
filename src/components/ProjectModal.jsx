import { motion } from 'framer-motion';
import { FaTimes, FaGithub } from 'react-icons/fa';

function ProjectModal({ project, isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.95, opacity: 0 }}
        onClick={e => e.stopPropagation()}
        className="bg-surface-card w-full max-w-4xl rounded-2xl shadow-xl border border-accent/10 my-4 mx-auto"
      >
        <div className="p-4 sm:p-6 md:p-8 max-h-[90vh] overflow-y-auto">
          <div className="flex justify-between items-start mb-6">
            <h3 className="text-xl sm:text-2xl font-bold text-text-light pr-8">{project.title}</h3>
            <button
              onClick={onClose}
              className="text-text-dark hover:text-accent transition-colors -mr-2"
            >
              <FaTimes className="w-5 h-5 sm:w-6 sm:h-6" />
            </button>
          </div>

          {project.architectureGif && (
            <div className="mb-6 rounded-xl overflow-hidden border border-accent/10">
              <img
                src={project.architectureGif}
                alt={`${project.title} Architecture`}
                className="w-full h-auto"
              />
            </div>
          )}

          <div className="space-y-4 mb-6">
            <p className="text-text-dark text-sm sm:text-base">{project.description}</p>
            
            <div className="space-y-2">
              <h4 className="font-semibold text-text-light text-base sm:text-lg">Key Features:</h4>
              <ul className="list-disc list-inside text-text-dark space-y-1 text-sm sm:text-base">
                {project.features?.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>

            <div className="space-y-2">
              <h4 className="font-semibold text-text-light text-base sm:text-lg">Technologies Used:</h4>
              <div className="flex flex-wrap gap-2">
                {project.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="px-2 py-1 sm:px-3 text-xs sm:text-sm rounded-full bg-surface-dark text-accent border border-accent/10"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="flex justify-end pt-4 border-t border-accent/10">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 px-4 py-2 rounded-lg bg-accent text-background-dark hover:bg-accent-dark transition-colors text-sm sm:text-base"
            >
              <FaGithub className="w-4 h-4 sm:w-5 sm:h-5" />
              <span>View on GitHub</span>
            </a>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
}

export default ProjectModal;