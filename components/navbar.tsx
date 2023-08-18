import { DarkModeToggle } from './dark-toggle'

export default function Navbar() {
  return (
    <nav className='p-3 flex justify-end'>
      <DarkModeToggle />
    </nav>
  )
}
