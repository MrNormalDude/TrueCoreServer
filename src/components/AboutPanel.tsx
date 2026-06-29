import { motion } from "motion/react";
import { Compass, Users, Sparkles, Trophy, ShieldCheck } from "lucide-react";

export default function AboutPanel() {
  const highlights = [
    {
      icon: Compass,
      title: "Атмосфера выживания",
      description: "Мы бережно храним дух оригинального майнкрафта, где каждое приключение и постройка имеют значение.",
      color: "from-amber-400 to-orange-500",
    },
    {
      icon: Sparkles,
      title: "Сбалансированный Vanilla+",
      description: "Новые механики гармонично дополняют игровой процесс, не перегружая его лишними деталями.",
      color: "from-cyan-400 to-teal-500",
    },
    {
      icon: Users,
      title: "Уютное комьюнити",
      description: "Место для душевного общения, совместных проектов и дружбы без токсичности и агрессии.",
      color: "from-purple-400 to-indigo-500",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 md:py-8 px-2">
      {/* Title block */}
      <div className="text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md mb-3"
        >
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">СЕРВЕР VANILLA+</span>
        </motion.div>
        
        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-4xl text-white tracking-tight"
        >
          О проекте <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Truecore</span>
        </motion.h2>
      </div>

      {/* Main explanation card matching Frosted Glass template */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="relative bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 overflow-hidden group shadow-2xl"
      >
        <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />
        
        <p className="font-sans text-base md:text-lg text-slate-200 leading-relaxed max-w-3xl italic">
          «<strong className="text-white font-semibold">Truecore</strong> — это сервер в формате <strong className="text-indigo-400 font-semibold">Vanilla+</strong>, который бережно сохраняет атмосферу оригинального выживания, дополняя её новыми, сбалансированными механиками. 
          Мы не ломаем ванильный геймплей, а лишь делаем его разнообразнее и интереснее. Если ты ищешь уютное комьюнити для душевного общения или просто хочешь отлично провести время за любимой игрой — заглядывай к нам!»
        </p>

        {/* Integration of stats block from design html */}
        <div className="flex gap-8 mt-8 pt-6 border-t border-white/10">
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-black text-white">100%</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Ванилла</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-black text-white">24/7</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Аптайм</div>
          </div>
          <div className="space-y-1">
            <div className="text-2xl md:text-3xl font-black text-white">∞</div>
            <div className="text-[10px] text-slate-500 uppercase tracking-widest font-mono">Приключений</div>
          </div>
        </div>
      </motion.div>

      {/* Key Highlights Grid with Frosted styling */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-2">
        {highlights.map((item, idx) => {
          const Icon = item.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 + idx * 0.1 }}
              whileHover={{ y: -5, borderColor: "rgba(255, 255, 255, 0.2)", backgroundColor: "rgba(255, 255, 255, 0.08)" }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-2xl p-6 transition-all duration-300 shadow-xl flex flex-col justify-between"
            >
              <div>
                <div className="w-12 h-12 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center mb-4 shadow-inner">
                  <Icon className="w-5 h-5 text-indigo-400" />
                </div>
                <h3 className="font-display font-bold text-lg text-white mb-2">{item.title}</h3>
                <p className="font-sans text-sm text-slate-400 leading-relaxed">{item.description}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
