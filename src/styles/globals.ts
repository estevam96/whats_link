import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body{
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    font: 400 16px Roboto, sans-serif;
  }

  input{
    height: 40px;
    width: 100%;
    padding: 5px;
    border: 1px solid #bdc3c7;
    border-radius: 10px;
    text-align: center;
    &:focus {
      outline: none;
      border: 1px solid ${props => props.theme.colors.primary};
      box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
      -webkit-box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
      -moz-box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
    }
  }

  button{
    height: 40px;
    border: 1px solid #bdc3c7;
    padding: 0 20px;
    background-color: ${props => props.theme.colors.primary};
    color: white;
    text-align: center;
    margin: 5px;
    display: inline-block;
    font-weight: 400;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    font-size: 1rem;
    line-height: 1.5;
    border-radius: .25rem;
    cursor: pointer;
    &:hover {
      color: ${props => props.theme.colors.light};
      background-color:  ${props => props.theme.colors.primary};
      border-color: ${props => props.theme.colors.primary};
    };
    &:focus {
     outline: none;
    }
  }
`
