import styled from "styled-components";
import { IBlock } from "../../mocks/type";
import TitleMain from "../Titles/Main.title";
import { ContainerStl } from "../../Styles/Container";
import { RowLayout } from "../../Styles/Row";
import SeeMore from "../../Styles/SeeMore";

export default function BlockContentSeven({
  title,
  backgroundColor,
  titleBody,
  linkDetail,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap $bgColor={backgroundColor}>
      <ContainerStl>
        <TitleMain
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
        />

        <RowLayout
          sm={1}
          md={2}
          lg={2}
          margin={[0, 0, 30, 0]}
          children={dataContent.map((item, i) => (
            <Stl.WrapItem key={i}>
              <Stl.ItemThumb>
                <Stl.Link href="#">
                  <img src={item.image} alt={item.title} />
                </Stl.Link>
              </Stl.ItemThumb>
              <Stl.ItemTitle>
                <Stl.Link href={item.linkDetail}>{item.title}</Stl.Link>
              </Stl.ItemTitle>
              <Stl.ItemDescription>{item.description}</Stl.ItemDescription>
              <SeeMore url={item.linkDetail} />
            </Stl.WrapItem>
          ))}
        />
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $bgColor?: string }>`
    padding: 60px 0;
    ${({ $bgColor }) =>
      $bgColor !== undefined ? `background-color:${$bgColor}` : ""}
  `,
  WrapItem: styled.div`
    background: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 20px;
    min-height: 330px;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;

    @media (min-width: 992px) {
      padding: 20px 60px;
    }
  `,
  Link: styled.a`
    color: #333;
    text-decoration: none;
    -webkit-font-smoothing: antialiased;
    -webkit-transition: color 0.3s ease;
    -moz-transition: color 0.3s ease;
    transition: color 0.3s ease;
  `,
  ItemThumb: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 20px;
    a {
      img {
        max-width: 100%;
      }
    }
  `,
  ItemTitle: styled.h3`
    margin: 0 0 10px;
    font-size: 18px;
    font-weight: 600;
  `,
  ItemDescription: styled.p`
    margin: 0 0 25px;
    font-size: 14px;
    color: #828282;
    line-height: 18px;
  `,
};
