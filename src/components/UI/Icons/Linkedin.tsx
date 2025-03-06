import { styled } from "styled-components";

export default function Linkedin() {
  return (
    <Stl.WrapIcon>
      <svg viewBox="0 0 14 14" id="osc-icon-linkedin">
        <path
          d="M13.9967 13.9998V13.9992H14.0002V8.86472C14.0002 6.35289 13.4595 4.41797 10.523 4.41797C9.11131 4.41797 8.16398 5.19264 7.77723 5.92705H7.7364V4.65247H4.95215V13.9992H7.85131V9.37106C7.85131 8.15247 8.08231 6.97414 9.5914 6.97414C11.0783 6.97414 11.1005 8.36481 11.1005 9.44923V13.9998H13.9967Z"
          fill="currentColor"
        ></path>
        <path
          d="M0.230957 4.65332H3.13362V14.0001H0.230957V4.65332Z"
          fill="currentColor"
        ></path>
        <path
          d="M1.68117 0C0.753083 0 0 0.753083 0 1.68117C0 2.60925 0.753083 3.37808 1.68117 3.37808C2.60925 3.37808 3.36233 2.60925 3.36233 1.68117C3.36175 0.753083 2.60867 0 1.68117 0V0Z"
          fill="currentColor"
        ></path>
      </svg>
    </Stl.WrapIcon>
  );
}

const Stl = {
  WrapIcon: styled.span`
    display: inline-block;
    height: 15px;

    svg {
      display: block;
      width: 100%;
    }
  `,
};
