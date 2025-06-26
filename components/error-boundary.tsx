"use client"

import React from "react"
import { Button } from "@/components/ui/button"

interface ErrorBoundaryState {
  hasError: boolean
  error?: Error
}

interface ErrorBoundaryProps {
  children: React.ReactNode
  fallback?: React.ComponentType<{ error?: Error; resetError: () => void }>
}

export class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("ErrorBoundary caught an error:", error, errorInfo)
  }

  resetError = () => {
    this.setState({ hasError: false, error: undefined })
  }

  render() {
    if (this.state.hasError) {
      if (this.props.fallback) {
        const FallbackComponent = this.props.fallback
        return <FallbackComponent error={this.state.error} resetError={this.resetError} />
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-warm-cream">
          <div className="text-center p-8 max-w-md mx-auto">
            <div className="mb-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-2">Oops! Something went wrong</h2>
              <p className="text-gray-600">
                We're sorry, but something unexpected happened. Please try refreshing the page.
              </p>
            </div>
            <div className="space-y-3">
              <Button onClick={this.resetError} className="w-full">
                Try Again
              </Button>
              <Button
                variant="outline"
                onClick={() => window.location.reload()}
                className="w-full"
              >
                Refresh Page
              </Button>
            </div>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}

export function ErrorFallback({ error, resetError }: { error?: Error; resetError: () => void }) {
  return (
    <div className="min-h-screen flex items-center justify-center bg-warm-cream">
      <div className="text-center p-8 max-w-md mx-auto">
        <div className="mb-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Something went wrong</h2>
          <p className="text-gray-600 mb-4">
            We're sorry, but something unexpected happened. Please try again.
          </p>
          {process.env.NODE_ENV === "development" && error && (
            <details className="text-left text-sm text-gray-500 bg-gray-100 p-4 rounded">
              <summary className="cursor-pointer font-medium">Error Details</summary>
              <pre className="mt-2 whitespace-pre-wrap">{error.message}</pre>
            </details>
          )}
        </div>
        <div className="space-y-3">
          <Button onClick={resetError} className="w-full">
            Try Again
          </Button>
          <Button
            variant="outline"
            onClick={() => window.location.href = "/"}
            className="w-full"
          >
            Go Home
          </Button>
        </div>
      </div>
    </div>
  )
} 