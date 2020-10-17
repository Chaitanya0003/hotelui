import React from "react";
import {Link} from "react-router-dom";

const Header= () =>{

    return(
        <div>  
                <nav class="navbar navbar-inverse">
                <div class="container-fluid">
                    <div class="navbar-header">
                    <a class="navbar-brand" href="#">WebSiteName</a>
                    </div>
                    <ul class="nav navbar-nav">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/viewbooking">Bookings</Link></li>
                    </ul>
                    <ul class="nav navbar-nav navbar-right">
                    <li><a href="#"><span class="glyphicon glyphicon-user"></span> Sign Up</a></li>
                    <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> Login</a></li>
                    </ul>
                </div>
                </nav>
        
        </div>
        
    )
}

export default Header;