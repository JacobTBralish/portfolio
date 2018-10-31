import React from 'react';
import MainPhoto from '../Images/weddinginvitationphoto.jpg';
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
                    <p>
                        I am currently seeking employment oppotunities in enviornments suitable for consistent growth and somewhere my skills and knowledge can be and create impactful products. You can see my previous work history on my <a className='textLink' href='https://www.linkedin.com/in/jacobbralish/'>LinkedIn</a>
                    </p>

                    <h3>More Stuff</h3>

                    <h4>Stuff Header</h4>

                    <p>
                        and more partying
                    </p>
                </div>
            </section>
 
        </div>
     );
}
 
export default Home;