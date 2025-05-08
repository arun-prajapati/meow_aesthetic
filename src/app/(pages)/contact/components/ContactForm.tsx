"use client";
import { useState } from "react";
import { useForm } from "react-hook-form";
import axios from "axios";

type FormValue = {
  name: string;
  email: string;
  mobile_number: number;
  description: string;
};

const ContactForm = () => {
  //
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  //
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValue>();

  // contact - us api integration
  const formSubmit = async (value: FormValue) => {
    setLoading(true);
    const formData = new FormData();
    formData.append("name", value.name);
    formData.append("email", value.email);
    formData.append("mobile_number", value.mobile_number.toString());
    formData.append("description", value.description);
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/contectus`,
        formData
      );
      console.log(response, "response");
      setLoading(false);
      setMessage("Thank you for contacting us");
    } catch (error) {
      setLoading(false);
      console.error(error, "error while submitting data");
      setMessage("Error while submitting data");
    }
    reset();
  };

  return (
    <form
      className="bg-white rounded-md p-3 sm:p-7 flex flex-col gap-5 my-10 w-full"
      onSubmit={handleSubmit(formSubmit)}
    >
      <div className="flex flex-col w-full">
        <input
          type="text"
          id="firstname"
          placeholder="First Name"
          className="border outline-none py-3 px-2 lg:px-5"
          {...register("name", {
            required: "First name is required",
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
        {errors.name && (
          <p className="text-red-500 text-left px-1"> {errors.name.message} </p>
        )}
      </div>
      <div className="grid lg:grid-cols-2 w-full items-center gap-5">
        <div className="flex flex-col w-full">
          <input
            type="email"
            id="email"
            placeholder="Email Address"
            className="border outline-none py-3 px-2 lg:px-5"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+\.\S+$/,
                message: "Entered value does not match email format",
              },
            })}
          />
          {errors.email && (
            <p className="text-red-500 text-left px-1">
              {" "}
              {errors.email.message}{" "}
            </p>
          )}
        </div>
        <div className="flex flex-col w-full">
          <input
            type="number"
            min={0}
            id="phone"
            placeholder="Phone Number"
            className="border outline-none py-3 px-2 lg:px-5"
            {...register("mobile_number", {
              required: "Phone number is required",
              minLength: {
                value: 4,
                message: "Please add a valid phone number",
              },
              maxLength: {
                value: 12,
                message: "Phone number is not greater than 12 digits",
              },
            })}
          />
          {errors.mobile_number && (
            <p className="text-red-500 text-left px-1">
              {" "}
              {errors.mobile_number.message}{" "}
            </p>
          )}
        </div>
      </div>
      <div className="flex flex-col w-full">
        <textarea
          rows={6}
          id="message"
          placeholder="How can we help you? There!"
          className="border outline-none resize-none py-3 px-2 lg:px-5"
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
          <p className="text-red-500 text-left px-1">
            {" "}
            {errors.description.message}{" "}
          </p>
        )}
      </div>
      <button className="bg-[#C9C9C9] cursor-pointer hover:shadow-lg hover:bg-secondarylite text-white rounded-full text-lg tracking-wider px-5 py-2">
        {loading ? "Loading..." : "Submit"}
      </button>
      {message && <p className="text-green-500">{message}</p>}
    </form>
  );
};

export default ContactForm;
