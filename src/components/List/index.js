import React from 'react'
import { Container } from './styles'
import {MdAdd} from 'react-icons/md'
import { Card } from '../Card'

export const List = ({data}) => {
  return (
    <Container done={data.done}>
      <header>
        <h2>{data.title}</h2>
        {data.creatable && (
          <button type='button'>
            <MdAdd size={24} color='#fff' />
          </button>
        )}
      </header>
      <ul>
        {data.cards.map((card, index) => (
          <Card key={card.index} index={index} data={card} />
        ))}
      </ul>
    </Container>
  )
}