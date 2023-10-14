import PageDescriptionInput from '@/components/authpages/PageDescriptionInput'
import React from 'react'

export default function PageDescriptionCreator() {
  
  return (
    <div className='flex w-full justify-center px-4'>
      <div className='w-full sm:max-w-md text-clip mx-auto text-center'>
        <div className='mt-32'>
          <h2 className='font-bold text-3xl antialiased'>
            Tell us about your page
          </h2>
          <p className='text-center mt-4 text-gray-900 antialiased '>
            Every creator owns their own page, and your page name is how patrons will know and search for you. You can change it anytime
          </p>
         <PageDescriptionInput />
        </div>
      </div>
    </div>
  )
}
