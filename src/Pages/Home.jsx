import React, { useState ,useRef, useEffect } from "react";
import SwiperHero from "../Components/SliderHero";
import {
  FaCarCrash,
  FaTachometerAlt,
  FaFile,
  FaSpellCheck,
  FaReceipt,
  FaExchangeAlt,
  FaSkullCrossbones,
  FaHistory,
  FaListAlt,
} from "react-icons/fa";
import Detail from "../Components/Detail";
import Pricing from "../Components/Pricing";


const Home = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const incentives = [
    {
      name: "DAMAGES",
      description:
        "Avoid the hidden perils of concealed automobile damage, safeguarding your wallet and ensuring road safety.",
      imageSrc: <FaCarCrash color="#000" size={50} />,
    },
    {
      name: "MILEAGE ROLLBACK",
      description:
        "Mileage fraud is a more common occurrence than one might think, often leading to unnecessary overpayments for vehicles and, at times, substantial repair costs.",
      imageSrc: <FaTachometerAlt color="#000" size={50} />,
    },
    {
      name: "RECORDED IMAGES",
      description:
        "Gaining insights into the vehicle's previous appearance is crucial for uncovering its history and identifying any potential damage or vulnerabilities.",
      imageSrc: <FaFile color="#000" size={50} />,
    },
    {
      name: "Title Check",
      description:
        "Our records simplify the process of acquiring automotive title history. With our service, you can easily determine whether the vehicle's title is branded or not.",
      imageSrc: <FaSpellCheck color="#000" size={50} />,
    },
    {
      name: "SAFETY RECALLS",
      description:
        "Manufacturers consistently issue recalls to rectify potentially hazardous defects. Before embarking on your journey, ensure your vehicle is free from these concerns.",
      imageSrc: <FaReceipt color="#000" size={50} />,
    },
    {
      name: "OWNERSHIP CHANGES",
      description:
        "Knowing how many different owners an automobile has had over the years may help you evaluate its history and whether it has been sold frequently, which could signal underlying concerns.",
      imageSrc: <FaExchangeAlt color="#000" size={50} />,
    },

    {
      name: "THEFT RECORDS",
      description:
        "We leave no stone unturned in our quest to confirm that a vehicle has not been reported stolen elsewhere. Our rigorous process involves extensive scrutiny of documentation from national and local law enforcement agencies.",
      imageSrc: <FaSkullCrossbones color="#000" size={50} />,
    },

    {
      name: "Service History",
      description:
        "Get a car History Report to learn about the service history of your car. It is vital to learn how to keep your car operating smoothly and lasting a long time.",
      imageSrc: <FaHistory color="#000" size={50} />,
    },
    {
      name: "Problem Checklist",
      description:
        "Our reports will tell you all you need to know about your car, including any problems it may be experiencing. You will be able to identify whether or not the vehicle is a lemon.",
      imageSrc: <FaListAlt color="#000" size={50} />,
    },
  ];
  useEffect(() => {
    window.scrollTo(0, 0);
  
  }, []);
  const targetDivRef = useRef(null);

  const handleButtonClick = () => {
    // Scroll to the targetDiv
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };


  const list1 = [
    {
      id: 1,
      p: "HQ Car Images",
    },
    {
      id: 2,
      p: "Vehicle Overview",
    },
    {
      id: 3,
      p: "Market Value",
    },
    {
      id: 4,
      p: "Vehicle Specifications",
    },
    {
      id: 5,
      p: "Sales Listing",
    },
    {
      id: 6,
      p: "Accident Record",
    },
    {
      id: 7,
      p: "Salvage",
    },
    {
      id: 8,
      p: "Theft Record",
    },
    {
      id: 9,
      p: "Title Record",
    },
    {
      id: 10,
      p: "Impounds",
    },
    {
      id: 11,
      p: "Exports",
    },
    {
      id: 12,
      p: "Open Recalls",
    },
    {
      id: 13,
      p: "Installed Options and Packages",
    },
    {
      id: 14,
      p: "Active/Expire Warranty",
    },
  ];

  const list2 = [
    {
      id: 1,
      p: "HQ Car Images",
    },
    {
      id: 2,
      p: "Vehicle Overview",
    },
    {
      id: 3,
      p: "Market Value",
    },
    {
      id: 4,
      p: "Vehicle Specifications",
    },
    {
      id: 5,
      p: "Sales Listing",
    },
    {
      id: 6,
      p: "Accident Record",
    },
    {
      id: 7,
      p: "Salvage",
    },
    {
      id: 8,
      p: "Theft Record",
    },
    {
      id: 9,
      p: "Title Record",
    },
    {
      id: 10,
      p: "Impounds",
    },
    {
      id: 11,
      p: "Exports",
    },
    {
      id: 12,
      p: "Open Recalls",
    },
    {
      id: 13,
      p: "Installed Options and Packages",
    },
    {
      id: 14,
      p: "Active/Expire Warranty",
    },
  ];

  const list3 = [
    {
      id: 1,
      p: "HQ Car Images",
    },
    {
      id: 2,
      p: "Vehicle Overview",
    },
    {
      id: 3,
      p: "Market Value",
    },
    {
      id: 4,
      p: "Vehicle Specifications",
    },
    {
      id: 5,
      p: "Sales Listing",
    },
    {
      id: 6,
      p: "Accident Record",
    },
    {
      id: 7,
      p: "Salvage",
    },
    {
      id: 8,
      p: "Theft Record",
    },
    {
      id: 9,
      p: "Title Record",
    },
    {
      id: 10,
      p: "Impounds",
    },
    {
      id: 11,
      p: "Exports",
    },
    {
      id: 12,
      p: "Open Recalls",
    },
    {
      id: 13,
      p: "Installed Options and Packages",
    },
    {
      id: 14,
      p: "Active/Expire Warranty",
    },
  ];
  return (
    <>
      <SwiperHero
        title={
          "Secure the Most Economical Vehicle History Report with Just One Click."
        }
        description={
          "Cruise through peace of mind as you effortlessly access the most budget-friendly vehicle history reports, all with a simple click."
        }
        btnTitle={"Get Report"}
        handleButtonClick={handleButtonClick}
      />

      <Detail
        title="We are providing services in"
        subtitle="An In-Depth Automotive Inspection Report"
        description="Our comprehensive Automotive Inspection Report provides an
        exhaustive assessment of your vehicle, utilizing the VIN or
        license plate for precise identification. We meticulously
        scrutinize every aspect, including the exterior, interior,
        engine and mechanical systems, electrical systems, safety
        equipment, navigation, and communication systems. The findings
        encompass [summarize key results], accompanied by expert
        recommendations for necessary measures. Our inspection is
        committed to ensuring your vehicle's safety, functionality,
        and compliance with all relevant standards."
        img="assets/images/m.jpg"
      />

      <section className="bg-white">
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          <img
            src="assets/images/vin.jpg"
            alt=""
            class="inline-block h-full w-full object-cover"
          />
        </div>
      </section>

      <section class="bg-[#fff]">
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Heading --> */}
          <div class="mx-auto max-w-3xl text-center">
            <h2 class="mb-4 mt-6 text-3xl font-extrabold md:text-3xl text-red-800">
              WHAT FACTORS DO WE ANALYZE AS PART OF THE REPORT PREPAREMENT
              PROCESS?
            </h2>
            <p class="mx-auto mb-8 mt-4 max-w-[528px] text-[#636262] md:mb-12 lg:mb-16"></p>
          </div>
          {/* <!-- Features --> */}
          <div class="grid grid-cols-1 gap-5 sm:grid-cols-2 md:grid-cols-3">
            {/* <!-- Item --> */}

            {incentives.map((e) => (
              <div class="grid grid-cols-1 gap-6 rounded-xl bg-[#f2f2f7] p-8 md:p-10">
                {e.imageSrc}
                <p class="text-xl font-semibold text-black">{e.name}</p>
                <p class="text-sm text-[#636262]">{e.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white" id="targetDiv" ref={targetDivRef} >
        <div class="mx-auto max-w-7xl px-5 py-16 md:px-10 md:py-24">
          <div class="mx-auto mb-8 max-w-3xl text-center md:mb-12">
            {/* <!-- Heading --> */}
            <h2 class="text-3xl font-bold md:text-5xl text-black">
              Pricing Plans.
            </h2>
          </div>
          {/* <!-- Prices --> */}
          <div class="grid grid-cols-1 gap-16 sm:grid-cols-2 md:grid-cols-3 md:gap-4">
            {/* <!-- Price 1 --> */}
            <Pricing
              title={"Car Report"}
              type={"Instant"}
              price={"$64.99"}
              time={"in 30 Minutes"}
              decription={""}
              btnName={"Buy Now"}
              list={list1}
              bgColor={"bg-red-800"}
              textColor={"text-white"}
              btnBgColor={"bg-white"}
              btnTextColor={"text-black"}
              route={'car-report-instant'}
            />
            {/* <!-- Price 2 --> */}
            <Pricing
              title={"Heavy-duty vehicles"}
              type={"Instant"}
              price={"$64.99"}
              time={"in 30 Minutes"}
              decription={""}
              btnName={"Buy Now"}
              list={list2}
              bgColor={"bg-red-800"}
              textColor={"text-white"}
              btnBgColor={"bg-white"}
              btnTextColor={"text-black"}
              route={'truck-report-instant'}
            />
            {/* <!-- Price 3 --> */}
            <Pricing
              title={"Motor Bikes Report"}
              type={"Instant"}
              price={"$54.99"}
              time={"in 30 Minutes"}
              decription={""}
              btnName={"Buy Now"}
              list={list3}
              bgColor={"bg-red-800"}
              textColor={"text-white"}
              btnBgColor={"bg-white"}
              btnTextColor={"text-black"}
              route={'bike-report-instant'}
            />
          </div>
        </div>
      </section>

      <section class="bg-[#fff]">
        {/* <!-- Container --> */}
        <div class="mx-auto w-full max-w-7xl px-5 py-16 md:px-10 md:py-24 lg:py-32">
          {/* <!-- Title --> */}
          <h2 class="mb-8 text-center text-3xl font-bold md:mb-14 md:text-5xl text-red-800">
            What our clients are saying
          </h2>
          {/* <!-- Testimonial List --> */}
          <ul class="mb-6 grid gap-5 sm:grid-cols-2 md:grid-cols-3 md:mb-16">
            <li class="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
              </div>
              <p class="text-[#647084]">
                “The vehicle inspection report service has truly revolutionized our operations. It stands as an absolute game-changer in the way we manage compliance, and its impact on our overall efficiency has been nothing short of remarkable."
              </p>
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb67bf1bca198e298c35_Ellipse%205-2.png"
                  alt=""
                  class="mr-4 h-16 w-16"
                />
                <div class="flex flex-col">
                  <h6 class="font-bold text-black">Lara smith</h6>
                  <p class="text-sm text-[#636262]">Report Verified Customer</p>
                </div>
              </div>
            </li>
            <li class="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
              </div>
              <p class="text-[#647084]">
                “I simply can't envision overseeing our fleet without this invaluable service. It streamlines the inspection process and ensures our vehicles operate seamlessly. I wholeheartedly recommend it!"
              </p>
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb5e3ea08ab4c244194a_Ellipse%205-4.png"
                  alt=""
                  class="mr-4 h-16 w-16"
                />
                <div class="flex flex-col">
                  <h6 class="font-bold text-black">Adams Addison </h6>
                  <p class="text-sm text-[#636262]">Report Verified Customer</p>
                </div>
              </div>
            </li>
            <li class="grid gap-8 border border-solid border-[#dfdfdf] bg-white p-8 md:p-10">
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6357722e2a5f195bcf37f880_Vector.svg"
                  alt=""
                  class="mr-1.5 w-4"
                />
              </div>
              <p class="text-[#647084]">
                “The vehicle inspection report service has utterly transformed our maintenance process. It operates with remarkable efficiency and precision, and it has made a substantial contribution to enhancing our vehicle safety standards."
              </p>
              <div class="flex">
                <img
                  src="https://assets.website-files.com/6357722e2a5f19121d37f84d/6358cb614a296368b383467c_Ellipse%205-3.png"
                  alt=""
                  class="mr-4 h-16 w-16"
                />
                <div class="flex flex-col">
                  <h6 class="text-base font-bold text-black">Sophia Davis</h6>
                  <p class="text-sm text-[#636262]">Report Verified Customer</p>
                </div>
              </div>
            </li>
          </ul>
          {/* <!-- Link --> */}
          {/* <a href="#" class="flex justify-center font-bold text-black">Check all reviews</a> */}
        </div>
      </section>

      <div className="bg-white">
        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <div className="bg-red-800 rounded-lg shadow-xl overflow-hidden lg:grid lg:grid-cols-2 lg:gap-4">
            <div className="pt-10 pb-12 px-6 sm:pt-16 sm:px-16 lg:py-16 lg:pr-0 xl:py-20 xl:px-20">
              <div className="lg:self-center">
                <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                  <span className="block">Secured Payment</span>
                </h2>
                <p className="mt-4 text-lg leading-6 text-white">
                  We assure 100% secure payment Worldwide The details of
                  clients' credit cards are not stored by us. Your credit card
                  information is protected with 64-bit encryption and is
                  transmitted to our merchant in line with PCI level 2; we are
                  unable to see it. Payment Card Industry Data Security Standard
                  (PCI DSS) guidelines secure a client's data.
                </p>
              </div>
            </div>
            <div className="-mt-6 aspect-w-5 aspect-h-3 md:aspect-w-2 md:aspect-h-1">
              <img
                className="transform translate-x-6 translate-y-6 rounded-md object-cover object-left-top sm:translate-x-16 lg:translate-y-20"
                src="assets/images/secure1.jpg"
                alt="App screenshot"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
