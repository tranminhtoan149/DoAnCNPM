import React from 'react'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
// import background from './images/logo.png'
import '../../styles/banner.css'


function Banner() {
    gsap.registerPlugin(ScrollTrigger);

    const amination = useRef();
    useEffect(() => {
        const element = amination.current;

        gsap.fromTo(element.querySelector('.solugan'),{top:'35%'}, 
            { position: 'absolute',  top: '-600', scrollTrigger: {
                trigger: '.banner',
                start: '0%',
                end: '100%',
                scrub: 1
            } })
        gsap.fromTo(element.querySelector('.description'),{top:'45%'},
            { position: 'absolute',  top: '-300', scrollTrigger: {
                trigger: '.banner',
                start: '0%',
                end: '100%',
                scrub: 1
            } })
    }); 
    const handleScroll=()=>{
        document.getElementById("main-menu").scrollIntoView();
    }


    return (
        <div className="banner " ref={amination} >
            <span className="solugan">
                BUY ME FIRST
            </span>
            <span className="description">
                <p>Điểm 10 Cho Sự Chất Lượng</p>
                <button onClick={handleScroll}>Shop now</button>
            </span>
            <img src={'/images/background2.jpg'}  alt=""/>
            
        </div>
    )
}

export default Banner