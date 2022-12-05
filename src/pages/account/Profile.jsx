import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import {Edit} from '@mui/icons-material'
import { useNavigate } from 'react-router-dom'
import Axios from 'axios'
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
    width: 100%;
    flex-direction: column;
`

const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-bottom: 10px;
`

const Header = styled.p`
    font-weight: 600;
    font-size: 25px;
    color: #E97777;
`

const SubHeader = styled.p`
    font-weight: 400;
    font-size: 15px;
    color: #8c8c8c;
`

const Body = styled.div`
    display: flex;
    justify-content: left;
    border: 1px solid #e6e3e3;
    flex-direction: column;
    padding: 15px;
    border-radius:5px;
    margin-top: 20px;
` 

const BodyHeader = styled.p`
    font-weight: 600;
    font-size: 20px;
    color: #E97777;
`

const BodySubHeader = styled.p`
    font-weight: 400;
    font-size: 12px;
    color: #8c8c8c;
`

const BodyContent = styled.div`
    display:flex;
    align-items: center;
    justify-content: center;
    margin-top: 10px;
    padding:20px;
    cursor:pointer;
    :hover{
      background-color: #e2e8ec;
    }
`

const Label = styled.p`
    flex: .5;
    font-size: 12px;
    color: #8c8c8c;
`

const Value = styled.p`
    flex: 2;
    font-size: 13px;
    color: rgba(0,0,0,.85);
`

const Icons = styled(Edit)`
    flex: .1;
    color: #E97777;
`


function Profile({user}) {
  const [email,setEmail] = useState(user);
  const [info,setInfo] = useState(null);
  const navigate = useNavigate();
  useEffect(()=>{
    const getUserInfo = async () => {
    try
    { 
      await Axios.post("http://localhost:3001/users/information",
     {
     email: email[0].userEmail
     })
     .then((response)=>
     {
        setInfo(response);
     }) 
    }
    catch(error)
    {
     console.log(error);
    }
      }

    if(document.readyState === 'complete'){
        getUserInfo();
    }
    else {
        window.addEventListener('load', getUserInfo);

        return () => 
        window.removeEventListener('load', getUserInfo);
    }
  },[])

  return (
    <>
           <Container>
            <Content>
              <HeaderContainer>
                 <Header>Profile Information</Header>
                 <SubHeader>You can make some changes of this info, like name, contact details, etc.</SubHeader>
              </HeaderContainer>
     
              <Body>
                 <BodyHeader>
                  Basic Information
                 </BodyHeader>
                     <BodySubHeader>
                          Some info may be visible to other people.
                     </BodySubHeader>
                         <BodyContent onClick={()=>{navigate("/manage-account/profile/update/name", {state : {email: info.data[0].userEmail}})}}>
                             <Label>Name</Label>
                             <Value>{info === null ? "Set Name" : info.data[0].userFullname}</Value>
                             <Icons fontSize='small'/>
                         </BodyContent>
                         <BodyContent onClick={()=>{navigate("/manage-account/profile/update/birthday", {state : {email: info.data[0].userEmail}})}}>
                             <Label>Birthday</Label>
                             <Value>{info === null ? "Set Birthday" : info.data[0].userBirthday === null ? "Set Birthday" : info.data[0].userBirthday}</Value>
                             <Icons fontSize='small'/>
                         </BodyContent>
                         <BodyContent onClick={()=>{navigate("/manage-account/profile/update/gender", {state : {email: info.data[0].userEmail}})}}>
                             <Label>Gender</Label>
                             <Value>{info === null ? "Set Gender" : info.data[0].userGender === null ? "Set Gender" : info.data[0].userGender}</Value>
                             <Icons fontSize='small'/>
                         </BodyContent>
              </Body>
             
             <Body>
                 <BodyHeader>Contact Information</BodyHeader>
                 <BodySubHeader>This information will help to contact you.</BodySubHeader>
                 <BodyContent onClick={()=>{navigate("/manage-account/profile/update/email", {state : {email: info.data[0].userEmail}})}}>
                         <Label>Email</Label>
                         <Value>{info === null ? "Set Email" : info.data[0].userEmail}</Value>
                         <Icons fontSize='small'/>
                 </BodyContent>
             </Body>
     
             <Body>
                 <BodyHeader>Address</BodyHeader>
                 <BodySubHeader>This address is use for shipping address.</BodySubHeader>
                 <BodyContent onClick={()=>{navigate("/manage-account/profile/addresses", {state : {email: info.data[0].userEmail}})}}>
                         <Label>Address (Default)</Label>
                         <Value>Geo Xyruz Ranas - Ph 3 Pkg 2 Blk 32 Lot 8 Bagong Silang Metro Manila~Caloocan - Caloocan City - Barangay 176 ~ (+63) 09459830404 </Value>
                         <Icons fontSize='small'/>
                 </BodyContent>
             </Body>
     
             <Body>
                 <BodyHeader>Password</BodyHeader>
                 <BodySubHeader>A secured password can protect your account.</BodySubHeader>
                 <BodyContent onClick={()=>{navigate("/manage-account/profile/update/password", {state : {email: info.data[0].userEmail}})}}>
                         <Label>Password</Label>
                         <Value>***********</Value>
                         <Icons fontSize='small'/>
                 </BodyContent>
             </Body>
            </Content>
           </Container>

    </>
  )
}

export default Profile
