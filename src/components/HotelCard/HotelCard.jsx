import React from "react"
import "./HotelCard.css"

export const HotelCard = () => {
  return (
    <>
      <div className="relative hotelcard-container shadow cursor-pointer">
        <div>
          <img
            className="img"
            src="https://images.unsplash.com/photo-1694964363999-964f056854ae?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt=""
          />
          <div className="hotelcard-details">
            <div className="d-flex align-center">
              <span className="location">Bir , Himachal Pradesh</span>
              <span className="rating d-flex align-center">
                <span class="material-icons-outlined">star</span>
                <span>4.5</span>
              </span>
            </div>
            <p className="hotel-name">Sukoon bag</p>
            <p className="price-details">
              <span className="price">Rs. 5300</span>
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
