"use client";

import { images } from "@/theme";
import { Drawer, Input } from "antd";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import ProfileDropdown from "../profileSidebar";
import { CiMenuFries } from "react-icons/ci";
import SideBar from "../sidebar";

const Navbar = () => {
  const [isprofileDropDownOpen, setIsprofileDropDownOpen] = useState(false);
  const [isSideBarDrawerOpen, setIsSideBarDrawerOpen] = useState(false);

  const profileRef = useRef<HTMLDivElement>(null);

  const handleDropdownClickOutsideProfile = (event: MouseEvent) => {
    if (
      profileRef.current &&
      !profileRef.current.contains(event.target as any)
    ) {
      setIsprofileDropDownOpen(false);
    }
  };

  useEffect(() => {
    const listener = document.addEventListener(
      "mousedown",
      handleDropdownClickOutsideProfile
    );
    return () =>
      document.removeEventListener(
        "mousedown",
        handleDropdownClickOutsideProfile
      );
  }, [isprofileDropDownOpen]);

  return (
    <div className="   ">
      <div className="flex justify-center  md:justify-end items-center gap-3">
        <Input
          prefix={
            <Image
              src={images.searchIcon2}
              alt="search"
              width={20}
              height={20}
              className="cursor-pointer"
            />
          }
          placeholder="Search..."
          className="md:!w-[340px] !bg-transparent h-[40px] !outline-none !shadow-none !py-0  "
        />

        <Image
          src={images.avatar}
          alt="avatar"
          width={40}
          height={40}
          className="rounded-full object-cover cursor-pointer"
          onClick={() => setIsprofileDropDownOpen(true)}
        />
        <div className="min-w-[24px] min-h-[24px]  lg:!hidden !block ">
          <CiMenuFries
            className="!text-[24px]  "
            onClick={() => setIsSideBarDrawerOpen(true)}
          />
        </div>
      </div>
      {/* profile dropdown  */}
      {isprofileDropDownOpen && (
        <div
          className={` absolute mt-[6px] 2xl:right-[300px] right-[20px] min-w-[240px] border  
             rounded-[12px] shadow-[#10182808] shadow-lg drop-shadow border-[#EAECF0] bg-[white] flex flex-col gap-2 ease-in-out transition-all !z-[2000] `}
          ref={profileRef}
          style={{
            boxShadow: "0px 12px 16px -4px rgba(16, 24, 40, 0.08)",
          }}
        >
          <ProfileDropdown
            setIsprofileDropDownOpen={setIsprofileDropDownOpen}
          />
        </div>
      )}

      {/* mobile side bar  */}
      <Drawer
        size="large"
        onClose={() => setIsSideBarDrawerOpen(false)}
        open={isSideBarDrawerOpen}
        closeIcon={null}
        placement="left"
        width={250}
      >
        <SideBar />
      </Drawer>
    </div>
  );
};

export default Navbar;
