import React from 'react';
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
                    <p className='legend'>{props.description1}</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image2} alt='' />
                    <p className='legend'>{props.description2}</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image3} alt='' />
                    <p className='legend'>{props.description3}</p>
                </div>
                <div>
                    <img className='projectImage' src={props.image4} alt='' />
                    <p className='legend'>{props.description4}</p>
                </div>
                {props.image5 ?
                <div>
                    <img className='projectImage' src={props.image5} alt='' />
                    <p className='legend'>{props.description5}</p>
                </div>
                : null}
                {props.image6 ?
                <div>
                    <img className='projectImage' src={props.image6} alt='' />
                    <p className='legend'>{props.description6}</p>
                </div>
                : null}
                {/* {props.image7 ?
                <div>
                    <img className='projectImage' src={props.image7} alt='' />
                    <p className='legend'>{props.description7}</p>
                </div>
                : null} */}
                {/* {props.image8 ?
                <div>
                    <img className='projectImage' src={props.image8} alt='' />
                    <p className='legend'>{props.description8}</p>
                </div>
                : <div></div>}
                {props.image9 ?
                <div>
                    <img className='projectImage' src={props.image9} alt='' />
                    <p className='legend'>{props.description9}</p>
                </div>
                : <div></div>}
                {props.image10 ?
                <div>
                    <img className='projectImage' src={props.image10} alt='' />
                    <p className='legend'>{props.description10}</p>
                </div>
                : <div></div>}
                {props.image11 ?
                <div>
                    <img className='projectImage' src={props.image11} alt='' />
                    <p className='legend'>{props.description11}</p>
                </div>
                : <div></div>}
                {props.image12 ?
                <div>
                    <img className='projectImage' src={props.image12} alt='' />
                    <p className='legend'>{props.description12}</p>
                </div>
                : <div></div>}
                {props.image13 ?
                <div>
                    <img className='projectImage' src={props.image13} alt='' />
                    <p className='legend'>{props.description13}</p>
                </div>
                : <div></div>}
                {props.image14 ?
                <div>
                    <img className='projectImage' src={props.image14} alt='' />
                    <p className='legend'>{props.description14}</p>
                </div>
                : <div></div>}
                {props.image15 ?
                <div>
                    <img className='projectImage' src={props.image15} alt='' />
                    <p className='legend'>{props.description15}</p>
                </div>
                : <div></div>} */}
                

            </Carousel>
                <p className='projectBody'>{props.body}</p>
            </section>
            {/* </Link> */}
        </div>
    );
}
 
export default ProjectView;