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
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-tertiry">
        <div className="container-custom">
          <div
            ref={heroRef}
            className={cn(
              'max-w-3xl mx-auto text-center',
              heroVisible ? 'animate-fade-in-up' : 'opacity-0'
            )}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Amenities
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Everything You Need
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
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

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {amenities.filter(a => a.image).map((amenity, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={amenity.name}
                  ref={ref}
                  className={cn(
                    'relative h-80 rounded-xl overflow-hidden group',
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <img
                    src={amenity.image}
                    alt={amenity.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <div className="w-10 h-10 rounded-lg bg-primary/20 backdrop-blur-sm flex items-center justify-center">
                        <amenity.icon className="w-5 h-5 text-primary-foreground" />
                      </div>
                      <span className="text-primary-foreground/70 text-sm font-medium uppercase tracking-wider">
                        {amenity.category}
                      </span>
                    </div>
                    <h3 className="text-2xl font-semibold text-primary-foreground mb-1">
                      {amenity.name}
                    </h3>
                    <p className="text-primary-foreground/80">
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
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <SectionHeading
            label="Complete List"
            title="All Amenities"
            description="A comprehensive list of facilities available to all residents."
          />

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {amenities.map((amenity, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={amenity.name}
                  ref={ref}
                  className={cn(
                    'bg-background rounded-xl p-6 shadow-soft hover:shadow-medium transition-all duration-300',
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${(index % 4) * 50}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <amenity.icon className="w-6 h-6 text-primary" />
                  </div>
                  <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                    {amenity.category}
                  </span>
                  <h3 className="text-lg font-semibold mt-1 mb-2">{amenity.name}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
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
