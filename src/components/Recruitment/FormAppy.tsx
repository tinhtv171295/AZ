import styled from "styled-components";
import { FormItemStl } from "./style";
import { FormItem } from "./ApplyDetailForm";
import { useRef } from "react";

export default function FormApply() {
  const uploadRef = useRef<HTMLInputElement>(null);
  return (
    <Stl.Wrap>
      <Stl.Content>
        <Stl.Header>
          <Stl.Top>
            <Stl.TopTitle>Tham gia mạng lưới tuyển dụng</Stl.TopTitle>
            <Stl.TopBack>
              <a href="https://recruitment.dlsinc.com/home">
                Trở lại trang tuyển dụng
              </a>
            </Stl.TopBack>

            <Stl.Logo>
              <img src="https://datax-talent.basecdn.net/dls/logo.png" />
            </Stl.Logo>
          </Stl.Top>
          <Stl.TopContent>
            <p>
              Chúng tôi rất tiếc vì bạn không thể tìm thấy vị trí phù hợp tại
              DLS trong đợt tuyển dụng này.
            </p>
            <p>
              Đừng lo lắng, hãy gửi CV cho chúng tôi và chờ đợi cơ hội mỉm cười
              với bạn vì hồ sơ của bạn có thể là một mảnh ghép còn thiếu của DLS
              trong tương lai gần.
            </p>
            <p>
              Chúng tôi sẽ lưu hồ sơ và liên hệ với bạn ngay khi có vị trí phù
              hợp.
            </p>
            <p>
              Hi vọng chúng ta có thể trở thành bạn đồng hành trên con đường dài
              phía trước.
            </p>
            <p>Chúc bạn sức khỏe và thành công!</p>
          </Stl.TopContent>
        </Stl.Header>
        <form>
          <FormItem label="Họ & tên bạn" required>
            <FormItemStl.Input placeholder="Tên của bạn" />
          </FormItem>

          <FormItem label="Địa chỉ email" required>
            <FormItemStl.Input placeholder="Địa chỉ Email" />
          </FormItem>

          <FormItem label="Số điện thoại">
            <FormItemStl.Input placeholder="Số điện thoại" />
          </FormItem>

          <FormItem label="Địa chỉ hiện tại">
            <FormItemStl.Input placeholder="Địa chỉ hiện tại" />
          </FormItem>

          <FormItem label="Công việc gần đây">
            <FormItemStl.Input placeholder="Công việc gần đây" />
          </FormItem>

          <FormItem label="Số năm kinh nghiệm">
            <FormItemStl.Input placeholder="Số năm kinh nghiệm" />
          </FormItem>

          <FormItemStl.UploadInput>
            <FormItemStl.WrapUpload>
              <input ref={uploadRef} hidden type="file" />
              <div>CV của bạn *</div>
              <FormItemStl.WrapMore>
                Click để chọn & upload CV của bạn
              </FormItemStl.WrapMore>
            </FormItemStl.WrapUpload>
          </FormItemStl.UploadInput>

          <FormItem
            label="Thông tin thêm (Vị trí mong muốn, các thông tin khác, thắc mắc nếu có,...)"
            required
          >
            <FormItemStl.TextArea />
          </FormItem>
        </form>
      </Stl.Content>
    </Stl.Wrap>
  );
}

const Stl = {
  Wrap: styled.div`
    display: block;
    background: #f3f3f3;
    padding-top: 10px;
    padding-bottom: 10px;
  `,
  Header: styled.div`
    display: flex;
    flex-flow: column nowrap;
  `,
  Top: styled.div`
    padding-bottom: 20px;
    border-bottom: 1px dotted #ddd;
    position: relative;
  `,
  TopTitle: styled.h1`
    font-size: 26px;
    font-weight: normal;
    padding-bottom: 3px;
    color: #637788;
  `,
  TopBack: styled.div`
    a {
      font-size: 14px;
      font-weight: normal;
      color: #637788;
    }
  `,
  TopContent: styled.div`
    padding: 30px 0;
    color: #637788;
    p {
      margin-bottom: 10px;
      font-size: 14px;
      line-height: 16px;
    }
  `,
  Logo: styled.div`
    position: absolute;
    right: 0px;
    top: 0px;
    img {
      max-height: 48px;
    }
  `,
  Content: styled.div`
    background-color: #fff;
    padding: 40px;
    position: relative;
    max-width: 720px;
    margin: 50px auto;
    -moz-border-radius: 3px;
    -webkit-border-radius: 3px;
    border-radius: 3px;
    -moz-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);
    -webkit-box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);
    box-shadow: 0 2px 4px 0px rgba(0, 0, 0, 0.1);
  `,
};
