import React,{Component} from "react";
import axios from "axios";

const curl="https://developerfunnel.herokuapp.com/hotellist";

class CostFilter extends Component{

    costFilter= (event) =>{
        let cost= (event.target.value).split(",");
        let tripType= sessionStorage.getItem("tripId");
        let lcost= Number(cost[0]);
        let hcost= Number(cost[1]);
        let costurl;
        

        if(event.target.value== " " || event.target.value==""){
            costurl= `${curl}/${tripType}`;
        }else{
            costurl= `${curl}/${tripType}?hcost=${hcost}&lcost=${lcost}`
        }

        axios.get(costurl)
        .then((response)=> {this.props.costPerRoom(response.data)})
    }

    render(){
        return(
            <React.Fragment>
                <h4><b><center>Cost Type</center></b></h4>
                <div onChange={this.costFilter}>
                    <label className="radio">
                        <input type="radio" name="room" value=""/>All
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="1000,3000"/>Rs. 1000-3000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="3001,6000"/>Rs. 3001-6000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="6001,12000"/>Rs. 6001-12000
                    </label>
                    <label className="radio">
                        <input type="radio" name="room" value="12001,18000"/>Rs. 12001-18000
                    </label>
                </div>
            </React.Fragment>
        )
    }
}

export default CostFilter;