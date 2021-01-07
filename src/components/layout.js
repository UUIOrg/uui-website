/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header" 
import Footer from "./footer"
import '../fonts/Volte-Bold/style.css'
import '../fonts/Volte-Semibold/style.css'
import '../fonts/Volte-Medium/style.css'
import '../fonts/Volte-Regular/style.css'
import '../fonts/Volte-Light/style.css'
import styled from "styled-components"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div>
        <Main>{children}</Main>
        <Footer />
      </div>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}


export default Layout

const Main = styled.main`
width : 100%;
display:flex;
justify-content :  center;
`