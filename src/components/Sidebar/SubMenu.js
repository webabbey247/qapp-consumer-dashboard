import React, {useState} from "react";
import {Link, useMatch, useResolvedPath} from "react-router-dom";
import styled from "styled-components";

const SidebarNavLink = styled(Link)`
  display: flex;
  justify-content: flex-start;
  padding: 1.6rem 1rem;
  list-style: none;
  text-decoration: none;
  font-weight: 500;
  font-size: 13.8701px;
  line-height: 21px;
  color: #fefeff;

  &:active {
    border-left: 4px solid #2f9d9a;
  }

  &:hover {
    background: #063043;
    border-left: 4px solid #2f9d9a;
    cursor: pointer;
  }
`;

const SidebarNavWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const SidebarNavLabel = styled.span`
  font-weight: 600;
  font-size: 13.8701px;
  line-height: 21px;
  color: rgb(254, 254, 255);
  margin-left: 16px;
  width: 150px;
`;

const SidebarNavIcon = styled.img`
  width: 20px;
  height: 20px;
`;

const DropdownLink = styled(Link)`
  background: #063043;
  padding: 0.8rem 0 0.8rem 2rem;
  display: flex;
  align-items: center;
  text-decoration: none;
  border-left: 4px solid #2f9d9a;

  &:hover {
    background: #063043;
    cursor: pointer;
  }
`;

const SidebarSubMenuLabel = styled.span`
  font-weight: 400;
  font-size: 11px;
  line-height: 16px;
  color: #bdf0ec;
  margin-left: 16px;
`;

const SubMenu = ({item, key}) => {
  const [subnav, setSubnav] = useState(false);
  const showSubnav = () => setSubnav(!subnav);
  let resolved = useResolvedPath(item.path);
  let match = useMatch({path: resolved.pathname, end: true});
  return (
    <>
      <SidebarNavLink
      key={key}
        {...(match ? "active" : "")}
        to={item.path}
        onClick={item.subNav && showSubnav}
        style={{
          borderLeft: match ? "4px solid rgb(47, 157, 154)" : "none",
          background: match ? "#063043" : "transparent",
        }}
      >
        <SidebarNavWrapper>
          <SidebarNavIcon src={item.icon} alt={item.title} />
          <SidebarNavLabel>{item.title}</SidebarNavLabel>
          {item.subNav && subnav ? (
            <SidebarNavIcon src={item.iconOpened} />
          ) : item.subNav ? (
            <SidebarNavIcon src={item.iconClosed} />
          ) : null}
        </SidebarNavWrapper>
        {/* {match && " (active)"} */}
      </SidebarNavLink>
      {subnav &&
        item.subNav.map((item, index) => {
          return (
            <DropdownLink to={item.path} key={index}>
              {item.icon}
              <SidebarSubMenuLabel>{item.title}</SidebarSubMenuLabel>
            </DropdownLink>
          );
        })}
    </>
  );
};

export default SubMenu;
