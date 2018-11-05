import React from 'react';
import { Link } from 'react-router-dom';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';



const ProjectView = (props) => {
    return ( 
        <div className='projectViewContainer'>
         {/* <Link to={`/projects/${props.id}`}> */}
            <section className='projectViewSubContainer'>
                <a href={`www.${props.title}.com`}><h1>{props.title}</h1></a>
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
                {/* {props.image5 ?
                <div>
                    <img className='projectImage' src={props.image5} alt='' />
                    <p className='legend'>Trail Page</p>
                </div>
                : null}
                {props.image6 ?
                <div>
                    <img className='projectImage' src={props.image6} alt='' />
                    <p className='legend'>Trail Page</p>
                </div>
                : null} */}

            </Carousel>
                <p className='projectBody'>{props.body}</p>
            </section>
            {/* </Link> */}
        </div>
    );
}
 
export default ProjectView;