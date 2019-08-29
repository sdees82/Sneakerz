import React from 'react'

import { withRouter } from "react-router";

import './brandsCollection.style.scss'
import Brands from '../../../components/brands/brands.component.jsx'

const BrandsCollection = ({history}) => {
    return (<div className="collection">
        <ul><li onClick={() => history.push(`/`)}>HOME</li></ul> 
        <Brands/>
    </div>  );
}
 
export default withRouter(BrandsCollection);