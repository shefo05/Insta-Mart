import { usePathname } from "next/navigation";

export const NavbarUtils = () => {
  const pathname = usePathname();

  const isActive = (path: string) => {
    return pathname === path;
  };

  const getLinkClasses = (path: string) => {
    const baseClasses = " block py-2 px-3 rounded-sm md:me-0 md:text-gray-500 md:hover:bg-gray-100 md:rounded-md md:border-0 md:hover:text-gray-900 md:hover:text-bold md:p-3 ";
    const activeClasses = "text-white bg-green-700 md:bg-transparent md:text-green-700 md:hover:text-green-700";
    const inactiveClasses = "text-gray-700 hover:text-black-800 hover:bg-gray-100 ";
    
    return `${baseClasses} ${isActive(path) ? activeClasses : inactiveClasses}`;
  };

  return { isActive, getLinkClasses };
};
