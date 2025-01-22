import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
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
  FaAws
} from 'react-icons/fa';
import { 
  SiApachespark, 
  SiApacheairflow, 
  SiApachekafka, 
  SiMicrosoftazure,
  SiDatabricks,
  SiTableau,
  SiGooglecloud,
  SiSnowflake
} from 'react-icons/si';

// New components for enhanced visual design
function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-background-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
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

function ProjectCard({ title, description, tags, githubUrl, architectureGif }) {
  return (
    <motion.div
      className="relative overflow-hidden rounded-2xl bg-surface-card backdrop-blur-xs p-6 border border-accent/10 shadow-card transition-all duration-300"
      whileHover={{ y: -5 }}
      transition={{ type: "spring", stiffness: 300 }}
    >
      <h3 className="text-xl font-semibold mb-3 text-text-light">{title}</h3>
      <p className="text-text-dark mb-4">{description}</p>
      <div className="flex flex-wrap gap-2 mb-4">
        {tags.map((tag, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm rounded-full bg-surface-dark text-accent border border-accent/10"
          >
            {tag}
          </span>
        ))}
      </div>
      {architectureGif && (
        <div className="mb-4 overflow-hidden rounded-lg border border-accent/10">
          <img
            src={architectureGif}
            alt="Architecture Diagram"
            className="w-full h-auto transition-transform duration-300 group-hover:scale-105"
          />
        </div>
      )}
      <a
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center text-accent hover:text-text-light transition-colors"
      >
        <FaGithub className="mr-2" />
        View on GitHub
      </a>
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

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="fixed bottom-8 right-8 z-50 flex items-center gap-4 p-4 rounded-full bg-surface-card backdrop-blur-xs border border-accent/10 shadow-card">
    </div>
  );
}

function ContactForm() {
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
      icon: <FaPython className="w-8 h-8" />,
      title: "Python",
      description: "Advanced Python development with expertise in data processing, automation, and API development.",
      websiteUrl: "https://www.python.org/"
    },
    {
      icon: <FaDatabase className="w-8 h-8" />,
      title: "SQL",
      description: "Expert in SQL database design, optimization, and complex query development.",
      websiteUrl: "https://www.postgresql.org/"
    },
    {
      icon: <SiApachespark className="w-8 h-8" />,
      title: "Apache Spark",
      description: "Building scalable data processing pipelines and distributed computing solutions.",
      websiteUrl: "https://spark.apache.org/"
    },
    {
      icon: <SiApacheairflow className="w-8 h-8" />,
      title: "Apache Airflow",
      description: "Designing and implementing robust data workflow orchestration.",
      websiteUrl: "https://airflow.apache.org/"
    },
    {
      icon: <SiApachekafka className="w-8 h-8" />,
      title: "Apache Kafka",
      description: "Real-time data streaming and event-driven architecture implementation.",
      websiteUrl: "https://kafka.apache.org/"
    },
    {
      icon: <SiMicrosoftazure className="w-8 h-8" />,
      title: "Microsoft Azure",
      description: "Cloud infrastructure design and deployment using Azure services.",
      websiteUrl: "https://azure.microsoft.com/"
    },
    {
      icon: <SiDatabricks className="w-8 h-8" />,
      title: "Databricks",
      description: "Unified analytics platform for large-scale data engineering and machine learning.",
      websiteUrl: "https://www.databricks.com/"
    },
    {
      icon: <SiSnowflake className="w-8 h-8" />,
      title: "Snowflake",
      description: "Cloud data warehousing and analytics solutions.",
      websiteUrl: "https://www.snowflake.com/"
    },
    {
      icon: <SiTableau className="w-8 h-8" />,
      title: "Tableau",
      description: "Data visualization and business intelligence solutions.",
      websiteUrl: "https://www.tableau.com/"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Technical Skills</h2>
          <p className="text-text-dark text-lg">
            Core technologies I work with. Click on any skill to visit its official website.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <SkillCard {...skill} />
            </motion.div>
          ))}
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
    <section className="py-20 bg-background-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Certifications</h2>
          <p className="text-text-dark text-lg">Professional certifications and achievements</p>
        </motion.div>

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
      </div>
    </section>
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
    <section className="py-20 bg-background-darker">
      <div className="container mx-auto px-4">
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
    <section className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Work Experience</h2>
          <p className="text-text-dark text-lg">Professional journey in data engineering</p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="mb-12 last:mb-0"
            >
              <div className="bg-surface-card p-8 rounded-2xl border border-accent/10">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-xl font-semibold text-text-light">{exp.position}</h3>
                    <p className="text-accent">{exp.company}</p>
                  </div>
                  <p className="text-text-dark mt-2 md:mt-0">{exp.period}</p>
                </div>
                <p className="text-text-dark mb-4">{exp.description}</p>
                <ul className="space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start space-x-2">
                      <FaCheck className="text-accent mt-1 flex-shrink-0" />
                      <span className="text-text-dark">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  const projects = [
    {
      title: "Data Pipeline Automation",
      description: "Automated ETL pipeline using Apache Airflow and AWS services",
      tags: ["Python", "Airflow", "AWS"],
      githubUrl: "https://github.com/yourusername/data-pipeline-automation",
      architectureGif: "/path/to/pipeline-architecture.gif"
    },
    {
      title: "Real-time Analytics Platform",
      description: "Built a real-time analytics platform using Apache Kafka and Spark Streaming",
      tags: ["Kafka", "Spark", "Python"],
      githubUrl: "https://github.com/yourusername/realtime-analytics",
      architectureGif: "/path/to/realtime-architecture.gif"
    },
    {
      title: "Data Warehouse Migration",
      description: "Migrated legacy data warehouse to modern cloud architecture",
      tags: ["AWS", "Snowflake", "dbt"],
      githubUrl: "https://github.com/yourusername/warehouse-migration",
      architectureGif: "/path/to/warehouse-architecture.gif"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-background-darker">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">Featured Projects</h2>
          <p className="text-text-dark text-lg">Showcasing some of my best work in data engineering and analytics</p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <ProjectCard {...project} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">Get in Touch</h2>
            <p className="text-text-dark text-lg">
              Feel free to reach out through any of these platforms
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-surface-card backdrop-blur-xs p-8 rounded-2xl border border-accent/10 shadow-card"
          >
            <div className="grid gap-6">
              <a href="mailto:john.doe@example.com" 
                 className="flex items-center space-x-4 text-text-dark hover:text-accent transition-colors group">
                <div className="p-3 bg-surface-dark rounded-xl border border-accent/10 group-hover:border-accent/20 transition-colors">
                  <FaEnvelope className="w-6 h-6" />
                </div>
                <span>john.doe@example.com</span>
              </a>
              <a href="https://github.com/yourusername" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center space-x-4 text-text-dark hover:text-accent transition-colors group">
                <div className="p-3 bg-surface-dark rounded-xl border border-accent/10 group-hover:border-accent/20 transition-colors">
                  <FaGithub className="w-6 h-6" />
                </div>
                <span>GitHub Profile</span>
              </a>
              <a href="https://linkedin.com/in/yourusername" 
                 target="_blank" 
                 rel="noopener noreferrer" 
                 className="flex items-center space-x-4 text-text-dark hover:text-accent transition-colors group">
                <div className="p-3 bg-surface-dark rounded-xl border border-accent/10 group-hover:border-accent/20 transition-colors">
                  <FaLinkedin className="w-6 h-6" />
                </div>
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function AboutSection() {
  return (
    <section id="about" className="py-20 bg-background-dark">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <p className="text-text-dark text-lg">
              Passionate about transforming raw data into actionable insights
            </p>
          </motion.div>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Content here */}
          </div>
        </div>
      </div>
    </section>
  );
}

function NavLink({ href, children }) {
  const scrollToSection = (e) => {
    e.preventDefault();
    const targetId = href.substring(1); // Remove the # from href
    const targetSection = document.getElementById(targetId);
    
    if (targetSection) {
      const navHeight = document.querySelector('nav').offsetHeight;
      const targetPosition = targetSection.offsetTop - navHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <a 
      href={href} 
      onClick={scrollToSection}
      className="text-text-dark hover:text-accent transition-colors"
    >
      {children}
    </a>
  );
}

// Main App component with updated structure
function App() {
  return (
    <div className="min-h-screen bg-background-dark text-text-light">
      <nav className="fixed w-full z-50 bg-background-dark/80 backdrop-blur-sm border-b border-accent/10">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <a href="#" className="text-2xl font-bold text-text-light">
            Data<span className="text-accent">Engineer</span>
          </a>
          <div className="flex items-center space-x-8">
            <NavLink href="#about">About</NavLink>
            <NavLink href="#skills">Skills</NavLink>
            <NavLink href="#projects">Projects</NavLink>
            <NavLink href="#contact">Contact</NavLink>
          </div>
        </div>
      </nav>

      <ScrollProgress />
      <main>
        <HeroSection />
        <MetricsSection />
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <CertificationsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <footer className="py-8 bg-background-darker border-t border-accent/10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col items-center space-y-4">
            <p className="text-text-dark text-center"> 2023 DataEngineer.dev. All rights reserved.</p>
            <div className="flex justify-center space-x-6">
              <a href="#" className="text-text-dark hover:text-accent transition-colors">Privacy Policy</a>
              <a href="#" className="text-text-dark hover:text-accent transition-colors">Terms of Service</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;