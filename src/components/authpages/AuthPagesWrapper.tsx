import React from 'react'
import MotionContainer from '../framer-motion/MotionContainer'
import {Variants} from 'framer-motion'

export const authPageVariants:Variants = {
  hidden:{
    opacity:0
  },
  visible:{
    opacity:1,
    transition:{
      duration:0.5,
    }
  },
  exit:{
    opacity:0,
    transition:{
      duration:0.4,
      delay:0.3
    }
  }
}

export default function AuthPagesWrapper({children}:React.PropsWithChildren) {
 
  
  return (
    <MotionContainer className='flex w-full justify-center px-4' variant={authPageVariants}>
      {children}
    </MotionContainer>
  )
}
