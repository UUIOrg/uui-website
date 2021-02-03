import React from 'react'
import styled from 'styled-components';

const Hamburger = ({state,onClick}) => {
    return (
        <Menu BgCol={state.clicked === false || state.clicked === null ? "#000" : "#FFF"}
        onClick={onClick}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
        </Menu>
    )
}

export default Hamburger

const Menu = styled.button`
  border:none;
  outline: none;
  background-color: transparent;
  width: 50px;
  height: 25px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
  z-index : 10000;
&.open {
  transform: rotate(-45deg);  
}

.line-menu {
  background-color: ${props => props.BgCol};
  border-radius: 50px;
  width: 100%;
  height: 4px;
  mix-blend-mode : difference;
}

.line-menu.half {
  width: 60%;
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
  align-self: flex-end;
}

&.open .line-menu.start {
  transform: rotate(-90deg) translateX(3px);
}

.line-menu.end {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: left;
  align-self: flex-end;
}

&.open .line-menu.end {
  transform: rotate(-90deg) translateX(-3px);
}

.line-menu.start {
  transition: transform 330ms cubic-bezier(0.54, -0.81, 0.57, 0.57);
  transform-origin: right;
  align-self: flex-start;
}


`