import { InboxIcon, SparklesIcon } from "@heroicons/react/outline";
import {
  NewspaperIcon,
  PhoneIcon,
  SupportIcon,
} from "@heroicons/react/outline";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  const supportLinks = [
    {
      name: "Car Report",
      to: "/car-report",
      img:'assets/images/car-1.jpg',
      desc:"How can the past of an American car be researched?"
     
    },
    {
      name: "Heavy Duty Truck Report",
      to: "/heavy-duty-truck-report",
      img:'assets/images/truck-1.jpg',
      desc:"We're your operations backbone for construction, logistics, and more."
    },
    {
      name: "Motor Bikes Reports",
      to: "/motor-bikes-reports",
      img:'assets/images/bike-2.jpg',
      desc:"Inspection Report for Comprehensive Motorcycles."
    },
  ];
  return (
    <>
      <div className="relative bg-white pt-16 pb-32 overflow-hidden">
        <div className="relative">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-16 lg:max-w-none lg:mx-0 lg:px-0">
              <div>
                <div className="mt-6">
                  <h2 className="text-4xl font-extrabold tracking-tight text-red-800">
                    About Us
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Thevinreport® provides essential information for informed
                    used car purchases, helping customers avoid hidden flaws and
                    stolen vehicles. Established in 2010, we've grown to serve a
                    global clientele, including buyers, sellers, dealers, law
                    enforcement, and insurance companies. Start your used car
                    journey with us.
                  </p>
                </div>
              </div>
              <div className="mt-8 border-t border-gray-200 pt-6"></div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0">
              <div className="pl-4 -mr-48 sm:pl-6 md:-mr-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:left-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="assets/images/car-2.jpg"
                  alt="Inbox user interface"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mt-24">
          <div className="lg:mx-auto lg:max-w-7xl lg:px-8 lg:grid lg:grid-cols-2 lg:grid-flow-col-dense lg:gap-24">
            <div className="px-4 max-w-xl mx-auto sm:px-6 lg:py-32 lg:max-w-none lg:mx-0 lg:px-0 lg:col-start-2">
              <div>
                <div className="mt-6">
                  <h2 className="text-3xl font-extrabold tracking-tight text-gray-900">
                    HOW DOES <span className="text-red-800">Thevinreport</span>{" "}
                    GET THEIR INFORMATION?
                  </h2>
                  <p className="mt-4 text-lg text-gray-500">
                    Thevinreport collects detailed vehicle information from U.S.
                    government sources nationwide, giving you a comprehensive
                    historical record for your purchase.
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16 lg:mt-0 lg:col-start-1">
              <div className="pr-4 -ml-48 sm:pr-6 md:-ml-16 lg:px-0 lg:m-0 lg:relative lg:h-full">
                <img
                  className="w-full rounded-xl shadow-xl ring-1 ring-black ring-opacity-5 lg:absolute lg:right-0 lg:h-full lg:w-auto lg:max-w-none"
                  src="assets/images/car-3.jpg"
                  alt="Customer profile user interface"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-white">
        {/* Header */}
        <div className="relative pb-32 bg-gray-800">
          <div className="absolute inset-0">
            <img
              className="w-full h-full object-cover"
              src="assets/images/car-1.jpg"
              alt=""
            />
            <div
              className="absolute inset-0 bg-gray-800 mix-blend-multiply"
              aria-hidden="true"
            />
          </div>
          <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
            <h1 className="text-4xl font-extrabold tracking-tight text-white md:text-5xl lg:text-6xl">
            HOW TO CONDUCT A VEHICLE INSPECTION USING The VIN Report
            </h1>
            <p className="mt-6 max-w-3xl text-xl text-gray-300">
            For used cars made after 1980, you can easily check the VIN (vehicle identification number) using The VIN Report. The VIN Report provides a detailed report based on your 17-character VIN from our extensive database.
            </p>
          </div>
        </div>

        {/* Overlapping cards */}
        <section
          className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
          aria-labelledby="contact-heading"
        >
          <h2 className="sr-only" id="contact-heading">
            Contact us
          </h2>
          <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
            {supportLinks.map((link) => (
              <div
                key={link.name}
                className="flex flex-col bg-white rounded-2xl shadow-xl overflow-hidden"
              >
                <img className="w-full h-full object-cover" src={link.img} alt="" />
                <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                  <h3 className="text-2xl font-semibold  text-gray-900">
                    {link.name}
                  </h3>
                  <p className="mt-4 text-base text-gray-500">{link.desc}</p>
                </div>
                <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <Link to={link.to} className="text-base font-medium text-red-700 hover:text-red-600">
                  Get Report<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
