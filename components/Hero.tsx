import Link from 'next/link'
import CloudLlama from './CloudLlama'

export default function Hero() {
  return (
    <section className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4 py-16">
      <div className="text-center max-w-4xl mx-auto">
        {/* Cloud Llama Illustration */}
        <div className="mb-8">
          <CloudLlama className="mx-auto" />
        </div>
        
        {/* Cloud models announcement */}
        <div className="mb-8">
          <Link 
            href="/cloud" 
            className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground transition-colors border-b border-muted-foreground/30 hover:border-foreground/50"
          >
            Cloud models are now available in Ollama
          </Link>
        </div>
        
        {/* Main heading */}
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-foreground mb-8 leading-tight">
          Chat & build with
          <br />
          open models
        </h1>
        
        {/* Download button */}
        <div className="mb-6">
          <Link href="/download" className="btn-primary text-lg px-8 py-4">
            Download
          </Link>
        </div>
        
        {/* Platform availability */}
        <p className="text-sm text-muted-foreground">
          Available for macOS,
          <br className="sm:hidden" />
          Windows, and Linux
        </p>
      </div>
    </section>
  )
}