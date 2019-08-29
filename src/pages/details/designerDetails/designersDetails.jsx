import React from 'react'

import designersData from '../../../data/designers'
import { withRouter } from "react-router";

import './designersDetails.style.scss'

const DesignersDetails = (props) => {
    const filteredDesigner = designersData.filter((val)=>{
        if(val.route === props.match.params.designerID){
           return val;
        }
      });
    const designerInfo = filteredDesigner[0];
    return (
    <div className="collection">
       <img src={designerInfo.imageUrl}/>
       <ul>
          <li onClick={() => props.history.push(`/`)}>HOME</li>
          <li onClick={() => props.history.push(`/designers`)}>DESIGNERS</li>
          </ul>
       <h1>{designerInfo.name}</h1>
       <h2>{designerInfo.info}</h2>
    </div>  
    );
}
 
export default withRouter(DesignersDetails);