import React from 'react'
import { Container } from './styles'
import { List } from '../List'



export const Board = () => {
  return (
    <Container>
      <List />
      <List />
      <List />
      <List />
    </Container>
  )
}