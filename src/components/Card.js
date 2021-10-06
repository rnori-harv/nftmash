import { Box, Image, Flex, Avatar, Text, Spacer, IconButton } from '@chakra-ui/react'
import { ChatIcon, ArrowUpIcon, ArrowDownIcon} from '@chakra-ui/icons'
import { Redirect } from "react-router-dom";
import { DataStore, sectionFooterSecondaryContent } from 'aws-amplify';
import {Candidate, Caption} from '../models'
import React, { useState } from 'react';
import CommentBox from './CommentBox';

export function Card ({children }) {
   return (
    <Box maxW ='lg' borderWidth = '1px' borderRadius = 'md' overflow = 'hidden' m = {3}>
        {children}
    </Box>
   )  
}

Card.Header = function  ({ Artist }){
    return (
        <Box p={2}>
            <Text as = 'b' fontSize="12px" color="#9430f1" textAlign="center">Artist: {Artist.username}</Text>
        </Box>
    )
}
Card.Main = function ({ candidate }) {

    let cardContent = <Image src = {candidate.source} />

    if (candidate.likes > 99){
        return (
            <Box>
                <a href="https://opensea.io/assets/0x495f947276749ce646f68ac8c248420045cb7b5e/91274881410907398461206421596567980177047993962108176042799425564064146784257/">
                    {cardContent}
                </a>
            </Box>
        )
    }
    else
    {
        return (
            <Box>
                {cardContent}
            </Box>
        )
    }
}

function doLike(post){
    DataStore.save(
        Candidate.copyOf(post, updated => {
          updated.likes = updated.likes + 1;}))

}

function doDislike(post){
    DataStore.save(
        Candidate.copyOf(post, updated => {
          updated.likes = updated.likes - 1;}))

}


const MakeFooter = (post) => {
    let initialLikes = post.likes;
    const [likes, setLikes] = useState(initialLikes);
    const [comment, setComment] = useState('start')
    const onClick2 = (post) => {
        if (likes === initialLikes || likes === initialLikes + 1) {
          setLikes(likes - 1);
          doDislike(post);
        }
    };
    const onClick = (post) => {
        if (likes === initialLikes || likes === initialLikes - 1) {
          setLikes(likes + 1);
          doLike(post);
        }
    };


    return(
    <Box ml={3}>
        <Box>
            {likes}
            <IconButton colorScheme="green" icon={<ArrowUpIcon />} variant='ghost' 
            onClick={() => onClick(post)} />
            <IconButton colorScheme="red" icon={<ArrowDownIcon />} variant='ghost' 
            onClick={() => {
                onClick2(post);
            }}/>
            <IconButton icon={<ChatIcon />} variant='ghost' 
            onClick={() => {
                if (comment === 'comment'){
                    setComment('')
                }
                else
                    setComment('comment')
            }}/>
            {comment === 'comment' && <CommentBox myPost={post.id} />}
        </Box>
    </Box>
    )
}

Card.Footer = function ({ post }) {
    return(MakeFooter(post));
}
