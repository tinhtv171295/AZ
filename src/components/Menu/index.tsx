import styled, { css } from "styled-components";
import IMenu from "./type";
import { NavLink } from "react-router-dom";

type Props = {
  menus: IMenu[];
};

export default function Menu({ menus }: Props) {
  return (
    <Stl.Wrap>
      {menus.map((menu, i) => (
        <Stl.Item key={i}>
          {menu.path ? (
            <Stl.Link to={menu.path}>{menu.name}</Stl.Link>
          ) : (
            <Stl.ItemLink href="javascript:void(0)">{menu.name}</Stl.ItemLink>
          )}
          {menu.menu && <SubMenu menus={menu.menu} />}
        </Stl.Item>
      ))}
    </Stl.Wrap>
  );
}

function SubMenu({ menus }: Props) {
  return (
    <Stl.SubMenu>
      {menus.map((menu, i) => (
        <Stl.SubMenuItem key={i}>
          {menu.path ? (
            <Stl.SubmenuLink to={menu.path}>{menu.name}</Stl.SubmenuLink>
          ) : (
            <Stl.SubMenuItemLink href="javascript:void(0)">
              {menu.name}
            </Stl.SubMenuItemLink>
          )}
        </Stl.SubMenuItem>
      ))}
    </Stl.SubMenu>
  );
}

const LinkCss = css`
  position: relative;
  display: inline-block;
  padding: 20px;
  text-decoration: none;
  color: #333;
  -webkit-font-smoothing: antialiased;
  -webkit-transition: color 0.3s ease;
  -moz-transition: color 0.3s ease;
  transition: color 0.3s ease;
  white-space: nowrap;

  &.active {
    color: #428dff;
  }
`;

const SubMenuLinkCss = css`
  display: block;
  padding: 10px;
  color: #333;
  font-size: 16px;
  line-height: 1.2;
  font-weight: 400;
  text-decoration: none;
  color: var(--color-primary);
  -webkit-font-smoothing: antialiased;
  -webkit-transition: color 0.3s ease;
  -moz-transition: color 0.3s ease;
  transition: color 0.3s ease;
  white-space: nowrap;

  &:hover {
    background: var(--color-primary);
    color: #fff;
  }
`;

const Stl = {
  Wrap: styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  Item: styled.li`
    position: relative;
    &:hover {
      > ul {
        display: block;
      }
    }
  `,
  Link: styled(NavLink)`
    ${LinkCss}
  `,
  ItemLink: styled.a`
    ${LinkCss}
  `,
  SubMenu: styled.ul`
    position: absolute;
    display: none;
    width: 100%;
    background: #fff;
    z-index: 100;
  `,
  SubMenuItem: styled.li``,
  SubmenuLink: styled(NavLink)`
    ${SubMenuLinkCss}
  `,
  SubMenuItemLink: styled.a`
    ${SubMenuLinkCss}
  `,
};
