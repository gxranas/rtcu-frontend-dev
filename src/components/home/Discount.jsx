import React from 'react'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import DiscountData from "./data/DiscountData"
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Container = styled.div`
  margin-top: 20px;
  margin-bottom: 20px;
`

const Head = styled.div`
   display: flex;
   justify-content: space-between;
   align-items: center;
`

const Header = styled.p`
    font-size: 20px;
   font-weight: 600;
   color: #E97777;
`

const PageLink = styled(Link)`
  text-decoration: none;
  font-size: 15px;
   font-weight: 600;
   color: #8c8c8c;
   :hover{
    color: #E97777;
   }
`

const Body = styled.div`
  
  box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
`

const Card = styled.div`
  display: flex;
  padding: 10px;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  cursor: pointer;
  transition: all 0.3s ease 0s;
   outline: none;
   cursor: pointer;
   :hover {
    transform: translateY(-2px);    
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }
`

const CardImage = styled.div`
   width: 150px;
   height: 150px;
`

const Images = styled.img`

`

const ProductName = styled.p`
    font-size: 15px;
    font-weight: 600;
` 

const CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
const ProductPrice = styled.p`
  color: #F49D1A;
`

const ProductSold = styled.p`
  margin-left: 10px;
  font-size: 12px;
`
function Discount() {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
  }
  return (
    <>
      <Container>
       <Head>
        <Header>
          Discount
        </Header>
        <PageLink>
          See more
        </PageLink>
       </Head>
       <Body>
       <Slider {...settings}>
        {DiscountData.map((value, index) => {
          return (
            <>
              <Card  key={index}>
                <CardImage>
                  <Images src={value.cover} alt='' width='100%' />
                </CardImage>
                <ProductName>{value.name}</ProductName>
                <CardFooter>
                <ProductPrice>{value.price}</ProductPrice>
                <ProductSold>{value.sold} Sold</ProductSold>
                </CardFooter>
              </Card>
            </>
          )
        })}
      </Slider>
      </Body>
      </Container>
    </>
  )
}

export default Discount
