import React from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import CustomButton from "../customBtn";
interface examProps {
  id: String;
  title: String;
  year: String;
  dateCreated: String;
  dateDue: String;
  weight: String;
  maxPoints: number;
  passingThreshold: number;
  status: String;
  course: String;
  description: String;
  visible: boolean;
}
interface examCardProps {
  currentExam: examProps;
}

const ExamCard = ({ currentExam }: examCardProps) => {
  const { title, year, dateCreated, dateDue, weight, maxPoints } =
    currentExam ?? {};
  return (
    <div className="rounded-[24px] w-full py-8 px-5 !bg-[#F3EBE4]  ">
      <p className="text-[#383D41] text-[18px] font-[700] leading-[21px] w-full truncate  ">
        {title}
      </p>

      <p className="text-[#383D41] text-[18px] font-[500] leading-[21px] my-2 ">
        {year}
      </p>
      <div className="grid gap-3">
        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            Date Created:
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            {dateCreated}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            Date Due:
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            {dateDue}
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            Weight:
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            <span className="font-bold" >{weight}</span> of final grade
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            Student Attempted:
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            85/<span className="font-[700]" >{maxPoints}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4   ">
        <div className="flex justify-start items-center gap-3 ">
          <FiEdit className="!text-[20px] text-[#383d41e4] " />
          <RiDeleteBinLine className="!text-[20px] !text-[#ff0000ec] " />
        </div>
        <div className="w-[120px]">
          <CustomButton
            text="Grade Now"
            handleSubmit={() => {}}
            variant="darkTheme"
            isSmall
          />
        </div>
      </div>
    </div>
  );
};

export default ExamCard;
