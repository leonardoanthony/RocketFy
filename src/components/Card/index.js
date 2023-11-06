import React, { useRef } from 'react'
import { Container, Label } from './styles'
import { useDrag, useDrop } from 'react-dnd'

export const Card = ({data, index}) => {

  const ref = useRef();

  const [{isDragging}, dragRef] = useDrag({
    type: 'CARD',
    item: {
      index
      // id: data.id,
    },
    collect: monitor => ({
      isDragging: monitor.isDragging()
    })
  })

  const [, dropRef] = useDrop({
    accept: 'CARD',
    hover(item, monitor){
      console.log('drag', item.index);
      console.log('drop', index);
    }
  })

  dragRef(dropRef(ref));



  return (
    <Container ref={ref} isDragging={isDragging}>
      <header>
        {data.labels.map(label => <Label key={label} color={label} />)}
      </header>
      <p>{data.content}</p>
      <img src={data.user && 'https://avatars.githubusercontent.com/u/67436042?v=4'} alt='' />

    </Container>
  )
}