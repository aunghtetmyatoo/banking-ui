import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenu,
  NavbarMenuItem,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { ThemeSwitcher } from "../components/ThemeSwitcher";
import NavItem from "./NavItem";
import { LiaMapMarkedAltSolid, LiaMapMarkerAltSolid } from "react-icons/lia";
import { FaRegUser, FaRegUserCircle } from "react-icons/fa";
import { AiOutlineTransaction } from "react-icons/ai";
import { GrTransaction } from "react-icons/gr";
import { PiHandDeposit, PiHandWithdraw } from "react-icons/pi";

export default function Header() {
  const menuItems = [
    "Profile",
    "Dashboard",
    "Activity",
    "Analytics",
    "System",
    "Deployments",
    "My Settings",
    "Team Settings",
    "Help & Feedback",
    "Log Out",
  ];

  const items = [
    {
      name: "General",
      route: "#",
      icon: <AiOutlineTransaction />,
      dropdowns: [
        {
          name: "States",
          route: "#",
          icon: <LiaMapMarkedAltSolid />,
        },
        {
          name: "Townships",
          route: "#",
          icon: <LiaMapMarkerAltSolid />,
        },
      ],
    },
    {
      name: "User & Accounts",
      route: "#",
      icon: "bla",
      dropdowns: [
        {
          name: "User List",
          route: "#",
          icon: <FaRegUser />,
        },
        {
          name: "Account List",
          route: "#",
          icon: <FaRegUserCircle />,
        },
      ],
    },
    {
      name: "Report",
      route: "#",
      icon: "bla",
      dropdowns: [
        {
          name: "Transaction History",
          route: "#",
          icon: <AiOutlineTransaction />,
        },
      ],
    },
    {
      name: "Transaction",
      route: "#",
      icon: "bla",
      dropdowns: [
        {
          name: "Transfer",
          route: "#",
          icon: <GrTransaction />,
        },
        {
          name: "Deposit",
          route: "#",
          icon: <PiHandDeposit />,
        },
        {
          name: "Withdraw",
          route: "#",
          icon: <PiHandWithdraw />,
        },
      ],
    },
  ];

  return (
    <Navbar
      disableAnimation
      isBordered
      className="bg-white dark:bg-black text-black dark:text-white"
    >
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarContent className="sm:hidden pr-3" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        <NavbarBrand>
          <p className="font-bold text-inherit">ACME</p>
        </NavbarBrand>

        {items.map((item) => (
          <NavItem key={item.name} {...item} />
        ))}

        <ThemeSwitcher />
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem>
          <Button
            as={Link}
            color="warning"
            href="#"
            variant="flat"
            className="text-black dark:text-white"
          >
            Sign Up
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu>
        {menuItems.map((item, index) => (
          <NavbarMenuItem key={`${item}-${index}`}>
            <Link
              className="w-full"
              color={
                index === 2
                  ? "warning"
                  : index === menuItems.length - 1
                    ? "danger"
                    : "foreground"
              }
              href="#"
              size="lg"
            >
              {item}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
