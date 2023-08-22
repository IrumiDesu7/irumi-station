import ClickMe from './walkthrough/click-me'

export default function Walkthrough() {
  return (
    <section>
      <div className='flex flex-col items-center gap-5'>
        <ClickMe />
        <div className=''>
          <h2 className='text-3xl font-bold text-center'>I am a walkthrough</h2>
        </div>
      </div>
    </section>
  )
}
