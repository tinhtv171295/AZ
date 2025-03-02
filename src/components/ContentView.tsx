import styled, { WebTarget } from "styled-components";

type Props = {
  content?: string;
  el?: WebTarget;
};
export default function ContentView({ content, el }: Props) {
  const ContentStl = Stl(el);

  return (
    <ContentStl.Content
      dangerouslySetInnerHTML={{
        __html: `${content}`,
      }}
    />
  );
}

const Stl = (dl?: WebTarget) => {
  if (dl !== undefined) {
    return {
      Content: styled(dl)`
        display: block;
        font-size: 16px;
        line-height: 22px;
      `,
    };
  }
  return {
    Content: styled.div`
      display: block;
      font-size: 16px;
      line-height: 22px;
    `,
  };
};
