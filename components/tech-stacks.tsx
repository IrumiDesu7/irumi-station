import React from 'react'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'

const TECH_LIST = [
  {
    name: 'React',
    filename: 'react.webp',
  },
  {
    name: 'Vue',
    filename: 'vue.webp',
  },
  {
    name: 'Next',
    filename: 'next.svg',
  },
  {
    name: 'Nuxt',
    filename: 'nuxt.svg',
  },
  {
    name: 'TypeScript',
    filename: 'ts.webp',
  },
  {
    name: 'TailwindCSS',
    filename: 'tailwind.svg',
  },
]

export default function TechStacks() {
  return (
    <section id='tech-stacks'>
      <h2 className='text-center font-medium text-xl'>Current Skills</h2>
      {/* Wrap your tech icons in the Marquee component */}
      <div className='mt-4 sm:hidden'>
        <Marquee autoFill>
          {TECH_LIST.map((item) => (
            <div key={item.filename} className='h-full flex items-center'>
              <Image
                src={`/assets/${item.filename}`}
                alt={item.name}
                width={64}
                height={64}
                className={`mx-3 ${item.name === 'Next' ? 'dark:invert' : ''}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className='mt-4 hidden sm:flex justify-center gap-10'>
        {TECH_LIST.map((item) => (
          <TooltipProvider key={item.filename}>
            <Tooltip>
              <TooltipTrigger>
                <Image
                  src={`/assets/${item.filename}`}
                  alt={item.name}
                  width={64}
                  height={64}
                  className={`mx-1 ${
                    item.name === 'Next' ? 'dark:invert' : ''
                  }`}
                />
              </TooltipTrigger>
              <TooltipContent>
                <p>{item.name}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        ))}
      </div>
    </section>
  )
}
