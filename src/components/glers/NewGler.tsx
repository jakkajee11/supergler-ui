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
import EditableText from "../common/EditableText";

const NewGler: React.FC = () => {
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
              <Stack isInline>
                <Text>ชื่อ: </Text>
                <EditableText defaultValue="Latte" />
              </Stack>
              <Stack isInline>
                <Text>พันธุ์: </Text>
                <EditableText defaultValue="Golden Retriever" />
              </Stack>
              <Stack isInline>
                <Text>วันเกิด: </Text>
                <EditableText defaultValue="16 June 2012" />
              </Stack>
              <Text></Text>
              <Stack isInline>
                <Text>อายุ</Text>
                <EditableText defaultValue="8 years" />
              </Stack>
              <Stack isInline>
                <Text>เพศ</Text>
                <EditableText defaultValue="men" />
              </Stack>
            </Stack>
          </Box>
        </Stack>
        <hr />
        {/* <Box>
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
        </Box> */}
      </Stack>
    </>
  );
};

export default NewGler;
