import React, { useEffect, useState } from "react";
import { IBlock } from "../../mocks/type";
import RenderLayout from "../../utils/RenderLayout";
import { footerData } from "../../mocks/footer.data";
import { styled } from "styled-components";
import { ContainerStl } from "../../Styles/Container";

export default function Footer() {
  const [data, setData] = useState<IBlock[]>([]);
  const currentYear = new Date().getFullYear();

  useEffect(() => {
    setData(footerData);
  }, []);
  return (
    <Stl.Wrap
      $backgroundUrl={
        "https://dlsinc.com/storage/setting/1.58BEO5e81dd4e58af9.png"
      }
    >
      <ContainerStl>
        <Stl.DataFT>
          {data.map((item, i) => (
            <React.Fragment key={i}>{RenderLayout(item)}</React.Fragment>
          ))}
        </Stl.DataFT>
      </ContainerStl>
      <Stl.Copyright>
        <ContainerStl>
          <p>Copyright © {currentYear} Dlsinc. All Rights Reserved</p>
        </ContainerStl>
      </Stl.Copyright>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    background: ${({ $backgroundUrl }) =>
      $backgroundUrl !== undefined ? `url(${$backgroundUrl})` : "#fff"};
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-attachment: scroll;
    color: #fff;
    height: auto;
    min-height: auto;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    background-size: cover;
  `,
  DataFT: styled.div`
    padding-top: 50px;
    display: flex;
    margin-right: -15px;
    margin-left: -15px;
    @media (max-width: 768px) {
      display: block;
    }
  `,
  Copyright: styled.div`
    width: 100%;
    background: #171b24;
    color: #fff;
    text-align: center;
    p {
      margin: 0;
      padding: 10px 0;
      font-size: 12px;
    }
  `,
};
