import Nav from "@/components/nav"

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto w-max">
        <Nav />
      </div>
      {children}
    </div>
  )
}