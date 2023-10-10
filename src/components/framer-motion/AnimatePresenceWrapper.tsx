"use client"

import React from 'react'
import {AnimatePresence} from 'framer-motion'

export default function AnimatePresenceWrapper({children}:React.PropsWithChildren) {
  return (
   <AnimatePresence mode='wait' presenceAffectsLayout >
    {children}
   </AnimatePresence> 
  )
}
