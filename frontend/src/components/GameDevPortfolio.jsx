import React, { useState } from 'react';
import { Github, Linkedin, ExternalLink, Play, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import AnimatedBackground from './AnimatedBackground';
import { heroData, projectsData, skillsData, socialLinks, contactData } from './data';
import './GameDevPortfolio.css';

const GameDevPortfolio = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission
    toast({
      title: "Message Sent!",
      description: "Thanks for reaching out! I'll get back to you soon.",
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="portfolio-container">
      {/* Header */}
      <header className="dark-header">
        <div className="header-content">
          <div className="logo">
            <span className="logo-text">JS</span>
          </div>
          <nav className="dark-nav">
            <button onClick={() => scrollToSection('hero')} className="dark-nav-link">Home</button>
            <button onClick={() => scrollToSection('projects')} className="dark-nav-link">Projects</button>
            <button onClick={() => scrollToSection('skills')} className="dark-nav-link">Skills</button>
            <button onClick={() => scrollToSection('contact')} className="dark-nav-link">Contact</button>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <AnimatedBackground />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-name">{heroData.name}</h1>
            <h2 className="hero-title">{heroData.title}</h2>
            <p className="hero-tagline">{heroData.tagline}</p>
            <Button 
              onClick={() => scrollToSection('projects')} 
              className="btn-primary hero-cta"
            >
              {heroData.ctaText}
              <ExternalLink className="icon" />
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <h2 className="section-title">Featured Projects</h2>
          <p className="section-subtitle">Showcasing immersive worlds and cutting-edge game mechanics</p>
          
          <div className="projects-grid">
            {projectsData.map((project) => (
              <Card key={project.id} className="project-card">
                <CardContent className="project-content">
                  <div className="project-image">
                    <img src={project.thumbnail} alt={project.title} />
                    <div className="project-overlay">
                      <div className="project-actions">
                        <Button size="sm" className="btn-secondary">
                          <Github className="icon" />
                          Code
                        </Button>
                        <Button size="sm" className="btn-primary">
                          <Play className="icon" />
                          Demo
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="project-info">
                    <h3 className="project-title">{project.title}</h3>
                    <p className="project-description">{project.description}</p>
                    <div className="project-tech">
                      {project.technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">Technical Arsenal</h2>
          <p className="section-subtitle">Tools and technologies I use to create amazing gaming experiences</p>
          
          <div className="skills-grid">
            {skillsData.map((skillCategory, index) => (
              <div key={index} className="skill-category">
                <h3 className="skill-category-title">{skillCategory.category}</h3>
                <div className="skill-items">
                  {skillCategory.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="skill-item">{skill}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="contact-content">
            <div className="contact-info">
              <h2 className="contact-title">{contactData.title}</h2>
              <p className="contact-subtitle">{contactData.subtitle}</p>
              
              <div className="social-links">
                {socialLinks.map((social) => (
                  <a key={social.name} href={social.url} className="social-link">
                    {social.icon === 'Github' && <Github className="social-icon" />}
                    {social.icon === 'Linkedin' && <Linkedin className="social-icon" />}
                    <span>{social.name}</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="contact-form-container">
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <Input
                    type="text"
                    name="name"
                    placeholder={contactData.formFields.name}
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <Input
                    type="email"
                    name="email"
                    placeholder={contactData.formFields.email}
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="form-input"
                  />
                </div>
                <div className="form-group">
                  <Textarea
                    name="message"
                    placeholder={contactData.formFields.message}
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="form-textarea"
                  />
                </div>
                <Button type="submit" className="btn-primary form-submit">
                  <Mail className="icon" />
                  Send Message
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <p>&copy; 2024 Jorge Alejandro Salgado L. Building the future of gaming.</p>
        </div>
      </footer>
    </div>
  );
};

export default GameDevPortfolio;