import React from 'react'
import styled from 'styled-components'
import CategoriesData from './data/CategoriesData'


const Container = styled.div`

`
const Content = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
`
const Head = styled.div`
   display: flex;
   justify-content: left;
   align-items: center;
   margin-top: 20px;
   margin-bottom: 10px;
`
const Header = styled.p`
   font-size: 20px;
   font-weight: 600;
   color: #8c8c8c;
`
const Body = styled.div`
  width: 80%;
  display: grid;
  grid-template-columns: repeat(8, 1fr);
  margin-bottom: 20px;
`
const Button = styled.div`
  border: 1px solid #eff0f5;
   width: 150px;
   height: 110px;
   display:flex;
   justify-content: center;
   align-items: center;
   flex-direction: column;
   transition: all 0.3s ease 0s;
   outline: none;
   cursor: pointer;
   :hover {
    transform: translateY(-2px);    
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }
`

const Image = styled.img`
  width: 50px;
  height: 50px;
`

const Label = styled.p`
  font-size: 12px;
`
function Categories() {
  return (
    <>
    <Container>
      <Content>
        <Head>
        <Header>Categories</Header>
        </Head>
        <Body>
        {CategoriesData.map((val)=>{
          return(
            <Button>
              <Image src={val.image} alt=''/>
              <Label>{val.name}</Label>
            </Button>
          )
        })}
        </Body>
      </Content>
    </Container>
    </>
  )
}

export default Categories
