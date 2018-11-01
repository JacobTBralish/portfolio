import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const ProjectView = (props) => {
    return ( 
        <div className='projectViewContainer'>
         {/* <Link to={`/projects/${props.id}`}> */}
            <section className='projectViewSubContainer'>
            <Carousel autoPlay showArrows={true} showThumbs={true} infiniteLoop={true}>
                <div>
                    <img className='projectImage' src={props.image1} alt='' />
                    <p className='legend'>Home</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image2} alt='' />
                    <p className='legend'>State Selection</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image3} alt='' />
                    <p className='legend'>Trail Selection</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image4} alt='' />
                    <p className='legend'>Trail Page</p>
                </div>
            </Carousel>
                <p className='projectBody'> Details</p>
                <h3>{props.title}</h3>
            </section>
            {/* </Link> */}
        </div>
    );
}
 
export default ProjectView;