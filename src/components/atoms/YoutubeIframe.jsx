import React from 'react';

const YouTubeEmbed = ({ videoId }) => {
  const videoSrc = `https://www.youtube.com/embed/${videoId}?autoplay=1&controls=0`;

  return (
    <iframe
      src={videoSrc}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
      }}
      frameBorder="0"
      allow="autoplay; encrypted-media"
      allowFullScreen
      title="Embedded YouTube"
    />
  );
};

export default YouTubeEmbed;