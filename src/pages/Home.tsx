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
            <div className="flex items-center gap-3 mb-4 animate-fade-in-up">
              <div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center overflow-hidden">
                <img
                  src={logoMark}
                  alt="TOKYO Apartments logo"
                  className="w-7 h-7 object-contain"
                />
              </div>
              <div className="text-left">
                <p className="text-xs font-medium uppercase tracking-[0.18em] text-primary-foreground/70">
                  TOKYO APARTMENTS
                </p>
                <p className="text-[11px] text-primary-foreground/60">
                  Where Comfort Meets Sleek
                </p>
              </div>
            </div>

            <span className="inline-block text-primary-foreground/80 text-sm font-medium uppercase tracking-wider mb-4 animate-fade-in-up">
              Premium Living at Your City
            </span>

            <h1 className="text-[2.8rem] md:text-[3.4rem] lg:text-[3.8rem] font-semibold text-primary-foreground leading-tight mb-6 animate-fade-in-up delay-100">
              Find Your Perfect Home at Tokyo Apartments!
            </h1>

            <p className="text-lg md:text-xl text-primary-foreground/80 leading-relaxed mb-8 animate-fade-in-up delay-200 max-w-2xl">
              Thoughtfully designed apartments for modern families. Experience comfort,
              community, and convenience in a serene neighborhood.
            </p>

            <div className="flex flex-wrap gap-4 animate-fade-in-up delay-300">
              <Link
                to="/apartments"
                className="relative inline-flex items-center justify-center px-6 py-1.5 overflow-hidden
                           font-medium text-white transition duration-300 ease-out border-2
                           border-white rounded-md shadow-md group"
              >
                <span
                  className="absolute inset-0 flex items-center justify-center w-full h-full text-white
                             duration-300 -translate-x-full bg-[#437059] group-hover:translate-x-0 ease"
                >
                  <ArrowUpRight className="w-5 h-5" />
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
                <span className="relative">Schedule Visit</span>
              </Link>
            </div>
          </div>

          {/* Right: larger decorative logo */}
          <div className="hidden lg:flex justify-center">
            <div className="w-44 h-44 rounded-full transform -translate-x-[-20%] bg-background/10 backdrop-blur-sm flex items-center justify-center border border-white/15 shadow-soft">
              <img
                src={new_logo}
                alt="TOKYO Apartments logo"
                className="w-32 h-33 object-contain"
              />
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
                  'bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300',
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
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
            'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1',
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          )}
        >
          <div className="lg:col-span-2 lg:row-span-2">
            <div className="relative h-full min-h-[300px] lg:min-h-[200px] rounded-xl overflow-hidden group">
              <img
                src={poolImage}
                alt="Swimming pool"
                className="w-full h-full object-100px transition-transform duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          </div>
          <div className="relative h-60 rounded-xl overflow-hidden group">
            <img
              src={livingImage}
              alt="Living room"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </div>
          <div className="relative h-60 rounded-xl overflow-hidden group">
            <img
              src={bedroomImage}
              alt="Bedroom"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
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
];

function TestimonialsSection() {
  return (
    <section className="section-padding">
      <div className="container-custom">
        <SectionHeading
          label="Testimonials"
          title="What Our Residents Say"
          description="Hear from families who have made TOKYO their home."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => {
            const { ref, isVisible } = useScrollAnimation();
            return (
              <div
                key={testimonial.name}
                ref={ref}
                className={cn(
                  'bg-background rounded-xl p-6 shadow-soft',
                  isVisible ? 'animate-fade-in-up' : 'opacity-0'
                )}
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex gap-2 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-muted-foreground leading-relaxed mb-16">
                  "{testimonial.content}"
                </p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            );
          })}
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
