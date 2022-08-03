import { useState, useEffect } from "react";
// import "./ScrollTop.css";

const ScrollTop = () => {
    const [ScrollY, setScrollY] = useState(0);
    const [BtnStatus, setBtnStatus] = useState(false);

    const handleTop = () => {
        
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
        setScrollY(0); 
        setBtnStatus(false); 
    };
}