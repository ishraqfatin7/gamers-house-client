import React, { useContext } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import { UserContext } from '../../App';

const AdminNav = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    return (
        <div className="row" >
            <div className="col-sm-4">
                <ul className="navbar-nav mr-auto flex-column vertical-nav">
                    <li className="nav-item">
                        <Link to ="/addProduct" className="nav-link px-5">Add Product</Link>
                    </li>
                    <li className="nav-item">
                    <Link to ="/manageProduct" className="nav-link px-5">Manage Product</Link>
                    </li>
                     </ul>
                </div>
            
        </div >
    );
};

export default AdminNav;