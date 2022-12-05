import React from 'react'
import styled from 'styled-components'
import { Link, useNavigate } from 'react-router-dom'
import NavigatorMenu from './NavigatorMenu'

const Container = styled.div`
    flex: 1;
    display:flex;
    height: calc(100vh - 150px);
    background-color: #fff;
    position: sticky;
    z-index: 999;
    top: 80px;
`
const Wrapper = styled.div`

    padding: 20px;
    color: #555;
`
const NavLinks = styled(Link)`
    text-decoration: none;
    margin-left: 5px;
    color: #8c8c8c;
    font-weight: 400;
    font-size: 15px;
    :hover{
      color: #E97777;
    }
`
const Menu = styled.div`
    width:230px;    
`
const Title = styled.h3`
    font-size: 14px;
    color: #E97777;
`
const List = styled.ul`
    list-style: none;
    padding: 5px;
`
const ListItem = styled.li`
    padding: 5px;
    cursor:pointer;
    display: flex;
    align-items: center;
    border-radius: 10px;

    :active , :hover{
      background-color: #e2e8ec;
      ${NavLinks}{
      color: #E97777;
      }
    }
 
`

function SideNavigator() {
    const navigate = useNavigate();
  return (
    <>
    <Container>
        <Wrapper>
        {NavigatorMenu.map((val)=>{
            return(
                    <Menu>
                        <Title>{val.menu}</Title>
                        <List>
                            {val.submenu.map((val)=>{
                            return (
                             <ListItem onClick={()=>{
                                navigate(val.url);
                            }}><NavLinks to={val.url}>{val.menu}</NavLinks></ListItem>
                            )
                            })}
                        </List>
                    </Menu>
                  )
                })
        }
        </Wrapper>
    </Container>
    </>
  )
}

export default SideNavigator
