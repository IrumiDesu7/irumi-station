import Introduction from '@/components/introduction'
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
    <main className='min-h-screen p-24 overflow-x-hidden'>
      <Introduction />
    </main>
  )
}
