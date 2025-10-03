import { DatePicker, Form, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { IoMdClose } from "react-icons/io";
import CustomInput from "../../customInput";
import TextArea from "antd/es/input/TextArea";
import { FaCaretDown } from "react-icons/fa";
import RadioComponent from "../../RadioComponent";
import CustomButton from "../../customBtn";
import { BiSave } from "react-icons/bi";
import { CreateExamProps, examProps } from "@/utils/interfaces";
import { dateToString, stringToDate } from "@/helpers";
import dayjs from "dayjs";

const CreateExam = ({ setOpen, setRefetch, currentExam }: CreateExamProps) => {
  const [form] = Form.useForm();
  const values = Form.useWatch([], form);
  // radio button value
  const [selectedValue, setSelectedvalue] = useState(
    currentExam && currentExam.visible ? "Yes" : "No"
  );
  // button state
  const [isButtonLoading, setIsButtonLoading] = useState(false);
  const now = new Date();

  const addExamHandler = async () => {
    try {
      if (await form.validateFields()) {
        setIsButtonLoading(true);
        const data = {
          id: Math.random().toString(),
          title: `${values?.title} | ${values?.Course}`,
          year: "YR 2",
          dateCreated: dateToString(now),
          dateDue: dateToString(values?.date),
          weight: parseFloat(values?.Weighted),
          maxPoints: parseFloat(values?.Mpoint),
          passingThreshold: values?.PassingThreshold,
          status: "Not Attempted",
          course: values?.Course,
          description: values?.description,
          visible: selectedValue === "Yes",
        };

        const currentExamList: examProps[] = JSON.parse(
          localStorage.getItem("exams") as string
        );
        const newExamList = [...currentExamList, data];
        localStorage.setItem("exams", JSON.stringify(newExamList));
        setTimeout(() => {
          setRefetch(Math.random());
          setIsButtonLoading(false);
          setOpen(false);
        }, 500);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const editExamhandler = async () => {
    try {
      if (await form.validateFields()) {
        setIsButtonLoading(true);
        const data = {
          id: currentExam?.id,
          title: `${values?.title} | ${values?.Course}`,
          year: "YR 2",
          dateCreated: dateToString(now),
          dateDue: dateToString(values?.date),
          weight: parseFloat(values?.Weighted),
          maxPoints: parseFloat(values?.Mpoint),
          passingThreshold: values?.PassingThreshold,
          status: "Not Attempted",
          course: values?.Course,
          description: values?.description,
          visible: selectedValue === "Yes",
        };

        const currentExamList: examProps[] = JSON.parse(
          localStorage.getItem("exams") as string
        );
        // check if exam exist 
        const doesExamExist = currentExamList.find(
          (exam) => exam.id === currentExam?.id
        );

        if (doesExamExist) {
          const filteredlist = currentExamList.filter(
            (exam) => exam.id !== currentExam?.id
          );
       
          const newExamList = [...filteredlist, data];
          localStorage.setItem("exams", JSON.stringify(newExamList));
          setTimeout(() => {
            setRefetch(Math.random());
            setIsButtonLoading(false);
            setOpen(false);
          }, 500);
        }
      }
    } catch (error) {}
  };

  // if currentExam exist - that means user is trying to edit
  const populateFields = () => {
    if (!currentExam) {
      return;
    }
    form.setFieldsValue({
      title: currentExam.title?.split('|')[0],
      description: currentExam.description,
      date: stringToDate(currentExam.dateDue),
      Course: currentExam.course,
      Mpoint: currentExam.maxPoints,
      Weighted: currentExam.weight,
      PassingThreshold: currentExam.passingThreshold,
    });
  };

  useEffect(() => {
    populateFields();
  }, [currentExam]);

  return (
    <div className="">
      <div className="flex justify-between items-center mb-4 ">
        <p className="text-[#383D41] text-[18px] font-[500] leading-[21px]  ">
          {currentExam ? "Edit Exam" : "Create Exam"}
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

        <div className="grid md:grid-cols-2 gap-4">
          <Form.Item name={"date"} label={"Date"} rules={[{ required: true }]}>
            <DatePicker
              className="w-full !mt-1 !bg-[#EEE8E3] !rounded-[12px]  "
              suffixIcon={<FaCaretDown className="!text-[20px] " />}
              placeholder=""
              format="MMMM D, YYYY"
            />
          </Form.Item>

          <CustomInput
            label="Course"
            placeholder="Enter Course"
            fieldName="Course"
            isrequired
          />
        </div>
        <div className="grid md:grid-cols-2 2xl:grid-cols-3 gap-4">
          <CustomInput
            label="Maximum Point"
            placeholder="Max. point"
            fieldName="Mpoint"
            isrequired
            isNumber
          />
          <CustomInput
            label="Weighted"
            placeholder="Enter weight"
            fieldName="Weighted"
            isrequired
            ispercentage
            isNumber
          />

          <CustomInput
            label="Passing Threshold"
            placeholder="Enter Passing"
            fieldName="PassingThreshold"
            isrequired
            isNumber
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

        <div className="flex justify-end items-center md:flex-row flex-col-reverse gap-4 mt-6 ">
          <CustomButton
            text="Cancel"
            variant="yellowTheme"
            handleSubmit={() => setOpen(false)}
          />

          <CustomButton
            text="Update"
            variant="darkTheme"
            handleSubmit={() =>
              currentExam ? editExamhandler() : addExamHandler()
            }
            Icon={BiSave}
            isloading={isButtonLoading}
            disable={isButtonLoading}
          />
        </div>
      </Form>
    </div>
  );
};

export default CreateExam;
