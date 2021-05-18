import styled, { createGlobalStyle, css } from "styled-components";

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
    color: #fbfbfb;
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
`;

export const Wrapper = styled.section.attrs(({ $color }) => ({
  style: {
    backgroundColor: `hsl(${$color}, 79%, 53%)`,
  },
}))`
  align-items: center;
  display: flex;
  height: 100vh;
  justify-content: center;
  width: 100vw;
`;

export const ImageContainer = styled.div.attrs(({ $isTogether }) => ({
  style: {
    animation: $isTogether ? "glow 3s infinite alternate" : "none",
  },
}))`
  display: flex;
  flex-wrap: wrap;
  height: 600px;
  position: relative;
  width: 400px;
`;

export const AbsoluteCenter = css`
  left: 50%;
  top: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
`;

export const Button = styled.button`
  ${AbsoluteCenter}
  background: none;
  border: 2px solid #fbfbfb;
  border-radius: 100%;
  color: #fbfbfb;
  cursor: pointer;
  font-size: 34px;
  font-weight: 600;
  font-family: "Work Sans", sans-serif;
  line-height: 1;
  text-transform: uppercase;
  padding: 25px 0 20px;
  width: 300px;
  z-index: 1;

  @media (max-width: 700px) {
    font-size: 24px;
    width: 220px;
  }
`;
