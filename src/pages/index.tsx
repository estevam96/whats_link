import React, { useState } from 'react'
import Head from 'next/head'
import {
  Button,
  Container,
  Input,
  Picture,
  PictureWrapper
} from '../styles/pages/Home.page'

const Home: React.FC = () => {
  const [phone, setPhone] = useState('')

  const generateLink = (): void => {
    const clearNumber = phone.replace(/([^\d])+/gim, '')
    window.open(
      `${process.env.NEXT_PUBLIC_WHATSAPP_LINK}${clearNumber}`,
      '_blank'
    )
  }

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
          value={phone}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setPhone(e.target.value)
          }
        />
        <Button onClick={generateLink}>
          <b>Gerar link</b>
        </Button>
      </Container>
    </>
  )
}

export default Home
