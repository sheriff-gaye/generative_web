"use client";
import { UserButton } from "@clerk/nextjs";
import MonbileSidebar from "./mobile-sidebar";

const Navbar = () => {
  return (
   
    <div className="flex items-center p-4">
      <MonbileSidebar />
      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
   
  );
};

export default Navbar;
