import React from "react";
import "./availableListing.css";
import mark from "../svgs/mark.svg";
import sun from "../svgs/Sun.svg";
import temp from "../svgs/temp.svg";
import sky from "../svgs/sky.svg";
import buttonlogo from "../svgs/buttonLogo.svg";
import guage from "../svgs/guage.svg";
import partone from "../svgs/partOne.svg";
import parttwo from "../svgs/partTwo.svg";
import partthree from "../svgs/partThree.svg";
import partfour from "../svgs/partFour.svg";
import partfive from "../svgs/partFive.svg";
import partsix from "../svgs/partSix.svg";
import partseven from "../svgs/partSeve.svg";
import parteight from "../svgs/partEigh.svg";
import watcheye from "../svgs/watcheye.svg";

const availableListing = () => {
  return (
    <div>
      <div className="container">
        <div class="header">
          <div className="right-section">
            <div className="logo">
              <h1 className="avail-header">Available listings.</h1>
            </div>
            <div className="proper">
              <div className="proElement">
                <span className="price">Price</span>
                <img src={mark} alt="mark" />
              </div>
              <div className="proElement">
                <span className="proType">Property Type</span>
                <img src={mark} alt="mark" />
              </div>
            </div>
            <div className="weather">
              <div className="weaImages">
                <img className="templogo" src={sun} alt="sunicon" />
                <img className="templogo" src={temp} alt="sunicon" />
                <img className="templogo" src={sky} alt="sunicon" />
                <span className="temp-text">30°</span>
              </div>
              <div className="location">
                <span>Kaduna, Nigeria</span>
              </div>
            </div>
            <button className="map-btn">
              Open Map <img class="btn-logo" src={buttonlogo} alt="btnl" />
            </button>
          </div>
          <div className="filters">
            <div className="filterGuage">
              <span>$</span>
              <img id="guage" src={guage} alt="guage" />
              <span>N</span>
            </div>
            <input
              className="fil-text"
              type="text"
              placeholder="Choose a city"
            />
            <input id="fil-timeRight" type="text" placeholder="Check in" />
            <input id="fil-timeLeft" type="text" placeholder="Check out" />
            <input className="guest-text" type="number" placeholder="Guests" />
            <button>Search</button>
          </div>
        </div>

        <div className="listings-grid">
          <div className="listing">
            <img className="listImg" src={partone} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>

            <div className="listing-details">
              <h3>Chill Marble Home - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={parttwo} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="avail">
                 Unavailable till 27th june 2021
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>Grey Berry Estate - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={partthree} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>White Square Estate - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={partfour} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>Warm Family House - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>
          <div className="listing">
            <img id="listImg" src={partfive} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>Chill Marble Home - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={partsix} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>Grey Berry Estate - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={partseven} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>White Square Estate - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>

          <div className="listing">
            <img className="listImg" src={parteight} alt="Listing" />
            <div className="pricee">
              <div className="price-details">STARTING FROM</div>
              <div className="price-price">₦700,000</div>
            </div>
            <div className="watch">
              <div className="watch-eye">
                <img id="wt-logo" src={watcheye} alt="watch" />
              </div>
              <div className="watch-num">20</div>
            </div>
            <div className="listing-details">
              <h3>Warm Family House - Kaduna, Nigeria</h3>
              <p>5 Bedrooms • 3 Bathrooms • 3,339sqft • Swimming Pool</p>
              <p>
                <img id="btn-logo" src={buttonlogo} alt="btnlogo" />
                Barnawa. Kaduna
              </p>
              <button>View Listing</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default availableListing;
