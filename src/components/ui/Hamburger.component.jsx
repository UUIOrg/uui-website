import React from 'react'
import styled from 'styled-components';

const Hamburger = ({state,onClick}) => {
    return (
        <Menu className={state ? ` open`: ``}
        onClick={onClick}>
            <div className="line-menu half start"></div>
            <div className="line-menu"></div>
            <div className="line-menu half end"></div>
        </Menu>
    )
}

export default Hamburger
 
const Menu = styled.div`
  width: 35px;
  height: 23px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  cursor: pointer;
  transition: transform 330ms ease-out;
  z-index : 10000;
  mix-blend-mode : difference;

&.open {
  transform: rotate(-45deg);  
}

.line-menu {
  background-color: #000;
  border-radius: 50px;
  width: 100%;
  height: 4px;
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