import React from "react";
import { useForm } from "react-hook-form";
import axios from 'axios';
import toast from 'react-hot-toast';

const Contact = () => {
  const {
    register,
    handleSubmit,
   
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    const userInfo =  {
        name:data.name,
        email:data.email,
        message:data.message
    }
    try {
       await axios.post("https://getform.io/f/nbvvyjyb",userInfo);
       toast.success("Your message has been sent")
    } catch (error) {
        toast.error("Something went wrong");
    }
  }
  return (
    <>
      <div
        name="Contact"
        className="max-w-screen-2xl  container mx-auto px-4 mx:px-20 my-16"
      >
        <h1 className="text-3xl font-bold mb-4">Contact Me</h1>
        <span>Please fill out the form below to contact me</span>
        <div className="flex flex-col items-center justify-center mt-5">
          <form
            // action="https://getform.io/f/nbvvyjyb"
            onSubmit={handleSubmit(onSubmit)}
            // method="POST"
            className="bg-slate-200 w-96 px-8 py-6 rounded-sm"
          >
            <h1 className="text-xl font-semibold mb-4">Send Your Message</h1>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-sm ">FullName:</label>
              <input
                type="text"
                name="name"
                id="name"
                placeholder="Enter your fullname"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <span className="text-sm text-red-700 mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-sm ">
                Email Address:
              </label>
              <input
                type="text"
                name="email"
                id="name"
                placeholder="Enter your email"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <span className="text-sm text-red-700 mt-2">
                  This field is required
                </span>
              )}
            </div>
            <div className="flex flex-col mb-4">
              <label className="block text-gray-700 text-sm ">Message:</label>
              <textarea
                type="text"
                name="message"
                id="name"
                placeholder="Enter your message"
                className="shadow appearance-none border rounded-lg py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <span className="text-sm text-red-700 mt-2">
                  This field is required
                </span>
              )}
            </div>
            <button
              className="bg-black text-white rounded-xl px-3 py-2 hover:bg-slate-700 duration-300"
              type="submit"
            >
              Send
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
