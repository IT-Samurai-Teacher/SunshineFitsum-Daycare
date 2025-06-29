import type { MetadataRoute } from 'next'

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: 'Sunshine Fitsum Daycare - Licensed Childcare in Everett, WA',
    short_name: 'Sunshine Daycare',
    description: 'Licensed daycare center in Everett, WA offering nurturing care for infants, toddlers & preschoolers. Nature-based curriculum, experienced staff.',
    start_url: '/',
    display: 'standalone',
    background_color: '#FFF7E8',
    theme_color: '#FFD166',
    orientation: 'portrait-primary',
    scope: '/',
    lang: 'en-US',
    categories: ['education', 'kids', 'family'],
    screenshots: [
      {
        src: '/opengraph-image',
        sizes: '1200x630',
        type: 'image/png',
        form_factor: 'wide',
        label: 'Sunshine Fitsum Daycare Homepage'
      }
    ],
    icons: [
      {
        src: '/favicon.ico',
        sizes: '32x32',
        type: 'image/x-icon',
        purpose: 'any'
      },
      {
        src: '/icon.png',
        type: 'image/png',
        sizes: '192x192',
        purpose: 'any maskable'
      },
      {
        src: '/icon-512.png',
        type: 'image/png',
        sizes: '512x512',
        purpose: 'any maskable'
      },
      {
        src: '/apple-icon.png',
        type: 'image/png',
        sizes: '180x180',
        purpose: 'any'
      }
    ],
    related_applications: [],
    prefer_related_applications: false,
    dir: 'ltr',
    display_override: ['window-controls-overlay', 'standalone', 'minimal-ui'],
    edge_side_panel: {
      preferred_width: 400
    }
  }
}