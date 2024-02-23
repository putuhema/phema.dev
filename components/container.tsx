export default function Container({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-6xl mx-auto mt-16">{children}</div>
  )
}
