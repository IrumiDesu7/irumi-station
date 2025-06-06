import { DarkModeToggle } from './dark-toggle'

export default function Navbar() {
  return (
    <nav className='flex justify-end p-3' role="navigation" aria-label="Main navigation">
      <a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-3 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded">
        Skip to main content
      </a>
      <DarkModeToggle />
    </nav>
  )
}
