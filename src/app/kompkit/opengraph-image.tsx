import { ImageResponse } from "next/og";
import { loadOgFonts } from "@/lib/og-fonts";

export const alt = "KompKit — cross-platform utility library for TypeScript, Kotlin and Dart";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function KompkitOpengraphImage() {
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
        <div style={{ display: "flex", alignItems: "center", marginBottom: 40 }}>
          <div style={{ width: 40, height: 40, borderRadius: 20, background: "#171717" }} />
          <div style={{ fontSize: 30, marginLeft: 16, color: "#525252", fontWeight: 600 }}>Modulum Studio</div>
        </div>
        <div style={{ fontSize: 132, fontWeight: 700, letterSpacing: -5, lineHeight: 1 }}>KompKit</div>
        <div style={{ fontSize: 40, color: "#737373", marginTop: 28 }}>Cross-platform utility library</div>
        <div style={{ display: "flex", marginTop: 44 }}>
          {["TypeScript", "Kotlin", "Dart"].map((l) => (
            <div
              key={l}
              style={{
                fontSize: 28,
                padding: "10px 26px",
                marginRight: 16,
                borderRadius: 999,
                background: "#ffffff",
                border: "2px solid #e5e5e5",
                color: "#404040",
              }}
            >
              {l}
            </div>
          ))}
        </div>
      </div>
    ),
    { ...size, fonts }
  );
}
