import React from "react";
import {Link} from "react-router-dom";
import "./listing.css";

const ListingDisplay = (props) =>{

    const renderList= ({listData})=>{
        if(listData){
            if(listData.length>0){
                return(
                    listData.map((item)=>{
                        return(
                            <div className="Item" id={item._id}>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <img className="Image" src={item.thumb} />
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="hotel_name">
                                        <Link to={`/details/${item._id}`}>{item.name}</Link></div>
                                        <div className="city_name">{item.city_name}</div>
                                        <div className="address-text">{item.locality}</div>
                                        <div className="address-text">{item.address}</div>
                                    </div>
                                </div>
                                <hr/>
                                <div className="row">
                                    <div className="col-sm-3">
                                        <div className="CUISINES-COST-FOR-TWO">Room Type</div>
                                        <div className="CUISINES-COST-FOR-TWO">COST FOR Night</div>
                                    </div>
                                    <div className="col-sm-9">
                                        <div className="Bakery-700">
                                            {item.type[0].name},{item.type[1].name},{item.type[2].name}</div>
                                        <div className="Bakery-700">Rs. {item.cost}</div>
                                    </div>
                                </div>
                                <hr/>
                                <hr/>
                            </div>
                       )
                   })
                )
            }else{
                return(
                    <div className="hotel_name" style={{marginLeft:"200px", marginTop:"50px"}}><h3>No Data Found</h3>
                    </div>
                )
            }
           
        }else{
            return(
                <div style={{marginLeft:"200px", marginTop:"50px"}}><img src="/images/loader.gif"></img>
                </div>
            )
        }
    }
    return(
        <div className="container-fluid">
            <div className="main-heading">
                <div className="row">
                    <div className="col-md-12">
                        {renderList(props)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ListingDisplay;
