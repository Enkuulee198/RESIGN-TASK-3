"use client";

import StrokeText from "@/components/animated/StrokeText";

export const TextAnimation = () => {
  return (
    <div className="w-[558px] ">
      <StrokeText
        text="Every great story begins with a name. Let this be the start of yours."
        strokeColor="#8600ff"
        strokeStyle="solid"
        strokeWidth={1.4}
        dashLength={10}
        drawDuration={1.6}
        fillDelay={0.2}
        stagger={0.05}
        ease="power2.out"
        trigger="mount"
        fillMode="wipe"
        wipeFrom="left"
        fontSize={40}
        fontWeight={700}
        letterSpacing={-2}
        marching={false}
        hoverRedraw
        shadow={false}
        fontFamily="Space Grotesk"
        reverse={false}
      />
    </div>
  );
};
