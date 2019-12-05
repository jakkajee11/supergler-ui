import * as React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

const Main: React.FC = () => {
  return (
    <>
      <Flex align="center" direction="row" justify="flex-end">
        <Box>Header</Box>
        <Box w="100%" minH="400px">
          Content
        </Box>
        <Box>Footer</Box>
      </Flex>
    </>
  );
};

export default Main;
