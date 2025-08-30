import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Trophy, Target, Star } from 'lucide-react';

const CodingProfilesSection: React.FC = () => {
  const profiles = [
    {
      id: 1,
      platform: "LeetCode",
      username: "alex_dev",
      stats: {
        solved: "850+",
        rating: "2156",
        rank: "Knight"
      },
      color: "neon-cyan",
      icon: "🏆",
      url: "#",
      bgGradient: "from-neon-cyan/10 to-neon-blue/5"
    },
    {
      id: 2,
      platform: "Codeforces",
      username: "alexcoder",
      stats: {
        solved: "1200+",
        rating: "1847",
        rank: "Expert"
      },
      color: "neon-purple",
      icon: "⚔️",
      url: "#",
      bgGradient: "from-neon-purple/10 to-neon-pink/5"
    },
    {
      id: 3,
      platform: "HackerRank",
      username: "alex_hacker",
      stats: {
        solved: "500+",
        rating: "Gold",
        rank: "5★"
      },
      color: "neon-green",
      icon: "💎",
      url: "#",
      bgGradient: "from-neon-green/10 to-neon-cyan/5"
    },
    {
      id: 4,
      platform: "CodeChef",
      username: "alexchef",
      stats: {
        solved: "400+",
        rating: "1654",
        rank: "4★"
      },
      color: "neon-pink",
      icon: "🚀",
      url: "#",
      bgGradient: "from-neon-pink/10 to-neon-purple/5"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 50 },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0
    }
  };

  return (
    <section id="coding-profiles" className="relative py-20 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-space-dark to-background" />
      <div className="absolute top-20 left-10 w-96 h-96 bg-neon-green/5 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-10 w-80 h-80 bg-neon-pink/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="text-gradient">Coding Profiles</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Competitive programming achievements and problem-solving statistics across various platforms.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {profiles.map((profile) => (
            <motion.div
              key={profile.id}
              variants={cardVariants}
              className="group glass-card p-6 hover:bg-gradient-card transition-all duration-500"
              whileHover={{ 
                scale: 1.05,
                boxShadow: `0 20px 40px hsl(var(--${profile.color}) / 0.15)`,
                borderColor: `hsl(var(--${profile.color}))`
              }}
            >
              <div className={`bg-gradient-to-br ${profile.bgGradient} rounded-lg p-6 mb-6`}>
                <div className="flex items-center justify-between mb-4">
                  <motion.div
                    className="text-3xl"
                    whileHover={{ 
                      rotate: [0, -10, 10, -10, 0],
                      scale: [1, 1.1, 1]
                    }}
                    transition={{ duration: 0.5 }}
                  >
                    {profile.icon}
                  </motion.div>
                  <motion.a
                    href={profile.url}
                    className={`text-${profile.color} hover:scale-110 transition-transform`}
                    whileHover={{ rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={20} />
                  </motion.a>
                </div>

                <h3 className="text-xl font-bold text-foreground mb-2">
                  {profile.platform}
                </h3>
                <p className={`text-${profile.color} font-medium`}>
                  @{profile.username}
                </p>
              </div>

              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Target size={16} />
                    <span>Problems Solved</span>
                  </div>
                  <span className={`text-${profile.color} font-bold`}>
                    {profile.stats.solved}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Trophy size={16} />
                    <span>Rating</span>
                  </div>
                  <span className={`text-${profile.color} font-bold`}>
                    {profile.stats.rating}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-muted-foreground">
                    <Star size={16} />
                    <span>Rank</span>
                  </div>
                  <span className={`text-${profile.color} font-bold`}>
                    {profile.stats.rank}
                  </span>
                </div>
              </div>

              <motion.div
                className="mt-6 pt-4 border-t border-space-light/20"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
              >
                <motion.div
                  className={`w-full h-2 bg-${profile.color}/20 rounded-full overflow-hidden`}
                >
                  <motion.div
                    className={`h-full bg-${profile.color} rounded-full`}
                    initial={{ width: 0 }}
                    whileInView={{ width: "75%" }}
                    transition={{ duration: 1, delay: 0.5 }}
                  />
                </motion.div>
                <p className="text-xs text-muted-foreground mt-2 text-center">
                  Progress towards next milestone
                </p>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <div className="glass-card p-6 max-w-md mx-auto">
            <h3 className="text-lg font-semibold text-foreground mb-2">
              Overall Statistics
            </h3>
            <div className="flex justify-around text-center">
              <div>
                <div className="text-2xl font-bold text-neon-cyan">3000+</div>
                <div className="text-sm text-muted-foreground">Problems Solved</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-purple">4+</div>
                <div className="text-sm text-muted-foreground">Platforms</div>
              </div>
              <div>
                <div className="text-2xl font-bold text-neon-green">2+</div>
                <div className="text-sm text-muted-foreground">Years Active</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CodingProfilesSection;