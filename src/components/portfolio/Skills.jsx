import React from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/mock";
import { Code, Server, Database, Cloud, Wrench, Cpu, Users, Languages } from "lucide-react";

const skillCategories = [
  { key: "languages", label: "Languages", icon: Code, color: "sky" },
  { key: "frameworks", label: "Frameworks & Libraries", icon: Server, color: "sky" },
  { key: "databases", label: "Databases", icon: Database, color: "sky" },
  { key: "devops", label: "DevOps & Cloud", icon: Cloud, color: "sky" },
  { key: "tools", label: "Tools", icon: Wrench, color: "sky" },
  { key: "ai", label: "AI Tools", icon: Cpu, color: "sky" },
  { key: "practices", label: "Workflow", icon: Users, color: "sky" },
  { key: "communication", label: "Languages Spoken", icon: Languages, color: "sky" },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 px-6 relative">
      {/* Subtle background accent */}
      <div className="absolute inset-0 bg-zinc-900/20 pointer-events-none" />

      <div className="max-w-6xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Skills & Expertise
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg">
            Proficient across multiple languages, frameworks, and development practices.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {skillCategories.map(({ key, label, icon: Icon }, catIdx) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: catIdx * 0.06 }}
              className="group rounded-xl border border-zinc-800/50 bg-zinc-950/50 p-4 hover:border-zinc-700/50 transition-colors duration-300"
            >
              <div className="flex items-center gap-2.5 mb-3">
                <div className="p-1.5 rounded-md bg-sky-400/10 text-sky-400">
                  <Icon size={14} />
                </div>
                <h3 className="text-sm font-semibold text-zinc-300">{label}</h3>
              </div>
              <div className="flex flex-wrap gap-1.5">
                {skills[key].map((skill) => (
                  <span
                    key={skill}
                    className="px-2 py-1 text-xs rounded-md bg-zinc-800/60 text-zinc-400 border border-zinc-700/30 hover:text-zinc-300 hover:border-zinc-600/50 transition-colors duration-200"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
