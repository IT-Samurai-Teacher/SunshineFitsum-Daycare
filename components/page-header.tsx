interface PageHeaderProps {
  title: string
  description: string
}

export function PageHeader({ title, description }: PageHeaderProps) {
  return (
    <div className="w-full bg-primary/10 py-12 mb-8">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">{title}</h1>
        <p className="text-xl text-muted-foreground max-w-3xl mx-auto">{description}</p>
      </div>
    </div>
  )
}
