import React from 'react';
import ProjectView from './ProjectView';

import SherpaHome from '../SherpaImages/Home.png'
import SherpaState from '../SherpaImages/States.png'
import SherpaTrails from '../SherpaImages/Trails.png'
import SherpaTrailView from '../SherpaImages/TrailView.png'


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
               <ProjectView id={1} image1={SherpaHome} image2={SherpaState} image3={SherpaTrails} image4={SherpaTrailView} body={"Example1"} title={'Sherpa-Hiking'} />

               {/* <ProjectView id={2} image1={SherpaHome} body={"Example1"} title={'test 2'} /> */}
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