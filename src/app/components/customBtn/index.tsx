import { images } from "@/theme";
import Image from "next/image";
import React from "react";
import { IconType } from "react-icons";
interface buttonProps {
  disable?: boolean;
  text: string;
  isloading?: boolean;
  handleSubmit: () => void;
  Icon?: IconType | undefined;
  variant: "yellowTheme" | "darkTheme";
  isSmall?: boolean;
}
const CustomButton = ({
  disable,
  text,
  isloading,
  handleSubmit,
  Icon,
  variant,
  isSmall,
}: buttonProps) => {
  return (
    <button
      disabled={disable || isloading}
      type="submit"
      className={`
        w-full flex justify-center items-center gap-2 rounded-full relative overflow-hidden group hover:text-[#090A0B] transition-colors duration-300 cursor-pointer
        ${
          isSmall
            ? "h-[40px] md:text-[14px] text-[12px] font-[400]"
            : " h-[56px] md:text-[16px] text-[14px] font-[500]"
        }
         ${
           variant === "yellowTheme" && Boolean(!disable && !isloading)
             ? "bg-[#F9E1C0] cursor-pointer text-[#212C58] h-[56px] "
             : variant === "darkTheme" && Boolean(!disable && !isloading)
             ? "bg-[#212C58] text-white cursor-pointer   "
             : "bg-[#2F855A]/[0.4] cursor-not-allowed "
         }`}
      onClick={() => handleSubmit()}
    >
      <span className="absolute inset-0 bg-white transform scale-y-0 group-hover:scale-y-100 transition-transform origin-bottom duration-300"></span>
      {isloading ? (
        <div className="loader"></div>
      ) : (
        <>
          {Icon && <span className="relative z-10">
<Icon className="!text-[20px]" />
          </span> }

          <span className="relative z-10"> {text}</span>
        </>
      )}
    </button>
  );
};

export default CustomButton;
