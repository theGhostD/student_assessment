import {
  PiCashRegister,
  PiCashRegisterFill,
  PiFileTextDuotone,
  PiUsers,
  PiUsersFill,
  PiWarningCircle,
  PiWarningCircleFill,
} from "react-icons/pi";
import { GoHome, GoHomeFill } from "react-icons/go";
import { AiFillFileText } from "react-icons/ai";
import { IoSettingsOutline, IoSettingsSharp } from "react-icons/io5";

export const routes = [
  {
    id: 1,
    name: "Overview",
    activeIcon: GoHomeFill,
    inActiveIcon: GoHome,

    path: "/",
    children: null,
  },
  {
    id: 2,
    name: "Students",
    activeIcon: PiUsersFill,
    inActiveIcon: PiUsers,
    path: "/overview",

    children: [
      {
        name: "Class",
        path: "/rebate",
      },
       {
        name: "Assignment",
        path: "/rebate",
      },
    ],
  },
];
