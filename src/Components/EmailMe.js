import React from 'react';
import './style.scss';


const EmailMe = () => {
    return ( 
        <div className='emailSubContainer'>
        <h1 className='contactHeader'>Interested in connecting?</h1>
            <button className='emailMeButton'>
                 <a href="mailto:j.t.bralish@gmail.com">Email me</a>
            </button>
        </div>
     );
}
 
export default EmailMe;