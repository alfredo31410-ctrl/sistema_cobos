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
  ...props 
}) {
  const baseStyles = 'font-medium transition-all duration-200';
  
  const variants = {
    primary: 'bg-cefin-red hover:bg-cefin-red/90 text-white',
    secondary: 'bg-neutral-900 hover:bg-neutral-800 text-white',
    outline: 'border-2 border-neutral-900 text-neutral-900 hover:bg-neutral-900 hover:text-white',
    outlineLight: 'border-2 border-white text-white hover:bg-white hover:text-neutral-900',
    ghost: 'text-neutral-900 hover:bg-neutral-100',
  };

  const sizes = {
    default: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
    sm: 'px-4 py-2 text-sm',
  };

  const buttonContent = (
    <Button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
      {showArrow && <ArrowRight className="ml-2 h-4 w-4" />}
    </Button>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return buttonContent;
}
