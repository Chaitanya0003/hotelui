import React from "react";
import Search from "./Search";
import Quicksearch from "./Quicksearch";

const Home = (props) =>{
    console.log(props);
    const handleHotel = (data) =>{
        props.history.push(`/details/${data}`);
    }

    return(
        <div>
            <Search hid={(data)=> {handleHotel(data)}}/>
            <Quicksearch/>
        </div>
    )
}

export default Home;