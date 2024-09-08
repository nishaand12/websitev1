import Image from "next/image";
import { GridBackground } from "@/components/GridBackground";

export default function Home() {
  return (
    <GridBackground>
      <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
        <main className="flex flex-col gap-10 row-start-2 items-center sm:items-start">
          <h1 className="text-5xl font-bold text-center">Reach Peak Efficiency</h1>
          <p className="text-xl text-center sm:text-left font-[family-name:var(--font-geist-mono)]">
            with CETEA Systems
          </p>
          <div className="flex gap-8">
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="https://calendly.com/ceteasystems/intro-call"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                Book a call
              </button>
            </a>
            <a
              className="flex items-center gap-2 hover:underline hover:underline-offset-4"
              href="mailto:hello@ceteasystems.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <button className="flex items-center justify-center bg-foreground text-background gap-2 hover:bg-[#383838] dark:hover:bg-[#ccc] text-sm sm:text-base h-10 sm:h-12 px-4 sm:px-5">
                Get in touch
              </button>
            </a>
          </div>
        </main>
      </div>
    </GridBackground>
  );
}
