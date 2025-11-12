import React from 'react';
import YouTube, { YouTubeProps } from "react-youtube";

// Define prop types
interface YouTubePlayerProps {
  url: string;
  width?: string;
  height?: string;
  repeat?: boolean;
  autoplay?: boolean;
  muted?: boolean;
}

// Helper function to extract video ID
const extractVideoId = (url: string): string | null => {
  if (!url.includes("youtube.com") && !url.includes("youtu.be")) {
    return null;
  }
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};
const isLocalVideo = (url: string): boolean => {
  return url.startsWith("/") && (url.endsWith(".mp4") || url.endsWith(".webm") || url.endsWith(".ogg"));
};


const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  url,
  width = "100%",
  height = "100%",
  repeat = false,
  autoplay = false,
  muted = false,
}) => {
  const videoId = extractVideoId(url);

  if (!videoId) {
    if (isLocalVideo(url)) {
      return (
        <video width={width} height={height} controls loop={repeat} autoPlay={autoplay} muted={muted} className="w-full h-full">
          <source src={url} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      );
    }
    return <p>Invalid video URL</p>;
  }

  const opts: YouTubeProps["opts"] = {
    width,
    height,
    playerVars: {
      autoplay: autoplay ? 1 : 0,
      controls: 1,
      modestbranding: 1,
      rel: 0, // prevents showing related videos from other channels
      loop: repeat ? 1 : 0,
      playlist: repeat ? videoId : undefined,
      mute: muted ? 1 : 0,
    },
  };

  return <YouTube videoId={videoId} opts={opts} className="w-full h-full" />;
};

export default YouTubePlayer;
