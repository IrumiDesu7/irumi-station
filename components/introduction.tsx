'use client'

import Image from 'next/image'
import { useEffect, useRef } from 'react'
import { gsap } from 'gsap'

export default function Introduction() {
  const introductionRef = useRef(null)
  useEffect(() => {
    let ctx = gsap.context(() => {
      let tl = gsap.timeline()
      tl.from('.image', {
        x: -999,
        duration: 0.3,
        ease: 'circ',
      })
      tl.from('.title', {
        x: -999,
        duration: 0.3,
        ease: 'circ',
      })
      tl.from('.text', {
        x: -999,
        duration: 0.3,
        ease: 'circ',
      })
    }, introductionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section id='introduction' ref={introductionRef}>
      <div className='flex flex-col items-center gap-3'>
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
        <p className='text'>a Frontend Developer</p>
      </div>
    </section>
  )
}
