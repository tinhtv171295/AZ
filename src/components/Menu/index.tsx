import styled from "styled-components";
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
            <span>{menu.name}</span>
          )}
        </Stl.Item>
      ))}
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.ul`
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
  `,
  Item: styled.li`
    position: relative;
  `,
  Link: styled(NavLink)`
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
  `,
};
