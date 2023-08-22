'use client'

import { useRef } from 'react'
import { Button } from '../ui/button'

export default function ClickMe() {
  const topRef = useRef<HTMLDivElement>(null)
  const onClick = () => {
    if (topRef.current) topRef.current.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <Button variant='secondary' className='animate-pulse' onClick={onClick}>
        Click me
      </Button>
      <div ref={topRef}></div>
    </>
  )
}
