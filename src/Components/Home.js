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
                        I'm born and raised in Colorado, I love programming, reading, outdoor activities and lifting heavy things. {/* Testing my mind and body are two of the things I enjoy most. */} When I'm not doing any of those things, I'm spending time with my wifes, Alex, and my cocker spaniel named Arnold. Before becoming a full stack web developer, I was a personal trainer.
                        
                        {/* I am currently seeking employment oppotunities in enviornments suitable for consistent growth and somewhere my skills and knowledge can be and create impactful products. You can see my previous work history on my <a className='textLink' href='https://www.linkedin.com/in/jacobbralish/'>LinkedIn</a>.  */}
                    </p>

                    {/* <h3>More Stuff</h3>

                    <h4>Stuff Header</h4>

                    <p>
                        and more partying
                    </p> */}
                </div>
            </section>
 
        </div>
     );
}
 
export default Home;