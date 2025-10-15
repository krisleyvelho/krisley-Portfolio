export function SectionTitle({ title, description, children }: { title: string, description?: string, children?: React.ReactNode }) {
  return (
    <div>
    <h1 className="text-2xl font-bold text-foreground">{title}</h1>
    {description && <p className="text-gray-600 mt-2">{description}</p>}
    {children}
  </div>
  )
}