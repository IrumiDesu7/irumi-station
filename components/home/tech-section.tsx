import Image from 'next/image'
import tailwindLogo from '@/public/tailwind.svg'
import nextLogo from '@/public/next.svg'

const TechSection = () => {
  return (
    <section
      id='tech'
      className='flex flex-col  items-center justify-center gap-10 p-10'
    >
      <h1 className='font-medium sm:text-lg '>Tech is used in this project</h1>
      <div className='flex flex-wrap justify-center gap-10'>
        <Image
          className='dark:drop-shadow-[0_0_0.3rem_#ffffff70] dark:invert'
          src={nextLogo}
          alt='Next.js Logo'
          height={50}
        />
        <Image
          className='dark:drop-shadow-[0_0_0.3rem_#ffffff70]'
          src={tailwindLogo}
          alt='Tailwind Logo'
          height={50}
        />
      </div>
    </section>
  )
}

export default TechSection
