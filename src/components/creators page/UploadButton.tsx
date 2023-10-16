"use client"

import React from 'react'
import Dropzone from 'react-dropzone'
import { Button } from '../ui/button'
import { ImagePlus } from 'lucide-react'
import { useUploadThing } from '@/lib/uploadthing'
import { toast } from '../ui/use-toast'
import { UploadFileResponse } from 'uploadthing/client'

interface UploadButtonProps {
  isUploading:boolean;
  startUpload:(files: File[], input?: undefined) => Promise<UploadFileResponse[] | undefined>
}

export default function UploadButton({isUploading, startUpload}:UploadButtonProps) {
  // const {isUploading, startUpload} = useUploadThing("imageUploader", {
  //   onUploadError:() => {
  //     toast({
  //       title:"something went wrong"
  //     })
  //   },
  //   onClientUploadComplete:() => {
  //     toast({
  //       title:'upload complete'
  //     })
  //   }
  // })
  return (
    <Dropzone onDrop={acceptedFiles => {
      console.log(acceptedFiles);
      startUpload(acceptedFiles)
    }}>
  {({getRootProps, getInputProps}) => (
    <div {...getRootProps()}>

     <Button className="flex gap-4 mr-auto" type='button' variant={'outline'}>
      <input {...getInputProps()} />
     <ImagePlus />
       <span>{isUploading ? 'uploading...' : 'Add cover image'}</span>
     </Button>
    </div>
  )}
</Dropzone>
  )
}
