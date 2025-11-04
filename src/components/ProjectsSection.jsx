import { ArrowRight, ExternalLink, Github } from "lucide-react";
import amazon from "../assets/amazon.png";
import medicalchatbot from "../assets/medicalchatbot.png";
import myai from "../assets/myai.png";
import spotify from "../assets/spotify.png";

const projects = [
  {
    id:1,
    title: "MyAI: All-in-One AI Content SaaS Platform",
    description:
      "A full-stack, multi-tenant SaaS application built to serve diverse AI needs from a single dashboard. This platform provides an AI-powered resume analyzer, an image generator for creatives, and a long-form blog/article writer. The stack features a React frontend, a Node.js/Express backend, and Clerk for secure, social, and passwordless user authentication. It uniquely leverages a hybrid database architecture: PostgreSQL manages structured user data and subscriptions, while MongoDB stores the flexible, unstructured AI-generated content (like articles and image prompts).",
    image:myai,
    tags: ["React" ,"Node.js", "Express","PostgreSQL" ,"Neon" ,"Clerk","SaaS"],
    githubUrl: "",
  },
   {
    id: 2,
    title: "Medical Chatbot",
    description:
      "An intelligent medical chatbot built with Python and Streamlit, leveraging a Retrieval-Augmented Generation (RAG) pipeline. It uses LangChain and a FAISS vector store to provide accurate, context-aware answers to health questions based on a specialized medical knowledge base, with support for both text and voice responses.",
    image: medicalchatbot,
    tags: ["Python" ,"Streamlit", "LangChain", "LLM" ,"RAG" ,"FAISS"],
    githubUrl: "https://github.com/atharvbarge01/Medical_Chatbot.git",
  },
   {
    id: 3,
    title: "Grocery Management System",
    description:
      "The Grocery Management System is a web application designed to simplify and automate the management of grocery items. Built using the MERN-style stack (MongoDB, Express.js, Node.js, HTML, CSS, and JavaScript), this system allows users and administrators to perform essential grocery-related operations through a clean and responsive interface.",
    image: "",
    tags: ["react", "css","nodejs","express","mongodb"],
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Zerodha",
    description: "A full-stack web application inspired by Zerodha, India’s leading stock trading platform. Built using the MERN stack (MongoDB, Express.js, React, Node.js), it provides functionalities like user authentication, stock market UI, and portfolio management. The project focuses on backend integration with MongoDB for storing user details.",
    image: "",
    tags: ["React", "TailwindCSS", "Node.js","Express"],
    githubUrl: "https://github.com/atharvbarge01/Zerodha-Clone.git",
  },
  {
    id: 5,
    title: "Spotify Clone",
    description:
      "A front-end project replicating the Spotify music player interface using only HTML and CSS. It features a clean layout with a sidebar, top navigation bar, playlist section, and a fixed music player at the bottom. This project highlights strong knowledge of CSS flexbox, grid, and responsive design, making the clone accessible across desktop and mobile screens.",
    image: spotify,
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/atharvbarge01/Spotify.git",
  },
  {
    id: 6,
    title: "Amazon Clone",
    description:
      "A static Amazon e-commerce homepage clone developed using HTML and CSS. The project includes a navigation bar with search functionality, product categories, banner section, and multiple product card layouts. Focus was given to CSS styling, layout structuring, and responsive design, making the clone resemble the original Amazon interface closely.",
    image: amazon,
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/atharvbarge01/amazon.git",
  },
  
  


];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
         <span className="text-primary"> Projects </span>
        </h2>

        <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-64 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 mt-6 text-center">
          {" "}
         <span className="text-primary"> Profiles</span>
        </h2>
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/atharvbarge01"
          
          >
            <Github size={18} />
            Check my GitHub
          </a>
          <div className="text-sm text-muted-foreground mt-2"></div>
        </div>

        <div className="text-center mt-6">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            rel="noopener noreferrer"
            href="https://linkedin.com/in/atharv-barge-33329b289"
           
          >
            <ExternalLink size={18} />
            Check my LinkedIn
          </a>
          <div className="text-sm text-muted-foreground mt-2"></div>
        </div>
      </div>
    </section>
  );
};
