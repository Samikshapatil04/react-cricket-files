import React from "react";

export default class ConditionalJSX extends React.Component{
    render(){
        let greetings = "Hello World";

        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();

        if (hours < 12) {
            greetings = "Good Morning";
        } else if (hours < 16) {
            greetings = "Good Afternoon";
        } else if (hours < 20){
            greetings = "Good Evening";
        }
        else{
            greetings = "Good Night";
        }

        return(
            <div style={{backgroundColor:"lightcoral", color:"black"}}>
                <h1>{greetings}</h1>
                <p>{hours}:{minutes}:{seconds}</p>
            </div>
        );
    }
}