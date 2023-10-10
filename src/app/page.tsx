import React from 'react'
import { authOptions } from './api/auth/[...nextauth]/route'
import {getServerSession} from 'next-auth'

export default async function page() {
  const session = await getServerSession(authOptions)
  return (
    <div>
      <pre>
        {JSON.stringify(session)}
      </pre>
    </div>
  )
}
