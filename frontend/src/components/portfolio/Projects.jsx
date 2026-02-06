import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects } from "@/data/mock";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, ChevronLeft, ChevronRight } from "lucide-react";

const ProjectCard = ({ project, index }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const hasImages = project.images.length > 0;

  const nextImage = () => {
    if (hasImages) setCurrentImg((prev) => (prev + 1) % project.images.length);
  };
  const prevImage = () => {
    if (hasImages) setCurrentImg((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group rounded-xl border border-zinc-800/50 bg-zinc-900/30 overflow-hidden hover:border-zinc-700/50 transition-colors duration-300"
    >
      {/* Image carousel */}
      {hasImages && (
        <div className="relative aspect-video bg-zinc-900 overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={project.images[currentImg].src}
              alt={project.images[currentImg].caption}
              className="w-full h-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
            />
          </AnimatePresence>

          {/* Image caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-zinc-950/90 to-transparent p-3">
            <p className="text-xs text-zinc-400">{project.images[currentImg].caption}</p>
          </div>

          {/* Navigation arrows */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-zinc-900/70 text-zinc-300 opacity-0 group-hover:opacity-100 hover:bg-zinc-800 transition-all duration-200"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 p-1 rounded-full bg-zinc-900/70 text-zinc-300 opacity-0 group-hover:opacity-100 hover:bg-zinc-800 transition-all duration-200"
              >
                <ChevronRight size={16} />
              </button>
            </>
          )}

          {/* Dots indicator */}
          {project.images.length > 1 && (
            <div className="absolute top-3 right-3 flex gap-1">
              {project.images.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentImg(i)}
                  className={`w-1.5 h-1.5 rounded-full transition-colors duration-200 ${i === currentImg ? "bg-sky-400" : "bg-zinc-500/50"}`}
                />
              ))}
            </div>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-5 space-y-3">
        <div className="flex items-start justify-between gap-3">
          <div>
            <h3 className="text-base font-semibold text-zinc-200">{project.title}</h3>
            <p className="text-xs text-zinc-500 mt-0.5">{project.subtitle} / {project.period}</p>
          </div>
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 p-2 rounded-md text-zinc-500 hover:text-sky-400 hover:bg-sky-400/10 transition-colors duration-200"
            title="View live"
          >
            <ExternalLink size={15} />
          </a>
        </div>

        <p className="text-sm text-zinc-400 leading-relaxed">{project.description}</p>

        <ul className="space-y-1">
          {project.features.map((f, i) => (
            <li key={i} className="text-xs text-zinc-500 pl-3 relative before:content-[''] before:absolute before:left-0 before:top-[7px] before:w-1 before:h-1 before:rounded-full before:bg-zinc-600">
              {f}
            </li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 pt-1">
          {project.tech.map((t) => (
            <Badge key={t} variant="secondary" className="bg-zinc-800/60 text-zinc-400 border-zinc-700/40 font-normal text-xs">
              {t}
            </Badge>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-100 tracking-tight">
            Projects
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg">
            Side projects and personal tools built with passion.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
