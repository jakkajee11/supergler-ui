import * as React from "react";
import {
  Avatar,
  Badge,
  Box,
  Heading,
  IconButton,
  Image,
  Text,
  Link,
  Stack
} from "@chakra-ui/core";
// import { IoIosChatbubbles, IoIosEye, IoIosShareAlt } from "react-icons/io";
import { IoIosChatbubbles, IoIosEye, IoIosShareAlt } from "../Icons";
import asyncComponent from "../asyncComponent";

const UserAvatar = asyncComponent(() => import("../users/UserAvatar"));

export interface PostProps {
  image?: string;
  title: string;
  message: string;
}

const Post: React.FC<PostProps> = ({ image, title, message }) => (
  <>
    <Box w="100%">
      <Box rounded="lg">
        {image && <Image rounded="5px" src={image} alt={"property.imageAlt"} />}
        <Heading as="h2" size="xl">
          {title}
        </Heading>

        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <UserAvatar />
          </Box>

          <Box p="10">
            <Text>{message}</Text>
            <Link color="teal.500">Continue reading...</Link>

            <Stack isInline spacing={5}>
              <Box as={IoIosChatbubbles} />
              <Box as={IoIosEye} />
              <Box as={IoIosShareAlt} />
            </Stack>
          </Box>
          <hr />
        </Box>
      </Box>
    </Box>
  </>
);

export default Post;
