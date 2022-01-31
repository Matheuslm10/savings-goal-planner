import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Work Sans', sans-serif, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    background-color: #F4F8FA;
  }

  ::-webkit-scrollbar {
    height: 3px;
    width: 3px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    background: #f4f8fa;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #8A9CA9;
  }

  /* Handle on hover */
  ::-webkit-scrollbar-thumb:hover {
    background: #4d6475;
  }

  /* Firefox */
  scrollbar-width: thin;

`
export default GlobalStyle
