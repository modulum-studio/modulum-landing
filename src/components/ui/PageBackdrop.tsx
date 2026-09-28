import { GRADIENTS } from "@/lib/gradients";

export default function PageBackdrop({ visible }: { visible: boolean }) {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden transition-opacity duration-1000"
      style={{ opacity: visible ? 1 : 0 }}
    >
      <div
        className="absolute -top-40 left-1/2 -translate-x-1/2 w-[52rem] h-[52rem] max-w-[150vw] rounded-full blur-3xl opacity-[0.14]"
        style={{ background: GRADIENTS.brand }}
      />
      <div
        className="absolute -bottom-56 -right-40 w-[40rem] h-[40rem] max-w-[120vw] rounded-full blur-3xl opacity-[0.09]"
        style={{ background: GRADIENTS.brand }}
      />
      <div
        className="absolute inset-0 opacity-[0.3]"
        style={{
          backgroundImage: "radial-gradient(#d4d4d4 1px, transparent 1px)",
          backgroundSize: "28px 28px",
          maskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 75%)",
          WebkitMaskImage: "radial-gradient(ellipse at 50% 35%, black 25%, transparent 75%)",
        }}
      />
    </div>
  );
}
