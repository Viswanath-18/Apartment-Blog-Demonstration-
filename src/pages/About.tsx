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
    <div className="pt-20 bg-background">
      {/* Hero Section */}
      <section className="section-padding bg-secondary/30 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full translate-x-1/2 -translate-y-1/2 blur-3xl" />
        <div className="container-custom relative z-10">
          <div
            ref={heroRef}
            className={cn(
              'max-w-4xl mx-auto text-center',
              heroVisible ? 'animate-scale-up' : 'opacity-0'
            )}
          >
            <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-6">
              Our Journey
            </span>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-8 leading-tight">
              Building <span className="text-[#437059]">Homes</span>, Creating Lasting Communities
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto font-medium">
              For over a decade, TOKYO Apartments has been setting the standard for 
              thoughtful, community-focused residential living in the heart of the city.
            </p>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <div
              ref={storyRef}
              className={cn(
                'order-2 lg:order-1',
                storyVisible ? 'animate-reveal-left' : 'opacity-0'
              )}
            >
              <span className="inline-block px-3 py-1 rounded-lg bg-accent/10 text-accent text-xs font-bold uppercase tracking-wider mb-6">
                Our Heritage
              </span>
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-8">
                A Vision of <br /><span className="text-[#437059]">Better Living</span>
              </h2>
              <div className="space-y-6 text-muted-foreground leading-relaxed text-lg font-medium">
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
                <p className="border-l-4 border-[#437059] pl-6 italic text-[#437059]/80 py-2">
                  "Today, TOKYO is home to over 500 families who share our vision of 
                  harmonious living."
                </p>
              </div>
            </div>

            <div
              className={cn(
                'order-1 lg:order-2',
                storyVisible ? 'animate-reveal-right delay-200' : 'opacity-0'
              )}
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-[#437059]/10 rounded-[2.5rem] rotate-3 transition-transform group-hover:rotate-6 duration-500" />
                <img
                  src={heroImage}
                  alt="TOKYO Apartments building"
                  className="relative rounded-[2.5rem] shadow-2xl w-full z-10 transition-transform group-hover:-translate-y-2 duration-500"
                />
                <div className="absolute -bottom-10 -left-10 w-64 h-64 rounded-[2rem] overflow-hidden shadow-2xl hidden xl:block z-20 border-8 border-background animate-float">
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
      <section className="section-padding bg-secondary/20">
        <div className="container-custom">
          <SectionHeading
            label="Our Core Values"
            title="What Drives Excellence"
            description="The guiding principles behind every square foot we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {values.map((value, index) => {
              const { ref, isVisible } = useScrollAnimation();
              return (
                <div
                  key={value.title}
                  ref={ref}
                  className={cn(
                    'bg-white dark:bg-card rounded-2xl p-8 shadow-soft hover-lift border border-transparent hover:border-[#437059]/20 transition-all duration-500',
                    isVisible ? 'animate-scale-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <div className="w-14 h-14 rounded-xl bg-[#437059]/10 flex items-center justify-center mb-6 shadow-inner">
                    <value.icon className="w-7 h-7 text-[#437059]" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed font-medium">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-primary text-white overflow-hidden relative">
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10" />
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
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
                    'text-center group',
                    isVisible ? 'animate-scale-up' : 'opacity-0'
                  )}
                  style={{ animationDelay: `${index * 150}ms` }}
                >
                  <p className="text-5xl md:text-6xl font-bold mb-3 group-hover:scale-110 transition-transform duration-300">
                    {stat.value}
                  </p>
                  <p className="text-primary-foreground/70 font-bold uppercase tracking-widest text-xs">{stat.label}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}
