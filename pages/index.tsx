import { Avatar, AvatarFallback, AvatarImage } from '@radix-ui/react-avatar'
import Head from 'next/head'
import Image from 'next/image'
import tailwindLogo from '@/public/tailwind.svg'
import nextLogo from '@/public/next.svg'

const IntroSection = () => {
  return (
    <section id='intro' className='flex items-center justify-center p-10'>
      <div className='flex flex-col items-center gap-5'>
        <Avatar>
          <AvatarImage
            src='/avatar.webp'
            alt='irumi'
            className='rounded-full'
            width={256}
            height={256}
          />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <p>Hi! I am Irumi.</p>
      </div>
    </section>
  )
}

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

export default function Home() {
  return (
    <>
      <Head>
        <title>irumi station</title>
      </Head>
      <IntroSection />
      <TechSection />
    </>
  )
}
