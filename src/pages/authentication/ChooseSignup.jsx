import React from 'react'
import styled from 'styled-components'
import {Facebook, Google , ArrowBackIos} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-image: url(./images/background/background-image-11.jpg);
  background-repeat: no-repeat;
  background-size: cover;
`

const LeftContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const RightContainer = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  position: relative;
`

const Button = styled.button`
  display: flex;
  align-items:center;
  justify-content:center;
  padding: 10px;
  width: 285px;
  height: 50px;
  margin-bottom: 20px;
  border:none;
  color: #fff;
  background-color: #E97777;
  cursor: pointer;
  :focus , :hover {
    outline: none;
    border-color: #E97777;
  }
`

const BackButton = styled(ArrowBackIos)`
    position:absolute;
    background-color: #E97777;
    color:#fff;
    cursor:pointer;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid transparent;
    margin-right: 400px;
    margin-top: -400px;
`

function ChooseSignup() {

    const navigate = useNavigate();

    const google = () =>{
      window.open("http://localhost:3001/users/google", "_self")
    }
  
    const facebook = () =>{
      window.open("http://localhost:3001/users/facebook", "_self")
    }

  return (
    <>
     <Container>
       <LeftContainer>
       </LeftContainer>
       <RightContainer>
          <BackButton onClick={()=>{
            navigate('/login');
          }}/>
          <Button onClick={()=>{
            navigate('/signup/credential');
          }}>SIGN UP USING CREDENTIALS</Button>
         <Button onClick={google}><Google/>GOOGLE</Button>
          <Button onClick={facebook}><Facebook/>FACEBOOK</Button>
       </RightContainer>
     </Container>
    </>
  )
}

export default ChooseSignup
