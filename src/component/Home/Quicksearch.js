import React,{Component} from "react";
import QuickDisplay from "./QuickDisplay";

var Burl= "https://developerfunnel.herokuapp.com/booking";

class Quicksearch extends Component{
    constructor(){
        super()

        this.state={
            tripType:''
        }
    }
    render(){
        return(
            <div>
               <QuickDisplay tripData={this.state.tripType}/>
            </div>
        )
    }

    componentDidMount(){
        fetch(Burl,{method:"GET"})
        .then((res)=> res.json())
        .then((data)=>{
            console.log(data);
            this.setState({tripType:data})
        })
    }
}

export default Quicksearch;