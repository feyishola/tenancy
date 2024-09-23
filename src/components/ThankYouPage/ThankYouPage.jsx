import React from 'react';
import './ThankYouPage.css'; 
import { MdOutlineGppGood } from "react-icons/md";


const ThankYouPage = () => {

  return (
    <div className="thank-you-container">
      <div className="thank-you-content">
        <div className="icon-img">
        <p><MdOutlineGppGood />  </p>  
        </div>
        <p className="message">
          Your payment has been <br /> completed and it is being held in <br /> our secure escrow until all parties <br /> have been satisfied.
        </p>
        <button className="return-home-btn">
          Thank You! Return Home
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
