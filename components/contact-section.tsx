import { Button } from '@/components/ui/button'
import { Mail, Download, Github, Linkedin } from 'lucide-react'

export default function ContactSection() {
  return (
    <section id='contact' className='py-16 text-center'>
      <h2 className='mb-8 text-3xl font-bold'>Let&apos;s Work Together</h2>
      <p className='text-muted-foreground mx-auto mb-8 max-w-2xl'>
        I&apos;m currently available for freelance work and full-time positions.
        If you have a project in mind, let&apos;s talk!
      </p>
      <div className='flex flex-wrap justify-center gap-4'>
        <Button size='lg' asChild className='rounded-full'>
          <a href='mailto:contact@example.com'>
            <Mail className='mr-2 h-4 w-4' />
            Get in Touch
          </a>
        </Button>
        {/* <Button size='lg' variant='outline' asChild className='rounded-full'>
          <a href='/resume.pdf' download>
            <Download className='mr-2 h-4 w-4' />
            Download Resume
          </a>
        </Button> */}
      </div>
      <div className='mt-8 flex justify-center gap-6'>
        <a
          href='https://github.com/IrumiDesu7'
          aria-label='GitHub'
          className='text-muted-foreground hover:text-foreground transition-colors'
        >
          <Github className='h-6 w-6' />
        </a>
      </div>
    </section>
  )
}
