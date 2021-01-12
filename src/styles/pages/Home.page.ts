import styled from 'styled-components'
import Image from 'next/image'
import InputMask from 'react-input-mask'

export const Container = styled.div`
  width: 100vw;
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
