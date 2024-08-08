import { useState, useEffect } from "react"
import axios from "axios"
import InfiniteScroll from "react-infinite-scroll-component"
import { Navbar, HotelCard } from "../../components"
import "./Home.css"

export const Home = () => {
  const [hotels, setHotels] = useState([])
  useEffect(() => {
    ;(async () => {
      try {
        const { data } = await axios.get("http://localhost:4000/api/hotels")
        setHotels(data)
        // console.log(hotels)
      } catch (error) {
        console.log(error)
      }
    })()
  }, [])
  return (
    <>
      <Navbar />
      <main className="main d-flex wrap align-centre gap-larger">
        {hotels &&
          hotels.map((hotel) => <HotelCard key={hotel._id} hotel={hotel} />)}
      </main>
    </>
  )
}
