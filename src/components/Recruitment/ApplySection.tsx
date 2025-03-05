import styled from "styled-components";

export default function ApplySection() {
  return (
    <Stl.Wrap>
      <p>
        Không tìm thấy công việc phù hợp? Mời bạn để lại hồ sơ chờ
        <a href="/recruitment/apply">Tại đây</a>
      </p>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    padding: 20px;
    background-color: #f2f2f2;
    color: #333;
    font-size: 16px;
    text-align: center;
    a {
      color: #fff;
      padding: 8px 20px;
      background-color: #2d8ffd;
      -moz-border-radius: 3px;
      -webkit-border-radius: 3px;
      border-radius: 3px;
      margin-left: 15px;
    }
  `,
};
