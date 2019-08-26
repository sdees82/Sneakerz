import React, { Component } from 'react';
import { withRouter } from "react-router";
import './nav.styles.scss'

const Nav = ({match, history}) =>{ 
        return (
            <nav >
                <ul>
                    <li><img onClick={() => history.push(`${match.url}`)}src="" alt="Sneaker Designer"/></li>
                    <div>
                        <li onClick={() => history.push(`${match.url}brands`)}>Brands</li>
                        <li onClick={() => history.push(`${match.url}designers`)}>Designers</li>
                    </div>
                </ul>
            </nav>

        );
    }
 
export default withRouter(Nav);