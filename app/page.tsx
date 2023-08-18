import Introduction from '@/components/introduction'
import TechStacks from '@/components/tech-stacks'
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
    <main className='flex flex-col gap-10 min-h-screen p-4 overflow-x-hidden'>
      <Introduction />
      <TechStacks />
    </main>
  )
}
