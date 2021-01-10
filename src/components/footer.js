import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const footer = props => {
  return (
    <FooterContainer>
      <div className="row">
        <h1 className="footer__title default">Got an Idea?</h1>
        <h2 className="footer__title--extend">Let us give it shape.</h2>

        <div className="footer__bottom">
          <div className="footer__contact">
            <Link
              to="mailto:uui@gmail.com"
              className="default border email link"
            >
              urbui0221@gmail.com
            </Link>
            <h6 className="default location">Kolkata | India</h6>
          </div>

          <div className="social__links">
            <Link to="www.fb.com" className="link">
              Facebook
            </Link>
            <Link to="www.instagram.com" className="link">
              LinkedIn
            </Link>
            <Link to="www.linkedin.com" className="link">
              Github
            </Link>
          </div>
        </div>
      </div>
        
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  padding: 100px 10vw 70px 10vw;

  & > div{
    width: 100%;
  }
  font-family: "Volte";
  h1{
      background-color: #f3ec78;
      background-image: linear-gradient(
        120deg,
        var(--lightBlue),
        var(--deepBlue)
      );
      background-size: 100%;
      -webkit-background-clip: text;
      -moz-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;
      -moz-text-fill-color: transparent;
      text-overflow: -o-ellipsis-lastline;
      margin-bottom:2rem;
      font-weight : 600;
  }
  h2 {
      font-weight: 400;
  }
  background-color: var(--textbase);

  .social__links {
    display: flex;
    align-items: center;
    font-weight : 500;

    & > *:not(:last-child) {
      margin-right: 40px;
    }
  }

  .email {
    padding-bottom: 10px;
  }

  .link {
    color: inherit;
    text-decoration: none;
  }

  .default {
    color: #fff;
    font-weight: 300;
  }

  .border {
    border-bottom: 1px solid #fff;
    display: inline-block;
  }

  .location {
    margin-top: 10px;
  }

  .footer {
    &__title {
      font-weight: 500;
    }

    &__title--extend {
      font-weight: 400;
      color: #f4f4f4;
      padding-bottom: 20px;
    }

    /* &__contact {
            margin-top: 100px;
        } */

    &__bottom {
      margin-top: 100px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
     a{  font-weight : 400;font-size : 2rem; }
     h6{ font-weight : 400; color : var(--text2); }
    }
  }
`

export default footer
