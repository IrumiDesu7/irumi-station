import { Github } from 'lucide-react'
import DarkToggle from '@/components/dark-toggle'

const Navbar = () => {
  return (
    <nav className='p-3 shadow-md'>
      <div className='flex items-center justify-between'>
        <a
          href='https://github.com/IrumiDesu7/irumi-station'
          target='_blank'
          rel='noopener noreferrer'
        >
          <Github
            className='hover:text-pallette-accent dark:hover:text-pallette-text'
            size={30}
          />
        </a>
        <DarkToggle />
      </div>
    </nav>
  )
}

export default Navbar
