import { cn } from '@/lib/utils';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface SectionHeadingProps {
  label?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
  className?: string;
}

export function SectionHeading({
  label,
  title,
  description,
  align = 'center',
  className,
}: SectionHeadingProps) {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <div
      ref={ref}
      className={cn(
        'mb-1 md:mb-4',
        align === 'center' && 'text-center max-w-2xl mx-auto',
        className
      )}
    >
      {label && (
        <span
          className={cn(
            'inline-block text-sm font-medium text-primary uppercase tracking-wider mb-3',
            isVisible ? 'animate-fade-in-up' : 'opacity-0'
          )}
        >
          {label}
        </span>
      )}
      <h2
        className={cn(
          'text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-foreground',
          isVisible ? 'animate-fade-in-up delay-100' : 'opacity-0'
        )}
      >
        {title}
      </h2>
      {description && (
        <p
          className={cn(
            'mt-4 text-muted-foreground text-lg leading-relaxed',
            isVisible ? 'animate-fade-in-up delay-200' : 'opacity-0'
          )}
        >
          {description}
        </p>
      )}
    </div>
  );
}