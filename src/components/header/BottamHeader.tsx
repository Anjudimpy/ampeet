'use client'
import React, { useState } from 'react'
import logo from '../../images/ameee/amplogo.png';
import Image from 'next/image';
import { IoMdCart, IoMdMenu, IoMdSearch } from 'react-icons/io';
import { CgMenuGridR } from 'react-icons/cg';
import { HiDotsVertical } from 'react-icons/hi';
import { RiArrowDownSLine } from 'react-icons/ri';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import { stateProps } from "../../../type";

const BottamHeader = () => {
  const dispatch = useDispatch();
  const { productData } = useSelector((state: stateProps) => state.next);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className='font-serif bg-slate-50 w-full sticky top-0 z-50 h-auto md:px-11 xl:px-11 lg:px-11'>
      <div className='flex items-center justify-between h-[100px] px-4'>
        <div>
          <Image src={logo} alt='logoimg' className='lgl:w-[180px] lgl:h-14 xs:w-[150px] xs:h-12' />
          <span className='lgl:text-[10px] xs:text-[8px] px-2 font-bold text-amp_red'>
            Ampee Engineering Tools & Fab
          </span>
        </div>

        {/* Small Screen Menu Icon */}
        <div className='flex xl:hidden lgl:hidden gap-3'>
          <span className='font-bold mt-1 cursor-pointer' onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <IoMdMenu className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red transition-colors duration-300' />
          </span>
          <span className='font-bold mt-1'>
            <HiDotsVertical className='text-[38px] p-1 bg-amp_blue text-white hover:bg-amp_red transition-colors duration-300' />
          </span>
        </div>

        {/* Large Screen Menu */}
        <div className='hidden lgl:flex items-center text-amp_blue gap-4 font-bold'>
          <Link href='/' className='hover:text-amp_red'>Home</Link>
          <Link href='/about' className='hover:text-amp_red'>About</Link>

          <select className="outline-none hover:text-amp_red bg-transparent">
            <option>Services</option>
            <option className="text-gray-700">Option 1</option>
            <option className="text-gray-700">Option 2</option>
          </select>

          {/* Product Dropdown */}
          <div className='group relative cursor-pointer hover:text-amp_red'>
            <div className='flex items-center'>
              Product <RiArrowDownSLine className='ml-1' />
            </div>
            <div className='absolute hidden group-hover:flex flex-col bg-white shadow-md w-60 top-full mt-1 z-10'>
              {["Gel", "Consumables", "Calibration Block", "NDT Probes & Accessories", "Safety Accessories", "Welding Equipment & Accessories"].map((item, i) => (
                <div key={i} className='p-2 border-b hover:bg-gray-100'>{item}</div>
              ))}
            </div>
          </div>

          {/* Shop Dropdown */}
          <div className='group relative cursor-pointer hover:text-amp_red'>
            <Link href='/shop' className='flex items-center'>
              Shop <RiArrowDownSLine className='ml-1' />
            </Link>
            <div className='absolute hidden group-hover:flex flex-col bg-white shadow-md w-52 top-full mt-1 z-10'>
              <Link href='/shop'><div className='p-2 border-b hover:bg-gray-100'>Shop</div></Link>
              <div className='p-2 border-b hover:bg-gray-100'>Check Out</div>
              <div className='p-2 hover:bg-gray-100'>My Account</div>
            </div>
          </div>

          <Link href='/contact' className='hover:text-amp_red'>Contact</Link>

          <IoMdSearch className="p-2 shadow-md text-[30px] h-10 w-10 rounded-full hover:bg-amp_red hover:text-white" />
          <Link href="/cart" className='relative'>
            <IoMdCart className="p-2 shadow-md text-[30px] h-10 w-10 rounded-full hover:bg-amp_red hover:text-white" />
            <span className='absolute text-amp_red text-sm -top-1 right-[13px]'>
              {productData ? productData.length : 0}
            </span>
          </Link>
          <CgMenuGridR className='text-[38px] hover:text-amp_red' />
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className='flex flex-col bg-white px-4 py-3 xl:hidden lgl:hidden text-amp_blue font-bold gap-2'>
          <Link href='/' className='hover:text-amp_red'>Home</Link>
          <Link href='/about' className='hover:text-amp_red'>About</Link>
          <div>
            <select className="w-full bg-transparent border-b border-gray-300 outline-none">
              <option>Services</option>
              <option>Option 1</option>
              <option>Option 2</option>
            </select>
          </div>
          <div className='hover:text-amp_red'>Products</div>
          <Link href='/shop' className='hover:text-amp_red'>Shop</Link>
          <Link href='/contact' className='hover:text-amp_red'>Contact</Link>
        </div>
      )}
    </div>
  )
}

export default BottamHeader;
