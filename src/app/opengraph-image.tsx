import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt = "Modulum Studio — software built out of curiosity";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const fonts = await loadOgFonts();
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "0 96px",
          background: "linear-gradient(135deg, #ffffff 0%, #f3ecff 55%, #ffe9e0 100%)",
          color: "#171717",
          fontFamily: "Inter",
        }}
      >
        <div style={{ width: 56, height: 56, borderRadius: 28, background: "#171717", marginBottom: 40 }} />
        <div style={{ fontSize: 112, fontWeight: 700, letterSpacing: -4, lineHeight: 1 }}>Modulum Studio</div>
        <div style={{ fontSize: 36, color: "#737373", marginTop: 28 }}>A personal lab where I build software out of curiosity.</div>
      </div>
    ),
    { ...size, fonts }
  );
}
