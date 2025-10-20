interface SectionTitleProps {
  title: string;
  description?: string;
  children?: React.ReactNode;
}

export function SectionTitle({ title, description, children }: SectionTitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold text-foreground text-center">{title}</h1>
      {description && <p className="text-gray-600 mt-2">{description}</p>}
      {children}
    </div>
  )
}