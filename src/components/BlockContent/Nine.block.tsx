import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { useEffect, useState } from "react";

export default function BlockNine({
  type,
  backgroundColor,
  dataContent,
}: IBlock) {
  const [selected, setSelected] = useState(0);

  const handleChangeId = (id: number) => {
    setSelected(id);
  };

  const refresh = () => {
    const first = dataContent[0];
    if (first) {
      setSelected(0);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataContent]);

  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <div>
          {dataContent.map((contact, i) => (
            <div key={i}>
              <div
                className={selected === i ? "active" : ""}
                onClick={() => handleChangeId(i)}
              >
                <div>
                  <img src={contact.image} />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div>
          <div>{dataContent[selected]?.title}</div>
          <div>{dataContent[selected]?.description}</div>
          <div>{dataContent[selected]?.content}</div>
        </div>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
    padding: 60px 0;
    ${({ $backgroundUrl, $backgroundColor }) =>
      $backgroundUrl !== undefined
        ? `
            background: url(${$backgroundUrl}) no-repeat 50% 50% fixed;
            background-size: cover;
            color: ${$backgroundColor ? $backgroundColor : "#fff"};
            min-height: 600px;
      `
        : `${$backgroundColor ? `background: ${$backgroundColor};` : ""}`}
  `,
};
