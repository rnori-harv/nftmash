import React from 'react'
import ReactDOM from 'react-dom'
import {Box, Stack, Center, Image, Heading, Text, ChakraProvider} from '@chakra-ui/react'
import {Feed} from './Feed'
import {Card} from './Card'
import { Logo } from './Logo'
import {CommentList} from './CommentList'
import theme from "./theme"
  


function Feeder(props){
    return(
        <ChakraProvider theme={theme}>
            <Center>
                <Image src="https://harvardlampoon.com/wp-content/uploads/2020/09/lampoon-header.png" />
            </Center>

            <Text color = "white" fontSize="18px" color="white" textAlign="center">
  Help us be funny. Caption our art, upvote top captions, and we'll add them to our content or turn them into NFTs (whichever one makes us more money off of your hard work).
</Text>
            

            <Feed>
                {({ post }) => (
                <Card key = {post.id}>
                <Card.Header Artist={post.Artist} />
                <Card.Main candidate={post} />
                <Card.Footer post={post} />
                <CommentList postId={post.id} />
                </Card>
                )}
            </Feed>
            <Box as="footer" role="contentinfo" mx="auto" maxW="7xl" py="12" px={{ base: '4', md: '8' }}>
    <Stack>
      <Stack direction="row" spacing="4" align="center" justify="space-between">
        <Logo />
      </Stack>
      <Text color="red" textAlign="center">
         Powered by the Lampoon Tech board 
      </Text>
    </Stack>
  </Box>

        </ChakraProvider>
    );
}


export default Feeder;