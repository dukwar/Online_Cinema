import React, {useState} from "react";
import {Link} from "react-router-dom"
import styled from "styled-components";


const SidebarLink = styled(Link)`
  position: relative;
  display: flex;
  color: #e1e9fc;
  justify-content: space-between;
  align-items: center;
  padding: 20px;
  height: 60px;
  font-size: 18px;

  &:before {
    content: '';
    width: 5px;
    height: 0px;
    background-color: #ff7c00;
    position: absolute;
    bottom: -1px;
    left: 0;
    z-index: 1;
    transition: all .2s ease;
  }
  
  &:hover {
    &:before {
      content: '';
      width: 5px;
      height: 100%;
      background-color: #ff7c00;
      position: absolute;
      bottom: -1px;
      left: 0;
      z-index: 1;
      
    }
    color: white;
    background: #252831;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
  }
  

`

const SidebarLabel = styled.span`
  font-weight: 600;
  margin-left: 16px;
  
  
    
`

const DropdownLink = styled(Link)`
  background: #414757;
  height: 60px;
  padding-left: 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  color: #f5f5f5;
  font-size: 18px;
  transition: all .2s ease;
  
  &:hover {
    background:  #ff7c00;
    cursor: pointer;
    list-style: none;
    text-decoration: none;
    color: white;
  }
  
`

const Submenu = ({ item }) => {
    const [subnav, setSubnav] = useState(false)

    const showSubnav = () => setSubnav(!subnav)

    return (
        <>

            <SidebarLink to={item.path} onClick={item.subNuv && showSubnav} >
                <div>
                    {item.icon}
                    <SidebarLabel>{item.title}</SidebarLabel>
                </div>
                <div>
                    {item.subNuv && subnav
                        ?  item.iconOpened
                        : item.subNuv
                            ? item.iconClosed
                            : null}
                </div>
            </SidebarLink>
            {subnav && item.subNuv.map((item, index) => {
                return (
                    <DropdownLink to={item.path} key={index}>
                        {item.icon}
                        <SidebarLabel>{item.title}</SidebarLabel>
                    </DropdownLink>



                )
            })}



        </>
    )
}

export default Submenu