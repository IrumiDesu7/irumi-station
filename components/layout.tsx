import { ReactNode } from 'react'
import Navbar from '@/components/navbar'

type LayoutProps = {
  children: ReactNode
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className='flex flex-col min-h-screen text-pallette-background dark:text-pallette-light dark:bg-pallette-background bg-pallette-light '>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </div>
  )
}
