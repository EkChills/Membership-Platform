"use client";

import React from "react";
import { Input } from "../ui/input";
import { Button, buttonVariants } from "../ui/button";
import {useForm} from 'react-hook-form'

export default function LoginInputs() {
  const {formState:{errors}, register, handleSubmit} = useForm()

  const handleSubmitHandler = () => {

  }

  return (
    <form className="flex flex-col gap-4 mt-6" onSubmit={handleSubmit(handleSubmitHandler)}>
      <Input
        placeholder="Name"
        className={buttonVariants({ variant: "outline" })}
        {...register("name", {required:true})}
      />
      <Input
        placeholder="Email"
        className={buttonVariants({ variant: "outline" })}
        {...register("email", {required:true})}
      />
      <div>
        <Input
          placeholder="Password"
          className={buttonVariants({ variant: "outline" })}
          {...register("password", {required:true})}
        />
      </div>
      <Button>Signup</Button>
    </form>
  );
}
