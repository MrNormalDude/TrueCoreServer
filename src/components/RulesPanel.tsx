import { motion } from "motion/react";
import { ShieldAlert, Ban, Info, AlertTriangle, Users, Hammer, Flame, MessageSquare } from "lucide-react";

export default function RulesPanel() {
  const ruleCategories = [
    {
      icon: Ban,
      title: "Читы, моды, текстур-паки",
      rules: [
        "Запрещены любые чит-клиенты типа Meteor, Wurst и т.д.",
        "Запрещены чит-моды и текстур-паки на X-Ray, упрощённое PvP, gamma, подсветку мобов, полёт.",
      ],
      color: "border-red-500/20 text-red-400 bg-red-500/5",
    },
    {
      icon: Users,
      title: "Аккаунты",
      rules: [
        "Запрещено иметь более одного аккаунта на сервере.",
        "Если забыли пароль от аккаунта - не пересоздавайте заявку, обращайтесь к администрации.",
      ],
      color: "border-blue-500/20 text-blue-400 bg-blue-500/5",
    },
    {
      icon: Hammer,
      title: "Фермы и постройки",
      rules: [
        "Запрещено строительство и использование масштабных ферм, которые в теории просаживают TPS, без одобрения администрации (вердикт по использованию оглашается после разрешения).",
        "Если создали клан или построили здание - запрещено использовать названия и брать за основу запрещённые идеологии (короче, чтоб никаких кланов с именем террористических группировок и зданий с приставкой «рейх» не было).",
      ],
      color: "border-amber-500/20 text-amber-400 bg-amber-500/5",
    },
    {
      icon: Flame,
      title: "Гриф и PvP",
      rules: [
        "Гриф, естественно, запрещён.",
        "Убийство игроков без обоюдного согласия запрещено.",
      ],
      color: "border-orange-500/20 text-orange-400 bg-orange-500/5",
    },
    {
      icon: MessageSquare,
      title: "Общение и контент",
      rules: [
        "Запрещены любые пропагандистские символы.",
        "Запрещена реклама своих проектов на сервере (можете, конечно, спросить меня - может, по ситуации и разрешу 🙂).",
        "Запрещено распространение личной информации участников.",
        "Беспричинная токсичность не приветствуется.",
      ],
      color: "border-violet-500/20 text-violet-400 bg-violet-500/5",
    },
    {
      icon: Info,
      title: "Административное",
      rules: [
        "Все игроки на сервере равны, даже администрация не имеет никаких привилегий и в случае нарушений обязана понести наказание.",
        "Приветствуются предложения по улучшению сервера.",
        "Если найдёте ошибку в плагинах - сообщайте админу.",
      ],
      color: "border-cyan-500/20 text-cyan-400 bg-cyan-500/5",
    },
  ];

  return (
    <div className="w-full max-w-4xl mx-auto space-y-8 py-4 md:py-8 px-2 relative overflow-hidden">
      {/* Title block */}
      <div className="text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-block px-3 py-1 bg-indigo-500/20 border border-indigo-500/30 rounded-md mb-3"
        >
          <span className="text-indigo-400 text-xs font-bold uppercase tracking-widest font-mono">СВОД ЗАКОНОВ</span>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="font-display font-black text-4xl text-white tracking-tight"
        >
          Правила сервера <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-indigo-600">Truecore</span>
        </motion.h2>
      </div>

      {/* Rules categories list matching Frosted Glass template */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative">
        {ruleCategories.map((category, idx) => {
          const Icon = category.icon;
          return (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 + idx * 0.08 }}
              className="bg-white/5 border border-white/10 backdrop-blur-xl rounded-3xl p-8 shadow-xl flex flex-col justify-between hover:border-white/20 transition-colors relative overflow-hidden"
            >
              <div>
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Icon className="w-5 h-5 text-indigo-400" />
                  </div>
                  <h3 className="font-display font-bold text-base md:text-lg text-white">
                    {category.title}
                  </h3>
                </div>

                <ul className="space-y-4">
                  {category.rules.map((rule, rIdx) => (
                    <li key={rIdx} className="flex gap-3 items-start text-sm text-slate-300 leading-relaxed">
                      <span className="text-indigo-500 font-bold font-mono">0{rIdx + 1}</span>
                      <span>{rule}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Watermarked text inside the Rules area, matching the Design HTML watermark */}
      <div className="absolute bottom-0 right-4 p-8 opacity-5 font-display font-black text-8xl pointer-events-none select-none z-0">
        RULES
      </div>

      {/* Rules footer note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        className="relative bg-white/5 border border-white/10 rounded-2xl p-6 backdrop-blur-md flex items-center gap-4 z-10"
      >
        <div className="w-10 h-10 rounded-full bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0">
          <AlertTriangle className="w-5 h-5 text-indigo-400" />
        </div>
        <p className="font-sans text-sm text-slate-300 leading-relaxed">
          <strong>Важное примечание:</strong> Правила могут изменяться, но в новостях дискорд-сервера всегда будет своевременное оповещение об изменениях.
        </p>
      </motion.div>
    </div>
  );
}
