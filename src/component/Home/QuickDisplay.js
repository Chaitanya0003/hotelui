import React from "react";
import "./Quicksearch.css"
import {Link} from "react-router-dom";

const Quickdisplay = (props) =>{

    const listTrip= ({tripData}) =>{
        if(tripData){
            return tripData.map((item)=>{
                return(
                    <Link key={item._id} to={`/list/${item._id}`}>
                        <div className="tileContainer">
                            <div className="tileComponent1">
                                <img src={item.image}/>
                            </div>
                            <div className="tileComponent2">
                                <div className="componentHeading">
                                    {item.name}
                                </div>
                                <div className="componentSubHeading">
                                    Start you trip in {item.name} style
                                </div>

                            </div>
                        </div>
                    </Link>
                )
            })

        }
    }
    
        return(
            <div>
               <div className="quickSearchContainer">
                    <p className="quickSearchHeding">
                        Quick Search
                    </p>
                    <p className="quickSearchSubHeding">
                        Discover trip by style
                    </p>
                    <br/>
                    {listTrip(props)}
               </div>
            </div>
        )
    
}

export default Quickdisplay;