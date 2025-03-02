import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { RowLayout } from "../../Styles/Row";
import CardIcon from "../Card/CardIcon";

export default function BlockEleven({
  type,
  backgroundColor,
  dataContent,
}: IBlock) {
  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <RowLayout
          col={1}
          md={3}
          lg={3}
          margin={[0, 0, 30, 0]}
          marginMd={[0, 0, 30, 0]}
          marginLg={[0, 0, 30, 0]}
        >
          {dataContent.map((item, i) => (
            <CardIcon
              key={i}
              icon={
                <span dangerouslySetInnerHTML={{ __html: `${item.image}` }} />
              }
              title={item.title}
              content={item.description}
              linkDetail={item.linkDetail}
            />
          ))}
        </RowLayout>
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
};
