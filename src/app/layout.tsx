import type { Metadata } from "next";
import "./globals.css";
import { ConfigProvider } from "antd";
import { antdTheme } from "@/theme";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import DashboardLayout from "./components/layouts/dashboardLayout";

export const metadata: Metadata = {
  title: "Student Assessment Management System",
  description: "Beyond Boundaries,Within Reach!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` antialiased`}>
        <ConfigProvider theme={antdTheme}>
          <AntdRegistry>
            <DashboardLayout>{children}</DashboardLayout>
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
