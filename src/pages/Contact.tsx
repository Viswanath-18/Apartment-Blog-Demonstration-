import { useState } from 'react';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { useToast } from '@/hooks/use-toast';
import { MapPin, Phone, Mail, Clock, Send, CheckCircle } from 'lucide-react';
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

const contactInfo = [
  {
    icon: MapPin,
    label: 'Address',
    value: 'Coimbatore',
  },
  {
    icon: Phone,
    label: 'Phone',
    value: '+91 9876543210',
  },
  {
    icon: Mail,
    label: 'Email',
    value: 'hellotokyo@gmail.com',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Mon - Sat: 9:00 AM - 7:00 PM',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { toast } = useToast();
  const { ref: heroRef, isVisible: heroVisible } = useScrollAnimation();
  const { ref: formRef, isVisible: formVisible } = useScrollAnimation();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1500));

    setIsSubmitting(false);
    setIsSubmitted(true);
    toast({
      title: 'Message Sent!',
      description: "We'll get back to you within 24 hours.",
    });

    // Reset form after delay
    setTimeout(() => {
      setFormData({ name: '', email: '', phone: '', message: '' });
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="section-padding bg-tertiary">
        <div className="container-custom">
          <div
            ref={heroRef}
            className={cn(
              'max-w-3xl mx-auto text-center',
              heroVisible ? 'animate-fade-in-up' : 'opacity-0'
            )}
          >
            <span className="inline-block text-sm font-medium text-primary uppercase tracking-wider mb-4">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">
              Get in Touch
            </h1>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Have questions or want to schedule a visit? 
              We'd love to hear from you.
            </p>
          </div>
        </div>
      </section>
      <SectionDivider />

      {/* Contact Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div>
              <h2 className="text-2xl font-semibold mb-6">Contact Information</h2>
              <div className="space-y-6 mb-10">
                {contactInfo.map((info, index) => {
                  const { ref, isVisible } = useScrollAnimation();
                  return (
                    <div
                      key={info.label}
                      ref={ref}
                      className={cn(
                        'flex items-start gap-4',
                        isVisible ? 'animate-fade-in-up' : 'opacity-0'
                      )}
                      style={{ animationDelay: `${index * 100}ms` }}
                    >
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <p className="text-sm text-muted-foreground mb-1">{info.label}</p>
                        <p className="font-medium">{info.value}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              </div>

              {/* Map Section */}
<div className="w-full rounded-xl overflow-hidden">
  
  {/* Map */}
  <div className="w-full h-[300px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d18373203.772207405!2d109.51326432988881!3d50.72764295790098!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x605d1b87f02e57e7%3A0x2e01618b22571b89!2sTokyo%2C%20Japan!5e1!3m2!1sen!2sin!4v1777448134672!5m2!1sen!2sin"
      className="w-full h-full border-0"
      loading="lazy"
      allowFullScreen
    />
  </div>

  {/* Text below map */}
  <p className="text-sm text-muted-foreground mt-2 text-center">
    This is just a demonstration
  </p>

</div>

            {/* Contact Form */}
            <div
              ref={formRef}
              className={cn(
                'bg-card rounded-2xl p-8 shadow-soft',
                formVisible ? 'animate-fade-in-up' : 'opacity-0'
              )}
            >
              <h2 className="text-2xl font-semibold mb-2">Send us a Message</h2>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and we'll respond within 24 hours.
              </p>

              {isSubmitted ? (
                <div className="text-center py-12 animate-scale-in">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name</Label>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        placeholder="+91  # # # # # # # # # #"
                        value={formData.phone}
                        onChange={handleChange}
                        required
                        className="h-12"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      placeholder="youremail@gmail.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Your Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      placeholder="I'm interested in learning more about..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="resize-none"
                    />
                  </div>

                  <Button
  type="submit"
  size="lg"
  className="relative inline-flex items-center justify-center w-full px-6 py-2 overflow-hidden
             rounded-md bg-[#437059] text-white text-sm font-medium
             transition-all ease-out duration-300 group hover:bg-gradient-to-r hover:from-[#437059] hover:to-[#4b8065]
             hover:ring-2 hover:ring-offset-2 hover:ring-[#4b8065]"
  disabled={isSubmitting}
>
  {/* shine strip */}
  <span
    className="absolute right-0 w-10 h-32 -mt-12 translate-x-12 bg-white opacity-10 rotate-12
               transition-transform duration-1000 ease group-hover:-translate-x-[32rem]"
  />

  {/* content */}
  <span className="relative flex items-center gap-2">
    {isSubmitting ? (
      <>
        <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
        Sending...
      </>
    ) : (
      <>
        Send Message
        <Send className="w-4 h-4" />
      </>
    )}
  </span>
</Button>

                </form>
              )}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
