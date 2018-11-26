import React from 'react';
import MainPhoto from '../Images/JacobsPhoto.png';
import './style.scss';


const Home = () => {
    return ( 
        <div className='homeContainer'>
            <section className='headerContainer'>
                <h1 className='header'>Hello, my name is Jacob Bralish. I am a full stack web developer living in Denver, Colorado.</h1>
            </section>
            <section className='mainPhotoContainer'>
                <div className='mainPhotoSubContainer'>
                    <img className='mainPhoto' src={MainPhoto} alt='Jacob Bralish'></img>
                </div>
            </section>
            <section className='contentContainer'>
                <div>
                    <h3>About:</h3>
                    <p className='aboutMeP'>
                        I was born and raised in Colorado and am based in the greater Denver area. Outside of programming somethings I love to engage in are reading, outdoor activities and lifting heavy things in the gym. When I'm not doing any of those things, I'm spending time with my wife, Alex, and my cocker spaniel named Arnold. My goal is to create and build meaningful products that will be just as innovative as they are useful. I am looking for employment in an enviornment that is suitable to expand on current knowledge and gain new skills to be successful in programming, and also be a positive influence on my workplace and my peers.
                    </p>
                 </div>
            </section>
 
        </div>
     );
}
 
export default Home;