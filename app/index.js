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

const Cover = styled.span`
  display: block;
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

function CardPresentation ({title, description, photo, path, preparePushState}) {
  return (
    <div>
      <Container>
        <ContainerCard>
          <Cover style={{
            backgroundImage: `url(${photo})`
          }}></Cover>
          <BodyCard>
            <span>
              {path} —
              <a href="/page/a1" onClick={preparePushState('/page/a1')}>A1</a> –
              <a href="/page/a2" onClick={preparePushState('/page/a2')}>A2</a> –
              <a href="/page/a3" onClick={preparePushState('/page/a3')}>A3</a>
            </span>
            <TitleCard>{title}</TitleCard>
            <TextCard>{description}</TextCard>
          </BodyCard>
        </ContainerCard>
      </Container>
    </div>
  )
}

// Make a card to write a person
export default function App ({path, preparePushState}) {

  switch (path) {
    case '/page/a1': return (
      <CardPresentation
        photo={demoData[0][2]}
        title={demoData[0][0]}
        description={demoData[0][1]}
        path={path}
        preparePushState={preparePushState} />
    )
    case '/page/a2': return (
      <CardPresentation
        photo={demoData[1][2]}
        title={demoData[1][0]}
        description={demoData[1][1]}
        path={path}
        preparePushState={preparePushState} />
    )
  }

  return (
    <div>
      <span>
        {path} —
        <a href="/page/a1" onClick={preparePushState('/page/a1')}>A1</a> –
        <a href="/page/a2" onClick={preparePushState('/page/a2')}>A2</a> –
        <a href="/page/a3" onClick={preparePushState('/page/a3')}>A3</a>
      </span>
    </div>
  )
}

/* Only Example */
const demoData = [
  [
    "Data Example 1: Lorem ipsum dolor sit.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vitae voluptatum, alias illum quis cupiditate, corrupti reiciendis, animi eius rem hic vero suscipit cum ullam itaque aliquam, voluptate! Dignissimos fugiat, alias!",
    "https://images.pexels.com/photos/262941/pexels-photo-262941.jpeg?dl&fit=crop&w=640&h=426"
  ],
  [
    "Data Example 2: Lorem ipsum dolor sit amet, consectetur.",
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aperiam iusto ad, natus voluptate ab officiis amet culpa ex magnam dolorum placeat quod tempore quo quis! Adipisci consectetur ratione, fuga magnam.",
    "https://images.pexels.com/photos/164859/pexels-photo-164859.jpeg?dl&fit=crop&w=640&h=388"
  ]
]
