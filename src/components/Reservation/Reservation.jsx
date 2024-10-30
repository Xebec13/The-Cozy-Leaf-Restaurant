import React, { useState } from "react";
import "./reservation.css";

import { images, data } from "../../constants/index";

import { IoPeopleSharp } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const Reservation = () => {
  const [showForm, setShowForm] = useState(0); // stan do zarządzania widokiem formularza
  const [fadeStyle, setFadeStyle] = useState({ opacity: 1 });

  const handleReservationClick = () => {
    setShowForm(true); // zmień stan na true, aby pokazać formularz
  };

  const handleBackClick = () => {
    setShowForm(false); // zmień stan na false, aby pokazać sekcję rezerwacji
  };
  

  return (
    <section className="cozy-leaf__reservation-container" id='reservation'>
      {!showForm ? ( // jeśli showForm jest false, pokazuj sekcję rezerwacji
        <>
          <div className="cozy-leaf__reservation-info">
            <h1>{data.restaurantInfo[2].title}</h1>
            <p>{data.restaurantInfo[2].info}</p>
            <div className="cozy-leaf__reservation-buttons">
              <button onClick={handleReservationClick}>
                <IoPeopleSharp/> Reservation
              </button>
              <button>
                <MdLocalPhone/> 690 654 666
              </button>
            </div>
          </div>
          <div className="cozy-leaf__reservation-photo">
            <img src={images.pinkRestaurant} alt="warsaw" />
          </div>
        </>
      ) : ( // jeśli showForm jest true, pokazuj formularz rezerwacji
        <div className="cozy-leaf__reservation-form">
          <div className="cozy-leaf__reservation-form-image">
            <img src={images.headerRestaurant} alt="" />
          </div>
          <div className="cozy-leaf__reservation-form-info">
            <h1>Taste the Green Magic!</h1>
            <form>
              <input type="date" placeholder="Select Date" required />
              <input
                type="number"
                placeholder="Number of Guests"
                min="1"
                required
              />
              <input type="email" placeholder="Enter Your Email" required />
              <input type="tel" placeholder="Enter Your Phone Number" required />
              <input type="text" placeholder="Enter Your Full Name" required />
            </form>
            <div className="cozy-leaf__reservation-form-buttons">
              <button>Submit</button>
              <button onClick={handleBackClick}>Back</button> {/* przycisk do powrotu */}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Reservation;
