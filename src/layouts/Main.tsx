import * as React from "react";
import { Box, Button, Flex } from "@chakra-ui/core";

import Navbar from "./Navbar";

const Main: React.FC = ({ children }) => {
  return (
    <>
      <Flex align="center" direction="column" justify="flex-end">
        <Navbar />

        <Box w="100%" minH="600px">
          {children}
        </Box>
        <Box bg="tomato" w="100%" p={4} minH="150px" color="white">
          {" "}
          Footer
        </Box>
      </Flex>
    </>
  );
};

export default Main;
