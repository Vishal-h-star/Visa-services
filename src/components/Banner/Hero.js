import React, { useEffect, useState, useRef } from 'react'
import styled, {css} from 'styled-components'
import Button from '../../components/Button'
import { IoMdArrowRoundForward } from 'react-icons/io'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import AOS from "aos";


const Hero = ({ slides }) => {
    
    const [current, setCurrent] = useState(0);
    const length = slides.length
    const timeout = useRef(null);

    const mounted = useRef(false);


    useEffect(() => {
      mounted.current = true;
      if (mounted.current) {
        AOS.init({
          duration: 50,
        });
        AOS.refresh();
      }
      return () => (mounted.current = false);
    }, []);

    useEffect(() => {
        const nextSlide = () => {
            setCurrent(current => (current === length - 1 ? 0 : current + 1))
        }
        timeout.current = setTimeout(nextSlide, 9000000)

        return function() {
            if(timeout.current){
                clearTimeout(timeout.current)
            }
        }
    }, [current, length])

    const nextSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === length - 1 ? 0 : current + 1);
        console.log(current); 
    }

    const prevSlide = () => {
        if(timeout.current){
            clearTimeout(timeout.current)
        }
        setCurrent(current === 0 ? length - 1 : current - 1);
        console.log(current)
    }

    if(!Array.isArray(slides) || slides.length <= 0) {
        return null;
    }
    return (
        <section className='hero-section'>
            <div className='hero-wrapper'>
             {slides.map((slide, index) => {
                 return(
                     <div className='hero-slide' key={index}>
                         {index === current && (
                              <div className='hero-slider'>
                              <img src={slide.image} alt={slide.alt} className='hero-image'/>
                          </div>
                         )} 
                     </div>
                 )
             })}
            </div>
        </section>
    )
}

export default Hero
