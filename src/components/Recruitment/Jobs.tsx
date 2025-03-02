import styled from "styled-components";
import IRecruitment from "./type";
import moment from "moment";
import { useNavigate } from "react-router-dom";

type Props = {
  data: IRecruitment[];
};

export default function Jobs({ data }: Props) {
  const navigate = useNavigate();
  return (
    <Stl.Wrap>
      {data.map((item, i) => (
        <Stl.WrapItem
          key={i}
          onClick={() => navigate(`/recruitment/${item.id}`)}
        >
          <Stl.Thumb>
            <img src={item.image} alt={item.jobTitle} />
          </Stl.Thumb>
          <Stl.Content>
            <Stl.Title>{item.jobTitle}</Stl.Title>
            <Stl.Desc>Place: {item.placeAddress}</Stl.Desc>
            <Stl.Desc>
              Date: {moment(item.applicationPeriod).format("DD/MM/YYYY")}
            </Stl.Desc>
            <Stl.Desc>Number: {item.quantity}</Stl.Desc>
          </Stl.Content>
        </Stl.WrapItem>
      ))}
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: flex;
    flex-flow: column nowrap;
    width: 100%;
    height: fit-content;
  `,
  WrapItem: styled.div`
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    height: fit-content;
    padding: 30px 0;
    border-bottom: 1px solid #f2f2f2;
    align-items: flex-start;
    cursor: pointer;
    &:first-child {
      padding-top: 0;
    }
    &:last-child {
      border-bottom: none;
    }
  `,
  Thumb: styled.div`
    display: block;
    font-size: 0;
    overflow: hidden;
    margin: 0 0 15px;
    width: 100%;
    height: auto;
    -webkit-border-radius: 10px;
    border-radius: 10px;
    background-clip: padding-box;

    @media (min-width: 600px) {
      width: 170px;
      height: 90px;
      margin-right: 15px;
    }
  `,
  Content: styled.div`
    flex: 1;
  `,
  Title: styled.h4`
    font-weight: bold;
    font-size: 18px;
    margin: 0 0 10px;
  `,
  Desc: styled.div`
    font-size: 14px;
    color: #828282;
    line-height: 20px;
  `,
};
