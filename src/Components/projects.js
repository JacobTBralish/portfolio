import React from 'react';
import ProjectView from './ProjectView';

import SherpaHome from '../SherpaImages/Home.png'
import SherpaState from '../SherpaImages/States.png'
import SherpaTrails from '../SherpaImages/Trails.png'
import SherpaTrailView from '../SherpaImages/TrailView.png'

import NikeHome from '../Nike-Clone/NikeClone1.png'
import NikeMenu from '../Nike-Clone/NikeClone2.png'
import NikeGridwall from '../Nike-Clone/NikeClone3.png'
import NikeDetailed from '../Nike-Clone/NikeClone4.png'
import NikeCart from '../Nike-Clone/NikeClone5.png'
import NikeShipping from '../Nike-Clone/NikeClone6.png'


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
               <ProjectView id={1} image1={SherpaHome} image2={SherpaState} image3={SherpaTrails} image4={SherpaTrailView} body={"Sherpa-Hiking was created with the purpose of providing a useful service to those who enjoy hiking and the outdoors."} title={'Sherpa-Hiking'} />

               {/* <ProjectView id={2} image1={SherpaHome} body={"Example1"} title={'test 2'} /> */}
                <ProjectView image1={NikeHome} image2={NikeMenu} image3={NikeGridwall} image4={NikeDetailed} image5={NikeCart} image6={NikeShipping} title={"Nike-Clone"} body={"Recreating the Nike website was used to display the capability of creating an e-commerce site of such a large scale, and also demonstrate attention to detail."} />
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