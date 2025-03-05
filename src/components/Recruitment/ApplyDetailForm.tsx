import { PropsWithChildren, useRef } from "react";
import styled from "styled-components";
import { FormItemStl } from "./style";

export default function ApplyDetailForm() {
  const uploadRef = useRef<HTMLInputElement>(null);
  return (
    <FormStl.Wrap>
      <FormStl.Title>Application form</FormStl.Title>
      <form>
        <FormItem label="Full Name" required>
          <FormItemStl.Input type="text" placeholder="e.g. Nguyen Van A" />
        </FormItem>

        <FormItem label="Email Address" required>
          <FormItemStl.Input type="text" placeholder="e.g. you@example.com" />
        </FormItem>

        <FormItem label="Phone Number" required>
          <FormItemStl.Input type="text" placeholder="e.g. 09123***" />
        </FormItem>

        <FormItemStl.UploadInput>
          <FormItemStl.WrapUpload>
            <input ref={uploadRef} hidden type="file" />
            <div>Please upload your CV/ Resume here *</div>
            <FormItemStl.WrapMore>
              To attach your Resume, click here to upload from your Computer.
            </FormItemStl.WrapMore>
          </FormItemStl.WrapUpload>
        </FormItemStl.UploadInput>

        <FormItem label="Security code" required>
          <FormItemStl.Input
            type="text"
            placeholder="Enter the security code below"
          />
        </FormItem>

        <FormStl.ButtonSubmit>Submit</FormStl.ButtonSubmit>
      </form>
    </FormStl.Wrap>
  );
}

const FormStl = {
  Wrap: styled.div`
    background-color: #fff;
    padding: 25px 0;
    margin-top: 40px;
    border-top: 2px dotted rgba(0, 0, 0, 0.1);
  `,
  Title: styled.h1`
    font-weight: 300;
    font-size: 36px;
    padding-bottom: 30px;
  `,
  ButtonSubmit: styled.div`
    background-color: var(--color-primary);
    padding: 15px 0;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    border-radius: 4px;
    font-weight: 500;
    font-size: 16px;
    position: relative;
    text-align: center;
    color: #fff;
    cursor: pointer;
    font-weight: 500;
    margin-top: 30px;
  `,
};

type Props = PropsWithChildren & {
  label: string;
  required?: boolean;
};

export function FormItem({ label, required, children }: Props) {
  return (
    <FormItemStl.Wrap>
      <FormItemStl.Label>
        {label}
        {required && <span>*</span>}
      </FormItemStl.Label>
      <FormItemStl.InputControl>{children}</FormItemStl.InputControl>
    </FormItemStl.Wrap>
  );
}
