import IntroSection from '@/components/home/intro-section'
import TechSection from '@/components/home/tech-section'
import Head from 'next/head'

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
