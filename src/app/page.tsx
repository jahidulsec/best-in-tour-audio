import AudioSection from "@/components/home/AudioSection";
import Image from "next/image";
import React from "react";

function HomePage() {
  return (
    <main className=" min-h-screen">
      {/* <audio src='/audios/english.mp4' controls /> */}
      <section className=" py-10 flex flex-col justify-center items-center gap-5 bg-gradient-to-b from-rose-400 to-rose-100  rounded-b-[4rem]">
        <div className="w-[15rem] aspect-square p-3 border border-primary bg-rose-200 rounded-full">
          <div className="relative w-full aspect-square mix-blend-multiply">
            <Image
              src={"/logo/Best in rome tour.png"}
              alt="Best in Rome Tour Logo"
              fill
              objectFit="cover"
            />
          </div>
        </div>

        <article className="text-center">
          <h1 className="text-pink-800 text-xl font-semibold leading-5 mb-3">
            Best in Rome <br /> Tour
          </h1>
          <h2 className="text-pink-800 text-sm font-medium">Audio Book</h2>
        </article>
      </section>

      {/* audo list */}
      <AudioSection />
    </main>
  );
}

export default HomePage;
