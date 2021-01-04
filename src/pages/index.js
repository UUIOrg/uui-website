import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"

const Form = (props) => {

  console.log(props)

  useEffect(() => {
    navigate('/form')
  })  
  return (
    <>
        <SEO title="Home" />
        
    </>
  )
}

export default Form

