import React from 'react';
import { Link } from 'react-router-dom';
import './style.scss';

const Nav = () => {
    return ( 
    <div className='navSubContainer'>
    <Link className='jLink' to='/'>
        <div className='navJ'><p className='J'>J</p></div>
    </Link>
        <ul className='navList'>
            <li className='navListItem'><Link to='/'>Home</Link></li>
            <li className='navListItem'><Link to='/experience'>Experience</Link></li>
            {/* <li className='socialLinkParent'> */}
                <ul className='navListItemSocial'>Social
                    <li className='socialLinkImage'><a href='https://github.com/JacobTBralish'><i className="fab fa-github-square"></i></a></li>
                    <li className='socialLinkImage'><a href='https://www.linkedin.com/in/jacobbralish/'><i className="fab fa-linkedin"></i></a></li>
                    {/* <li></li> */}
                </ul>
            {/* </li> */}
        </ul>
    </div> );
}
 
export default Nav;