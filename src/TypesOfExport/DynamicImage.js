import React from "react";
import './ImagePath.css'
import Myimage from "../assets/images/parrot.jpg$"

export default class DynamicImage extends React.Component{
    render () {
        return(
            <div class="image">
                <img class="img-boxx" src={Myimage} alt={"Dynamic Image"} />
            </div>
        );
    }
}