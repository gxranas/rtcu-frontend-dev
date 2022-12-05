import React, { useState } from 'react'
import styled from 'styled-components'
import { useNavigate , useLocation } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import Axios from 'axios'
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
    flex: .4;
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

function UpdatePassword() {

    const { register , formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    const [newPassword, setNewPassword] = useState('')
    const [checker, setChecker] = useState('')

    
    const update = (data,event) =>{
     if(newPassword === checker){
        event.preventDefault();
        try
        {
          Axios.put("http://localhost:3001/users/update/password",{
            password: data.newPassword,
            email: location.state.email
           }).then(()=>{
            Success();
            navigate("/manage-account/profile");
           })
        }
        catch(error){
            console.log(error);
        }
      }else{
        Error();
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
          title: 'Name successfully updated!'
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
          title: 'Password not match!'
        })
      }

  return (
    <>
      <Container>
        <Content>
            <Header>Password</Header>
            <SubHeader>You can update your password in this page.</SubHeader>
            <Form onSubmit={handleSubmit(update)}>
                <FormContent>
                <Label>New Password</Label>
                <TextBox type="password" placeholder='Enter your new password'  
                {...register("newPassword", { required: true , minLength: 8, maxLength: 25, pattern: /^(?=.*\d)(?=.*[a-zA-Z])/})}
                    aria-invalid={errors.newpassword ? "true" : "false" }
                onChange={((e)=>{
                    setNewPassword(e.target.value);
                })}
                />
                </FormContent>
                <FormContent>
                <Label>Confirm Password</Label>
                <TextBox type="password" placeholder='Re-type your new password' 
                {...register("confirmPassword", { required: true , minLength: 8, maxLength: 25, pattern: /^(?=.*\d)(?=.*[a-zA-Z])/})}
                    aria-invalid={errors.confirmPassword ? "true" : "false" }
                onChange={((e)=>{
                    setChecker(e.target.value);
                })}
                />

                </FormContent>
                <FormContent>
                <Button marginLeft="300px"onClick={()=>{
                    navigate("/manage-account/profile");
                }}>Cancel</Button>
                <Button marginLeft="10px" type='submit'>Save</Button>
                </FormContent>  
                
                {errors.newPassword?.type === 'pattern' &&   <ErrorAlert severity="error" role="alert">New password have atleast one capital letter, number, and special character</ErrorAlert>}
                {errors.newPassword?.type === 'required' &&  <ErrorAlert severity="error" role="alert">New password is required</ErrorAlert>}
                {errors.newPassword?.type === 'minLength' && <ErrorAlert severity="error" role="alert">New password is minimum of 8 characters</ErrorAlert>}
                {errors.newPassword?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">New password is maximum of 25 characters</ErrorAlert>}
                {errors.confirmPassword?.type === 'pattern' &&   <ErrorAlert severity="error" role="alert">Confirm password have atleast one capital letter, number, and special character</ErrorAlert>}
                {errors.confirmPassword?.type === 'required' &&  <ErrorAlert severity="error" role="alert">Confirm password is required</ErrorAlert>}
                {errors.confirmPassword?.type === 'minLength' && <ErrorAlert severity="error" role="alert">Confirm password is minimum of 8 characters</ErrorAlert>}
                {errors.confirmPassword?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Confirm password is maximum of 25 characters</ErrorAlert>}
                
                
            </Form>
        </Content>
      </Container>
    </>
  )
}

export default UpdatePassword
