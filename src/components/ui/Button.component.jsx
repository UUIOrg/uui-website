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
/*${props => props.options && css`
      mix-blend-mode : difference;
      position: relative;
      overflow: hidden;
      &:hover {
        color: #fff;
        &:after {
          width: 100%;
        }
      }

      &::before {
        background: var(--textbase);
        content: "";
        position: absolute;
        z-index: -1;
        border-radius : 2.5rem;
      }

      &::after {
        height: 100%;
        left: 0;
        top: 0;
        width: 0;
        background: var(--textbase);
        content: "";
        position: absolute;
        z-index: -1;
        -webkit-transition: all 0.6s;
        -moz-transition: all 0.6s;
        -o-transition: all 0.6s;
        transition: all 0.6s;
        border-radius : 2.5rem;
      }
    }
`}*/
`