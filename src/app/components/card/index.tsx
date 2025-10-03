import React, { useState } from "react";
import { FiEdit } from "react-icons/fi";
import { RiDeleteBinLine } from "react-icons/ri";
import CustomButton from "../customBtn";
import { examCardProps } from "@/utils/interfaces";
import Modals from "../modals";
import CreateExam from "../modals/createExam";
import DeleteModal from "../modals/deleteExam";

const ExamCard = ({ currentExam, setRefetch }: examCardProps) => {
  const { title, year, dateCreated, dateDue, weight, maxPoints, visible } =
    currentExam ?? {};
  // Edit exam modal
  const [isEditExamModal, setIsEditExamModal] = useState(false);
  // delete exam modal
  const [isDeleteExamModal, setIsDeleteExamModal] = useState(false);

  return (
    <div className="rounded-[24px] w-full py-8 px-5 !bg-[#F3EBE4]  ">
      <p className="text-[#383D41] text-[18px] font-[700] leading-[21px] w-full truncate  capitalize ">
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
            <span className="font-bold">{weight}</span> of final grade
          </p>
        </div>

        <div className="flex justify-between items-center">
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            Student Attempted:
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px]  ">
            85/<span className="font-[700]">{maxPoints}</span>
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center mt-4   ">
        <div className="flex justify-start items-center gap-3 ">
          <FiEdit
            className="!text-[20px] text-[#383d41e4] cursor-pointer "
            onClick={() => setIsEditExamModal(true)}
          />
          <RiDeleteBinLine
            className="!text-[20px] !text-[#ff0000ec] cursor-pointer "
            onClick={() => setIsDeleteExamModal(true)}
          />
        </div>
        <div className="w-[120px]">
          {visible ? (
            <CustomButton
              text="Grade Now"
              handleSubmit={() => {}}
              variant="darkTheme"
              isSmall
            />
          ) : (
            <p className="text-[red]  text-end ">Not visible</p>
          )}
        </div>
      </div>

      {/* Edit exam  */}
      <Modals open={isEditExamModal} setOpen={setIsEditExamModal}>
        <CreateExam
          setOpen={setIsEditExamModal}
          currentExam={currentExam}
          setRefetch={setRefetch}
        />
      </Modals>
      {/* delete exam  */}
      <Modals open={isDeleteExamModal} setOpen={setIsDeleteExamModal}>
        <DeleteModal
          setOpen={setIsDeleteExamModal}
          currentExam={currentExam}
          setRefetch={setRefetch}
        />
      </Modals>
    </div>
  );
};

export default ExamCard;
