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
import { IconType } from "react-icons/lib/cjs";

const UserAvatar = asyncComponent(() => import("../users/UserAvatar"));

export interface PostProps {
  image?: string;
  type?: string;
  title: string;
  message: string;
}

type ObjectPostType = {
  icon: IconType;
  color: string;
};

const getObjectPostType = (type: string): ObjectPostType => {
  switch (type) {
    case "article":
      return {
        icon: IoIosBook,
        color: "green"
      };
    case "help":
      return {
        icon: IoIosAlert,
        color: "red"
      };
    default:
      return {
        icon: IoIosCalendar,
        color: "orange"
      };
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
            as={getObjectPostType(type).icon}
            size="32px"
            color={`${getObjectPostType(type).color}.400`}
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
