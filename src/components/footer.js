import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const footer = props => {
  return (
    <FooterContainer>
    <div className="row">
    <h2 className="footer__title default">Got an Idea?</h2>
    <h2 className="footer__title--extend border">Let us give it shape.</h2>

    <div className="footer__bottom">
      <div className="footer__contact">
        <Link to="mailto:uui@gmail.com" className="default border email link">
          urbui0221@gmail.com
        </Link>
        <h4 className="default location">Kolkata | India</h4>
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
font-family: 'Volte';
h2{
  &:first-child{
    font-weight: 500;
    background-color: #f3ec78;
    background-image: linear-gradient(120deg, var(--lightBlue), var(--deepBlue));
    background-size: 100%;
    -webkit-background-clip: text;
    -moz-background-clip: text;
    background-clip: text;
    -webkit-text-fill-color: transparent; 
    -moz-text-fill-color: transparent;
    text-overflow: -o-ellipsis-lastline;
    font-size: 4rem;
  }
  &:last-child{
    font-weight: 400;
  }
}
  background-color: var(--textbase);
  /* padding: 100px 10vw 70px 10vw; */

  .social__links {
    display: flex;
    align-items: center;

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
    }
  }
`

export default footer
