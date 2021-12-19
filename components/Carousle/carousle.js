import React from 'react';
import { CarouselProvider, Slider, Slide, ButtonBack, ButtonNext } from 'pure-react-carousel';
import 'pure-react-carousel/dist/react-carousel.es.css';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import slide1 from '../../public/assets/slide1.png'
import Image from 'next/image';
import styles from './styles.module.css'

export default class extends React.Component {
  render() {
    return (
      <CarouselProvider
        naturalSlideWidth={400}
        naturalSlideHeight={450}
        totalSlides={3}
        className={styles.slider}
      >
        <Slider>
          <Slide index={0}><Image src={slide1} /></Slide>
          <Slide index={1}><Image src={slide1}/></Slide>
          <Slide index={2}><Image src={slide1}/></Slide>
        </Slider>
        <div className={styles.sliderButtons}>
        <ButtonBack><ArrowBackIcon style={{color: '#fe043c'}}/></ButtonBack>
        <ButtonNext><ArrowForwardIcon style={{color: '#fe043c'}}/></ButtonNext>
        </div>
        
      </CarouselProvider>
    );
  }
}