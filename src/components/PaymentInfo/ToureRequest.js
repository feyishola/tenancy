import React from "react";
import "./TourRequest.css";
import dotted from "../../svgs/dotted.svg";
import completed from "../../svgs/completed.svg";
import scheduled from "../../svgs/scheduled.svg";
import pending from "../../svgs/pending.svg";
import cancel from "../../svgs/canceled.svg";

const TenancyDetails = () => {
  const data = [
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Tour Completed",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Tour Rescheduled",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Cancel",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Pending",
    },
    {
      property: "Gabby's Minimalistic Home.",
      location: "No.4 Barnawa, Kaduna, Nigeria",
      renter: "Osamudiamen Imasuen",
      contact: "+234 817 294 8113",
      email: "simudafavidavid3@gmail.com",
      leasePeriod: "Feb 20th, 2021",
      duration: "10am",
      type: "Cancel",
    },
    // Add more data entries here as needed
  ];
  const imageMap = {
    "Tour Completed": completed,
    "Tour Rescheduled": scheduled,
    Pending: pending,
    Cancel: cancel,
  };
  const getStatusColor = (type) => {
    if (type.toLowerCase().includes("tour")) {
      return "#C3E7BE"; // for rendering color for short lease
    } else if (type.toLowerCase().includes("cancel")) {
      return "#E7C0BE"; // for rendering color for rent
    } else if (type.toLowerCase().includes("pending")) {
      return "#EBE7DE"; // Hex for other items
    }
    return "yellow"; // Default gray for unknown status
  };

  return (
    <div className="tenancy-details">
      {/* Header Section */}
      <div className="header-section">
        <div className="filter-section">
          <label>Sort By</label>
          <br />
          <select>
            <option>All</option>
          </select>
        </div>
        {/* <div className="total-amounts">
          <div className="total-made">
            <h4>Total Amount Made</h4>
            <p>₦14,000,000.00</p>
          </div>
          <div className="total-withdrawal">
            <div>
              <h4>Total Amount Withdrawable</h4>
              <p>₦8,900,000.00</p>
            </div>
            <div className="amount-image">
              <img src={dotted} alt="dot" />
            </div>
          </div>
        </div> */}
      </div>

      {/* Transactions Section */}
      <div className="transactions-list">
        {data.map((item, index) => {
          const imageToRender =
            imageMap[item.type] || "path-to-default-image.jpg";
          return (
            <div key={index} className="transaction-item">
              <div className="property-info">
                <h4>{item.property}</h4>
                <p>{item.location}</p>
              </div>
              <div className="property-info">
                <h4>{item.renter}</h4>
                <p>
                  {item.contact} | {item.email}
                </p>
              </div>
              <div className="lease-info">
                <h4>{item.leasePeriod}</h4>
                <p>{item.duration}</p>
              </div>
              <div
                className="type-info"
                style={{
                  backgroundColor: getStatusColor(item.type), // Conditionally apply color
                }}
              >
                {" "}
                <img src={imageToRender} alt={item.type} /> {item.type}
              </div>
              <div className="dot-image">
                <img src={dotted} alt="dot" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TenancyDetails;
