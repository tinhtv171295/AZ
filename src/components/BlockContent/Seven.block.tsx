import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";

export default function BlockSeven({ type, backgroundColor }: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl></ContainerStl>
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
};
