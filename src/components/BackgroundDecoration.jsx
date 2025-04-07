import { motion } from 'framer-motion';

function BackgroundDecoration() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Matrix-like Grid */}
      <div 
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `linear-gradient(rgb(0, 255, 187, 0.1) 1px, transparent 1px), 
                           linear-gradient(90deg, rgb(0, 255, 187, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />

      {/* Glowing Orbs */}
      {[...Array(4)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-[100px]"
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: [0.1, 0.15, 0.1],
            scale: [1, 1.1, 1],
          }}
          transition={{ 
            duration: Math.random() * 5 + 10,
            repeat: Infinity,
            ease: "easeInOut",
            delay: i * 2
          }}
          style={{
            width: `${Math.random() * 400 + 200}px`,
            height: `${Math.random() * 400 + 200}px`,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle at center, rgba(0, 255, 187, 0.05) 0%, transparent 70%)`,
            transform: `rotate(${Math.random() * 360}deg)`
          }}
        />
      ))}
    </div>
  );
}

export default BackgroundDecoration;