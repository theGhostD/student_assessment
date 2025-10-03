import { IconType } from "react-icons";

export interface sidebarTilesprops {
  name: string;
  ImageUrl: IconType;
  path: string;
  children: any[] | null;
  isActive: boolean;
  RouteId: number;
  currentPath: string;
}

export interface CustomSelectProps {
  data: any[];
  Prefix : IconType
}

export interface CustomDropDownprops {
  setIsdropdownOpen: React.Dispatch<React.SetStateAction<boolean>>;
  isdropdownOpen: boolean;
  filterList: string[];
  setSelectedFilter: React.Dispatch<React.SetStateAction<string>>;
  Prefix?: IconType;
  SelectedFilter: string;
}

export interface  RadioComponentprop {
    value : string;
    setSelectedvalue : React.Dispatch<React.SetStateAction<string>>;
    selectedValue : string

}

export interface examProps {
  id: string;
  title: string;
  year: string;
  dateCreated: string;
  dateDue: string;
  weight: string;
  maxPoints: number;
  passingThreshold: number;
  status: string;
  course: string;
  description: string;
  visible: boolean;
}
export interface examCardProps {
  currentExam: examProps;
  setRefetch : React.Dispatch<React.SetStateAction<number>>;
}