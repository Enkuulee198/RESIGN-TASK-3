import AeroShards from "@/components/animated/AeroShards";

export const Background = () => {
  return (
    <div className="w-full h-full relative overflow-hidden">
      <AeroShards
        backgroundColor="#080014"
        shardColor="#6000ff"
        accentColor="#9b00ff"
        placement="full"
        material="glass"
        markers="plus"
        count={700}
        depthOfField={0.4}
        vignette={0.3}
        mouseInteraction
        pulseOnClick
        holdToGather
        lightMode={false}
        shardSize={0.92}
        spread={1}
        twist={1}
        billow={1}
        speed={0.7}
        scale={0.81}
        glow={0.25}
        grain={0.05}
        intro
        mouseStrength={0.4}
        parallax={0.25}
        paused={false}
      />
    </div>
  );
};