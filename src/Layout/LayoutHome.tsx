import { ReactNode } from "react";

interface Props { children ?: ReactNode}

function LayoutHome({children}:Props) {
  return (
    <div>
      <div className="Header h-8 bg-slate-400">Nav</div>
      <div className="flex">
        <div className="h-[100px] w-10 bg-slate-300">Aside</div>
       
      </div>
      {children}
    </div>
  );
}

export default LayoutHome;
