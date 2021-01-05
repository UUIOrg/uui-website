import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

const footer = props => {
  return (
    <FooterContainer>
      <h2 className="footer__title default">Got an Idea?</h2>
      <h2 className="footer__title--extend border">Let us give it shape.</h2>

      <div className="footer__bottom">
        <div className="footer__contact">
          <Link to="mailto:uui@gmail.com" className="default border email link">
            urbanui@gmail.com
          </Link>
          <h4 className="default location">Kolkata | India</h4>
        </div>

        <div className="social__links">
          <Link to="www.fb.com" className="link">
            Facebook
          </Link>
          <Link to="www.instagram.com" className="link">
            Instagram
          </Link>
          <Link to="www.linkedin.com" className="link">
            LinkedIn
          </Link>
        </div>
      </div>
    </FooterContainer>
  )
}

const FooterContainer = styled.div`
  background-color: #000;
  padding: 100px 200px 70px 200px;

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
