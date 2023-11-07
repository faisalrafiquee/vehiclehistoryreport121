import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { BellIcon, MenuIcon, XIcon } from "@heroicons/react/outline";
import { Link, useLocation } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(" ");
  }
const Navbar = () => {
    let location = useLocation();
    let pathname = location.pathname;

    const navigation = [
        { name: "Home", href: "/", current: pathname == '/' ? true : false  },
        // { name: "Sample reports", href: "/sample-reports", current: pathname == '/sample-reports' ? true : false },
        // { name: "How to buy?", href: "/how-to-buy", current: pathname == '/how-to-buy' ? true : false },
        { name: "Car Report", href: "/car-report",current: pathname == '/car-report' ? true : false },
        { name: "Heavy Duty Truck Report", href: "/heavy-duty-truck-report", current: pathname == '/heavy-duty-truck-report' ? true : false },
        { name: "Motor Bikes Report", href: "/motor-bikes-reports", current: pathname == '/motor-bikes-reports' ? true : false },
        { name: "About us", href: "/about", current: false },
        // { name: "Review of reports", href: "/reviews-of-reports", current: pathname == '/reviews-of-reports' ? true : false },
        { name: "Contact us", href: "/contact", current:false },
      
      ];
  return (
    <Disclosure as="nav" className="bg-white">
    {({ open }) => (
      <>
        <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
          <div className="relative flex items-center justify-between h-16">
            <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
              {/* Mobile menu button*/}
              <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                <span className="sr-only">Open main menu</span>
                {open ? (
                  <XIcon className="block h-6 w-6" aria-hidden="true" />
                ) : (
                  <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                )}
              </Disclosure.Button>
            </div>
            <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
              <div className="flex-shrink-0 flex items-center">
                <img
                  className="block lg:hidden h-8 w-auto"
                  src="assets/images/logo.png"
                  alt="Workflow"
                />
                <img
                  className="hidden lg:block h-8 w-auto"
                  src="assets/images/logo.png"
                  alt="Workflow"
                />
              </div>
              <div className="hidden sm:block sm:ml-6">
                <div className="flex space-x-4 justify-center">
                  {navigation.map((item) => (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={classNames(
                        item.current
                          ? "bg-gray-900 text-white"
                          : "text-black hover:bg-gray-700 hover:text-white",
                        "px-3 py-2 rounded-md text-sm font-medium"
                      )}
                      aria-current={item.current ? "page" : undefined}
                    >
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
           
          </div>
        </div>

        <Disclosure.Panel className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                as="a"
                to={item.href}
                className={classNames(
                  item.current
                    ? "bg-gray-900 text-white"
                    : "text-gray-300 hover:bg-gray-700 hover:text-white",
                  "block px-3 py-2 rounded-md text-base font-medium"
                )}
                aria-current={item.current ? "page" : undefined}
              >
                {item.name}
              </Link>
            ))}
          </div>
        </Disclosure.Panel>
      </>
    )}
  </Disclosure>
  )
}

export default Navbar