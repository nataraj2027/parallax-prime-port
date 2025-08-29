import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton } from './ui/cyber-button';
import { ExternalLink, Github, Eye } from 'lucide-react';

interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  liveUrl: string;
  githubUrl: string;
  featured?: boolean;
}

const ProjectsSection: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-stack e-commerce solution with React, Node.js, and Stripe integration. Features include user authentication, product management, and real-time inventory tracking.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative project management tool with real-time updates, drag-and-drop functionality, and team collaboration features.',
      image: '/api/placeholder/600/400',
      tags: ['Next.js', 'Prisma', 'PostgreSQL', 'Socket.io'],
      liveUrl: '#',
      githubUrl: '#'
    },
    {
      id: 3,
      title: 'AI Chat Application',
      description: 'An intelligent chatbot application powered by OpenAI API with conversation memory and context awareness.',
      image: '/api/placeholder/600/400',
      tags: ['React', 'OpenAI', 'Express', 'WebSocket'],
      liveUrl: '#',
      githubUrl: '#',
      featured: true
    },
    {
      id: 4,
      title: 'Weather Dashboard',
      description: 'A responsive weather application with location-based forecasts, interactive maps, and data visualization.',
      image: '/api/placeholder/600/400',
      tags: ['Vue.js', 'D3.js', 'Weather API', 'Chart.js'],
      liveUrl: '#',
      githubUrl: '#'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <section id="projects" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-1/4 w-80 h-80 bg-neon-green/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center space-y-4 mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-gradient">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Here are some of my recent projects that showcase my skills and creativity
          </p>
        </motion.div>

        {/* Projects Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-8"
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={itemVariants}
              whileHover={{ y: -10 }}
              className={`group relative ${project.featured ? 'md:col-span-2' : ''}`}
            >
              <div className="glass-card rounded-2xl overflow-hidden border border-space-light/20 hover:border-neon-cyan/50 transition-all duration-500">
                {/* Project Image */}
                <div className="relative overflow-hidden">
                  <div className="w-full h-64 bg-gradient-card flex items-center justify-center">
                    <div className="text-6xl opacity-20">🚀</div>
                  </div>
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-space-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="absolute bottom-4 left-4 right-4 flex space-x-3">
                      <CyberButton
                        variant="ghost"
                        size="sm"
                        className="flex-1"
                      >
                        <Eye size={16} className="mr-2" />
                        Live Demo
                      </CyberButton>
                      <CyberButton
                        variant="outline"
                        size="sm"
                        className="flex-1"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </CyberButton>
                    </div>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="text-2xl font-bold text-foreground group-hover:text-gradient transition-all duration-300">
                      {project.title}
                    </h3>
                    {project.featured && (
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
                        className="text-neon-cyan text-xl"
                      >
                        ⭐
                      </motion.div>
                    )}
                  </div>

                  <p className="text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 text-xs glass-card rounded-full border border-neon-cyan/20 text-neon-cyan"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Project Links */}
                  <div className="flex space-x-4 pt-4">
                    <motion.a
                      href={project.liveUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-neon-cyan hover:text-neon-purple transition-colors"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      Live Demo
                    </motion.a>
                    <motion.a
                      href={project.githubUrl}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="flex items-center text-neon-cyan hover:text-neon-purple transition-colors"
                    >
                      <Github size={16} className="mr-2" />
                      Source Code
                    </motion.a>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* View All Projects Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <CyberButton variant="outline" size="lg">
            View All Projects
          </CyberButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectsSection;