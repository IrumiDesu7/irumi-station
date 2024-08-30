'use client'

import { useGSAP } from '@gsap/react'
import { Tilt } from '@jdion/tilt-react'
import { gsap } from 'gsap'
import Image from 'next/image'
import { useRef } from 'react'

export default function Introduction() {
  const introductionRef = useRef(null)

  useGSAP(
    () => {
      gsap
        .timeline({
          defaults: { duration: 0.5, ease: 'power2.out' },
        })
        .to('.wrapper', { opacity: 1 })
        .from('.image', { x: '-100%' }, '<')
        .from('.title', { x: '100%' }, '<')
        .from('.text', { opacity: 0, duration: 1 }, '-=0.3')
    },
    { scope: introductionRef },
  )

  return (
    <section id='introduction' ref={introductionRef} className='space-y-8'>
      <div className='wrapper flex flex-col items-center gap-3 opacity-0 sm:gap-5'>
        <Tilt style={{ height: 128, width: 128 }}>
          <Image
            priority
            src='/assets/irumi.webp'
            alt='Irumi avatar'
            width={128}
            height={128}
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
