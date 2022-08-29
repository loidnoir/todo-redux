import { Icon } from '@iconify/react'

export default function Navbar() {
  return (
    <header className='flex items-center gap-4'>
      <Icon icon='ep:toilet-paper' width='50px' />
      <h1 className='font-montserrat font-semibold text-5xl'>Tasks</h1>
    </header>
  )
}