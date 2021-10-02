import React from 'react'
import ReactDOM from 'react-dom'
import { useEffect, useState} from 'react'
import {DataStore} from '@aws-amplify/datastore'
import {Caption} from '../models'
import { Box, Image, Flex, Avatar, Text, Spacer, IconButton } from '@chakra-ui/react'
import { ChatIcon, ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'
import { render } from 'react-dom'


function doLike(comment){
    DataStore.save(
        Caption.copyOf(comment, updated => {
          updated.likes = updated.likes + 1;}))

}

function doDislike(comment){
    DataStore.save(
        Caption.copyOf(comment, updated => {
          updated.likes = updated.likes - 1;}))

}


export function CommentList({ postId }) {
    const [clicked, setClicked] = useState(false);
    const onClick = (comment) => {
        if (!clicked) {
          setClicked(true);
          doLike(comment);
        }
      };

      const onClick2 = (comment) => {
        if (!clicked) {
          setClicked(true);
          doDislike(comment);
        }
      };
    const [comments, setComments] = useState([])
    useEffect(() => {
        const getComments = async() => {
            const postComments = await DataStore.query(Caption, p => p.candidateID === postId)
            const actualPostComments = []
            for (var i = 0; i < postComments.length; i++) {
                 if (postComments[i].candidateID === postId){
                     actualPostComments.push(postComments[i])
                 }
            }
            actualPostComments.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
            setComments(actualPostComments)
        }
        getComments()
    }, [])
    const [likes, setLikes] = useState([])
    return (
        <Box ml={3}>
            {comments.map(comment => (
            <Box>
                {setLikes}
                {comment.likes}
                <IconButton colorScheme="green" icon={<ArrowUpIcon />} 
            onClick={() => onClick(comment)} variant='ghost' />
                <IconButton colorScheme="red" icon={<ArrowDownIcon />} 
            onClick={() => onClick2(comment)} variant='ghost' />
                <Text as='b' color="#9430f1">{comment.User.username}</Text> {comment.body}
            </Box>
            ))}
        </Box>
    )
}