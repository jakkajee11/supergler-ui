import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/core";
import history from "../routes/history";

const MENU_ITEMS = [
  {
    text: "Home",
    uri: "/"
  },
  {
    text: "Profile",
    uri: "/profile"
  },
  {
    text: "Market",
    uri: "/market"
  },
  {
    text: "Place",
    uri: "/place"
  }
];

const Navbar: React.FC = () => (
  <Box bg="tomato" w="100%" minH="150px" p={4}>
    <Flex justify="space-between" direction="row">
      <ButtonGroup spacing={4}>
        {MENU_ITEMS.map(m => (
          <Button
            //variantColor="teal"
            variant="link"
            onClick={() => history.replace(m.uri)}
          >
            {m.text}
          </Button>
        ))}
      </ButtonGroup>
      <InputGroup>
        <Input placeholder="Search..." />
        <InputRightElement
          children={<Icon name="search" color="green.500" />}
        />
      </InputGroup>
    </Flex>
  </Box>
);

export default Navbar;
