import { Form, Input } from "antd";
import React, { ChangeEvent, useState } from "react";
interface CustomInputProps {
  fieldName: string;
  label: string;
  isrequired?: boolean;
  placeholder: string;
  autocompleteValue?: string;
}
const CustomInput = ({
  fieldName,
  label,
  isrequired,
  placeholder,
  autocompleteValue,
}: CustomInputProps) => {
  const [inputValue, setInputValue] = useState<string>(
    autocompleteValue ? autocompleteValue : ""
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setInputValue(value);
  };
  return (
    <Form.Item
      name={fieldName}
      className={`!mb-0 !mt-1`}
      label={
        label ? (
          label
        ) : null
      }
      rules={isrequired ? [{ required: true }] : undefined}
    >
      <Input
        className="!bg-[#EEE8E3] !rounded-[12px]  !outline-none !shadow-none   "
        placeholder={placeholder}
        onChange={(e) => handleChange(e)}
        value={inputValue}
      />
    </Form.Item>
  );
};

export default CustomInput;
