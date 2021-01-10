import React from 'react'
import Head from 'next/head'
import { Container } from '../styles/pages/Home.page'

const Home: React.FC = () => {
  return (
    <Container>
      <Head>
        <title>WhastLink</title>
      </Head>
      <h1>Olá Mundo</h1>
    </Container>
  )
}

export default Home
