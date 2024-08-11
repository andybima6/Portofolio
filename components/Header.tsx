import Link from "next/link";
import { Button } from "./ui/button";
import Nav from "./Nav";
import MobileNav from "./MobileNav";

const Header = () => {
  return (
    <header className="py-8 xl:py-12 text-white">
      <div className="container mx-auto flex justify-between items-center">
        {/* logo*/}
        <Link href="/">
          <h1 className="text-4xl font-semibold">
            Andy <span className="text-accent">.</span>
          </h1>
        </Link>
        {/* Dekstop Nav & hire me button*/}
        <div className="hidden xl:flex gap-8">
          <Nav />
          <Link href="/contact">
            <Button>hire me</Button>
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="xl:hidden">Mobile Nav</div>
        <MobileNav></MobileNav>
      </div>
    </header>
  );
};

export default Header;
