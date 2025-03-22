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
  FaBriefcase,
  FaHome
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

const standardMotion = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 }
};

// New components for enhanced visual design
function HeroSection() {
  // Create reference to store the DOM element containing the animation
  const el = React.useRef(null);
  // Create reference to store the Typed instance itself
  const typed = React.useRef(null);

  React.useEffect(() => {
    const options = {
      strings: [
        'Data Engineer',
        'ETL Developer',
        'Data Analytics',
        'Big Data Specialist'
      ],
      typeSpeed: 100,
      backSpeed: 50,
      backDelay: 1000,
      loop: true,
      cursorChar: '|',
    };
    
    // elRef refers to the <span> rendered below
    typed.current = new Typed(el.current, options);
    
    return () => {
      // Make sure to destroy Typed instance during cleanup
      // to prevent memory leaks
      typed.current.destroy();
    }
  }, []);

  return (
    <section id="home" className="min-h-screen relative flex items-center bg-background-dark overflow-hidden">
      {/* Background Design Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {/* Soft Gradient Background */}
        <div 
          className="absolute inset-0 opacity-20"
          style={{
            background: `radial-gradient(circle at 30% 40%, rgba(0, 255, 187, 0.08), transparent 40%), 
                radial-gradient(circle at 70% 60%, rgba(0, 255, 187, 0.08), transparent 40%)`
          }}
        />

        {/* Minimalistic Floating Elements */}
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0.1, 0.3, 0.1],
              scale: [1, 1.2, 1],
              x: [0, 20, 0],
              y: [0, -20, 0]
            }}
            transition={{ 
              duration: Math.random() * 5 + 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2
            }}
            className="absolute rounded-full blur-3xl"
            style={{
              width: `${Math.random() * 400 + 200}px`,
              height: `${Math.random() * 400 + 200}px`,
              left: `${Math.random() * 70}%`,
              top: `${Math.random() * 70}%`,
              background: `rgba(0, 255, 187, 0.03)`,
              transform: `rotate(${Math.random() * 360}deg)`
            }}
          />
        ))}

        {/* Accent Corner Elements */}
        <div 
          className="absolute -top-40 -right-40 w-96 h-96 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 187, 0.2) 0%, transparent 70%)'
          }}
        />
        <div 
          className="absolute -bottom-40 -left-40 w-96 h-96 opacity-[0.03]"
          style={{
            background: 'radial-gradient(circle, rgba(0, 255, 187, 0.2) 0%, transparent 70%)'
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <div className="relative w-[200px] h-[200px] md:w-[350px] md:h-[350px]">
              <img
                src={profilePic}
                alt="Sai kumar K"
                className="w-full h-full object-contain rounded-full"
                style={{ 
                  filter: 'brightness(1) contrast(1)'
                }}
              />
            </div>
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center md:text-left"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 tracking-tight">
              Sai kumar <span className="text-accent">K</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-text-dark mb-8 h-8">
              <span className="text-accent" ref={el}></span>
            </h2>
            <p className="text-text-dark text-lg mb-8 max-w-lg">
              Building scalable data solutions and transforming complex data challenges into efficient, actionable insights.
            </p>
            <div className="flex items-center justify-center md:justify-start space-x-6 mb-8">
              <motion.a
                href="https://github.com/sai019"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-accent transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <FaGithub className="w-6 h-6" style={{ color: '#ffffff' }} />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/saikumarkollu"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-light hover:text-accent transition-all duration-300"
                whileHover={{ y: -3 }}
              >
                <FaLinkedin className="w-6 h-6" style={{ color: '#0A66C2' }} />
              </motion.a>
            </div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <a
                href="#contact"
                className="inline-flex items-center px-8 py-3 rounded-lg bg-accent text-background-dark font-medium hover:bg-accent-dark transition-colors duration-300"
              >
                Get in Touch
                <FaEnvelope className="ml-2 w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>
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

function SideNavigation({ navItems }) {
  return (
    // Update the positioning and responsive classes
    <div className="fixed md:left-8 left-4 top-1/2 -translate-y-1/2 z-50 space-y-4 md:space-y-6">
      {navItems.map((item) => (
        <div key={item.id} className="relative group">
          <a
            href={`#${item.id}`}
            className="flex items-center"
          >
            <div 
              className="flex items-center rounded-full transition-all duration-300 overflow-hidden"
              style={{ 
                backgroundColor: item.bgColor,
                border: `2px solid ${item.color}30`
              }}
            >
              {/* Smaller size on mobile */}
              <div className="w-8 h-8 md:w-12 md:h-12 flex items-center justify-center">
                <span 
                  className="group-hover:scale-110 transition-transform duration-300 text-sm md:text-base"
                  style={{ color: item.color }}
                >
                  {item.icon}
                </span>
              </div>
              {/* Hide tooltip on mobile */}
              <div 
                className="hidden md:block pr-4 pl-1 opacity-0 max-w-0 group-hover:max-w-[100px] group-hover:opacity-100 transition-all duration-300 whitespace-nowrap overflow-hidden"
                style={{ color: item.color }}
              >
                <span className="font-medium">{item.label}</span>
              </div>
            </div>
          </a>
        </div>
      ))}
    </div>
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
      color: '#FF6B6B', // Choose a distinct color for home
      bgColor: 'rgba(255, 107, 107, 0.1)'
    },
    { 
      id: 'about', 
      icon: <FaUser className="w-5 h-5" />, 
      label: 'About',
      color: '#4CAF50',
      bgColor: 'rgba(76, 175, 80, 0.1)'
    },
    { 
      id: 'skills', 
      icon: <FaCode className="w-5 h-5" />, 
      label: 'Skills',
      color: '#2196F3',
      bgColor: 'rgba(33, 150, 243, 0.1)'
    },
    { 
      id: 'projects', 
      icon: <FaFolder className="w-5 h-5" />, 
      label: 'Projects',
      color: '#FFC107',
      bgColor: 'rgba(255, 193, 7, 0.1)'
    },
    { 
      id: 'experience', 
      icon: <FaBriefcase className="w-5 h-5" />, 
      label: 'Experience',
      color: '#9C27B0',
      bgColor: 'rgba(156, 39, 176, 0.1)'
    },
    { 
      id: 'contact', 
      icon: <FaEnvelope className="w-5 h-5" />, 
      label: 'Contact',
      color: '#EA4335',
      bgColor: 'rgba(234, 67, 53, 0.1)'
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
