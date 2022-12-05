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
    width:100%;
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
    justify-content: space-between;
`

const FormContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.p`
    font-size: 12px;
    color: #8c8c8c;
`

const TextBox = styled.input`
    width: ${props => props.Width};
    height: 40px;
    line-height: 28px;
    margin-left: 20px;
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
const Selection = styled.input`
    font-size: 12px;
    margin-right:  ${props => props.marginRight};
    margin-left: ${props => props.marginLeft};
`

const Left = styled.div`
`

const Right = styled.div`

`

const SelectionContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
`

const ErrorAlert = styled(Alert)`
  margin-top: 20px;
  width: 500px;
`

function AddAddress() {

    const { register , formState: {errors}, handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();
    console.log(location.state.email);
    const add = (data,event) =>{
        event.preventDefault();
          try
          {
           Axios.post("http://localhost:3001/addresses/add",{
             email : data.email,
             name : data.name,
             mobile : data.mobile,
             note : data.note,
             address : data.address,
             province : data.province,
             city : data.city,
             barangay: data.barangay,
             type : data.type,
             status : data.status,
           }).then(
            () => 
            {
              Success();
              navigate("/manage-account/profile/addresses");
            }
            )
          }catch(error){
            console.log(error);
          }
      }

      const Success = () => {
        const Toast = Swal.mixin({
          toast: true,
          position: 'top-end',
          showConfirmButton: true,
          timer: 3000,
          timerProgressBar: true,
          didOpen: (toast) => {
            toast.addEventListener('mouseenter', Swal.stopTimer)
            toast.addEventListener('mouseleave', Swal.resumeTimer)
          }
        })
        
        Toast.fire({
          icon: 'success',
          title: 'Successfully Added!'
        })
      }


  return (
    <>
      <Container>
        <Content>
            <Header>Address</Header>
            <SubHeader>You can add your shipping address in this page.</SubHeader>
            <Form onSubmit={handleSubmit(add)} >
                <Left>
                <FormContent>
                <Label>Full name</Label>
                <TextBox Width="230px" type="text" placeholder='Enter full name' 
                {...register("fullname", { required: true, maxLength: 25, pattern: /^[a-zA -Z]+$/g })}
                    aria-invalid={errors.fullname ? "true" : "false" }
                    />

           </FormContent>
                <FormContent>
                <Label>Mobile number</Label>
                <TextBox Width="230px" type="text" placeholder='Enter mobile number'     
                {...register("mobile", { required: true, maxLength: 11, pattern: /^[a-zA -Z]+$/g })}
                    aria-invalid={errors.mobile ? "true" : "false" }
                />

                </FormContent>
                <FormContent>
                <Label>Other notes</Label>
                <TextBox Width="230px" type="text" placeholder='Enter note (Optional)'            
                {...register("note", {maxLength: 50})}
                    aria-invalid={errors.note ? "true" : "false" }
                    />
                                              
                </FormContent>
                </Left>
                <Right>
                <FormContent>
                <Label>House/Unit/Flr #..</Label>
                <TextBox Width="400px" type="text" placeholder='Enter exact shipping address'      
                {...register("address", { required: true, maxLength: 50 })}
                    aria-invalid={errors.address ? "true" : "false" }
                />
                
                </FormContent>
                <FormContent>
                <Label>Province</Label>
                <TextBox Width="400px" type="text" placeholder='Enter province'  
                {...register("province", { required: true, maxLength: 50 })}
                    aria-invalid={errors.province ? "true" : "false" }
                />
                </FormContent>
                <FormContent>
                <Label>City/Municipality</Label>
                <TextBox Width="400px" type="text" placeholder='Enter city/municipality'  
                {...register("city", { required: true, maxLength: 50 })}
                    aria-invalid={errors.province ? "true" : "false" }
                />
                </FormContent>

                <FormContent>
                <Label>Barangay</Label>
                <TextBox Width="400px" type="text" placeholder='Enter barangay'   
                {...register("barangay", { required: true, maxLength: 50 })}
                    aria-invalid={errors.barangay ? "true" : "false" }
                />
                    
                </FormContent>
                <FormContent>
                <Label>Select a label for effective delivery:</Label>
                <SelectionContainer htmlFor="field-home">
                <Selection {...register("type")} type="radio" value="Home" marginRight="10px" marginLeft="10px" checked/> <Label>Home</Label>
                </SelectionContainer>
                <SelectionContainer htmlFor="field-work">
                <Selection {...register("type")} type="radio" value="Work" marginRight="10px" marginLeft="10px" /> <Label>Work</Label>
                </SelectionContainer>
                </FormContent>

                <FormContent>
                <Label>Choose address status:</Label>
                <SelectionContainer htmlFor="field-default">
                <Selection {...register("status")} type="radio" value="Default" marginRight="10px" marginLeft="10px" checked/> <Label>Default</Label>
                </SelectionContainer>
                <SelectionContainer htmlFor="field-other">
                <Selection {...register("status")} type="radio" value="Other" marginRight="10px" marginLeft="10px" /> <Label>Other</Label>
                </SelectionContainer>
                </FormContent>
                
                <FormContent>
                <Button marginLeft="300px" onClick={()=>{
                    navigate("/manage-account/profile");
                }}>Cancel</Button>
                <Button marginLeft="10px" type="submit">Save</Button>
                </FormContent>
                    {errors.fullname?.type === 'pattern' && <ErrorAlert severity="error" role="alert">Invalid full name format</ErrorAlert>}
                    {errors.fullname?.type === 'required' && <ErrorAlert severity="error" role="alert">Full name is required</ErrorAlert>}
                    {errors.fullname?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Full name is maximum of 25 characters</ErrorAlert>}
                    {errors.mobile?.type === 'pattern' && <ErrorAlert severity="error" role="alert">Invalid mobile number format</ErrorAlert>}
                    {errors.mobile?.type === 'required' && <ErrorAlert severity="error" role="alert">Mobile number is required</ErrorAlert>}
                    {errors.mobile?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Mobile number is maximum of 11 characters</ErrorAlert>}
                    {errors.note?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Note is maximum of 50 characters</ErrorAlert>}
                    {errors.address?.type === 'required' && <ErrorAlert severity="error" role="alert">Address is required</ErrorAlert>}
                    {errors.address?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Address is maximum of 50 characters</ErrorAlert>}
                    {errors.province?.type === 'required' && <ErrorAlert severity="error" role="alert">Province is required</ErrorAlert>}
                    {errors.province?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Province is maximum of 50 characters</ErrorAlert>}
                    {errors.city?.type === 'required' && <ErrorAlert severity="error" role="alert">City/Municipality is required</ErrorAlert>}
                    {errors.city?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">City/Municipality is maximum of 50 characters</ErrorAlert>}
                    {errors.barangay?.type === 'required' && <ErrorAlert severity="error" role="alert">Barangay is required</ErrorAlert>}
                    {errors.barangay?.type === 'maxLength' && <ErrorAlert severity="error" role="alert">Barangay is maximum of 50 characters</ErrorAlert>}
               
                </Right>
            
            </Form>
        </Content>
      </Container>
    </>
  )
}

export default AddAddress
