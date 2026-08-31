"use client";

export default function Hero3DShape() {
  const shellStyle = {
    background:
      "linear-gradient(135deg, rgba(255,255,255,0.22) 0%, rgba(21,24,30,0.92) 22%, rgba(8,10,15,0.98) 58%, rgba(255,255,255,0.06) 100%)",
    boxShadow:
      "0 30px 110px rgba(0, 0, 0, 0.82), inset 22px 22px 32px rgba(255,255,255,0.08), inset -20px -22px 36px rgba(0,0,0,0.76)",
  };

  return (
    <div className="relative h-[420px] w-[330px] sm:h-[500px] sm:w-[430px]" style={{ perspective: "1400px" }}>
      <div className="absolute inset-x-[12%] bottom-[6%] h-[20%] rounded-full bg-white/[0.05] blur-[80px]" />

      <div
        className="absolute left-1/2 top-[47%] h-[62%] w-[66%] -translate-x-1/2 -translate-y-1/2 rounded-[28%] border border-white/10"
        style={{
          ...shellStyle,
          transform: "rotateX(58deg) rotateZ(36deg) rotateY(15deg)",
          clipPath: "polygon(30% 0%, 100% 22%, 80% 100%, 0% 82%)",
        }}
      />

      <div
        className="absolute left-1/2 top-[42%] h-[36%] w-[36%] -translate-x-1/2 -translate-y-1/2 rounded-[26%] border border-white/10"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0.18) 0%, rgba(18,20,26,0.78) 30%, rgba(8,10,15,0.98) 100%)",
          boxShadow: "inset 14px 16px 22px rgba(255,255,255,0.08), inset -18px -18px 24px rgba(0,0,0,0.7)",
          transform: "rotateX(60deg) rotateZ(36deg) rotateY(-14deg)",
          clipPath: "polygon(34% 0%, 100% 20%, 78% 100%, 0% 82%)",
        }}
      />

      <div
        className="absolute left-1/2 top-[22%] h-[42%] w-[54%] -translate-x-1/2 rounded-[30%] border border-white/10"
        style={{
          background: "rgba(255,255,255,0.03)",
          boxShadow: "inset 0 0 28px rgba(255,255,255,0.06)",
          transform: "rotateX(62deg) rotateZ(42deg)",
        }}
      />

      <div
        className="absolute left-1/2 top-[58%] h-[12%] w-[78%] -translate-x-1/2 rounded-full border border-white/10"
        style={{
          background: "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.14) 20%, rgba(255,255,255,0.06) 50%, transparent 100%)",
          transform: "rotateX(76deg) rotateZ(18deg)",
        }}
      />

      <div
        className="absolute left-[22%] top-[26%] h-12 w-12 rounded-full border border-white/10 bg-white/[0.02]"
        style={{ boxShadow: "0 0 28px rgba(255,255,255,0.06)" }}
      />
      <div
        className="absolute right-[18%] top-[30%] h-10 w-10 rounded-full border border-white/10 bg-white/[0.02]"
        style={{ boxShadow: "0 0 26px rgba(255,255,255,0.05)" }}
      />
      <div
        className="absolute left-[36%] bottom-[18%] h-7 w-7 rounded-full border border-white/10 bg-white/[0.03]"
        style={{ boxShadow: "0 0 22px rgba(255,255,255,0.05)" }}
      />
    </div>
  );
}
