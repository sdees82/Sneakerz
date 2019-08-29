import React from 'react'

import designersData from '../../data/designers'
import { withRouter } from "react-router";

import './designers.styles.scss'

const Designers = ({history, match}) => {
return (
    <div className="designers-card-container">
        {designersData.map((val, i) => {
            return(
                <div onClick={()=> history.push(`${match.url}/${val.route}`) } key={i} className="card" style={{backgroundImage: `url('${val.imageUrl}')`}}>
                    <span>{val.name}</span>
                </div>
                )
            })
        }
    </div>
    );
}
 
export default withRouter(Designers);