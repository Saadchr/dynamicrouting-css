"use client";
import React from "react";
import * as NavigationMenu from "@radix-ui/react-navigation-menu";
import classNames from "classnames";
import Link from "next/link";
import { Container, Text, Card, Link as RadixLink } from "@radix-ui/themes";

const NavigationMenuDemo = () => {
  return (
    <NavigationMenu.Root className="  p-1 z-[1] flex w-screen items-center justify-center">
      <NavigationMenu.List className="center m-0 flex gap-8 list-none  p-0 ">
        <NavigationMenu.Item>
          <NavigationMenu.Trigger>
            <Card
              className="group focus"
              asChild
              variant="ghost"
              tabIndex={"-1"}
            >
              <Link className="" href={"/"}>
                <Text
                  p={"0"}
                  className=" line-height-[0]"
                  weight="regular"
                  size={"2"}
                  color="gray"
                >
                  Paillassons
                </Text>
              </Link>
            </Card>
          </NavigationMenu.Trigger>

          <NavigationMenu.Content className=" absolute top-0 left-0 w-screen ">
            <Container className="" p={"1"} size={"2"}>
              <ul className="grid list-none gap-x-[10px] sm:w-[500px]  p-4  sm:grid-cols-[0.75fr_1fr]">
                <Link
                  p={"0"}
                  className=""
                  href="https://stitches.dev/"
                  title="Stitches"
                >
                  CSS-in-JS with best-in-class developer experience.
                </Link>
                <Link href="/colors" title="Colors">
                  Beautiful, thought-out palettes with auto dark mode.
                </Link>
                <Link href="https://icons.radix-ui.com/" title="Icons">
                  A crisp set of 15x15 icons, balanced and consistent.
                </Link>
              </ul>
            </Container>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">
            <Card
              className="group focus"
              asChild
              variant="ghost"
              tabIndex={"-1"}
            >
              <Link className=" " href={"/"}>
                <Text
                  p={"0"}
                  className=" line-height-[0]"
                  color="gray"
                  weight="regular"
                  size={"2"}
                >
                  Tapis Fluffy
                </Text>
              </Link>
            </Card>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">
            <Card
              className="group focus"
              asChild
              variant="ghost"
              tabIndex={"-1"}
            >
              <Link href={"/"}>
                <Text
                  p={"0"}
                  color="gray"
                  className=" line-height-[0]"
                  weight="regular"
                  size={"2"}
                >
                  Promotions
                </Text>
              </Link>
            </Card>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem
                title="Introduction"
                href="/primitives/docs/overview/introduction"
              >
                Build high-quality, accessible design systems and web apps.
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Item>
          <NavigationMenu.Trigger className="">
            <Card
              className="group focus"
              asChild
              variant="ghost"
              tabIndex={"-1"}
            >
              <Link href={"./products"}>
                <Text
                  p={"0"}
                  color="gray"
                  className=" line-height-[0]"
                  weight="regular"
                  size={"2"}
                >
                  All Products
                </Text>
              </Link>
            </Card>
          </NavigationMenu.Trigger>
          <NavigationMenu.Content className="absolute top-0 left-0 w-full sm:w-auto">
            <ul className="m-0 grid list-none gap-x-[10px] p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3">
              <ListItem title="Introduction" href="/products/1">
                Check our product number numbe one
              </ListItem>
              <ListItem
                title="Getting started"
                href="/primitives/docs/overview/getting-started"
              >
                A quick tutorial to get you up and running with Radix
                Primitives.
              </ListItem>
              <ListItem title="Styling" href="/primitives/docs/guides/styling">
                Unstyled and compatible with any styling solution.
              </ListItem>
              <ListItem
                title="Animation"
                href="/primitives/docs/guides/animation"
              >
                Use CSS keyframes or any animation library of your choice.
              </ListItem>
              <ListItem
                title="Accessibility"
                href="/primitives/docs/overview/accessibility"
              >
                Tested in a range of browsers and assistive technologies.
              </ListItem>
              <ListItem
                title="Releases"
                href="/primitives/docs/overview/releases"
              >
                Radix Primitives releases and their changelogs.
              </ListItem>
            </ul>
          </NavigationMenu.Content>
        </NavigationMenu.Item>

        <NavigationMenu.Indicator className=" data-[state=hidden]:animate-fadeOut top-full z-[1] flex h-[10px] items-end justify-center overflow-hidden transition-[width,transform_250ms_ease]">
          <div className="relative top-[70%] h-[10px] w-[10px] rotate-[45deg] rounded-tl-[2px] bg-white" />
        </NavigationMenu.Indicator>
      </NavigationMenu.List>

      <div className="perspective-[2000px] absolute top-full left-0 flex w-full justify-center">
        <NavigationMenu.Viewport className="data-[state=open]:animate-scaleIn data-[state=closed]:animate-scaleOut relative mt-[10px] top-1 h-[var(--radix-navigation-menu-viewport-height)] w-full  overflow-hidden rounded-[6px] bg-gray-1 transition-[width,_height] duration-300 sm:w-[var(--radix-navigation-menu-viewport-width)]" />
      </div>
    </NavigationMenu.Root>
  );
};

const ListItem = React.forwardRef(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link>
        <a
          className={classNames(
            "focus:shadow-[0_0_0_2px] focus:shadow-violet7 hover:bg-mauve-3 block select-none rounded-[6px] p-3 text-[15px] leading-none no-underline outline-none transition-colors",
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="text-violet12 mb-[5px] font-medium leading-[1.2]">
            {title}
          </div>
          <p className="text-mauve11 leading-[1.4]">{children}</p>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

ListItem.displayName = "ListItem";

export default NavigationMenuDemo;
