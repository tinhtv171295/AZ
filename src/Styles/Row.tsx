import React from "react";
import styled from "styled-components";

const Row = styled.div`
  display: -ms-flexbox;
  display: flex;
  -ms-flex-wrap: wrap;
  flex-wrap: wrap;
  margin-right: -15px;
  margin-left: -15px;
`;

export default Row;

type MarginType =
  | number
  | [TopBottom: number, RightLeft: number]
  | [Top: number, Left: number, Bottom: number, Right: number]
  | string;

type Props = {
  sm?: number;
  md?: number;
  lg?: number;
  col?: number;
  children: React.ReactNode[];
  margin?: MarginType;
  marginMd?: MarginType;
  marginLg?: MarginType;
};

export function RowLayout({
  sm = 1,
  md = 2,
  lg = 3,
  col = 1,
  children,
  margin = 0,
  marginMd = 0,
  marginLg = 0,
}: Props) {
  return (
    <RowStl.Wrap>
      {children.map((child, i) => (
        <RowStl.Col
          key={i}
          $sm={sm}
          $md={md}
          $lg={lg}
          $col={col}
          $margin={getMargin(margin)}
          $marginMd={getMargin(marginMd)}
          $marginLg={getMargin(marginLg)}
        >
          {child}
        </RowStl.Col>
      ))}
    </RowStl.Wrap>
  );
}

function getMargin(margin?: MarginType): string | number {
  if (margin === undefined) return 0;
  if (Array.isArray(margin)) {
    if (margin.length === 2) {
      return `${margin[0]}px ${margin[1]}px`;
    }

    if (margin.length === 4) {
      return `${margin[0]}px ${margin[1]}px ${margin[2]}px ${margin[3]}px`;
    }
  }

  if (typeof margin === "string") return margin;

  return 0;
}

const RowStl = {
  Wrap: styled(Row)``,
  Col: styled.div<{
    $sm: number;
    $md: number;
    $lg: number;
    $col: number;
    $margin: string | number;
    $marginMd: string | number;
    $marginLg: string | number;
  }>`
    position: relative;
    width: 100%;
    padding-right: 15px;
    padding-left: 15px;
    -ms-flex: 0 0 ${({ $col }) => 100 / $col}%;
    flex: 0 0 ${({ $col }) => 100 / $col}%;
    max-width: ${({ $col }) => 100 / $col}%;
    margin: ${({ $margin }) => $margin};

    @media (min-width: 768px) {
      -ms-flex: 0 0 ${({ $md }) => 100 / $md}%;
      flex: 0 0 ${({ $md }) => 100 / $md}%;
      max-width: ${({ $md }) => 100 / $md}%;
      margin: ${({ $marginMd }) => $marginMd};
    }

    @media (min-width: 992px) {
      -ms-flex: 0 0 ${({ $lg }) => 100 / $lg}%;
      flex: 0 0 ${({ $lg }) => 100 / $lg}%;
      max-width: ${({ $lg }) => 100 / $lg}%;
      margin: ${({ $marginLg }) => $marginLg};
    }
  `,
};
