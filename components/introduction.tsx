'use client'

import { Tilt } from '@jdion/tilt-react'
import { motion } from 'motion/react'
import Image from 'next/image'

export default function Introduction() {
  return (
    <section id='introduction' className='space-y-8'>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className='flex flex-col items-center gap-3 sm:gap-5'
      >
        <Tilt style={{ height: 128, width: 128 }}>
          <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }}>
            <Image
              priority
              src='/assets/irumi.webp'
              alt='Irumi avatar'
              width={128}
              height={128}
              className='rounded-3xl'
            />
          </motion.div>
        </Tilt>
        <motion.h1
          initial={{ x: '100%' }}
          animate={{ x: 0 }}
          className='title text-center text-4xl font-bold'
        >
          Hello,
          <br />I am Ilmi
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className='font-medium'
        >
          a Frontend Developer
        </motion.p>
      </motion.div>
    </section>
  )
}
