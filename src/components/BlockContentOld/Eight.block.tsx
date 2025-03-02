import { css, styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { RowLayout } from "../../Styles/Row";

export default function BlockContentEight({
  backgroundColor,
  dataContent,
}: IBlock) {
  let id = 0;
  return (
    <Stl.Wrap $bgColor={backgroundColor}>
      <ContainerStl>
        <Stl.WrapContent>
          {Array.from({
            length: Math.ceil(dataContent.length / 6),
          }).map((_, i) => {
            return (
              <RowLayout
                col={2}
                md={4}
                lg={4}
                key={`wrap${i}`}
                margin={[0, 0, 30, 0]}
                marginLg={[0, 0, 30, 0]}
              >
                {Array.from({
                  length: 4,
                }).map((_, index) => {
                  if (
                    (index % 2 === 0 && i % 2 === 0) ||
                    (i % 2 !== 0 && index % 2 !== 0)
                  ) {
                    if (id !== 0) ++id;
                    if (id > dataContent.length - 1) return;

                    return (
                      <ItemImage
                        key={`Item${id}`}
                        isBig={true}
                        title={dataContent[id].title}
                        image={dataContent[id].image}
                        link={dataContent[id].linkDetail}
                      />
                    );
                  }
                  return (
                    <Stl.Group key={`Group${id}`}>
                      {++id < dataContent.length && (
                        <ItemImage
                          key={`Item${id}`}
                          isBig={false}
                          title={dataContent[id].title}
                          image={dataContent[id].image}
                          link={dataContent[id].linkDetail}
                        />
                      )}

                      {++id < dataContent.length && (
                        <ItemImage
                          key={`Item${id}`}
                          isBig={false}
                          title={dataContent[id].title}
                          image={dataContent[id].image}
                          link={dataContent[id].linkDetail}
                        />
                      )}
                    </Stl.Group>
                  );
                })}
              </RowLayout>
            );
          })}
        </Stl.WrapContent>
      </ContainerStl>
    </Stl.Wrap>
  );
}

type Props = {
  title: string;
  image?: string;
  isBig: boolean;
  link?: string;
};

function ItemImage({ title, image, link, isBig }: Props) {
  if (isBig)
    return (
      <Stl.BigItem>
        <a href={link}></a>
        <img src={image} alt={title} />
        <Stl.Title>
          <span>{title}</span>
        </Stl.Title>
      </Stl.BigItem>
    );
  return (
    <Stl.Item>
      <a href={link}></a>
      <img src={image} alt={title} />
      <Stl.Title>
        <span>{title}</span>
      </Stl.Title>
    </Stl.Item>
  );
}

const ItemCss = css`
  position: relative;
  display: block;
  color: #fff;
  font-size: 0;
  width: 100%;
  height: 100%;
  -webkit-border-radius: 10px;
  border-radius: 10px;
  background-clip: padding-box;
  overflow: hidden;
  cursor: pointer;
  &:hover {
    img {
      transform: scale(1.1);
    }
  }
  &::before {
    position: absolute;
    content: "";
    width: 100%;
    height: 50%;
    display: block;
    left: 0;
    bottom: 0;
    z-index: 1;
    background: -moz-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: -webkit-linear-gradient(
      top,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 0%,
      rgba(0, 0, 0, 0.65) 100%
    );
    filter: progid:DXImageTransform.Microsoft.gradient(startColorstr='#00000000',endColorstr='#a6000000',GradientType=0);
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    -webkit-transition: all 0.3s ease;
    -moz-transition: all 0.3s ease;
    transition: all 0.3s ease;
  }
`;

const Stl = {
  Wrap: styled.div<{ $bgColor?: string }>`
    ${({ $bgColor }) =>
      $bgColor !== undefined ? `background-color:${$bgColor}` : ""}
  `,
  WrapContent: styled.div`
    /* display: grid; */
    /* grid-template-columns: repeat(4, 1fr); */
    /* grid-template-rows: repeat(4, 165px); */
    display: block;
    /* gap: 30px; */
    width: 100%;
    height: fit-content;
  `,
  Item: styled.div`
    max-height: 150px;
    ${ItemCss}
  `,
  BigItem: styled.div`
    max-height: 330px;
    ${ItemCss}
  `,
  Group: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: 100%;
    gap: 30px;
  `,
  Title: styled.div`
    position: absolute;
    bottom: 0;
    left: 0;
    padding: 10px;
    width: 100%;
    z-index: 2;
  `,
};
