import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { TECH_LIST } from '@/contents'
import Image from 'next/image'
import Marquee from 'react-fast-marquee'

export default function TechStacks() {
  return (
    <section id='tech-stacks'>
      <h2 className='text-center text-xl font-medium'>Current Skills</h2>
      <div className='mt-4 sm:hidden'>
        <Marquee autoFill>
          {TECH_LIST.map((item) => (
            <div key={item.filename} className='flex h-full items-center'>
              <Image
                src={`/assets/${item.filename}`}
                alt={item.name}
                width={50}
                height={50}
                className={`mx-3 ${item.name === 'Next' ? 'dark:invert' : ''}`}
              />
            </div>
          ))}
        </Marquee>
      </div>
      <div className='mt-4 hidden justify-center gap-10 sm:flex'>
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
