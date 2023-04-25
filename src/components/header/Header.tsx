import { Fragment } from 'react'
import { Menu,Transition } from '@headlessui/react'
import { HiUserCircle,HiOutlineBell,HiOutlineCog6Tooth } from "react-icons/hi2";
function Header() {
  return (
    <div className="w-full absolute bg-white h-20 p-2">
        <div className="grid grid-cols-12 gap-4 p-4">
            <div className="col-start-3 col-span-2">
                <div className="flex relative justify-center align-middle">
                  <div className="flex-column flex justify-center relative gap-2 cursor-pointer">
                        <p className="text-emerald-950 text-md p-1">Filter:</p>
                        <div className="">
                          <select name="" id="" className="text-emerald-950 text-md rounded-md p-1 bg-white border-2 border-emerald-950 mx-2 cursor-pointer">
                            <option value="">Last week</option>
                            <option value="">Last Month</option>
                            <option value="">Last year</option>
                          </select>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-end-12 col-span-2">
                <div className="flex relative align-middle justify-center gap-4">
                  <div className="flex-column cursor-pointer">
                    <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button>
                        <HiOutlineCog6Tooth className="text-emerald-950 text-3xl" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 1</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 2</a>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>                
                  <div className="flex-column cursor-pointer">
                  <Menu as="div" className="relative inline-block text-left">
                      <Menu.Button>
                        <HiOutlineBell className="text-emerald-950 text-3xl" />
                      </Menu.Button>
                      <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 1</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 2</a>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                    </Menu>
                  </div>
                  <div className="flex-column flex justify-center relative gap-2 cursor-pointer">
                      <Menu as="div" className="relative inline-block text-left">
                        <Menu.Button className="inline-flex w-full justify-center gap-x-1.5 bg-white text-lg hover:bg-gray-50">
                          <HiUserCircle className="text-emerald-950 text-3xl" />
                          <a className="text-emerald-950 text-md">John smith</a>
                        </Menu.Button>
                        <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                      >
                        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 1</a>
                          </Menu.Item>
                          <Menu.Item>
                            <a className="text-gray-700 block px-4 py-2 text-sm">Test 2</a>
                          </Menu.Item>
                        </Menu.Items>
                      </Transition>
                      </Menu>
                  </div>  
                </div>
            </div>
        </div>
    </div>
  )
}

export default Header