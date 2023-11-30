import { Section, Container, Flex, IconButton } from "@radix-ui/themes";
import Link from "next/link";
import React from "react";
import CarpetIcon from "../CarpetIcon";
import DarkLightIcon from "@/components/DarkLightIcon";
import NavigationMenuDemo from "@/components/NavigationMenu";
import { BackpackIcon, MagnifyingGlassIcon } from "@radix-ui/react-icons";

function Header() {
  return (
    <Section className="m-0 p-0 h-14 max-h-14 relative bg-gray-1 shadow-md  ">
      <Container asChild size={"3"} className="  h-full w-screen  ">
        <Flex className="h-full  p-3  " justify="between" align={"start"}>
          <Link className="p-0  " href={"/"}>
            <CarpetIcon />
          </Link>
          <NavigationMenuDemo className="   z-4" />

          <Flex className="" p={"3"} gap={"5"}>
            <Link href={"./searchpage"}>
              <IconButton
                p={"0"}
                color="gray"
                variant="ghost"
                className="hover:cursor-auto h-[15px] w-[15px]"
              >
                <MagnifyingGlassIcon />
              </IconButton>
            </Link>
            <Link href={"./shoppingbag"}>
              <IconButton
                color="gray"
                variant="ghost"
                className="hover:cursor-auto h-[15px] w-[15px]"
              >
                <BackpackIcon />
              </IconButton>
            </Link>
            <DarkLightIcon />
          </Flex>
        </Flex>
      </Container>
    </Section>
  );
}

export default Header;
