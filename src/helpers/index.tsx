import { examProps } from "@/utils/interfaces";
import dayjs from "dayjs";

export const stringToDate = (dateString: string) => {
  if (!dateString || typeof dateString !== "string") {
    return null;
  }
  const parsedDate = dayjs(dateString, "MMMM D, YYYY");
  return parsedDate.isValid() ? parsedDate : null;
};

export const dateToString = (date: Date) => {
  if (!date) {
    return "";
  }
  const dayjsDate = dayjs.isDayjs(date) ? date : dayjs(date);
  return dayjsDate.isValid() ? dayjsDate.format("MMMM D, YYYY") : "";
};

export function exportToJSON(cardList: any[], filename = "cards.json") {
  const jsonString = JSON.stringify(cardList, null, 2);
  const blob = new Blob([jsonString], { type: "application/json" });
  const url = window.URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  window.URL.revokeObjectURL(url);
}
