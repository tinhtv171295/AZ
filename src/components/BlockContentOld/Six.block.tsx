import styled from "styled-components";
import BlockHeader from "./BlockHeader";
import { ContainerStl } from "../../Styles/Container";
import { IBlock } from "../../mocks/type";
import Row from "../../Styles/Row";

export default function BlockContentSix({
  title,
  titleBody,
  linkDetail,
  backgroundUrl,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap $backgroundUrl={backgroundUrl}>
      <ContainerStl>
        <BlockHeader
          title={title}
          titleBody={titleBody}
          linkDetail={linkDetail}
          content={undefined}
        />
        <Stl.Body>
          <Stl.Content>
            <Row>
              {dataContent.map((item, i) => (
                <Stl.WrapItem key={i}>
                  <Stl.Item>
                    <Stl.NumberCount>
                      <span>{item.title}</span>
                    </Stl.NumberCount>
                    <Stl.Description>{item.description}</Stl.Description>
                  </Stl.Item>
                </Stl.WrapItem>
              ))}
            </Row>
          </Stl.Content>
        </Stl.Body>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: #fff;
            min-height: 600px;
      `
        : ""}
  `,
  Body: styled.div`
    display: block;
  `,
  Content: styled.div`
    @media (min-width: 992px) {
      padding: 100px 0 0;
    }
  `,
  WrapItem: styled.div`
    margin-bottom: 30px;
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;

    @media (min-width: 992px) {
      flex: 0 0 25%;
      max-width: 25%;
    }
  `,
  Item: styled.div`
    border: solid 1px #fff;
    height: 125px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;
  `,
  NumberCount: styled.strong`
    color: #428dff;
    font-size: 40px;
  `,
  Description: styled.h5`
    font-size: 16px;
    margin: 0;
    font-weight: 400;
  `,
};
