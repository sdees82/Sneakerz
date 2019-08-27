import React from 'react'

import brandsData from '../../data/brands'

import './brands.styles.scss'

const Brands = () => {
return (
    <div className="card-container">
        {brandsData.map((val, i) => {
            return(
                <div onClick={()=> console.log("clicked") } key={i} className="card">
                    <span>{val.name}</span>
                </div>
                )
            })
        }
    </div>
    );
}
 
export default Brands;