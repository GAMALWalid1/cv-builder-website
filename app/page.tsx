import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { FileText, Zap, Download, Eye, CheckCircle, Star } from "lucide-react"

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <header className="border-b bg-background">
        <div className="container mx-auto flex items-center justify-between px-4 py-4">
          <div className="flex items-center gap-2">
            <FileText className="h-6 w-6 text-primary" />
            <span className="text-xl font-semibold">CVBuilder</span>
          </div>
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#templates" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Templates
            </Link>
            <Link
              href="#testimonials"
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Testimonials
            </Link>
            <Button asChild>
              <Link href="/builder">Get Started</Link>
            </Button>
          </nav>
          <Button asChild className="md:hidden">
            <Link href="/builder">Get Started</Link>
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 md:py-32">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="text-4xl font-bold tracking-tight md:text-6xl text-balance mb-6">
            Build Your Professional CV in Minutes
          </h1>
          <p className="text-lg text-muted-foreground text-balance mb-8 leading-relaxed">
            Create ATS-friendly resumes that get noticed. Choose from professional templates, customize your content,
            and download your perfect CV instantly.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button asChild size="lg" className="w-full sm:w-auto">
              <Link href="/builder">Start Building Free</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
              <Link href="#templates">View Templates</Link>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground mt-6">No sign-up required • Free to use • Download instantly</p>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Why Choose CVBuilder?</h2>
            <p className="text-muted-foreground leading-relaxed">
              Everything you need to create a professional, ATS-optimized resume
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fast & Easy</h3>
              <p className="text-muted-foreground leading-relaxed">
                Build your CV in minutes with our intuitive step-by-step interface. No complex tools or learning curve.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <CheckCircle className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ATS-Friendly</h3>
              <p className="text-muted-foreground leading-relaxed">
                All templates are optimized for Applicant Tracking Systems to ensure your CV gets past automated
                filters.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Real-time Preview</h3>
              <p className="text-muted-foreground leading-relaxed">
                See your changes instantly with live preview. What you see is what you get when you download.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Download className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Instant Download</h3>
              <p className="text-muted-foreground leading-relaxed">
                Download your CV as a high-quality PDF with one click. No waiting, no registration required.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <FileText className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Professional Templates</h3>
              <p className="text-muted-foreground leading-relaxed">
                Choose from multiple professionally designed templates that stand out and look great.
              </p>
            </Card>
            <Card className="p-6">
              <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Star className="h-6 w-6 text-primary" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Customizable</h3>
              <p className="text-muted-foreground leading-relaxed">
                Tailor every section to your needs. Add, remove, or reorder sections to match your experience.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Templates Showcase */}
      <section id="templates" className="py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Professional Templates</h2>
            <p className="text-muted-foreground leading-relaxed">
              All templates are ATS-friendly and designed to make a great impression
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="overflow-hidden">
              <div className="h-80 bg-linear-to-br from-blue-50 to-blue-100 flex items-center justify-center">
                <FileText className="h-20 w-20 text-blue-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Classic</h3>
                <p className="text-sm text-muted-foreground">Clean and professional</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-80 bg-linear-to-br from-purple-50 to-purple-100 flex items-center justify-center">
                <FileText className="h-20 w-20 text-purple-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Modern</h3>
                <p className="text-sm text-muted-foreground">Contemporary design</p>
              </div>
            </Card>
            <Card className="overflow-hidden">
              <div className="h-80 bg-linear-to-br from-green-50 to-green-100 flex items-center justify-center">
                <FileText className="h-20 w-20 text-green-600" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">Minimal</h3>
                <p className="text-sm text-muted-foreground">Simple and elegant</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section id="testimonials" className="bg-muted/50 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Loved by Job Seekers</h2>
            <p className="text-muted-foreground leading-relaxed">Join thousands who've built their perfect CV</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                "This is by far the easiest CV builder I've used. Got my resume done in under 10 minutes!"
              </p>
              <div>
                <p className="font-semibold text-sm">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground">Marketing Manager</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                "The templates are professional and ATS-friendly. I started getting interview calls within days!"
              </p>
              <div>
                <p className="font-semibold text-sm">Michael Chen</p>
                <p className="text-xs text-muted-foreground">Software Engineer</p>
              </div>
            </Card>
            <Card className="p-6">
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-sm mb-4 leading-relaxed">
                "Perfect for students! No complicated features, just what I needed to create my first CV."
              </p>
              <div>
                <p className="font-semibold text-sm">Emily Rodriguez</p>
                <p className="text-xs text-muted-foreground">Recent Graduate</p>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <Card className="bg-primary text-primary-foreground p-12 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Build Your Perfect CV?</h2>
            <p className="text-lg mb-8 opacity-90 max-w-2xl mx-auto text-balance">
              Start creating your professional resume today. No registration required.
            </p>
            <Button asChild size="lg" variant="secondary" className="text-base">
              <Link href="/builder">Start Building Now</Link>
            </Button>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <FileText className="h-5 w-5 text-primary" />
              <span className="font-semibold">CVBuilder</span>
            </div>
            <p className="text-sm text-muted-foreground">© 2025 CVBuilder. Build your future, one CV at a time.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
