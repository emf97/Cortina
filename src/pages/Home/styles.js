import styled from 'styled-components';
import { default as BG } from '../../assets/bg-img.jpg';
import { default as cortina } from '../../assets/cortina.png';

export const Container = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  .janela-esquerda-open{
    background-image: url(${cortina});
    background-size: cover;
    background-repeat: repeat-x;
    position: absolute;
    width:50%;
    height: 100vh;

    transition: 1.5s;
    left: 0;
  }
  .janela-direita-open{
    background-image: url(${cortina});
    background-size: cover;
    background-repeat: repeat-x;
    position: absolute;
    width:50%;
    height: 100vh;

    transition: 1.5s;
    right: 0;
  }
  .janela-esquerda{
    background-image: url(${cortina});
    background-size: cover;
    background-repeat: repeat-x;
    height: 100vh;
    left: 0;
    transition: 1.5s;
    width: 0;
    position: absolute;

  }
  .janela-direita{
    background-image: url(${cortina});
    background-size: cover;
    background-repeat: repeat-x;
    position: absolute;
    height: 100vh;
    transition: 1.5s;
    right: 0;
    width: 0;
  }
  .bg{
    background-image: url(${BG});
    width: 100%;
    background-repeat: no-repeat;
    height: 100vh;
    justify-content: center;
    align-items: center;
  }
  button{
    width: 150px;
    height: 100px;
    background: #5D0AF5;
    position: absolute;
    z-index: 5;
    border: none;
    border-radius: 25px;
    bottom: 100px;
    left: 46%;
    color: #fff;
    font-size: 16px;
    font-weight: bold;
    cursor: pointer;
  }
  .table-container {
    position: absolute;
    bottom: 0;
    left: 0;
    z-index: 10;
    background: #f2f2f2;
    padding: 40px;

    table {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    tr {
      margin: 8px 0px;
    }
  }
`;
