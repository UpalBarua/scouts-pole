import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  return (
    <>
      <div className="flex justify-between items-center px-6 md:px-4 lg:px-2">
        <div>
          <Link to="/">
            <h3 className="flex font-medium text-black">
              Scouts{" "}
              <span className="text-purple-600 font-bold pl-1">Pole</span>
            </h3>
          </Link>
        </div>
        <div className="hidden sm:block pt-2">
          <ul className="flex">
            <li className="px-2 py-2">
              <Link>Home</Link>
            </li>
            <li className="px-2 py-2">
              <Link>About</Link>
            </li>
            <li className="px-2 py-2">
              <Link>Vote</Link>
            </li>
            <li className="px-2 py-2">
              <Link>History</Link>
            </li>
          </ul>
        </div>
        <div className="sm:hidden top-16 w-56 text-right pt-5">
          <Menu as="div" className="relative inline-block text-left">
            <div>
              <Menu.Button className="-mt-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                  />
                </svg>
              </Menu.Button>
            </div>
            <Transition
              as={Fragment}
              enter="transition ease-out duration-100"
              enterFrom="transform opacity-0 scale-95"
              enterTo="transform opacity-100 scale-100"
              leave="transition ease-in duration-75"
              leaveFrom="transform opacity-100 scale-100"
              leaveTo="transform opacity-0 scale-95"
            >
              <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <div className="py-2 px-4">
                  <Menu.Item>
                    <Link to="/">
                      <button>Home</button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2 px-4">
                  <Menu.Item>
                    <Link to="/">
                      {" "}
                      <button>Pole</button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2 px-4">
                  <Menu.Item>
                    <Link to="/">
                      {" "}
                      <button>History</button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2 px-4">
                  <Menu.Item>
                    <Link to="/">
                      {" "}
                      <button>About</button>
                    </Link>
                  </Menu.Item>
                </div>
                <div className="py-2 px-4">
                  <Menu.Item>
                    <Link to="/">
                      {" "}
                      <button>Delete</button>
                    </Link>
                  </Menu.Item>
                </div>
              </Menu.Items>
            </Transition>
          </Menu>
        </div>
      </div>
    </>
  );
}
