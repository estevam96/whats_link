import styled from 'styled-components'
import Image from 'next/image'
import InputMask from 'react-input-mask'
import { Picker, Emoji } from 'emoji-mart'

interface TextAreaWrapperProps {
  focus: boolean
}

export const Container = styled.div`
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h1 {
    font-size: 54px;
    color: ${props => props.theme.colors.primary};
    margin-top: 40px;
  }
  p {
    margin-top: 24px;
    font-size: 24px;
    line-height: 32px;
  }
`
export const Input = styled(InputMask)`
  width: 20%;

  @media (max-width: 425px) {
    width: 80%;
  }

  @media (max-width: 1024px) {
    width: 50%;
  }
`
export const Button = styled.button`
  width: 150px;
  background: linear-gradient(
    to bottom,
    ${props => props.theme.colors.purple_light},
    ${props => props.theme.colors.purple}
  );
  &:hover {
    background: linear-gradient(to bottom, #eb00ff, #b91da3);
  }
`
export const PictureWrapper = styled.div`
  margin-bottom: 20px;
`
export const Picture = styled(Image)`
  margin: 200px;
`
export const TextAreaWrapper = styled.div<TextAreaWrapperProps>`
  width: 20%;
  padding: 5px;
  margin-top: 15px;
  border: 1px solid #bdc3c7;
  border-radius: 10px;
  background-color: white;
  ${({ focus, theme }) =>
    focus &&
    `outline: none;
    border: 1px solid ${theme.colors.primary};
    box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
    -webkit-box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
    -moz-box-shadow: -5px 7px 6px 0px rgba(192, 182, 182, 1);
   `}

  @media screen and (max-width: 1024px) {
    width: 50%;
  }
  @media screen and (max-width: 425px) {
    width: 80%;
    font-size: 0.7em;
  }
`
export const EmojiBTN = styled(Emoji)`
  background-color: transparent;
  &:hover {
    background-color: transparent;
  }
`
export const EmojiPicker = styled(Picker)`
  width: 100%;
`
export const TextArea = styled.textarea`
  width: 100%;
  padding: 5px;
  border: none;
  outline: none;
  @media screen and (max-width: 425px) {
    font-size: 1em;
  }
`
export const EmojiWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;
`

TextAreaWrapper.defaultProps = {
  focus: false
}
