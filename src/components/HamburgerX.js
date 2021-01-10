import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const Hamburger = props => {
  return (
    <HamburgerMenu>
      <div className="menu-sec-backcol"></div>

      <div className="menu-layer">
        <div className="menu-city-background"></div>
        <div className="container">
          <div className="wrapper">
            <div className="menu-links">
              <nav>
                <ul>
                  <li>
                    <Link to="/">Opportunities</Link>
                  </li>
                  <li>
                    <Link to="/solutions">Solutions</Link>
                  </li>
                  <li>
                    <Link to="/form">Contact us</Link>
                  </li>
                </ul>
              </nav>
              <div className="info">
              <h3>Our Promise</h3>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Tenetur odit aliquam cum modi veritatis, aperiam commodi
                perferendis, rerum provident non assumenda, laudantium quasi
                nostrum. Reiciendis sit minus architecto dolores magnam?
              </p>
            </div>
            </div>
            
            <div className="locations">
              Locations:
              <span>Kolkata</span>
              <span>Bengaluru</span>
              <span>Chennnai</span>
              <span>Hyderabad</span>
              <span>Delhi</span>
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

  .menu-sec-backcol {
    background-color: #000;
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
    background: red;
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
          ul {
            padding: 0;
            margin: 0;
            li {
              list-style: none;
              font-size: 6rem;
              font-weight: 700;
              cursor: pointer;
              height: 135px;
              overflow: hidden;
              position: relative;
              width: 700px;
              a {
                position: absolute;
                color: #fff;
                text-decoration: none;
                &:hover {
                  color: #000;
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
          margin: 8px;
        }
        p {
          color: #fff !important;
          margin: 0;
          font-size: 1rem;
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
          }
          cursor: pointer;
          margin: 0 32px;
          transition: 0.3s ease-in-out;
          &:hover {
            background: #000;
            padding: 8px 24px;
            border-radius: 4px;
          }
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
