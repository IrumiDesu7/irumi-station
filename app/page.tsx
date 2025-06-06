import Introduction from '@/components/introduction'
import ProjectShowcase from '@/components/project-showcase'
import TechStacks from '@/components/tech-stacks'
import ContactSection from '@/components/contact-section'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to my station',
  description:
    'This is a simple portfolio I made. Just doing it for fun and to showcase my skills',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main id="main-content" className='flex h-full flex-1 flex-col justify-evenly gap-16 overflow-x-hidden p-4 sm:p-24'>
      <Introduction />
      <TechStacks />
      <ProjectShowcase />
      <ContactSection />
    </main>
  )
}
