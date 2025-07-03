import React from "react";
import YouTube, { YouTubeProps } from "react-youtube";

// Define prop types
interface YouTubePlayerProps {
  url: string;
  width?: string;
  height?: string;
}

// Helper function to extract video ID
const extractVideoId = (url: string): string | null => {
  const regExp =
    /(?:https?:\/\/)?(?:www\.)?(?:youtube\.com\/(?:[^\/\n\s]+\/\S+\/|(?:v|e(?:mbed)?)\/|\S*?[?&]v=)|youtu\.be\/)([a-zA-Z0-9_-]{11})/;
  const match = url.match(regExp);
  return match ? match[1] : null;
};

const YouTubePlayer: React.FC<YouTubePlayerProps> = ({
  url,
  width = "100%",
}) => {
  const videoId = extractVideoId(url);

  if (!videoId) {
    return <p>Invalid YouTube URL</p>;
  }

  const opts: YouTubeProps["opts"] = {
    width,
    playerVars: {
      autoplay: 0,
      controls: 1,
      modestbranding: 1,
      rel: 0, // prevents showing related videos from other channels
    },
  };

  return <YouTube videoId={videoId} opts={opts} />;
};

export default YouTubePlayer;
