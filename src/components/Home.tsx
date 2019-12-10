import * as React from "react";
import {
  Box,
  Button,
  Flex,
  RadioGroup,
  Radio,
  Stack,
  useDisclosure
} from "@chakra-ui/core";
import Post, { PostProps } from "./posts/Post";
import { range } from "../utils/range";
import withModal from "../components/hocs/withModal";
import PostForm from "../components/posts/PostForm";

const POST_TYPES = ["article", "help", "event"];

const makePosts = (max: number): PostProps[] => {
  return range(max).map(n => ({
    image: "https://picsum.photos/980/300",
    type: POST_TYPES[Math.floor(Math.random() * 3)],
    title: `Title ${n}`,
    message: `Bacon ipsum dolor amet capicola pork loin pastrami shoulder tri-tip. Leberkas landjaeger rump ham meatloaf porchetta ham hock pig drumstick meatball corned beef doner venison sausage. Chislic venison meatball jerky prosciutto leberkas alcatra sausage buffalo cupim hamburger frankfurter tongue. Kielbasa pancetta salami, pork belly ham hamburger filet mignon shoulder corned beef tail turducken. Prosciutto capicola sausage meatball kevin.

    Flank chuck shoulder turducken beef ground round landjaeger frankfurter shankle meatloaf spare ribs turkey chislic. Tail cupim pastrami, sausage ball tip pork belly meatloaf. Hamburger rump sirloin tail porchetta chuck leberkas. Sirloin alcatra boudin, kielbasa chicken burgdoggen chuck picanha. T-bone salami meatball ribeye flank pork belly doner beef landjaeger strip steak sausage. Hamburger drumstick ball tip, pastrami meatloaf sausage leberkas venison tongue frankfurter spare ribs short ribs.
    
    Leberkas alcatra beef sirloin beef ribs prosciutto flank. Short loin beef sausage, pork chop alcatra jerky swine salami cow pastrami. Turducken filet mignon fatback, bacon tenderloin andouille shank pancetta tail sirloin beef. Cow swine kielbasa tongue boudin short ribs, jerky short loin picanha beef ribs. ${n}`
  }));
};

const Home: React.FC = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [posts, setPosts] = React.useState(makePosts(10));
  const [selectedPostType, setSelectedPostType] = React.useState("0");

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
          <Stack isInline align="right" justify="space-between" padding={2}>
            <Button onClick={onOpen}>+ สร้างโพสต์</Button>

            <RadioGroup
              defaultValue="0"
              value={selectedPostType}
              spacing={5}
              isInline
              onChange={e => setSelectedPostType(e.target.value)}
            >
              <Radio variantColor="gray" value="0">
                ทั้งหมด
              </Radio>
              <Radio variantColor="green" value="article">
                บทความ
              </Radio>
              <Radio variantColor="red" value="help">
                ช่วยเหลือ
              </Radio>
              <Radio variantColor="orange" value="event">
                กิจกรรม
              </Radio>
            </RadioGroup>
          </Stack>

          <PostFormModal />

          {posts
            .filter(
              post => post.type === selectedPostType || selectedPostType === "0"
            )
            .map(post => (
              <Post
                type={post.type}
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
