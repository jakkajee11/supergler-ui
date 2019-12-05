import * as React from "react";
import { Box, Flex, Text, Stack } from "@chakra-ui/core";
import Post from "./posts/Post";

import { range } from "../utils/range";

const makePosts = (max: number) => {
  return range(max).map(n => {});
};

const Home: React.FC = () => {
  const [posts, setPosts] = React.useState(range(5));

  return (
    <Flex direction="column" align="center">
      <Box w="70%" p={5}>
        <Stack spacing={5} shouldWrapChildren={true}>
          {posts.map(n => (
            <Post
              message={`Bacon ipsum dolor amet capicola pork loin pastrami shoulder tri-tip. Leberkas landjaeger rump ham meatloaf porchetta ham hock pig drumstick meatball corned beef doner venison sausage. Chislic venison meatball jerky prosciutto leberkas alcatra sausage buffalo cupim hamburger frankfurter tongue. Kielbasa pancetta salami, pork belly ham hamburger filet mignon shoulder corned beef tail turducken. Prosciutto capicola sausage meatball kevin.

Flank chuck shoulder turducken beef ground round landjaeger frankfurter shankle meatloaf spare ribs turkey chislic. Tail cupim pastrami, sausage ball tip pork belly meatloaf. Hamburger rump sirloin tail porchetta chuck leberkas. Sirloin alcatra boudin, kielbasa chicken burgdoggen chuck picanha. T-bone salami meatball ribeye flank pork belly doner beef landjaeger strip steak sausage. Hamburger drumstick ball tip, pastrami meatloaf sausage leberkas venison tongue frankfurter spare ribs short ribs.

Leberkas alcatra beef sirloin beef ribs prosciutto flank. Short loin beef sausage, pork chop alcatra jerky swine salami cow pastrami. Turducken filet mignon fatback, bacon tenderloin andouille shank pancetta tail sirloin beef. Cow swine kielbasa tongue boudin short ribs, jerky short loin picanha beef ribs. ${n}`}
              image={"https://picsum.photos/980/300"}
            />
          ))}
        </Stack>
      </Box>
    </Flex>
  );
};

export default Home;
