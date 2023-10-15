import { DarkModeToggle } from './dark-toggle'

export default function Navbar() {
  return (
    <nav className='flex justify-end p-3'>
      <DarkModeToggle />
    </nav>
  )
}
