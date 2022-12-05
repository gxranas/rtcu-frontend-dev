import React from 'react'
import SideNavigator from '../../components/SideNavigator'
import styled from 'styled-components'
import { Outlet } from 'react-router-dom'
const Container = styled.div`
  display: flex;
  background-color: #eff0f5;
`

function ManageAccount() {
  return (
    <>
      <Container>
       <SideNavigator/>
       <Outlet/>
      </Container>
    </>
  )
}

export default ManageAccount
