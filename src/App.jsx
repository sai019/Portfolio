import React, { useState, useEffect, lazy, Suspense } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  FaGithub,
  FaLinkedin,
  FaDatabase,
  FaPython,
  FaEnvelope, 
  FaMapMarkerAlt,
  FaStream,
  FaChartLine,
  FaCheckCircle,
  FaCheck,
  FaAws,
  FaBars,
  FaTimes,
  FaUser,
  FaCode,
  FaFolder,
  FaBriefcase
} from 'react-icons/fa';
import { 
  SiApachespark, 
  SiApacheairflow, 
  SiApachekafka, 
  SiMicrosoftazure,
  SiDatabricks,
  SiPowerbi,
  SiGooglecloud,
  SiSnowflake
} from 'react-icons/si';
import { Helmet } from 'react-helmet';
import profilePic from './assets/Profile_pic.png';

const standardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// New components for enhanced visual design
function HeroSection() {
  return (
    <section className="hero min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="text-center md:text-left">
            <motion.h1
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              Data <span className="text-accent">Engineer</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl text-text-dark mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              Building scalable data pipelines and analytics solutions
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="bg-accent hover:bg-accent-dark text-background-dark px-8 py-3 rounded-lg font-medium transition-colors"
              >
                Get in Touch
              </a>
            </motion.div>
          </div>
          <div className="mx-auto">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="relative w-[280px] h-[280px] md:w-[350px] md:h-[350px] rounded-full overflow-hidden"
            >
              <img
                src={profilePic}  // Use the imported image
                alt="Data Engineer"
                className="w-full h-full object-contain mix-blend-screen rounded-full scale-90"
                style={{ 
                  filter: 'brightness(0.9) contrast(1.1)',
                  transform: 'scale(0.9)'
                }}
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillCard({ icon, title, description, websiteUrl }) {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="bg-surface-card backdrop-blur-xs p-6 rounded-2xl border border-accent/10 hover:border-accent/20 transition-all duration-300"
    >
      <a href={websiteUrl} 
         target="_blank" 
         rel="noopener noreferrer"
         className="block h-full hover:text-accent transition-colors"
      >
        <div className="flex flex-col items-center text-center">
          <div className="text-accent mb-4">
            {icon}
          </div>
          <h3 className="text-xl font-semibold mb-2">{title}</h3>
          <p className="text-text-dark text-sm">{description}</p>
        </div>
      </a>
    </motion.div>
  );
}

// Add this new ProjectModal component
const ProjectModal = lazy(() => import('./components/ProjectModal'));

// Update the ProjectCard component
function ProjectCard({ project, onClick }) {
  return (
    <motion.div
      onClick={onClick}
      className="group relative overflow-hidden rounded-2xl bg-surface-card backdrop-blur-xs p-6 border border-accent/10 shadow-card transition-all duration-300 cursor-pointer"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-bold mb-3 text-text-light group-hover:text-accent transition-all duration-300">
        {project.title}
      </h3>
      
      <p className="text-text-dark mb-4">{project.description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-surface-dark text-accent border border-accent/10"
          >
            {tag}
          </span>
        ))}
      </div>

      {/* View Details Button */}
      <div className="mt-4 pt-4 border-t border-accent/10 flex justify-end">
        <div className="text-text-dark group-hover:text-accent transition-colors text-sm flex items-center gap-2">
          <span>View Project Details</span>
          <FaFolder className="w-4 h-4" />
        </div>
      </div>
    </motion.div>
  );
}

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

function ScrollProgress() {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const scroll = `${totalScroll / windowHeight * 100}%`;
      setScroll(scroll);
    };

    window.addEventListener('scroll', handleScroll); // Fixed from addListener
    return () => window.removeEventListener('scroll', handleScroll); // Fixed from removeListener
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 p-4 rounded-full bg-surface-card backdrop-blur-xs border border-accent/10 shadow-card">
    </div>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const validateForm = () => {
    // Add validation logic
  };

  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');
    // Add your form submission logic here
    setTimeout(() => setStatus('sent'), 1000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Form fields */}
      <button 
        type="submit" 
        disabled={status === 'sending'}
        className="w-full py-3 px-6 bg-[#070707] text-white rounded-lg hover:opacity-90 transition-opacity"
      >
        {status === 'sending' ? 'Sending...' : status === 'sent' ? 'Message Sent!' : 'Send Message'}
      </button>
    </form>
  );
}

// Skills section component
function SkillsSection() {
  const skills = [
    {
      icon: <FaPython className="w-8 h-8" style={{ color: '#3776AB' }} />, // Python blue
      title: "Python",
      websiteUrl: "https://www.python.org/"
    },
    {
      icon: <FaDatabase className="w-8 h-8" style={{ color: '#336791' }} />, // PostgreSQL blue
      title: "SQL",
      websiteUrl: "https://www.postgresql.org/"
    },
    {
      icon: <SiApachespark className="w-8 h-8" style={{ color: '#E25A1C' }} />, // Spark orange
      title: "Apache Spark",
      websiteUrl: "https://spark.apache.org/"
    },
    {
      icon: <SiApacheairflow className="w-8 h-8" style={{ color: '#017CEE' }} />, // Airflow blue
      title: "Apache Airflow",
      websiteUrl: "https://airflow.apache.org/"
    },
    {
      icon: <SiApachekafka className="w-8 h-8" style={{ color: '#231F20' }} />, // Kafka black
      title: "Apache Kafka",
      websiteUrl: "https://kafka.apache.org/"
    },
    {
      icon: <SiMicrosoftazure className="w-8 h-8" style={{ color: '#0089D6' }} />, // Azure blue
      title: "Microsoft Azure",
      websiteUrl: "https://azure.microsoft.com/"
    },
    {
      icon: <SiDatabricks className="w-8 h-8" style={{ color: '#FF3621' }} />, // Databricks red
      title: "Databricks",
      websiteUrl: "https://www.databricks.com/"
    },
    {
      icon: <SiGooglecloud className="w-8 h-8" style={{ color: '#4285F4' }} />, // Google Cloud blue
      title: "Google Cloud",
      websiteUrl: "https://cloud.google.com/"
    },
    {
      icon: <SiPowerbi className="w-8 h-8" style={{ color: '#F2C811' }} />, // Power BI yellow
      title: "Power BI",
      websiteUrl: "https://powerbi.microsoft.com/"
    }
  ];

  return (
    <StandardSection
      id="skills"
      title="Technical Skills"
      description="Core technologies I work with"
    >
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-0 relative">
        {skills.map((skill, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="relative border-accent/10"
            style={{
              borderRight: ((index + 1) % 3 !== 0) ? '1px solid' : '1px solid',
              borderBottom: '1px solid',
              borderLeft: ((index % 3) === 0) ? '1px solid' : 'none',
              borderTop: (index < 3) ? '1px solid' : 'none',
              borderColor: 'rgb(0, 255, 187, 0.1)'
            }}
          >
            <a 
              href={skill.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-4 group p-4 hover:bg-surface-dark rounded-xl transition-all duration-300"
            >
              <div className="group-hover:scale-110 transition-transform duration-300">
                {skill.icon}
              </div>
              <h3 className="text-lg font-semibold group-hover:text-accent transition-colors">
                {skill.title}
              </h3>
            </a>
          </motion.div>
        ))}
      </div>
    </StandardSection>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      icon: <SiMicrosoftazure className="w-8 h-8" />,
      link: "#"
    },
    {
      title: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      date: "2023",
      icon: <SiDatabricks className="w-8 h-8" />,
      link: "#"
    },
    {
      title: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      icon: <FaAws className="w-8 h-8" />,
      link: "#"
    }
  ];

  return (
    <StandardSection
      id="certifications"
      title="Certifications"
      description="Professional certifications and achievements"
    >
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
        {certifications.map((cert, index) => (
          <motion.a
            key={index}
            href={cert.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-surface-card p-6 rounded-2xl border border-accent/10 hover:border-accent/20 transition-colors group"
          >
            <div className="flex items-center space-x-4 mb-4">
              <div className="p-3 bg-surface-dark rounded-xl border border-accent/10 group-hover:border-accent/20 transition-colors">
                {cert.icon}
              </div>
              <div className="flex-1">
                <h3 className="font-semibold text-text-light group-hover:text-accent transition-colors">{cert.title}</h3>
                <p className="text-text-dark text-sm">{cert.issuer}</p>
              </div>
            </div>
            <p className="text-text-dark text-sm">{cert.date}</p>
          </motion.a>
        ))}
      </div>
    </StandardSection>
  );
}

function MetricsSection() {
  const metrics = [
    {
      title: "Data Processed",
      value: "500TB+",
      icon: <FaDatabase className="w-6 h-6" />
    },
    {
      title: "Pipelines Built",
      value: "200+",
      icon: <FaStream className="w-6 h-6" />
    },
    {
      title: "Cost Optimization",
      value: "40%",
      icon: <FaChartLine className="w-6 h-6" />
    },
    {
      title: "Success Rate",
      value: "99.9%",
      icon: <FaCheckCircle className="w-6 h-6" />
    }
  ];

  return (
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {metrics.map((metric, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="text-center"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-surface-card rounded-xl border border-accent/10">
                  {metric.icon}
                </div>
                <h3 className="text-3xl font-bold text-text-light mb-2">{metric.value}</h3>
                <p className="text-text-dark">{metric.title}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      company: "Tech Giant Corp",
      position: "Senior Data Engineer",
      period: "2021 - Present",
      description: "Led the development of real-time data processing pipelines handling 100TB+ daily data volume.",
      achievements: [
        "Reduced data processing costs by 40% through optimization",
        "Implemented automated data quality checks",
        "Led a team of 5 engineers in modernizing legacy systems"
      ]
    },
    {
      company: "Data Solutions Inc",
      position: "Data Engineer",
      period: "2019 - 2021",
      description: "Designed and maintained ETL workflows for business intelligence and analytics.",
      achievements: [
        "Built scalable data pipelines using Apache Airflow",
        "Improved data warehouse query performance by 60%",
        "Implemented data governance practices"
      ]
    }
  ];

  return (
    <StandardSection
      id="experience"
      title="Work Experience"
      description="Professional journey in data engineering"
    >
      {experiences.map((exp, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
          className="group/experience"
        >
          <div className="mb-8">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <div>
                <h3 className="text-xl font-semibold text-text-light group-hover/experience:text-accent group-hover/experience:glow transition-all duration-300">
                  {exp.position}
                </h3>
                <p className="text-accent">
                  {exp.company}
                </p>
              </div>
              <p className="text-text-dark mt-2 md:mt-0 group-hover/experience:text-accent group-hover/experience:glow transition-all duration-300">
                {exp.period}
              </p>
            </div>
            <p className="text-text-dark mb-4">{exp.description}</p>
            <ul className="space-y-2">
              {exp.achievements.map((achievement, i) => (
                <li key={i} className="flex items-start space-x-3 group/item hover:text-accent transition-colors">
                  <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
                  <span className="text-text-light">{achievement}</span>
                </li>
              ))}
            </ul>
          </div>
          {index < experiences.length - 1 && (
            <div className="border-b border-accent/10 mb-8"></div>
          )}
        </motion.div>
      ))}
    </StandardSection>
  );
}

// Update the ProjectsSection component
function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [filter, setFilter] = useState('all');
  
  const projects = [
    {
      title: "Data Pipeline Automation",
      description: "Automated ETL pipeline using Apache Airflow and AWS services for processing large-scale data workflows.",
      tags: ["Python", "Airflow", "AWS"],
      githubUrl: "https://github.com/yourusername/data-pipeline-automation",
      architectureGif: "/path/to/pipeline-architecture.gif",
      features: [
        "Automated data validation and quality checks",
        "Real-time monitoring and alerting",
        "Scalable processing of 100TB+ daily data",
        "Cost optimization through intelligent scheduling"
      ]
    },
    // Add more projects with detailed information
  ];

  const filteredProjects = projects.filter(project => 
    filter === 'all' || project.category === filter
  );

  return (
    <StandardSection
      id="projects"
      title="Featured Projects"
      description="Click on a project to learn more"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <ProjectCard 
              project={project} 
              onClick={() => setSelectedProject(project)} 
            />
          </motion.div>
        ))}
      </div>

      <Suspense fallback={<LoadingSpinner />}>
        <ProjectModal 
          project={selectedProject}
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      </Suspense>
    </StandardSection>
  );
}

const ContactSection = lazy(() => import('./components/ContactSection'));

function AboutSection() {
  return (
    <StandardSection
      id="about"
      title="About Me"
      description="I am a Senior Data Engineer with over 5 years of experience in building scalable data solutions. 
      Specializing in designing and implementing robust data pipelines, warehousing solutions, and 
      real-time analytics platforms."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-card p-6 rounded-2xl border border-accent/10"
        >
          <h3 className="text-xl font-semibold mb-4 text-accent">What I Do</h3>
          <ul className="space-y-3 text-text-dark">
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Design and implement scalable data architectures</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Build and optimize ETL/ELT pipelines</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Develop real-time data processing solutions</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Implement data quality and testing frameworks</span>
            </li>
          </ul>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-surface-card p-6 rounded-2xl border border-accent/10"
        >
          <h3 className="text-xl font-semibold mb-4 text-accent">My Approach</h3>
          <ul className="space-y-3 text-text-dark">
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Focus on scalable and maintainable solutions</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Emphasis on automation and efficiency</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Data-driven decision making</span>
            </li>
            <li className="flex items-start space-x-3 group/item">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-light group-hover/item:bg-accent group-hover/item:glow transition-all duration-300 flex-shrink-0"></span>
              <span className="text-text-light">Continuous learning and improvement</span>
            </li>
          </ul>
        </motion.div>
      </div>
    </StandardSection>
  );
}

function Menu({ isOpen, onClose }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: '100%' }}
      animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : '100%' }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
      className={`fixed top-0 right-0 h-full w-80 bg-surface-card/95 backdrop-blur-lg border-l border-accent/10 z-50 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="p-8">
        <motion.button 
          onClick={onClose}
          whileHover={{ rotate: 90 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="absolute top-6 right-6 text-text-dark hover:text-accent transition-colors"
        >
          <FaTimes className="w-6 h-6" />
        </motion.button>

        <nav className="mt-16">
          <motion.ul className="space-y-6">
            {[
              { href: "#about", label: "About", icon: <FaUser className="w-5 h-5" /> },
              { href: "#skills", label: "Skills", icon: <FaCode className="w-5 h-5" /> },
              { href: "#projects", label: "Projects", icon: <FaFolder className="w-5 h-5" /> },
              { href: "#experience", label: "Experience", icon: <FaBriefcase className="w-5 h-5" /> },
              { href: "#contact", label: "Contact", icon: <FaEnvelope className="w-5 h-5" /> }
            ].map((item, index) => (
              <motion.li
                key={item.href}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ 
                  delay: index * 0.1,
                  type: "spring",
                  stiffness: 300
                }}
              >
                <MenuLink href={item.href} onClick={onClose} icon={item.icon}>
                  {item.label}
                </MenuLink>
              </motion.li>
            ))}
          </motion.ul>
        </nav>

        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="absolute bottom-8 left-8 right-8"
        >
          <div className="border-t border-accent/10 pt-6">
            <div className="flex justify-center space-x-6">
              <motion.a
                whileHover={{ y: -3 }}
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
              >
                <FaGithub className="w-6 h-6" />
              </motion.a>
              <motion.a
                whileHover={{ y: -3 }}
                href="https://linkedin.com/in/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-dark hover:text-accent transition-colors"
              >
                <FaLinkedin className="w-6 h-6" />
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
}

function MenuLink({ href, children, onClick, icon }) {
  return (
    <motion.a
      href={href}
      onClick={onClick}
      whileHover={{ x: 10 }}
      className="group flex items-center space-x-4 text-text-light hover:text-accent transition-colors py-2"
    >
      <span className="p-2 rounded-lg bg-surface-dark group-hover:bg-accent/10 transition-colors">
        {icon}
      </span>
      <span className="text-lg font-medium">{children}</span>
    </motion.a>
  );
}

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);
  
  if (hasError) {
    return <div className="error-container">Something went wrong. Please refresh.</div>;
  }
  
  return children;
}

function LoadingSpinner() {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-accent"></div>
    </div>
  );
}

function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  const toggleTheme = () => {
    setIsDark(!isDark);
    document.documentElement.classList.toggle('dark');
  };
}

// Add page transition wrapper
function PageTransition({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.div>
  );
}

// Add next/image or similar optimization
function OptimizedImage({ src, alt, ...props }) {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      {...props}
    />
  );
}

function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <p className="text-xl mb-8">Page not found</p>
        <a href="/" className="text-accent hover:underline">
          Go back home
        </a>
      </div>
    </div>
  );
}

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="min-h-screen bg-background-dark text-text-light">
      <Helmet>
        <title>Data Engineer Portfolio</title>
        <meta name="description" content="Senior Data Engineer with expertise in building scalable data solutions" />
        <meta name="keywords" content="data engineer, ETL, python, AWS, data pipeline" />
      </Helmet>
      {/* Navigation */}
      <nav className="fixed w-full z-50 bg-background-dark/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-text-light">
            Data<span className="text-accent">Engineer</span>
          </a>
          <button
            aria-label="Open menu"
            role="button"
            onClick={() => setIsMenuOpen(true)}
          >
            <FaBars className="w-6 h-6" />
          </button>
        </div>
      </nav>

      {/* Menu Overlay */}
      {isMenuOpen && (
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
          onClick={() => setIsMenuOpen(false)}
        />
      )}

      {/* Menu */}
      <Menu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} />

      {/* Rest of your components */}
      <main>
        <HeroSection />
        <div className="border-b border-accent/10"></div>
        
        <AboutSection />
        <div className="border-b border-accent/10"></div>
        
        <SkillsSection />
        <div className="border-b border-accent/10"></div>
        
        <ProjectsSection />
        <div class="border-b border-accent/10"></div>
        
        <ExperienceSection />
        <div className="border-b border-accent/10"></div>
        
        <CertificationsSection />
        <div className="border-b border-accent/10"></div>
        
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>

      <footer className="py-8 bg-background-darker border-t border-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center">
            <img 
              src="https://readme-typing-svg.herokuapp.com/?font=&color=F7F7F7FF&size=25&center=true&vCenter=true&width=500&height=65&duration=5500&lines=Thanks+for+visiting!!!"
              alt="Thanks for visiting!"
              className="max-w-full h-auto"
            />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;

function StandardSection({ id, title, description, children }) {
  return (
    <section id={id} className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...standardMotion}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">{title}</h2>
            <p className="text-text-dark text-lg">{description}</p>
          </motion.div>
          
          <div className="standard-card">
            {children}
          </div>
        </div>
      </div>
    </section>
  );
}
