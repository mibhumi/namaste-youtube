import React from 'react'

export const VideoCard = ({info}) => {

    const {snippet, statistics} = info;
    const {channelTitle, title, thumbnails} = snippet;

    return (
        <div className="p-5 m-5 w-72 shadow-lg">
            <img alt="thumbnail" src={thumbnails.medium.url} />
            <ul>
                <li className="font-bold">{title}</li>
                <li>{channelTitle}</li>
                <li>{statistics.viewCount}</li>
            </ul>
        </div>
    )
}
