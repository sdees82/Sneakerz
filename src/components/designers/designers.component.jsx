import React from 'react'

import designersData from '../../data/designers'

import './designers.styles.scss'

const Designers = () => {
return (
    <div className="card-container">
        {designersData.map((val, i) => {
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
 
export default Designers;