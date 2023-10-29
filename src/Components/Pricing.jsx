import React from "react";
import { CheckIcon } from "@heroicons/react/outline";
import { useNavigate } from "react-router-dom";

const Pricing = ({
  title,
  type,
  price,
  time,
  decription,
  list,
  btnName,
  route,
  bgColor,
  textColor,
  btnBgColor,
  btnTextColor,
}) => {
  const navigation = useNavigate();
  const handleRoute = (route) => {
    navigation(`/signup-form`, {
      state: { route: route },
    });
  };
  return (
    <div class="mx-auto w-full max-w-md">
      {/* <!-- Price 3 Card --> */}
      <div
        class={`overflow-hidden rounded-md ${bgColor} p-10 text-white sm:w-full sm:flex-initial`}
      >
        <div class="mb-4 flex flex-row gap-4 max-[991px]:flex-wrap">
          <div class="flex items-center gap-1.5 rounded-[4px] bg-white px-4 py-1.5">
            <p class="text-sm font-bold text-black sm:text-sm">{title}</p>
          </div>
          <div class="rounded-[4px] bg-[#1e1e1e] px-4 py-1.5">
            <p class="text-sm font-bold text-white">{type}</p>
          </div>
        </div>
        <h2
          class={`mb-5 text-3xl font-bold md:mb-6 md:text-5xl lg:mb-8 ${textColor}`}
        >
          {price}
          <span class="text-sm font-light">/{time}</span>
        </h2>
        <p
          class={`text-body mb-5 font-light text-[#ffffff] md:mb-6 lg:mb-8 ${textColor}`}
        >
          {decription}
        </p>

        <button
          onClick={() => handleRoute(route)}
          class={`inline-block w-full rounded-md ${btnBgColor} px-6 py-3 text-center font-semibold ${btnTextColor}`}
        >
          {btnName}
        </button>
        <div class="mt-10 space-y-4 max-h-60 overflow-y-auto noScroll bg-white rounded-md p-6">
          <ul
            role="list"
            className="space-y-4 max-h-60 overflow-scroll noScroll"
          >
            {list.map((e) => (
              <li key={e.id} className="flex items-start">
                <div className="flex-shrink-0">
                  <CheckIcon
                    className="flex-shrink-0 h-6 w-6 text-green-500"
                    aria-hidden="true"
                  />
                </div>
                <p className="ml-3 text-base font-medium text-gray-500">
                  {e.p}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Pricing;
