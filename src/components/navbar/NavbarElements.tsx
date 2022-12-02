import styled from "styled-components";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
  background: gray;
  margin-top: -80px;
  height: 80px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;
  top: 0;
  z-index: 10;

  @media screen and(max-width:960px) {
    transition: 0.8s all ease;
  }
`;
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  max-width: 1100px;
`;
export const MobileIcon = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
    color: #f7f7f7;
  }
`;

export const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  text-align: center;
  margin-right: -22px;

  @media screen and (max-width: 786px) {
    display: none;
  }
`;

export const NavItem = styled.li`
  height: 80px;
  font-size: 18px;
  font-weight: 500;
`;
export const NavLinks = styled(LinkS)`
  color: #f5f5f5;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;

  &:hover {
    color: #b2beb5;
    height: 100%;
  }

  &.active {
    border-bottom: 4px solid #e4e9ff;
    color: #00fcff;
  }
`;
