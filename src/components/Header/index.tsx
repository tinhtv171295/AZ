import styled from "styled-components";
import { ContainerStl } from "../../Styles/Container";
import Menu from "../Menu";
import IMenu from "../Menu/type";

const Menus: IMenu[] = [
  {
    name: "Trang chủ",
    path: "/",
  },
  {
    name: "Về chúng tôi",
    path: "about",
    menu: [
      {
        name: "DLS là ai?",
        path: "about/about-us",
      },
      {
        name: "Giá trị cốt lõi",
        path: "about/core-value",
      },
    ],
  },
  {
    name: "Giá trị cốt lõi",
    path: "corevalue",
  },
  {
    name: "Sản phẩm",
    path: "services",
  },
  {
    name: "văn hóa",
    path: "activities",
  },
  {
    name: "Tuyển dụng",
    path: "recruitment",
  },
  {
    name: "Liên hệ",
    path: "contact",
  },
];

export default function Header() {
  return (
    <Stl.Wrap>
      <Stl.Inner>
        <Menu menus={Menus} />
      </Stl.Inner>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: block;
    height: fit-content;
    width: 100%;
  `,
  Inner: styled(ContainerStl)`
    height: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: relative;
  `,
};
