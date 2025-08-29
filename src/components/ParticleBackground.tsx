import React, { useCallback } from 'react';
import Particles from "react-particles";
import { loadSlim } from "tsparticles-slim";
import type { Container, Engine } from "tsparticles-engine";

interface ParticleBackgroundProps {
  id: string;
  className?: string;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({ id, className = "" }) => {
  const particlesInit = useCallback(async (engine: Engine) => {
    await loadSlim(engine);
  }, []);

  const particlesLoaded = useCallback(async (container: Container | undefined) => {
    // Particles loaded callback
  }, []);

  return (
    <Particles
      id={id}
      className={className}
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },
        fpsLimit: 120,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: ["#00ffff", "#a855f7", "#ec4899"],
          },
          links: {
            color: "#00ffff",
            distance: 150,
            enable: true,
            opacity: 0.3,
            width: 1,
          },
          move: {
            direction: "none",
            enable: true,
            outModes: {
              default: "bounce",
            },
            random: false,
            speed: 2,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.8,
            random: {
              enable: true,
              minimumValue: 0.3
            },
            animation: {
              enable: true,
              speed: 1,
              minimumValue: 0.1
            }
          },
          shape: {
            type: "circle",
          },
          size: {
            value: { min: 1, max: 5 },
            animation: {
              enable: true,
              speed: 3,
              minimumValue: 0.1
            }
          },
        },
        detectRetina: true,
      }}
    />
  );
};

export default ParticleBackground;