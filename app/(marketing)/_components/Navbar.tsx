import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export const Navbar = () => {
  return (
    <div className='fixed top-0 flex items-center bg-white border-b shadow-sm w-full h-14 px-4'>
      <div className='md:max-w-2xl mx-auto flex justify-between  items-center w-full'>
        <Logo />
        <div className='flex items-center justify-between w-full md:block md:w-auto space-x-4'>
          <Button size='sm' variant='outline' asChild>
            <Link href="/sign-in">
              Login
            </Link>
          </Button>
          <Button size='sm' asChild>
            <Link href="/sign-up">
              Get Taskify for free
            </Link>
          </Button>

        </div>
      </div>
    </div>
  )
}
