import React from 'react'
import styled from 'styled-components'
import Announcement from '../components/home/Announcement'
import Categories from '../components/home/Categories'
import Discount from '../components/home/Discount'
import ItemCard from '../components/home/ItemCard'

const Container = styled.div`
   max-width: 90%;
   margin: auto;
`

function Home() {

  return (
    <>
      <Container>
          <Announcement/>
          <Discount/>
          <Categories/>
          <ItemCard/>
      </Container>
    </>
  )
}

export default Home
