import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";
import { MdOutlineDarkMode } from "react-icons/md";

type DropdownItemProps = {
  name: string;
  route: string;
  icon: string;
};

type NavItemProps = {
  name: string;
  route: string;
  icon: string;
  dropdowns?: DropdownItemProps[];
};

export default function NavItem({
  name,
  route = "#",
  dropdowns = [],
}: NavItemProps) {
  const iconClasses =
    "text-xl text-default-500 pointer-events-none flex-shrink-0";

  return (
    <NavbarMenuItem isActive>
      {dropdowns.length == 0 ? (
        <Link href={route} aria-current="page">
          {name}
        </Link>
      ) : (
        <Dropdown>
          <DropdownTrigger>
            <NavbarItem>
              <div className="cursor-pointer">{name}</div>
            </NavbarItem>
          </DropdownTrigger>
          <DropdownMenu variant="faded" aria-label="Dropdown menu with icons">
            {dropdowns?.map((dropdown) => (
              <DropdownItem
                key={dropdown.name}
                startContent={<MdOutlineDarkMode className={iconClasses} />}
              >
                {dropdown.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </NavbarMenuItem>
  );
}
