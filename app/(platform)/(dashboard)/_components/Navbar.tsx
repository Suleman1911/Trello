import { Logo } from '@/components/logo'
import { Button } from '@/components/ui/button'
import { OrganizationSwitcher, UserButton } from '@clerk/nextjs'
import { Organization } from '@clerk/nextjs/server'
import { Plus } from 'lucide-react'

const Navbar = () => {
    return (
        <nav className='fixed top-0 z-50 w-full h-14 bg-white shadow-sm flex items-center'>
            <div className='flex items-center gap-x-4'>
                <div className='hidden md:flex'>
                    <Logo />
                </div>
                <Button size='sm' className='rounded-sm hidden md:block h-auto py-1.5 px-2'>
                    create
                </Button>
                <Button size="sm" className='rounded-sm block md:hidden'>
                    <Plus className='h-4 w-4' />
                </Button>
            </div>
            <div className='ml-auto flex items-center gap-x-2'>
                <OrganizationSwitcher
                    afterCreateOrganizationUrl='/organization/:id'
                    afterLeaveOrganizationUrl='/select-org'
                    afterSelectOrganizationUrl="/organization/:id"
                    appearance={{
                        element: {
                            rootBox: {
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center"
                            }
                        }
                    }}
                />
                <UserButton />
            </div>
        </nav>
    )
}

export default Navbar