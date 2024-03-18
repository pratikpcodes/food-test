import React from "react";
import { useForm } from "react-hook-form";
import { useSelector } from "react-redux";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();


  const getData = (data) => {
    // Handle form submission logic (e.g., send data to a backend server)
    console.log(data);
  };

  return (
    <form
      className="max-w-2xl min-h-screen mx-auto mt-8"
      onSubmit={handleSubmit(getData)}
    >
      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Contact Information</h2>

        <div className="grid grid-cols-2 gap-4">
          <div>
            <label
              htmlFor="firstName"
              className="block text-gray-600 font-semibold mb-2"
            >
              First Name:
            </label>
            <input
              {...register("firstName", { required: "First Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  bg-slate-200 hover:bg-slate-900 hover:text-white transition-transform duration-300 hover:scale-105 scale-95"
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName.message}</p>
            )}
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-gray-600 font-semibold mb-2"
            >
              Last Name:
            </label>
            <input
              {...register("lastName", { required: "Last Name is required" })}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500  bg-slate-200 hover:bg-slate-900 hover:text-white transition-transform duration-300 hover:scale-105 scale-95"
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName.message}</p>
            )}
          </div>
        </div>

        <div className="mt-4">
          <label
            htmlFor="email"
            className="block text-gray-600 font-semibold mb-2 "
          >
            Email:
          </label>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^\S+@\S+$/i,
                message: "Invalid email address",
              },
            })}
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-200  hover:bg-slate-900 hover:text-white transition-transform duration-300 hover:scale-105 scale-95"
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Message</h2>

        <label
          htmlFor="message"
          className="block text-gray-600 font-semibold mb-2"
        >
          Your Message:
        </label>
        <textarea
          {...register("usermessage", { required: "Message is required" })}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:border-blue-500 bg-slate-200 hover:bg-slate-900 hover:text-white transition-transform duration-300 hover:scale-105 scale-95 "
          rows="4"
        />
        {errors.usermessage && (
          <p className="text-red-500">{errors.usermessage.message}</p>
        )}
      </div>

      <div className="mb-6">
        <h2 className="text-2xl font-semibold mb-4">Additional Information</h2>

        {/* Additional form fields */}
        {/* Add more fields and labels as needed */}
      </div>

      <div className="text-center">
        <button
          type="submit"
          className="bg-gray-900 text-white px-4 py-2 rounded-md hover:bg-white hover:text-black transition-all hover:scale-110 focus:outline-none focus:shadow-outline-blue"
        >
          Submit
        </button>
      </div>
    </form>
  );
};

export default Contact;
