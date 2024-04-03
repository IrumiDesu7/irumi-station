'use client'

import { gsap } from 'gsap'
import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { Tilt } from '@jdion/tilt-react'

export default function Introduction() {
  const introductionRef = useRef(null)

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline({
        defaults: {
          duration: 0.5,
        },
      })
      tl.to('.wrapper', { opacity: 1 })
      tl.from('.image', { x: -999 })
      tl.from('.title', { x: 999 })
      tl.from('.text', { opacity: 0, duration: 1 })
    }, introductionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='introduction' ref={introductionRef} className='space-y-8'>
      <div className='wrapper flex flex-col items-center gap-3 opacity-0 sm:gap-5'>
        <Tilt style={{ height: 128, width: 128 }}>
          <Image
            src='/assets/irumi.webp'
            alt='Irumi avatar'
            width='128'
            height='128'
            className='image rounded-full'
          />
        </Tilt>
        <h1 className='title text-center text-4xl font-bold'>
          Hello,
          <br />I am Ilmi
        </h1>
        <p className='text font-medium'>a Frontend Developer</p>
      </div>
    </section>
  )
}
