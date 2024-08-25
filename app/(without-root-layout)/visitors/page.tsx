import { Provider } from "jotai";
import { cn } from "@/lib/utils";
import styles from "./notes.module.css";
import WriteNoteCTA from "@/components/cta";
import { ArrowLeft } from "@phosphor-icons/react/dist/ssr/ArrowLeft";
import Link from "next/link";
import GuestbookEntries from "@/components/guestbook-entries";

export const dynamic = "force-dynamic";

const Page = () => {
  return (
    <Provider>
      <div className={cn("h-[100dvh] sm:h-[100vh] p-1 sm:p-6 bg-black")}>
        <div
          id="mat-container"
          className={cn(
            "relative w-full h-full overflow-hidden",
            styles.matContainer
          )}
        >
          <div className="z-10">
            <div id="mat-texture" className={styles.matTexture} />
            <div aria-hidden className={styles.moreNoise} />
            <div id="mat-grid" className={styles.matGrid}>
              <div id="diagonal-lines" className={styles.diagonalLines} />
            </div>
          </div>
          <main className="relative z-20 h-full w-full">
            <GuestbookEntries />
            <Link
              href="/"
              className={cn(
                "mr-auto rounded-full bg-[#a1024d] hover:bg-[#a1024d]/90 transition hover:scale-105 hover:-rotate-6 px-3 py-1.5 flex gap-x-1.5 items-center justify-center text-gray-1 font-semibold w-fit h-fit z-50 absolute top-4 left-4 sm:top-10 sm:left-10",
                styles.homeBtn
              )}
            >
              <ArrowLeft width={16} height={16} />
              take me home
            </Link>
            <WriteNoteCTA />
          </main>
        </div>
      </div>
    </Provider>
  );
};

export default Page;
