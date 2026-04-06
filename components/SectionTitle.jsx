export default function SectionTitle({ 
  title, 
  subtitle, 
  centered = true,
  light = false,
  className = '' 
}) {
  return (
    <div className={`mb-12 lg:mb-16 ${centered ? 'text-center' : ''} ${className}`}>
      <h2 className={`text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight leading-tight ${light ? 'text-white' : 'text-neutral-900'}`}>
        {title}
      </h2>
      {subtitle && (
        <p className={`mt-4 text-lg lg:text-xl max-w-3xl ${centered ? 'mx-auto' : ''} ${light ? 'text-neutral-300' : 'text-neutral-600'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
