import { motion } from 'framer-motion';
import { FaEnvelope, FaGithub, FaLinkedin } from 'react-icons/fa';

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Let's Connect</h2>
            <p className="text-text-dark text-lg">
              Feel free to get in touch with me. I am always open to discussing new projects, creative ideas or opportunities.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Email Contact Box */}
            <motion.a
              href="mailto:saikumarkollu855@gmail.com"
              whileHover={{ y: -5 }}
              className="group block p-6 bg-surface-card backdrop-blur-xs rounded-2xl border border-accent/10 shadow-card hover:shadow-xl transition-all duration-300 glow-effect"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-surface-dark rounded-full border border-accent/10 group-hover:border-accent group-hover:glow transition-all duration-300">
                  <FaEnvelope className="w-8 h-8 text-accent group-hover:text-accent group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-text-light">Email</h3>
                <p className="text-text-dark text-sm group-hover:text-accent transition-colors">saikumarkollu855@gmail.com</p>
              </div>
            </motion.a>

            {/* GitHub Contact Box */}
            <motion.a
              href="https://github.com/sai019"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group block p-6 bg-surface-card backdrop-blur-xs rounded-2xl border border-accent/10 shadow-card hover:shadow-xl transition-all duration-300 glow-effect"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-surface-dark rounded-full border border-accent/10 group-hover:border-accent group-hover:glow transition-all duration-300">
                  <FaGithub className="w-8 h-8 text-accent group-hover:text-accent group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-text-light">GitHub</h3>
                <p className="text-text-dark text-sm group-hover:text-accent transition-colors">github.com/sai019</p>
              </div>
            </motion.a>

            {/* LinkedIn Contact Box */}
            <motion.a
              href="https://linkedin.com/in/saikumarkollu"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ y: -5 }}
              className="group block p-6 bg-surface-card backdrop-blur-xs rounded-2xl border border-accent/10 shadow-card hover:shadow-xl transition-all duration-300 glow-effect"
            >
              <div className="flex flex-col items-center text-center space-y-4">
                <div className="p-4 bg-surface-dark rounded-full border border-accent/10 group-hover:border-accent group-hover:glow transition-all duration-300">
                  <FaLinkedin className="w-8 h-8 text-accent group-hover:text-accent group-hover:animate-pulse" />
                </div>
                <h3 className="text-xl font-semibold text-text-light">LinkedIn</h3>
                <p className="text-text-dark text-sm group-hover:text-accent transition-colors">linkedin.com/in/saikumarkollu</p>
              </div>
            </motion.a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactSection;