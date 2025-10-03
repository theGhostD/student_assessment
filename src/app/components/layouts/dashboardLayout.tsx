import Navbar from "../navbar";
import Sidebar from "../sidebar";

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <section className="max-w-[1440px] mx-auto ">
        <div className="hidden lg:block">
          <Sidebar />
        </div>

        <div className=" xl:pl-[290px] lg:pl-[274px] lg:pr-6 xl:pr-10 lg:pt-[29px] md:p-6 p-4 bg-[#FCF6F0]">
          <Navbar />
          {children}
        </div>
      </section>
    </>
  );
}
