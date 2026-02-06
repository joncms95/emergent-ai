import React from "react";
import { profile } from "@/data/mock";
import { Mail, Phone, MapPin, FileText, ExternalLink } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className="border-t border-zinc-800/50">
      {/* Contact section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-4">
            <h2 className="text-2xl font-bold text-zinc-100 tracking-tight">
              Get In Touch
            </h2>
            <p className="text-zinc-400 max-w-md leading-relaxed">
              Interested in collaborating or just want to say hello? Feel free to reach out.
            </p>
          </div>

          <div className="space-y-4">
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/30 transition-colors duration-200 group"
            >
              <div className="p-2 rounded-md bg-sky-400/10 text-sky-400">
                <Mail size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200">{profile.email}</p>
                <p className="text-xs text-zinc-600">Email</p>
              </div>
            </a>

            <a
              href={`tel:${profile.phone.replace(/\s/g, "")}`}
              className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50 hover:border-zinc-700 hover:bg-zinc-900/30 transition-colors duration-200 group"
            >
              <div className="p-2 rounded-md bg-sky-400/10 text-sky-400">
                <Phone size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-300 group-hover:text-zinc-100 transition-colors duration-200">{profile.phone}</p>
                <p className="text-xs text-zinc-600">Phone</p>
              </div>
            </a>

            <div className="flex items-center gap-3 p-3 rounded-lg border border-zinc-800/50">
              <div className="p-2 rounded-md bg-sky-400/10 text-sky-400">
                <MapPin size={16} />
              </div>
              <div>
                <p className="text-sm font-medium text-zinc-300">{profile.location}</p>
                <p className="text-xs text-zinc-600">Location</p>
              </div>
            </div>

            <div className="flex gap-3 pt-2">
              <a
                href={profile.resumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md bg-sky-500 hover:bg-sky-600 text-white text-sm font-medium transition-colors duration-200"
              >
                <FileText size={14} />
                Download Resume
              </a>
              <a
                href={profile.links.liquipedia}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-md border border-zinc-700 text-zinc-300 text-sm hover:border-zinc-600 hover:bg-zinc-900 transition-colors duration-200"
              >
                <ExternalLink size={14} />
                Liquipedia
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-zinc-800/50">
        <div className="max-w-6xl mx-auto px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-zinc-600">
            {currentYear} {profile.shortName}. Built with care.
          </p>
          <div className="flex items-center gap-4">
            <a
              href={profile.links.liquipedia}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-sky-400 transition-colors duration-200"
            >
              Liquipedia
            </a>
            <a
              href={profile.links.lolFandom}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-zinc-600 hover:text-sky-400 transition-colors duration-200"
            >
              LoL Fandom
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="text-xs text-zinc-600 hover:text-sky-400 transition-colors duration-200"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
