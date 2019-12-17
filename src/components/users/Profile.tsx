import * as React from "react";
import { Box, Image, Stack, Flex, Text, Input } from "@chakra-ui/core";
import { range } from "../../utils/range";
import history from "../../routes/history";
import asyncComponent from "../asyncComponent";

import AvatarEditor from "../images/AvatarEditor";

const Profile: React.FC = () => {
  return (
    <Stack padding={10} spacing={10}>
      <Stack isInline>
        <Box>
          <AvatarEditor />
        </Box>

        <Box>
          <Stack padding={3}>
            <Text>Name</Text>
            <Text>Join date</Text>
            <Text>10 Posts</Text>
            <Text>20 Likes</Text>
          </Stack>
        </Box>
      </Stack>
      <hr />
      <Flex padding={5} direction="row" justify="space-between">
        {range(3).map(n => (
          <Box key={n}>
            <Image
              rounded="full"
              size="100px"
              src="https://bit.ly/sage-adebayo"
              alt="Segun Adebayo"
              onClick={() => history.push(`glers/${n}/profile`)}
            />
          </Box>
        ))}
      </Flex>
    </Stack>
  );
};

export default Profile;
