import React from "react"
import "./HotelCard.css"

export const HotelCard = ({ hotel }) => {
  return (
    <>
      <div className="relative hotelcard-container shadow cursor-pointer">
        <div>
          <img className="img" src={hotel.image} alt={hotel.name} />
          <div className="hotelcard-details">
            <div className="d-flex align-center">
              <span className="location">
                {hotel.address}{` `}
                {hotel.state}
              </span>
              <span className="rating d-flex align-center">
                <span class="material-icons-outlined">star</span>
                <span>{hotel.rating}</span>
              </span>
            </div>
            <p className="hotel-name">{hotel.name}</p>
            <p className="price-details">
              <span className="price">Rs. {hotel.price}</span>
              <span>night</span>
            </p>
          </div>
        </div>
        <button className="button btn-wishlist absolute d-flex align-center">
          <span className="material-icons favorite cursor">favorite</span>
        </button>
      </div>
    </>
  )
}
