import React from 'react'
import * as S from './styles'

export type TextProps = {
  content: string
}

const Text = ({ content }: TextProps) => {
  return <S.H1>{content}</S.H1>
}

export default Text
