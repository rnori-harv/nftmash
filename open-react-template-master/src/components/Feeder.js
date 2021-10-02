import React from 'react'
import ReactDOM from 'react-dom'
import {Box, Stack, Center, Image, Heading, Text, ChakraProvider} from '@chakra-ui/react'
import {Feed} from './Feed'
import {Card} from './Card'
import { Logo } from './Logo'
import {CommentList} from './CommentList'
  


function Feeder(props){
    return(
        <ChakraProvider>
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
    </Stack>
  </Box>

        </ChakraProvider>
    );
}


export default Feeder;