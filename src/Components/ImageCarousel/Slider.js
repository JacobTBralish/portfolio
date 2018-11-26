import React, { Component } from 'react';
import Slide from './Slide';
import LeftArrow from './LeftArrow';
import RightArrow from './RightArrow';

import './Slider.scss';


class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = { 
            currentIndex: 0,
            translateValue: 0
         }
    }

    goToPrevSlide = () => {
        if (this.state.currentIndex === 0)
            return;
            this.setState(prevState => ({
                currentIndex: prevState.currentIndex - 1,
                translateValue: prevState.translateValue + (this.slideWidth())
            })
        )
    }

    goToNextSlide = () => {
        // Exiting the method early if we are at the end of the images array.
        // We also want to reset currentIndex and translateValue, so we return
        // to the first image in the array.
        if(this.state.currentIndex === this.props.images.length - 1) {
          return this.setState({
            currentIndex: 0,
            translateValue: 0
          })
        }
        
        // This will not run if we met the if condition above
        this.setState(prevState => ({
          currentIndex: prevState.currentIndex + 1,
          translateValue: prevState.translateValue - this.slideWidth()
        }));
      }

      slideWidth = () => {
          return document.querySelector('.slide').clientWidth
      }

    render() { 
        let { images, title, body, linkToSite } = this.props;
        let { translateValue } = this.state;

        let mappedImages = images.map((image, i) => {
            return <Slide key={i} image={image}/>
        })
        return ( 
            <div className='projectViewContainer'>
                <a className='titleLink' href={`www.${title}.com`}><h1>{title}</h1></a>
                <section className='projectViewSubContainer'>
                    <div className='slider'>
                        <div className='sliderWrapper' 
                            style={{
                                transform: `translateX(${translateValue}px)`,
                                transition: 'transform ease-out 0.45s'
                            }}>
                            {mappedImages}
                        </div>

                        <LeftArrow
                        goToPrevSlide={this.goToPrevSlide} 
                        />
                        <RightArrow 
                        goToNextSlide={this.goToNextSlide}
                        />
                    </div>
                    <p className='projectBody'>{body}</p>
                    <a className='projectBody' href={linkToSite}>{linkToSite}</a>
                </section>
            </div>
         );
    }
}
 
export default Slider;