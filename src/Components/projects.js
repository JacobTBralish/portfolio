import React from 'react';
import Slider from './ImageCarousel/Slider';

import SherpaHome1 from '../SherpaImages/Home1.png'
import SherpaHome2 from '../SherpaImages/Home2.png'
import SherpaHome3 from '../SherpaImages/Home3.png'
import AllArticles from '../SherpaImages/AllArticles.png'
import SavedTrails from '../SherpaImages/SavedTrails.png'
import TrailComments from '../SherpaImages/TrailComments.png'
import TrailsGridwall1 from '../SherpaImages/TrailsGridwall1.png'
import TrailsGridwall2 from '../SherpaImages/TrailsGridwall2.png'
import TrailsView1 from '../SherpaImages/TrailView1.png'
import TrailsView2 from '../SherpaImages/TrailView2.png'
import TrailsWeather from '../SherpaImages/TrailWeather.png'
import Dropdown from '../SherpaImages/Dropdown.png'
import LoggedInDropdown from '../SherpaImages/LoggedInDropdown.png'
import MobileHome from '../SherpaImages/MobileHome.png'
import MobileMenu from '../SherpaImages/MobileMenu.png'

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
               <Slider id={1} images={[SherpaHome1, SherpaHome2, SherpaHome3, Dropdown, TrailsGridwall1, TrailsGridwall2, TrailsView1, TrailsView2, TrailComments, TrailsWeather, AllArticles, LoggedInDropdown, SavedTrails, MobileHome, MobileMenu]} body='Sherpa-Hiking was created with the purpose of providing a useful service to those who enjoy hiking and the outdoors. This project utilizes React, Redux, Node, Express and PostgreSQL. SASS was used to create the fully reponsive styling that is appropriately styled for both desktop and mobile view even on the smallest of screens. Also using technologies such as Mapbox, Auth0, OpenWeather API, Hiking Porject API, National Park Service API, and more I was able to create a highly functional website. The website was hosted using DigitalOcean, if you would like to visit the live site.'
               linkToSite='https://www.Sherpa-hiking.com'
               title='Sherpa-Hiking' />

               {/* <Slider id={2} image1={SherpaHome} body={"Example1"} title={'test 2'} /> */}
                <Slider images={[NikeHome, NikeMenu, NikeGridwall, NikeDetailed, NikeCart, NikeShipping]} title={"Nike-Clone"} body='Recreating the Nike website was used to display the capability of creating an e-commerce site of such a large scale, and also demonstrate the attention to detail required to mimic the functiality and style of the website. The website was created using React, Redux, Node, Express, PostgreSQL, and SASS. The different technologies used during the project were Stripe, Nodemailer, Auth0, and Mapbox and the hosting used was DigitalOcean. If you would like to visit the live website' linkToSite='https://www.Nikes.xyz'/>
            </div>


        </div>
     );
}
 
export default Projects;