import React, { useEffect } from "react";
import 'font-awesome/css/font-awesome.min.css';

export default function CustomizationWrapper(props) {
    // if showAdvanced is true, removes "active class". Otherwise, adds "active" class
    function showHideComponent() {
        if(props.showAdvanced) {
            const elem = document.querySelector(".customization-wrapper");
            elem.classList.remove("active");
        }
        else {
            const elem = document.querySelector(".customization-wrapper");
            elem.classList.add("active")
        } 
    }    

    // a function to call 2 other functions
    function callOtherFunctions() {
        props.toggleAdvanced();
        showHideComponent();
    }
    
    return (
        <>
            <button 
                className="show-advanced-btn"
                onClick={callOtherFunctions}
                >
                    { props.showAdvanced ? "Hide" : "Show"} advanced settings
                <i className="fa fa-solid fa-triangle"></i>
            </button>
            <div className="customization-wrapper-wrapper">
                <div className="customization-wrapper">
                    <form className="cust-option-wrapper">
                        <input 
                            className="cust-input"
                            id="font-size-input"
                            placeholder="Font size (default 32px)"
                        />
                        <button 
                            className="apply-button"
                            onClick={props.applyFontSize}
                        >
                        Apply
                        </button>
                    </form>

                    <form className="cust-option-wrapper">
                        <input 
                            className="cust-input"
                            id="stroke-input"
                            placeholder="Font stroke (default 2px)"
                        />
                        <button 
                            className="apply-button"
                            onClick={props.applyStroke}
                        >
                        Apply
                        </button>
                    </form>
                </div>    
            </div>
        </>
    )
}