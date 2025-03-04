import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import Menus from "../../mocks/router.data";
import Menu from "../Menu";

export default function FooterRight({ type, dataContent }: IBlock) {
  return (
    <Stl.Body data-footer={type}>
      <Stl.Menu>
        <Menu menus={Menus} />
      </Stl.Menu>
      <Stl.IconFT>
        {dataContent?.map((item, i) => (
          <Stl.Icon key={i}>
            <span>{item.image}</span>
          </Stl.Icon>
        ))}
      </Stl.IconFT>
    </Stl.Body>
  );
}

const Stl = {
  Body: styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
    @media (max-width: 768px) {
      align-items: center;
      flex-direction: inherit;
      margin: 30px 0;
    }
    @media (max-width: 1200px) {
      align-items: flex-start;
      justify-content: flex-end;
    }
  `,
  Menu: styled.div`
    ul {
      flex-wrap: wrap;
      margin-bottom: 30px;
      padding: 0 14px;
      width: inherit;
      > li {
        > a {
          color: #fff;
          &.active {
            color: #428dff;
          }
        }
        > ul > li > a {
          color: #428dff;
        }
      }
    }
  `,
  IconFT: styled.div`
    font-size: 0;
    position: absolute;
    bottom: 0;
    right: 15px;
    @media (max-width: 767px) {
      left: 50%;
      transform: translateX(-50%);
      right: auto;
    }
  `,
  Icon: styled.div`
    color: #fff;
    display: inline-block;
    font-size: 0;
    &:not(:first-child) {
      margin-left: 24px;
    }
  `,
};
