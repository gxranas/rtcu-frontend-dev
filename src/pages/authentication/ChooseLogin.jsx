import React from 'react'
import styled from 'styled-components'
import {Facebook, Google} from '@mui/icons-material'
import {useNavigate} from 'react-router-dom'
import {Link} from 'react-router-dom'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-image: url(./images/background/background-image-8.jpg);
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

const LinkPage = styled(Link)`
  color: #9e9ea7;
  font-size: 15px;
  margin-left: ${props => props.marginLeft};
`

const Label = styled.p`
  color: #9e9ea7;
  margin-top: 20px;
  font-size: 15px;
`

function ChooseLogin() {

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
          <Button onClick={()=>{
            navigate('/login/credential');
          }}>LOGIN USING CREDENTIALS</Button>
          <Button onClick={google}><Google/>GOOGLE</Button>
          <Button onClick={facebook}><Facebook/>FACEBOOK</Button>
          
          <Label>Don`t have an account? <LinkPage to="/signup">Sign up</LinkPage></Label>
       </RightContainer>
     </Container>
    </>
  )
}

export default ChooseLogin
