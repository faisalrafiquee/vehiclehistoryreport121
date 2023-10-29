import React, { useEffect, useState, Fragment } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { FaArrowCircleRight } from "react-icons/fa";
import { Dialog, Transition } from "@headlessui/react";
import { CheckIcon } from "@heroicons/react/outline";
import Loader from "../Components/Loader";
import { PayPalButton } from "react-paypal-button-v2";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import axios from "axios";

const SignUpForm = () => {
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [scriptLoaded, setScriptLoaded] = useState(false);
  const addPaypalScript = () => {
    if (window.paypal) {
      setScriptLoaded(true);
      return;
    }
    const script = document.createElement("script");
    script.src =
      "https://www.paypal.com/sdk/js?client-id=AUHBx6LBvzXP613OiWpnM96i66nTR32-9o-NTAAQ9PAAdIHyTTXzEFhJYkZc9r8h7x7CbbXIu4cmpn0f";
    script.type = "text/javascript";
    script.async = true;
    script.onload = () => setScriptLoaded(true);
    document.body.appendChild(script);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    addPaypalScript();
  }, []);
  const location = useLocation();
  let pakage = location.state?.route;

  const pakages = [
    {
      id: 1,
      amount: "46.99",
      type: "car-report-prime",
      showType: "Prime",
    },
    {
      id: 2,
      amount: "64.99",
      type: "car-report-instant",
      showType: "Instant",
    },
    {
      id: 3,
      amount: "79.99",
      type: "car-report-premium",
      showType: "Premium",
    },
    {
      id: 4,
      amount: "46.99",
      type: "truck-report-standard",
      showType: "Standard",
    },
    {
      id: 5,
      amount: "64.99",
      type: "truck-report-instant",
      showType: "Instant",
    },
    {
      id: 6,
      amount: "79.99",
      type: "truck-report-premium",
      showType: "Premium",
    },
    {
      id: 7,
      amount: "39.99",
      type: "bike-report-mini",
      showType: "Mini",
    },
    {
      id: 8,
      amount: "54.99",
      type: "bike-report-instant",
      showType: "Instant",
    },
    {
      id: 9,
      amount: "67.99",
      type: "bike-report-premium",
      showType: "Premium",
    },
  ];

  const validationSchema = Yup.object().shape({
    customer_name: Yup.string().required("Name is required"),
    customer_email: Yup.string().email().required("Email is required"),
    customer_phone: Yup.string()
      .matches(
        /^(?:\+\d{1,3}\s?)?(?:\d{3}[-.]?)\s?\d{3}[-.]?\d{4}$/,
        "Invalid phone number format"
      )
      .trim()
      .required("phone is required"),
    customer_VIN: Yup.string()
      .min(13, "Invalid VIN")
      .max(17, "Invalid VIN")
      .required("VIN is required")
      .trim(),
    package: Yup.number().moreThan(0).required("Package is required"),
  });

  const formik = useFormik({
    initialValues: {
      customer_name: "",
      customer_email: "",
      customer_phone: "",
      customer_VIN: "",
      package: pakages.filter((e) => e.type === pakage)[0]?.amount,
    },
    enableReinitialize: true,
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      console.log(values);
      setLoading(true);
      setTimeout(() => {
        setLoading(false);
        setOpen(true);
      }, 2000);
      // await axios
      // .post("/api/customer/add",values)
      // .then((res) => {
      //   if (res.status === 200) {
      //     const { data } = res.data;
      //     console.log(data);
      //   }
      // })
      // .catch((err) => {
      //   console.log(err);
      //   toast.error("something went wrong!");
      // });
    },
  });

  const handleSubmitx = () => {
    axios.post("http://localhost/vehiclehistory/api/create_customer.php", {
      customer_name: "ededd",
      customer_email: "faedeffffdisal",
      customer_phone: "faedeisal",
      customer_VIN: "edded",
      country: "ededed",
      package: "eded",
    }).then((res)=>{
        console.log(res.data.customer);
    }).catch((err)=>{
      console.log("ERROR WHILE CREATING CUSTOMER")
    })
  };

  return (
    <>
      <div className="bg-gray-100">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="relative bg-white shadow-xl">
            <h2 className="sr-only">Contact us</h2>

            <div className="grid grid-cols-1 lg:grid-cols-3">
              {/* Contact information */}
              <div className="relative overflow-hidden py-10 px-6 bg-red-700 sm:px-10 xl:p-12">
                <div
                  className="absolute inset-0 pointer-events-none sm:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={343}
                    height={388}
                    viewBox="0 0 343 388"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-99 461.107L608.107-246l707.103 707.107-707.103 707.103L-99 461.107z"
                      fill="url(#linear1)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear1"
                        x1="254.553"
                        y1="107.554"
                        x2="961.66"
                        y2="814.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none sm:block lg:hidden"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={359}
                    height={339}
                    viewBox="0 0 359 339"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 382.107L546.107-325l707.103 707.107-707.103 707.103L-161 382.107z"
                      fill="url(#linear2)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear2"
                        x1="192.553"
                        y1="28.553"
                        x2="899.66"
                        y2="735.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <div
                  className="hidden absolute top-0 right-0 bottom-0 w-1/2 pointer-events-none lg:block"
                  aria-hidden="true"
                >
                  <svg
                    className="absolute inset-0 w-full h-full"
                    width={160}
                    height={678}
                    viewBox="0 0 160 678"
                    fill="none"
                    preserveAspectRatio="xMidYMid slice"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M-161 679.107L546.107-28l707.103 707.107-707.103 707.103L-161 679.107z"
                      fill="url(#linear3)"
                      fillOpacity=".1"
                    />
                    <defs>
                      <linearGradient
                        id="linear3"
                        x1="192.553"
                        y1="325.553"
                        x2="899.66"
                        y2="1032.66"
                        gradientUnits="userSpaceOnUse"
                      >
                        <stop stopColor="#fff" />
                        <stop offset={1} stopColor="#fff" stopOpacity={0} />
                      </linearGradient>
                    </defs>
                  </svg>
                </div>
                <h3 className="text-lg font-medium text-white">
                  Get Full Report
                </h3>

                <dl className="mt-8 space-y-6">
                  <dd className="flex text-base text-red-50">
                    <FaArrowCircleRight
                      className="flex-shrink-0 w-6 h-6 text-red-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Save upto 50% on inspection costs with Thevinreport
                    </span>
                  </dd>
                  <dd className="flex text-base text-red-50">
                    <FaArrowCircleRight
                      className="flex-shrink-0 w-6 h-6 text-red-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Reduce time spent on inspections by 99% with Thevinreport
                    </span>
                  </dd>
                  <dd className="flex text-base text-red-50">
                    <FaArrowCircleRight
                      className="flex-shrink-0 w-6 h-6 text-red-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Get your 100% verified history report with one click
                      Thevinreport
                    </span>
                  </dd>
                  <dd className="flex text-base text-red-50">
                    <FaArrowCircleRight
                      className="flex-shrink-0 w-6 h-6 text-red-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Thevinreport saves you to buy the wrong or unverified
                      Vehicle
                    </span>
                  </dd>
                  <dd className="flex text-base text-red-50">
                    <FaArrowCircleRight
                      className="flex-shrink-0 w-6 h-6 text-red-200"
                      aria-hidden="true"
                    />
                    <span className="ml-3">
                      Thevinreport is trusted by over 100,000 people across 50+
                      countries in the United states.
                    </span>
                  </dd>
                </dl>
              </div>

              {/* Contact form */}
              <div className="py-10 px-6 sm:px-10 lg:col-span-2 xl:p-12">
                <h3 className="text-lg font-medium text-gray-900"></h3>
                <form
                  onSubmit={formik.handleSubmit}
                  className="mt-6 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
                >
                  <div>
                    <label
                      htmlFor="first-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Name
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customer_name"
                        id="customer_name"
                        placeholder="Name"
                        onChange={formik.handleChange("customer_name")}
                        onBlur={formik.handleBlur("customer_name")}
                        aria-invalid="true"
                        aria-describedby="customer_name"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="customer_name">
                      {formik.touched.customer_name &&
                        formik.errors.customer_name}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="last-name"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Email
                    </label>
                    <div className="mt-1">
                      <input
                        type="email"
                        name="customer_email"
                        id="customer_email"
                        placeholder="Email"
                        onChange={formik.handleChange("customer_email")}
                        onBlur={formik.handleBlur("customer_email")}
                        aria-invalid="true"
                        aria-describedby="customer_email"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:indigo-red-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="customer_name">
                      {formik.touched.customer_email &&
                        formik.errors.customer_email}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="phone"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Phone
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customer_phone"
                        id="customer_phone"
                        onChange={formik.handleChange("customer_phone")}
                        onBlur={formik.handleBlur("customer_phone")}
                        aria-invalid="true"
                        placeholder="Enter Phone Number"
                        aria-describedby="customer_phone"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="customer_name">
                      {formik.touched.customer_phone &&
                        formik.errors.customer_phone}
                    </p>
                  </div>
                  <div>
                    <label
                      htmlFor="customer_VIN"
                      className="block text-sm font-medium text-gray-900"
                    >
                      VIN
                    </label>
                    <div className="mt-1">
                      <input
                        type="text"
                        name="customer_VIN"
                        id="customer_VIN"
                        value={formik.values.customer_VIN}
                        onChange={(e) => {
                          formik.handleChange("customer_VIN")(e);
                          e.target.value = e.target.value.toUpperCase(); // Convert to uppercase
                        }}
                        onBlur={formik.handleBlur("customer_VIN")}
                        aria-invalid="true"
                        placeholder="Enter VIN Number"
                        aria-describedby="customer_VIN"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                      />
                    </div>
                    <p className="mt-2 text-sm text-red-600" id="customer_name">
                      {formik.touched.customer_VIN &&
                        formik.errors.customer_VIN}
                    </p>
                  </div>

                  <div className="sm:col-span-2">
                    <label
                      htmlFor="selectPakage"
                      className="block text-sm font-medium text-gray-900"
                    >
                      Select Pakage
                    </label>
                    <div className="mt-1">
                      <select
                        id="package"
                        name="package"
                        className="py-3 px-4 block w-full shadow-sm text-gray-900 focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                        onChange={formik.handleChange("package")}
                        onBlur={formik.handleBlur("package")}
                        aria-invalid="true"
                        aria-describedby="package"
                        disabled={
                          pakages.filter((e) => e.type === pakage).length != 0
                            ? false
                            : true
                        }
                      >
                        {pakages
                          .filter((e) => e.type === pakage)
                          .map((p) => (
                            <option value={p.amount} className="text-black">
                              {p.showType} ${p.amount}
                            </option>
                          ))}
                      </select>
                      <p className="mt-2 text-sm text-red-600" id="package">
                        {formik.touched.package && formik.errors.package}
                      </p>
                    </div>
                  </div>

                  <div className="sm:col-span-2 sm:flex sm:justify-end">
                    <button
                      type="submit"
                      disabled={!formik.isValid}
                      className="mt-2 w-full inline-flex items-center justify-center px-6 py-3 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 sm:w-auto"
                    >
                      <Loader isLoading={loading} />
                      Proceed to checkout
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Transition.Root show={open} as={Fragment}>
        <Dialog
          as="div"
          className="fixed z-10 inset-0 overflow-y-auto"
          onClose={setOpen}
        >
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
            <span
              className="hidden sm:inline-block sm:align-middle sm:h-screen"
              aria-hidden="true"
            >
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
                    <CheckIcon
                      className="h-6 w-6 text-green-600"
                      aria-hidden="true"
                    />
                  </div>
                  <div className="mt-3 text-center sm:mt-5">
                    {pakages
                      .filter((e) => e.type === pakage)
                      .map((p) => (
                        <Dialog.Title
                          as="h3"
                          className="text-lg leading-6 font-medium text-gray-900"
                        >
                          {p.showType} ${p.amount}
                        </Dialog.Title>
                      ))}

                    <div className="mt-2">
                      {/* <p className="text-sm text-gray-500">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Consequatur amet labore.
                    </p> */}
                    </div>
                  </div>
                </div>
                <div className="mt-5 sm:mt-6">
                  {scriptLoaded ? (
                    <>
                      <PayPalButton
                        amount={formik.values.package}
                        // shippingPreference="NO_SHIPPING" // default is "GET_FROM_FILE"
                        onSuccess={(details, data) => {
                          console.log(details);
                          console.log(formik.values);
                          


                          // alert("Transaction completed by " + details.payer.name.given_name);

                          // // OPTIONAL: Call your server to save the transaction
                          // return fetch("/paypal-transaction-complete", {
                          //   method: "post",
                          //   body: JSON.stringify({
                          //     orderID: data.orderID
                          //   })
                          // });
                        }}
                      />
                      <button
                        onClick={() => {
                          handleSubmitx();
                        }}
                      >
                        Submit
                      </button>
                    </>
                  ) : (
                    <></>
                  )}
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  );
};

export default SignUpForm;
