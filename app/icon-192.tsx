import { ImageResponse } from "next/og"
import { Inter } from "next/font/google"

// Load the Inter font with weight 700 for bold text
const inter = Inter({ subsets: ["latin"], weight: "700" })

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Sunshine Fitsum Daycare Logo"
export const size = {
  width: 192,
  height: 192,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    <div
      style={{
        fontSize: 48,
        background: "linear-gradient(to bottom right, #FFD166, #FF9F1C)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "50%",
        color: "white",
        fontWeight: "bold",
        fontFamily: inter.style.fontFamily,
      }}
    >
      SF
    </div>,
    {
      ...size,
    },
  )
}
