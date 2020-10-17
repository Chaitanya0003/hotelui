import React,{Component} from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css'

const url="https://developerfunnel.herokuapp.com/hotelsdetails";

class HotelDetails extends Component{
    constructor(){
        super()

        this.state={
            hotel:{
                /*"type":[
                    {
                        "name":""
                    },
                    {
                        "name":""
                    },
                    {
                        "name":""
                    }
                ]*/
            },
            tripId: sessionStorage.getItem("tripId")
        }
    }

    render(){
        var {hotel}= this.state;
        console.log(this.props);
        return(           
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h3>{hotel.name}</h3>
                    </div>
                    <div className="panel-body">
                        <div className="row">
                            <div className="col-md-12">
                                <img className="img-responsive" src={hotel.thumb} alt="hotelpic" style={{width:"1500px",height:"400px"}}/>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <h3>{hotel.city_name}</h3>
                                <h3>{hotel.locality}</h3>
                                <h3>{hotel.address}</h3>
                            </div>
                        </div>
                        <br/>
                        <div className="container">
                            <Tabs>
                                <TabList>
                                    <Tab>Overview</Tab>
                                    <Tab>Contact</Tab>
                                </TabList>
                            
                                <TabPanel>
                                    <h2>About the place</h2>
                                    <br/>
                                    <h3>Type</h3>
                                    <RoomType roomtype={hotel.type} />
                                    {/* {hotel.type[0].room} */}
                                    <h3>Cost per night: Rs. {hotel.cost}</h3>
                                </TabPanel>
                                <TabPanel>
                                    <h2>Contact Us</h2>
                                    <h4>Mob No.- 770053369</h4>
                                    <div>{hotel.locality}</div>
                                </TabPanel>
                            </Tabs>
                            <br/>
                            <Link to={`/list/${this.state.tripId}`} className="btn btn-danger">Back</Link>&nbsp;
                            <Link to={`/booking/${this.state.hotel._id}`} className="btn btn-success">Place order</Link>
                        </div>
                    </div>
                </div>
            </div>
        )
    }

    async componentDidMount(){
        var hotelid= this.props.match.params.id;
        let response= await axios.get(`${url}/${hotelid}`)
        this.setState({hotel:response.data[0]})
        }
    /*componentDidMount(){
        var hotelid= this.props.match.params.id;
        axios.get(`${url}/${hotelid}`)
        .then((response)=> {this.setState({hotel:response.data})})
    }*/
}



const RoomType= (props)=>{
    console.log("roomtype",props);
    if(!props.roomtype){
        return null;
    }
    
    return(
            props.roomtype && props.roomtype.map((item)=>{
                return(
                    <span style={{fontSize:"20px"}}> {item.name} |</span>  
                )
            })
    ) 
}

export default HotelDetails;