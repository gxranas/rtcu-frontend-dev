import React, { useState , useEffect } from 'react'
import styled from 'styled-components'
import { Table, TableHead, TableBody,TableRow, TableCell } from '@mui/material'
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
    flex-direction: column;
    justify-content: left;
    width: 100%;
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

const TableContainer = styled.div`
  display: flex;
  margin-top: 10px;
 
  border: 1px solid #e6e3e3;
  border-radius: 5px;
  padding: 10px;
`
const TableHeadStyle = styled(TableHead)`
  background-color: #E97777;
`

const TableRowStyle = styled(TableRow)`
  cursor: pointer;

  :hover{
      background-color: #e2e8ec;
    }
`

const Value = styled.p`
  font-size: ${props => props.fontSize};
  color: ${props => props.fontColor};
  font-weight: ${props => props.fontWeight};
`

const Button = styled.button`
 margin-top: 20px;
 height: 50px;
 width: 250px;
 padding: 10px;
 background-color: #E97777;
 color: #fff;
 border:none;
 cursor:pointer;
`
function Addresses({user}) {
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

  console.log(info)
  return (
    <>
      <Container>
        <Content>
            <Header>
                Addresses
            </Header>
            <SubHeader>
              You can add/update your shipping address in this page.
            </SubHeader>
            <TableContainer>
                    <Table sx={{ minWidth: 650 }} aria-label="simple table">
                      <TableHeadStyle>
                        <TableRow>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Id</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Full name</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Address</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Postcode</Value></TableCell>
                          <TableCell align="center"><Value fontSize="13px" fontColor="#fff" fontWeight="600">Phone Number</Value></TableCell>
                        </TableRow>
                      </TableHeadStyle>
                      <TableBody>
                          <TableRowStyle
                            
                          >
                            <TableCell align="left"><Value fontSize="12px" fontColor="#8c8c8c" fontWeight="600"></Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400"></Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400"></Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="rgba(0,0,0,.85)" fontWeight="400"></Value></TableCell>
                            <TableCell align="left"><Value fontSize="12px" fontColor="#8c8c8c" fontWeight="600"></Value></TableCell>
                          </TableRowStyle>
                        
                      </TableBody>
                    </Table>
            </TableContainer>
            <Button onClick={()=>{
              navigate('/manage-account/profile/add/addresses', {state : info.data[0].userEmail})
            }}>Add Address</Button>
        </Content>
      </Container>
    </>
  )
}

export default Addresses
