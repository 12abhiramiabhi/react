import React from 'react'
import FooterSession from './FooterSession'
import IconGroup from './IconGroup'
import MidSession from './MidSession'
import TopSession from './TopSession'

export default function MainTweet() {
    return (
        <div className='main'>
            <TopSession />
            <MidSession />
            <IconGroup />
            <FooterSession />
        </div>
    )
}
