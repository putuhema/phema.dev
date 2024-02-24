
type Props = {
  title: string
  description: string
}


export default function PageHeader({ title, description }: Props) {
  return (
    <header>
      <div className='border flex flex-col p-20 justify-center items-center border-zinc-600 dark:bg-grid-white/[0.1] bg-grid-black/[0.1] relative'>
        <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
        <h1 className="text-6xl font-bold tracking-tight">{title}</h1>
        <p className="text-muted-foreground">{description}</p>
      </div>
    </header>
  )
}
