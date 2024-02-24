import Link from "next/link";

export default function Footer() {
  return (
    <footer>
      <div className="flex gap-2 items-center justify-end mt-6 mb-24">
        <p className="text-muted-foreground text-sm">
          Handcraft by
        </p>
        <Link href="https://github.com/putuhema" className="underline">putuhema</Link>
      </div>
    </footer>
  )
}
