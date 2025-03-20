import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';

function BackgroundParticles() {
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const particlesArray = Array.from({ length: 50 }, (_, i) => ({
      id: i,
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      size: Math.random() * 4 + 1
    }));
    setParticles(particlesArray);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-accent/10 rounded-full"
          initial={{ 
            x: particle.x, 
            y: particle.y,
            scale: 0 
          }}
          animate={{ 
            scale: [0, 1, 0],
            opacity: [0, 0.5, 0]
          }}
          transition={{ 
            duration: Math.random() * 3 + 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            width: particle.size,
            height: particle.size
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundParticles;