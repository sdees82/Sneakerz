import React from 'react'

import nikeData from '../../data/nike'

import './brands.styles.scss'

const Nike = () => {
return (
    <div className="card-container">
        {nikeData.map((val, i) => {
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
 
export default Nike;