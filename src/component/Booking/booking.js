import React,{Component} from "react";
import {Link} from "react-router-dom";
import axios from "axios";

const hotelUrl="https://developerfunnel.herokuapp.com/hotelsdetails";
const bookingUrl="https://developerfunnel.herokuapp.com/placeBook";

class placeBooking extends Component{
    constructor(){
        super()

        this.state={
            order_id: Math.floor(Math.random()*10000),
            hotel_name:"",
            name:"",
            phone:"",
            address:"",
            person:""
        }
    }

    async componentDidMount(){
        var hotelid= this.props.match.params.id;
        let response= await axios.get(`${hotelUrl}/${hotelid}`)
        this.setState({hotel_name: response.data[0].name})
    }
    handleChangeName= (event) =>{
        this.setState({name:event.target.value})
    }
    handleChangePhone= (event) =>{
        this.setState({phone:event.target.value})
    }
    handleChangeAddress= (event) =>{
        this.setState({address:event.target.value})
    }
    handleChangePerson= (event) =>{
        this.setState({person:event.target.value})
    }

    handleSubmit= () =>{
        var data= {
            "order_id": this.state.order_id,
            "hotel_name": this.state.hotel_name,
            "name": this.state.name,
            "phone": this.state.phone,
            "address": this.state.address,
            "person": this.state.person
        }
        console.log(data);

        fetch(bookingUrl,{
            method:"POST",
            header:{
                "Accept": "application/json",
                "Content-Type": "application/json"
            },
            data:JSON.stringify(data)
        })
        .then((this.props.history.push("/viewbooking")))
        //.catch((error)=>{})
    }

    render(){
        console.log(this.props);
        return(
            <div className="container">
                <div className="panel panel-primary">
                    <div className="panel-heading">
                        <h4>Place Your Order</h4>
                    </div>
                    <div className="panel-body">
                        <div className="form-group">
                            <label>Order Id:</label>
                            <input type="text" name="order_id" value={this.state.order_id} readOnly className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Hotel Name:</label>
                            <input type="text" name="hotel_name" value={this.state.hotel_name} readOnly className="form-control"></input>
                        </div>
                        <div className="form-group">
                            <label>Name:</label>
                            <input type="text" name="name" value={this.state.name} 
                            onChange={this.handleChangeName} className="form-control" required></input>
                        </div>
                        <div className="form-group">
                            <label>Phone:</label>
                            <input type="text" name="phone" value={this.state.phone} 
                            onChange={this.handleChangePhone} className="form-control" required></input>
                        </div>
                        <div className="form-group">
                            <form>
                            <label>Address:</label>
                            <input type="text" name="address" value={this.state.address}  
                            onChange={this.handleChangeAddress} className="form-control" required></input></form>
                        </div>
                        <div className="form-group">
                            <label>Person:</label>
                            <select type="text" name="person" value={this.state.person} 
                            onChange={this.handleChangePerson} className="form-control" required="required">
                                <option value="1">One</option>
                                <option value="2">Two</option>
                                <option value="3">Three</option>
                                <option value="4">Four</option>
                            </select>
                        </div>
                        
                        <Link to={`/details/${this.props.match.params.id}`} className="btn btn-danger">Back</Link>&nbsp;
                        <button className="btn btn-success" onClick={this.handleSubmit}>Submit</button>
    
                    </div>
                </div>
            </div>
        )
    }
}

export default placeBooking;