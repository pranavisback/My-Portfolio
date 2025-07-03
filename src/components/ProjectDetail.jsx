import React, { useEffect, useRef, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import * as THREE from 'three';
import FOG from 'vanta/dist/vanta.fog.min';
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
  Zap,
  ArrowLeft
} from 'lucide-react';
import '../App.css';
import InteractiveCursor from './ui/InteractiveCursor';
import MobileMenu from './ui/MobileMenu';

// Import project images
import project1 from '../assets/project_thumbnail_1.png';
import project2 from '../assets/project_thumbnail_2.png';
import project3 from '../assets/project_thumbnail_3.png';
import project4 from '../assets/project_thumbnail_4.png';
import project5 from '../assets/project_thumbnail_5.png';
import project6 from '../assets/project_thumbnail_6.png';

const projectsData = [
  {
    id: "nlu-customer-support",
    title: "NLU Customer Support",
    description: "AI-powered customer query understanding and automated response system",
    longDescription: "This project focuses on developing a robust Natural Language Understanding (NLU) system to enhance customer support. It leverages advanced deep learning models, including BERT, to accurately interpret customer queries and provide automated, contextually relevant responses. The system integrates with existing CRM platforms via a scalable API, significantly reducing response times and improving customer satisfaction. Key features include intent recognition, entity extraction, and sentiment analysis, enabling a more personalized and efficient support experience.",
    image: project1,
    icon: <Brain className="w-6 h-6" />,
    tech: ["BERT", "NLP", "Python", "API", "TensorFlow", "Flask"],
    category: "Natural Language Processing",
    github: "#",
    liveDemo: "#"
  },
  {
    id: "creative-ai-generator",
    title: "Creative AI Generator",
    description: "Multimodal content generation for text, music, and visual art",
    longDescription: "The Creative AI Generator is an innovative platform capable of generating diverse forms of content, from compelling text narratives to original musical compositions and unique visual art. It utilizes a combination of Generative Adversarial Networks (GANs) for image generation, GPT-series models for text, and custom deep learning architectures for music. The user-friendly React frontend allows for intuitive interaction, enabling users to guide the AI's creative process and explore various artistic styles. This project pushes the boundaries of AI creativity and human-AI collaboration.",
    image: project2,
    icon: <Palette className="w-6 h-6" />,
    tech: ["GANs", "GPT", "DALL-E", "React", "Node.js", "PyTorch"],
    category: "Generative AI",
    github: "#",
    liveDemo: "#"
  },
  {
    id: "personalized-ai-tutor",
    title: "Personalized AI Tutor",
    description: "Adaptive learning system with personalized educational content",
    longDescription: "This project aims to revolutionize education through an AI-powered personalized tutor. The system adapts to each student's learning pace and style, providing customized content, exercises, and feedback. It incorporates Reinforcement Learning (RL) to optimize learning paths and Knowledge Tracing models to assess understanding. Designed for mobile platforms, it includes gamification elements to keep students engaged and motivated. The AI tutor identifies knowledge gaps and provides targeted interventions, making learning more effective and enjoyable.",
    image: project3,
    icon: <GraduationCap className="w-6 h-6" />,
    tech: ["RL", "Knowledge Tracing", "Mobile", "Gamification", "Python", "Firebase"],
    category: "Educational AI",
    github: "#",
    liveDemo: "#"
  },
  {
    id: "medical-diagnosis-assistant",
    title: "Medical Diagnosis Assistant",
    description: "LLM-powered medical diagnosis and treatment recommendation system",
    longDescription: "The Medical Diagnosis Assistant is an advanced AI system designed to aid healthcare professionals in diagnosis and treatment planning. Leveraging large language models (LLMs) trained on vast medical datasets, it can analyze patient symptoms, medical history, and test results to suggest potential diagnoses and evidence-based treatment recommendations. The system is built with strict adherence to HIPAA compliance and deployed on a secure cloud infrastructure, ensuring data privacy and scalability. It serves as a powerful tool for clinical decision support, improving diagnostic accuracy and patient outcomes.",
    image: project4,
    icon: <Heart className="w-6 h-6" />,
    tech: ["LLMs", "Medical Data", "HIPAA", "Cloud", "Python", "Azure"],
    category: "Healthcare AI",
    github: "#",
    liveDemo: "#"
  },
  {
    id: "financial-market-predictor",
    title: "Financial Market Predictor",
    description: "AI system for market analysis and investment decision support",
    longDescription: "This project develops an AI-driven Financial Market Predictor that provides insights and forecasts for investment decisions. It employs Long Short-Term Memory (LSTM) networks for time series analysis of market data, identifying complex patterns and predicting future trends. The system integrates various financial indicators and news sentiment to offer comprehensive market analysis. It also includes modules for risk assessment and portfolio optimization, making it a valuable tool for traders and investors seeking data-driven strategies.",
    image: project5,
    icon: <TrendingUp className="w-6 h-6" />,
    tech: ["LSTM", "Time Series", "Trading", "Risk Analysis", "Python", "Keras"],
    category: "FinTech AI",
    github: "#",
    liveDemo: "#"
  },
  {
    id: "autonomous-driving-ai",
    title: "Autonomous Driving AI",
    description: "Real-time decision making system for autonomous vehicles",
    longDescription: "The Autonomous Driving AI project focuses on creating a real-time decision-making system for self-driving vehicles. It utilizes Deep Reinforcement Learning (DRL) to enable the AI to learn optimal driving policies through interaction with simulated and real-world environments. Convolutional Neural Networks (CNNs) process sensor data (cameras, LiDAR) for perception tasks like object detection and lane keeping. The system is optimized for edge computing, ensuring low-latency responses critical for vehicle safety. This project addresses complex challenges in perception, planning, and control for autonomous systems.",
    image: project6,
    icon: <Car className="w-6 h-6" />,
    tech: ["Deep RL", "CNNs", "Edge Computing", "Safety", "C++", "ROS"],
    category: "Autonomous Systems",
    github: "#",
    liveDemo: "#"
  }
];

const ProjectDetail = () => {
  const { projectId } = useParams();
  const project = projectsData.find(p => p.id === projectId);

  const vantaRef = useRef(null);

  useEffect(() => {
    let vantaEffect = null;
    if (vantaRef.current) {
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
      });
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, []);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center text-white">
        Project not found.
      </div>
    );
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
            <Link to="/">Home</Link>
            <Link to="/">About</Link>
            <Link to="/">Projects</Link>
            <Link to="/">Contact</Link>
          </div>
        </div>
      </nav>
      {/* MobileMenu is not directly used here as it's part of App.jsx's routing */}

      <section className="hero-section pt-24 pb-12">
        <div className="container text-center z-10">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors flex items-center justify-center mb-8">
            <ArrowLeft className="w-5 h-5 mr-2" /> Back to Projects
          </Link>
          <h1 className="text-6xl md:text-8xl font-bold mb-6 neon-text">
            {project.title}
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            {project.description}
          </p>
        </div>
      </section>

      <section className="about-section">
        <div className="container">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="flex justify-center">
              <div className="w-full max-w-md rounded-lg overflow-hidden glass glow">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            <div>
              <h2 className="text-4xl font-bold mb-6 neon-text">Project Details</h2>
              <p className="text-lg text-muted-foreground mb-6">
                {project.longDescription}
              </p>
              
              <h3 className="text-2xl font-bold mb-4 neon-text">Technologies Used</h3>
              <div className="flex flex-wrap gap-2 mb-8">
                {project.tech.map((tech, index) => (
                  <div key={index} className="badge badge-primary">
                    {tech}
                  </div>
                ))}
              </div>

              <div className="flex space-x-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button text-lg px-6 py-3 flex items-center"
                >
                  <Github className="w-5 h-5 mr-2" /> GitHub
                </a>
                <a 
                  href={project.liveDemo} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="cta-button text-lg px-6 py-3 flex items-center"
                >
                  <Code className="w-5 h-5 mr-2" /> Live Demo
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
  );
};

export default ProjectDetail;
