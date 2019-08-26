import React, { Component } from 'react';
import './nav.styles.scss'

class  Nav extends Component {
    state = {  }
    render() { 
        return (
            <nav >
                <ul>
                    <img src="" alt="Sneaker Designer"/>
                    <div>
                        <li>Brands</li>
                        <li>Designers</li>
                    </div>
                </ul>
            </nav>

        );
    }
}
 
export default Nav;