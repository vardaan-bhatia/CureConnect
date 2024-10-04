import Link from "next/link";
import React from "react";
import Image from "next/image";

const Admin = () => {
  return (
    <div className="flex flex-col max-w-7xl mx-auto space-y-14">
      <header className="admin-header">
        <Link href="/" className="cursor-pointer">
          <Image
            src="/assets/icons/svgviewer-output (5).png"
            height={1000}
            width={1000}
            alt="Icon"
            className=" h-8 w-fit"
          />
        </Link>
        <p className="text-16-semibold">Admin Dashboard</p>
      </header>
    </div>
  );
};

export default Admin;
