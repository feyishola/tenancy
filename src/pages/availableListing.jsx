import React from "react";
import "./availableListing.css";
import mark from "../svgs/mark.svg";
import sun from "../svgs/Sun.svg";
import temp from "../svgs/temp.svg";
import sky from "../svgs/sky.svg";

import guage from "../svgs/guage.svg";
import partone from "../svgs/partOne.svg";
import parttwo from "../svgs/partTwo.svg";
import partthree from "../svgs/partThree.svg";
import partfour from "../svgs/partFour.svg";
import partfive from "../svgs/partFive.svg";
import partsix from "../svgs/partSix.svg";
import buttonlogo from "../svgs/buttonLogo.svg";
import partseven from "../svgs/partSeve.svg";
import parteight from "../svgs/partEigh.svg";
import { Link, useNavigate } from "react-router-dom";
import Listingcard from "../components/listingcard";


const listings = [
  {
    img: partone,
    price: "₦700,000",
    address: "White Square Estate - Kaduna, Nigeria",
    watchNum: "20",
    amenities: "5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool",
    location: "Barnawa, Kaduna",
    available: true,
  },
  {
    img: parttwo,
    price: "₦850,000",
    address: "Luxury Apartments - Lagos, Nigeria",
    watchNum: "15",
    amenities: "3 Bedrooms • 2 Bathrooms • 2,500sqft • Gym",
    location: "Victoria Island, Lagos",
    available: true,
  },
  {
    img: partthree,
    price: "₦1,200,000",
    address: "Ocean View Villas - Port Harcourt, Nigeria",
    watchNum: "25",
    amenities: "6 Bedrooms • 4 Bathrooms • 4,500sqft • Beach Access",
    location: "GRA, Port Harcourt",
    available: false,
  },
  {
    img: partfour,
    price: "₦500,000",
    address: "Affordable Homes - Abuja, Nigeria",
    watchNum: "10",
    amenities: "2 Bedrooms • 1 Bathroom • 1,200sqft • Parking Space",
    location: "Jabi, Abuja",
    available: true,
  },
  {
    img: partfive,
    price: "₦650,000",
    address: "Green Valley Estate - Enugu, Nigeria",
    watchNum: "12",
    amenities: "4 Bedrooms • 3 Bathrooms • 3,000sqft • Garden",
    location: "Independence Layout, Enugu",
    available: false,
  },
  {
    img: partsix,
    price: "₦900,000",
    address: "Sunshine Residences - Ibadan, Nigeria",
    watchNum: "30",
    amenities: "5 Bedrooms • 3 Bathrooms • 3,500sqft • Private Parking",
    location: "Oluyole Estate, Ibadan",
    available: true,
  }
  ,
  {
    img: partseven,
    price: "₦1,200,000",
    address: "Ocean View Villas - Port Harcourt, Nigeria",
    watchNum: "25",
    amenities: "6 Bedrooms • 4 Bathrooms • 4,500sqft • Beach Access",
    location: "GRA, Port Harcourt",
    available: false,
  },
  {
    img: parteight,
    price: "₦500,000",
    address: "Affordable Homes - Abuja, Nigeria",
    watchNum: "10",
    amenities: "2 Bedrooms • 1 Bathroom • 1,200sqft • Parking Space",
    location: "Jabi, Abuja",
    available: true,
  },
];


const AvailableListing = () => {

const navigate = useNavigate();

  return (
    <div>
      <div className="">
        <div className="header">
          <div className="right-section">
            <div className="logo">
              <h1 className="avail-header">Available listings.</h1>
            </div>
            <div className="proper" style={{width:"15%", display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
              <div className="proElement">
                <span className="price">Price</span>
                <img src={mark} alt="mark" />
              </div>
              <div className="proElement">
                <span className="proType">Property Type</span>
                <img src={mark} alt="mark" />
              </div>
            </div>
            <div className="weather" style={{width:"20%", }}>
              <div className="weaImages" style={{display:"flex", flexDirection:"row", justifyContent:"space-between"}}>
                <img className="templogo" src={sun} alt="sunicon" />
                <img className="templogo" src={temp} alt="sunicon" />
                <img className="templogo" src={sky} alt="sunicon" />
                <span className="temp-text">30°</span>
              </div>
              <div className="location" style={{textAlign:"center" }}>
                <span>Kaduna, Nigeria</span>
              </div>
            </div>
              <button className="map-btn" onClick={()=>{navigate("/searchbar/availablelistingmap",{state:""})}}>           
                Open Map <img className="btn-logo" src={buttonlogo} alt="btnl"  />
              </button>
          </div>
          <div className="filters" style={{justifyContent:"space-around"}}>
            <div className="filterGuage">
              <span>$</span>
              <img id="guage" src={guage} alt="guage" />
              <span>N</span>
            </div>
            <div>
              <input
                className="fil-text"
                type="text"
                placeholder="Choose a city"
              />
              <input id="fil-timeRight" type="text" placeholder="Check in" />
              <input id="fil-timeLeft" type="text" placeholder="Check out" />
              <input className="guest-text" type="number" placeholder="Guests" />
              <button style={{height:"38px"}}>Search</button>
            </div>
          </div>
        </div>

        <div className="listings-grid">
          {listings.map((listing, index) => (
            <Listingcard
              key={index}
              img={listing.img}
              price={listing.price}
              address={listing.address}
              watchNum={listing.watchNum}
              amenities={listing.amenities}
              location={listing.location}
              onClick={() => navigate("/propertydetails")}
              available={listing.available}
            />
          ))}
        </div>

      </div>
    </div>
  );
};

export default AvailableListing;
