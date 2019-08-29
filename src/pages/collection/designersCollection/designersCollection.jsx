import React from 'react'

import { withRouter } from "react-router";

import './designersCollection.style.scss'
import Designers from '../../../components/designers/designers.component.jsx'

const DesignersCollection = ({history}) => {
    return (<div className="collection">
        <ul><li onClick={() => history.push(`/`)}>HOME</li></ul>
        <Designers/>
    </div>  );
}
 
export default withRouter(DesignersCollection);