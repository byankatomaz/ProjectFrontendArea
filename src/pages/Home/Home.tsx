import React, { useState } from 'react'
import { Header, History, Open } from 'components'

import { Input } from "@material-tailwind/react";
import { IoIosArrowDropright } from "react-icons/io";
import { RiHome2Line } from "react-icons/ri";
import { FaEnvelopeOpenText } from "react-icons/fa6";
import { FaRegCircleStop } from "react-icons/fa6";

export function Home() {

  const [open, setOpen] = useState(false)

  const [select, setSelect] = useState(0)

  // Opções de menu da navbar
  const Menus = [
    { title: 'Open Breakdowns', icon: <FaRegCircleStop className='w-10 h-6 absolute self-center ms-1' /> },
    { title: 'Breakdown History', icon: <FaEnvelopeOpenText className='w-10 h-6 absolute self-center ms-1' />, component: <History /> },
  ]

  return (
    <div>
      <Header />
      <div className='mt-3'>
        <div className='w-full flex flex-row border border-b-stone-950 justify-between  items-center'>
          <div className={`${open ? "w-72" : "w-20"} duration-300 h-screen bg-black relative`}>

            <IoIosArrowDropright
              className={`absolute cursor-pointer bg-white rounded-full -right-5 w-10 h-10 mt-10 ${open && 'rotate-180'}`}
              onClick={() => setOpen(!open)}
            />

            <div className='flex px-3 mt-8 gap-4'>
              <RiHome2Line className='text-white w-12 h-8 absolute m-1' />
              <div className='flex mx-20'>
                <h1 className={`text-white font-medium text-xl duration-300 self-center ${!open && 'scale-0'}`}>Home</h1>
              </div>
            </div>

            <ul className='pt-6'>
              {Menus.map((menu, index) => (
                <li key={index} className={`text-white flex flex-row gap-4 m-2 cursor-default p-2 hover:bg-gray-500 rounded-md ${select === index && 'bg-gray-500'}`} onClick={() => setSelect(index)}>

                  {menu.icon}
                  <div className='flex ms-14'>
                    <button className={`duration-300 self-center ${!open && 'scale-0'}`} >
                      {menu.title}
                    </button>

                  </div>
                </li>
              ))}
            </ul>

          </div>

          <div className='flex flex-col justify-between gap-x-10 self-start w-full items-center px-10 '>

            <div className='flex flex-row justify-between gap-x-10 self-start w-full p-10 items-center'>
              <div className="flex w-11/12 gap-x-10">
                <Input crossOrigin={undefined} placeholder="Pesquise" className='flex h-full p-2 w-11/12' />
              </div>

              <button className=' flex justify-center items-center p-5 w-56 h-10 bg-gray-600 text-white font-bold'>Create Breakdown</button>
            </div>

            <div className='w-full border-b-2 border-gray-900 '></div>

            {select === 0 && <Open />}
            {select === 1 && <History />}

          </div>
        </div>

      </div>
    </div>
  )
}