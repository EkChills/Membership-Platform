
import AuthPagesWrapper from '@/components/authpages/AuthPagesWrapper'
import LoginGoogleButton from '@/components/authpages/LoginGoogleButton'
import LoginHeader from '@/components/authpages/LoginHeader'
import SignUpInputs from '@/components/authpages/SignupInputs'
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
      <div className='w-full sm:max-w-md mx-auto text-center'>
      <div className='mt-32'>
        <LoginHeader mainText='Become a creator on Dasha' subText='Not a creator?' linkActionText='Sign up here instead' linkTo='/signupUser'  />
      </div>
      <LoginGoogleButton buttonText='Sign up with Google' origin='page-description' />


        <div className='flex items-center  w-full mt-6'>
          <div className='h-[1px] w-full bg-gray-500/50' />
          <span className='text-gray-500 text-sm antialiased w-full'>or sign up with email</span>
          <div className='h-[1px] w-full bg-gray-500/50' />
        </div>
      <SignUpInputs SignUpFor={'CREATOR'} pushTo='/login' />
      <p className='mt-6'>Already have an account? <Link href="/login" className='text-blue-700 text-center'>Log in</Link></p>
      </div>
    </AuthPagesWrapper>
    </AnimatePresenceWrapper>
  )
}
