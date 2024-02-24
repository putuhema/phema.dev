export default function Container({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <div className="max-w-full mx-10 md:max-w-2xl lg:max-w-4xl xl:max-w-6xl md:mx-auto mt-16 ">{children}</div>
  )
}
