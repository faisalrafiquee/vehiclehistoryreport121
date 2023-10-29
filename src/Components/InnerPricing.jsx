import React from 'react'
import { CheckIcon } from '@heroicons/react/outline'
import { useNavigate } from 'react-router-dom'

const InnerPricing = ({pakageName,Price,time ,list1,list2,list3,btnName,route,targetDivRef}) => {
    const navigate = useNavigate();
    const handleRoute = (route1)=>{
      navigate(`/signup-form`, {
        state: { route: route1 },
      });
      }
  return (
    <div className="bg-gray-800" id="car-1" ref={targetDivRef}>
    <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
      <div className="text-center">
        <p className="mt-2 text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
        PRICING PLANS
        </p>
        
      </div>
    </div>

    <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
      <div className="relative z-0">
        <div className="absolute inset-0 h-5/6 bg-gray-800 lg:h-2/3" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative lg:grid lg:grid-cols-7">
            <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 py-10">
                    <div>
                      <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                      {pakageName?.p1}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">{Price?.price1}</span>
                        </span>
                      </div>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-3xl font-medium">{time?.t1}</span>
                         
                        </span>
                      </div>
                        
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4 max-h-60 overflow-scroll noScroll">
                      {list1.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <button
                           onClick={()=>handleRoute(route?.route1)}
                          className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-red-800 hover:bg-gray-50"
                          aria-describedby="tier-hobby"
                        >
                          {btnName}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
              <div className="relative z-10 rounded-lg shadow-xl">
                <div
                  className="pointer-events-none absolute inset-0 rounded-lg border-2 border-red-600"
                  aria-hidden="true"
                />
                <div className="absolute inset-x-0 top-0 transform translate-y-px">
                  <div className="flex justify-center transform -translate-y-1/2">
                    <span className="inline-flex rounded-full bg-red-800 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                      Most popular
                    </span>
                  </div>
                </div>
                <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                  <div>
                    <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                    {pakageName?.p2}
                    </h3>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                        <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                        <span className="font-extrabold">{Price?.price2}</span>
                      </span>
                    
                    </div>
                    <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                        <span className="mt-2 mr-2 text-3xl font-medium">{time?.t2}</span>
                        
                      </span>
                    
                    </div>
                  </div>
                </div>
                <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10">
                  <ul role="list" className="space-y-4 max-h-60 overflow-scroll noScroll">
                    {list2.map((feature) => (
                      <li key={feature} className="flex items-start">
                        <div className="flex-shrink-0">
                          <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                      </li>
                    ))}
                  </ul>
                  <div className="mt-10">
                    <div className="rounded-lg shadow-md">
                      <button
                       onClick={()=>handleRoute(route?.route2)}
                        className="block w-full text-center rounded-lg border border-transparent bg-red-900 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-red-700"
                        aria-describedby="tier-growth"
                      >
                        {btnName}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
              <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                <div className="flex-1 flex flex-col">
                  <div className="bg-white px-6 py-10">
                    <div>
                      <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                      {pakageName?.p3}
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                        <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                          <span className="mt-2 mr-2 text-4xl font-medium">$</span>
                          <span className="font-extrabold">{Price?.price3}</span>
                        </span>
                   
                      </div>
                      <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                        <span className="mt-2 mr-2 text-3xl font-medium">{time?.t3}</span>
                        
                      </span>
                    
                    </div>
                    </div>
                  </div>
                  <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                    <ul role="list" className="space-y-4 max-h-60 overflow-scroll noScroll">
                      {list3.map((feature) => (
                        <li key={feature} className="flex items-start">
                          <div className="flex-shrink-0">
                            <CheckIcon className="flex-shrink-0 h-6 w-6 text-green-500" aria-hidden="true" />
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">{feature}</p>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-8">
                      <div className="rounded-lg shadow-md">
                        <button
                          onClick={()=>handleRoute(route?.route3)}
                          className="block w-full text-center rounded-lg border border-transparent bg-white px-6 py-3 text-base font-medium text-red-800 hover:bg-gray-50"
                          aria-describedby="tier-scale"
                        >
                          {btnName}
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  )
}

export default InnerPricing