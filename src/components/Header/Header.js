import { Section, Container, Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import CarpetIcon from "../CarpetIcon";
import DarkLightIcon from "@/components/DarkLightIcon";
import NavigationMenuDemo from "@/components/NavigationMenu";
import { BackpackIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <Section
      asChild
      size={"4"}
      className="w-screen m-auto relative bg-gray-2 shadow-md "
    >
      <Container
        asChild
        size={"4"}
        className="  h-full w-screen  border-8 border-blue-5 m-auto "
      >
        <Flex
          className="h-full  p-3 border border-red-5  "
          justify="between"
          align={"center"}
        >
          <Link className="p-0  " href={"/"}>
            <CarpetIcon />
          </Link>
          <NavigationMenuDemo className=" border border-red-5  z-4" />

          <Flex className="border border-red-5" p={"3"} gap={"5"}>
            <IconButton
              p={"0"}
              color="gray"
              variant="ghost"
              className="hover:cursor-auto h-[15px] w-[15px]"
            >
              <MagnifyingGlassIcon />
            </IconButton>
            <IconButton
              color="gray"
              variant="ghost"
              className="hover:cursor-auto h-[15px] w-[15px]"
            >
              <BackpackIcon />
            </IconButton>
            <DarkLightIcon />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default Header;
