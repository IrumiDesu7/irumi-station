'use client'

import { useTheme } from 'next-themes'
import { Button } from './ui/button'
import { Sun } from 'lucide-react'

const DarkToggle = () => {
  const { theme, setTheme } = useTheme()

  return (
    <Button
      onClick={() => (theme == 'dark' ? setTheme('light') : setTheme('dark'))}
      variant={'ghost'}
    >
      <Sun />
    </Button>
  )
}

export default DarkToggle
