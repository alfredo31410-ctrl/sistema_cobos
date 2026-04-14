export default function SectionTitle({
  title,
  subtitle,
  eyebrow,
  centered = true,
  light = false,
  size = 'default',
  className = '',
}) {
  const sizeClasses = {
    default: 'headline-md',
    large: 'headline-lg',
    small: 'text-xl sm:text-2xl md:text-3xl font-bold tracking-tight',
  };

  return (
    <div
      className={`mb-8 sm:mb-10 md:mb-12 lg:mb-14 ${
        centered
          ? 'mx-auto max-w-3xl text-center'
          : 'max-w-2xl'
      } ${className}`}
    >
      {eyebrow && (
        <span
          className={`mb-3 inline-block text-xs font-semibold uppercase tracking-[0.18em] sm:mb-4 sm:text-sm ${
            light ? 'text-cefin-red/90' : 'text-cefin-red'
          }`}
        >
          {eyebrow}
        </span>
      )}

      <h2
        className={`${sizeClasses[size]} ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>

      {subtitle && (
        <p
          className={`mt-4 text-base leading-relaxed sm:mt-5 sm:text-lg lg:text-[1.1rem] ${
            centered ? 'mx-auto max-w-2xl' : ''
          } ${light ? 'text-neutral-300' : 'text-neutral-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}