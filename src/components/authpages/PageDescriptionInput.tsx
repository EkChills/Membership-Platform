import React from 'react'
import PageDescriptionForm from '../creators page/PageDescriptionForm'
import { db } from '@/lib/prismaClient'
import { getServerSession } from 'next-auth'
import { authOptions } from '@/app/api/auth/[...nextauth]/route'
import { redirect } from 'next/navigation'

export default async function PageDescription() {
  const session = await getServerSession(authOptions)
  const userPage = await db.page.findFirst({
    where:{
      userId:session?.userId
    }
  })
  if(userPage) {
    redirect(`creatorspage/${session?.userId}`)
  }
  return (
    <>
    <PageDescriptionForm />
    </>
  )
}
