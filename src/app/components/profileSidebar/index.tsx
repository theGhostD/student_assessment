
import React from "react";
import { BiLogOut } from "react-icons/bi";
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { GoHomeFill } from "react-icons/go";

interface props {
  setIsprofileDropDownOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProfileDropdown = ({ setIsprofileDropDownOpen }: props) => {
  return (
    <div>
      <div className="">
        <div className="py-3 px-4 border-b border-[#EAECF0]">
          <p className="text-[#090A0B] text-[14px] font-[600] leadig-[21px] capitalize ">
            jon Doe
          </p>
          <p className="text-[#383D41] text-[14px] font-[400] leading-[21px] truncate overflow-hidden">
            jonDeo@gmail.com
          </p>
        </div>

        <div
          className=""
          onClick={() => {
            setIsprofileDropDownOpen(false);
          }}
        >
          <div className="py-1 px-[6px] border-b border-[#EAECF0] ">
            <p
             
              className="flex justify-start items-center gap-2 hover:bg-[#F9FAFB] cursor-pointer hover:rounded-[6px] px-[10px] py-[9px] my-[2px]"
            >
              <GoHomeFill className="!Text-[16px]" />
              <p className="text-[#383D41] text-[14px] font-[500] leading-[21px]  ">
                Home
              </p>
            </p>
          </div>

          <div className="py-1 px-[6px] border-b border-[#EAECF0] ">
            <p
              
              className="flex justify-start items-center gap-2 hover:bg-[#F9FAFB] cursor-pointer hover:rounded-[6px] px-[10px] py-[9px] my-[2px]"
            >
              <CgProfile className="!text-[16px]" />
              <p className="text-[#383D41] text-[14px] font-[500] leading-[21px]  ">
                Profile
              </p>
            </p>

            <p
              
              className="flex justify-start items-center gap-2 hover:bg-[#F9FAFB] cursor-pointer hover:rounded-[6px] px-[10px] py-[9px] my-[2px]"
            >
              <CiSettings className="!text-[16px]" />
              <p className="text-[#383D41] text-[14px] font-[500] leading-[21px]  ">
                Settings
              </p>
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center gap-2 hover:bg-[#F9FAFB]  hover:rounded-[6px] px-[16px] py-[9px] my-[2px] cursor-pointer">
          <BiLogOut className="!text-[#FF6154] !text-[16px] " />
          <p className="text-[#FF6154] text-[14px] font-[500] leading-[21px]  ">
            Log out
          </p>
        </div>
      </div>
    </div>
  );
};

export default ProfileDropdown;
