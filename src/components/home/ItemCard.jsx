import React from 'react'
import styled from 'styled-components'
import {Rating} from '@mui/material'
import ItemData from './data/ItemData'

const Container = styled.div`
    padding: 10px;
    display: flex;
    width: 200px;
    flex-direction: column;
    border: 1px solid #eff0f5;
    transition: all 0.3s ease 0s;
    outline: none;
    cursor: pointer;
   :hover {
    transform: translateY(-2px);    
    box-shadow: 0px 8px 15px rgba(0, 0, 0, 0.1);
    }
    position: relative;
    margin-bottom: 20px;
`
const ImageContainer = styled.div`
    display: flex;
    justify-content: center;
`
const Image = styled.img`
    width: 150px;
    height: 150px;
`
const DiscountTag = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 10px;
    background-color: red;
    clip-path: polygon(0 0, 45% 0, 100% 0, 100% 100%, 48% 93%, 0 100%);
    width: 15px;
    margin-top: -15px;
    margin-left: 165px;
`

const DiscountLabel = styled.p`
    font-size: 10px;
`
const CardBody = styled.div`
    display: flex;
    flex-direction: column;
`

const ProductHeader = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
`
const ProductDetails = styled.div`
    display: flex;
    justify-content: left;
    flex-direction: column;
    margin-top:10px;
`

const ProductName = styled.p`
    font-size: 15px;
    font-weight: 600;
`

const ProductPrice = styled.p`
    color: #F49D1A;
    font-weight: 600;
`

const ProductSold = styled.p`
   font-size: 12px;
   font-weight: 400;
   color: #8c8c8c;
`

const Head = styled.div`
    margin-bottom: 10px;
`

const Header = styled.p`
   font-size: 20px;
   font-weight: 600;
   color: #8c8c8c;
`

const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-gap: 10px;
`

function ItemCard() {
  return (
    <>
    <Head>
        <Header>Daily Discovery</Header>
    </Head>
    <Grid>
        {ItemData.map((val)=>{
            return(
                <>
                    <Container>
                    <DiscountTag><DiscountLabel>{val.discount} OFF</DiscountLabel></DiscountTag>
                    <ImageContainer>
                        <Image src={val.cover} alt='' width="100%"/>
                    </ImageContainer>
                    <CardBody>
                        <ProductHeader>
                        <ProductName>{val.name}</ProductName>
                        </ProductHeader>
                        <ProductDetails>
                        <ProductPrice>P{val.price}</ProductPrice>
                        <Rating
                            name="size-small" 
                            defaultValue={val.rating} size="small"
                            value={val.rating}
                            readOnly
                        />
                        <ProductSold>Sold (1253)</ProductSold>
                        </ProductDetails>
                    </CardBody>
                    </Container>
                </>
            )
        })}
        </Grid>
    </>
  )
}

export default ItemCard
