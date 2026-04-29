import { SectionHeading } from '@/components/shared/SectionHeading';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Heart, Users, Leaf, Award } from 'lucide-react';
import heroImage from '@/assets/hero-building.jpg';
import livingImage from '@/assets/apartment-living.jpg';
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


const values = [
  {
    icon: Heart,
    title: 'Quality Living',
    description: 'We believe that a home should be a sanctuary. Every detail is designed with your comfort in mind.',
  },
  {
    icon: Users,
    title: 'Community First',
    description: 'Foster meaningful connections with neighbors through thoughtfully designed common spaces.',
  },
  {
    icon: Leaf,
    title: 'Sustainable Design',
    description: 'Eco-friendly practices and green spaces that promote a healthier lifestyle.',
  },
  {
    icon: Award,
    title: 'Excellence',
    description: 'Committed to maintaining the highest standards in construction and service.',
  },
];

export default function About() {
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: storyRef, isVisible: storyVisible } = useScrollAnimation();

  return (
    <div className="pt-20 bg-[#F5F0E6]">
      {/* Hero Section */}
      <section className="section-padding bg-[#F5F0E6]">
        <div className="container-custom ">
          <div
            ref={heroRef}
            className={cn(
              'max-w-3xl mx-auto text-center',
              heroVisible ? 'animate-fade-in-up' : 'opacity-0'
            )}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              About Us
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Building Homes, Creating Communities
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              For over a decade, TOKYO Apartments has been setting the standard for 
              thoughtful, community-focused residential living in Bangalore.
            </p>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div
              ref={storyRef}
              className={cn(
                'order-2 lg:order-1',
                storyVisible ? 'animate-fade-in-up' : 'opacity-0'
              )}
            >
              <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
                Our Story
              </span>
              <h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
                A Vision of Better Living
              </h2>
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  TOKYO Apartments began with a simple idea: homes should enhance the lives 
                  of those who live in them. Founded in 2010, we set out to create residential 
                  spaces that prioritize comfort, community, and thoughtful design.
                </p>
                <p>
                  Our approach is rooted in understanding what modern families truly need. 
                  We combine contemporary architecture with practical layouts, ensuring that 
                  every square foot serves a purpose.
                </p>
                <p>
                  Today, TOKYO is home to over 500 families who share our vision of 
                  harmonious living. We continue to evolve, always keeping the needs of 
                  our residents at the heart of everything we do.
                </p>
              </div>
            </div>

            <div
              className={cn(
                'order-1 lg:order-2',
                storyVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
              )}
            >
              <div className="relative">
                <img
                  src={heroImage}
                  alt="TOKYO Apartments building"
                  className="rounded-xl shadow-elevated w-full"
                />
                <div className="absolute -bottom-6 -left-6 w-48 h-48 rounded-xl overflow-hidden shadow-elevated hidden md:block">
                  <img
                    src={livingImage}
                    alt="Living room interior"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Values Section */}
      <section className="section-padding bg- bg-[#F5F0E6]">
        <div className="container-custom">
          <SectionHeading
            label="Our Values"
            title="What Guides Us"
            description="The principles that shape every decision we make."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={value.title}
                  ref={ref}
                  className={cn(
                    'bg-background rounded-xl p-6 shadow-soft',
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { value: '500+', label: 'Happy Families' },
              { value: '15', label: 'Years of Excellence' },
              { value: '4', label: 'Apartment Types' },
              { value: '50+', label: 'Amenities' },
            ].map((stat, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={stat.label}
                  ref={ref}
                  className={cn(
                    'text-center',
                    isVisible ? 'animate-fade-in-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <p className="text-4xl md:text-5xl font-semibold text-primary mb-2">
                    {stat.value}
                  </p>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
