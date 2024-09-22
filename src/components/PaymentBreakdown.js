import React from 'react';

const PaymentBreakdown = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-8">
        <div className="flex justify-between items-center border-b pb-4 mb-4">
          <h1 className="text-xl font-bold">Price breakdown</h1>
          <button className="text-gray-600 hover:text-black">{'< Back'}</button>
        </div>

        <p className="text-gray-500 mb-6">Here is a breakdown of what you'll be paying for:</p>

        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span>Price (20 Nights)</span>
            <span className="font-bold">₦1,400,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Service Charge</span>
            <span className="font-bold">₦9,000</span>
          </div>
          <div className="flex justify-between items-center">
            <span>Tax (7%)</span>
            <span className="font-bold">₦98,000</span>
          </div>
        </div>

        <div className="border-t mt-4 pt-4">
          <div className="flex justify-between items-center text-xl font-bold">
            <span>Total</span>
            <span>₦1,507,000</span>
          </div>
        </div>

        <button className="w-full mt-6 bg-black text-white py-2 rounded hover:bg-gray-800 transition duration-300">
          Make Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentBreakdown;

