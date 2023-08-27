// import React from 'react'
import React, { useState } from "react";
import CreateTaskPopup from "./CreateTaskPopup";
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';
import AvatarEditor from 'react-avatar-editor';

function Header() {
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const togglePopup = () => {
    setIsPopupOpen(!isPopupOpen);
  };
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    };

    const [selectedImage, setSelectedImage] = useState(null);
    const [scale, setScale] = useState(1);
  
    const handleImageChange = (e) => {
      setSelectedImage(URL.createObjectURL(e.target.files[0]));
    };
  
    const handleScaleChange = (e) => {
      setScale(parseFloat(e.target.value));
    };

  return (
    <>
    <div className='header'>
      <div className='left-header'>
        <div><button className='create-button' onClick={togglePopup}><span>+</span> Create Task</button></div>
        <div><hr className='hr'/></div>
        <div className='searchBar'><input placeholder='Search your query' className='search-input'/>
        </div>
      </div>
      <div className='right-header'>
        <div className='naming-input-box'>
          <input placeholder='Intkhab Alam | Software Developer' className='naming-input'/>
        </div>
        <div className="profile-image">
        <input type="file" accept="image/*" onChange={handleImageChange} className="choose-image"/>
        {selectedImage && (
          <AvatarEditor
            image={selectedImage}
            width={30}
            height={30}
            border={0}
            // color={[255, 255, 255, 0.6]} // Background color with alpha
            scale={scale}
          />
        )}
      </div>
      {/* {selectedImage && (
        <div className="scale-control">
          <label>
            Scale:
            <input
              type="range"
              min="1"
              max="2"
              step="0.01"
              value={scale}
              onChange={handleScaleChange}
            />
          </label>
        </div>
      )} */}
        </div>
        <div className='drop-down'>
        <button className="dropdown-button" onClick={toggleDropdown}><FontAwesomeIcon icon={faChevronDown} />
      </button>
        </div>
      </div>
    {isPopupOpen && <CreateTaskPopup onClose={togglePopup} />}
    </>
  )
}

export default Header;