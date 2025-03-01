import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";

export default function BlockContentEight({
  backgroundColor,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap $bgColor={backgroundColor}>
      <ContainerStl>
        <Stl.WrapContent>
          {dataContent.map((item, i) => (
            <Stl.Item key={i}>
              <img src={item.image} alt={item.title} />
              <Stl.Title>{item.title}</Stl.Title>
            </Stl.Item>
          ))}
        </Stl.WrapContent>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $bgColor?: string }>`
    ${({ $bgColor }) =>
      $bgColor !== undefined ? `background-color:${$bgColor}` : ""}
  `,
  WrapContent: styled.div`
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-template-rows: 165px;
    gap: 30px;
    width: 100%;
    height: fit-content;
  `,
  Item: styled.div`
    position: relative;
    display: block;
    width: 100%;
    height: 100%;
    overflow: hidden;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    &:nth-child(1) {
      grid-area: 1/2/1/2;
    }
  `,
  Title: styled.div`
    display: block;
    position: absolute;
  `,
};
