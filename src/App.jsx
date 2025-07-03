import { useEffect, useRef, useState } from 'react'
import * as THREE from 'three'
import FOG from 'vanta/dist/vanta.fog.min'
import { 
  Brain, 
  Palette, 
  GraduationCap, 
  Heart, 
  TrendingUp, 
  Car,
  Github,
  Linkedin,
  Mail,
  Code,
  Database,
  Cpu,
  Zap
} from 'lucide-react'
import './App.css'
import InteractiveCursor from './components/ui/InteractiveCursor'
import MobileMenu from './components/ui/MobileMenu'
import { Link } from 'react-router-dom'

// Import project images
import project1 from './assets/project_thumbnail_1.png'
import project2 from './assets/project_thumbnail_2.png'
import project3 from './assets/project_thumbnail_3.png'
import project4 from './assets/project_thumbnail_4.png'
import project5 from './assets/project_thumbnail_5.png'
import project6 from './assets/project_thumbnail_6.png'
import myImage from './assets/my_image.png'

function App() {
  const [loading, setLoading] = useState(true)
  const [progress, setProgress] = useState(0)
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  const vantaRef = useRef(null)

  const sectionRefs = {
    heroRef,
    aboutRef,
    projectsRef,
    contactRef
  }

  const projects = [
    {
      id: "nlu-customer-support",
      title: "NLU Customer Support",
      description: "AI-powered customer query understanding and automated response system",
      image: project1,
      icon: <Brain className="w-6 h-6" />,
      tech: ["BERT", "NLP", "Python", "API"],
      category: "Natural Language Processing"
    },
    {
      id: "creative-ai-generator",
      title: "Creative AI Generator",
      description: "Multimodal content generation for text, music, and visual art",
      image: project2,
      icon: <Palette className="w-6 h-6" />,
      tech: ["GANs", "GPT", "DALL-E", "React"],
      category: "Generative AI"
    },
    {
      id: "personalized-ai-tutor",
      title: "Personalized AI Tutor",
      description: "Adaptive learning system with personalized educational content",
      image: project3,
      icon: <GraduationCap className="w-6 h-6" />,
      tech: ["RL", "Knowledge Tracing", "Mobile", "Gamification"],
      category: "Educational AI"
    },
    {
      id: "medical-diagnosis-assistant",
      title: "Medical Diagnosis Assistant",
      description: "LLM-powered medical diagnosis and treatment recommendation system",
      image: project4,
      icon: <Heart className="w-6 h-6" />,
      tech: ["LLMs", "Medical Data", "HIPAA", "Cloud"],
      category: "Healthcare AI"
    },
    {
      id: "financial-market-predictor",
      title: "Financial Market Predictor",
      description: "AI system for market analysis and investment decision support",
      image: project5,
      icon: <TrendingUp className="w-6 h-6" />,
      tech: ["LSTM", "Time Series", "Trading", "Risk Analysis"],
      category: "FinTech AI"
    },
    {
      id: "autonomous-driving-ai",
      title: "Autonomous Driving AI",
      description: "Real-time decision making system for autonomous vehicles",
      image: project6,
      icon: <Car className="w-6 h-6" />,
      tech: ["Deep RL", "CNNs", "Edge Computing", "Safety"],
      category: "Autonomous Systems"
    }
  ]

  const skills = [
    { name: "Machine Learning", icon: <Cpu className="w-6 h-6" /> },
    { name: "Deep Learning", icon: <Brain className="w-6 h-6" /> },
    { name: "Natural Language Processing", icon: <Code className="w-6 h-6" /> },
    { name: "Computer Vision", icon: <Zap className="w-6 h-6" /> },
    { name: "Data Science", icon: <Database className="w-6 h-6" /> },
    { name: "Python", icon: <Code className="w-6 h-6" /> },
    { name: "TensorFlow", icon: <Cpu className="w-6 h-6" /> },
    { name: "PyTorch", icon: <Brain className="w-6 h-6" /> }
  ]

  useEffect(() => {
    // Simple loading animation
    const progressInterval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(progressInterval)
          setTimeout(() => {
            setLoading(false)
          }, 500)
          return 100
        }
        return prev + Math.random() * 15
      })
    }, 100)

    return () => clearInterval(progressInterval)
  }, [])

  useEffect(() => {
    let vantaEffect = null
    if (!loading && vantaRef.current) {
      vantaEffect = FOG({
        el: vantaRef.current,
        THREE: THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        highlightColor: 0x8b5cf6,
        midtoneColor: 0x16213e,
        lowlightColor: 0x1a1a2e,
        baseColor: 0x1a1a2e,
        blurFactor: 0.9,
        speed: 1.5,
        zoom: 0.4
      })
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy()
    }
  }, [loading])

  const scrollToSection = (refName) => {
    sectionRefs[refName].current?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const message = document.getElementById('contact-message').value;

    const subject = `Message from ${name} (${email})`;
    const body = `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`;

    const mailtoLink = `mailto:pranav647p@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.open(mailtoLink, '_blank');
  };

  if (loading) {
    return (
      <div className="preloader">
        <div className="text-center">
          <h1 className="text-4xl font-bold neon-text mb-8">Pranav</h1>
          <div className="progress-container">
            <div 
              className="progress-bar" 
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="mt-4 text-muted-foreground">{Math.round(progress)}%</p>
        </div>
      </div>
    )
  }

  return (
    <div style={{ minHeight: '100vh', position: 'relative' }}>
      <InteractiveCursor />
      <div ref={vantaRef} style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100%', zIndex: -1 }} />

      {/* Navigation */}
      <nav>
        <div className="container flex justify-between items-center">
          <div className="text-2xl font-bold neon-text">Pranav</div>
          <div className="hidden md:flex space-x-6">
            <button onClick={() => scrollToSection('heroRef')}>Home</button>
            <button onClick={() => scrollToSection('aboutRef')}>About</button>
            <button onClick={() => scrollToSection('projectsRef')}>Projects</button>
            <button onClick={() => scrollToSection('contactRef')}>Contact</button>
          </div>
        </div>
      </nav>
      <MobileMenu onLinkClick={scrollToSection} />

      {/* Hero Section */}
      <section ref={heroRef} className="hero-section">
        <div className="container text-center z-10">
          <h1 className="text-6xl md:text-8xl font-bold mb-6">
            Hi, I'm <span className="neon-text">Pranav</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            AI/ML Engineer specializing in Large Language Models and cutting-edge machine learning solutions
          </p>
          <button 
            className="cta-button text-lg px-8 py-4"
            onClick={() => scrollToSection('contactRef')}
          >
            Hire Me
          </button>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="about-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 neon-text">About Me</h2>
              <p className="text-lg text-muted-foreground mb-6">
                I'm a passionate AI/ML Engineer with expertise in developing sophisticated machine learning models, 
                particularly Large Language Models. I specialize in creating intelligent systems that solve real-world 
                problems across various domains including healthcare, finance, education, and autonomous systems.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                My work focuses on pushing the boundaries of artificial intelligence through innovative research 
                and practical applications that make a meaningful impact.
              </p>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.map((skill, index) => (
                  <div key={index} className="glass p-3 text-center glow-hover">
                    <div className="flex justify-center mb-2 text-primary">
                      {skill.icon}
                    </div>
                    <p style={{ fontSize: '14px' }}>{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full glow flex items-center justify-center relative">
                <img src={myImage} alt="Pranav" className="w-full h-full object-cover rounded-full" />
                <div className="absolute inset-0 rounded-full mirror-glass"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="projects-section">
        <div className="container">
          <h2 className="text-4xl font-bold text-center mb-12 neon-text">Featured Projects</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link to={`/projects/${project.id}`} key={project.id} className="project-card block">
                <div className="relative mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <div className="glass p-2 rounded-full text-primary">
                      {project.icon}
                    </div>
                  </div>
                </div>
                
                <div className="badge badge-primary mb-3">
                  {project.category}
                </div>
                
                <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((tech, index) => (
                    <div key={index} className="badge badge-outline">
                      {tech}
                    </div>
                  ))}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="contact-section">
        <div className="container">
          <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-6 neon-text">Get In Touch</h2>
            <p className="text-lg text-muted-foreground mb-12">
              Ready to collaborate on cutting-edge AI projects? Let's discuss how we can work together.
            </p>
            
            <div className="glass p-8 rounded-2xl">
              <form onSubmit={handleFormSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <input 
                    type="text" 
                    id="contact-name"
                    placeholder="Your Name"
                    required
                  />
                  <input 
                    type="email" 
                    id="contact-email"
                    placeholder="Your Email"
                    required
                  />
                </div>
                <textarea 
                  placeholder="Your Message"
                  id="contact-message"
                  rows="5"
                  className="resize-none"
                  required
                ></textarea>
                <button type="submit" className="cta-button w-full py-4">
                  Send Message
                </button>
              </form>
              
              <div className="flex justify-center space-x-6 mt-8">
                <a href="https://github.com/pranavisback" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Github className="w-6 h-6" />
                </a>
                <a href="https://www.linkedin.com/in/pranav-pawar-op647" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors">
                  <Linkedin className="w-6 h-6" />
                </a>
                <a href="mailto:pranav647p@gmail.com" className="text-muted-foreground hover:text-primary transition-colors">
                  <Mail className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer>
        <div className="container text-center">
          <p className="text-muted-foreground">
            © 2025 Pranav. Crafted with passion for AI innovation.
          </p>
        </div>
      </footer>
    </div>
  )
}

export default App

