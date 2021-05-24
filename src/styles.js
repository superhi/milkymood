import styled, {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  @keyframes glow {
    0% {
      box-shadow: rgb(252, 210, 23) 0 0 0px;
    }
    100% {
      box-shadow: rgb(252, 210, 23) 0 10px 100px;
    }
  }

  body {
    color: #FBFBFB;
    font-family: 'Work Sans', sans-serif;
    font-weight: 500;
    height: 100vh;
    margin: 0;
    overflow: hidden;
    padding: 0;
    text-rendering: optimizeLegibility;
    width: 100vw;
    -webkit-font-smoothing: antialiased;
  }
`

export const Wrapper = styled.section.attrs(({$color}) => ({
  style: {
    backgroundColor: `hsl(${$color}, 79%, 53%)`,
  },
}))`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`

export const ImageContainer = styled.div.attrs(({$isTogether}) => ({
  style: {
    animation: $isTogether ? 'glow 3s infinite alternate' : 'none',
  },
}))`
  display: flex;
  flex-wrap: wrap;
  position: relative;
  height: 600px;
  width: 400px;
`
