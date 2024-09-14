import React, { useState } from "react";
import "./ImageGrid.css";
import imagett from "../components/image/imagett.svg";
import two from "../components/image/two.svg";
import three from "../components/image/three.svg";
import four from "../components/image/nine.svg";
import five from "../components/image/five.svg";
import six from "../components/image/six.svg";
import seven from "../components/image/seven.svg";
import eight from "../components/image/eight.svg";
import nine from "../components/image/nine.svg";

const images = [imagett, two, three, four, five, six, seven, eight, nine];

const ImageGrid = () => {
  const [uploadedImages, setUploadedImages] = useState(images);

  const handleDelete = (index) => {
    setUploadedImages(uploadedImages.filter((_, i) => i !== index));
  };

  const handleImageUpload = (e) => {
    const newImages = Array.from(e.target.files).map((file) =>
      URL.createObjectURL(file)
    );
    setUploadedImages([...uploadedImages, ...newImages]);
  };

  return (
    <div>
    <div className="cont">
      <div className="contOne">
        <div className="adpic">
          Upload Images
          </div>
            <div className="backg">
              <a href="#">Back</a>
            </div>
          </div>
        </div>     
      <div className="image-grid-container">
        <p class="mytext">
          we'd love to see images of your listing<br></br>
          you can upload as much as 30 images if you like
        </p>
        <div className="image-grid">
          {uploadedImages.map((image, index) => (
            <div key={index} className="image-item">
              <img src={image} alt={`uploaded-${index}`} />
              <button
                onClick={() => handleDelete(index)}
                className="delete-btn"
              >
                &times;
              </button>
            </div>
          ))}
        </div>

        <div className="upload-section">
          <input type="file" multiple onChange={handleImageUpload} />
          <p>Add more images</p>
        </div>
        <button type="submit" className="submit-btn">
          save image & continue
        </button>
        {/* <button className="save-btn">Save images & Continue</button> */}
      </div>
    </div>
  );
};

export default ImageGrid;
