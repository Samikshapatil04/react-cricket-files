import React from "react";

export default class LoopJSX extends React.Component{
    render (){
        const fruits = ["Apple", "Banana", "Orange"];
        return(
            <div style={{backgroundColor:"white", color:"black"}}>
                <h2>Fruits Name</h2>
                <ul>
                    {fruits.map((item,index) =>(
                        <li>{item}</li>
                    ))}
                </ul>
            </div>
        )
    }
}



// export default class LoopJSX extends React.Component{
//     render (){
//         return(
//             <div style={{backgroundColor:"white", color:"black"}}>
//                 <h2>Fruits Name</h2>
//                 <ul>
//                     <li>Apple</li>
//                     <li>Banana</li>
//                     <li>Orange</li>
//                 </ul>
//             </div>
//         )
//     }
// }