'use client'

import Image from 'next/image'

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
      <div className='mt-4'>
        <ul>
          {TECH_LIST.map((item) => (
            <li key={item.name}>
              <Image
                src={`/assets/${item.filename}`}
                alt={item.name}
                width={64}
                height={64}
                className={`${item.name === 'Next' ? 'dark:invert' : ''}`}
              />
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
