import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton } from './ui/cyber-button';
import { Calendar, Clock, ArrowRight } from 'lucide-react';

const ArticlesSection: React.FC = () => {
  const articles = [
    {
      id: 1,
      title: "Building Scalable React Applications with Modern Architecture",
      excerpt: "Explore advanced patterns and best practices for building maintainable React applications at scale.",
      date: "2024-01-15",
      readTime: "8 min read",
      category: "React",
      image: "/api/placeholder/400/250"
    },
    {
      id: 2,
      title: "Mastering Three.js for Interactive Web Experiences", 
      excerpt: "A deep dive into creating immersive 3D experiences on the web using Three.js and WebGL.",
      date: "2024-01-10",
      readTime: "12 min read",
      category: "Three.js",
      image: "/api/placeholder/400/250"
    },
    {
      id: 3,
      title: "Advanced Animation Techniques with Framer Motion",
      excerpt: "Learn how to create buttery smooth animations and micro-interactions that delight users.",
      date: "2024-01-05",
      readTime: "6 min read", 
      category: "Animation",
      image: "/api/placeholder/400/250"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { 
      opacity: 1, 
      y: 0
    }
  };

  return (
    <section id="articles" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-dark via-background to-space-dark" />
      <div className="absolute top-40 right-20 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-40 left-20 w-80 h-80 bg-neon-cyan/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Latest Articles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Sharing insights about modern web development, 3D programming, and cutting-edge technologies.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {articles.map((article) => (
            <motion.article
              key={article.id}
              variants={cardVariants}
              className="group glass-card p-6 hover:bg-gradient-card transition-all duration-500 hover:scale-105"
              whileHover={{ 
                boxShadow: "0 20px 40px rgba(0, 255, 255, 0.15)",
                borderColor: "hsl(var(--neon-cyan))"
              }}
            >
              <div className="relative overflow-hidden rounded-lg mb-6">
                <div className="aspect-video bg-gradient-to-br from-neon-cyan/20 to-neon-purple/20 flex items-center justify-center">
                  <motion.div
                    className="text-4xl"
                    whileHover={{ rotate: 5, scale: 1.1 }}
                  >
                    📚
                  </motion.div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-space-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between text-sm text-muted-foreground">
                  <span className="bg-neon-cyan/10 text-neon-cyan px-3 py-1 rounded-full">
                    {article.category}
                  </span>
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-1">
                      <Calendar size={14} />
                      <span>{new Date(article.date).toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock size={14} />
                      <span>{article.readTime}</span>
                    </div>
                  </div>
                </div>

                <h3 className="text-xl font-semibold text-foreground group-hover:text-neon-cyan transition-colors">
                  {article.title}
                </h3>

                <p className="text-muted-foreground leading-relaxed">
                  {article.excerpt}
                </p>

                <motion.div
                  className="flex items-center text-neon-cyan font-medium group-hover:translate-x-2 transition-transform"
                  whileHover={{ x: 5 }}
                >
                  <span>Read More</span>
                  <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </div>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <CyberButton variant="outline" size="lg">
            View All Articles
          </CyberButton>
        </motion.div>
      </div>
    </section>
  );
};

export default ArticlesSection;