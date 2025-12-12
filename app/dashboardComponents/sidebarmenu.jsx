"use client";
import Link from "next/link";
import React from "react";

export default function SidebarMenuItem({
  isCollapsed,
  text,
  to,
  active,
  icon: Icon,
}) {
  return (
    <Link href={to} className="w-full mb-2">
      <div
        title={isCollapsed ? text : ""}
        className={`
          flex items-center h-[50px] rounded-xl cursor-pointer
          transition-all duration-300 overflow-hidden select-none

          ${isCollapsed ? "justify-center px-0" : "justify-start px-4"}

          ${
            active
              ? "bg-linear-to-r from-blue-900 to-blue-700 text-white shadow-md shadow-blue-900/40"
              : "text-gray-700 hover:bg-blue-900/10 hover:text-blue-900"
          }
        `}
      >
        {/* ICON */}
        <Icon
          className={`
            text-xl transition-all duration-300
            ${isCollapsed ? "mx-auto" : "mr-3"}

            ${
              active
                ? "text-white drop-shadow-[0_0_6px_rgba(59,130,246,0.7)]"
                : "text-gray-600 group-hover:text-blue-900"
            }
          `}
        />

        {/* TEXT */}
        {!isCollapsed && (
          <span
            className={`
              whitespace-nowrap text-sm font-medium tracking-wide
              transition-all duration-300
              ${active ? "text-white" : "text-gray-700 group-hover:text-blue-900"}
            `}
          >
            {text}
          </span>
        )}
      </div>
    </Link>
  );
}
