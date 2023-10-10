"use client"


import { cn } from '@/lib/utils';
import {motion, Variants} from 'framer-motion'
import { usePathname } from 'next/navigation';

interface MotionContainerProps extends React.PropsWithChildren {
  variant: Variants,
  className:string;
  motionKey?:string
}

export default function MotionContainer({variant, className,children, motionKey}:MotionContainerProps) {
  const pathName = usePathname()
  console.log(pathName);
  
  return (
    <motion.div variants={variant} initial="hidden" animate="visible" exit="exit" key={pathName} className={cn(className)}>
      {children}
    </motion.div>
  )
}
