import React from 'react'
import styled from 'styled-components'
import {ArrowBackIos} from '@mui/icons-material'
import { useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;  
  height: calc(100vh - 80px);
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
const Form = styled.form`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`
const Input = styled.input`
    width: 250px;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 5px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;
    margin-bottom:20px;

    ::placeholder{
      color: #9e9ea7;
    }

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

const PageTitle = styled.p`
  color: #E97777;
  margin-bottom: 20px;
  font-size: 20px;
`

const ErrorAlert = styled(Alert)`
  margin-bottom: 20px;
  width: 500px;
`


function ForgotPassword() {


  const { register , formState: {errors}, handleSubmit} = useForm();
  
  const navigate = useNavigate();
  const resetPasswordByEmail = () =>{
    
  }
  return (
    <>
     <Container>
       <LeftContainer>
       </LeftContainer>
       <RightContainer>
          <BackButton onClick={()=>{
            navigate('/login/credential')
          }}/>
          <PageTitle>FORGOT PASSWORD</PageTitle>
          <Form onSubmit={handleSubmit(resetPasswordByEmail)}>
          <Input type="text" placeholder="Enter your email" 
          {...register("Email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&???*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })}
            aria-invalid={errors.Email ? "true" : "false" }
          />
          <Button onClick={resetPasswordByEmail}>SEND EMAIL</Button>
          {errors.Email?.type === 'required' && <ErrorAlert severity="error" role="alert">Email is required</ErrorAlert>}
          {errors.Email?.type === 'pattern' && <ErrorAlert severity="error" role="alert">Invalid email</ErrorAlert>}
          
          </Form>
       </RightContainer>
     </Container>
    </>
  )
}

export default ForgotPassword
