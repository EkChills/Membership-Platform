"use client"

import React from 'react'
import { Button } from '../ui/button'
import Image from 'next/image'
import {signIn} from 'next-auth/react'
import { baseUrl } from '@/lib/baseUrl'

export default function LoginGoogleButton({origin, buttonText}:{origin:string; buttonText:string;}) {
  function signInGoogle () {
    signIn('google', {callbackUrl:`http://localhost:3000/auth-callback?origin=${origin}`, redirect:false})
  }
  return (
    <>
    <Button onClick={signInGoogle} aria-label='sign in button' className='flex justify-center items-center w-full mt-6 space-x-4' size="lg" variant="outline">
    <Image width={24} height={24} alt='' src={'/assets/google-logo.svg'} />
    <p className='font-semibold'>{buttonText}</p>
  </Button>
    </>

  )
}
