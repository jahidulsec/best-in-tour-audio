"use client";

import { Pause, Play } from "lucide-react";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { Slider } from "../ui/slider";

function AudioPlayer({play}: {play:string}) {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(500);

  const audioRef = useRef<HTMLAudioElement>(null);

  const handlePlay = () => {
    audioRef.current?.play();
    setIsPlaying(true);
  };

  const handlePause = () => {
    audioRef.current?.pause();
    setIsPlaying(false);
  };

  const handlePlayPause = () => {
    if (isPlaying) {
      handlePause();
    } else {
      handlePlay();
    }
  };

  const handleUpdateTime = () => {
    setCurrentTime(Number(audioRef.current?.currentTime));
    setDuration(Number(audioRef.current?.duration));
  };

  const formatDuration = (durationSeconds: number) => {
    const minutes = Math.floor(durationSeconds / 60)
    const seconds = Math.floor(durationSeconds % 60)
    const formatSeconds = seconds.toString().padStart(2, "0")
    return `${minutes}:${formatSeconds}`
  }

  useEffect(() => {
    audioRef.current?.addEventListener("timeupdate", handleUpdateTime);

    return () => {
      audioRef.current?.removeEventListener("timeupdate", handleUpdateTime);
    };
  }, []);


  return (
    <div className="player-card flex flex-col gap-3 p-3">
      <div className="w-full rounded-md overflow-hidden mx-auto mb-5">
        <div className="relative w-full aspect-square">
          <Image
            fill
            src={"/images/Pantheon-Rome.avif"}
            alt=""
            objectFit="cover"
          />
        </div>
      </div>

      <Slider 
        min={0}
        max={duration}
        value={[currentTime]}
        onValueChange={(value) => {
            if (audioRef.current) {
              audioRef.current.currentTime = value[0];
              setCurrentTime(value[0]);
            }
          }}
      />

      <audio
        src={`/audios/${play || "italiano.mp4"}`}
        controls
        className="hidden"
        ref={audioRef}
      />

      <div className="track-duration flex justify-between items-center gap-5 text-xs">
        <p>{formatDuration(currentTime)}</p>
        <p>{formatDuration(duration)}</p>
      </div>

      <button
        type="button"
        onClick={handlePlayPause}
        className="bg-primary mx-auto rounded-full p-5 text-white"
      >
        {isPlaying ? <Pause /> : <Play />}
      </button>
    </div>
  );
}

export default AudioPlayer;
