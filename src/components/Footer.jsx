import React from "react";

const Footer = () => {
  return (
    <>
      <div>
        <div className="min-w-screen py-3 text-sm text-center text-white font-semibold bg-gray-700">
          &copy; {new Date().getFullYear()} Talky. All rights reserved.
        </div>
      </div>
    </>
  );
};

export default Footer;
