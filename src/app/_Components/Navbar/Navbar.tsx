"use client";

import logo from "@images/Insta Mart logo.png"
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { NavbarUtils } from "./navbar.utils";
import NavToggler from "./NavToggler";
import { useSession } from "next-auth/react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isActive, getLinkClasses } = NavbarUtils();
  const { data: session, status } = useSession();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className=" bg-gray-100 border-gray-200 p-2">


      <div className="max-w-screen-xl flex flex-wrap md:flex-nowrap items-center justify-between mx-auto ">
        {/* <Link href="/" className="flex items-center space-x-3 rtl:space-x-reverse"> */}
        <Link href="/" className="flex justify-start w-1/5">
          <Image src={logo} className="w-2/3" alt="Insta Mart Logo" />
        </Link>
        
        <button 
          onClick={toggleMenu}
          type="button" 
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
          aria-controls="navbar-default" 
          aria-expanded={isMenuOpen}
        >
          <span className="sr-only">Open main menu</span>
          <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15"/>
          </svg>
        </button>
        
        <div className={`${isMenuOpen ? 'block' : 'hidden'} w-full md:block md:w-auto `} id="navbar-default">
          <ul className="font-medium flex flex-col p-4 md:p-0 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-0   md:border-0 md:bg-transparent  ">
            <li>
              <Link href="/" className={getLinkClasses("/")} aria-current={isActive("/") ? "page" : undefined}>
                Home
              </Link>
            </li>
            <li>
              <Link href="/products" className={getLinkClasses("/products")}>
                Products
              </Link>
            </li>
            <li>
              <Link href="/wishlist" className={getLinkClasses("/wishlist")}>
                Wishlist
              </Link>
            </li>
            <li>
              <Link href="/category" className={getLinkClasses("/category")}>
                Categories
              </Link>
            </li>
            <li>
              <Link href="/brand" className={getLinkClasses("/brand")}>
                Brands
              </Link>
            </li>
            
            {/* {session?.user?.name && (
              <li>
                <span className="block py-2 px-3 md:p-3 text-gray-700">
                  Hello, {session.user.name}
                </span>
              </li>
            )} */}

            <div className={`${isMenuOpen? "block" : "hidden"}`}>
              <NavToggler status={`${isMenuOpen? "flex justify-center " : "hidden"}  `} />
            </div>

            {/* <li>
              <span  className=" cursor-pointer block py-2 px-3 rounded-sm md:text-gray-500 md:hover:bg-gray-100 md:rounded-md md:border-0 md:hover:text-gray-900 md:hover:text-bold md:p-3 ">
                logout
              </span>
            </li>

            <li>
              <Link href="/cart" className={getLinkClasses("/cart")} aria-current={isActive("/cart") ? "page" : undefined}>
                <i className="fa-solid fa-cart-shopping text-xl"></i>
              </Link>
            </li>
             */}
          </ul>

        </div>

        <NavToggler status="hidden" />
        
      </div>
    </nav>
  )
}






// import { Navbar, NavbarBrand, NavbarCollapse, NavbarLink, NavbarToggle } from "flowbite-react";
// import Link from "next/link";
// import logo from "@images/InstaMart logo.png"
// import Image from "next/image";

// export default function Navbar_() {
//   return (
//     <Navbar fluid rounded>
//       <NavbarBrand as={Link} href="https://flowbite-react.com">
//       <Image src={logo} classNameName="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" />
//         {/* <img src="/favicon.svg" classNameName="mr-3 h-6 sm:h-9" alt="Flowbite React Logo" /> */}
//         <span classNameName="self-center whitespace-nowrap text-xl font-semibold dark:text-black">Flowbite React</span>
//       </NavbarBrand>
//       <NavbarToggle />
//       <NavbarCollapse>
//         <NavbarLink href="#" active>
//           Home
//         </NavbarLink>
//         <NavbarLink as={Link} href="#">
//           About
//         </NavbarLink>
//         <NavbarLink href="#">Services</NavbarLink>
//         <NavbarLink href="#">Pricing</NavbarLink>
//         <NavbarLink href="#">Contact</NavbarLink>
//       </NavbarCollapse>
//     </Navbar>
//   );
// }
