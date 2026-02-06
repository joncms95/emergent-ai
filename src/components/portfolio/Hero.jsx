import React from "react";
import { motion } from "framer-motion";
import { profile } from "@/data/mock";
import { MapPin, Mail, Phone, FileText, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section id="about" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Ambient glow effects */}
      <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-1/4 -right-32 w-[400px] h-[400px] bg-sky-400/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #e4e4e7 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      <div className="max-w-6xl mx-auto px-6 pt-24 pb-16 w-full">
        <div className="grid lg:grid-cols-5 gap-12 lg:gap-16 items-center">
          {/* Text content */}
          <motion.div
            className="lg:col-span-3 space-y-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="space-y-3">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.2, duration: 0.5 }}
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-900/50 text-xs font-medium text-zinc-400"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                Currently at {profile.company}
              </motion.div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-50 leading-[1.1]">
                {profile.name.split(" ").slice(0, 2).join(" ")}
                <span className="block text-zinc-500 text-2xl sm:text-3xl lg:text-4xl font-semibold mt-1 tracking-normal">
                  {profile.name.split(" ").slice(2).join(" ")}
                </span>
              </h1>

              <p className="text-lg sm:text-xl text-sky-400 font-medium">
                {profile.title}
              </p>
            </div>

            <p className="text-zinc-400 text-base sm:text-lg leading-relaxed max-w-xl">
              {profile.tagline}
            </p>

            <div className="flex flex-wrap items-center gap-3 text-sm text-zinc-500">
              <span className="inline-flex items-center gap-1.5">
                <MapPin size={14} className="text-zinc-600" />
                {profile.location}
              </span>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <a href={`mailto:${profile.email}`} className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors duration-200">
                <Mail size={14} className="text-zinc-600" />
                {profile.email}
              </a>
              <span className="w-1 h-1 rounded-full bg-zinc-700" />
              <a href={`tel:${profile.phone.replace(/\s/g, "")}`} className="inline-flex items-center gap-1.5 hover:text-sky-400 transition-colors duration-200">
                <Phone size={14} className="text-zinc-600" />
                {profile.phone}
              </a>
            </div>

            <div className="flex items-center gap-3 pt-2">
              <a href={profile.resumeUrl} target="_blank" rel="noopener noreferrer">
                <Button className="bg-sky-500 hover:bg-sky-600 text-white font-medium px-5 gap-2 transition-colors duration-200">
                  <FileText size={16} />
                  Resume
                </Button>
              </a>
              <button
                onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
                className="px-5 py-2 rounded-md border border-zinc-700 text-zinc-300 text-sm font-medium hover:border-zinc-600 hover:bg-zinc-900 transition-colors duration-200"
              >
                View My Journey
              </button>
            </div>
          </motion.div>

          {/* Profile image */}
          <motion.div
            className="lg:col-span-2 flex justify-center lg:justify-end"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.7, ease: "easeOut" }}
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-sky-400/10 rounded-full blur-2xl" />
              <div className="relative w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 rounded-full overflow-hidden border-2 border-zinc-800 ring-1 ring-sky-500/20">
                <img
                  src={profile.image}
                  alt={profile.name}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bio section */}
        <motion.div
          className="mt-16 pt-10 border-t border-zinc-800/50"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.6 }}
        >
          <div className="max-w-3xl space-y-4">
            {profile.bio.map((paragraph, i) => (
              <p key={i} className="text-zinc-400 leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-12"
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
        >
          <ChevronDown size={20} className="text-zinc-600" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
