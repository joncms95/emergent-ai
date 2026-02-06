import React, { useState } from "react";
import { motion } from "framer-motion";
import { experiences } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { Briefcase, Gamepad2, Calculator, MapPin, ChevronDown, ChevronUp, ExternalLink } from "lucide-react";

const typeIcon = {
  tech: Briefcase,
  esports: Gamepad2,
  accounting: Calculator,
};

const typeColor = {
  tech: "text-sky-400 bg-sky-400/10 border-sky-400/20",
  esports: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
  accounting: "text-amber-400 bg-amber-400/10 border-amber-400/20",
};

const typeLineColor = {
  tech: "bg-sky-400",
  esports: "bg-emerald-400",
  accounting: "bg-amber-400",
};

const ExperienceCard = ({ exp, index }) => {
  const [expanded, setExpanded] = useState(index === 0);
  const Icon = typeIcon[exp.type] || Briefcase;

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-8 pb-10 last:pb-0"
    >
      {/* Timeline line */}
      {index < experiences.length - 1 && (
        <div className="absolute left-[11px] top-8 bottom-0 w-px bg-zinc-800" />
      )}

      {/* Timeline dot */}
      <div className={`absolute left-0 top-1 w-6 h-6 rounded-full border-2 flex items-center justify-center ${typeColor[exp.type]} border-current`}>
        <div className={`w-2 h-2 rounded-full ${typeLineColor[exp.type]}`} />
      </div>

      <div className="group">
        {/* Header */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="w-full text-left"
        >
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-1">
              <h3 className="text-lg font-semibold text-zinc-100 group-hover:text-sky-400 transition-colors duration-200">
                {exp.companyShort || exp.company}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm text-zinc-500">
                <span className="inline-flex items-center gap-1">
                  <MapPin size={12} />
                  {exp.location}
                </span>
                <span className="w-1 h-1 rounded-full bg-zinc-700" />
                <span>{exp.overallPeriod}</span>
              </div>
            </div>
            <div className="flex items-center gap-2 mt-1">
              <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium border ${typeColor[exp.type]}`}>
                <Icon size={12} />
                {exp.type === "tech" ? "Engineering" : exp.type === "esports" ? "Esports" : "Accounting"}
              </span>
              <div className="text-zinc-600 transition-transform duration-200">
                {expanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
              </div>
            </div>
          </div>
        </button>

        {/* Expanded content */}
        {expanded && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            transition={{ duration: 0.3 }}
            className="mt-4 space-y-5"
          >
            {exp.roles.map((role, rIdx) => (
              <div key={rIdx} className="relative pl-4 border-l border-zinc-800">
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <h4 className="text-sm font-semibold text-zinc-200">{role.title}</h4>
                    {role.current && (
                      <span className="px-1.5 py-0.5 text-[10px] font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 rounded">
                        Current
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-500">
                    {role.period}
                    {role.duration && ` (${role.duration})`}
                  </p>
                  {role.description && (
                    <p className="text-sm text-zinc-400">{role.description}</p>
                  )}
                  <ul className="space-y-1.5 pt-1">
                    {role.achievements.map((a, aIdx) => (
                      <li key={aIdx} className="text-sm text-zinc-400 pl-4 relative before:content-[''] before:absolute before:left-0 before:top-[9px] before:w-1.5 before:h-1.5 before:rounded-full before:bg-zinc-700">
                        {a}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}

            {/* Tech stack */}
            {exp.tech.length > 0 && (
              <div className="flex flex-wrap gap-1.5 pt-1">
                {exp.tech.map((t) => (
                  <Badge key={t} variant="secondary" className="bg-zinc-800/80 text-zinc-400 border-zinc-700/50 font-normal text-xs hover:bg-zinc-800 transition-colors duration-200">
                    {t}
                  </Badge>
                ))}
              </div>
            )}

            {/* Achievement link */}
            {exp.achievementLink && (
              <a
                href={exp.achievementLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs text-sky-400 hover:text-sky-300 transition-colors duration-200"
              >
                View Competitive Achievements
                <ExternalLink size={11} />
              </a>
            )}
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Experience
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg">
            A non-traditional path spanning competitive gaming, finance, and software engineering.
          </p>
        </motion.div>

        <div className="max-w-3xl">
          {experiences.map((exp, i) => (
            <ExperienceCard key={exp.id} exp={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
