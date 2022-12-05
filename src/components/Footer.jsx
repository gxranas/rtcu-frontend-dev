import React from 'react'
import styled from 'styled-components'
import { Copyright, Facebook, Twitter, Instagram  } from '@mui/icons-material'
import { Tooltip } from '@mui/material'
import { Link } from 'react-router-dom'

const Container = styled.div`
  display: flex;
  background-color: #E97777;
  height: 50px;
`

const LeftContainer = styled.div`
   flex:1;
   display: flex;
   justify-content: center;
   align-items: center;
`

const CenterContainer = styled.div`
   flex:1;
   display: flex;
   justify-content: center;
   align-items: center;
`

const RightContainer = styled.div`
   flex:1;
   display: flex;
   justify-content: center;
   align-items: center;
`

const Label = styled.p`
  display: flex;
  align-items:center;
  color: #fff;
  font-size: 12px;
`

const Icons = styled.div`
  display:flex;
  align-items: center;
  justify-content: center;
  margin-left: ${props => props.marginLeft};
  cursor: pointer;
`

const LinkContainer = styled.div`
  display:flex;
  justify-content: center;
  align-items: center;
`

const PageLinks = styled(Link)`
  text-decoration: none;
  font-size: 12px;
  color: #fff;
  margin-left: ${props => props.marginLeft};
  margin-right: ${props => props.marginRight};
` 

function Footer() {
  return (
    <>
       <Container>
        <LeftContainer> 
        <Label>2022 <Copyright fontSize='small'/> rtcu-shop.com</Label>
        </LeftContainer>
        <CenterContainer>
        <Label>Follow us: 
        <Tooltip title="Facebook"><Icons marginLeft="10px"><Facebook fontSize='small'/></Icons></Tooltip>
        <Tooltip title="Twitter"><Icons marginLeft="10px"><Twitter fontSize='small'/></Icons></Tooltip>
        <Tooltip title="Instagram"><Icons marginLeft="10px"><Instagram fontSize='small'/></Icons></Tooltip>
        </Label>
        </CenterContainer>
        <RightContainer>
          <LinkContainer>
            <PageLinks to="/about" marginRight="10px">About us</PageLinks>
            <Label>|</Label>
            <PageLinks to="/contact" marginLeft="10px">Contact us</PageLinks>
          </LinkContainer>
        </RightContainer>
       </Container>
    </>
  )
}

export default Footer
