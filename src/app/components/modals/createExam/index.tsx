import { DatePicker, Form, Radio } from "antd";
import React, { useState } from "react";
import { IoMdClose } from "react-icons/io";
import CustomInput from "../../customInput";
import TextArea from "antd/es/input/TextArea";
import { FaCaretDown } from "react-icons/fa";
import RadioComponent from "../../RadioComponent";
import CustomButton from "../../customBtn";
import { BiSave } from "react-icons/bi";
interface CreateExamProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}
const CreateExam = ({ setOpen }: CreateExamProps) => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);

  // radio button value
  const [selectedValue, setSelectedvalue] = useState("");

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 ">
        <p className="text-[#383D41] text-[18px] font-[500] leading-[21px]  ">
          Create Exam{" "}
        </p>
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer text-[24px] "
        />
      </div>

      <Form form={form} layout="vertical" className="flex flex-col gap-4 ">
        <CustomInput
          label="Exam Title"
          placeholder="Enter exam title"
          fieldName="title"
          isrequired
        />
        <Form.Item
          name={"description"}
          className={`!mb-0  !mt-1`}
          label={"Exam Description"}
          rules={[{ required: true }]}
        >
          <TextArea
            rows={4}
            className="!shadow-none !bg-[#EEE8E3] !rounded-[12px] "
            placeholder="Enter exam description"
          />
        </Form.Item>

        <div className="grid grid-cols-2 gap-4">
          <Form.Item name={"date"} label={"Date"} rules={[{ required: true }]}>
            <DatePicker
              className="w-full !mt-1 !bg-[#EEE8E3] !rounded-[12px]  "
              suffixIcon={<FaCaretDown className="!text-[20px] " />}
              placeholder=""
            />
          </Form.Item>

          <CustomInput
            label="Course"
            placeholder="Enter Course"
            fieldName="Course"
            isrequired
          />
        </div>
        <div className="grid grid-cols-3 gap-4">
          <CustomInput
            label="Maximum Point"
            placeholder="Max. point"
            fieldName="Mpoint"
            isrequired
          />
          <CustomInput
            label="Weighted"
            placeholder="Enter weight"
            fieldName="Weighted"
            isrequired
          />

          <CustomInput
            label="Passing Threshold"
            placeholder="Enter Passing"
            fieldName="Passing"
            isrequired
          />
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[700] leading-[21px]  ">
            Visible to all Student
          </p>
          <div className="flex justify-end items-center gap-4">
            {["Yes", "No"].map((x, i) => (
              <RadioComponent
                value={x}
                key={i}
                selectedValue={selectedValue}
                setSelectedvalue={setSelectedvalue}
              />
            ))}
          </div>
        </div>


            <div className="flex justify-end items-center gap-4 mt-6 ">
       
          <CustomButton
            text="Cancel"
            variant="yellowTheme"
            handleSubmit={() => setOpen(false)}
          
          />
       

       
          <CustomButton
            text="Update"
            variant="darkTheme"
            handleSubmit={() => {}}
            Icon={BiSave}
          />
       
      </div>
      </Form>
    </div>
  );
};

export default CreateExam;
