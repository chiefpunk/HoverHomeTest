import React from 'react';
import { default as RNVideo, VideoProperties } from 'react-native-video';

interface VideoProps extends VideoProperties {}

// TODO: Extend video component to support auto play
const Video: React.FC<VideoProps> = ({ ...props }) => {
  return <RNVideo {...props} />;
};

export default Video;
