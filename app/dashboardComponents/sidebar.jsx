"use client";
import React, { useState } from "react";
import { HiMenu } from "react-icons/hi";
import { FiLogOut } from "react-icons/fi";
import Image from "next/image";
import toast from "react-hot-toast";
import { useRouter } from "next/navigation";
import SidebarMenuItem from "./sidebarmenu";

import { MdContacts } from "react-icons/md";
import { ImWindows8 } from "react-icons/im";
import { VscBook } from "react-icons/vsc";

import axios from "axios";

export default function Sidebar({ isCollapsed, toggleSidebar, pathname }) {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      await axios.post("/api/admin/logout", {}, { withCredentials: true });
      toast.success("Logged out successfully");
      router.push("/admin/login");
    } catch (error) {
      toast.error("Failed to logout");
    }
  };

  return (
    <div
      className={`
        fixed min-h-[95vh] h-[calc(100vh-24px)]
        ${isCollapsed ? "w-20" : "w-[260px]"}
        bg-white/40 backdrop-blur-2xl
        border border-white/30 shadow-[0_8px_30px_rgba(0,0,0,0.15)]
        flex flex-col justify-between
        transition-all duration-300 rounded-2xl
        my-3 mx-3 overflow-hidden
      `}
    >
      {/* ====== TOP SECTION ====== */}
      <section>
        {/* LOGO & MENU TOGGLE */}
        <div
          className={`
            flex items-center pt-8 px-4
            ${isCollapsed ? "justify-center" : "justify-between"}
          `}
        >
          {!isCollapsed && (
            <div className="w-72 pr-2">
              <Image
                src="/images/logo.png"
                alt="logo"
                width={400}
                height={400}
                className="w-auto h-24 object-contain drop-shadow-md"
              />
            </div>

          )}

          {/* MENU TOGGLE */}
          <div
            onClick={toggleSidebar}
            className={`
              cursor-pointer p-2 rounded-xl transition-all duration-300
              hover:bg-white/20 hover:scale-105 active:scale-95
              ${isCollapsed ? "mx-auto" : ""}
            `}
          >
            <HiMenu
              className={`
                text-3xl text-gray-700 transition-all duration-300
                ${isCollapsed ? "rotate-180" : ""}
              `}
            />
          </div>
        </div>

        {/* ====== MENU ITEMS ====== */}
        <div className="flex flex-col mx-3 mt-10 space-y-2">
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Dashboard"
            to="/admin/dashboard"
            icon={ImWindows8}
            active={pathname === "/admin/dashboard"}
          />
          <SidebarMenuItem
            isCollapsed={isCollapsed}
            text="Contact Us"
            to="/admin/contact-us"
            icon={MdContacts}
            active={pathname === "/admin/contact-us"}
          />
        </div>
      </section>

      {/* ====== LOGOUT BUTTON ====== */}
      <div
        onClick={handleLogout}
        className={`
          w-full flex items-center mb-6 cursor-pointer group
          ${isCollapsed ? "justify-center" : "justify-start pl-10"}
          text-gray-700 hover:text-red-600 transition-all
        `}
      >
        <FiLogOut className="text-xl mr-2 group-hover:scale-110 transition" />
        {!isCollapsed && (
          <span className="text-sm font-medium tracking-wide">
            Logout
          </span>
        )}
      </div>
    </div>
  );
}
