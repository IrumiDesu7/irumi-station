'use client'

import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { gsap } from 'gsap'

export default function Introduction() {
  const introductionRef = useRef(null)

  useEffect(() => {
    const handleMouseMove = (event: MouseEvent) => {
      const image = document.querySelector('.image')
      const xPos = (event.clientX / window.innerWidth) * 2 - 1
      const yPos = -((event.clientY / window.innerHeight) * 2 - 1)

      gsap.to(image, 1, {
        rotationY: xPos * 27,
        rotationX: yPos * 27,
      })
    }

    window.addEventListener('mousemove', handleMouseMove)

    return () => {
      window.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
        },
      })

      tl.from('.image', { x: -999 })
      tl.from('.title', { x: 999 })
      tl.from('.text', { opacity: 0, duration: 1 })
    }, introductionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='introduction' ref={introductionRef} className='space-y-8'>
      <div className='flex flex-col items-center gap-3 sm:gap-5'>
        <Image
          src='/assets/irumi.webp'
          alt='Irumi avatar'
          width='128'
          height='128'
          className='rounded-full image'
        />
        <h1 className='text-center title font-bold text-4xl'>
          Hello,
          <br />I am Ilmi
        </h1>
        <p className='text font-medium'>a Frontend Developer</p>
      </div>
    </section>
  )
}
