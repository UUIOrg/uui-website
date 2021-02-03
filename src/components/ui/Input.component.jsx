import React from 'react'
import styled from 'styled-components'

const Input = ({inputType,value,onChange,InputConfig},ref) => {
    return (
        <Element
			ref={ref}
            EleType={inputType} 
            value={value}
            onChange={onChange}
            {...InputConfig}
        />
    )
}

export default React.forwardRef(Input)


const Element = React.forwardRef(({EleType,...otherInpProps},ref) =>  
    <InputElement className="input input--nao">
        <EleType className="input__field input__field--nao" id="input-1" {...otherInpProps} ref={ref}/>
        <svg className="graphic graphic--nao" width="300%" height="100%" viewBox="0 0 1200 60" preserveAspectRatio="none">
            <path d="M0,56.5c0,0,298.666,0,399.333,0C448.336,56.5,513.994,46,597,46c77.327,0,135,10.5,200.999,10.5c95.996,0,402.001,0,402.001,0"/>
        </svg>
    </InputElement>)

const InputElement = styled.div`
    position: relative;
	z-index: 1;
	display: inline-block;
	margin: 1em 0;
	max-width: 900px;
	width: calc(100% - 2em);
	vertical-align: top;
.input__field {
	font-family: 'Volte';
	position: relative;
	display: block;
	float: right;
	padding: 0.8em;
	width: 100%;
	border: none;
	border-radius: 0;
	background: #f0f0f0;
	font-weight: 500;
	-webkit-appearance: none; 
    resize:none;
	font-size : 2.5rem;
	::-webkit-input-placeholder{
		color : var(--text2);
		font-size : 2.5rem;
	}
}

.input__field:focus {
	outline: none;
}

.input__label {
	display: inline-block;
	float: right;
	padding: 0 1em;
	width: 40%;
	color: var(--text2);
	font-weight: bold;
	font-size: 70.25%;
	-webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
	-webkit-touch-callout: none;
	-webkit-user-select: none;
	-khtml-user-select: none;
	-moz-user-select: none;
	-ms-user-select: none;
	user-select: none;
}

.input__label-content {
	position: relative;
	display: block;
	padding: 1.6em 0;
	width: 100%;
}

.graphic {
	position: absolute;
	top: 0;
	left: 0;
	fill: none;
}

.icon {
	color: #ddd;
	font-size: 150%;
}
& {
	overflow-x: hidden;
	padding-top: 1em;
}

.input__field--nao {
	padding: 0.5em 0em 0.7em;
	width: 100%;
	background: transparent;
	font-size: 1.25em;
}

.input__label--nao {
	position: absolute;
	top: -0.9em;
	font-size: 1.2em;
    font-weight:500;
	left: 0;
	display: block;
	width: 100%;
	text-align: left;
	padding: 0em;
	pointer-events: none;
	-webkit-transform-origin: 0 0;
	transform-origin: 0 0;
	-webkit-transition: -webkit-transform 0.3s 0.1s, color 1s;
	transition: transform 0.3s 0.1s, color 1s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
}

.graphic--nao {
	stroke: var(--text2);
    stroke-width: 1.5px;
	pointer-events: none;
	-webkit-transition: -webkit-transform 0.7s, stroke 0.7s;
	transition: transform 0.7s, stroke 0.7s;
	-webkit-transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
	transition-timing-function: cubic-bezier(0, 0.25, 0.5, 1);
} 

.input__field--nao:focus + .input__label--nao,
.input--filled .input__label--nao {
	color: #333;
	-webkit-transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
	transform: translate3d(0, -1.25em, 0) scale3d(0.75, 0.75, 1);
}

.input__field--nao:focus ~ .graphic--nao,
.input--filled .graphic--nao {
	stroke: var(--text2);
    stroke-width: 1.5px;
	-webkit-transform: translate3d(-66.6%, 0, 0);
	transform: translate3d(-66.6%, 0, 0);
}
`