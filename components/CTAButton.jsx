import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export default function CTAButton({
  href,
  children,
  variant = 'primary',
  size = 'default',
  showArrow = false,
  className = '',
  fullWidth = false,
  ...props
}) {
  const variants = {
    primary:
      'bg-cefin-red text-white shadow-lg shadow-cefin-red/20 hover:bg-cefin-red-dark hover:shadow-xl hover:shadow-cefin-red/25',
    secondary:
      'bg-neutral-900 text-white shadow-lg shadow-neutral-900/20 hover:bg-neutral-800 hover:shadow-xl hover:shadow-neutral-900/25',
    outline:
      'border-2 border-neutral-900 bg-transparent text-neutral-900 hover:bg-neutral-900 hover:text-white',
    outlineLight:
      'border-2 border-white/30 bg-transparent text-white backdrop-blur-sm hover:bg-white hover:text-neutral-900',
    ghost:
      'bg-transparent text-neutral-900 hover:bg-neutral-100',
    ghostLight:
      'bg-transparent text-white hover:bg-white/10',
  };

const sizes = {
  sm: 'h-10 px-4 text-sm',
  default: 'h-11 sm:h-12 px-5 sm:px-6 text-sm sm:text-base',
  lg: 'h-12 sm:h-14 px-6 sm:px-8 text-base sm:text-lg',
  xl: 'h-12 sm:h-14 lg:h-16 px-6 sm:px-8 lg:px-10 text-base sm:text-lg',
};

  const buttonClassName = `
    group inline-flex items-center justify-center rounded-full font-semibold
    whitespace-nowrap transition-all duration-300
    hover:-translate-y-0.5
    disabled:pointer-events-none disabled:opacity-50
    ${variants[variant]}
    ${sizes[size]}
    ${fullWidth ? 'w-full' : ''}
    ${className}
  `;

  const content = (
    <>
      <span>{children}</span>
      {showArrow && (
        <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
      )}
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        className={`${fullWidth ? 'block w-full' : 'inline-flex'}`}
      >
        <Button className={buttonClassName} {...props}>
          {content}
        </Button>
      </Link>
    );
  }

  return (
    <Button className={buttonClassName} {...props}>
      {content}
    </Button>
  );
}