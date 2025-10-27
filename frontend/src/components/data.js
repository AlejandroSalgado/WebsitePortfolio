// Import local images
import FPS_Image from './images/AnimFPS.png';
import SteamOS_Image from './images/SteamOS.png';
import CryptRaider_Image from './images/CryptRaider.png';
import TankAssault_Image from './images/TankAssault.png';

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
    title: "Unreal Engine 5 Level Design | Lumen Lighting, Interactions & Puzzle Mechanics",
    description: "Using AI-driven combat algorithms and pathfinding for dynamic enemy behavior in Unreal Engine 5 for a First Person Shooter (FPS) and using TreeBehaviours for animations",
    thumbnail: CryptRaider_Image,
    githubLink: "https://github.com/AlejandroSalgado/Game-Developer-Portfolio/blob/main/README.md",
    videoLink: "https://youtu.be/02jhFMy7i3M",
    technologies: ["Unreal Engine 5", "C++", "Lumen", "Blueprints", "Collisions", "Level Design", "Puzzle Mechanics", "Interactions"]
  },
  {
    id: 2,
    title: "First Person Shooter (FPS) with UMG and Animations",
    description: "Using AI-driven combat algorithms and pathfinding for dynamic enemy behavior in Unreal Engine 5 for a First Person Shooter (FPS) and using TreeBehaviours for animations",
    thumbnail: FPS_Image,
    githubLink: "https://github.com/AlejandroSalgado/Game-Developer-Portfolio/blob/main/README.md",
    videoLink: "https://youtu.be/AE423fI1b1A",
    technologies: ["Unreal Engine 5", "C++", "Enemy-AI", "Blueprints", "TreeBehaviour", "Combat System", "UMG"]
  },
  {
    id: 3,
    title: "Online Subsystem with Steam",
    description: "Seamlessly integrated Steam multiplayer in Unreal Engine 5 using the Online Subsystem. Players can host or join sessions with friends through a simple UMG menu. Built with Blueprints and C++, this system handles session creation, discovery, and connection — making multiplayer setup effortless.",
    thumbnail: SteamOS_Image,
    githubLink: "https://github.com/AlejandroSalgado/Game-Developer-Portfolio/blob/main/README.md",
    videoLink: "https://youtu.be/WIkf-BLRFQQ",
    technologies: ["Unreal Engine 5", "C++","Steam Online Subsystem", "Combat System", "Personalized Multiplayer Plugin", "Level Design"]
  },
  {
    id: 4,
    title: "Tank Assault Prototype",
    description: "A fast-paced UE5 project where AI turrets track and shoot automatically while you control a tank using smooth keyboard + mouse controls. Built with C++, Blueprints, and Behavior Trees for smart combat and reactive gameplay",
    thumbnail: TankAssault_Image,
    githubLink: "https://github.com/AlejandroSalgado/Game-Developer-Portfolio/blob/main/README.md",
    videoLink: "https://youtu.be/G9XpZZ7nkqw",
    technologies: ["Unreal Engine 5", "C++","AI Behavior Trees", "Projectile & Health Systems", "Combat System", "Input Mapping for Player Controls", "Line of Sight", "Perception Systems"]
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
  },
  {
    name: "jalsalgado1@gmail.com",
    url: "mailto:jalsalgado1@gmail.com",
    icon: "Email"
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
