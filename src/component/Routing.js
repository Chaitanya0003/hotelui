import React from "react";
import {BrowserRouter,Route} from "react-router-dom";
import Home from "./Home/Home";
import Header from "./Header";
import Footer from "./Footer";
import HotelList from "./hotellisting/listingApi"
import HoteldetailApi from "./hoteldetails/hoteldetailApi"
import booking from "./Booking/booking";
import viewBooking from "./Booking/viewBooking"

const Routing = () =>{
    return(
        <BrowserRouter>
            <div>
                <Header/>
                    <Route exact path="/" component={Home}></Route>
                    <Route exact path="/list/:id" component={HotelList}></Route>
                    <Route exact path="/details/:id" component={HoteldetailApi}></Route>
                    <Route exact path="/booking/:id" component={booking}></Route>
                    <Route exact path="/viewbooking" component={viewBooking}></Route>
                <Footer/>
            </div>
        </BrowserRouter>
    )
}

export default Routing;