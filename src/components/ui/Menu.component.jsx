import React from 'react'
import styled from 'styled-components'

const Menu = () => {
    return (
    <Hamburger>
        <input type="checkbox" />
        <div></div>
        <div></div>
        <div></div>
    </Hamburger>
    )
}

export default Menu


const Hamburger = styled.label`
    display: block;
    width: 40px;
    height: 36px;
    position: relative;
    cursor: pointer;
    div {
        position: absolute;
        height: 4px;
        border-radius: 2px;
        background: #000;
        transition: transform .45s cubic-bezier(.9, -.6, .3, 1.6), width .2s ease .2s;
    }
    input {
        display: none;
        & + div {
            top: 50%;
            left: 0;
            margin: -2px 0 0 0;
            width: 40px;
            transform-origin: 50% 50%;
            & + div {
                top: 2px;
                left: 0;
                width: 20px;
                transform-origin: 0 50%;
                & + div {
                    bottom: 2px;
                    right: 0;
                    width: 28px;
                    transform-origin: 100% 50%;
                    transform: translate(-12px, 0);
                }
            }
        }
        &:checked + div {
            transform: rotate(-45deg);
            transition: transform .45s cubic-bezier(.9, -.6, .3, 1.6) .1s;
            & + div {
                width: 19px;
                transform: translate(6px, 0) rotate(45deg);
                transition: transform .45s cubic-bezier(.9, -.6, .3, 1.6) .1s, width .2s ease;
                & + div {
                    width: 19px;
                    transform: translate(-6px, 0) rotate(45deg);
                    transition: transform .45s cubic-bezier(.9, -.6, .3, 1.6) .1s, width .2s ease;
                }
            }
        }
    }
`