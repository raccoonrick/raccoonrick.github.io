import React, { useState, useEffect } from 'react';
import { Mail, Phone, Github, Linkedin, ExternalLink, Menu, X, Code, Database, Brain, Monitor } from 'lucide-react';

const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const skills = [
    { name: 'Python', category: 'language' },
    { name: 'Java', category: 'language' },
    { name: 'JavaScript', category: 'language' },
    { name: 'C/C++', category: 'language' },
    { name: 'React', category: 'framework' },
    { name: 'Node.js', category: 'framework' },
    { name: 'PostgreSQL', category: 'database' },
    { name: 'TensorFlow', category: 'ml' },
    { name: 'Scikit-learn', category: 'ml' },
    { name: 'Docker', category: 'tool' },
    { name: 'Git', category: 'tool' },
    { name: 'Machine Learning', category: 'ml' }
  ];

  const projects = [
    {
      title: 'Dwellahome.com',
      description: 'A full-stack web application helping students and young adults find roommates and suitable apartments. Features real-time messaging and serves 400+ users.',
      technologies: ['JavaScript', 'Node.js', 'React', 'PostgreSQL', 'Docker', 'Socket.io'],
      highlights: [
        'Integrated Socket.io for real-time bidirectional messaging',
        'Implemented comprehensive testing with Cypress and Jest',
        'Automated testing workflows with GitHub Actions'
      ],
      icon: <Monitor className="w-6 h-6" />
    },
    {
      title: 'Inventory Management System',
      description: 'A Java-based desktop application for managing and comparing inventory files, featuring barcode scanner integration and optimized database queries.',
      technologies: ['Java', 'Swing', 'SQL'],
      highlights: [
        'Built user-friendly GUI using Java Swing',
        'Integrated physical barcode scanner for real-time product lookup',
        'Optimized SQL queries for efficient data management'
      ],
      icon: <Database className="w-6 h-6" />
    },
    {
      title: 'Construction Time Prediction Dashboard',
      description: 'Data analysis and ML project featuring an interactive dashboard that predicts construction times in Montreal using Random Forest regression.',
      technologies: ['Python', 'Pandas', 'Scikit-learn', 'Random Forest', 'Bokeh', 'SQL'],
      highlights: [
        'Built and trained Random Forest regression model',
        'Achieved accurate predictions on unseen construction data',
        'Created interactive dashboard for data visualization'
      ],
      icon: <Brain className="w-6 h-6" />
    }
  ];

  const experiences = [
    {
      title: 'Machine Learning Intern',
      company: 'Healthcare Systems R&A',
      location: 'Montreal, QC',
      period: 'May 2022 – August 2022',
      achievements: [
        'Developed a machine learning predictive model for mineral exploration using Python, KERAS, Tkinter, Scikit-learn and TensorFlow',
        'Implemented multiple ML algorithms including KNN, SVT, OLA and recurrence algorithms',
        'Analyzed, preprocessed, cleaned and upsampled raw mineral data from Quebec and Abitibi Regions',
        'Successfully presented the ML model to potential investors'
      ]
    },
    {
      title: 'Data Science Research Intern',
      company: 'Healthcare Systems R&A',
      location: 'Montreal, QC',
      period: 'Sept 2021 – Dec 2021',
      achievements: [
        'Cleaned, preprocessed, and engineered features from raw patient health data to improve model performance and reliability',
        'Visualized key data insights and model outputs to support interpretation and decision-making',
        'Developed an artificial neural network with real patient datasets to predict best treatment responses',
        'Designed and developed a user-friendly GUI to facilitate model interaction and result visualization'
      ]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  return (
    // <div className="min-h-screen bg-gradient-to-br from-pink-900 via-blue-900 to-slate-900 text-white">
    <div className="min-h-screen bg-black text-white">
      {/* Header */}
      <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-slate-900/95 backdrop-blur-md border-b border-blue-500/20' : 'bg-transparent'
      }`}>
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="text-2xl font-bold text-blue-500 bg-clip-text">
              Ricky Jr Mungcal
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {['about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="capitalize hover:text-blue-400 transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-400 group-hover:w-full transition-all duration-300"></span>
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-blue-800/20 transition-colors"
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-blue-500/20">
              {['about', 'experience', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className="block w-full text-left px-4 py-2 capitalize hover:text-blue-400 transition-colors duration-200"
                >
                  {item}
                </button>
              ))}
            </div>
          )}
        </nav>
      </header>

      {/* Hero Section */}
      <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-blue-500/10 rounded-full animate-pulse"></div>
          <div className="absolute top-3/4 right-1/4 w-24 h-24 bg-pink-500/10 rounded-full animate-pulse delay-1000"></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 bg-blue-500/10 rounded-full animate-pulse delay-2000"></div>
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <div className="animate-fade-in-up">
            <h1 className="text-5xl md:text-7xl font-bold pb-5 bg-gradient-to-r from-blue-400 via-blue-400 to-blue-600 bg-clip-text text-transparent">
              Ricky Jr Mungcal
            </h1>
            <p className="text-xl md:text-2xl mb-4 text-gray-300">
              Software Developer & ML Enthusiast
            </p>
            <p className="text-lg text-gray-400 mb-8 max-w-2xl mx-auto leading-relaxed">
              Recent Software Engineering graduate with expertise in machine learning, full-stack development, 
              and data science. Passionate about building innovative solutions that make a real impact.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-3 bg-gradient-to-r from-blue-900 to-blue-600 rounded-full hover:from-blue-700 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/25"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-3 border-2 border-white rounded-full hover:bg-blue-500 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Get In Touch
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            About Me
          </h2>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h3 className="text-2xl md:text-3xl font-semibold text-blue-400">
                Software Developer & Problem Solver
              </h3>
              <div className="space-y-4 text-gray-300 leading-relaxed">
                <p>
                  Hi! I'm a recent Software Engineering graduate from Concordia University with a passion for 
                  machine learning and full-stack development. I graduated with distinction (GPA 3.63) 
                  and have hands-on experience in developing ML models, web applications, and data analysis solutions.
                </p>
                <p>
                  My experience spans from developing predictive ML models for healthcare and mineral exploration 
                  to building full-stack web applications that serve hundreds of users. I'm fluent in both 
                  English and French, bringing strong communication skills to collaborative development environments.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.name}
                  className="bg-slate-800/50 backdrop-blur-sm p-4 rounded-xl border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-lg hover:shadow-blue-500/10 text-center"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="text-sm font-medium text-gray-200">
                    {skill.name}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Experience
          </h2>
          
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-6">
                  <div>
                    <h3 className="text-xl md:text-2xl font-semibold text-blue-400 mb-2">
                      {exp.title}
                    </h3>
                    <p className="text-gray-300 text-lg">
                      {exp.company} - {exp.location}
                    </p>
                  </div>
                  <span className="text-gray-400 text-sm md:text-base mt-2 md:mt-0">
                    {exp.period}
                  </span>
                </div>
                
                <ul className="space-y-3">
                  {exp.achievements.map((achievement, i) => (
                    <li key={i} className="flex items-start text-gray-300">
                      <span className="text-blue-400 mr-3 mt-1">▶</span>
                      <span className="leading-relaxed">{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-xl hover:shadow-blue-500/10 group"
              >
                <div className="flex items-center mb-4">
                  <div className="p-2 bg-blue-500/20 rounded-lg mr-3 text-blue-400 group-hover:bg-blue-500/30 transition-colors">
                    {project.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-blue-400">
                    {project.title}
                  </h3>
                </div>
                
                <p className="text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, i) => (
                    <span
                      key={i}
                      className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                <ul className="space-y-2">
                  {project.highlights.map((highlight, i) => (
                    <li key={i} className="flex items-start text-sm text-gray-400">
                      <span className="text-blue-400 mr-2 mt-1">•</span>
                      <span>{highlight}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900/30">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-blue-600 bg-clip-text text-transparent">
            Connect With Me
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="p-4 bg-blue-500/20 rounded-full inline-block mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Mail className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email</h3>
              <p className="text-gray-300 hover:text-blue-400 hover:underline"><a href="mailto:rjmungcal@gmail.com">rjmungcal@gmail.com</a></p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="p-4 bg-blue-500/20 rounded-full inline-block mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Phone className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Phone</h3>
              <p className="text-gray-300 hover:text-blue-400 hover:underline"><a href="tel:514-806-6986">514-806-6986</a></p>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="p-4 bg-blue-500/20 rounded-full inline-block mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Linkedin className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">LinkedIn</h3>
              <a 
                href="https://www.linkedin.com/in/ricky-jr-mungcal-8a836a213/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Profile
              </a>
            </div>
            
            <div className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 border border-blue-500/20 hover:border-blue-400/40 transition-all duration-300 hover:transform hover:scale-105 text-center group">
              <div className="p-4 bg-blue-500/20 rounded-full inline-block mb-4 group-hover:bg-blue-500/30 transition-colors">
                <Github className="w-8 h-8 text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-2">GitHub</h3>
              <a 
                href="https://github.com/raccoonrick" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 transition-colors"
              >
                View Projects
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400">
            &copy; 2025 Ricky Jr Mungcal. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;