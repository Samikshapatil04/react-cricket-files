import React, {useState} from "react";
import './WithoutState.css';

export default function WithoutState(){
    const [setfruit, setStatefruit] = useState("apple");

    const handleFruitChange = {
        apple: "https://extension.umn.edu/sites/extension.umn.edu/files/Two%20apples%20close-up_screen.jpg",
        banana: "https://www.health.com/thmb/TNkLU68EhibdoVEdPnkDRaALLY0=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/Bananas-02809456216b4984b8771f12be063cdf.jpg",
        orange: "https://insanelygoodrecipes.com/wp-content/uploads/2023/01/Fresh-Organic-Tangerine-Oranges-with-Leaves.jpg",
    };

    const onSelectChange = (item) => {
        console.log("onClick");
        setStatefruit(item.target.value)
    };

    return(
        <div>
            <h1>Select a Fruit</h1>
            <select className="fruits-select" onChange={onSelectChange}>
                <option value="apple">Apple</option>
                <option value="banana">Banana</option>
                <option value="orange">Orange</option>
            </select>
            <h2>You Selected</h2>
            <img 
                src={handleFruitChange[setfruit]}
                alt={setfruit}
                className="fruit-image"
            />
        </div>
    );

    
}