import { createGlobalStyle } from 'styled-components'

export const Cores = {
  corBranco: '#eeeeee',
  corCinza: '#333333',
  corCinzaClaro: '#A3A3A3',
  corPreto: '#111111',
  corVerde: '#10AC84'
}

export const GlobalCss = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: Roboto, sans-serif;
    list-style: none;
  }

  body {
    background-color: ${Cores.corPreto};
    color: ${Cores.corBranco};
    padding-top: 40px;
  }

  .container {
    max-width: 1024px;
    width: 100%;
    margin: 0 auto;
  }
`
