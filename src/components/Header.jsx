import React from 'react'
import styled from 'styled-components'
import { Search, Logout, Store, LocalGroceryStore, AccountCircle, Settings, ShoppingCart} from '@mui/icons-material'
import {Menu,MenuItem,ListItemIcon, Divider} from '@mui/material'
import {Link, useNavigate} from 'react-router-dom'

const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 80px;
    position: sticky;
    z-index: 999;
    top:0px;
    background-color: #fff;
`
const LeftContainer = styled.div`
    flex:1;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`

const Logo = styled(Link)`
  font-family: 'Titan One';
  color: #E97777;
  font-size: 30px;
  font-weight:600;
  margin-left: -70px;
  text-decoration: none;
`

const TagLine = styled.p`
  color: #8c8c8c;
  font-size: 15px;
  font-weight: 400;
`

const CenterContainer = styled.div`
    flex:2;
    display: flex;
    justify-content: center;
    align-items: center;
`

const SearchContainer = styled.div`
    display: flex;
    line-height: 28px;
    align-items: center;
    justify-content: right;
    position: relative;
`

const SearchTextBox = styled.input`
    width:700px;
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

    :focus  {
    outline: none;
    border-color: #E97777;
    background-color: #fff;
    }
`

const SearchIcon = styled(Search)`
    position:absolute;
    margin-right: 10px;
    color:#9e9ea7;
    cursor:pointer;
    border-radius: 50%;
    padding: 5px;
    border: 1px solid transparent;

    :hover{
      background-color: #E97777;
      color: #fff;
    }
`

const RightContainer = styled.div`
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
`

const PageLink = styled(Link)`
    color: #8c8c8c;
    text-decoration: none;
    font-weight: 600;
    margin-left: ${props => props.marginLeft};
    cursor: pointer;
    :hover{
      color: #E97777;
    }
`

const SettingButton = styled(Settings)`
  margin-left: 20px;
  cursor: pointer;
  color: #E97777;
`

const CartButton = styled(ShoppingCart)`
  margin-right: 20px;
  cursor: pointer;
  color: #E97777;`

function Header({user}) {

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const logout = () =>{
    window.open("http://localhost:3001/users/logout", "_self")
  }

  const navigate = useNavigate();

  return (
    <>
     <Container>
        <LeftContainer>
        <Logo to="/">
        rtcu.
        </Logo>
        <TagLine>Find it. Love it. Buy it.</TagLine>
        </LeftContainer>
        <CenterContainer>
        <SearchContainer>
          <SearchTextBox placeholder='Search'/>
          <SearchIcon/>
        </SearchContainer>
        </CenterContainer>
        <RightContainer>
          {user ? (
            <>
           <CartButton fontSize='medium'/>
           <SettingButton onClick={handleClick} fontSize="medium"/>
           <Menu
            anchorEl={anchorEl}
            id="account-menu"
            open={open}
            onClose={handleClose}
            onClick={handleClose}
            PaperProps={{
              elevation: 0,
              sx: {
                overflow: 'visible',
                fontFamily: 'Poppins',
                color: "#8c8c8c",
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: 1.5,
                '& .MuiAvatar-root': {
                  width: 32,
                  height: 32,
                  ml: -0.5,
                  mr: 1,
                },
                '&:before': {
                  content: '""',
                  display: 'block',
                  position: 'absolute',
                  top: 0,
                  right: 14,
                  width: 10,
                  height: 10,
                  bgcolor: 'background.paper',
                  transform: 'translateY(-50%) rotate(45deg)',
                  zIndex: 0,
                },
              },
            }}
            transformOrigin={{ horizontal: 'right', vertical: 'top' }}
            anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
          >
            <MenuItem onClick={()=>{
                  navigate('/manage-account/profile');
                }}>
              <ListItemIcon>
                <AccountCircle fontSize="medium"/>
              </ListItemIcon> Manage Account
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <LocalGroceryStore fontSize="medium" />
              </ListItemIcon> Orders
            </MenuItem>
            <MenuItem>
              <ListItemIcon>
                <Store fontSize="medium" />
              </ListItemIcon> Store
            </MenuItem>
            <Divider />
            <MenuItem onClick={logout}>
              <ListItemIcon>
                <Logout fontSize="medium" />
              </ListItemIcon>
              Logout
            </MenuItem>
          </Menu>
          </> ) :
          (
            <>
             <PageLink to="/login">LOGIN</PageLink>
            <PageLink to="/signup" marginLeft="20px">SIGN UP</PageLink>
            </>
          )
          }
        </RightContainer>
      </Container>
    </>
  )
}

export default Header
