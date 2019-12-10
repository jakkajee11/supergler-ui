import * as React from "react";
import { Box, Image, Stack, Flex, Text } from "@chakra-ui/core";
import { range } from "../../utils/range";
import history from "../../routes/history";

const Profile: React.FC = () => {
  return (
    <Stack padding={10} spacing={10}>
      <Stack isInline>
        <Box>
          <Image
            size="150px"
            objectFit="cover"
            src="https://bit.ly/dan-abramov"
            alt="Dan Abramov"
          />
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
          <Box>
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
