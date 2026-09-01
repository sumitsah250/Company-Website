"use client";

export default function Hero3DShape() {
  const shellStyle = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.66) 0%, rgba(239,237,233,0.96) 18%, rgba(155,152,146,0.28) 52%, rgba(80,78,75,0.18) 100%)",
    boxShadow:
      "0 30px 80px rgba(23,23,23,0.12), inset 22px 22px 32px rgba(255,255,255,0.72), inset -20px -22px 36px rgba(120,116,111,0.14)",
  };

  return (
    <div className="relative h-[420px] w-[330px] sm:h-[500px] sm:w-[430px]" style={{ perspective: "1400px" }}>
      <div className="absolute inset-x-[12%] bottom-[6%] h-[20%] rounded-full bg-[#211F1B]/[0.045] blur-[80px]" />

      <div
        className="absolute left-1/2 top-[47%] h-[62%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-[#DEDCD7]"
        style={{
          ...shellStyle,
          transform: "rotateX(58deg) rotateZ(36deg) rotateY(15deg)",
          clipPath: "polygon(30% 0%, 100% 22%, 80% 100%, 0% 82%)",
        }}
      />

      <div
        className="absolute left-1/2 top-[42%] h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-[26%] border border-[#DEDCD7]"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.9) 0%, rgba(232,230,227,0.95) 34%, rgba(146,144,139,0.18) 100%)",
          boxShadow: "inset 14px 16px 22px rgba(255,255,255,0.7), inset -18px -18px 24px rgba(120,116,111,0.12)",
          transform: "rotateX(60deg) rotateZ(36deg) rotateY(-14deg)",
          clipPath: "polygon(34% 0%, 100% 20%, 78% 100%, 0% 82%)",
        }}
      />

      <div
        className="absolute left-1/2 top-[22%] h-[42%] w-[54%] -translate-x-1/2 rounded-[30%] border border-[#DEDCD7]"
        style={{
          background: "rgba(255,255,255,0.5)",
          boxShadow: "inset 0 0 28px rgba(255,255,255,0.46)",
          transform: "rotateX(62deg) rotateZ(42deg)",
        }}
      />

      <div
        className="absolute left-1/2 top-[58%] h-[12%] w-[78%] -translate-x-1/2 rounded-full border border-[#DEDCD7]"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.7) 20%, rgba(23,23,23,0.08) 50%, transparent 100%)",
          transform: "rotateX(76deg) rotateZ(18deg)",
        }}
      />

      <div
        className="absolute left-[22%] top-[26%] h-12 w-12 rounded-full border border-[#DEDCD7] bg-[#FFFFFF]/80"
        style={{ boxShadow: "0 0 28px rgba(23,23,23,0.08)" }}
      />
      <div
        className="absolute right-[18%] top-[30%] h-10 w-10 rounded-full border border-[#DEDCD7] bg-[#FFFFFF]/80"
        style={{ boxShadow: "0 0 26px rgba(23,23,23,0.08)" }}
      />
      <div
        className="absolute left-[36%] bottom-[18%] h-7 w-7 rounded-full border border-[#DEDCD7] bg-[#FFFFFF]/80"
        style={{ boxShadow: "0 0 22px rgba(23,23,23,0.08)" }}
      />
    </div>
  );
}
