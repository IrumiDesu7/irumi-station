'use client'

import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Tilt } from '@jdion/tilt-react'
import { ArrowDown, Github, Mail } from 'lucide-react'
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
        <motion.div
          className='max-w-2xl space-y-4 text-center'
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <p className='text-lg font-medium'>Frontend Developer</p>
          <p className='text-muted-foreground leading-relaxed'>
            Passionate about creating beautiful, intuitive user experiences with
            modern web technologies. I specialize in React, TypeScript, and
            Next.js, bringing ideas to life through clean code and thoughtful
            design.
          </p>
          <Badge variant='secondary' className='rounded-full'>
            🟢 Available for new projects
          </Badge>
        </motion.div>

        <motion.div
          className='mt-8 flex items-center justify-center gap-6'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href='https://github.com/IrumiDesu7'
            aria-label='GitHub Profile'
            className='text-muted-foreground hover:text-foreground hover:bg-muted rounded-full p-2 transition-colors'
          >
            <Github className='size-5' />
          </a>
          <a
            href='mailto:ikalam89@gmail.com'
            aria-label='Email'
            className='text-muted-foreground hover:text-foreground hover:bg-muted rounded-full p-2 transition-colors'
          >
            <Mail className='size-5' />
          </a>
        </motion.div>

        <motion.div
          className='mt-8'
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Button
            size='lg'
            className='group rounded-full'
            onClick={() =>
              document
                .getElementById('projects')
                ?.scrollIntoView({ behavior: 'smooth' })
            }
          >
            View My Work
            <ArrowDown className='ml-2 h-4 w-4 transition-transform group-hover:translate-y-1' />
          </Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
