import React from 'react';
import { motion } from 'framer-motion';
import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ProjectsSection from '@/components/ProjectsSection';
import SkillsSection from '@/components/SkillsSection';
import ArticlesSection from '@/components/ArticlesSection';
import CodingProfilesSection from '@/components/CodingProfilesSection';
import ContactSection from '@/components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      <main>
        <HeroSection />
        <AboutSection />
        <ProjectsSection />
        <SkillsSection />
        <ArticlesSection />
        <CodingProfilesSection />
        <ContactSection />
      </main>
      
      {/* Footer */}
      <footer className="relative py-8 border-t border-space-light/20">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-muted-foreground"
          >
            © 2024 Alex Portfolio. Built with React, TypeScript, and lots of ☕
          </motion.p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
