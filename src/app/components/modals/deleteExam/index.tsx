import { examProps } from "@/utils/interfaces";
import React, { useState } from "react";
import { CiWarning } from "react-icons/ci";
import { IoMdClose } from "react-icons/io";
import CustomButton from "../../customBtn";
interface DeleteModalProps {
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
  setRefetch: React.Dispatch<React.SetStateAction<number>>;
  currentExam?: examProps | undefined;
}
const DeleteModal = ({
  setOpen,
  setRefetch,
  currentExam,
}: DeleteModalProps) => {
  const [isButtonLoading, setIsButtonLoading] = useState(false);

  const deletehandler = async () => {
       setIsButtonLoading(true);
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

      localStorage.setItem("exams", JSON.stringify(filteredlist));
      setTimeout(() => {
        setRefetch(Math.random());
        setIsButtonLoading(false);
        setOpen(false);
      }, 500);
    }

 
  };
  return (
    <div className="flex flex-col justify-center items-center">
      <div className="flex justify-end items-center w-full ">
        <IoMdClose
          onClick={() => setOpen(false)}
          className="cursor-pointer text-[24px] "
        />
      </div>

      <CiWarning className="text-[100px] text-[red] my-5 " />

      <p className="text-[#383D41] text-[24px] font-[500] leading-[21px]  text-center ">
        This Action is irreversible
      </p>

      <div className="mt-8 w-full">
        <CustomButton
          text="Delete"
          variant="darkTheme"
          handleSubmit={() => deletehandler()}
          isloading={isButtonLoading}
          disable={isButtonLoading}
        />
      </div>
    </div>
  );
};

export default DeleteModal;
