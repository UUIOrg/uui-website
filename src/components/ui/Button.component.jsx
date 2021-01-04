import React from 'react'
import styled, { css } from 'styled-components'

const Button = ({children,...otherBtnProps}) => <Btn {...otherBtnProps}>{children}</Btn>

export default Button

const Btn = styled.button`
--webkit-appearance : none;
background-color : ${props => props.backgroundColor || "transparent"};
border: none;
border-radius : 1.5rem;
padding: ${props => props.p || "1rem 2rem"};
cursor : pointer;
font-size: 1.2rem;
margin: 0.5rem;
border: ${props => props.border || '2px solid transparent'};
color : ${props => props.color || 'var(--text2)'};
outline: none;
${props => props.options && css`
    background0-color : ${props => props.clicked ? "grey" : "transparent"};
    color : ${props => props.clicked ? "var(--text2)" : "#white"}
`}
`