import React from 'react';
import { motion } from 'framer-motion';
import { CyberButton } from './ui/cyber-button';
import Floating3D from './Floating3D';
import ParticleBackground from './ParticleBackground';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const HeroSection: React.FC = () => {
  const socialLinks = [
    { icon: Github, href: '#', color: 'text-neon-cyan' },
    { icon: Linkedin, href: '#', color: 'text-neon-blue' },
    { icon: Twitter, href: '#', color: 'text-neon-purple' },
    { icon: Mail, href: '#contact', color: 'text-neon-pink' }
  ];

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground 
        id="hero-particles" 
        className="absolute inset-0 -z-10" 
      />
      
      {/* 3D Floating Elements */}
      <div className="absolute inset-0 -z-5">
        <Floating3D />
      </div>

      {/* Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-space-black/50 via-transparent to-space-dark/50 -z-5" />
      <div className="absolute top-20 left-20 w-96 h-96 bg-neon-cyan/10 rounded-full blur-3xl -z-10" />
      <div className="absolute bottom-20 right-20 w-80 h-80 bg-neon-purple/10 rounded-full blur-3xl -z-10" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Hero Content */}
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <motion.h1
                className="text-5xl md:text-7xl font-bold leading-tight"
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <span className="text-foreground">Hi, I'm </span>
                <span className="text-gradient animate-gradient-shift">Alex</span>
                <br />
                <span className="text-foreground">Full Stack</span>
                <br />
                <span className="text-neon-cyan">Developer</span>
              </motion.h1>
              
              <motion.p
                className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto lg:mx-0"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
              >
                Crafting digital experiences with cutting-edge technology. 
                Specializing in React, Node.js, and modern web development.
              </motion.p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-6 justify-center lg:justify-start"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              <CyberButton variant="neon" size="lg" className="group">
                <span>View My Work</span>
                <motion.span
                  className="ml-2 inline-block"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </CyberButton>
              
              <CyberButton variant="outline" size="lg">
                Download Resume
              </CyberButton>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex space-x-6 justify-center lg:justify-start"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  className={`${social.color} hover:scale-125 transition-all duration-300`}
                  whileHover={{ y: -5, rotate: 5 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Hero Visual */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <div className="relative w-80 h-80 mx-auto">
              {/* Animated Rings */}
              <motion.div
                className="absolute inset-0 rounded-full border-2 border-neon-cyan/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-4 rounded-full border border-neon-purple/40"
                animate={{ rotate: -360 }}
                transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
              />
              <motion.div
                className="absolute inset-8 rounded-full border border-neon-pink/30"
                animate={{ rotate: 360 }}
                transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              />
              
              {/* Center Content */}
              <div className="absolute inset-16 glass-card rounded-full flex items-center justify-center">
                <motion.div
                  className="text-6xl"
                  animate={{ 
                    scale: [1, 1.1, 1],
                    rotate: [0, 5, -5, 0]
                  }}
                  transition={{ 
                    duration: 4, 
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  ⚡
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
        >
          <motion.div
            className="w-6 h-10 border-2 border-neon-cyan rounded-full flex justify-center"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <motion.div
              className="w-1 h-3 bg-neon-cyan rounded-full mt-2"
              animate={{ scaleY: [1, 0.3, 1] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;