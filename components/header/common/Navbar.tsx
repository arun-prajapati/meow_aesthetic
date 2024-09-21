"use client";
import NavMenu from "@/components/common/NavMenu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = ({ className, sheetClose }: { className?: string; sheetClose?: any }) => {

  const pathname = usePathname();
  const SheetClose = sheetClose || "span";

  return (
    <nav
      className={cn(
        "flex gap-3 lg:gap-14 2xl:gap-28 justify-center py-3 text-lg flex-col lg:flex-row items-start lg:items-center w-full font-bold md:font-normal",
        className
      )}
    >
      <Link href="/" className="relative">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite hover:text-currentlink",
              pathname === "/" && "text-currentlink"
            )}
          >
            Home
          </span>
        </SheetClose>
      </Link>

      <Link href="/about-us" className="relative">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite hover:text-currentlink",
              pathname?.includes("/about-us") && "text-currentlink"
            )}
          >
            About Us
          </span>
        </SheetClose>
      </Link>

      {/* navmenu dropdown option */}
      <NavMenu />

      {/* <Link className="relative" href="/signature-tratments">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite",
              pathname?.includes("/signature-tratments") && "text-currentlink"
            )}
          >
            <NavMenu />
          </span>
        </SheetClose>
      </Link>

      <Link className="relative" href="/key-procedures">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite",
              pathname?.includes("/key-procedures") && "text-currentlink"
            )}
          >
            Key Procedures
          </span>
        </SheetClose>
      </Link> */}

      <Link className="relative" href="/blog">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite hover:text-currentlink",
              pathname?.includes("/blog") && "text-currentlink"
            )}
          >
            Blog
          </span>
        </SheetClose>
      </Link>

      <Link className="relative" href="/contact-us">
        <SheetClose>
          <span
            className={cn(
              "text-secondarylite hover:text-currentlink",
              pathname?.includes("/contact-us") && "text-currentlink"
            )}
          >
            Contact Us
          </span>
        </SheetClose>
      </Link>

    </nav>
  );
};

export default Navbar;
