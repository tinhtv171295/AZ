import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import TitleThird from "../Titles/Third.title";

export default function BlockSix({
  type,
  title,
  backgroundColor,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <Stl.Header>
          <TitleThird title={title} />
        </Stl.Header>
        <Stl.Desktop>
          {dataContent.map((item, i) => (
            <Stl.BlockBoss key={i}>
              <Stl.Item>
                <Stl.Thumb>
                  <img src={item.image} alt={item.title} />
                </Stl.Thumb>
                <Stl.Name>{item.title}</Stl.Name>
                <Stl.Position>{item.description}</Stl.Position>
              </Stl.Item>
            </Stl.BlockBoss>
          ))}
        </Stl.Desktop>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl, $backgroundColor }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: ${$backgroundColor ? $backgroundColor : "#fff"};
            min-height: 600px;
      `
        : `${$backgroundColor ? `background: ${$backgroundColor};` : ""}`}
  `,
  Header: styled.div`
    margin: 0 0 20px;
  `,
  Desktop: styled.div`
    text-align: center;
  `,
  BlockBoss: styled.div`
    width: 96%;
    display: inline-block;
    margin-left: 5px;
    margin-right: 5px;
    @media (min-width: 768px) {
      width: 46%;
    }

    @media (min-width: 992px) {
      width: 23%;
    }
  `,
  Item: styled.div`
    margin-bottom: 25px;
  `,
  Thumb: styled.div`
    margin: 0 0 10px;
    font-size: 0;
    position: relative;
    img {
      width: 100%;
      position: absolute;
      left: 0;
      top: 0;
      object-fit: cover;
      height: 100%;
      -webkit-border-radius: 10px;
      border-radius: 10px;
      background-clip: padding-box;
    }
    &::before {
      content: "";
      display: block;
      padding-top: 122.2222222222%;
    }
  `,
  Name: styled.h4`
    margin: 0 0 10px;
  `,
  Position: styled.div`
    margin: 0;
    color: #828282;
  `,
};
