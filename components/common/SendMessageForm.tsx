"use client"
import { useState } from 'react'
import { Button } from '../ui/button'
import { TbLoader3 } from 'react-icons/tb'
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import axios from "axios";

type FormValue = {
  first_name: string,
  email: string,
  mobile_number: number,
  description: string
}

const SendMessageForm = () => {

  const [loading, setLoading] = useState(false)
  const { register, handleSubmit, formState: { errors }, reset } = useForm<FormValue>()

  // contact - us api integration
  const formSubmit = async (value: any) => {
    setLoading(true)
    const formData = new FormData()
    formData.append("first_name", value.first_name)
    formData.append("email", value.email)
    formData.append("mobile_number", value.mobile_number)
    formData.append("description", value.description)
    try {
      const response = await axios.post(`${process.env.NEXT_PUBLIC_API_URL}/contectus`, formData);
      setLoading(false)
      toast.success("Thank you for contacting us")
    } catch (error) {
      setLoading(false)
      toast.error('Error while fetching api');
    }
    reset()
  }

  return (
    <form className='w-full lg:min-w-[85%] lg:max-w-[85%] bg-white rounded-md p-3 sm:p-7 lg:p-10 flex flex-col gap-5 mx-auto mt-10 sm:mt-0 mb-10' onSubmit={handleSubmit(formSubmit)}>
      <div className="grid w-full">
        <div className="flex flex-col w-full">
          <input type="text" id="firstname" placeholder="First Name" className='bg-transparent border-b border-currentlink outline-none py-3 px-2 md:px-5'
            {...register("first_name", {
              required: "Firstname is required",
              pattern: {
                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                message: "Entered value does not match name format",
              },
              minLength: {
                value: 3,
                message: "Please add at least 3 characters",
              },
            })}
          />
          {errors.first_name && (
            <p className="text-red-500 text-left px-1"> {errors.first_name.message} </p>
          )}
        </div>
      </div>
      <div className="grid lg:grid-cols-2 w-full items-center gap-5">
        <div className="flex flex-col w-full">
          <input type="email" id="email" placeholder="Email Address" className='bg-transparent border-b border-currentlink outline-none py-3 px-2 md:px-5'
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-left px-1"> {errors.email.message} </p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input type="number" id="phone" placeholder="Phone Number" className='bg-transparent border-b border-currentlink outline-none py-3 px-2 md:px-5'
            {...register("mobile_number", {
              required: "Phone number is required",
              minLength: {
                value: 4,
                message: "Please add a valid phone number"
              },
              maxLength: {
                value: 12,
                message: "Phone number is not greater than 12 digits"
              }
            }
            )}
          />
          {errors.mobile_number && (
            <p className="text-red-500 text-left px-1"> {errors.mobile_number.message} </p>
          )}
        </div>
      </div>
      <div className='grid w-full lg:pb-4'>
        <div className="flex flex-col w-full">
          <textarea cols={30} rows={6} id='message' placeholder='How can we help you? There!' className='bg-transparent border-b border-currentlink outline-none py-3 px-2 md:px-5'
            {...register("description", {
              required: "Please enter your message",
              pattern: {
                value: /^[A-Za-z]+(?:\s[A-Za-z]+)*$/,
                message: "Entered value does not match name format",
              },
              minLength: {
                value: 3,
                message: "Please add at least 3 characters",
              },
            })}
          />
          {errors.description && (
            <p className="text-red-500 text-left px-1"> {errors.description.message} </p>
          )}
        </div>
      </div>
      <Button className='bg-secondarylite hover:shadow-lg hover:bg-secondarylite text-white rounded-full text-[17px] tracking-wider lg:px-8 lg:py-7'>
        {loading ? <TbLoader3 className='animate-spin' /> : "SUBMIT"}
      </Button>
    </form >
  )
}

export default SendMessageForm