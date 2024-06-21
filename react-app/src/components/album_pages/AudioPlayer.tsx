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

interface AudioPlayerProps {
  id: string;
  src: string;
}// AudioPlayer component for playing audio files
function AudioPlayer({ id, src }: AudioPlayerProps) {
  // State for managing playback
  const [isPlaying, setIsPlaying] = useState(false);
  const [duration, setDuration] = useState(0);
  const [currentTime, setCurrentTime] = useState(0);

  // Refs for audio element and progress bar
  const audioRef = useRef<HTMLAudioElement>(null);
  const progressBarRef = useRef<HTMLInputElement>(null);
  const animationRef = useRef<number | null>(null);

  // Calculate duration when audio metadata is loaded
  useEffect(() => {
    //add event listener for loaded metadata
    if (audioRef.current) {
      audioRef.current.addEventListener("loadedmetadata", () => {
        const seconds = Math.floor(audioRef.current?.duration || 0);
        setDuration(seconds);
        if (progressBarRef.current) {
          progressBarRef.current.max = `${seconds}`;
        }
      });
    }
  }, [audioRef?.current?.onloadedmetadata, audioRef?.current?.readyState]);

   // Handle progress bar change
   const changeRange = () => {
    if (audioRef.current && progressBarRef.current) {
      audioRef.current.currentTime = Number(progressBarRef.current.value);
      progressBarRef.current.style.setProperty(
        "--seek-before-width",
        `${(Number(progressBarRef.current.value) / duration) * 100}%`
      );
      setCurrentTime(Number(progressBarRef.current.value));
    }
  };

  // Update progress bar while playing
  const whilePlaying = () => {
    if (audioRef.current && progressBarRef.current) {
      progressBarRef.current.value = String(audioRef.current.currentTime);
      progressBarRef.current.style.setProperty(
        "--seek-before-width",
        `${(Number(progressBarRef.current.value) / duration) * 100}%`
      );
      setCurrentTime(Number(progressBarRef.current.value));
    }
    animationRef.current = requestAnimationFrame(whilePlaying);
  };

  // Calculate time in minutes:seconds format
  const calculateTime = (seconds: number) => {
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
    const prevValue = isPlaying;
    setIsPlaying(!prevValue);
    if (!prevValue) {
      audioRef.current?.play();
      animationRef.current = requestAnimationFrame(whilePlaying);
    } else {
      audioRef.current?.pause();
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    }
  };

  // Seek back 30 seconds
  const backThirty = () => {
    if (audioRef.current && progressBarRef.current) {
      progressBarRef.current.value = `${
        Number(progressBarRef.current.value) - 30
      }`;
      changeRange();
    }
  };

  // Seek forward 30 seconds
  const forwardThirty = () => {
    if (audioRef.current && progressBarRef.current) {
      progressBarRef.current.value = `${
        Number(progressBarRef.current.value) + 30
      }`;
      changeRange();
    }
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
