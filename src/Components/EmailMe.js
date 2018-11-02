import React from 'react';
import './style.scss';
import Resume from './JacobBralishResume.pdf';


const EmailMe = () => {
    return ( 
        <div className='emailSubContainer'>
        <h1 className='contactHeader'>Interested in connecting?</h1>
            <button className='emailMeButton'>
                 <a href="mailto:j.t.bralish@gmail.com">Email me</a>
            </button>
            <button className='emailMeButton'>
                 <a href={Resume} /* download="Jacob Bralish Resume" */>Download my Resume</a>
            </button>
        </div>
     );
}
 
export default EmailMe;