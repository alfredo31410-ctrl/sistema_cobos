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
      className={`mb-12 sm:mb-14 md:mb-16 lg:mb-20 ${
        centered
          ? 'text-center mx-auto max-w-3xl sm:max-w-4xl'
          : 'max-w-2xl'
      } ${className}`}
    >
      {/* Eyebrow */}
      {eyebrow && (
        <span
          className={`inline-block text-xs sm:text-sm font-semibold uppercase tracking-[0.18em] mb-3 sm:mb-4 ${
            light ? 'text-cefin-red/90' : 'text-cefin-red'
          }`}
        >
          {eyebrow}
        </span>
      )}

      {/* Title */}
      <h2
        className={`${sizeClasses[size]} ${
          light ? 'text-white' : 'text-neutral-900'
        }`}
      >
        {title}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          className={`mt-4 sm:mt-5 md:mt-6 text-base sm:text-lg md:text-xl leading-relaxed ${
            centered ? 'mx-auto max-w-2xl' : ''
          } ${light ? 'text-neutral-300' : 'text-neutral-500'}`}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}