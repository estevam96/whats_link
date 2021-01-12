import React from 'react'
import Head from 'next/head'
import {
  Button,
  Container,
  Input,
  Picture,
  PictureWrapper
} from '../styles/pages/Home.page'

const Home: React.FC = () => {
  return (
    <>
      <Container>
        <Head>
          <title>WhastLink</title>
        </Head>
        <PictureWrapper>
          <Picture src="/assets/chat.svg" alt="chat" width={200} height={150} />
        </PictureWrapper>
        <Input
          type="text"
          placeholder="(88) 9 9999-9999"
          mask="99999999999"
          maskChar=" "
        />
        <Button>
          <b>Gerar link</b>
        </Button>
      </Container>
    </>
  )
}

export default Home
