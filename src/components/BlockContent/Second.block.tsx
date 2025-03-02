import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";

export default function BlockSecond({ type }: IBlock) {
  return (
    <Stl.Wrap data-component={type}>
      <ContainerStl></ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string }>`
    padding: 60px 0;
  `,
};
