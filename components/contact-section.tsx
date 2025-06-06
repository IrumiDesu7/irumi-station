import { Button } from '@/components/ui/button'
import { Mail, Download, Github, Linkedin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 text-center">
      <h2 className="text-3xl font-bold mb-8">Let&apos;s Work Together</h2>
      <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
        I&apos;m currently available for freelance work and full-time positions.
        If you have a project in mind, let&apos;s talk!
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <Button size="lg" asChild className="rounded-full">
          <a href="mailto:contact@example.com">
            <Mail className="mr-2 h-4 w-4" />
            Get in Touch
          </a>
        </Button>
        <Button size="lg" variant="outline" asChild className="rounded-full">
          <a href="/resume.pdf" download>
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
      <div className="flex gap-6 justify-center mt-8">
        <a href="https://github.com/yourusername" aria-label="GitHub" className="text-muted-foreground hover:text-foreground transition-colors">
          <Github className="h-6 w-6" />
        </a>
        <a href="https://linkedin.com/in/yourusername" aria-label="LinkedIn" className="text-muted-foreground hover:text-foreground transition-colors">
          <Linkedin className="h-6 w-6" />
        </a>
      </div>
    </section>
  )
}