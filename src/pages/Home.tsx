import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { MapPin, Building2, TreePine, Shield, ArrowRight, Star, ChevronRight } from 'lucide-react';
import heroImage from '@/assets/hero-building.jpg';
import livingImage from '@/assets/apartment-living.jpg';
import bedroomImage from '@/assets/apartment-bedroom.jpg';
import poolImage from '@/assets/amenity-pool.jpg';
import vineDivider from '@/assets/TOKYO APARTMENTS.png';
import { ArrowUpRight } from 'lucide-react';
import heroVideo from '@/assets/hero-video.mp4';
import logoMark from '@/assets/4.jpg';
import new_logo from '@/assets/TOKYO_APARTMENTS-removebg-.png';


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


// Hero Section
function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center pt-45">
      {/* Background Video */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 via-foreground/50 to-transparent" />
      </div>

      {/* Content + Logo split */}
      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] items-center gap-10">

          {/* Left: main text, wider */}
          <div className="max-w-3xl">
            {/* small logo + tagline above */}
            <div className="flex items-center gap-3 mb-6 animate-reveal-left">
              <div className="w-10 h-10 rounded-xl bg-primary/20 backdrop-blur-md flex items-center justify-center overflow-hidden border border-white/20 shadow-xl">
                <img
                  src={logoMark}
                  alt="TOKYO Apartments logo"
                  className="w-10 h-10 object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-bold uppercase tracking-[0.25em] text-white">
                  TOKYO APARTMENTS
                </p>
                <p className="text-[10px] text-white/70 font-medium italic">
                  Where Comfort Meets Sleek
                </p>
              </div>
            </div>

            <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-bold uppercase tracking-widest mb-6 animate-reveal-left delay-100">
              Premium Living at Your City
            </span>

            <h1 className="text-[3rem] md:text-[4rem] lg:text-[4.5rem] font-bold text-white leading-[1.1] mb-8 animate-reveal-left delay-200">
              Find Your <span className="text-[#437059] bg-white px-2 py-0.5 rounded-lg">Perfect</span> Home at Tokyo!
            </h1>

            <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10 animate-reveal-left delay-300 max-w-2xl font-medium">
              Thoughtfully designed apartments for modern families. Experience comfort,
              community, and convenience in a serene neighborhood.
            </p>

            <div className="flex flex-wrap gap-5 animate-reveal-left delay-400">
              <Link
                to="/apartments"
                className="relative inline-flex items-center justify-center px-8 py-4 overflow-hidden
                           font-bold text-white transition duration-300 ease-out border-2
                           border-white rounded-xl shadow-2xl group"
              >
                <span
                  className="absolute inset-0 flex items-center justify-center w-full h-full text-white
                             duration-300 -translate-x-full bg-[#437059] group-hover:translate-x-0 ease"
                >
                  <ArrowUpRight className="w-6 h-6" />
                </span>
                <span
                  className="absolute flex items-center justify-center w-full h-full text-white
                             transition-all duration-300 transform group-hover:translate-x-full ease"
                >
                  Explore Apartments
                </span>
                <span className="relative invisible">Explore Apartments</span>
              </Link>

              <Link
                to="/contact"
                className="relative inline-block rounded-xl px-8 py-4 overflow-hidden group
                           bg-[#437059] hover:bg-gradient-to-r hover:from-[#437059] hover:to-[#4b8065]
                           text-white shadow-xl hover:shadow-2xl transition-all ease-out duration-300"
              >
                <span className="relative font-bold">Schedule Visit</span>
                <span className="absolute top-0 right-0 w-8 h-32 -mt-12 bg-white opacity-10 rotate-12 transform translate-x-12 transition-all duration-1000 ease-out group-hover:-translate-x-[300px]" />
              </Link>
            </div>
          </div>

          {/* Right: larger decorative logo */}
          <div className="hidden lg:flex justify-center animate-scale-up delay-500">
            <div className="relative group">
              <div className="absolute inset-0 bg-white/20 blur-3xl rounded-full scale-150 animate-pulse-subtle" />
              <div className="w-64 h-64 rounded-[3rem] bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-2xl relative z-10 animate-float">
                <img
                  src={new_logo}
                  alt="TOKYO Apartments logo"
                  className="w-48 h-48 object-contain drop-shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}


// Highlights Section
const highlights = [
  {
    icon: MapPin,
    title: 'Prime Location',
    description: 'Just 10 minutes from the metro station and major IT hubs.',
  },
  {
    icon: Building2,
    title: 'Modern Design',
    description: 'Contemporary architecture with spacious, well-ventilated homes.',
  },
  {
    icon: TreePine,
    title: 'Green Spaces',
    description: 'Landscaped gardens, walking paths, and outdoor recreation areas.',
  },
  {
    icon: Shield,
    title: '24/7 Security',
    description: 'Round-the-clock security with CCTV and access control.',
  },
];

function HighlightsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Why Choose Us"
          title="Designed for Modern Living"
          description="Every detail of TOKYO Apartments is crafted to enhance your lifestyle."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={item.title}
                ref={ref}
                className={cn(
                  'bg-white dark:bg-card rounded-2xl p-8 shadow-soft hover-lift border border-transparent hover:border-[#437059]/20 transition-all duration-500',
                  isVisible ? 'animate-scale-up' : 'opacity-0'
                )}
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="w-14 h-14 rounded-xl bg-[#437059]/10 flex items-center justify-center mb-6 shadow-inner">
                  <item.icon className="w-7 h-7 text-[#437059]" />
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                  {item.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// Gallery Preview Section
function GalleryPreviewSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Take a Look"
          title="Beautifully Designed Spaces"
          description="Every apartment is thoughtfully designed for comfort and aesthetics."
        />

        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6',
            isVisible ? 'animate-fade-in delay-200' : 'opacity-0'
          )}
        >
          <div className="lg:col-span-2 lg:row-span-2 group">
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] rounded-[2rem] overflow-hidden shadow-2xl transition-all duration-700 hover:shadow-[#437059]/10">
              <img
                src={poolImage}
                alt="Swimming pool"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
              <div className="absolute bottom-10 left-10 text-white translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-2xl font-bold mb-2">Resort Style Pool</h4>
                <p className="text-white/70 font-medium">Crystal clear waters for your daily relaxation.</p>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative h-[240px] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 hover:shadow-[#437059]/10">
              <img
                src={livingImage}
                alt="Living room"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-lg font-bold">Spacious Living</h4>
              </div>
            </div>
          </div>
          <div className="group">
            <div className="relative h-[240px] rounded-[2rem] overflow-hidden shadow-xl transition-all duration-700 hover:shadow-[#437059]/10">
              <img
                src={bedroomImage}
                alt="Bedroom"
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
              <div className="absolute bottom-6 left-6 text-white translate-y-2 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="text-lg font-bold">Luxury Master Bedroom</h4>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 text-center">
          <Button
            asChild
            className="relative inline-flex items-center justify-start py-3 pl-4 pr-12 overflow-hidden
               font-semibold text-[#437059] transition-all duration-150 ease-in-out rounded-md
               hover:pl-10 hover:pr-6 bg-[#F5F0E6] group border border-[#437059]"
          >
            <Link to="/gallery">
              {/* sliding background strip */}
              <span className="absolute bottom-0 left-0 w-full h-1 bg-[#437059] transition-all duration-150 ease-in-out group-hover:h-full" />

              {/* right arrow that slides out */}
              <span className="absolute right-0 pr-4 duration-200 ease-out group-hover:translate-x-12">
                <ChevronRight className="w-5 h-5 text-[#4b8065]" />
              </span>

              {/* left arrow that slides in */}
              <span className="absolute left-0 pl-2.5 -translate-x-12 duration-200 ease-out group-hover:translate-x-0">
                <ChevronRight className="w-5 h-5 text-[white]" />
              </span>

              {/* label */}
              <span className="relative w-full text-left transition-colors duration-200 ease-in-out group-hover:text-white">
                View Full Gallery
              </span>
            </Link>
          </Button>
        </div>

      </div>
    </section>
  );
}

// Testimonials Section
const testimonials = [
  {
    name: 'Priya Sharma',
    role: 'Resident since 2022',
    content:
      'Moving to TOKYO was the best decision for our family. The community is wonderful, and the amenities are top-notch.',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    role: 'Resident since 2021',
    content:
      'The location is perfect for my daily commute, and the maintenance team is always responsive.',
    rating: 5,
  },
  {
    name: 'Meera Patel',
    role: 'Resident since 2023',
    content:
      'Beautiful apartments with thoughtful design. The green spaces make it feel like a retreat from the city.',
    rating: 5,
  },
  {
    name: 'Anand Iyer',
    role: 'Homebuyer 2024',
    content:
      'Great workmanship and thoughtful layouts. The booking process was smooth and the team was supportive.',
    rating: 5,
  },
  {
    name: 'Sana Reddy',
    role: 'Tenant since 2020',
    content:
      'Love the community events and the playgrounds for kids. Very family-friendly.',
    rating: 5,
  },
  {
    name: 'Vikram Singh',
    role: 'Investor',
    content:
      'Strong rental demand and consistent maintenance makes this a reliable investment.',
    rating: 5,
  },
  {
    name: 'Neha Gupta',
    role: 'Resident since 2022',
    content:
      'Quiet neighbourhood and easy access to shopping. The team handles requests quickly.',
    rating: 5,
  },
];
;

function AnnouncementPopup() {
  const [open, setOpen] = useState(true);

  useEffect(() => {
    setOpen(true);
  }, []);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={() => setOpen(false)} />

      <div
        role="dialog"
        aria-modal="true"
        className="relative bg-background w-80 h-80 rounded-lg p-6 shadow-xl flex flex-col"
      >
        <button
          aria-label="Close"
          onClick={() => setOpen(false)}
          className="absolute top-3 right-3 text-muted-foreground text-lg"
        >
          ×
        </button>

        <h3 className="text-lg font-semibold mb-2">Upcoming Projects</h3>
        <p className="text-sm text-muted-foreground mb-3">
          Phase II launching soon — sky gardens, rooftop lounge, and new 2/3 BHK layouts.
        </p>

        <ul className="text-sm text-muted-foreground mb-4 space-y-1 flex-1 overflow-auto">
          <li>
            <strong>Phase II:</strong> Sky gardens & rooftop lounge
          </li>
          <li>
            <strong>New Towers:</strong> Premium 2 & 3 BHK layouts
          </li>
          <li>
            <strong>Pre-book:</strong> Limited slots with early-bird benefits
          </li>
        </ul>

        <div className="mt-auto">
          <Link
            to="/contact"
            className="block w-full text-center bg-[#437059] text-white py-2 rounded-md"
            onClick={() => setOpen(false)}
          >
            Pre-book Now
          </Link>
        </div>
      </div>
    </div>
  );
}

function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    const id = setInterval(() => {
      setCurrent((c) => (c + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(id);
  }, [isPaused]);

  return (
    <section className="section-padding overflow-hidden bg-secondary/30 relative">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#437059]/5 rounded-full translate-x-1/3 translate-y-1/3 blur-3xl" />

      <AnnouncementPopup />
      <div className="container-custom relative z-10">
        <SectionHeading
          label="Testimonials"
          title="What Our Residents Say"
          description="Hear from families who have made TOKYO their home."
        />

        <div
          className="relative mt-16 h-[400px] flex items-center justify-center"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
        >
          {testimonials.map((t, i) => {
            // Calculate relative distance for circular carousel
            let diff = i - current;
            if (diff > testimonials.length / 2) diff -= testimonials.length;
            if (diff < -testimonials.length / 2) diff += testimonials.length;

            const isActive = diff === 0;
            const isNext = diff === 1 || diff === -(testimonials.length - 1);
            const isPrev = diff === -1 || diff === (testimonials.length - 1);
            const isVisible = Math.abs(diff) <= 1;

            // Advanced positioning and scale
            const xTranslation = diff * 105; // Base horizontal spread
            const scale = isActive ? 1.1 : 0.85;
            const opacity = isActive ? 1 : isVisible ? 0.6 : 0;
            const zIndex = isActive ? 40 : 30 - Math.abs(diff);
            const blur = isActive ? 'blur-0' : 'blur-[1px]';

            return (
              <div
                key={i}
                className={cn(
                  'absolute w-full max-w-lg transition-all duration-700 cubic-bezier(0.4, 0, 0.2, 1)',
                  !isVisible && 'pointer-events-none select-none',
                  blur
                )}
                style={{
                  transform: `translateX(${xTranslation}%) scale(${scale})`,
                  opacity: opacity,
                  zIndex: zIndex,
                }}
              >
                <div className={cn(
                  'bg-white dark:bg-card rounded-3xl p-8 md:p-10 shadow-2xl border transition-all duration-500',
                  isActive ? 'border-[#437059]/30 shadow-[#437059]/10' : 'border-transparent'
                )}>
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-[#437059]/10">
                    <svg width="40" height="30" viewBox="0 0 40 30" fill="currentColor">
                      <path d="M11.25 0C5.0375 0 0 5.0375 0 11.25C0 17.4625 5.0375 22.5 11.25 22.5C12.425 22.5 13.525 22.3125 14.55 21.975C13.2 26.175 9.225 29.25 4.5 29.25H3.75V30H4.5C11.5125 30 17.25 24.2625 17.25 17.25V3.75C17.25 1.6875 15.5625 0 13.5 0H11.25ZM33.75 0C27.5375 0 22.5 5.0375 22.5 11.25C22.5 17.4625 27.5375 22.5 33.75 22.5C34.925 22.5 36.025 22.3125 37.05 21.975C35.7 26.175 31.725 29.25 27 29.25H26.25V30H27C34.0125 30 39.75 24.2625 39.75 17.25V3.75C39.75 1.6875 38.0625 0 36 0H33.75Z" />
                    </svg>
                  </div>

                  <div className="flex gap-1 mb-6">
                    {[...Array(5)].map((_, starIdx) => (
                      <Star
                        key={starIdx}
                        className={cn(
                          "w-4 h-4 transition-colors duration-300",
                          starIdx < t.rating ? "fill-[#437059] text-[#437059]" : "fill-muted text-muted"
                        )}
                      />
                    ))}
                  </div>

                  <p className="text-lg md:text-xl text-foreground/90 font-medium italic leading-relaxed mb-8 relative z-10">
                    "{t.content}"
                  </p>

                  <div className="flex items-center gap-4 border-t border-border pt-6">
                    <div className="relative">
                      <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#437059] to-[#2d4d3c] flex items-center justify-center text-white font-bold text-xl shadow-lg">
                        {t.name.charAt(0)}
                      </div>
                      <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-accent rounded-full border-2 border-white flex items-center justify-center">
                        <Star className="w-3 h-3 fill-white text-white" />
                      </div>
                    </div>
                    <div>
                      <p className="font-bold text-lg leading-none mb-1">{t.name}</p>
                      <p className="text-sm text-[#437059] font-semibold uppercase tracking-wider">{t.role}</p>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Navigation Controls */}
        <div className="flex flex-col items-center gap-6 mt-8">
          <div className="flex gap-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={cn(
                  "h-2.5 transition-all duration-500 rounded-full",
                  current === i
                    ? "w-10 bg-[#437059] shadow-lg shadow-[#437059]/20"
                    : "w-2.5 bg-[#437059]/20 hover:bg-[#437059]/40"
                )}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>

          <div className="flex gap-4">
            <button
              onClick={() => setCurrent((c) => (c - 1 + testimonials.length) % testimonials.length)}
              className="p-3 rounded-full border border-[#437059]/20 hover:bg-[#437059] hover:text-white transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 rotate-180 transition-transform group-hover:-translate-x-1" />
            </button>
            <button
              onClick={() => setCurrent((c) => (c + 1) % testimonials.length)}
              className="p-3 rounded-full border border-[#437059]/20 hover:bg-[#437059] hover:text-white transition-all duration-300 group"
            >
              <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

// CTA Section
function CTASection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section className="section-padding">
      <div className="container-custom">
        <div
          ref={ref}
          className={cn(
            'relative rounded-2xl overflow-hidden',
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          )}
        >
          <img
            src={heroImage}
            alt="TOKYO Apartments"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-foreground/70" />

          <div className="relative z-10 py-16 md:py-24 px-8 md:px-16 text-center">
            <h2 className="text-3xl md:text-4xl font-semibold text-primary-foreground mb-4">
              Ready to Find Your New Home?
            </h2>
            <p className="text-primary-foreground/80 text-lg max-w-xl mx-auto mb-8">
              Schedule a visit today and experience the TOKYO lifestyle firsthand.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button variant="hero" asChild>
                <Link
                  to="/contact"
                  className="relative inline-block rounded-md px-6 py-1.5 overflow-hidden group
                           bg-[#437059] hover:bg-gradient-to-r hover:from-[#437059] hover:to-[#4b8065]
                           text-white hover:ring-2 hover:ring-offset-2 hover:ring-[#4b8065]
                           transition-all ease-out duration-300"
                >
                  <span
                    className="absolute right-0 w-8 h-32 -mt-12 transition-all duration-1000
                             transform translate-x-12 bg-white opacity-10 rotate-12
                             group-hover:-translate-x-40 ease"
                  />
                  <span className="relative">Schedule a Visit</span>
                </Link>
              </Button>
              <Button variant="hero-outline" asChild>
                <Link to="/apartments">View Apartments</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// Main Home Page
export default function Home() {
  return (
    <>
      <HeroSection />
      <SectionDivider />
      <HighlightsSection />
      <SectionDivider />
      <GalleryPreviewSection />
      <SectionDivider />
      <TestimonialsSection />
      <SectionDivider />
      <CTASection />
    </>
  );
}
