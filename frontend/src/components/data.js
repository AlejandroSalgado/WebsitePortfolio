// Import local images
import FPS_Image from './images/AnimFPS.png';
import SteamOS_Image from './images/SteamOS.png';
// Mock data for Game Developer Portfolio
export const heroData = {
  name: "Jorge Alejandro Salgado L.",
  title: "Game Developer | Unreal Engine | AI",
  tagline: "Building immersive worlds with cutting-edge technology",
  ctaText: "View My Work"
};

export const projectsData = [
  {
    id: 1,
    title: "First Person Shooter (FPS) with UMG and Animations",
    description: "Using AI-driven combat algorithms and pathfinding for dynamic enemy behavior in Unreal Engine 5 for a First Person Shooter (FPS) and using TreeBehaviours for animations and navigation. Designed and implemented a full combat system including guns, shooting mechanics, and health management.",
    thumbnail: FPS_Image,
    githubLink: "#",
    videoLink: "https://youtu.be/AE423fI1b1A",
    technologies: ["Unreal Engine 5", "C++", "Enemy-AI", "Blueprints", "Combat System", "TreeBehaviour"]
  },
  {
    id: 2,
    title: "Online Subsystem with Steam",
    description: "Seamlessly integrated Steam multiplayer in Unreal Engine 5 using the Online Subsystem. Players can host or join sessions with friends through a simple UMG menu. Built with Blueprints and C++, this system handles session creation, discovery, and connection — making multiplayer setup effortless.",
    thumbnail: SteamOS_Image,
    githubLink: "#",
    videoLink: "https://youtu.be/WIkf-BLRFQQ",
    technologies: ["Steam Online Subsystem", "C++" , "Personalized Multiplayer Plugin", "UMG"]
  },
  {
    id: 3,
    title: "Other...",
    description: "Experimental VR environment showcasing realistic physics simulations and intuitive hand tracking interactions.",
    thumbnail: "https://images.pexels.com/photos/8721318/pexels-photo-8721318.jpeg",
    githubLink: "#",
    videoLink: "#",
    technologies: ["VR/AR", "Physics", "Hand Tracking", "Unreal Engine"]
  }
];

export const skillsData = [
  {
    category: "Game Engines",
    skills: ["Unreal Engine 5", "Unity"]
  },
  {
    category: "Programming",
    skills: ["C++", "Blueprints", "Python", "C#"]
  },
  {
    category: "AI & Machine Learning",
    skills: ["Neural Networks", "Behavior Trees", "Pathfinding", "Decision Systems"]
  },
  {
    category: "3D & Design",
    skills: ["Blender", "3D Modeling", "Level Design", "Lighting"]
  },
  {
    category: "Specialized",
    skills: ["VR/AR Development", "Physics Simulations", "Prototyping", "Game Mechanics"]
  }
];

export const socialLinks = [
  {
    name: "GitHub",
    url: "https://github.com/AlejandroSalgado/Game-Developer-Portfolio/blob/main/README.md",
    icon: "Github"
  },
  {
    name: "LinkedIn",
    url: "https://www.linkedin.com/in/jalsalgado/",
    icon: "Linkedin"
  }
];

export const contactData = {
  title: "Let's Build Worlds Together",
  subtitle: "Ready to create the next breakthrough gaming experience?",
  formFields: {
    name: "Your Name",
    email: "Your Email",
    message: "Tell me about your project..."
  }
};
