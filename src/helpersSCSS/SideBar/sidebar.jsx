import React, {Fragment, useState} from "react";
import styled from "styled-components"
import {Link} from "react-router-dom";
import * as FaIcons from "react-icons/fa"
import * as AiIcons from "react-icons/ai"
import {SidebarData} from "./sidebarData";
import Submenu from "./submenu";
import {IconContext} from "react-icons";



const Nav = styled.div`
  background-image: radial-gradient( circle farthest-corner at -10.9% 51.2%,  rgba(255,124,0,1) 0%, rgba(255,124,0,1) 15.9%, rgba(255,163,77,1) 15.9%, rgba(255,163,77,1) 24.4%, rgba(19,30,37,1) 24.5%, rgba(19,30,37,1) 66% );
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`
const NavIcon = styled(Link) `
  margin-left: 2rem;
  font-size: 2rem;
  height: 80px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`

const SidebarNav = styled.nav`
  background-image: radial-gradient( circle farthest-corner at -10.9% 51.2%,  rgba(255,124,0,1) 0%, rgba(255,124,0,1) 15.9%, rgba(255,163,77,1) 15.9%, rgba(255,163,77,1) 24.4%, rgba(19,30,37,1) 24.5%, rgba(19,30,37,1) 66% );
  width: 250px;
  height: 100vh;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  left: ${({sidebar}) => (sidebar ? '0' : '-100%')};
  transition: 350ms;
  z-index: 100;
`

const SidebarWrap = styled.div`
    width: 100%;
  

    
    
`

function Sidebar(props) {
    const [sidebar, setSidebar] = useState(false)

    const showSidebar = () => setSidebar(!sidebar)

    return (
      <>
          <IconContext.Provider value={{color:'fff'}}>
              <Nav>
                  <NavIcon to="#">
                      <FaIcons.FaBars onClick={showSidebar} />
                  </NavIcon>
              </Nav>
              <SidebarNav sidebar={sidebar}>
                  <SidebarWrap>
                      <NavIcon to="#">
                          <AiIcons.AiOutlineClose onClick={showSidebar}/>
                      </NavIcon>

                      {SidebarData.map((item, index) => {
                          return <Submenu item={item} key={index} />
                      })}

                  </SidebarWrap>
              </SidebarNav>
          </IconContext.Provider>

      </>
        )





}

export default Sidebar;