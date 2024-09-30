import {
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/react";

type DropdownItemProps = {
  name: string;
  route: string;
  icon: React.ReactNode;
};

type NavItemProps = {
  name: string;
  route: string;
  icon: React.ReactNode;
  dropdowns?: DropdownItemProps[];
};

export default function NavItem({
  name,
  route = "#",
  icon,
  dropdowns = [],
}: NavItemProps) {
  return (
    <NavbarMenuItem isActive>
      {dropdowns.length == 0 ? (
        <Link href={route} aria-current="page">
          <span className="mr-2">{icon}</span>
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
              <DropdownItem key={dropdown.name} startContent={dropdown.icon}>
                {dropdown.name}
              </DropdownItem>
            ))}
          </DropdownMenu>
        </Dropdown>
      )}
    </NavbarMenuItem>
  );
}
