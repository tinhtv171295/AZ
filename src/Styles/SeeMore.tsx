import styled from "styled-components";

type Props = {
  url?: string;
};

export default function SeeMore({ url = "#" }: Props) {
  return (
    <Stl.Wrap>
      <Stl.Link href={url}>Xem thêm</Stl.Link>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    font-size: 14px;
  `,
  Link: styled.a`
    color: var(--color-primary);
  `,
};
