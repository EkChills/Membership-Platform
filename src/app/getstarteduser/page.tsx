
import AuthPagesWrapper from '@/components/authpages/AuthPagesWrapper'
import LoginHeader from '@/components/authpages/LoginHeader'
import AnimatePresenceWrapper from '@/components/framer-motion/AnimatePresenceWrapper'
import { usePathname } from 'next/navigation'
import React from 'react'

export default function CreatorSignup() {
  return (
    <AnimatePresenceWrapper>
    <AuthPagesWrapper>
      <div className='mt-32'>
        <LoginHeader mainText='Become a creator on Dasha' subText='Not a creator?' linkActionText='Sign up here instead' linkTo='/getstarteduser'  />
      </div>
    </AuthPagesWrapper>
    </AnimatePresenceWrapper>
  )
}
