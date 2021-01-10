import React, { useRef } from "react"
import styled from "styled-components"
import { Link } from "gatsby"
import { gsap } from 'gsap';

const Hamburger = ({state}) => {

  let heroRef = useRef(null);
  let navRef = useRef(null);
  let infoRef = useRef(null);


  React.useEffect(() => {

    const navChildren = navRef.children;

    console.log(heroRef.children[1]);

    gsap.set(heroRef,{
      css : {
        visibility : 'visible'
      }
    })

    if(state){
      gsap.timeline()
      .from([heroRef.children[0],heroRef.children[1]],{
        delay : 0.5,
        height : "0%",
        ease: 'power4.inOut',
        duration: 1,
        stagger : {
          amount : 0.1
        }
      })
      .from([navChildren[0].firstChild,navChildren[1].firstChild,navChildren[2].firstChild,navChildren[3].firstChild],{
        delay : 0.5,
        skewY: 10,
        y: navChildren[0].offsetHeight,
        opacity : 0,
        stagger:{
          amount : 0.4,
        }
      })
      .from([...infoRef.children],{
        y: infoRef.offsetHeight,
        opacity : 0,
        stagger:{
          amount : 0.4,
        }
      },"=-.3")
    }
  
    /**/
    

   

  },[])

  return (
    <HamburgerMenu ref={ele => heroRef = ele }>
      <div className="menu-sec-backcol" ></div>

      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <div className="nav-routes" ref={ele => navRef = ele}>
                  <h1>
                    <Link to="/">About</Link>
                  </h1>
                  <h1>
                    <Link to="/">Solutions</Link>
                  </h1>
                  <h1>
                    <Link to="/">Testimonials</Link>
                  </h1>
                  <h1>
                    <Link to="/form">Contact us</Link>
                  </h1>
                </div>
              </nav>
              <div className="info">
                <h3>Our Promise</h3>
                <p>
                Our team promises to listen to each and every demand of yours, while developing your required product. We understand the gravity of the responsibility that you give us.
                </p>
              </div>
            </div>
            
            <div className="locations" ref={el => infoRef = el}>
              Follow us :
              <span>Facebook</span>
              <span>LinkedIn</span>
              <span>Twitter</span>
              <span>Behance</span>
              <span>Github</span>
            </div>
          </div>
        </div>
      </div>
    </HamburgerMenu>
  )
}

const HamburgerMenu = styled.div`
  display: none;
  z-index: 9;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  position: fixed;
  height: 100%;
  width: 100%;
  visibility: hidden;
  backface-visibility: hidden;

  .menu-sec-backcol {
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, var(--lightBlue), var(--deepBlue));
    background-size: 100%;
    z-index: -1;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    position: fixed;
    height: 100%;
    width: 100%;
  }

  .menu-layer {
    position: relative;
    background: var(--textbase);
    height: 100%;
    overflow: hidden;
    .menu-city-background {
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      position: absolute;
      height: 100%;
      width: 100%;
      opacity: 0;
    }

    .wrapper {
      position: relative;
      padding: 0 48px;
      .menu-links {
        display: flex;
        justify-content: space-between;
        align-items: center;
        position: relative;
        top: 200px;
        nav {
          display: block;
          margin-bottom : 6rem;
          .nav-routes {
            padding: 0;
            margin: 0;
            h1 {
              font-weight: 700;
              margin-bottom: 3rem;
              font-size : 9rem;
              position: relative;
              height: 100px;
              overflow: hidden;
              width: 700px;
              backface-visibility: hidden;
              a {
                position: absolute;
                cursor: pointer;
                width: fit-content;
                color: #fff;
                text-decoration: none;
                height: inherit;
                &:hover {
                  background-color: #f3ec78;
                  background-image: linear-gradient(120deg, var(--lightBlue), var(--deepBlue));
                  background-size: 100%;
                  -webkit-background-clip: text;
                  -moz-background-clip: text;
                  -webkit-text-fill-color: transparent; 
                  -moz-text-fill-color: transparent;
                }
              }
            }
          }
        }
        .info {
        color: #fff;
        width: 300px;
        h3 {
          color: #fff !important;
          font-weight: 600;
          text-align: left;
          font-size: 1.6rem;
          margin: 8px 0;
        }
        p {
          margin: 0;
          font-size: 1rem;
          color : var(--text2);
        }
      }
      }
   
      .locations {
        position: absolute;
        bottom: -190px;
        color: #fff;
        margin-top: 16px;
        font-size: 1.4rem;
        font-weight: 600;
        span {
          &:first-child {
            margin-left: 64px;
            &:hover{
              color : #4267B2;
            }
          }
          &:nth-child(2){
            &:hover{
              color :  #0e76a8;
            }
          }
          &:nth-child(3){
            &:hover{
              color :  #1DA1F2;
            }
          }
           &:nth-child(4){
            &:hover{
              color :  #053eff;
            }
          }
          &:nth-child(5){
            &:hover{
              color :  #fafafa;
            }
          }
          cursor: pointer;
          margin: 0 32px;
          transition: 0.3s ease-in-out;
        }
      }
    }
  }

  .container {
    width: 1280px;
    min-width: 1280px;
    margin: 0 auto;
  }

  .wrapper {
    padding: 0 48px;
  }
  p {
    font-size: 1.4rem;
    letter-spacing: 0.3rem;
    text-transform: uppercase;
    font-weight: 500;
  }
`

export default Hamburger
