import React from 'react'
import ReactDOM from 'react-dom'
import { useState, useEffect } from 'react'
import { DataStore } from '@aws-amplify/datastore'
import {Container} from '@chakra-ui/react'

import {Candidate, Caption} from '../models'

export function Feed ({ children }){
    const [feed, setFeed] = useState([])

    useEffect(() => {
        const getFeed = async() => 
        {
            const feedData = await DataStore.query(Candidate)
            feedData.sort((a, b) => (a.likes < b.likes) ? 1 : -1)
            setFeed(feedData)
        }

        getFeed()
    },[])
    return (
        <Container>
            {feed.map(post => children({ post }))}
        </Container>
    )
}