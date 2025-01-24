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
    <main className='flex h-full flex-1 flex-col justify-evenly gap-10 overflow-x-hidden p-4 sm:p-24'>
      <Introduction />
    </main>
  )
}
