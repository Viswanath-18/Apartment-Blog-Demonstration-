import { SectionHeading } from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import {
  Waves,
  Dumbbell,
  Car,
  TreePine,
  Shield,
  Wifi,
  Baby,
  Users,
  Flame,
  Droplets,
  Zap,
  Cctv,
} from 'lucide-react';
import poolImage from '@/assets/amenity-pool.jpg';
import gymImage from '@/assets/amenity-gym.jpg';
import vineDivider from '@/assets/TOKYO APARTMENTS.png';

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


const amenities = [
  {
    icon: Waves,
    name: 'Swimming Pool',
    description: 'Temperature-controlled pool with separate kids area',
    category: 'Recreation',
    image: poolImage,
  },
  {
    icon: Dumbbell,
    name: 'Fitness Center',
    description: 'Fully equipped gym with cardio and strength training',
    category: 'Fitness',
    image: gymImage,
  },
  {
    icon: Car,
    name: 'Covered Parking',
    description: 'Secure basement parking for residents and visitors',
    category: 'Convenience',
  },
  {
    icon: TreePine,
    name: 'Landscaped Gardens',
    description: 'Beautiful green spaces for relaxation and walks',
    category: 'Recreation',
  },
  {
    icon: Shield,
    name: '24/7 Security',
    description: 'Round-the-clock security with trained personnel',
    category: 'Safety',
  },
  {
    icon: Wifi,
    name: 'High-Speed Internet',
    description: 'Fiber optic connectivity throughout the premises',
    category: 'Convenience',
  },
  {
    icon: Baby,
    name: "Children's Play Area",
    description: 'Safe and fun playground equipment for kids',
    category: 'Recreation',
  },
  {
    icon: Users,
    name: 'Community Hall',
    description: 'Spacious hall for events and gatherings',
    category: 'Community',
  },
  {
    icon: Flame,
    name: 'Piped Gas',
    description: 'Convenient piped gas connection to all units',
    category: 'Convenience',
  },
  {
    icon: Droplets,
    name: 'Water Treatment',
    description: 'Advanced water purification and recycling system',
    category: 'Sustainability',
  },
  {
    icon: Zap,
    name: 'Power Backup',
    description: '100% power backup for all common areas',
    category: 'Convenience',
  },
  {
    icon: Cctv,
    name: 'CCTV Surveillance',
    description: 'Comprehensive camera coverage of all areas',
    category: 'Safety',
  },
];

const categories = ['All', 'Recreation', 'Fitness', 'Safety', 'Convenience', 'Community', 'Sustainability'];

export default function Amenities() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();

  return (
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full -translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="container-custom relative z-10">
          <div
            ref={heroRef}
            className={cn(
              'max-w-4xl mx-auto text-center',
              heroVisible ? 'animate-scale-up' : 'opacity-0'
            )}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Lifestyle & Comfort
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Everything You Need for <br /><span className="text-[#437059]">Modern Living</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              From fitness and recreation to safety and convenience, 
              we've thought of every detail to enhance your daily life.
            </p>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Featured Amenities */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionHeading
            label="Featured"
            title="Premium Facilities"
            description="World-class amenities designed for your comfort and well-being."
          />

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-12">
            {amenities.filter(a => a.image).map((amenity, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={amenity.name}
                  ref={ref}
                  className={cn(
                    'relative h-[450px] rounded-[2.5rem] overflow-hidden group shadow-2xl transition-all duration-700',
                    isVisible ? 'animate-reveal-left' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-10 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-xl bg-[#437059] flex items-center justify-center shadow-lg">
                        <amenity.icon className="w-6 h-6 text-white" />
                      </div>
                      <span className="text-white/70 text-xs font-bold uppercase tracking-[0.2em]">
                        {amenity.category}
                      </span>
                    </div>
                    <h3 className="text-3xl font-bold text-white mb-3">
                      {amenity.name}
                    </h3>
                    <p className="text-white/70 text-lg font-medium max-w-md">
                      {amenity.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* All Amenities Grid */}
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <SectionHeading
            label="Complete List"
            title="All Amenities"
            description="A comprehensive list of facilities available to all residents."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 mt-12">
            {amenities.map((amenity, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={amenity.name}
                  ref={ref}
                  className={cn(
                    'bg-white dark:bg-card rounded-2xl p-8 shadow-soft hover-lift border border-transparent hover:border-[#437059]/20 transition-all duration-500',
                    isVisible ? 'animate-scale-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${(index % 4) * 100}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#437059]/10 flex items-center justify-center mb-6 shadow-inner group-hover:scale-110 transition-transform">
                    <amenity.icon className="w-7 h-7 text-[#437059]" />
                  </div>
                  <span className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                    {amenity.category}
                  </span>
                  <h3 className="text-xl font-bold mt-2 mb-3">{amenity.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {amenity.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
