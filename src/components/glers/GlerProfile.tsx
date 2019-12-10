import * as React from "react";
import {
  Box,
  Image,
  List,
  ListItem,
  ListIcon,
  Stack,
  Text
} from "@chakra-ui/core";

const GlerProfile: React.FC = () => {
  return (
    <>
      <Stack padding={10}>
        <Stack isInline>
          <Box>
            <Image
              rounded={"full"}
              size="150px"
              objectFit="cover"
              src="https://bit.ly/dan-abramov"
              alt="Dan Abramov"
            />
          </Box>
          <Box>
            <Stack padding={1}>
              <Text>ชื่อ</Text>
              <Text>พันธุ์</Text>
              <Text>วันเกิด</Text>
              <Text>อายุ</Text>
              <Text>เพศ</Text>
            </Stack>
          </Box>
        </Stack>
        <hr />
        <Box>
          <List>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Lorem ipsum dolor sit amet, consectetur adipisicing elit
            </ListItem>
            <ListItem>
              <ListIcon icon="check-circle" color="green.500" />
              Assumenda, quia temporibus eveniet a libero incidunt suscipit
            </ListItem>
          </List>
        </Box>
      </Stack>
    </>
  );
};

export default GlerProfile;
