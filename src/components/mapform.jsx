import React, { useState } from 'react'
import Mapcomponent from './mapcomponent'
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiWarningCircleThin } from "react-icons/pi";

const Mapform = () => {
  const [address, setAddress] = useState('');
  const [inputValue, setInputValue] = useState('')
  
  const handleInputChange = (e)=>{
    setInputValue(e.target.value);
  }

  const handleSubmit = ()=>{
    if (inputValue.trim()) {
      setAddress(inputValue);
      setInputValue('');
    }
  }

  return (
    <div className='flex justify-center w-full'>
      <div className='cont max-w-[500px] md:w-[500px] min-h-[400px] border border-black mt-20'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Location</p>
          <div className='flex flex-row gap-1 items-center'>
            <MdKeyboardArrowLeft/>
            Back
          </div>
        </div>
        <div className='p-5 flex flex-col items-start'>
          <p className='w-[270px] text-left'>Where is your property located? 
          Please provide the exact address</p>

          <label className='py-3'>Address</label>
          <input type='text' value={inputValue} placeholder='No.4, Maha Close, Barnawa Kaduna' onChange={handleInputChange} className='peer pl-4 text-black w-full border border-black h-12 transition-all outline-none autofill:bg-white placeholder-gray-400  invalid:border-pink-500 invalid:text-pink-500 focus-visible:outline-none disabled:cursor-not-allowed disabled:bg-slate-50 disabled:text-slate-400'/>
          <div className='flex flex-row gap-1 pt-2 pb-4'>
            <PiWarningCircleThin/>
            <p className='text-[10px] text-black'>Full address would only be disclosed to guests who have booked.</p>
          </div>
          

        </div>
        <div className='p-5'>
          <div className='border border-black h-full w-full'>
            <Mapcomponent mapHeight='200px' location={address}/>
          </div>
        </div>
        <div className='px-5 pt-6 pb-10'>
          <button className='w-full p-3 bg-black text-white' onClick={handleSubmit}>continue</button>
        </div>
        
      </div>
    </div>
  )
}

export default Mapform