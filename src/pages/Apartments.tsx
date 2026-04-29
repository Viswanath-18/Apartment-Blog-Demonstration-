import { useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useScrollAnimation } from "@/hooks/useScrollAnimation";
import { cn } from "@/lib/utils";
import { BedDouble, Bath, Square, ChevronRight, X } from "lucide-react";
import livingImage from "@/assets/apartment-living.jpg";
import bedroomImage from "@/assets/apartment-bedroom.jpg";
import kitchenImage from "@/assets/apartment-kitchen.jpg";
import vineDivider from "@/assets/TOKYO APARTMENTS.png";

function SectionDivider() {
  return (
    <div className="flex justify-center py-8">
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

const apartments = [
  {
    id: 1,
    name: "1 BHK Compact",
    type: "1 BHK",
    size: "650 sq.ft",
    bedrooms: 1,
    bathrooms: 1,
    price: "₹45 Lakhs",
    availability: "Available",
    image: livingImage,
    features: ["Modular kitchen", "Balcony", "Wardrobe space", "Power backup"],
    description:
      "Perfect for singles or couples, this compact 1 BHK offers smart living with all essential amenities.",
  },
  {
    id: 2,
    name: "2 BHK Premium",
    type: "2 BHK",
    size: "1,100 sq.ft",
    bedrooms: 2,
    bathrooms: 2,
    price: "₹75 Lakhs",
    availability: "Available",
    image: bedroomImage,
    features: [
      "Spacious living room",
      "Master bedroom with ensuite",
      "Kids room",
      "Utility area",
      "Two balconies",
    ],
    description:
      "Ideal for small families, featuring spacious rooms and thoughtful layouts for comfortable living.",
  },
  {
    id: 3,
    name: "3 BHK Deluxe",
    type: "3 BHK",
    size: "1,650 sq.ft",
    bedrooms: 3,
    bathrooms: 3,
    price: "₹1.1 Cr",
    availability: "Limited",
    image: kitchenImage,
    features: [
      "Premium finishes",
      "Large living-dining",
      "Servant room",
      "Study nook",
      "Wrap-around balcony",
    ],
    description:
      "Generous living spaces for growing families with premium finishes and modern amenities.",
  },
  {
    id: 4,
    name: "Penthouse Suite",
    type: "Penthouse",
    size: "2,800 sq.ft",
    bedrooms: 4,
    bathrooms: 4,
    price: "₹2.5 Cr",
    availability: "Only 2 Left",
    image: livingImage,
    features: [
      "Private terrace",
      "Panoramic views",
      "Home theater room",
      "Private elevator",
      "Smart home automation",
    ],
    description:
      "Exclusive penthouse living with breathtaking views and unparalleled luxury amenities.",
  },
];

interface ApartmentCardProps {
  apartment: (typeof apartments)[0];
  onViewDetails: () => void;
  index: number;
}

function ApartmentCard({ apartment, onViewDetails, index }: ApartmentCardProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        "group bg-background rounded-xl overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 bg-white",
        isVisible ? "animate-fade-in-up" : "opacity-0"
      )}
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Image zooms when CARD is hovered */}
      <div className="relative h-56 overflow-hidden">
        <img
          src={apartment.image}
          alt={apartment.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        {/* badges ... */}
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 group-hover:text-[#304c3e]">
          {apartment.name}
        </h3>
        <p className="text-2xl font-semibold text-primary mb-4">
          {apartment.price}
        </p>

        {/* meta ... */}

        {/* BUTTON: green fill ONLY when BUTTON hovered */}
        <Button
          type="button"
          onClick={onViewDetails}
          className="relative inline-flex w-full items-center justify-start py-3 pl-4 pr-12 overflow-hidden
                     font-semibold text-[#437059] transition-all duration-150 ease-in-out rounded-md
                     hover:pl-10 hover:pr-6 bg-white border border-[#437059] group/button"
        >
          {/* sliding background strip (button hover) */}
          <span
            className="absolute bottom-0 left-0 w-full h-1 bg-[#437059]
                       transition-all duration-150 ease-in-out group-hover/button:h-full"
          />

          {/* right arrow that slides out (button hover) */}
          <span
            className="absolute right-0 pr-4 duration-200 ease-out group-hover/button:translate-x-12"
          >
            <ChevronRight className="w-5 h-5 text-[#4b8065] rotate-90" />
          </span>

          {/* left arrow that slides in (button hover) */}
          <span
            className="absolute left-0 pl-2.5 -translate-x-12 duration-200 ease-out group-hover/button:translate-x-0"
          >
            <ChevronRight className="w-5 h-5 text-white rotate-90" />
          </span>

          {/* label */}
          <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover/button:text-white">
            View Details
          </span>
        </Button>
      </div>
    </div>
  );
}


interface ApartmentModalProps {
  apartment: (typeof apartments)[0];
  onClose: () => void;
}

function ApartmentModal({ apartment, onClose }: ApartmentModalProps) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      <div
        className="absolute inset-0 bg-foreground/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />
      <div className="relative bg-background rounded-2xl max-w-2xl w-full max-h-[90vh] overflow-auto animate-scale-in shadow-elevated">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center hover:bg-background transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="h-64 md:h-80">
          <img
            src={apartment.image}
            alt={apartment.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="p-6 md:p-8">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className="text-sm font-medium text-primary uppercase tracking-wider">
                {apartment.type}
              </span>
              <h2 className="text-2xl md:text-3xl font-semibold mt-1">
                {apartment.name}
              </h2>
            </div>
            <p className="text-2xl font-semibold text-primary">
              {apartment.price}
            </p>
          </div>

          <div className="flex items-center gap-6 text-sm text-muted-foreground mb-6 pb-6 border-b border-border">
            <div className="flex items-center gap-2">
              <BedDouble className="w-5 h-5" />
              <span>{apartment.bedrooms} Bedrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Bath className="w-5 h-5" />
              <span>{apartment.bathrooms} Bathrooms</span>
            </div>
            <div className="flex items-center gap-2">
              <Square className="w-5 h-5" />
              <span>{apartment.size}</span>
            </div>
          </div>

          <p className="text-muted-foreground leading-relaxed mb-6">
            {apartment.description}
          </p>

          <div className="mb-6">
            <h4 className="font-semibold mb-3">Key Features</h4>
            <ul className="grid grid-cols-2 gap-2">
              {apartment.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-muted-foreground"
                >
                  <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex gap-4">
  {/* Schedule Visit */}
  <Link
    to="/contact"
    className="relative inline-flex items-center justify-center w-72 px-6 py-2 overflow-hidden
               rounded-md bg-[#437059] text-white text-sm font-medium
               transition-all ease-out duration-300 group hover:bg-gradient-to-r hover:from-[#437059] hover:to-[#4b8065]
               hover:ring-2 hover:ring-offset-2 hover:ring-[#4b8065]"
  >
    <span
      className="absolute right-0 w-8 h-32 -mt-12 translate-x-12 bg-white opacity-10 rotate-12
                 transition-transform duration-1000 ease group-hover:-translate-x-80"
    />
    <span className="relative">Schedule Visit</span>
  </Link>

  {/* Close */}
  <Button
    type="button"
    onClick={onClose}
    className="relative inline-flex items-center justify-center w-36 px-6 py-2 overflow-hidden
               rounded-md border-2 border-[#437059] text-sm font-medium text-[#437059]
               shadow-md bg-[white] transition duration-300 ease-out group"
  >
    {/* X layer sliding in from left */}
    <span
      className="absolute inset-0 flex items-center justify-center w-full h-full
                 bg-[#437059] text-white -translate-x-full
                 transition-transform duration-300 ease-out group-hover:translate-x-0"
    >
      <X className="w-5 h-5" />
    </span>

    {/* Close text sliding out to left */}
    <span
      className="absolute flex items-center justify-center w-full h-full text-[#437059]
                             transition-all duration-300 transform group-hover:translate-x-full ease"
    >
      Close
    </span>

    {/* Invisible keeps width/height consistent */}
    <span className="relative invisible">Close</span>
  </Button>
</div>

        </div>
      </div>
    </div>
  );
}

export default function Apartments() {
  const [selectedApartment, setSelectedApartment] =
    useState<(typeof apartments)[0] | null>(null);
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="pt-20">
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
              Floor Plans
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Find Your Perfect Space
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              From cozy 1 BHK units to luxurious penthouses, we have a home that
              fits your lifestyle and budget.
            </p>
          </div>
        </div>
      </section>

      <SectionDivider />

      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
            {apartments.map((apartment, index) => (
              <ApartmentCard
                key={apartment.id}
                apartment={apartment}
                index={index}
                onViewDetails={() => setSelectedApartment(apartment)}
              />
            ))}
          </div>
        </div>
      </section>

      {selectedApartment && (
        <ApartmentModal
          apartment={selectedApartment}
          onClose={() => setSelectedApartment(null)}
        />
      )}
    </div>
  );
}
