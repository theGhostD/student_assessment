import { CustomDropDownprops } from "@/utils/interfaces";
import React, { useEffect, useRef } from "react";
import { FaCaretDown } from "react-icons/fa";

const CustomDropDown = ({
  setIsdropdownOpen,
  isdropdownOpen,
  filterList,
  setSelectedFilter,
  SelectedFilter,
  Prefix,
}: CustomDropDownprops) => {
  const ref = useRef<HTMLDivElement>(null);

  //   toggles dropdowm if user clicks outside
  const handleDropdownClickOutsideMktOrder = (event: MouseEvent) => {
    if (ref.current && !ref.current.contains(event.target as any)) {
      setIsdropdownOpen(false);
    }
  };

  useEffect(() => {
    const listener = document.addEventListener(
      "mousedown",
      handleDropdownClickOutsideMktOrder
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleDropdownClickOutsideMktOrder
      );
  }, [isdropdownOpen]);

  return (
    <div className={`relative  min-w-[150px] w-full `}>
      <div
        className={`flex justify-between items-center gap-[12px]   px-6  min-w-[119px] !border-none !rounded-full !bg-[#F3EBE4]  h-[56px]  py-[13px] text-[14px] text-[#202224] font-[500] cursor-pointer  !text-nowrap  `}
        onClick={() => setIsdropdownOpen(true)}
      >
        {Prefix ? <Prefix className="!text-[20px]" /> : <div />}

        <p className="text-[#202224] text-[14px] font-[500]  ">
          {!SelectedFilter ? filterList[0] : SelectedFilter}
        </p>
        <FaCaretDown className="!text-[20px]" />
      </div>
      {isdropdownOpen && (
        <div
          className="border border-[#EEF2F6] rounded-[8px] p-5 xl:w-[350px] absolute  !bg-[#F3EBE4]  mt-1 !z-50 h-[200px max-h-[200px] overflow-y-auto "
          ref={ref}
        >
          <div className="grid  gap-4">
            {filterList.length === 0 ? (
              <p className="text-center">No Filters</p>
            ) : (
              filterList.map((x, index) => (
                <p
                  className={` ${
                    SelectedFilter === x ? 'bg-[#212C58] text-white' :  ''
                  }  text-[12px] hover:bg-[#212C58] hover:text-white lg:text-[13px] cursor-pointer text-wrap font-[500] w-full py-[8px] rounded border-b border-[#7a869a1e] text-center `}
                  key={index}
                  onClick={() => {
                    setSelectedFilter(x);
                    setIsdropdownOpen(false);
                  }}
                >
                  {x}
                </p>
              ))
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default CustomDropDown;
