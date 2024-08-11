"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  {
    name: "home",
    path: "/",
  },
  {
    name: "services",
    path: "/services",
  },
  {
    name: "resume",
    path: "/resume",
  },
  {
    name: "work",
    path: "/work",
  },
  {
    name: "contact",
    path: "/contact",
  },
];
const Nav = () => {
    const pathname = usePathname();
    console.log(pathname);
  return <nav className="gap-8 flex">
    {links.map((link,index)=> {
        // memeriksa apakah link.path sama dengan nilai saat ini pathname.
        // Jika kondisi ( link.path === pathname) benar, maka string akan dikembalikan "text-accent border-b-2 border-accent". String ini akan digunakan sebagai nama kelas.
      return <Link href={link.path} key={index} className={`${link.path === pathname && "text-accent border-b-2 border-accent"}capitalize font-medium hover:text-accent transition-all`}>{link.name}</Link>;
    })}
  </nav>;
};

export default Nav;
