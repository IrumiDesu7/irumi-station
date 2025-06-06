'use client'

import { useEffect, useRef } from 'react'
import { animate } from 'motion/react'

export const AwesomeCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    if (cursorRef.current) {
      animate(cursorRef.current, {
        x: clientX,
        y: clientY,
      })
    }
  }

  const onMouseMoveEnterSpecial = () => {
    if (cursorRef.current) {
      animate(cursorRef.current, {
        scale: 1.5,
      })
    }
  }

  const onMouseMoveLeaveSpecial = () => {
    if (cursorRef.current) {
      animate(cursorRef.current, {
        scale: 1,
      })
    }
  }

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const buttons = document.querySelectorAll('button')
    window.addEventListener('mousemove', onMouseMove)
    buttons.forEach((button) => {
      button.addEventListener('mouseenter', onMouseMoveEnterSpecial)
      button.addEventListener('mouseleave', onMouseMoveLeaveSpecial)
    })
    links.forEach((link) => {
      link.addEventListener('mouseenter', onMouseMoveEnterSpecial)
      link.addEventListener('mouseleave', onMouseMoveLeaveSpecial)
    })

    return () => {
      window.removeEventListener('mousemove', onMouseMove)
      buttons.forEach((button) => {
        button.removeEventListener('mouseenter', onMouseMoveEnterSpecial)
        button.removeEventListener('mouseleave', onMouseMoveLeaveSpecial)
      })
      links.forEach((link) => {
        link.removeEventListener('mouseenter', onMouseMoveEnterSpecial)
        link.removeEventListener('mouseleave', onMouseMoveLeaveSpecial)
      })
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id='awesome-cursor'
      className='pointer-events-none fixed z-9999 hidden h-5 w-5 rounded-full bg-white mix-blend-difference sm:block'
    />
  )
}
