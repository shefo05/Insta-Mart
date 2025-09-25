"use client";
import Link from "next/link";
import { NavbarUtils } from "./navbar.utils";
import { useSession, signOut } from "next-auth/react";
// import { useAppSelector } from "../../../lib/hooks";

type NavTogglerProps = {
  status: string;
}

export default function NavToggler({ status }: NavTogglerProps) {
  const { isActive, getLinkClasses } = NavbarUtils();
  const { data: session, status: authStatus } = useSession();
  // const totalItems = useAppSelector((state) => state.cart.totalItems);
  return (
    <div className={`${status} md:block` } >
        <ul className="font-medium flex  md:justify-between p-4 md:p-0  border border-gray-100 rounded-lg bg-gray-50  md:m-0 md:border-0 md:bg-transparent">
          {session?.user ? (
            <>
              <li>
                <span className="block py-2 md:py-3 px-3 text-gray-700">
                  Hello, {session.user.name || session.user.email}
                </span>
              </li>
              <li>
                <span onClick={() => signOut({ callbackUrl: "/" })} className="cursor-pointer block py-2 md:py-3 px-3 text-gray-500 hover:bg-gray-100 rounded-md hover:text-gray-900">
                  logout
                </span>
              </li>
              <li>
                <Link href="/cart" className={`${getLinkClasses("/cart")} relative`} aria-current={isActive("/cart") ? "page" : undefined}>
                  <i className="fa-solid fa-cart-shopping text-xl"></i>
                  {/* {totalItems > 0 && (
                    <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
                      {totalItems}
                    </span>
                  )} */}
                </Link>
              </li>
            </>
          ) : (
            <>
              <li>
                <Link href="/login" className={getLinkClasses("/login")}>
                  Login
                </Link>
              </li>
              <li>
                <Link href="/register" className={getLinkClasses("/register")}>
                  Register
                </Link>
              </li>
            </>
          )}
          </ul>
    </div>
  )
}
