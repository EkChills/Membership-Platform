
import AuthPagesWrapper from '@/components/authpages/AuthPagesWrapper'
import LoginGoogleButton from '@/components/authpages/LoginGoogleButton'
import LoginHeader from '@/components/authpages/LoginHeader'
import LoginInputs from '@/components/authpages/LoginInputs'
import AnimatePresenceWrapper from '@/components/framer-motion/AnimatePresenceWrapper'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'


export default function CreatorLogin() {
  return (
    <AnimatePresenceWrapper>
    <AuthPagesWrapper>
      <div className='w-full sm:max-w-md mx-auto text-center'>
      <div className='mt-32'>
        <LoginHeader mainText='Login to Dasha' subText='' linkActionText='Sign up here instead'   />
      </div>
       <LoginGoogleButton buttonText='Login with Google' origin='any' />
        <div className='flex items-center  w-full mt-6'>
          <div className='h-[1px] w-full bg-gray-500/50' />
          <span className='text-gray-500 text-sm antialiased w-full'>or sign up with email</span>
          <div className='h-[1px] w-full bg-gray-500/50' />
        </div>
      <LoginInputs LoginFor={'CREATOR'} pushTo='/page-description' />
      <p className='mt-6'>Don&apos;t have an account? <Link href="/signupCreator" className='text-blue-700 text-center'>Sign up</Link></p>
      </div>
    </AuthPagesWrapper>
    </AnimatePresenceWrapper>
  )
}
