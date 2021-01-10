

const { createGlobalStyle } = require('styled-components')
const React = require("react")
const Layout = require("./src/components/layout").default
const { Provider } = require('react-redux')
const { default :{ store } } = require('./src/store/store');
const { default: Cursor } = require('./src/components/ui/Cursor.component');

const GlobalStyles = createGlobalStyle`
:root{
  --font : 'Volte';
  --textbase : #000;
  --text : rgba(156, 163, 175, 1);
  --text2 : rgb(175, 175, 175);
  --deepBlue :  #0093E9;
  --lightBlue : #80D0C7;
}

.row {
  max-width: 130rem;
  margin: 0 auto; }
  .row:not(:last-child) {
    margin-bottom: 8rem; }
    @media only screen and (max-width: 56.25em) {
      .row:not(:last-child) {
        margin-bottom: 6rem; } }
  @media only screen and (max-width: 56.25em) {
    .row {
      max-width: 50rem;
      padding: 0 3rem; } }
  .row::after {
    content: "";
    clear: both;
    display: table; }
  .row [class^="col-"] {
    float: left; }
    .row [class^="col-"]:not(:last-child) {
      margin-right: 6rem; }
      @media only screen and (max-width: 56.25em) {
        .row [class^="col-"]:not(:last-child) {
          margin-right: 0;
          margin-bottom: 6rem; } }
    @media only screen and (max-width: 56.25em) {
      .row [class^="col-"] {
        width: 100% !important; } }
  .row .col-1-of-2 {
    width: calc( (100% - 6rem) / 2); }
  .row .col-1-of-3 {
    width: calc( (100% - 2*(6rem) ) / 3); }
  .row .col-1-of-4 {
    width: calc( (100% - 3*(6rem) ) / 4); }
  .row .col-2-of-3 {
    width: calc( 2*( (100% - 2*(6rem) ) / 3 ) + 6rem); }
  .row .col-2-of-4 {
    width: calc(( 2*(100% - 3*(6rem) ) / 4 ) + 6rem); }
  .row .col-3-of-4 {
    width: calc( ( 3*(100% - 3*(6rem) ) / 4 ) + 2*6rem); }


html {
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  font: 62.5% georgia, serif, sans-serif;
  box-sizing: border-box;
  overflow-y: scroll;
}
body {
  backface-visibility: hidden;
  width:100vw;
  height:100vh;
  overflow-x:hidden;
  font-family : var(--font);
  color : var(--text2);
  margin: 0;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
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
  font-size: 1.8rem;
}
.image {
  width: 100%;
  height: auto;
  object-fit: contain;
}
a {
  color: var(--textbase);
  text-decoration: none;
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
  color: var(--textbase);
  text-rendering: optimizeLegibility;
  font-size: 7.5rem;
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
  color: var(--textbase);
  font-weight: ${props => props.weight || '600'};
  font-style: normal;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 5.5rem;
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
  color: var(--textbase);
  font-weight: 500;
  font-weight: ${props => props.weight || '500'};
  text-rendering: optimizeLegibility;
  font-size: 3rem;
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
  color: var(--textbase);
  font-weight: ${props => props.weight || '500'};
  font-style: normal;
  font-weight: bold;
  text-rendering: optimizeLegibility;
  font-size: 2.5rem;
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
  color: var(--textbase);
  font-weight: ${props => props.weight || '400'};
  text-rendering: optimizeLegibility;
  font-size: 2rem;
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
  color: var(--textbase);
  font-weight: ${props => props.weight || '400'};
  text-rendering: optimizeLegibility;
  font-size: 1.5rem;
  line-height: 1.1;
}
p,div,section,main{
  color : var(--text2);
  text-overflow: ellipsis;
  display: -webkit-box;
   -webkit-box-orient: vertical;
   -webkit-line-clamp: N; 
}

button{
  color : var(--text2);
  font-size: 2rem;
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