import React, { ReactElement } from "react";
interface IDefaultLayoutProps {
  headerContent: ReactElement;
  bodeyContent: ReactElement;
}
function DefaultLayout({ headerContent, bodeyContent }: IDefaultLayoutProps) {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-none h-20 bg-slate-900">{headerContent}</div>
      <div className="flex-1 overflow-y-auto  bg-slate-200">{bodeyContent}</div>
    </div>
  );
}

export default DefaultLayout;
