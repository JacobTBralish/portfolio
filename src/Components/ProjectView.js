import React from 'react';

// import SherpaHome from '../SherpaImages/Home.png'
// import SherpaState from '../SherpaImages/States.png'
// import SherpaTrails from '../SherpaImages/Trails.png'
// import SherpaTrailView from '../SherpaImages/TrailView.png'

const ProjectView = (props) => {
    return ( 
        <div className='projectViewContainer'>
            <section className='projectViewSubContainer'>
                <img className='projectImage' src={props.image1} alt=''></img>
                <img className='projectImage' src={props.image2} alt=''></img>
                <img className='projectImage' src={props.image3} alt=''></img>
                <img className='projectImage' src={props.image4} alt=''></img>
                <p className='projectBody'> Details</p>
                <h3>{props.title}</h3>
            </section>
        </div>
    );
}
 
export default ProjectView;