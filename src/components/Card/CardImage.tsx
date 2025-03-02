import styled from "styled-components";

type Props = {
  title: string;
  description?: string;
  image?: string;
};

export default function CardImage({ title, description, image }: Props) {
  return (
    <Stl.Wrap>
      <Stl.Image>{image && <img src={image} alt={title} />}</Stl.Image>
      <Stl.Title>{title}</Stl.Title>
      <Stl.Description>
        {description && <div>{description}</div>}
      </Stl.Description>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    width: 23%;
  `,
  Image: styled.div`
    width: 100%;
    height: 325px;
    border-radius: 10px;
    overflow: hidden;
    img {
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  `,
  Title: styled.div`
    margin: 10px 0 5px;
    text-align: center;
  `,
  Description: styled.div`
    text-align: center;
    color: #828282;
  `,
};
