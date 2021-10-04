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
export function Comment({comment}){
    let initialLikes = comment.likes;
    const [likes, setLikes] = useState(initialLikes);
    const onClick2 = (comment) => {
        if (likes === initialLikes || likes === initialLikes + 1) {
          setLikes(likes - 1);
          doDislike(comment);
        }
    };
    const onClick = (comment) => {
        if (likes === initialLikes || likes === initialLikes - 1) {
          setLikes(likes + 1);
          doLike(comment);
        }
    };
    return(
        <Box>
                {likes}
                <IconButton colorScheme="green" icon={<ArrowUpIcon />} 
            onClick={() => onClick(comment)} variant='ghost' />
                <IconButton colorScheme="red" icon={<ArrowDownIcon />} 
            onClick={() => onClick2(comment)} variant='ghost' />
                <Text as='b' color="#9430f1">{comment.User.username}</Text> {comment.body}
        </Box>
    );
}