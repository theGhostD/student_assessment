import { RadioComponentprop } from "@/utils/interfaces";
import { Radio } from "antd";

const RadioComponent = ({
  value,
  selectedValue,
  setSelectedvalue,
}: RadioComponentprop) => {
  return (
    <div
      className=" flex justify-between items-center cursor-pointer gap-2 "
      onClick={() => setSelectedvalue(value)}
    >
      <p className="text-[14px] text-[#090A0B] font-[500] leading-[24px]  ">
        {value}
      </p>

      <Radio checked={value === selectedValue} />
    </div>
  );
};
export default RadioComponent;
