/**
 * Favicon configuration for Sunshine Fitsum Daycare
 * Comprehensive setup for all devices and browsers
 */

export const faviconConfig = {
  // Standard favicon
  favicon: "/favicon.ico",

  // Modern SVG favicon (scalable)
  svgIcon: "/icon.png",

  // PNG icons for different sizes
  icons: {
    small: "/favicon-16x16.png",
    medium: "/favicon-32x32.png",
    large: "/icon-192.png",
    xlarge: "/icon-512.png",
  },

  // Apple touch icons
  appleIcons: {
    default: "/apple-icon.png",
    sizes: [
      { size: "57x57", url: "/apple-icon-57x57.png" },
      { size: "60x60", url: "/apple-icon-60x60.png" },
      { size: "72x72", url: "/apple-icon-72x72.png" },
      { size: "76x76", url: "/apple-icon-76x76.png" },
      { size: "114x114", url: "/apple-icon-114x114.png" },
      { size: "120x120", url: "/apple-icon-120x120.png" },
      { size: "144x144", url: "/apple-icon-144x144.png" },
      { size: "152x152", url: "/apple-icon-152x152.png" },
      { size: "180x180", url: "/apple-icon-180x180.png" },
    ],
  },

  // Safari pinned tab
  safariIcon: "/safari-pinned-tab.png",

  // Microsoft tiles
  msConfig: "/browserconfig.xml",

  // Theme colors
  colors: {
    theme: "#FFD166",
    msapplication: "#FFD166",
    safariMask: "#FFD166",
  },
}

/**
 * Generate favicon meta tags for HTML head
 */
export function generateFaviconTags() {
  return [
    // Standard favicon
    `<link rel="icon" href="${faviconConfig.favicon}" sizes="32x32" />`,

    // SVG favicon (modern browsers)
    `<link rel="icon" href="${faviconConfig.svgIcon}" type="image/svg+xml" />`,

    // PNG icons
    `<link rel="icon" href="${faviconConfig.icons.large}" type="image/png" sizes="192x192" />`,
    `<link rel="icon" href="${faviconConfig.icons.xlarge}" type="image/png" sizes="512x512" />`,

    // Apple touch icon
    `<link rel="apple-touch-icon" href="${faviconConfig.appleIcons.default}" sizes="180x180" />`,

    // Safari pinned tab
    `<link rel="mask-icon" href="${faviconConfig.safariIcon}" color="${faviconConfig.colors.safariMask}" />`,

    // Theme color
    `<meta name="theme-color" content="${faviconConfig.colors.theme}" />`,

    // Microsoft application config
    `<meta name="msapplication-config" content="${faviconConfig.msConfig}" />`,
  ].join("\n")
}
