
import React, { useState } from 'react';
import './ImageUploader.css';
import { FaAngleLeft } from "react-icons/fa";


const ImageUploader = () => {
  const [images, setImages] = useState([]);
  const [errorMessage, setErrorMessage] = useState('');

  // Handler for uploading images
  const handleImageUpload = (e) => {
    const files = Array.from(e.target.files);
    
    if (images.length + files.length > 30) {
      setErrorMessage('You can upload a maximum of 30 images.');
    } else {
      setImages(prevImages => [...prevImages, ...files]);
      setErrorMessage('');
    }
  };

  // Handler for drag and drop
  const handleDrop = (e) => {
    e.preventDefault();
    const files = Array.from(e.dataTransfer.files);
    
    if (images.length + files.length > 30) {
      setErrorMessage('You can upload a maximum of 30 images.');
    } else {
      setImages(prevImages => [...prevImages, ...files]);
      setErrorMessage('');
    }
  };

  const handleDragOver = (e) => {
    e.preventDefault();
  };

  return (
    <div className="upload-page-container">
      {/* Header Section */}
      <div className="header-container">
        <h2>Upload Images</h2>
        <span>
        <a href="#" className="back-link"> <FaAngleLeft /> Back</a>
        </span>
      </div>

      {/* Description */}
      <div className="description-container">
        <p>We'd love to see some images of your listing.<br />You can upload as many as 30 images.</p>
      </div>

      {/* Drag and Drop Area */}
      <div 
        className="upload-box" 
        onDrop={handleDrop} 
        onDragOver={handleDragOver}
      >
        <div className="upload-placeholder">
          <span className="upload-icon">🖼️</span>
          <p>Drag and drop images or</p>
          <label className="upload-button">
            <input 
              type="file" 
              multiple 
              accept="image/*"
              onChange={handleImageUpload} 
            />
            Click Here to upload from your device
          </label>
        </div>
      </div>

      {/* Error Message */}
      {errorMessage && <p className="error-message">{errorMessage}</p>}

      {/* Image Previews */}
      {images.length > 0 && (
        <div className="image-preview-container">
          {images.map((image, index) => (
            <div key={index} className="image-preview">
              <img src={URL.createObjectURL(image)} alt={`preview-${index}`} />
            </div>
          ))}
        </div>
      )}

      {/* Continue Button */}
      <div className="continue-button-container">
        <button 
          className={`continue-btn ${images.length > 0 ? 'active' : ''}`} 
          disabled={images.length === 0}
        >
          Continue
        </button>
      </div>

    </div>
  );
};

export default ImageUploader;
