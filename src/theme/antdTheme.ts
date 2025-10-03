'use client'
import type { ThemeConfig } from "antd";

export const antdTheme: ThemeConfig = {
  token: {
    colorPrimary : '#212C58',
    
    controlHeightLG: 56,
    controlHeight: 56,
  },
  components: {
    Modal: {
       contentBg : '#FCF6F0'
      },
       DatePicker: {
        cellHeight : 20,
      },
  },
};
