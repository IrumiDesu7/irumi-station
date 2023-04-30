import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'

const IntroSection = () => {
  return (
    <section id='intro' className='flex items-center justify-center p-10'>
      <div className='flex flex-col items-center gap-5'>
        <Avatar>
          <AvatarImage src='/avatar.webp' alt='irumi' />
          <AvatarFallback>ME</AvatarFallback>
        </Avatar>
        <p>Hi! I am Irumi.</p>
      </div>
    </section>
  )
}

export default IntroSection
