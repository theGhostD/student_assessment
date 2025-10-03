"use client";
import { images } from "@/theme";
import { routes } from "@/utils/routes";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";
import SidebarTiles from "./SidebarTiles";
import { BiDotsVertical } from "react-icons/bi";

const SideBar = () => {
  const path = usePathname();

  return (
    <div className=" h-screen w-[250px] max-w-[250px] min-h-full fixed top-0 bg-[#212C58] ">
      <div className="pt-[32px] pb-6 flex justify-center items-center border-b border-[#7A869A] ">
        <Image
          src={images.logo}
          alt="Logo"
          width={112}
          height={71}
          loader={() => images.logo}
        />
      </div>

      <div
        className={`  h-[77%]  hover:overflow-auto   flex justify-between flex-col `}
      >
        {/* side bar Items  */}
        <div className="mx-[21px] mt-[30px] mb-10 pb-10   flex flex-col gap-4 ">
          {routes.map((routesDetails, index) => {
            const isActive =
              routesDetails.path === path ||
              path.includes(routesDetails.path) ||
              (routesDetails.children &&
                Boolean(
                  routesDetails.children.find((x) => path.includes(x.path))
                ));

            return (
              <SidebarTiles
                name={routesDetails?.name}
                path={routesDetails?.path}
                RouteId={routesDetails?.id}
                ImageUrl={
                  isActive
                    ? routesDetails?.activeIcon
                    : routesDetails?.inActiveIcon
                }
                key={index}
                children={routesDetails?.children}
                isActive={isActive as boolean}
                currentPath={path}
              />
            );
          })}
        </div>

        <div className="mx-[24px] flex gap-3 items-center  ">
          <div className="w-[32px] h-[32px]   ">
            <Image src={images.avatar} alt="avatar" width={32} height={32} />
          </div>
          <div className="flex justify-start items-center gap-8 ">
            <div>
              <p className="text-white font-bold  text-[12px] uppercase  ">
                John Doe
              </p>
              <p className="text-[#BEC1C6] font-[400]  text-[10px] mt-[2px]  ">
                Johndoe@gmail.com
              </p>
            </div>

            <BiDotsVertical className="!text-[#BEC1C6]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
