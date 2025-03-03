import styled from "styled-components";
import IDepartment from "./type";
import { NavLink } from "react-router-dom";

type Props = {
  data: IDepartment[];
};

export default function Departments({ data }: Props) {
  return (
    <Stl.Wrap>
      <Stl.Title>Phòng ban</Stl.Title>
      <Stl.List>
        {data.map((department, i) => (
          <Stl.Item key={i}>
            <Stl.Link to={"/recruitment/detail"}>{department.name}</Stl.Link>
          </Stl.Item>
        ))}
      </Stl.List>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div``,
  Title: styled.div`
    font-weight: bold;
    text-transform: uppercase;
    font-size: 18px;
    color: #2d8ffd;
    margin-bottom: 5px;
    text-transform: uppercase;
  `,
  List: styled.ul`
    list-style: none;
  `,
  Item: styled.li``,
  Link: styled(NavLink)`
    display: block;
    color: #637282;
    font-weight: normal;
    position: relative;
    padding: 8px 0;
    text-decoration: none;
  `,
};
