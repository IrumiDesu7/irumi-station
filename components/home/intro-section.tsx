import { useAnimate } from 'framer-motion'
import { useEffect } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const IntroSection = () => {
  const [scope, animate] = useAnimate()
  useEffect(() => {
    // This "li" selector will only select children
    // of the element that receives `scope`.
    animate('p', { opacity: 0 }, { duration: 10 })
  })
  return (
    <section id='intro' className='flex items-center justify-center p-10'>
      <div ref={scope} className='flex flex-col items-center gap-5'>
        <Avatar>
          <AvatarImage
            src='/avatar.webp'
            alt='irumi'
            className='rounded-full'
          />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <p>Hi! I am Irumi.</p>
      </div>
    </section>
  )
}

export default IntroSection
