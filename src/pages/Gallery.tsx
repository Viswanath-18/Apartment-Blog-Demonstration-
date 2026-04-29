import { useState } from "react";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

import heroImage from "@/assets/hero-building.jpg";
import livingImage from "@/assets/apartment-living.jpg";
import bedroomImage from "@/assets/apartment-bedroom.jpg";
import kitchenImage from "@/assets/apartment-kitchen.jpg";
import poolImage from "@/assets/amenity-pool.jpg";
import gymImage from "@/assets/amenity-gym.jpg";
import vineDivider from "@/assets/TOKYO APARTMENTS.png";

function SectionDivider() {
  return (
    <div className="flex justify-center py-8 bg-[#F5F0E6]">
      <div className="w-full max-w-4xl h-14 overflow-hidden">
        <img
          src={vineDivider}
          alt="Section divider"
          className="w-full h-full object-cover block"
        />
      </div>
    </div>
  );
}

const galleryImages = [
  { src: heroImage, alt: "Building exterior", category: "Exterior" },
  { src: livingImage, alt: "Living room", category: "Interiors" },
  { src: bedroomImage, alt: "Bedroom", category: "Interiors" },
  { src: kitchenImage, alt: "Kitchen", category: "Interiors" },
  { src: poolImage, alt: "Swimming pool", category: "Amenities" },
  { src: gymImage, alt: "Fitness center", category: "Amenities" },
  { src: heroImage, alt: "Building at sunset", category: "Exterior" },
  { src: livingImage, alt: "Modern living space", category: "Interiors" },
];

const categories = ["All", "Exterior", "Interiors", "Amenities"];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  const filteredImages =
    selectedCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === selectedCategory);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
    document.body.style.overflow = "hidden";
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
    document.body.style.overflow = "";
  };

  const navigateLightbox = (direction: "prev" | "next") => {
    if (lightboxIndex === null) return;

    if (direction === "prev") {
      setLightboxIndex(
        lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1
      );
    } else {
      setLightboxIndex(
        lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1
      );
    }
  };

  return (
    <div className="pt-20 bg-[#F5F0E6]">
      {/* Hero Section */}
      <section className="section-padding bg-[#F5F0E6]">
        <div className="container-custom">
          <div
            ref={heroRef}
            className={cn(
              "max-w-3xl mx-auto text-center",
              heroVisible ? "animate-fade-in-up" : "opacity-0"
            )}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Gallery
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              See Our Spaces
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Explore our beautifully designed apartments, amenities, and common
              areas through our photo gallery.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border bg-[#F5F0E6]">
        <div className="container-custom">
          <div className="flex flex-wrap justify-center gap-2">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={cn(
                  "px-5 py-2 rounded-full text-sm font-medium transition-all duration-200",
                  selectedCategory === category
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground"
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding bg-[#F5F0E6]">
        <div className="container-custom">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredImages.map((image, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={index}
                  ref={ref}
                  className={cn(
                    "relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer group",
                    isVisible ? "animate-fade-in-up" : "opacity-0"
                  )}
                  style={{ animationDelay: `${(index % 3) * 50}ms` }}
                  onClick={() => openLightbox(index)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-300" />
                  <div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span className="bg-background/90 backdrop-blur-sm text-sm font-medium px-3 py-1 rounded-full">
                      {image.category}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div className="fixed inset-0 z-50 bg-foreground/95 flex items-center justify-center animate-fade-in">
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 z-10 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>

          <button
            onClick={() => navigateLightbox("prev")}
            className="absolute left-4 z-10 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          <button
            onClick={() => navigateLightbox("next")}
            className="absolute right-4 z-10 w-12 h-12 rounded-full bg-background/10 backdrop-blur-sm flex items-center justify-center text-primary-foreground hover:bg-background/20 transition-colors"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          <div className="max-w-5xl max-h-[80vh] p-4">
            <img
              src={filteredImages[lightboxIndex].src}
              alt={filteredImages[lightboxIndex].alt}
              className="max-w-full max-h-full object-contain rounded-lg animate-scale-in"
            />
            <p className="text-center text-primary-foreground/70 mt-4">
              {filteredImages[lightboxIndex].alt} • {lightboxIndex + 1} of{" "}
              {filteredImages.length}
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
