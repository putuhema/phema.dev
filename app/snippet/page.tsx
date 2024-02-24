import Container from "@/components/container";
import Nav from "@/components/nav";
import PageHeader from "@/components/page-header";

export default function Snippet() {
  return (
    <main>
      <Nav />
      <Container>
        <PageHeader
          title="Snippets"
          description="code snippet that i often used."
        />
        <h1 className="mt-10 text-center italic">work in progress</h1>
      </Container>
    </main>
  )
}
