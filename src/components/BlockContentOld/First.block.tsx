import styled from "styled-components";
import BlockHeader from "./BlockHeader";
import { ContainerStl } from "../../Styles/Container";
import { IBlock } from "../../mocks/type";

export default function FirstBlock({
  title,
  titleBody,
  content,
  linkDetail,
  backgroundUrl,
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
        {content && (
          <Stl.Body
            dangerouslySetInnerHTML={{
              __html: `${content}`,
            }}
          />
        )}
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
};
