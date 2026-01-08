"use client";

import { usePathname } from "next/navigation";

import { Toaster } from "react-hot-toast";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ModalSelect from "./components/ModalSelect";


export default function ClientLayout({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith("/admin");

  return (
    <>
      <Toaster position="top-center" />
    
      {!isAdminRoute && <Navbar />}
      <ModalSelect />

      <div className={!isAdminRoute ? "mt-40" : ""}>
        {children}
      </div>

      {!isAdminRoute && <Footer />}
    </>
  );
}
