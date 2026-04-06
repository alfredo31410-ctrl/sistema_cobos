export default function SectionTitle({ 
  title, 
  subtitle, 
  eyebrow,
  centered = true,
  light = false,
  size = 'default',
  className = '' 
}) {
  const sizeClasses = {
    default: 'headline-md',
    large: 'headline-lg',
    small: 'text-2xl lg:text-3xl font-bold tracking-tight',
  };

  return (
    <div className={`mb-16 lg:mb-20 ${centered ? 'text-center max-w-4xl mx-auto' : ''} ${className}`}>
      {eyebrow && (
        <span className={`inline-block text-sm font-semibold uppercase tracking-wider mb-4 ${
          light ? 'text-cefin-red' : 'text-cefin-red'
        }`}>
          {eyebrow}
        </span>
      )}
      <h2 className={`${sizeClasses[size]} ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-6 text-lg lg:text-xl leading-relaxed ${
          centered ? 'max-w-2xl mx-auto' : ''
        } ${light ? 'text-neutral-300' : 'text-neutral-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
