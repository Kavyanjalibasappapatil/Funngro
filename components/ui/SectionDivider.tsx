export default function SectionDivider({ accent = false }: { accent?: boolean }) {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8" aria-hidden="true">
      <div
        className="h-px w-full"
        style={{
          background: accent
            ? 'linear-gradient(to right, transparent, rgba(85,255,115,0.2), transparent)'
            : 'linear-gradient(to right, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />
    </div>
  )
}
