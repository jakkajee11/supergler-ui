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
  Stack,
  Icon
} from "@chakra-ui/core";

import {
  IoIosBook,
  IoIosAlert,
  IoIosCalendar,
  IoIosChatbubbles,
  IoIosEye,
  IoIosShareAlt
} from "../Icons";
import asyncComponent from "../asyncComponent";

const UserAvatar = asyncComponent(() => import("../users/UserAvatar"));

export interface PostProps {
  image?: string;
  type?: string;
  title: string;
  message: string;
}

const getPostType = (type: string) => {
  switch (type) {
    case "article":
      return IoIosBook;
    case "help":
      return IoIosAlert;
    default:
      return IoIosCalendar;
  }
};

const getPostTypeColor = (type: string) => {
  switch (type) {
    case "article":
      return "green";
    case "help":
      return "red";
    default:
      return "orange";
  }
};

const Post: React.FC<PostProps> = ({
  image,
  type = "article",
  title,
  message
}) => (
  <>
    <Box w="100%">
      <Box rounded="lg">
        {image && <Image rounded="5px" src={image} alt={"property.imageAlt"} />}
        <Stack isInline spacing={3}>
          <Box
            as={getPostType(type)}
            size="32px"
            color={`${getPostTypeColor(type)}.400`}
            verticalAlign="baseline"
          />
          <Heading as="h2" size="xl">
            {type}:{title}
          </Heading>
        </Stack>
        <Box p="6">
          <Box d="flex" alignItems="baseline">
            <UserAvatar />
          </Box>

          <Box p="10">
            <Text minH={50}>{message}</Text>
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
