
import AuthPagesWrapper from '@/components/authpages/AuthPagesWrapper'
import LoginHeader from '@/components/authpages/LoginHeader'
import LoginInputs from '@/components/authpages/LoginInputs'
import AnimatePresenceWrapper from '@/components/framer-motion/AnimatePresenceWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function CreatorSignup() {
  return (
    <AnimatePresenceWrapper>
    <AuthPagesWrapper>
      <div className='w-full sm:max-w-screen-sm mx-auto text-center'>
      <div className='mt-32'>
        <LoginHeader mainText='Become a creator on Dasha' subText='Not a creator?' linkActionText='Sign up here instead' linkTo='/getstarteduser'  />
      </div>
        <Button aria-label='sign in button' className='flex justify-center items-center w-full mt-6 space-x-4' size="lg" variant="outline">
          <Image width={24} height={24} alt='' src={'/assets/google-logo.svg'} />
          <p className='font-semibold'>Sign up with google</p>
        </Button>

        <div className='flex items-center  w-full mt-6'>
          <div className='h-[1px] w-full bg-gray-500/50' />
          <span className='text-gray-500 text-sm antialiased w-full'>or sign up with email</span>
          <div className='h-[1px] w-full bg-gray-500/50' />
        </div>
      <LoginInputs />
      <p className='mt-6'>Already have an account? <Link href="/" className='text-blue-700 text-center'>Log in</Link></p>
      </div>
    </AuthPagesWrapper>
    </AnimatePresenceWrapper>
  )
}
