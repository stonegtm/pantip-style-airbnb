"use client";
import { useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { MdAccountCircle } from "react-icons/md";
import { Menu, MenuButton, MenuItem, MenuItems } from "@headlessui/react";

const DropdownButton = () => {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <MenuButton
          className="flex space-x-2 items-center hover:shadow-md transition-shadow duration-200"
          style={{
            padding: 5,
            border: "1px solid rgba(0, 0, 0, 0.08)",
            borderRadius: "20px",
          }}
        >
          <MdOutlineMenu style={{ fontSize: 24, color: "#6A6A6A" }} />
          <MdAccountCircle style={{ fontSize: 32, color: "#6A6A6A" }} />
        </MenuButton>
      </div>

      <MenuItems
        transition
        className="shadow-md absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 transition focus:outline-none data-[closed]:scale-95 data-[closed]:transform data-[closed]:opacity-0 data-[enter]:duration-100 data-[leave]:duration-75 data-[enter]:ease-out data-[leave]:ease-in"
        style={{ borderRadius: 10 }}
      >
        <div className="py-1">
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              เข้าสู่ระบบ
            </a>
          </MenuItem>
          <MenuItem>
            <a
              href="#"
              className="block px-4 py-2 text-sm text-gray-700 data-[focus]:bg-gray-100 data-[focus]:text-gray-900"
            >
              สมัครสมาชิก
            </a>
          </MenuItem>
        </div>
      </MenuItems>
    </Menu>
  );
};

export { DropdownButton };
