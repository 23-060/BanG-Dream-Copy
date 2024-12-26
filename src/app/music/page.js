"use client";

import React, { useState, useRef, useEffect } from "react";

const musicList = [
  {
    title: "FIRE BIRD",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/FIRE BIRD.mp3",
    cover: "/firebird_cover.jpg"
  },
  {
    title: "Ringing Bloom",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/Ringing Bloom.mp3",
    cover: "/firebird_cover.jpg"
  },
  {
    title: "Neo-Aspect",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/NeoAspect.m4a",
    cover: "/neoaspect_cover.jpg"
  },
  {
    title: "陽だまりロードナイト",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/陽だまりロードナイト.mp3",
    cover: "/sunkissed_cover.jpg"
  },
  {
    title: "Blessing Chord",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/Blessing Chord.m4a",
    cover: "/blessingchord_cover.jpeg"
  },
  {
    title: "ZEAL of proud",
    artist: "Roselia",
    status: "Original",
    color: "bg-green-500",
    src: "/music/ZEAL of proud.mp3",
    cover: "/zop_cover.jpg"
  },
  {
    title: "右肩の蝶",
    artist: "Roselia",
    status: "Cover",
    color: "bg-pink-500",
    src: "/music/右肩の蝶.m4a",
    cover: "/migikata_cover.webp"
  },
  {
    title: "Charles",
    artist: "Roselia",
    status: "Cover",
    color: "bg-pink-500",
    src: "/music/Charles.m4a",
    cover: "/Charles.webp"
  },
  {
    title: "Roku Chounen To Ichiya Monogatari",
    artist: "Roselia",
    status: "Cover",
    color: "bg-pink-500",
    src: "/music/rokuchounen.m4a",
    cover: "/rokuchounen.webp"
  },
  {
    title: "Determination Symphony",
    artist: "Roselia",
    status: "Original",
    color: "bg-pink-500",
    src: "/music/Determination Symphony.mp3",
    cover: "/determinasi.jpeg"
  },
  {
    title: "This Game",
    artist: "Roselia",
    status: "Cover",
    color: "bg-pink-500",
    src: "/music/This Game.m4a",
    cover: "/thisgame.jpeg"
  },
  {
    title: "スカイクラッドの観測者",
    artist: "Roselia x Kanako Itou",
    status: "Cover",
    color: "bg-pink-500",
    src: "/music/スカイクラッドの観測者.m4a",
    cover: "/cover.jpg"
  }
];

export default function Musik() {
  const [currentTrack, setCurrentTrack] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [filterStatus, setFilterStatus] = useState("");
  const [trackProgress, setTrackProgress] = useState(0);
  const audioRef = useRef(null);
  const intervalRef = useRef(null);

  const handlePlayPause = (index) => {
    if (currentTrack === index) {
      setIsPlaying(!isPlaying);
    } else {
      setCurrentTrack(index);
      setIsPlaying(true);
    }
  };

  const filteredMusicList = filterStatus
    ? musicList.filter((track) => track.status === filterStatus)
    : musicList;

  useEffect(() => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.play();
        startTimer();
      } else {
        audioRef.current.pause();
      }
    }

    return () => {
      clearInterval(intervalRef.current);
    };
  }, [isPlaying, currentTrack]);

  const startTimer = () => {
    clearInterval(intervalRef.current);

    if (audioRef.current) {
      intervalRef.current = setInterval(() => {
        if (audioRef.current) {
          if (audioRef.current.ended) {
            setIsPlaying(false);
            clearInterval(intervalRef.current);
          } else {
            setTrackProgress(audioRef.current.currentTime);
          }
        }
      }, 1000);
    }
  };

  const onScrub = (value) => {
    clearInterval(intervalRef.current);
    if (audioRef.current) {
      audioRef.current.currentTime = value;
      setTrackProgress(audioRef.current.currentTime);
    }
  };

  const onScrubEnd = () => {
    if (isPlaying) startTimer();
  };

  return (
    <div>
      <div className="w-[100%] h-auto p-[100px] overflow-hidden bg-[url('/bg_pattern.png')]">
        <div className="flex justify-center font-['poppins'] font-bold text-[#ffffff] mt-[60px]">
          <button className="bg-[url(/news_pattern.png)] bg-cover px-[200px] rounded-full py-1 text-[30px]">
            Music
          </button>
        </div>
      </div>
      <div className="flex justify-center mb-4">
        <button
          onClick={() => setFilterStatus("")}
          className={`border-4 border-rose-400 py-2 rounded-full px-[100px] text-[20px] font-bold mx-5 transition-all ${
            filterStatus === ""
              ? "bg-rose-400 text-white"
              : "text-rose-400 hover:bg-rose-400 hover:text-white"
          }`}
        >
          All Song
        </button>
        <button
          onClick={() => setFilterStatus("Original")}
          className={`border-4 border-rose-400 py-2 rounded-full px-[100px] text-[20px] font-bold mx-5 transition-all ${
            filterStatus === "Original"
              ? "bg-rose-400 text-white"
              : "text-rose-400 hover:bg-rose-400 hover:text-white"
          }`}
        >
          Original Song
        </button>
        <button
          onClick={() => setFilterStatus("Cover")}
          className={`border-4 border-rose-400 py-2 rounded-full px-[100px] text-[20px] font-bold mx-5 transition-all ${
            filterStatus === "Cover"
              ? "bg-rose-400 text-white"
              : "text-rose-400 hover:bg-rose-400 hover:text-white"
          }`}
        >
          Cover Song
        </button>
      </div>
      <div className="flex flex-wrap gap-4 p-4 mb-[100px]">
        {filteredMusicList.map((track, index) => (
          <div
            key={index}
            className="flex bg-gray-800 text-white rounded-lg shadow-lg w-[450px]"
          >
            <img
              src={track.cover}
              alt={track.title}
              className="w-[120px] object-cover rounded-l-lg"
            />
            <div className="p-4 flex-1">
              <h3 className="text-lg font-semibold">{track.title}</h3>
              <p className="text-sm text-gray-400">by {track.artist}</p>
              <p className="text-sm text-gray-400">
                Status : {track.status}-Song
              </p>
              {currentTrack === index && (
                <div>
                  <input
                    type="range"
                    value={trackProgress}
                    max={audioRef.current?.duration || 0}
                    onChange={(e) => onScrub(e.target.value)}
                    onMouseUp={onScrubEnd}
                    onKeyUp={onScrubEnd}
                    className="w-full mt-2"
                  />
                  <audio
                    ref={audioRef}
                    src={track.src}
                    onEnded={() => setIsPlaying(false)}
                  />
                </div>
              )}
            </div>
            <div>
              <button
                onClick={() => handlePlayPause(index)}
                className="px-3 py-1 bg-rose-400 rounded hover:bg-rose-500 transition duration-200 h-[100%] w-[100px] flex justify-center items-center"
              >
                {isPlaying && currentTrack === index ? (
                  <i className="bi bi-pause-fill text-[50px]"></i>
                ) : (
                  <i className="bi bi-play-fill text-[50px]"></i>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center font-['poppins'] font-bold text-rose-400 mb-[100px]">
        <button className="bg-[#ffffff] active:scale-125 hover:bg-[#DADADA] hover:transition-all transition-all pl-[100px] rounded-xl border-2 border-[#797979] py-5 text-[20px]">
          More <i className="bi bi-chevron-right ml-[80px] mr-[10px]"></i>
        </button>
      </div>
    </div>
  );
}
