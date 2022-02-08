import React from 'react';

const AudioPlayer = () => {
  return (
      <div>
          <audio src={`${song.songUrl}`}></audio>
      </div>
  )
};

export default AudioPlayer;
