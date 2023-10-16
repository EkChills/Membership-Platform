"use client";

import React, { useState } from "react";
import { Input } from "../ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { MembershipSchema, MembershipType } from "@/lib/zod/formTypes";
import { Button, buttonVariants } from "../ui/button";
import { Textarea } from "../ui/textarea";
import { GalleryThumbnails, Image, ImagePlus, Loader2 } from "lucide-react";
import UploadButton from "./UploadButton";
import { useUploadThing } from "@/lib/uploadthing";
import { toast } from "../ui/use-toast";
import axios from "axios";

export default function NewMembershipForm() {
  const [uploadedImageUrl, setUploadedImageUrl] = useState<string>('')
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false)
  const {
    formState: { errors },
    register,
    handleSubmit,
  } = useForm<MembershipType>({
    resolver: zodResolver(MembershipSchema),
  });

  const {isUploading, startUpload} = useUploadThing("imageUploader", {
    onUploadError:() => {
      toast({
        title:"something went wrong"
      })
    },
    onClientUploadComplete:(res) => {
      console.log(res);
      
      setUploadedImageUrl(res![0].url)
      toast({
        title:'upload complete'
      })
    }
  })

  const submitHandler:SubmitHandler<MembershipType> = async(data) => {
    try {
      setIsSubmitting(true)
      const res = await axios.post('/api/create-membership', {description:data.membershipDescription, price:data.membershipPrice, name:data.membershipName, uploadedImage:uploadedImageUrl})
      const submitted = await res.data
      console.log(submitted);
      toast({
        title:'membership created'
      })
    } catch (error) {
      toast({
        title:"something went wrong",
         variant:"destructive"
      })
    } finally {
      setIsSubmitting(false)
    }
  }
  return (
    <form onSubmit={handleSubmit(submitHandler)} className="flex flex-col gap-4">
      <div className=" flex flex-col items-start">
        <label htmlFor="page-name" className="font-bold text-sm mb-2">
          Name
        </label>
        <Input
          placeholder="Membership name"
          id="membershipName"
          className={buttonVariants({ variant: "outline" })}
          {...register("membershipName", { required: true })}
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="page-name" className="font-bold text-sm mb-2">
          Monthly price
        </label>
        <Input
          placeholder="eg.5$"
          id="membershipPrice"
          className={buttonVariants({ variant: "outline" })}
          {...register("membershipPrice", { required: true })}
        />
      </div>
      <div className="flex flex-col items-start">
        <label htmlFor="page-name" className="font-bold text-sm mb-2">
          Membership description
        </label>
        <Textarea
          placeholder="eg. offers game tutoring monday-friday"
          id="membershipDescription"
          className={buttonVariants({ variant: "outline" })}
          {...register("membershipDescription", { required: true })}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="coverImgButton" className="font-semibold">
          Cover Image <span className="font-medium">(optional)</span>
        </label>
       <UploadButton isUploading={isUploading} startUpload={startUpload} />
        <span className="text-base text-slate-700/50">Recommended size: 460 by 200 pixels</span>
      </div>
      <div className="flex items-center gap-2">
        <Button className="bg-blue-950" size={'lg'}>{isSubmitting ? <Loader2 className="w-6 h-6 animate-spin" /> : 'Save'}</Button>
        <Button size={'lg'} type="button" className="bg-slate-200 hover:bg-slate-700 hover:text-white text-blue-800">Cancel</Button>
      </div>
    </form>
  );
}
