import React, { useState } from 'react'
import { Emoji, EmojiData } from 'emoji-mart'
import Head from 'next/head'
import {
  Button,
  Container,
  Input,
  Picture,
  PictureWrapper,
  TextArea,
  EmojiWrapper,
  TextAreaWrapper,
  EmojiPicker,
  EmojiBTN
} from '../styles/pages/Home.page'
import 'emoji-mart/css/emoji-mart.css'

const Home: React.FC = () => {
  const [phone, setPhone] = useState('')
  const [text, setText] = useState('')
  const [showEmoji, setShowEmoji] = useState(false)
  const [textFocus, setTextFocus] = useState(false)

  const generateLink = (): void => {
    const clearNumber = phone.replace(/([^\d])+/gim, '')
    window.open(
      `${process.env.NEXT_PUBLIC_WHATSAPP_LINK}${clearNumber}&text=${text}`,
      '_blank'
    )
  }

  const handleEmoji = (emoji: EmojiData) => {
    console.log(typeof emoji.native);

    setText(text.concat(emoji.native))
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
        <TextAreaWrapper focus={textFocus}>
          <TextArea
            name="mensage"
            id="mensage-txt"
            placeholder="Mensagem (Opcional)"
            cols={30}
            rows={8}
            value={text}
            onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) =>
              setText(e.target.value)
            }
            onFocus={() => setTextFocus(true)}
            onBlur={() => setTextFocus(false)}
          ></TextArea>
          <EmojiWrapper>
            <EmojiBTN
              emoji="grinning"
              size={20}
              onClick={() => setShowEmoji(!showEmoji)}
            />
          </EmojiWrapper>
        </TextAreaWrapper>
        {showEmoji ? (
          <EmojiPicker
            title="Pick your emoji…"
            emoji="point_up"
            showPreview={false}
            emojiTooltip={false}
            showSkinTones={false}
            onSelect={emoji => handleEmoji(emoji)}
          />
        ) : (
          <></>
        )}
        <Button onClick={generateLink}>
          <b>Gerar link</b>
        </Button>
      </Container>
    </>
  )
}

export default Home
