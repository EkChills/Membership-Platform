import React, { PropsWithChildren } from 'react'

export default function PagesWrapper({children}:PropsWithChildren) {
  return (
    <div className='p-4 md:ml-[20rem] bg-slate-50 w-[calc(100vw - 20rem)] h-[calc(100vh - 16rem)] flex flex-col lg:px-[10rem] min-h-screen 2xl:px-[18rem]'>
      {children}
    </div>
  )
}
