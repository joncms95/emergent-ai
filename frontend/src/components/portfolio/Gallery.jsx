import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { galleryImages } from "@/data/mock";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

const Gallery = () => {
  const [activeFilter, setActiveFilter] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  const categories = ["All", ...new Set(galleryImages.map((img) => img.category))];

  const filteredImages = activeFilter === "All"
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeFilter);

  return (
    <section id="gallery" className="py-24 px-6 relative">
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
            Gallery
          </h2>
          <p className="mt-3 text-zinc-500 max-w-lg">
            Moments from the competitive gaming arena and beyond.
          </p>
        </motion.div>

        {/* Filter tabs */}
        <div className="flex flex-wrap gap-2 mb-8">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 text-sm rounded-full border transition-colors duration-200 ${
                activeFilter === cat
                  ? "bg-sky-400/10 text-sky-400 border-sky-400/30"
                  : "bg-zinc-900/50 text-zinc-500 border-zinc-800 hover:text-zinc-300 hover:border-zinc-700"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
          <AnimatePresence mode="popLayout">
            {filteredImages.map((img, i) => (
              <motion.button
                key={img.src}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3, delay: i * 0.03 }}
                onClick={() => setSelectedImage(img)}
                className="group relative aspect-[4/3] rounded-lg overflow-hidden bg-zinc-900 cursor-pointer"
              >
                <img
                  src={img.src}
                  alt={img.caption}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-3 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-xs text-zinc-200 font-medium">{img.caption}</p>
                  <p className="text-[10px] text-zinc-400 mt-0.5">{img.category}</p>
                </div>
              </motion.button>
            ))}
          </AnimatePresence>
        </div>

        {/* Lightbox dialog */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-4xl bg-zinc-950 border-zinc-800 p-0 overflow-hidden">
            {selectedImage && (
              <div className="relative">
                <img
                  src={selectedImage.src}
                  alt={selectedImage.caption}
                  className="w-full max-h-[80vh] object-contain bg-zinc-950"
                />
                <div className="p-4 border-t border-zinc-800">
                  <p className="text-sm text-zinc-200 font-medium">{selectedImage.caption}</p>
                  <p className="text-xs text-zinc-500 mt-1">{selectedImage.category}</p>
                </div>
              </div>
            )}
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Gallery;
