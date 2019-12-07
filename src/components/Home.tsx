import * as React from "react";
import {
  Box,
  Button,
  Flex,
  Modal,
  Text,
  Stack,
  ModalBody,
  ModalFooter,
  ModalContent,
  useDisclosure,
  ModalOverlay,
  ModalHeader,
  ModalCloseButton
} from "@chakra-ui/core";
import Post, { PostProps } from "./posts/Post";

import { range } from "../utils/range";
import withModal from "../components/hocs/withModal";
import PostForm from "../components/posts/PostForm";
//import asyncComponent from "./asyncComponent";

const makePosts = (max: number): PostProps[] => {
  return range(max).map(n => ({
    image: "https://picsum.photos/980/300",
    title: `Title ${n}`,
    message: `Bacon ipsum dolor amet capicola pork loin pastrami shoulder tri-tip. Leberkas landjaeger rump ham meatloaf porchetta ham hock pig drumstick meatball corned beef doner venison sausage. Chislic venison meatball jerky prosciutto leberkas alcatra sausage buffalo cupim hamburger frankfurter tongue. Kielbasa pancetta salami, pork belly ham hamburger filet mignon shoulder corned beef tail turducken. Prosciutto capicola sausage meatball kevin.

    Flank chuck shoulder turducken beef ground round landjaeger frankfurter shankle meatloaf spare ribs turkey chislic. Tail cupim pastrami, sausage ball tip pork belly meatloaf. Hamburger rump sirloin tail porchetta chuck leberkas. Sirloin alcatra boudin, kielbasa chicken burgdoggen chuck picanha. T-bone salami meatball ribeye flank pork belly doner beef landjaeger strip steak sausage. Hamburger drumstick ball tip, pastrami meatloaf sausage leberkas venison tongue frankfurter spare ribs short ribs.
    
    Leberkas alcatra beef sirloin beef ribs prosciutto flank. Short loin beef sausage, pork chop alcatra jerky swine salami cow pastrami. Turducken filet mignon fatback, bacon tenderloin andouille shank pancetta tail sirloin beef. Cow swine kielbasa tongue boudin short ribs, jerky short loin picanha beef ribs. ${n}`
  }));
};

//const PostForm = asyncComponent(() => import("../components/posts/PostForm"));

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [posts, setPosts] = React.useState(makePosts(5));

  const handleOnPostFormSubmit = (newPost: PostProps) => {
    setPosts([newPost, ...posts]);
    onClose();
  };

  const WrappedPostForm = () => <PostForm onSubmit={handleOnPostFormSubmit} />;
  const PostFormModal = withModal(WrappedPostForm, {
    blockScrollOnMount: false,
    isOpen: isOpen,
    size: "full",
    onClose: onClose,
    onOpen: onOpen
  });

  return (
    <Flex direction="column" align="center">
      <Box w="70%" p={5}>
        <Stack spacing={5} shouldWrapChildren={true}>
          <Button onClick={onOpen}>+ New</Button>

          <PostFormModal />

          {posts.map(post => (
            <Post
              title={post.title}
              message={post.message}
              image={post.image || "https://picsum.photos/980/300"}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;
