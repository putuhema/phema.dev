import Footer from "@/components/footer";
import Nav from "@/components/nav";
import Particles from "@/components/particles";
import { FollowerPointerCard } from "@/components/ui/following-pointer";
import { Icon } from "@/components/ui/icon";
import { TypewriterEffect } from "@/components/ui/typewritter";

export default function Home() {
  return (
    <div className="h-[100dvh] w-full border bg-background dark:bg-dot-white/[0.1] bg-dot-black/[0.1] relative flex flex-col items-center justify-center">
      <Particles
        className="absolute inset-0 z-0 animate-fade-in"
        quantity={100}
      />
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-background [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      <div className="absolute top-0 left-1/2 transform -translate-x-1/2">
        <Nav />
      </div>
      <div className="lg:w-[550px]">
        <FollowerPointerCard>
          <div className="border border-black/[0.2] dark:border-white/[0.2] flex flex-col items-start  mx-auto p-4 relative">
            <Icon className="absolute h-6 w-6 -top-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -left-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -top-3 -right-3 dark:text-white text-black" />
            <Icon className="absolute h-6 w-6 -bottom-3 -right-3 dark:text-white text-black" />
            <TypewriterEffect words={[{ text: "@putuhema" }]} />
          </div>
        </FollowerPointerCard>
      </div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 p-4">
        <Footer />
      </div>
    </div>
  );
}
