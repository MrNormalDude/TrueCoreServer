import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import StarsBackground from "./components/StarsBackground";
import Header from "./components/Header";
import HomePanel from "./components/HomePanel";
import AboutPanel from "./components/AboutPanel";
import RulesPanel from "./components/RulesPanel";

type TabType = "about" | "home" | "rules";

export default function App() {
  const [activeTab, setActiveTab] = useState<TabType>("home");

  // Allow tab changes via simple hash-urls or window states if desired,
  // but keep typical state behavior smooth and fast.
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") as TabType;
      if (["about", "home", "rules"].includes(hash)) {
        setActiveTab(hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    handleHashChange();
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  const handleSetActiveTab = (tab: TabType) => {
    setActiveTab(tab);
    window.location.hash = tab;
  };

  return (
    <div className="min-h-screen text-white font-sans flex flex-col relative overflow-x-hidden selection:bg-cyan-500/30 selection:text-white">
      {/* Dynamic Animated Starfield Background Canvas */}
      <StarsBackground />

      {/* Modern Floating Header & Navigation Tabs */}
      <Header activeTab={activeTab} setActiveTab={handleSetActiveTab} />

      {/* Main Content Area with Fluid Transitions */}
      <main className="flex-grow flex items-center justify-center w-full px-4 py-8 md:py-16">
        <div className="w-full max-w-5xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 15, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -15, scale: 0.98 }}
              transition={{ duration: 0.35, ease: "easeInOut" }}
              className="w-full"
            >
              {activeTab === "home" && <HomePanel />}
              {activeTab === "about" && <AboutPanel />}
              {activeTab === "rules" && <RulesPanel />}
            </motion.div>
          </AnimatePresence>
        </div>
      </main>

      {/* Tiny clean footer matching user constraints (humble & functional) */}
      <footer className="w-full py-6 text-center border-t border-white/5 bg-black/20 backdrop-blur-sm z-10">
        <div className="max-w-5xl mx-auto px-4 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            &copy; 2026 <span className="text-slate-400 font-semibold font-sans">Truecore Minecraft Server</span>. Все права защищены.
          </div>
          <div className="flex items-center gap-4">
            <span>Vanilla+ Выживание</span>
            <span className="h-3 w-[1px] bg-white/10" />
            <span>Версия 26.1.2</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
