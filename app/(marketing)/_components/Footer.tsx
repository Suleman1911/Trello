import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'

export const Footer = () => {
  return (
    <div className='fixed bottom-0 flex items-center bg-white border-t w-full p-4'>
      <div className='md:max-w-2xl mx-auto flex justify-between  items-center w-full'>
        <Logo />
        <div className='flex items-center justify-between w-full md:block md:w-auto space-x-4'>
          <Button size='sm' variant='ghost'>
              Privacy Policy
          </Button>
          <Button size='sm' variant='ghost'>
              Terms of Service
          </Button>

        </div>
      </div>
    </div>
  )
}
