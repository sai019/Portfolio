import React, { useState, useEffect, lazy, Suspense, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import BackgroundDecoration from './components/BackgroundDecoration';
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
  FaBriefcase,
  FaHome,
  FaDownload
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
import Typed from 'typed.js';
import resumePDF from './assets/sai_kumar_Data_Engineer.pdf';

const standardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// New components for enhanced visual design
function HeroSection() {
  const el = React.useRef(null);
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Data Engineer',
        'ETL Developer',
        'Data Analytics Expert',
        'Big Data Specialist'
      ],
      typeSpeed: 80,
      backSpeed: 40,
      backDelay: 1500,
      loop: true,
      cursorChar: '|',
    };
    
    typed.current = new Typed(el.current, options);
    return () => typed.current.destroy();
  }, []);

  const profileVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.8
      }
    }
  };

  const textVariants = {
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

  return (
    <section id="home" className="relative min-h-screen flex items-center bg-background-dark overflow-hidden">
      <BackgroundDecoration />
      
      <div className="container mx-auto px-4 relative z-10 py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image without Glow Effect */}
          <motion.div
            variants={profileVariants}
            initial="hidden"
            animate="visible"
            className="flex justify-center"
          >
            <div className="relative w-[150px] h-[150px] md:w-[300px] md:h-[300px]">
              <img
                src={profilePic}
                alt="Sai kumar K"
                className="w-full h-full object-contain rounded-full p-2 bg-background-dark"
              />
            </div>
          </motion.div>

          {/* Text Content with Enhanced Animations */}
          <motion.div
            variants={textVariants}
            initial="hidden"
            animate="visible"
            className="text-center md:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
                Sai kumar <span className="text-gradient">K</span>
              </h1>
              <h2 className="text-xl md:text-2xl text-text-dark mb-8">
                <span className="text-accent" ref={el}></span>
              </h2>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-text-dark text-lg mb-8 max-w-lg mx-auto md:mx-0"
            >
              Building scalable data solutions and transforming complex data challenges into efficient, actionable insights.
            </motion.p>
            
            {/* Social Links and Resume Button */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-col md:flex-row items-center gap-6 md:gap-8"
            >
              <div className="flex items-center justify-center md:justify-start space-x-6">
                <motion.a
                  href="https://github.com/sai019"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link group"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 rounded-full bg-surface-dark border border-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <FaGithub className="w-6 h-6 text-white group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/saikumarkollu"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-icon-link group"
                  whileHover={{ y: -4 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <div className="p-3 rounded-full bg-surface-dark border border-accent/10 group-hover:border-accent/30 transition-all duration-300">
                    <FaLinkedin className="w-6 h-6 text-[#0A66C2] group-hover:text-accent transition-colors" />
                  </div>
                </motion.a>
              </div>
              
              <motion.a
                href={resumePDF}
                download="Saikumar_K_Resume.pdf"
                className="inline-flex items-center px-6 py-3 rounded-lg bg-accent text-background-dark font-medium hover:bg-accent-dark transition-all duration-300 shadow-lg hover:shadow-xl"
                whileHover={{ 
                  y: -4,
                  boxShadow: "0 4px 20px rgba(20, 184, 166, 0.3)"
                }}
                whileTap={{ scale: 0.95 }}
              >
                <FaDownload className="w-5 h-5 mr-2" />
                Download Resume
              </motion.a>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll Indicator with adjusted position */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2 }}
          className="absolute bottom-2 left-1/2 transform -translate-x-1/2 mb-4"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="flex flex-col items-center"
          >
            <span className="text-text-dark text-sm mb-2">Scroll to explore</span>
            <div className="w-1 h-8 rounded-full bg-accent/20 relative">
              <motion.div
                animate={{ 
                  y: [0, 28, 0],
                  opacity: [1, 0.2, 1]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="absolute top-0 w-full h-2 rounded-full bg-accent"
              />
            </div>
          </motion.div>
        </motion.div>
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
    <section id="skills" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            {...standardMotion}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
            <p className="text-text-dark text-lg">Core technologies I work with</p>
          </motion.div>

          {/* Removed standard-card wrapper, grid directly after header */}
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
        </div>
      </div>
    </section>
  );
}

function CertificationsSection() {
  const certifications = [
    {
      title: "Azure Data Engineer Associate",
      issuer: "Microsoft",
      date: "2023",
      icon: <SiMicrosoftazure className="w-8 h-8" style={{ color: '#0089D6' }} />,
      link: "#"
    },
    {
      title: "Databricks Certified Data Engineer Professional",
      issuer: "Databricks",
      date: "2023",
      icon: <SiDatabricks className="w-8 h-8" style={{ color: '#FF3621' }} />,
      link: "#"
    },
    {
      title: "AWS Certified Data Analytics - Specialty",
      issuer: "Amazon Web Services",
      date: "2022",
      icon: <FaAws className="w-8 h-8" style={{ color: '#FF9900' }} />,
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
      icon: <FaDatabase className="w-6 h-6" style={{ color: '#2196F3' }} />
    },
    {
      title: "Pipelines Built",
      value: "200+",
      icon: <FaStream className="w-6 h-6" style={{ color: '#4CAF50' }} />
    },
    {
      title: "Cost Optimization",
      value: "40%",
      icon: <FaChartLine className="w-6 h-6" style={{ color: '#FFC107' }} />
    },
    {
      title: "Success Rate",
      value: "99.9%",
      icon: <FaCheckCircle className="w-6 h-6" style={{ color: '#00C853' }} />
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
                <li key={i} className="flex items-start space-x-3 group/item">
                  <span className="w-2 h-2 mt-2 rounded-full bg-text-dark flex-shrink-0"></span>
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
      description="..."
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        <motion.div
          // ... other props ...
        >
          <h3 className="text-xl font-semibold mb-4 text-accent">What I Do</h3>
          <ul className="space-y-3 text-text-dark">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-dark flex-shrink-0"></span>
              <span className="text-text-light">Design and implement scalable data architectures</span>
            </li>
            {/* ... other list items with same pattern ... */}
          </ul>
        </motion.div>

        <motion.div
          // ... other props ...
        >
          <h3 className="text-xl font-semibold mb-4 text-accent">My Approach</h3>
          <ul className="space-y-3 text-text-dark">
            <li className="flex items-start space-x-3">
              <span className="w-2 h-2 mt-2 rounded-full bg-text-dark flex-shrink-0"></span>
              <span className="text-text-light">Focus on scalable and maintainable solutions</span>
            </li>
            {/* ... other list items with same pattern ... */}
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
              { href: "#about", label: "About", icon: <FaUser className="w-5 h-5" style={{ color: '#4CAF50' }} /> },
              { href: "#skills", label: "Skills", icon: <FaCode className="w-5 h-5" style={{ color: '#2196F3' }} /> },
              { href: "#projects", label: "Projects", icon: <FaFolder className="w-5 h-5" style={{ color: '#FFC107' }} /> },
              { href: "#experience", label: "Experience", icon: <FaBriefcase className="w-5 h-5" style={{ color: '#9C27B0' }} /> },
              { href: "#contact", label: "Contact", icon: <FaEnvelope className="w-5 h-5" style={{ color: '#EA4335' }} /> }
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
                className="transition-colors"
              >
                <FaGithub className="w-6 h-6" style={{ color: '#ffffff' }} /> {/* Changed color to white */}
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

function ScrollToTopButton() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          onClick={scrollToTop}
          className="fixed bottom-8 right-4 w-10 h-10 rounded-full bg-accent text-background-dark flex items-center justify-center shadow-lg hover:bg-accent-dark transition-colors duration-300 z-50"
          aria-label="Scroll to top"
          whileHover={{ y: -3 }}
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className="h-5 w-5" 
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a 1 1 0 010 1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </motion.button>
      )}
    </AnimatePresence>
  );
}

// Add this constant at the top of your App.jsx file
const NAV_THEME = {
  color: '#98FF98',          // Cool mint
  hoverColor: '#ADFFAD',     // Lighter mint
  bgColor: 'rgba(152, 255, 152, 0.1)',
  borderColor: 'rgba(152, 255, 152, 0.2)'
};

function SideNavigation({ navItems }) {
  const [isVisible, setIsVisible] = useState(true);
  const hideTimeout = useRef(null);

  useEffect(() => {
    const showNav = () => {
      setIsVisible(true);
      
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
      
      hideTimeout.current = setTimeout(() => {
        setIsVisible(false);
      }, 1500);
    };

    window.addEventListener('mousemove', showNav);

    return () => {
      window.removeEventListener('mousemove', showNav);
      if (hideTimeout.current) {
        clearTimeout(hideTimeout.current);
      }
    };
  }, []);

  return (
    <motion.div 
      className="fixed left-6 top-0 h-screen flex items-center z-50"
      initial={{ opacity: 1 }}
      animate={{ 
        opacity: isVisible ? 1 : 0,
        x: isVisible ? 0 : -20
      }}
      transition={{ duration: 0.3 }}
    >
      <div className="flex flex-col gap-4">
        {navItems.map((item) => (
          <div key={item.id} className="relative group">
            <a
              href={`#${item.id}`}
              className="flex items-center"
              onMouseEnter={() => setIsVisible(true)}
            >
              <div 
                className="flex items-center rounded-full transition-all duration-300 overflow-hidden hover:bg-white/10"
                style={{ 
                  backgroundColor: NAV_THEME.bgColor,
                  border: `1px solid ${NAV_THEME.borderColor}`
                }}
              >
                <div className="w-8 h-8 md:w-9 md:h-9 flex items-center justify-center">
                  <span 
                    className="group-hover:scale-110 transition-transform duration-300"
                    style={{ color: NAV_THEME.color }}
                  >
                    <div className="w-4 h-4 group-hover:text-[#E2E8F0] transition-colors duration-300">
                      {item.icon}
                    </div>
                  </span>
                </div>
                <div 
                  className="hidden md:block pr-3 pl-1 opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden"
                  style={{ color: NAV_THEME.color }}
                >
                  <span className="text-sm font-medium group-hover:text-[#E2E8F0] transition-colors duration-300">
                    {item.label}
                  </span>
                </div>
              </div>
            </a>
          </div>
        ))}
      </div>
    </motion.div>
  );
}

function App() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Define navItems here so it's accessible to both mobile and desktop navigation
  const navItems = [
    { 
      id: 'home', // Add home as first item
      icon: <FaHome className="w-5 h-5" />, 
      label: 'Home',
      color: '#E6E6FA', // Light gray that matches the dark theme
      bgColor: 'rgba(230, 230, 250, 0.1)' // Very subtle background
    },
    { 
      id: 'about', 
      icon: <FaUser className="w-5 h-5" />, 
      label: 'About',
      color: '#E6E6FA',
      bgColor: 'rgba(230, 230, 250, 0.1)'
    },
    { 
      id: 'skills', 
      icon: <FaCode className="w-5 h-5" />, 
      label: 'Skills',
      color: '#E6E6FA',
      bgColor: 'rgba(230, 230, 250, 0.1)'
    },
    { 
      id: 'projects', 
      icon: <FaFolder className="w-5 h-5" />, 
      label: 'Projects',
      color: '#E6E6FA',
      bgColor: 'rgba(230, 230, 250, 0.1)'
    },
    { 
      id: 'experience', 
      icon: <FaBriefcase className="w-5 h-5" />, 
      label: 'Experience',
      color: '#E6E6FA',
      bgColor: 'rgba(230, 230, 250, 0.1)'
    },
    { 
      id: 'contact', 
      icon: <FaEnvelope className="w-5 h-5" />, 
      label: 'Contact',
      color: '#E6E6FA',
      bgColor: 'rgba(230, 230, 250, 0.1)'
    }
  ];

  return (
    <div className="min-h-screen bg-background-dark text-text-light">
      {/* Mobile Menu Button - Only visible on mobile */}
      <div className="md:hidden fixed top-4 right-4 z-50">
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="p-2 rounded-lg bg-surface-card border border-accent/10"
        >
          <FaBars className="w-6 h-6 text-text-light" />
        </button>
      </div>

      {/* Mobile Menu - Only visible on mobile when open */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 100 }}
            className="md:hidden fixed inset-0 z-40 bg-background-dark/95"
          >
            <div className="flex flex-col h-full p-4">
              <button
                onClick={() => setIsMobileMenuOpen(false)}
                className="self-end p-2"
              >
                <FaTimes className="w-6 h-6 text-text-light" />
              </button>
              <nav className="flex flex-col items-center justify-center h-full gap-8">
                {navItems.map((item) => (
                  <a
                    key={item.id}
                    href={`#${item.id}`}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="flex items-center gap-3 text-lg group hover:scale-110 transition-transform"
                    style={{ color: item.color }}
                  >
                    <div 
                      className="p-3 rounded-full transition-colors duration-300"
                      style={{ backgroundColor: item.bgColor }}
                    >
                      {item.icon}
                    </div>
                    <span className="font-medium group-hover:translate-x-1 transition-transform">
                      {item.label}
                    </span>
                  </a>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Desktop Navigation - Hidden on mobile */}
      <div className="hidden md:block">
        <SideNavigation navItems={navItems} />
      </div>

      {/* Main Content */}
      <main className="md:ml-24 ml-4">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ExperienceSection />
        <CertificationsSection />
        <Suspense fallback={<LoadingSpinner />}>
          <ContactSection />
        </Suspense>
      </main>

      <footer className="py-8 bg-background-darker md:ml-24 ml-4">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center justify-center space-y-3">
            <p className="text-2xl md:text-3xl font-extrabold text-text-light font-poppins tracking-wide">
              Sai kumar K
            </p>
            <p className="text-lg md:text-xl font-light text-text-dark font-montserrat tracking-wider">
              Data Engineer
            </p>
            <p className="text-sm text-text-dark mt-2 font-inter">
              © {new Date().getFullYear()} All rights reserved
            </p>
          </div>
        </div>
      </footer>

      <ScrollToTopButton />
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
