import React from 'react'
import styled, { css } from 'styled-components'

const Button = ({children,...otherBtnProps}) => <Btn {...otherBtnProps}>{children}</Btn>

export default Button

const Btn = styled.button`
--webkit-appearance : none;
background-color : ${props => props.backgroundColor || "transparent"};
border: none;
border-radius : 2.5rem;
font-family: 'Volte';
font-weight : 500;
padding: ${props => props.p || "2rem 4rem"};
cursor : pointer;
margin : ${props => props.margin || '0'};
border: ${props => props.border || '2px solid transparent'};
color : ${props => props.color || 'var(--text2)'};
outline: none;
${props => props.options && css`
    background-color : ${props => props.clicked ? "grey" : "transparent"};
    color : ${props => props.clicked ? "var(--text2)" : "#white"}
`}
`