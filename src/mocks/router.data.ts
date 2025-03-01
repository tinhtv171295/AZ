import IMenu from "../components/Menu/type";

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
    name: "Sản phẩm",
    path: "services",
  },
  {
    name: "Văn hóa",
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

export default Menus;
