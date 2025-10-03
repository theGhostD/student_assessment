"use client";

import { Empty, Input, Spin } from "antd";
import CustomButton from "./components/customBtn";
import { LuFilePlus2 } from "react-icons/lu";
import { FaCaretDown } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { IoMdCalendar } from "react-icons/io";
import CustomDropDown from "./components/custom_dropdown";
import { useEffect, useState } from "react";
import {
  category,
  dateFilter,
  examListMock,
  subjectFilter,
} from "@/utils/mocks";
import { PiNotebook } from "react-icons/pi";
import ExamCard from "./components/card";
import { VscDesktopDownload } from "react-icons/vsc";
import Modals from "./components/modals";
import CreateExam from "./components/modals/createExam";
import { examProps } from "@/utils/interfaces";
import {  exportToJSON } from "@/helpers";
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
  // exam list value
  const [examList, setExamList] = useState<examProps[]>([]);
  const [isExamLoading, setIsExamLoading] = useState(true);
  const [refetch, setRefetch] = useState(0);
  const [searchParam, setSerachParams] = useState("");
  const [filteredData, setFilteredData] = useState<examProps[]>([]);

  // fetch from localStorage
  const fetchFromLocalStorage = () => {
    setIsExamLoading(true);
    const data: any[] = JSON.parse(localStorage.getItem("exams") as string);
    if (!data) {
      setExamList(examListMock);
      localStorage.setItem("exams", JSON.stringify(examListMock));
      setIsExamLoading(false);
      return;
    }
    if (data.length >= 1) {
      setExamList(data);
      setIsExamLoading(false);
    }

    setTimeout(() => {
      setIsExamLoading(false);
    }, 500);
  };

  // search functionality
  const OnchangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    const searchText = e.target.value;
    setSerachParams(searchText);

    const theFilterData = examList.filter((value, _) =>
      Object.values(value)
        .join("")
        .toLowerCase()
        .includes(searchText.toLowerCase())
    );
    setFilteredData(theFilterData);
  };

  const RealdataSource = searchParam ? filteredData : examList;

  useEffect(() => {
    fetchFromLocalStorage();
  }, [refetch]);

  return (
    <div className="min-h-screen ">
      <div className="flex md:justify-between md:items-center gap-3 mt-12 md:flex-row flex-col ">
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
      <div className="xl:flex  grid md:grid-cols-2 gap-4 mt-6">
        <Input
          className="!px-6 !py-4 2xl:!min-w-[400px] h-[56px] !border-none !rounded-full !bg-[#F3EBE4]   !outline-none !shadow-none   "
          placeholder="Search course..."
          prefix={<CiSearch className="!text-[20px] text-[#21201E] " />}
          suffix={<FaCaretDown className="!text-[20px]" />}
          onChange={(e) => OnchangeHandler(e)}
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
      <Spin spinning={isExamLoading} tip={"fetching exams..."}>
        <div className="grid xl:grid-cols-3 md:grid-cols-2 2xl:gap-6 gap-4 my-8 ">
          {RealdataSource.length === 0 ? (
            <div className="h-[300px] flex justify-center items-center w-full col-span-3 ">
              <Empty />
            </div>
          ) : (
            RealdataSource.map((exam, index) => (
              <ExamCard
                key={index}
                currentExam={exam}
                setRefetch={setRefetch}
              />
            ))
          )}
        </div>
      </Spin>

      {/* CTAs  */}
      <div className="flex justify-end items-center gap-4 ">
        <div className="w-[230px]">
          <CustomButton
            text="Create New Exam"
            variant="yellowTheme"
            handleSubmit={() => setIsCreateExamModal(true)}
            Icon={LuFilePlus2}
          />
        </div>

        <div className="w-[230px]">
          <CustomButton
            text="Export"
            variant="darkTheme"
            handleSubmit={() => exportToJSON(examList, "cards.json")}
            Icon={VscDesktopDownload}
          />
        </div>
      </div>

      {/* create exam  */}
      <Modals open={isCreateExamModal} setOpen={setIsCreateExamModal}>
        <CreateExam setOpen={setIsCreateExamModal} setRefetch={setRefetch} />
      </Modals>
    </div>
  );
}
