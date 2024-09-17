import React, { useState, lazy, Suspense } from 'react';
import { MdKeyboardArrowLeft } from "react-icons/md";
import { PiWarningCircleThin } from "react-icons/pi";
const Mapcomponent = lazy(()=>import("./mapcomponent"))


const Mapform = () => {
  const [address, setAddress] = useState('');
  const [inputValue, setInputValue] = useState('');

  // Default locations to show before the user inputs anything
  const defaultLocations = [
    { address: 'No.4, Maha Close, Barnawa Kaduna', lat: '10.47661', lng: '7.43039' },
  ];

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSubmit = () => {
    if (inputValue.trim()) {
      setAddress(inputValue);
      setInputValue('');
    }
  };

  // If the user has input an address, override default locations with the new one
  const locationObject = address
    ? [{ address, lat: null, lng: null }] // New user-provided address
    : defaultLocations; // Show default locations initially

  return (
    <div className='flex justify-center w-full'>
      <div className='cont max-w-[700px] md:w-[40%]  min-h-[400px] border border-black my-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Location</p>
          <div className='flex flex-row gap-1 items-center cursor-pointer' onClick={() => console.log("back")}>
            <MdKeyboardArrowLeft />
            Back
          </div>
        </div>
        <div className='p-5 flex flex-col items-start'>
          <p className='w-[270px] text-left'>
            Where is your property located? Please provide the exact address
          </p>
          <label className='py-3'>Address</label>
          <input
            type='text'
            value={inputValue}
            placeholder='No.4, Maha Close, Barnawa Kaduna'
            onChange={handleInputChange}
            className='peer pl-4 text-black w-full border border-black h-12 transition-all outline-none placeholder-gray-400 focus-visible:outline-none disabled:cursor-not-allowed'
          />
          <div className='flex flex-row gap-1 pt-2 pb-4'>
            <PiWarningCircleThin />
            <p className='text-[10px] text-black'>
              Full address would only be disclosed to guests who have booked.
            </p>
          </div>
        </div>
        <div className='p-5'>
          <div className='border border-black h-full w-full'>
            {/* Always render the map, but it switches to user input once address is set */}
            <Suspense fallback={<div>Loading map...</div>}>
              <Mapcomponent mapHeight='200px' locations={locationObject} />
            </Suspense>
          </div>
        </div>
        <div className='px-5 pt-6 pb-10'>
          <button className='w-full p-3 bg-black text-white' onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default Mapform;
