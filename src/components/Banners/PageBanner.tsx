import styled from "styled-components";

type Props = {
  title: string;
  content?: string;
  image: string;
};

export default function PageBanner({ title, content, image }: Props) {
  return (
    <Stl.Wrap $backgroundUrl={image}>
      <Stl.Content>
        <div>
          <a href="#">{title}</a>
        </div>
        <h2>{content}</h2>
      </Stl.Content>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl: string }>`
    background-image: url(${({ $backgroundUrl }) => $backgroundUrl});
    background-position: 50% 0%;
    background-repeat: no-repeat;
    background-attachment: fixed;
    color: #fff;
    height: 250px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    position: relative;
    margin-bottom: 60px;

    &&::before {
      content: "";
      background: rgba(0, 0, 0, 0.65);
      position: absolute;
      left: 0;
      top: 0;
      display: block;
      width: 100%;
      height: 100%;
    }
  `,
  Content: styled.div`
    position: relative;
    z-index: 1;
    text-align: center;
  `,
};
