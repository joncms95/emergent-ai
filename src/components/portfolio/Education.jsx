import React from "react";
import { motion } from "framer-motion";
import { education } from "@/data/mock";
import { GraduationCap, Award } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const Education = () => {
  return (
    <section id="education" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Education
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg">
            Academic foundations and continuous learning.
          </p>
        </motion.div>

        <div className="max-w-3xl space-y-6">
          {education.map((edu, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-30px" }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group relative rounded-xl border border-zinc-800/50 bg-zinc-900/30 p-5 hover:border-zinc-700/50 hover:bg-zinc-900/50 transition-colors duration-300"
            >
              <div className="flex items-start gap-4">
                <div className="mt-0.5 p-2 rounded-lg bg-zinc-800/50 text-zinc-400 group-hover:text-sky-400 transition-colors duration-200">
                  <GraduationCap size={18} />
                </div>
                <div className="flex-1 space-y-2">
                  <div>
                    <h3 className="text-base font-semibold text-zinc-200">
                      {edu.degree}
                    </h3>
                    <p className="text-sm text-zinc-500">
                      {edu.institution}
                      <span className="mx-2 text-zinc-700">|</span>
                      {edu.period}
                    </p>
                  </div>

                  {edu.description && (
                    <p className="text-sm text-zinc-400">{edu.description}</p>
                  )}

                  {edu.gpa && (
                    <p className="text-sm text-zinc-400 font-medium">{edu.gpa}</p>
                  )}

                  {edu.achievements && edu.achievements.length > 0 && (
                    <div className="flex flex-wrap gap-1.5 pt-1">
                      {edu.achievements.map((a, aIdx) => (
                        <Badge key={aIdx} variant="secondary" className="bg-zinc-800/60 text-zinc-400 border-zinc-700/40 font-normal text-xs">
                          <Award size={10} className="mr-1" />
                          {a}
                        </Badge>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
