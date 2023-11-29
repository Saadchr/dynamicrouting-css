import React from "react";
import { Box, Flex, Text } from "@radix-ui/themes";

function Footer() {
  return (
    <>
      <Box mt={"auto"} as="footer">
        <Flex justify={"center"} align={"center"}>
          <Text size={"4"}>Made with ❤️ by Saad</Text>
        </Flex>
      </Box>
    </>
  );
}

export default Footer;
