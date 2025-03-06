import styled from "styled-components";

export default function ArrowRightIcon() {
  return (
    <Stl.WrapIcon>
      <svg viewBox="0 0 12 23" id="osc-arrow-right">
        <path
          d="M11.6814 10.6791L1.8805 0.339525C1.45045 -0.113175 0.753685 -0.113175 0.322542 0.339525C-0.107514 0.792224 -0.107514 1.52753 0.322542 1.98023L9.34604 11.4994L0.323628 21.0186C-0.106428 21.4713 -0.106428 22.2066 0.323628 22.6605C0.753685 23.1132 1.45153 23.1132 1.88159 22.6605L11.6825 12.3209C12.106 11.8729 12.106 11.126 11.6814 10.6791Z"
          fill="currentColor"
        ></path>
      </svg>
    </Stl.WrapIcon>
  );
}

const Stl = {
  WrapIcon: styled.span`
    display: inline-block;
    width: 7px;
    /* height: 8px; */

    svg {
      display: block;
      width: 100%;
    }
  `,
};
