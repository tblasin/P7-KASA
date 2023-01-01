import React, { useState } from "react";
import '../Dropdown/collapse.css';
import arrowup from "../../assets/img/arrowup.svg";


function Collapse({title, content}) {
    
        const [toggle, setToggle] = useState(false);

        const toggleState = () => {
            setToggle(!toggle);
        };

        return (
            <div className="Collapse">
            
            <div onClick={toggleState} className="Collapse-details">
                
                <h1 className="titre">{title}</h1>
                <img
                className={toggle ? "arrow arrow-down" : "arrow arrow-up"}
                src={arrowup}
                alt="arrow up or down"
                />

            </div>
            <div className={toggle ? "content" : "content cache"}>
                <p className="text">
                {content}
                </p>
            </div>
            </div>
        );
    
}

export default Collapse;