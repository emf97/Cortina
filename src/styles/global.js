import "antd/dist/antd.css";
import "antd/es/carousel/style/css";
import "antd/es/select/style/css";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    scroll-behavior: smooth;
  }

  html,
  body,
  #root {
    height: 100%;
    overflow-x: hidden;
    position: relative;
  }

  body {
    background: #fff;
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: antialiased;
  }
  h1{
    font-size: 45px;
    font-weight: bold;
    line-height: 50px;
    margin: unset;
    padding: unset;
  }
  h2{
    font-size: 45px;
    font-weight: 400;
    line-height: 50px;
    margin: unset;
    padding: unset;
  }
  h3{
    font-size: 35px;
    font-weight: bold;
    line-height: 40px;
    margin: unset;
    padding: unset;
  }
  h4{
    font-size: 35px;
    font-weight: 400;
    line-height: 40px;
    margin: unset;
    padding: unset;
  }
`;
