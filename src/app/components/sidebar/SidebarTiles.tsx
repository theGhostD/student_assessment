import { sidebarTilesprops } from "@/utils/interfaces";
import Link from "next/link";
import { useState } from "react";
import { RxCaretDown } from "react-icons/rx";

const SidebarTiles = ({
  name,
  ImageUrl,
  path,
  children,
  isActive,
  RouteId,
  currentPath,
}: sidebarTilesprops) => {
  const [isChildrenDropDownOpen, setIsChildrenDropdownOpen] = useState(false);

  return (
    <div>
      {children?.length && (
        <div className=" cursor-pointer ">
          <div
            className={`${
              isActive ? "bg-white" : "bg-transparent"
            } flex justify-between items-center   py-3 pl-[16px] pr-3 rounded-lg`}
            onClick={() => {
              if (children) {
                setIsChildrenDropdownOpen(!isChildrenDropDownOpen);

                return;
              }
            }}
          >
            <div className="flex justify-start items-center gap-3">
              <ImageUrl
                className={`${
                  isActive ? "!fill-[#212C58] !text-[#212C58]" : "!text-white"
                } !text-[20px]  `}
              />
              <p
                className={` ${
                  isActive
                    ? "font-[600] text-[#0B1475]"
                    : "font-[400] text-white"
                }  text-[14px] font-[400] leading-[20px] !text-nowrap  `}
              >
                {name}
              </p>
            </div>
            {children &&
              (isActive ? (
                <RxCaretDown className="!text-white" />
              ) : (
                <RxCaretDown className="!text-white" />
              ))}
          </div>
        </div>
      )}

      {!children?.length && (
        <Link href={path} className="  ">
          <div
            className={`${
              isActive ? "bg-white" : "bg-transparent"
            } flex justify-between items-center   py-3 pl-[16px] pr-3 rounded-lg`}
            onClick={() => {
              if (children) {
                setIsChildrenDropdownOpen(!isChildrenDropDownOpen);

                return;
              }
            }}
          >
            <div className="flex justify-start items-center gap-3">
              <ImageUrl
                className={`${
                  isActive
                    ? "!fill-[#212C58] !text-[#212C58]"
                    : "!text-[white] "
                } !text-[20px] `}
              />
              <p
                className={` ${
                  isActive
                    ? "font-[600] text-[#0B1475]"
                    : "font-[400] text-white"
                }  text-[14px] font-[400] leading-[20px] !text-nowrap `}
              >
                {name}
              </p>
            </div>
            {children &&
              (isActive ? (
                <RxCaretDown className="!text-white" />
              ) : (
                <RxCaretDown className="!text-white" />
              ))}
          </div>
        </Link>
      )}

      {isChildrenDropDownOpen && children?.length ? (
        <div className="border-l border-white flex flex-col gap-1 mt-2   ml-4 pl-4">
          {children.map((childrenDetails, index) => {
            return (
              <p
                key={index}
                className={` text-[14px]  rounded  leading-[20px] p-2 ${
                  childrenDetails.path === currentPath ||
                  currentPath.includes(childrenDetails.path)
                    ? "bg-[#000FB0] text-white font-[600] "
                    : "bg-transparent text-[#7A869A] hover:text-white font-[400] cursor-not-allowed"
                }`}
              >
                {childrenDetails.name}
              </p>
            );
          })}
        </div>
      ) : null}
    </div>
  );
};

export default SidebarTiles;
