import React, { useState } from 'react'
import { useSearchParams } from 'react-router-dom'

const FilterSidebar = () => {

    const [searchParams, setSearchParams] = useSearchParams();
    const [filter, setFilters] = useState({
        category : "",
        gender : "",
        color : "",
        size : [],
        material : [],
        brand : [],
        minPrice : 0,
        maxPrice : 100,
    });

    const [priceRange, setPriceRange] = useState([0,100]);

    const categories = ["Top Wear", "Bottom Wear"];

    const colors = [
        "Red",
        "Blue",
        "Black",
        "Green",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy",
    ];

  return (
    <div>
      Hello
    </div>
  )
}

export default FilterSidebar
