import styled from "styled-components";
import ChevronIcon from "../components/UI/Icons/Chevron";
import { NavLink } from "react-router-dom";

type Props = {
  url?: string;
};

export default function SeeMore({ url = "#" }: Props) {
  return (
    <Stl.Wrap>
      <Stl.Link to={url}>
        <span>Xem thêm</span>
        <ChevronIcon />
      </Stl.Link>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    font-size: 14px;
  `,
  Link: styled(NavLink)`
    color: var(--color-primary);
    span {
      transition: all 0.3s ease;
      transform: translate(3px);
    }
    &:hover span {
      transform: translate(8px, 0);
    }
  `,
};
