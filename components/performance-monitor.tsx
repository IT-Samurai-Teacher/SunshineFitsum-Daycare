"use client"

import { useEffect } from "react"

// Extend PerformanceEntry for FID
interface FirstInputEntry extends PerformanceEntry {
  processingStart: number
}

// Extend Window interface for gtag
declare global {
  interface Window {
    gtag: (...args: any[]) => void
  }
}

export function PerformanceMonitor() {
  useEffect(() => {
    // Only run in production
    if (process.env.NODE_ENV !== "production") return

    // Monitor Core Web Vitals
    if (typeof window !== "undefined" && "PerformanceObserver" in window) {
      // Largest Contentful Paint (LCP)
      const lcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const lastEntry = entries[entries.length - 1]
        if (lastEntry) {
          console.log("LCP:", lastEntry.startTime)
          // Send to analytics
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "LCP",
              value: Math.round(lastEntry.startTime),
            })
          }
        }
      })
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] })

      // First Input Delay (FID)
      const fidObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          const fidEntry = entry as FirstInputEntry
          console.log("FID:", fidEntry.processingStart - fidEntry.startTime)
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "FID",
              value: Math.round(fidEntry.processingStart - fidEntry.startTime),
            })
          }
        })
      })
      fidObserver.observe({ entryTypes: ["first-input"] })

      // Cumulative Layout Shift (CLS)
      let clsValue = 0
      const clsObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry: any) => {
          if (!entry.hadRecentInput) {
            clsValue += entry.value
          }
        })
        console.log("CLS:", clsValue)
        if (window.gtag) {
          window.gtag("event", "web_vitals", {
            event_category: "Web Vitals",
            event_label: "CLS",
            value: Math.round(clsValue * 1000) / 1000,
          })
        }
      })
      clsObserver.observe({ entryTypes: ["layout-shift"] })

      // First Contentful Paint (FCP)
      const fcpObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        const firstEntry = entries[0]
        if (firstEntry) {
          console.log("FCP:", firstEntry.startTime)
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "FCP",
              value: Math.round(firstEntry.startTime),
            })
          }
        }
      })
      fcpObserver.observe({ entryTypes: ["first-contentful-paint"] })

      // Time to Interactive (TTI)
      const ttiObserver = new PerformanceObserver((list) => {
        const entries = list.getEntries()
        entries.forEach((entry) => {
          console.log("TTI:", entry.startTime)
          if (window.gtag) {
            window.gtag("event", "web_vitals", {
              event_category: "Web Vitals",
              event_label: "TTI",
              value: Math.round(entry.startTime),
            })
          }
        })
      })
      ttiObserver.observe({ entryTypes: ["interaction"] })

      // Cleanup
      return () => {
        lcpObserver.disconnect()
        fidObserver.disconnect()
        clsObserver.disconnect()
        fcpObserver.disconnect()
        ttiObserver.disconnect()
      }
    }
  }, [])

  return null
} 