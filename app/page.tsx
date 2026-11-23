"use client";

import { TextAnimation } from "@/components/text";
import { Background } from "@/components/background";
import { REGISTER } from "@/components/register/RegisterForm";
import GlassSurface from "@/components/animated/GlassSurface";

const HomePage = () => {
  return (
    <main className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 z-0">
        <Background />
      </div>

      {/* Header */}
      <header className="absolute top-0 left-0 z-20 w-full h-[80px]">
        <div className="pt-[10px] ml-[58.5px] flex gap-[10px] items-center">
          <img src="/logo.png" alt="Logo" className="w-[65px] h-[60px]" />

          <p className="font-sans font-bold text-[24px] leading-none text-white">
            Neon Glass
          </p>
        </div>

        <div className="absolute bottom-0 left-[50px] right-[50px] h-[1px] bg-[#BCA0DA2B]" />
      </header>

      {/* Main Content */}
      <div className="relative z-10 w-full h-screen flex items-center justify-center gap-[80px] px-[50px]">
        {/* Left Text */}
        <div className="w-[558px]">
          <TextAnimation />

          <p className="mt-[20px] font-['Inter'] font-normal text-[15px] leading-[1.6] text-[#FAF5FF]/80">
            Create your Astra profile in three steps. Your progress is saved
            each time you select Continue.
          </p>
        </div>

        {/* Right Form */}
        <div className="w-fit">
          <REGISTER />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
