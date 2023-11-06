import React from 'react'
import { Container, Label } from './styles'

export const Card = ({data}) => {
  return (
    <Container>
      <header>
        {data.labels.map(label => (
            <Label key={label} color={label} />
        ))}
      </header>
      <p>
        {data.content}
      </p>
      {data.user && (<img src={data.user} alt='' />)}
      {!data.user && (<img src='https://avatars.githubusercontent.com/u/67436042?v=4' alt='' />)}

    </Container>
  )
}