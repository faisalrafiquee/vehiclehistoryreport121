import React from 'react'

const InnerHero = ({ id, title, description, link, btnTitle, imgPath ,handleButtonClick}) => {
  return (
    <div className="bg-gray-50">
    <div className="relative overflow-hidden">
      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24 sm:px-6">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-5xl">
              <span className="block text-red-800">{title}</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              {description}
            </p>
          </div>
          <div class="justify-center flex flex-row items-center gap-4 flex-wrap">
            <button
              onClick={handleButtonClick}
              class="inline-block items-center bg-red-800 rounded-md px-6 py-3 text-center font-semibold text-white mt-5"
            >
              {btnTitle}
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div className="absolute inset-0 flex flex-col" aria-hidden="true">
          <div className="flex-1" />
          <div className="flex-1 w-full bg-gray-800" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 w-full h-1/2">
          <img
            className="relative rounded-lg shadow-lg object-cover"
            src={imgPath}
            alt="App screenshot"
          />
        </div>
      </div>
    </div>
   
  </div>
  )
}

export default InnerHero