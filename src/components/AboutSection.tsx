import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton } from './ui/cyber-button';
import { Code, Zap, Users, Trophy } from 'lucide-react';

const AboutSection: React.FC = () => {
  const stats = [
    { icon: Code, number: '50+', label: 'Projects Built' },
    { icon: Zap, number: '3+', label: 'Years Experience' },
    { icon: Users, number: '20+', label: 'Happy Clients' },
    { icon: Trophy, number: '15+', label: 'Awards Won' }
  ];

  const skills = [
    'React.js', 'TypeScript', 'Node.js', 'Python', 'AWS', 
    'Docker', 'GraphQL', 'MongoDB', 'PostgreSQL', 'Next.js'
  ];

  return (
    <section id="about" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-neon-purple/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-neon-cyan/5 rounded-full blur-3xl" />
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.h2
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="text-4xl md:text-5xl font-bold"
              >
                About <span className="text-gradient">Me</span>
              </motion.h2>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                viewport={{ once: true }}
                className="w-24 h-1 bg-gradient-primary rounded-full"
              />
            </div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              viewport={{ once: true }}
              className="space-y-6 text-lg text-muted-foreground leading-relaxed"
            >
              <p>
                I'm a passionate full-stack developer with a love for creating 
                innovative digital solutions. My journey in technology started 
                3 years ago, and I've been constantly learning and evolving ever since.
              </p>
              <p>
                I specialize in modern web technologies like React, Node.js, and 
                cloud platforms. I believe in writing clean, maintainable code 
                and creating user experiences that make a difference.
              </p>
              <p>
                When I'm not coding, you'll find me exploring new technologies, 
                contributing to open source projects, or sharing knowledge with 
                the developer community.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
              className="flex flex-wrap gap-3"
            >
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="px-4 py-2 glass-card rounded-full text-sm border border-neon-cyan/20 hover:border-neon-cyan/50 cursor-default"
                >
                  {skill}
                </motion.span>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              viewport={{ once: true }}
            >
              <CyberButton variant="neon" size="lg">
                Download Resume
              </CyberButton>
            </motion.div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05, rotateY: 5 }}
                transition={{ 
                  duration: 0.6, 
                  delay: index * 0.1
                }}
                viewport={{ once: true }}
                className="glass-card p-8 rounded-xl text-center space-y-4 group cursor-pointer"
              >
                <div className="w-16 h-16 mx-auto bg-gradient-primary rounded-full flex items-center justify-center group-hover:shadow-neon-cyan transition-all duration-300">
                  <stat.icon size={32} className="text-space-black" />
                </div>
                <div className="space-y-2">
                  <div className="text-3xl font-bold text-gradient">
                    {stat.number}
                  </div>
                  <div className="text-muted-foreground font-medium">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;