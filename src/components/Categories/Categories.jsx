import axios from "axios";
import { useEffect, useState } from "react";
import "./Categories.css";
import React from 'react'

export const Categories = () => {
    const [categories, setCategories] = useState([]);
    const { hotelCategory, setHotelCategory } = useCategory();

    const handleCategoryClick = (category) => {
        setHotelCategory(category);
      };


    
  useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get(
          "https://travelapp.cyclic.app/api/category"
        );
        setCategories(data);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);
  return (
    <>
     <section className="categories d-flex gap">
     {
          categories && categories.map(({ _id, category }) => <span key={_id} className={`${category === hotelCategory ? "category-color" : ""} item`} onClick={() => handleCategoryClick(category)}>{category}</span>)
        }
      

    </section>

    </>
  )
}

