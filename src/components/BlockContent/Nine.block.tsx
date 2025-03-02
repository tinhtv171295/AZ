import { styled } from "styled-components";
import { IBlock } from "../../mocks/type";
import { ContainerStl } from "../../Styles/Container";
import { useEffect, useState } from "react";
import LocationIcon from "../UI/Icons/Location";

export default function BlockNine({
  type,
  backgroundColor,
  dataContent,
}: IBlock) {
  const [selected, setSelected] = useState(0);
  const [url, setUrl] = useState<string | undefined>("");

  const handleChangeId = (id: number, url?: string) => {
    setSelected(id);
    setUrl(url);
  };

  const refresh = () => {
    const first = dataContent[0];
    if (first) {
      setSelected(0);
      setUrl(dataContent[0].image);
    }
  };

  useEffect(() => {
    refresh();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dataContent]);

  return (
    <Stl.Wrap data-component={type} $backgroundColor={backgroundColor}>
      <ContainerStl>
        <Stl.TabHeader>
          {dataContent.map((contact, i) => (
            <Stl.TabItem
              className={selected === i ? "active" : ""}
              onClick={() => handleChangeId(i, contact.image)}
              key={i}
            >
              <strong>{contact.description}: </strong>{" "}
              <span>{contact.title}</span>
            </Stl.TabItem>
          ))}
        </Stl.TabHeader>

        <Stl.Body>
          <Stl.Icon>
            <LocationIcon />
          </Stl.Icon>
          <Stl.Desc>{dataContent[selected]?.description}:</Stl.Desc>
          <Stl.Content>{dataContent[selected]?.content}</Stl.Content>
        </Stl.Body>
        <iframe
          src={`https://www.google.com/maps/embed?${url}`}
          width="100%"
          height="450"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </ContainerStl>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div<{ $backgroundUrl?: string; $backgroundColor?: string }>`
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
  TabHeader: styled.div`
    display: flex;
    justify-content: center;
    margin: 0 0 40px;
  `,
  TabItem: styled.div`
    background: #fff;
    flex: 1;
    min-height: 40px;
    border: 1px solid #f2f2f2;
    justify-content: center;
    display: flex;
    align-items: center;
    position: relative;
    cursor: pointer;
    flex-direction: column;
    padding: 10px;
    line-height: 20px;
    font-size: 14px;
    @media (min-width: 768px) {
      font-size: 16px;
      max-width: 230px;
      flex-direction: row;
      padding: 0 10px;
    }
    strong {
      font-weight: bolder;
      @media (min-width: 768px) {
        margin: 0 5px 0 0;
      }
    }
    span,
    strong {
      @media (min-width: 768px) {
        display: inline-block;
      }
    }
    &.active {
      background: #428dff;
      color: #fff;
      &::before {
        content: "";
        display: block;
        position: absolute;
        left: 50%;
        bottom: -10px;
        border-style: solid;
        height: 0;
        width: 0;
        border-color: #428dff transparent transparent transparent;
        border-width: 10px 8px 0 8px;
      }
    }
  `,
  Body: styled.div`
    position: relative;
    padding: 0 0 0 25px;
    margin-bottom: 30px;
  `,
  Icon: styled.div`
    color: #428dff;
    width: 12px;
    position: absolute;
    left: 0;
    top: 5px;
  `,
  Desc: styled.div`
    font-weight: bolder;
    margin-bottom: 6px;
    font-size: 16px;
  `,
  Content: styled.div`
    font-size: 16px;
  `,
};
