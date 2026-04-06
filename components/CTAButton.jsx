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
    primary: 'bg-cefin-red hover:bg-cefin-red-dark text-white shadow-lg shadow-cefin-red/20 hover:shadow-xl hover:shadow-cefin-red/30 hover:-translate-y-0.5',
    secondary: 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-lg shadow-neutral-900/20 hover:shadow-xl hover:shadow-neutral-900/30 hover:-translate-y-0.5',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white bg-transparent',
    outlineLight: 'border-2 border-white/30 text-white hover:bg-white hover:text-neutral-900 bg-transparent backdrop-blur-sm',
    ghost: 'text-neutral-900 hover:bg-neutral-100 bg-transparent',
    ghostLight: 'text-white hover:bg-white/10 bg-transparent',
  };

  const sizes = {
    sm: 'px-5 py-2.5 text-sm',
    default: 'px-7 py-3.5 text-base',
    lg: 'px-9 py-4.5 text-lg',
    xl: 'px-10 py-5 text-lg',
  };

  const buttonContent = (
    <Button
      className={`
        font-semibold rounded-full transition-all duration-300
        ${variants[variant]} 
        ${sizes[size]} 
        ${fullWidth ? 'w-full justify-center' : ''}
        ${className}
      `}
      {...props}
    >
      <span>{children}</span>
      {showArrow && <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />}
    </Button>
  );

  if (href) {
    return <Link href={href} className="group">{buttonContent}</Link>;
  }

  return <span className="group">{buttonContent}</span>;
}
