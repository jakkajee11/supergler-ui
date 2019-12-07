import * as React from "react";
import { Avatar, Box, Stack, Text, Badge } from "@chakra-ui/core";

const UserAvatar: React.FC = () => (
  <Stack isInline spacing={5}>
    <Avatar size="md" name="Ryan Florence" src="https://bit.ly/ryan-florence" />
    <Box>
      <Text>Name</Text>
      <Text>Posted at: 10 Jul 209</Text>
    </Box>
    <Box>
      <Badge>FB</Badge>
    </Box>
  </Stack>
);

export default UserAvatar;
