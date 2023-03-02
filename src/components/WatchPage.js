import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { useSearchParams } from 'react-router-dom';
import { closeMenu } from '../utils/appSlice';

export const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams] = useSearchParams();
    const videoID = searchParams.get("v");

    useEffect(()=>{
        dispatch(closeMenu())
    });

  return (
    <div>
        <iframe 
            width="560" 
            height="315" 
            src={"https://www.youtube.com/embed/" + videoID }
            title="YouTube video player" 
            frameborder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowfullscreen
        >
        </iframe>
    </div>
  )
}
