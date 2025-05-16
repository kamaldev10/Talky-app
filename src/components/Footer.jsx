import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="py-3 text-sm text-center text-violet-700 font-semibold bg-[#88b9d1]">
          &copy; {new Date().getFullYear()} Disability App. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
