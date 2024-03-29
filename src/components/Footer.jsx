import Link from "next/link";
import React from "react";
import Layout from "./Layout";

const Footer = () => {
  return (
    <footer className="w-full border-t-2 border-solid border-dark font-medium text-lg dark:text-light dark:border-light md:p-3px">
      <Layout className="py-8 flex items-center justify-between">
        <span>{new Date().getFullYear()}&copy; All Rights Reserved.</span>
        <div className="flex items-center">
          <span>Build With </span>
          <span className="text-primary dark:text-primaryDark text-2xl px-1">
            &#9825;
          </span>
          <span>by </span>&nbsp;
          <Link href="/" className="font-cursive">
            Saiyam Babbar
          </Link>
        </div>
        <Link href="/">Say hello</Link>
      </Layout>
    </footer>
  );
};

export default Footer;
