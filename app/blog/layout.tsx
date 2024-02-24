import Container from "@/components/container"
import Footer from "@/components/footer"
import Nav from "@/components/nav"

export default function WritingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="bg-background">
      <Nav />
      <Container>
        <div className="min-h-screen flex flex-col justify-between">
          {children}
          <Footer />
        </div>
      </Container>
    </div>
  )
}