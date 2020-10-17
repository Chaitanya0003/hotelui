import React,{Component} from "react";
import ListingDisplay from "./listingDisplay";
import axios from "axios";
import RoomFilter from "../filter/roomFilter"
import CostFilter from "../filter/costFilter"

const url="https://developerfunnel.herokuapp.com/hotellist";

class Listing extends Component{
    constructor(){
        super()
        
        this.state={
            hotelList:""
        }
    }

    setDataPerFilter(sortedData){
        this.setState({hotelList:sortedData});
    }
    render(){
        console.log(this.props);
        return(
            <div>
                <div className="row">
                    <div className="col-md-2">
                        <RoomFilter roomperType={(data)=>{this.setDataPerFilter(data)}}/>
                        <CostFilter costPerRoom={(data)=>{this.setDataPerFilter(data)}}/>
                    </div>
                    <div className="col-md-10">
                        <ListingDisplay listData={this.state.hotelList}/>
                    </div>
                </div>
            </div>
        )
    }

    componentDidMount(){
        var tripId= parseInt(this.props.match.params.id);
        sessionStorage.setItem("tripId", tripId)
        axios.get(`${url}/${tripId}`)
        .then((response)=>{this.setState({hotelList:response.data})})
    }

}

export default Listing;