import styled, { css, WebTarget } from "styled-components";

type TextAlign = "right" | "center" | "justify" | "left" | "inherit";

type Props = {
  content?: string;
  align?: TextAlign;
  el?: WebTarget;
};
export default function ContentView({ content, align = "justify", el }: Props) {
  const ContentStl = Stl(el);

  return (
    <ContentStl.Content
      $align={align}
      dangerouslySetInnerHTML={{
        __html: `${content}`,
      }}
    />
  );
}

const ContentCss = css`
  p {
    color: #000 !important;
    margin-bottom: 5px;
    line-height: 26px;
    font-size: 11pt !important;
  }
  ul {
    list-style: initial;
    margin-left: 20px;
  }
  li {
    color: #000;
    padding-left: 10px;
    padding-bottom: 5px;
    white-space: normal !important;
    font-size: 11pt !important;
  }
  span {
    color: #000 !important;
  }
`;

const Stl = (dl?: WebTarget) => {
  if (dl !== undefined) {
    return {
      Content: styled(dl)<{ $align: TextAlign }>`
        display: block;
        font-size: 16px;
        line-height: 22px;
        text-align: ${({ $align }) => $align};
        ${ContentCss}
      `,
    };
  }
  return {
    Content: styled.div<{ $align: TextAlign }>`
      display: block;
      font-size: 16px;
      line-height: 22px;
      text-align: ${({ $align }) => $align};
      ${ContentCss}
    `,
  };
};
