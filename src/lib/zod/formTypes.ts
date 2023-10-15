import {z} from 'zod'



export const SignUpSchema = z.object({
  name:z.string().min(1, {message:'name must be more than 1 character'}),
  email:z.string().email().min(2, {message:"email must be more than 2 characters"}),
  password:z.string().min(8, {message:"password must be more than 8 characters"})
})

export const LoginSchema = z.object({
  email:z.string().email().min(2, {message:"email must be more than 2 characters"}),
  password:z.string().min(8, {message:"password must be more than 8 characters"})
})


export type SignUpType = z.infer<typeof SignUpSchema>
export type LoginType = z.infer<typeof LoginSchema>