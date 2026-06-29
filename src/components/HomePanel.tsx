import { motion } from "motion/react";
import { MessageSquare, Sparkles, Shield } from "lucide-react";

export default function HomePanel() {
  const letters = ["T", "R", "U", "E", "C", "O", "R", "E"];

  return (
    <div className="flex flex-col items-center justify-center text-center space-y-8 py-8 md:py-16">
      {/* 3D Floating SVG Logo */}
      <motion.div
        initial={{ transform: "scale(0.8) translateY(20px)", opacity: 0 }}
        animate={{ transform: "scale(1) translateY(0px)", opacity: 1 }}
        transition={{ duration: 0.8, type: "spring", bounce: 0.3 }}
        className="relative w-44 h-44 flex items-center justify-center"
      >
        {/* Glow effect backings */}
        <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-3xl animate-pulse-slow" />
        <div className="absolute inset-4 bg-violet-600/15 rounded-full blur-2xl animate-float" />

        {/* Custom 3D SVG Truecore Core */}
        <svg
          viewBox="0 0 200 200"
          className="w-full h-full drop-shadow-[0_10px_20px_rgba(6,182,212,0.3)] animate-float"
        >
          {/* Inner Glowing Core Sphere */}
          <circle cx="100" cy="100" r="24" fill="url(#violetGlow)" className="animate-pulse" />
          
          {/* Orbiting ring 1 */}
          <ellipse
            cx="100"
            cy="100"
            rx="55"
            ry="18"
            fill="none"
            stroke="url(#cyanGlow)"
            strokeWidth="2.5"
            strokeDasharray="15 5 5 5"
            transform="rotate(-25 100 100)"
            className="animate-spin-slow origin-center"
          />

          {/* Orbiting ring 2 */}
          <ellipse
            cx="100"
            cy="100"
            rx="65"
            ry="22"
            fill="none"
            stroke="url(#magentaGlow)"
            strokeWidth="1.5"
            strokeDasharray="20 10"
            transform="rotate(35 100 100)"
            style={{ animationDirection: "reverse", animationDuration: "16s" }}
            className="animate-spin-slow origin-center"
          />

          {/* Isometric Glass Cube Edges */}
          <g transform="translate(100,100) scale(1.1)">
            {/* Top Face */}
            <polygon
              points="0,-40 34.6,-20 0,0 -34.6,-20"
              fill="rgba(6, 182, 212, 0.12)"
              stroke="rgba(6, 182, 212, 0.6)"
              strokeWidth="2"
            />
            {/* Left Face */}
            <polygon
              points="-34.6,-20 0,0 0,40 -34.6,20"
              fill="rgba(139, 92, 246, 0.08)"
              stroke="rgba(139, 92, 246, 0.4)"
              strokeWidth="2"
            />
            {/* Right Face */}
            <polygon
              points="0,0 34.6,-20 34.6,20 0,40"
              fill="rgba(6, 182, 212, 0.06)"
              stroke="rgba(6, 182, 212, 0.5)"
              strokeWidth="2"
            />
            {/* Wireframe outer structure accents */}
            <line x1="-34.6" y1="-20" x2="-34.6" y2="20" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="34.6" y1="-20" x2="34.6" y2="20" stroke="rgba(6, 182, 212, 0.3)" strokeWidth="1" />
            <line x1="0" y1="-40" x2="0" y2="40" stroke="rgba(255, 255, 255, 0.2)" strokeWidth="1.5" strokeDasharray="4 4" />
          </g>

          <defs>
            <radialGradient id="violetGlow" cx="50%" cy="50%" r="50%">
              <stop offset="0%" stopColor="#c084fc" />
              <stop offset="60%" stopColor="#8b5cf6" />
              <stop offset="100%" stopColor="#4c1d95" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="cyanGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#22d3ee" />
              <stop offset="100%" stopColor="#0891b2" />
            </linearGradient>
            <linearGradient id="magentaGlow" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#f472b6" />
              <stop offset="100%" stopColor="#db2777" />
            </linearGradient>
          </defs>
        </svg>

        {/* Micro-sparkle icons orbiting */}
        <div className="absolute top-4 right-4 text-cyan-400/60 animate-bounce" style={{ animationDuration: "2.5s" }}>
          <Sparkles className="w-5 h-5" />
        </div>
        <div className="absolute bottom-6 left-4 text-violet-400/60 animate-bounce" style={{ animationDuration: "3.5s" }}>
          <Shield className="w-4 h-4" />
        </div>
      </motion.div>

      {/* Staggered Server Name Anim */}
      <div className="flex flex-col items-center">
        <div className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md mb-4 shadow-sm">
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">Версия 26.1.2</span>
        </div>
        <div className="flex justify-center items-center gap-1 md:gap-2 py-1">
          {letters.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.08,
                type: "spring",
                stiffness: 120,
              }}
              whileHover={{ 
                scale: 1.2, 
                color: "#6366f1",
                textShadow: "0 0 20px rgba(99, 102, 241, 0.8)",
                transition: { duration: 0.1 }
              }}
              className="font-display font-black text-5xl sm:text-7xl md:text-8xl lg:text-9xl select-none text-transparent bg-clip-text bg-gradient-to-b from-white to-slate-400 cursor-default uppercase tracking-tighter relative"
            >
              {letter}
            </motion.span>
          ))}
        </div>
      </div>

      {/* Description text */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8, duration: 0.6 }}
        className="text-slate-400 text-base md:text-lg max-w-lg mx-auto leading-relaxed"
      >
        Ванильное выживание в лучшем виде. Уютное комьюнити и новые сбалансированные механики.
      </motion.p>

      {/* Discord joining trigger button matching design exactly */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1, duration: 0.5 }}
        className="w-full max-w-md pt-2"
      >
        <a
          href="https://discord.gg/zNgzPxdgQ"
          className="group relative w-full h-16 bg-white flex items-center justify-center rounded-xl overflow-hidden shadow-2xl transition-transform active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
        >
          <span className="relative z-10 text-slate-950 font-sans font-black text-lg group-hover:text-white transition-colors duration-300 flex items-center gap-2">
            <MessageSquare className="w-5 h-5 shrink-0" />
            Присоединиться к Discord
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 to-blue-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          <div className="absolute top-0 -left-[100%] w-full h-full bg-white/25 skew-x-[-20deg] group-hover:left-[100%] transition-all duration-700" />
        </a>
      </motion.div>
    </div>
  );
}
