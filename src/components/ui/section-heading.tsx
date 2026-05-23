interface SectionHeadingProps {
  title: string
  subtitle?: string
}

export default function SectionHeading({
  title,
  subtitle,
}: SectionHeadingProps) {
  return (
    <div className="mb-14 max-w-3xl">
      <h2 className="text-4xl md:text-5xl font-bold leading-tight">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-5 text-lg">
          {subtitle}
        </p>
      )}
    </div>
  )
}