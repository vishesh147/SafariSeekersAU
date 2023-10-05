"use client";

import React from "react";
import { usePathname } from 'next/navigation'
import { FaShopify } from 'react-icons/fa'
import {NavbarMenu, NavbarMenuItem, NavbarMenuToggle, Navbar, NavbarBrand, NavbarContent, NavbarItem, Link, Button} from "@nextui-org/react";
import Image from "next/image";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const pathname = usePathname()

  const menuItems = [
    {'name':"Home", 'link':"/"},
    {'name':"Products", 'link':"/products"},
    // {'name':"Gallery", 'link':"/gallery"},
    {'name':"Maintenance Guide", 'link':"/maintenance"},
    {'name':"About Us", 'link':"/about"},
    {'name':"Contact Us", 'link':"/contact"},
  ];

  return (
    <Navbar
      className="fixed top-0 bg-gray-900 dark:bg-gray-950 backdrop-blur-lg shadow-md dark mx-0"
      isBordered
      maxWidth='xl'
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="lg:hidden text-white" justify="start">
        <NavbarMenuToggle aria-label={isMenuOpen ? "Close menu" : "Open menu"} />
      </NavbarContent>

      <NavbarContent className="lg:hidden pr-3" justify="center">
        <NavbarBrand>
          <a href="/" className="hidden min-[300px]:block font-bold text-inherit">
            <Image className="" src="/images/logos/horizontal.png" width="180" height="120" alt="SAFARI SEEKERS"/>
          </a>
          <a href="/" className="min-[300px]:hidden font-bold text-inherit ">
            <Image className="" src="/images/logos/icon.png" width="50" height="20" alt="SAFARI SEEKERS"/>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-4 md:gap-8 items-center" justify="center">
        <NavbarBrand>
          <a href="/" className="font-bold text-inherit">
            <Image className="" src="/images/logos/horizontal.png" width="220" height="180" alt="SAFARI SEEKERS"/>
          </a>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="lg:flex" justify="end">
        <div className="hidden lg:flex gap-4 md:gap-8 mr-4 md:mr-6">
        {
          menuItems.map((item, index) => {
            if (item.link == pathname){
              return (
              <NavbarItem key={index} isActive>
                <Link className="w-full text-amber-400 font-semibold"
                  color="foreground" href={item.link}>
                  {item.name}
                </Link>
              </NavbarItem>
              )
            }
            else{
              return (
                <NavbarItem key={index} >
                  <Link color="foreground" href={item.link}>
                    {item.name}
                  </Link>
                </NavbarItem>
                )
            }
            })
        }
        </div>
        <NavbarItem>
          <Button size="sm" as={Link} href="#" radius="md" variant="flat" color="secondary"
            className="hidden sm:flex dark:brightness-125">
            Buy Now! <FaShopify className="mx-0"/>
          </Button>
          <Button size="sm" as={Link} href="#" radius="full" variant="flat" color="secondary"
            className="sm:hidden dark:brightness-125" isIconOnly>
            <FaShopify className="mx-0"/>
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarMenu className="bg-gray-900/90 backdrop-blur-lg dark">
        {menuItems.map((item, index) => {
            if (item.link == pathname){
              return (
                <NavbarItem key={index} isActive>
                  <Link               
                    className="w-full text-amber-400 font-semibold"
                    color="foreground"
                    href={item.link}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarItem>
                )
            }
            else{
              return (
                <NavbarMenuItem key={index} >
                  <Link               
                    className="w-full"
                    color="foreground"
                    href={item.link}
                    size="lg"
                  >
                    {item.name}
                  </Link>
                </NavbarMenuItem>
                )
            }
          })}
      </NavbarMenu>
    </Navbar>
  );
}
