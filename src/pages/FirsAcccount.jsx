

import React from 'react';
import {Link} from "react-router-dom"
import  "./FirstAccount.css";
import cross from "../svgs/../svgs/cross.svg"

function Header() {
  return (
    <section className='section'>
      <div className="Create">
        <h1>Create Account</h1>
      </div>
      <aside className= "aside">
        <div className="close">
          <div className="ima" >Close <img src={cross} alt="ca"/></div>
  
        </div>
   
      </aside>
    </section>
  );
}

function PhoneNumberForm() {
  return (
    <div className='phone-num'>
      <h2>PHONE NUMBER</h2>
      <div className="box">

        <section id="number">
          <select className='select' id="countryCode" name="countryCode">
            <option value="+234">(+234) Nigeria </option>
            <option value="+233">Ghana (+233)</option>
            <option value="+228">Togo (+228)</option>
            <option value="+55">Brazil (+55)</option>
            <option value="+1">USA (+1)</option>
            <option value="+1">Canada (+1)</option>
            <option value="+598">Uruguay (+598)</option>
            <option value="+34">Spain (+34)</option>
            <option value="+351">Portugal (+351)</option>
          </select>
          <aside className="enter">
            <input type="text" placeholder="Enter your phone number" />
          </aside>
        </section>
      </div>
    </div>
  );
}

function SubmitButton() {
  return (
    <button className="btnn">
     <Link> Submit phone number</Link>
    </button>
  );
}

function FirsAcccount() {
  return (
    <main className='main'>
      <Header />
      <div className='conable'>
      <div id="add">
        <h1>Add and confirm your <br /> phone number</h1>
      </div>
      <article className= "article">
        <p>
          This will enable RealHubAfrica to verify <br />
          your account and reach you easily.
        </p>
        
      </article>
      </div>
      <PhoneNumberForm />
      <div  className= "we">
        <p>
          We will send you a secure code to confirm your phone number, charges
          may apply.
        </p>
      </div>
      <SubmitButton />
    </main>
  );
}

export default FirsAcccount;