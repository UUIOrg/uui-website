import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap');

    html{
        font-size : 62.5%
    }
    html,
    body {
    padding: 0;
    margin: 0;
    overflow-x : hidden;
    font-family: 'Inter', sans-serif;
    }

    a {
    color: inherit;
    text-decoration: none;
    }

    * {
    box-sizing: border-box;
    }
    h1,h2,h3,h4,h5,h6{
        padding: 0;
        margin: 0;
    }
    h1{
        font-size : 6rem;
        font-weight : 800;
    }
    `
export default GlobalStyles