import { motion } from "motion/react";
import { Compass, Gamepad2, ShieldAlert } from "lucide-react";

interface HeaderProps {
  activeTab: "about" | "home" | "rules";
  setActiveTab: (tab: "about" | "home" | "rules") => void;
}

export default function Header({ activeTab, setActiveTab }: HeaderProps) {
  const tabs = [
    { id: "about", label: "О проекте", icon: Compass },
    { id: "home", label: "Главная", icon: Gamepad2 },
    { id: "rules", label: "Правила", icon: ShieldAlert },
  ] as const;

  return (
    <header className="w-full flex justify-center py-6 px-4 md:py-8 sticky top-0 z-40 backdrop-blur-md bg-[#08080d]/40 border-b border-white/5">
      <div className="flex items-center justify-between w-full max-w-5xl">
        {/* Animated Small Logo Brand */}
        <motion.div 
          className="flex items-center gap-3 cursor-pointer"
          onClick={() => setActiveTab("home")}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <div className="w-10 h-10 bg-indigo-500 rounded-lg flex items-center justify-center shadow-[0_0_20px_rgba(99,102,241,0.5)]">
            <span className="font-display font-black italic text-white text-xl">T</span>
          </div>
          <span className="font-display font-bold text-lg tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-200 to-slate-400 hidden sm:inline-block">
            TRUE<span className="text-indigo-400">CORE</span>
          </span>
        </motion.div>

        {/* Glowing glassmorphic tabs */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="relative flex items-center bg-white/5 border border-white/10 rounded-full p-1 backdrop-blur-md shadow-2xl"
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                id={`tab-${tab.id}`}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-5 py-2 rounded-full font-sans text-sm font-medium tracking-wide transition-all duration-300 z-10 ${
                  isActive ? "text-white font-semibold" : "text-slate-400 hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="active-tab"
                    className="absolute inset-0 bg-indigo-500 rounded-full -z-10 shadow-lg shadow-indigo-500/50"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
                <Icon className={`w-4 h-4 ${isActive ? "text-white" : "text-slate-400"}`} />
                <span>{tab.label}</span>
              </button>
            );
          })}
        </motion.div>

        {/* Subtle Server branding accent */}
        <motion.div 
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="hidden md:flex items-center gap-2 text-xs font-mono text-slate-500 tracking-wider"
        >
          <span>VANILLA+ EXPERIENCE</span>
        </motion.div>
      </div>
    </header>
  );
}
