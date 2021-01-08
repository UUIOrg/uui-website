import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styled from "styled-components"
import Hamburger from "./ui/Hamburger.component"
import HamburgerX from "./HamburgerX"
import { Logo } from './utils/icons'

const Header = ({ siteTitle }) => (
  <header>
    <HeaderContainer>
      <div className="row">
        <div class="header-content-container">
          <div className="logo">
            <Link to="/">
              <Logo size="5rem" />
            </Link>
            <div>Urban <span>UI</span></div>
          </div>
          {/*<Link className="header-link" to="#about">
            About
          </Link>
          <Link className="header-link" to="#career">
            Career
          </Link>
          <Link className="header-link" to="#blog">
            Blog
          </Link>
          <Link className="header-link btn-contact" to="#contact">
            Contact
          </Link>*/}
          <Hamburger /> 
          <HamburgerX />
        </div>
      </div>
    </HeaderContainer>
  </header>
)

const HeaderContainer = styled.nav`
  padding-top: 4.5rem;
  padding-bottom: 4rem;
  position: relative;
  z-index: 10;
  
  .logo {
    border-radius: 1rem;
    margin-right: auto;
    display :flex;
    align-items : center;
    text-transform : uppercase;
    a{
      margin-right : 1rem;
    }
    div{
      font-weight : 300;
      color: var(--textbase);
      font-size: 2.5rem;
      span{
        font-weight : 600;
      }
    }
  }
  .header {
    &-content-container {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    &-link {
      font-size: 1.6rem;
      padding: 2rem 2.7rem 2rem 2.7rem;
      font-weight: 500;
      &:not(:last-child) {
        margin-right: 3rem;
        &:hover {
          color: crimson;
        }
      }
    }
  }

  .btn {
    &-contact {
      // body {backface-visibility: hidden;} this imp. other wise :after might blink after hover
      border: 1px solid #deddfe;
      border-radius: 8px;
      line-height: 18px;
      color: #584fff;
      position: relative;
      overflow: hidden;
      padding: 20px 36px;

      &:hover {
        color: #fff;
        &:after {
          width: 100%;
        }
      }

      &::before {
        border-radius: 8px;
        background: #5a4fff;
        content: "";
        position: absolute;
        z-index: -1;
      }

      &::after {
        border-radius: 8px;
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
        background: #5a4fff;
        content: "";
        position: absolute;
        z-index: -1;
        -webkit-transition: all 0.3s;
        -moz-transition: all 0.3s;
        -o-transition: all 0.3s;
        transition: all 0.3s;
      }

      &:active {
        background-color: #5147e5;
      }
    }
  }
`

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
