import React from 'react'
import styled from 'styled-components'
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import AnnouncementData from './data/AnnouncementData'

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 400px;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.1);
  margin-top: 20px;
  margin-bottom: 20px;
`

const LeftContainer = styled.div`
  display: flex;
  justify-content: left;
  flex-direction: column;
  margin-left: 50px;
`

const RightContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px;
`

const Header = styled.p`
  font-size: 30px;
  font-weight: 600;
  color: #E97777;
`

const Description = styled.p`
  font-size: 15px;
  color: #8c8c8c;
`

const Button = styled.button`
    margin-top: 20px;
    color: #fff;
    background-color: #E97777;
    width: 300px;
    height: 50px;
    padding: 10px;
    border: none;
    cursor: pointer;
`

const Images =styled.img`
    width: 250px;
    height: 250px;
    margin-left:20px;
`
function Announcement() {
    const settings = {
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
      }

      const get = () =>{
        
      const data = localStorage.getItem("mySessionStorageData");
      data = JSON.parse(data);
      console.log(data);
      }
      
  return (
    <>
     <Slider {...settings}>
        {AnnouncementData.map((value, index) => {
          return (
            <>
              <Container className='box d_flex top' key={index}>
                <LeftContainer>
                  <Header>{value.title}</Header>
                  <Description>{value.desc}</Description>
                  <Button onClick={get}>Visit Collections</Button>
                </LeftContainer>
                <RightContainer>
                  <Images src={value.cover} alt='' />
                </RightContainer>
              </Container>
            </>
          )
        })}
      </Slider>
    </>
  )
}

export default Announcement
