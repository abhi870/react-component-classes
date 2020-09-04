import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class Header extends Component {
    render() {
        return (
            <div >
                <ul className="mynavbar">
                    <li>
                        <Link to="/home" >
                            <button className="myitem">Home</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home1" >
                            <button className="myitem">Home1</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home2" >
                            <button className="myitem">Home2</button>
                        </Link>
                    </li>
                    <li>
                        <Link to="/home3" >
                            <button className="myitem">Home3</button>
                        </Link>
                    </li>
                </ul>
            </div>
        );
    }
}

export default Header;