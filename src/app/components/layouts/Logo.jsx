import Image from "next/image";
import Link from "next/link";
import React from "react";

const Logo = () => {
  return (
    <Link href={"/"}>
      <div className="flex items-center justify-center gap-1">
        <Image
          src={"/assets/mart.png"}
          alt="logo next-mart"
          width={24}
          height={24}
        />
        <h2 className="text-xl font-bold">NextMart</h2>
      </div>
    </Link>
  );
};

export default Logo;
