import React from 'react'
import styled from 'styled-components'

const Container = styled.div`
  background: #b0bec5;
  width: 100%;
  height: 100vh;
  padding: 20px;
  box-sizing: border-box;
`

const ContainerCard = styled.div`
  display: block;
  width: 600px;
  min-height: 40px;
  background-color: #fafafa;
  margin:auto;
  margin-top: 20px;
  box-sizing: border-box;
  box-shadow:
    0px 4px 8px rgba(0, 0, 0, 0.04),
    0px 2px 4px rgba(0, 0, 0, 0.21);
`

const BodyCard = styled.div`
  padding: 20px;
  min-height: 20px;
  box-sizing: border-box;
`

const Cover = styled.img`
  height: 100px;
  background-color: #757575;
  width: 100%;
  vertical-align: top;
  background-image: url(https://images.pexels.com/photos/429247/pexels-photo-429247.jpeg?dl&fit=crop&w=640&h=429);
  background-size: cover;
  background-position: center center;
`

const TitleCard = styled.h1`
  font-family: Arial;
  color: #424242;
  font-size: 20px;
`
const TextCard = styled.h1`
  font-family: Arial;
  color: #424242;
  font-size: 12px;
`

// Make a card to write a person
export default function App (props) {
  return <div>
    {/* Content */}
    <Container>
      <ContainerCard>
        <Cover></Cover>
        <BodyCard>
          <TitleCard>Lorem ipsum dolor sit amet.</TitleCard>
          <TextCard>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero expedita incidunt iste, minima enim dolorum laudantium. Fuga harum minima omnis nobis repellendus dolorum esse, est facere neque! Quasi voluptate, cupiditate!</TextCard>
        </BodyCard>
      </ContainerCard>
    </Container>
  </div>
}