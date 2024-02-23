import Container from "@/components/container"
import Nav from "@/components/nav"

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="min-h-screen bg-background">
      <Nav />
      <Container>
        {children}
      </Container>
    </div>
  )
}