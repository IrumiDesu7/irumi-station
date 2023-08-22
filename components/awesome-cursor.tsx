'use client'

import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export const AwesomeCursor = () => {
  const cursorRef = useRef<HTMLDivElement>(null)

  const onMouseMove = (event: MouseEvent) => {
    const { clientX, clientY } = event
    gsap.to(cursorRef.current, {
      x: clientX,
      y: clientY,
    })
  }

  const onMouseMoveEnterSpecial = () => {
    gsap.to(cursorRef.current, {
      scale: 1.5,
    })
  }

  const onMouseMoveLeaveSpecial = () => {
    gsap.to(cursorRef.current, {
      scale: 1,
    })
  }

  useEffect(() => {
    const links = document.querySelectorAll('a')
    const buttons = document.querySelectorAll('button')
    let ctx = gsap.context(() => {
      gsap.from(cursorRef.current, {
        opacity: 0,
        duration: 3,
        perspective: 20,
      })
    })
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
      ctx.revert()
    }
  }, [])

  return (
    <div
      ref={cursorRef}
      id='awesome-cursor'
      className='hidden sm:block h-5 w-5 fixed bg-white mix-blend-difference pointer-events-none rounded-full z-[9999]'
    />
  )
}
