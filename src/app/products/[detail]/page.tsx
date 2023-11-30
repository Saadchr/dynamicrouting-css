type Params = {
  params: {
    detail: number;
  };
};

import { Heading, Section, Flex } from "@radix-ui/themes";

export default function page({ params }: Params) {
  return (
    <Heading align={"center"} size={"4"} as="h1">
      Hey there, this is the home page for the product number {params.detail}!
    </Heading>
  );
}
