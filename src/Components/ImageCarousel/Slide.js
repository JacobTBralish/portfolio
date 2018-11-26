import React from 'react'
import './Slider.scss';

const Slide = ({ image }) => {
    console.log('image: ', image);
  const styles = {
    backgroundImage: `url(${image})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: '50% 60%'
  }
  return <div className="slide" style={styles} />
}

export default Slide;