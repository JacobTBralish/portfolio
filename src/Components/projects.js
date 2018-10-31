import React from 'react';
import ProjectView from './ProjectView';
import { Link } from 'react-router-dom';

import SherpaHome from '../SherpaImages/Home.png'


const Projects = () => {
    return ( 
        <div className='projectsContainer'>
            <section className='projectsTopHeaderContainer'>
                <h1 className='projectTopHeader'>Recent projects: Samples of Projects I have created to showcase and demonstrate my technical and design skills</h1>
            </section>
            <div className='projectLowerHeaderContainer'>
            <h3 className='projectLowerHeader'>Projects:</h3>
            </div>
            <div>
                <Link to='/projects/'><ProjectView image1={SherpaHome} body={"Example1"} title={'Sherpa-Hiking'} /></Link>
                {/* <ProjectView image1={} image2={} image3={} image4={} body={"Example1"} /> */}
            </div>


        </div>
     );
}
 
export default Projects;

// class Projects extends Component {
//     state = {  }
//     render() { 
//         return (  );
//     }
// }
 
// export default Projects;