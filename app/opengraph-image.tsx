import { ImageResponse } from "next/og"
import { Inter } from "next/font/google"

// Load the Inter font with weight 600
const inter = Inter({ subsets: ["latin"], weight: "600" })

// Route segment config
export const runtime = "edge"

// Image metadata
export const alt = "Sunshine Fitsum Daycare - Where little ones bloom and grow"
export const size = {
  width: 1200,
  height: 630,
}

export const contentType = "image/png"

// Image generation
export default async function Image() {
  return new ImageResponse(
    // ImageResponse JSX element
    <div
      style={{
        fontSize: 128,
        background: "linear-gradient(to bottom, #FFF7E8, #FFF7E8)",
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        padding: 48,
        fontFamily: inter.style.fontFamily,
      }}
    >
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 40,
        }}
      >
        <div
          style={{
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "white",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginRight: 32,
            border: "4px solid white",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          {/* Logo placeholder - in production this would be your actual logo */}
          <div
            style={{
              width: 180,
              height: 180,
              borderRadius: "50%",
              background: "#FFD166",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                fontSize: 100,
                color: "white",
                fontWeight: "bold",
              }}
            >
              SF
            </div>
          </div>
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
          }}
        >
          <div
            style={{
              fontSize: 64,
              fontWeight: "bold",
              color: "#333",
              marginBottom: 8,
            }}
          >
            Sunshine Fitsum
          </div>
          <div
            style={{
              fontSize: 48,
              color: "#666",
            }}
          >
            Daycare
          </div>
        </div>
      </div>
      <div
        style={{
          fontSize: 36,
          color: "#666",
          textAlign: "center",
          maxWidth: 800,
        }}
      >
        Where little ones bloom and grow
      </div>
    </div>,
    // ImageResponse options
    {
      ...size,
    },
  )
}
