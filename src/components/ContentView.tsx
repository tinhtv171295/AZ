import styled, { WebTarget } from "styled-components";

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

const Stl = (dl?: WebTarget) => {
  if (dl !== undefined) {
    return {
      Content: styled(dl)<{ $align: TextAlign }>`
        display: block;
        font-size: 16px;
        line-height: 22px;
      `,
    };
  }
  return {
    Content: styled.div<{ $align: TextAlign }>`
      display: block;
      font-size: 16px;
      line-height: 22px;
      text-align: ${({ $align }) => $align};
    `,
  };
};
