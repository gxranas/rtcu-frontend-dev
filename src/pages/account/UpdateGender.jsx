import React from 'react'
import styled from 'styled-components'
import Axios from 'axios'
import { useForm } from 'react-hook-form'
import { useNavigate , useLocation } from 'react-router-dom'
import Swal from 'sweetalert2'

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
    flex: .2;
    font-size: 12px;
    font-size: ${props => props.fontSize};
    color: ${props => props.textColor};
    margin-left: ${props => props.marginLeft};
`

const Selection = styled.input`
    margin-left: 10px;
    font-size: 12px;
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

const SelectionContainer = styled.label`
display: flex;
align-items: center;
justify-content: center;
`

function UpdateGender() {

    const { register , handleSubmit} = useForm();
    const navigate = useNavigate();
    const location = useLocation();

    const update = (data,event) =>{
        event.preventDefault();
        try
        {
          Axios.put("http://localhost:3001/users/update/gender",{
            gender: data.gender,
            email: location.state.email
        }).then(()=>{
            Success();
            navigate("/manage-account/profile");
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
          title: 'Gender successfully updated!'
        })
      }

  return (
    <>
      <Container>
        <Content>
            <Header>Gender</Header>
            <SubHeader>You can update your gender in this page.</SubHeader>
            <Form onSubmit={handleSubmit(update)}>
                <FormContent>
                <Label fontSize="12px" textColor="#8c8c8c">Gender</Label>
                <SelectionContainer htmlFor="field-male">
                <Selection {...register("gender")} type="radio" value="Male" checked/> <Label fontSize="15px" marginLeft="5px">Male</Label>
                </SelectionContainer>
                <SelectionContainer htmlFor="field-female">
                <Selection {...register("gender")} type="radio" value="Female"/> <Label fontSize="15px" marginLeft="5px">Female</Label>
                </SelectionContainer>
                </FormContent>
                <FormContent>
                <Button marginLeft="300px"onClick={()=>{
                    navigate("/manage-account/profile");
                }}>Cancel</Button>
                <Button marginLeft="10px" type="submit">Save</Button>
                </FormContent>
            </Form>
        </Content>
      </Container>
    </>
  )
}

export default UpdateGender
