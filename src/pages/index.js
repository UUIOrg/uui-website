import React, { useEffect } from "react"
import { Link, navigate } from "gatsby"
import SEO from "../components/seo"

const Form = () => {
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

