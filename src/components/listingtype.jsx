import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ListingType = () => {
  const [selectedType, setSelectedType] = useState('');
  const [disabled, setDisabled] = useState(true);
  const navigate = useNavigate()

  const handleSelectChange = (event) => {
    const newValue = event.target.value
    setSelectedType(newValue);


    if (newValue.length > 0) {
        setDisabled(false);
      } else {
        setDisabled(true);
      }
  };

  const handleSubmit = () => {
    console.log('Selected listing type:', selectedType);
    navigate("/form/listingtypedetails",{state:selectedType})
    
  };

  return (
    <div className='flex justify-center '>
      <div className='cont max-w-[700px] md:w-[40%]  border border-black mt-20 bg-white'>
        <div className='flex flex-row justify-between border-b border-b-gray-400 w-full p-5'>
          <p>Select your type of listing.</p>
        </div>
        <div className='p-5 flex flex-col items-start'>
          <select
            value={selectedType}
            onChange={handleSelectChange}
            className='pl-4 text-black w-full border border-black h-12 transition-all outline-none cursor-pointer'
          >
            <option value=''>Select</option>
            <option value='apartment'>Apartment</option>
            <option value='housing'>House</option>
            <option value='workspace'>CoWorking Space</option>
          </select>
        </div>
        <div className='px-5 pt-6 pb-10'>
          <button className={`w-full p-3 ${disabled ? 'bg-gray-600' : 'bg-black'} text-white`} disabled={disabled} onClick={handleSubmit}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
};

export default ListingType;
