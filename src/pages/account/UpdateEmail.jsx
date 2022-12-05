import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate , useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'
import { Alert } from '@mui/material'

const Container = styled.div`
    flex: 4;
    display: flex;
    justify-content: left;
    padding: 20px;
`

const Content = styled.div`
    padding: 30px;
    background-color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: left;
    width: 50%;
`

const Header = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #E97777;
`

const SubHeader = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
`

const Form = styled.form`
    display: flex;
    padding: 10px;
    flex-direction: column;
`

const FormContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: left;
    margin-top: 20px;
`

const Label = styled.p`
    flex: .1;
    font-size: 12px;
    color: #8c8c8c;
`

const TextBox = styled.input`
    flex: 1;
    height: 40px;
    line-height: 28px;
    padding: 0 1rem;
    border: 2px solid transparent;
    border-radius: 8px;
    outline: none;
    background-color: #fff;
    color: rgba(0,0,0,0.7);
    transition: .3s ease;
    border-color: #e2e8ec;

    ::placeholder{
      color: #9e9ea7;
    }

    :focus , :hover {
    outline: none;
    border-color: #E97777;
    background-color: #fff;
    }
`

const Button = styled.button`
    padding: 10px;
    width: 100px;
    height: 40px;
    background-color: #E97777;
    border: none;
    cursor: pointer;
    color: #fff;
    margin-left: ${props => props.marginLeft};
`

const ErrorAlert = styled(Alert)`
  margin-top: 20px;
  width: 500px;
`

function UpdateEmail() {

    const { register , formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const logout = () =>{
        window.open("http://localhost:3001/users/logout", "_self")
      }

    const update = (data,event) =>{
        event.preventDefault();
        try
        {
          Axios.put("http://localhost:3001/users/update/email",{
            newemail: data.newemail,
            email: location.state.email
        }).then((res)=>{
            Success();
            logout();
         }).catch((err)=>{
          if(err.response) 
             Error();
         })
        }
        catch(error){
            console.log(error);
        }
    }

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
          title: 'Email successfully updated. Account automatically logout to apply the changes.'
        })
      }

      const Error = () => {
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
          icon: 'error',
          title: 'Invalid email use other email'
        })
      }

  return (
    <>
      <Container>
        <Content>
            <Header>Email</Header>
            <SubHeader>You can update your email in this page.</SubHeader>
            <Form onSubmit={handleSubmit(update)}>
                <FormContent>
                <Label>Email</Label>
                <TextBox type="text" placeholder='Enter your email' 
                {...register("newemail", { required: true, pattern: /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/  })}
                aria-invalid={errors.newemail ? "true" : "false" }
               />
                </FormContent>
                <FormContent>
                <Button marginLeft="300px" onClick={()=>{
                    navigate("/manage-account/profile");
                }}>Cancel</Button>
                <Button marginLeft="10px" type='submit'>Save</Button>
                </FormContent>
                {errors.newemail?.type === 'required' && <ErrorAlert severity="error" role="alert">Email is required</ErrorAlert>}
                {errors.newemail?.type === 'pattern' && <ErrorAlert severity="error" role="alert">Invalid email</ErrorAlert>}
          
            </Form>
        </Content>
      </Container>
    </>
  )
}

export default UpdateEmail
