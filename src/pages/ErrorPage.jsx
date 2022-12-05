import React from 'react'
import { useNavigate } from 'react-router-dom'
import styled from 'styled-components'

const Container = styled.div`
  display: flex;
  justify-content: left;
  align-items: center;
  height: calc(100vh - 80px);
`

const LeftContent = styled.div`
  height: 500px;
  width: 800px;
  background-image: url(./images/error-page-background.jpg);
  background-repeat: no-repeat;
  background-size: cover;
  background-color: #fff;
  display: flex;
  justify-content: right;
`

const RightContent= styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: left;
`

const Label = styled.p`
  font-size: ${props => props.fontSize};
  font-weight: ${props => props.fontWeight};
  color:  ${props => props.fontColor};
`

const Button = styled.button`
  width: 250px;
  height:50px;
  padding:10px;
  font-size: 15px;
  border:none;
  color:#fff;
  background-color: #E97777;
  margin-left: 100px;
  margin-top: 20px;
  cursor: pointer;
`

function ErrorPage() {

  const navigate = useNavigate();
  return (
    <>
      <Container>
        <LeftContent>

        </LeftContent>
        <RightContent>
            <Label fontSize="30px" fontColor="#E97777" fontWeight="600">Ooops!</Label>
            <Label  fontSize="50px" fontWeight="600" fontColor="#8c8c8c">PAGE NOT FOUND</Label>
            <Button onClick={()=>{
              navigate("/");
            }}>Back to home</Button>
        </RightContent>
      </Container>
    </>
  )
}

export default ErrorPage
