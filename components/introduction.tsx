'use client'

import { Tilt } from '@jdion/tilt-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Introduction() {

  return (
    <section id='introduction' className='space-y-8'>
      <motion.div 
        className='flex flex-col items-center gap-3 sm:gap-5'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <motion.div
          initial={{ x: '-100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          <Tilt style={{ height: 128, width: 128 }}>
            <Image
              priority
              src='/assets/irumi.webp'
              alt='Irumi avatar'
              width={128}
              height={128}
              className='rounded-3xl'
            />
          </Tilt>
        </motion.div>
        <motion.h1 
          className='text-center text-4xl font-bold'
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          transition={{ duration: 0.5, ease: 'easeOut' }}
        >
          Hello,
          <br />I am Ilmi
        </motion.h1>
        <motion.p 
          className='font-medium'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          a Frontend Developer
        </motion.p>
      </motion.div>
    </section>
  )
}
