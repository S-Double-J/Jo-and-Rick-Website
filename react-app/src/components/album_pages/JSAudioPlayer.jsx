import styled from "styled-components";
import {
  SlControlPlay,
  SlControlPause,
  SlControlForward,
  SlControlRewind,
} from "react-icons/sl";
import { useState, useRef, useEffect } from "react";

const PlayPause = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
  border: 1px solid white;
  border-radius: 50%;
  width: 60px;
  height: 60px;
  margin-left: 20px;
  margin-right: 20px;
`;
const ForwardBackward = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  background: none;
  color: white;
  font-size: 30px;
  cursor: pointer;
`;
const PlayerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
`;
const ButtonsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const ProgressBarContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const CurrentTime = styled.p`
  color: white;
  padding-right: 10px;
`;

const Duration = styled.p`
  color: white;
  padding-left: 10px;
`;

const ProgressBar = styled.div`
  width: 100%;
  margin-bottom: 6px;
`;

// AudioPlayer component for playing audio files
function AudioPlayer({ id, src }) {
  // State for managing playback
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Refs for audio element and progress bar
  const audioRef = useRef();
  const progressBarRef = useRef();
  const animationRef = useRef();

  // Calculate duration when audio metadata is loaded
  useEffect(() => {
    const seconds = Math.floor(audioRef.current?.duration || 0);
    setDuration(seconds);
    progressBarRef.current.max = seconds;
  }, [audioRef?.current?.loadedmetadata, audioRef?.current?.readyState]);

  // Handle progress bar change
  const changeRange = () => {
    audioRef.current.currentTime = progressBarRef.current.value; // Update audio playback time
    changePlayerCurrentTime();
  };

  // Update progress bar while playing
  const whilePlaying = () => {
    progressBarRef.current.value = audioRef.current.currentTime; // Update progress bar position
    changePlayerCurrentTime();
    animationRef.current = requestAnimationFrame(whilePlaying); // Request next animation frame
  };
  // Update current time while playing
  const changePlayerCurrentTime = () => {
    progressBarRef.current.style.setProperty(
      "--seek-before-width",
      `${(progressBarRef.current.value / duration) * 100}%`
    ); // Update CSS variable for progress bar width
    setCurrentTime(progressBarRef.current.value); // Update current time state
  };
  // Calculate time in minutes:seconds format
  const calculateTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const returnedMinutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    const secondsLeft = Math.floor(seconds % 60);
    const returnedSeconds =
      secondsLeft < 10 ? `0${secondsLeft}` : `${secondsLeft}`;
    return `${returnedMinutes}:${returnedSeconds}`;
  };

  // Toggle play/pause
  const togglePlayPause = () => {
    // use prevValue to handle asyncronous setState
    const prevValue = isPlaying; // Store previous play state
    setIsPlaying(!prevValue); // Toggle play state
    if (!prevValue) {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying); // Start animation loop
    } else {
      audioRef.current?.pause();
      cancelAnimationFrame(animationRef.current); // Cancel animation frame
    }
  };

  // Seek back 30 seconds
  const backThirty = () => {
    progressBarRef.current.value -= 30;
    changeRange();
  };

  // Seek forward 30 seconds
  const forwardThirty = () => {
    progressBarRef.current.value += 30;
    changeRange();
  };

  return (
    <>
      <PlayerContainer>
        <audio id={id} ref={audioRef} src={src}></audio>
        <ButtonsContainer>
          <ForwardBackward onClick={backThirty}>
            <SlControlRewind />
          </ForwardBackward>
          <PlayPause onClick={togglePlayPause}>
            {isPlaying ? (
              <SlControlPause />
            ) : (
              <SlControlPlay className="play" />
            )}
          </PlayPause>
          <ForwardBackward onClick={forwardThirty}>
            <SlControlForward />
          </ForwardBackward>
        </ButtonsContainer>
        <ProgressBarContainer>
          <CurrentTime>{calculateTime(currentTime)}</CurrentTime>
          <ProgressBar>
            <input
              type="range"
              className="progressBar"
              defaultValue="0"
              ref={progressBarRef}
              onChange={changeRange}
            />
          </ProgressBar>
          <Duration>
            {duration && !isNaN(duration) && calculateTime(duration)}
          </Duration>
        </ProgressBarContainer>
      </PlayerContainer>
    </>
  );
}

export default AudioPlayer;
