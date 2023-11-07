import React, { useEffect, useState, Fragment } from "react";
import axios from "axios";
import { useFormik } from "formik";
import * as Yup from "yup";
import Loader from "../Components/Loader";
import { Dialog, Transition } from '@headlessui/react'
import { CheckIcon } from '@heroicons/react/outline'
import { useNavigate } from "react-router-dom";





const Contact = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  
  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    email: Yup.string().email().required("Email is required"),
  });

  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      axios.post('https://backend.thevinreport.com/api/create_contact_us.php',values).then((res)=>{
        console.log(res.data);
        setLoading(false);
        setOpen(true);
      }).catch((err)=>{
        console.log(err)
      })
    },
  });
   
  return (
    <>
    <div className="bg-white">


    <main>
      {/* Header */}
      <div className="py-24 bg-gray-50 sm:py-32">
        <div className="max-w-md mx-auto pl-4 pr-8 sm:max-w-lg sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 className="text-4xl leading-10 font-extrabold tracking-tight text-red-800 text-center sm:text-5xl sm:leading-none lg:text-6xl">
          Contact Us
          </h1>
          <p className="mt-6 max-w-3xl mx-auto text-xl leading-normal text-gray-500 text-center">
          Feel free to reach out to us with any questions or inquiries. We're here to assist you in any way we can.
          </p>
        </div>
      </div>

      {/* Contact Section */}
      <div className="relative bg-white">
        <div className="lg:absolute lg:inset-0">
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover lg:absolute lg:h-full"
              src="assets/images/car-4.jpg"
              alt=""
            />
          </div>
        </div>
        <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
          <div className="lg:pr-8">
            <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
              <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Contact Information</h2>
              <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              If you prefer to contact us directly, you can fill the following information:
              </p>
              <form  onSubmit={formik.handleSubmit} className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
                <div>
                  <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <div className="mt-1">
                  <input
                        type="text"
                        name="name"
                        id="name"
                        placeholder="Name"
                        onChange={formik.handleChange("name")}
                        onBlur={formik.handleBlur("name")}
                        aria-invalid="true"
                        aria-describedby="name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                  </div>
                  <p className="mt-2 text-sm text-red-600" id="name">
                      {formik.touched.name &&
                        formik.errors.name}
                    </p>
                </div>
                <div>
                  <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <div className="mt-1">
                  <input
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Email"
                        onChange={formik.handleChange("email")}
                        onBlur={formik.handleBlur("email")}
                        aria-invalid="true"
                        aria-describedby="email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:indigo-red-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                  </div>
                  <p className="mt-2 text-sm text-red-600" id="email">
                      {formik.touched.email &&
                        formik.errors.email}
                    </p>
                </div>
               
               
               

                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
                      Subject
                    </label>
                    
                  </div>
                  <div className="mt-1">
                  <input
                        type="text"
                        name="subject"
                        id="subject"
                        placeholder="Subject"
                        onChange={formik.handleChange("subject")}
                        onBlur={formik.handleBlur("subject")}
                        aria-invalid="true"
                        aria-describedby="subject"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                  </div>
                   <p className="mt-2 text-sm text-red-600" id="subject">
                      {formik.touched.subject &&
                        formik.errors.subject}
                    </p>
                </div>
                <div className="sm:col-span-2">
                  <div className="flex justify-between">
                    <label htmlFor="how-can-we-help" className="block text-sm font-medium text-gray-700">
                      Message
                    </label>
                    <span id="how-can-we-help-description" className="text-sm text-gray-500">
                      Max. 500 characters
                    </span>
                  </div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      aria-describedby="how-can-we-help-description"
                      rows={4}
                      className="block w-full shadow-sm sm:text-sm focus:ring-grape-500 focus:border-grape-500 border border-gray-300 rounded-md"
                      onChange={formik.handleChange("message")}
                        onBlur={formik.handleBlur("message")}
                    />
                  </div>
                </div>  
                <p className="mt-2 text-sm text-red-600" id="message">
                      {formik.touched.message &&
                        formik.errors.message}
                    </p>
                
                
                <div className="text-right sm:col-span-2">
                  <button
                    type="submit"
                    disabled={!formik.isValid}
                    className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
                  >
                     <Loader isLoading={loading} />
                    Submit
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

     
    </main>

   
  </div>
  <Transition.Root show={open} as={Fragment}>
      <Dialog as="div" className="fixed z-10 inset-0 overflow-y-auto" onClose={setOpen}>
        <div className="flex items-end justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="hidden sm:inline-block sm:align-middle sm:h-screen" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="relative inline-block align-bottom bg-white rounded-lg px-4 pt-5 pb-4 text-left overflow-hidden shadow-xl transform transition-all sm:my-8 sm:align-middle sm:max-w-sm sm:w-full sm:p-6">
              <div>
                <div className="mx-auto flex items-center justify-center h-12 w-12 rounded-full bg-green-100">
                  <CheckIcon className="h-6 w-6 text-green-600" aria-hidden="true" />
                </div>
                <div className="mt-3 text-center sm:mt-5">
                  <Dialog.Title as="h3" className="text-lg leading-6 font-medium text-gray-900">
                    Thank You. 
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="text-sm text-gray-500">
                      We'll contact you soon.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-5 sm:mt-6">
                <button
                  type="button"
                  className="inline-flex justify-center w-full rounded-md border border-transparent shadow-sm px-4 py-2 bg-red-600 text-base font-medium text-white hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:text-sm"
                  onClick={() => {
                    setOpen(false);
                    navigate('/')
                  }}
                >
                  OK
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  </>
  )
}

export default Contact