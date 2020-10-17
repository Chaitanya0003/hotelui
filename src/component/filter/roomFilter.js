import React,{Component} from "react";
import axios from "axios";

const rurl="https://developerfunnel.herokuapp.com/hotellist";

class RoomFilter extends Component{

    roomFilter= (event) =>{
        let roomType= event.target.value;
        let tripType= sessionStorage.getItem("tripId");
        let roomurl;

        if(roomType=""){
            roomurl= `${rurl}/${tripType}`;
        }else{
            roomurl= `${rurl}/${tripType}?roomtype=${event.target.value}`;
        }

        axios.get(roomurl)
        .then((response)=> {this.props.roomperType(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <h4><b><center>Room Type</center></b></h4>
                <div onChange={this.roomFilter}>
                    <label className="radio">
                        <input type="radio" name="room" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="1"/>Deluxe Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="2"/> Premiem Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="3"/> Budget Room
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="4"/> SemiDeluxe Room
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default RoomFilter;