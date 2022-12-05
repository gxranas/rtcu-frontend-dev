import React from 'react'
import styled from 'styled-components'
import {ArrowBackIos} from '@mui/icons-material'
import {Link, useNavigate} from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { Alert } from '@mui/material'
import Axios from 'axios'
import Swal from 'sweetalert2'

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 80px);
  background-image: url(./images/background/background-image-10.jpg);
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


function Login() {
  Axios.defaults.withCredentials = true;
  const Success = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Successfully login!'
    })
  }

  const { register , formState: {errors}, handleSubmit} = useForm();
  const navigate = useNavigate();

  const login = (data,event) =>{
      event.preventDefault();
      try
      {
        Axios.post("http://localhost:3001/users/login",
        {
        email: data.Email,
        password: data.Password,
        })
        .then(()=>
        {
        Success();
        navigate("/");
        })
      }
      catch(error)
      {
          console.log(error)
      }
  }

  return (
    <>
     <Container>
       <LeftContainer>
       </LeftContainer>
       <RightContainer>
          <BackButton onClick={()=>{
            navigate('/login')
          }}/>
          <PageTitle>LOGIN</PageTitle>
          <Form onSubmit={handleSubmit(login)}>
          <Input type="text" placeholder="Enter your email"
          {...register("Email", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })}
            aria-invalid={errors.Email ? "true" : "false" }
          />
          <Input type="password" placeholder="Enter your password"
          {...register("Password", { required: true , minLength: 8, maxLength: 25, pattern: /^(?=.*\d)(?=.*[a-zA-Z])/})}
              aria-invalid={errors.Password ? "true" : "false" }
          />
          <Button>LOGIN</Button>
          {errors.Email?.type === 'required' && <ErrorAlert severity="error" role="alert">Email is required</ErrorAlert>}
          {errors.Email?.type === 'pattern' && <ErrorAlert severity="error" role="alert">Invalid email</ErrorAlert>}
          {errors.Password?.type === 'pattern' &&   <ErrorAlert severity="error" role="alert">Atleast one capital letter, number, and special character</ErrorAlert>}
          {errors.Password?.type === 'required' &&  <ErrorAlert severity="error" role="alert">Password is required</ErrorAlert>}
          {errors.Password?.type === 'minLength' && <ErrorAlert severity="error" role="alert">Password is minimum of 8 characters</ErrorAlert>}
          {errors.Password?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Password is maximum of 25 characters</ErrorAlert>}
          </Form>
          <LinkPage to="/forgot" marginLeft="-150px">Forgot Password?</LinkPage>
          <Label>Don`t have an account? <LinkPage to="/signup">Sign up</LinkPage></Label>
       </RightContainer>
     </Container>
    </>
  )
}

export default Login
