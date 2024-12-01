import React from 'react';

interface VideoPlayerProps {
  videoId: string;
  title: string;
}

const VideoPlayer = ({ videoId, title }: VideoPlayerProps) => {
  return (
    <div className="relative" style={{ padding: '75% 0 0 0' }}>
      <iframe
        src={`https://player.vimeo.com/video/${videoId}?h=a3cc002e5d&badge=0&autopause=0&player_id=0&app_id=58479`}
        className="absolute top-0 left-0 w-full h-full rounded-xl"
        frameBorder="0"
        allow="autoplay; fullscreen; picture-in-picture; clipboard-write"
        title={title}
      />
    </div>
  );
};

export default VideoPlayer;