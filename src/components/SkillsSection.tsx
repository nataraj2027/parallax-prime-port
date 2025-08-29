import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text3D, OrbitControls } from '@react-three/drei';
import { motion } from 'framer-motion';
import * as THREE from 'three';

interface Skill {
  name: string;
  level: number;
  category: 'frontend' | 'backend' | 'tools' | 'database';
  color: string;
}

interface FloatingSkillProps {
  skill: Skill;
  position: [number, number, number];
}

const FloatingSkill: React.FC<FloatingSkillProps> = ({ skill, position }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.y += 0.01;
      meshRef.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
      <group position={position}>
        <mesh ref={meshRef}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial 
            color={skill.color}
            emissive={skill.color}
            emissiveIntensity={0.2}
            transparent
            opacity={0.8}
          />
        </mesh>
        {/* Skill name as floating text would go here in a more complex implementation */}
      </group>
    </Float>
  );
};

const Skills3DScene: React.FC<{ skills: Skill[] }> = ({ skills }) => {
  const positions: [number, number, number][] = [
    [-2, 1, 0], [2, 0, -1], [0, -1, 1], [3, 1, -2], 
    [-3, 0, 2], [1, 2, -1], [-1, -2, 0], [0, 0, 2]
  ];

  return (
    <>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#a855f7" />
      
      {skills.slice(0, 8).map((skill, index) => (
        <FloatingSkill
          key={skill.name}
          skill={skill}
          position={positions[index] || [0, 0, 0]}
        />
      ))}
    </>
  );
};

const SkillsSection: React.FC = () => {
  const skills: Skill[] = [
    { name: 'React.js', level: 95, category: 'frontend', color: '#61dafb' },
    { name: 'TypeScript', level: 90, category: 'frontend', color: '#3178c6' },
    { name: 'Next.js', level: 85, category: 'frontend', color: '#000000' },
    { name: 'Vue.js', level: 80, category: 'frontend', color: '#4fc08d' },
    { name: 'Node.js', level: 90, category: 'backend', color: '#339933' },
    { name: 'Python', level: 85, category: 'backend', color: '#3776ab' },
    { name: 'Express.js', level: 88, category: 'backend', color: '#000000' },
    { name: 'GraphQL', level: 75, category: 'backend', color: '#e10098' },
    { name: 'MongoDB', level: 85, category: 'database', color: '#47a248' },
    { name: 'PostgreSQL', level: 80, category: 'database', color: '#336791' },
    { name: 'Redis', level: 75, category: 'database', color: '#dc382d' },
    { name: 'Docker', level: 88, category: 'tools', color: '#2496ed' },
    { name: 'AWS', level: 82, category: 'tools', color: '#ff9900' },
    { name: 'Git', level: 92, category: 'tools', color: '#f05032' }
  ];

  const categories = {
    frontend: { name: 'Frontend', color: 'text-neon-cyan' },
    backend: { name: 'Backend', color: 'text-neon-purple' },
    database: { name: 'Database', color: 'text-neon-pink' },
    tools: { name: 'Tools & DevOps', color: 'text-neon-green' }
  };

  const skillsByCategory = Object.keys(categories).reduce((acc, category) => {
    acc[category as keyof typeof categories] = skills.filter(skill => skill.category === category);
    return acc;
  }, {} as Record<keyof typeof categories, Skill[]>);

  return (
    <section id="skills" className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-10 left-10 w-80 h-80 bg-neon-blue/5 rounded-full blur-3xl" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-neon-pink/5 rounded-full blur-3xl" />
      
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
            My <span className="text-gradient">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-primary rounded-full mx-auto" />
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Technologies and tools I love working with
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* 3D Skills Visualization */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative h-96"
          >
            <div className="glass-card rounded-2xl h-full overflow-hidden">
              <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
                <Skills3DScene skills={skills} />
                <OrbitControls enableZoom={false} enablePan={false} />
              </Canvas>
            </div>
            
            {/* Interactive Hint */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: [0, 1, 0] }}
              transition={{ duration: 2, repeat: Infinity, repeatDelay: 3 }}
              className="absolute bottom-4 left-4 text-xs text-muted-foreground"
            >
              🖱️ Drag to rotate
            </motion.div>
          </motion.div>

          {/* Skills List */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {Object.entries(skillsByCategory).map(([categoryKey, categorySkills]) => (
              <motion.div
                key={categoryKey}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className={`text-xl font-semibold ${categories[categoryKey as keyof typeof categories].color}`}>
                  {categories[categoryKey as keyof typeof categories].name}
                </h3>
                
                <div className="space-y-3">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      viewport={{ once: true }}
                      className="space-y-2"
                    >
                      <div className="flex justify-between items-center">
                        <span className="text-foreground font-medium">{skill.name}</span>
                        <span className="text-neon-cyan text-sm">{skill.level}%</span>
                      </div>
                      
                      <div className="w-full bg-space-medium rounded-full h-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-primary rounded-full"
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          viewport={{ once: true }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Floating Skill Tags */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-16 text-center"
        >
          <div className="flex flex-wrap justify-center gap-4">
            {skills.slice(0, 10).map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.1, y: -5 }}
                transition={{ 
                  duration: 0.3, 
                  delay: index * 0.05
                }}
                viewport={{ once: true }}
                className="px-4 py-2 glass-card rounded-full border border-neon-cyan/20 hover:border-neon-cyan/50 cursor-default"
                style={{ color: skill.color }}
              >
                {skill.name}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default SkillsSection;