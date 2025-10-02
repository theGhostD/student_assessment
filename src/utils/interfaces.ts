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