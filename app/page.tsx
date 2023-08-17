import Introduction from '@/components/introduction'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Welcome to Irumi Station',
  description:
    'This is a simple portfolio I made. Just doing it for fun and to showcase my skills',
  alternates: {
    canonical: '/',
  },
}

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <Introduction />
    </main>
  )
}
