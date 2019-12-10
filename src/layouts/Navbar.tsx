import * as React from "react";
import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Icon,
  Input,
  InputGroup,
  InputRightElement
} from "@chakra-ui/core";
import history from "../routes/history";

const MENU_ITEMS = [
  {
    text: "หน้าหลัก",
    uri: "/"
  },
  {
    text: "โปรไฟล์",
    uri: "/profile"
  },
  {
    text: "ตลาดซื้อขาย",
    uri: "/market"
  },
  {
    text: "สถานที่",
    uri: "/place"
  },
  {
    text: "ล็อกอิน",
    uri: "/login"
  }
];

const Navbar: React.FC = () => (
  <Box bg="tomato" w="100%" minH="150px" p={4}>
    <Flex justify="space-between" direction="row">
      <ButtonGroup spacing={4}>
        {MENU_ITEMS.map(m => (
          <Button
            //variantColor="purple"
            variant="link"
            color="white"
            onClick={() => history.replace(m.uri)}
          >
            {m.text}
          </Button>
        ))}
      </ButtonGroup>
      <InputGroup>
        <Input placeholder="ค้นหา..." />
        <InputRightElement
          children={<Icon name="search" color="green.500" />}
        />
      </InputGroup>
    </Flex>
  </Box>
);

export default Navbar;
