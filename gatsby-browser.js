/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.com/docs/browser-apis/
 */

// You can delete this file if you're not using it


const { createGlobalStyle } = require('styled-components')
const React = require("react")
const Layout = require("./src/components/layout").default
const { Provider } = require('react-redux')
const { default :{ store } } = require('./src/store/store');

const GlobalStyles = createGlobalStyle`
:root{
  --font : 'Volte';
  --textbase : #000;
  --text : rgba(156, 163, 175, 1);
  --text2 : rgb(175, 175, 175);
  --deepBlue :  #0093E9;
  --lightBlue : #80D0C7;
}

html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 112.5%/1.45em georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  width:100vw;
  height:100vh;
  overflow-x:hidden;
  font-family : var(--font);
  color : var(--text2);
  margin: 0;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: hsla(0, 0%, 0%, 0.8);
  word-wrap: break-word;
  font-kerning: normal;
  -moz-font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-font-feature-settings: "kern", "liga", "clig", "calt";
  -webkit-font-feature-settings: "kern", "liga", "clig", "calt";
  font-feature-settings: "kern", "liga", "clig", "calt";
  -ms-overflow-style: none;
  scrollbar-width: none;
  user-select: none;
}

h1 {
  font-family : var(--font);
  font-weight: 900;
  font-style : normal;
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 0rem;
  color: var(--textbase);
  text-rendering: optimizeLegibility;
  font-size: 5rem;
  line-height: 1.1;
  font-weight: ${props => props.weight || '700'};
  font-style: normal;
}
h2 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: var(--textbase);
  font-weight: ${props => props.weight || '600'};
  font-style: normal;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 3.62671rem;
  line-height: 1.1;
}
h3 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: var(--textbase);
  font-weight: 500;
  font-weight: ${props => props.weight || '500'};
  text-rendering: optimizeLegibility;
  font-size: 1.4;
  line-height: 1.1;
}
h4 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: var(--textbase);
  font-weight: ${props => props.weight || '500'};
  font-style: normal;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 1rem;
  line-height: 1.1;
}
h5 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: var(--textbase);
  font-weight: ${props => props.weight || '400'};
  text-rendering: optimizeLegibility;
  font-size: 0.85028rem;
  line-height: 1.1;
}
h6 {
  margin-left: 0;
  margin-right: 0;
  margin-top: 0;
  padding-bottom: 0;
  padding-left: 0;
  padding-right: 0;
  padding-top: 0;
  margin-bottom: 1.45rem;
  color: var(--textbase);
  font-weight: ${props => props.weight || '400'};
  text-rendering: optimizeLegibility;
  font-size: 0.78405rem;
  line-height: 1.1;
}
p,div,section,main{
  color : var(--text2);
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: N; 
}
::-webkit-scrollbar {
  display: none;
}

`
exports.wrapPageElement = ({ element, props }) => {
  return <Layout {...props}>{element}</Layout>
}

exports.wrapRootElement = ({ element}) => (
  <React.Fragment>
       <GlobalStyles />
       {element}
  </React.Fragment>
)