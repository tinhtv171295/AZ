import styled from "styled-components";
import BlockHeader from "./BlockHeader";
import { ContainerStl } from "../../Styles/Container";
import { BlockContentType } from "./type";

export default function BlockContent({
  title,
  titleBody,
  linkDetail,
  content,
  backgroundUrl,
}: BlockContentType) {
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
