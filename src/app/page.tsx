"use client";

import { Input } from "antd";
import CustomButton from "./components/customBtn";
import { LuFilePlus2 } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdCalendar } from "react-icons/io";
import CustomDropDown from "./components/custom_dropdown";
import { useState } from "react";
import { category, dateFilter, examList, subjectFilter } from "@/utils/mocks";
import { PiNotebook } from "react-icons/pi";
import ExamCard from "./components/card";
import { VscDesktopDownload } from "react-icons/vsc";
import Modals from "./components/modals";
import CreateExam from "./components/modals/createExam";
export default function Home() {
  // date dropdown values
  const [isDateFilterOpen, setIsDateFilterOpen] = useState(false);
  const [dateFilterValue, setdateFilterValue] = useState(dateFilter[0]);

  // date subject values
  const [isSubjectOpen, setIsSubjectOpen] = useState(false);
  const [SubjectValue, setSubjectValue] = useState(subjectFilter[0]);

  // date category values
  const [isCategoryOpen, setIsCategoryOpen] = useState(false);
  const [CategoryValue, setCategoryValue] = useState(category[0]);

  // create exam modal details
  const [isCreateExamModal, setIsCreateExamModal] = useState(false);

  return (
    <div className="min-h-screen ">
      <div className="flex justify-between items-center mt-12 ">
        <p className="text-[#383D41] text-[24px] font-[500] leading-[21px]  ">
          Exam List
        </p>
        <div className="w-[230px]">
          <CustomButton
            text="Create New Exam"
            variant="yellowTheme"
            handleSubmit={() => setIsCreateExamModal(true)}
            Icon={LuFilePlus2}
          />
        </div>
      </div>

      {/* filter section  */}
      <div className="flex gap-4 mt-6">
        <Input
          className="!px-6 !py-4 !min-w-[400px] h-[56px] !border-none !rounded-full !bg-[#F3EBE4]   !outline-none !shadow-none   "
          placeholder="Search"
          prefix={<CiSearch className="!text-[20px] text-[#21201E] " />}
          suffix={<FaCaretDown className="!text-[20px]" />}
        />

        <CustomDropDown
          setIsdropdownOpen={setIsDateFilterOpen}
          isdropdownOpen={isDateFilterOpen}
          filterList={dateFilter}
          setSelectedFilter={setdateFilterValue}
          SelectedFilter={dateFilterValue}
          Prefix={IoMdCalendar}
        />

        <CustomDropDown
          setIsdropdownOpen={setIsSubjectOpen}
          isdropdownOpen={isSubjectOpen}
          filterList={subjectFilter}
          setSelectedFilter={setSubjectValue}
          SelectedFilter={SubjectValue}
          Prefix={PiNotebook}
        />

        <CustomDropDown
          setIsdropdownOpen={setIsCategoryOpen}
          isdropdownOpen={isCategoryOpen}
          filterList={category}
          setSelectedFilter={setCategoryValue}
          SelectedFilter={CategoryValue}
        />
      </div>

      {/* card section  */}
      <div className="grid grid-cols-3 2xl:gap-6 gap-4 my-8 ">
        {examList.map((exam, index) => (
          <ExamCard key={index} currentExam={exam} />
        ))}
      </div>
      {/* CTAs  */}
      <div className="flex justify-end items-center gap-4 ">
        <div className="w-[230px]">
          <CustomButton
            text="Create New Exam"
            variant="yellowTheme"
            handleSubmit={() => {}}
            Icon={LuFilePlus2}
          />
        </div>

        <div className="w-[230px]">
          <CustomButton
            text="Export"
            variant="darkTheme"
            handleSubmit={() => {}}
            Icon={VscDesktopDownload}
          />
        </div>
      </div>

      {/* create exam  */}
      <Modals open={isCreateExamModal} setOpen={setIsCreateExamModal}>
        <CreateExam setOpen={setIsCreateExamModal}  />
      </Modals>
    </div>
  );
}
