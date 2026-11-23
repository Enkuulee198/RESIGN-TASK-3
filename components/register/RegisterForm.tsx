import GlassSurface from "@/components/animated/GlassSurface";

export const REGISTER = () => {
  return (
    <GlassSurface
      width={544}
      height={470}
      borderRadius={20}
      backgroundOpacity={0.15}
      brightness={50}
      opacity={0.93}
      blur={15}
      displace={0.5}
    >
      <div className="w-[544px] h-[470px] p-[30px] border-[1px] border-[white] rounded-[20px]">
        <div>Эхний 3</div>
        <div>STEP 1 OF 3</div>
        <div>Let’s start with you.</div>
        <div>A few details to make this space your own.</div>
        <div>First and last names</div>
        <div>Email</div>
        <div>A little connection starts with the right address.</div>
        <button>Continue →</button>
        <div>Progress is saved when you click Continue.</div>
      </div>
    </GlassSurface>
  );
};