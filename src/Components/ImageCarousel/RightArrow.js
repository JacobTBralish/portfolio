import React from 'react';
import './Slider.scss';


const RightArrow = (props) => {
    return ( 
    <div className="nextArrow arrow" onClick={() => props.goToNextSlide()}>
        <i className="fa fa-arrow-right fa-2x" aria-hidden="true"></i>
    </div>
     );
}
 
export default RightArrow;