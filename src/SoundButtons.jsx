import React, { useState, useRef } from "react";
import "./styles/SoundButtons.css";

function SoundButtons() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isLooping, setIsLooping] = useState(false);
  const audioRef = useRef(null);

  const categories = [
    { name: "Nature's Sound", sounds: [
        { name: "Rain", src: "https://your-cdn-domain.com/path/to/autumn-sky-meditation-7618.mp3" },
        { name: "River", src: "https://raw.githubusercontent.com/lakshayslayer/MindTazaa/master/public/autumn-sky-meditation-7618.mp3" },
        { name: "Campfire", src: "/public/mixkit-campfire-crackles-1330.wav" },
        { name: "Nature", src: "/public/the-beat-of-nature-122841.mp3" },
        { name: "Forest", src: "/public/mixkit-river-in-the-forest-with-birds-1216.wav" },
        { name: "Birds", src: "/public/mixkit-river-in-the-forest-with-birds-1216.wav" },
        { name: "Thunder storm", src: "/public/mixkit-thunderstorm-and-rain-loop-2402.wav" },
      ]
    },
    { name: "Meditation", sounds: [
        { name: "Beat of Nature", src: "/public/the-beat-of-nature-122841.mp3" },
        { name: "Autumn sky ", src: "/public/autumn-sky-meditation-7618.mp3" },
        { name: "Flute Meditation", src: "/public/flute-meditation-music-8-230805.mp3" },
        { name: "Meditation Blue", src: "/public/meditation-blue-138131.mp3" },
      ]
    },
    { name: "Music", sounds: [
        { name: "Good Night", src: "/public/good-night-160166.mp3" },
        { name: "Perfect Beauty", src: "/public/perfect-beauty-191271.mp3" },
        { name: "Beat of Nature", src: "/public/the-beat-of-nature-122841.mp3" },
      ]
    },
  ];

  const playSound = (src) => {
    if (audioRef.current) {
      audioRef.current.pause();
    }
    audioRef.current = new Audio(src);
    audioRef.current.loop = isLooping;
    audioRef.current.play();
    setIsPlaying(true);
  };

  const stopSound = () => {
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      setIsPlaying(false);
    }
  };

  const toggleLoop = () => {
    setIsLooping(!isLooping);
    if (audioRef.current) {
      audioRef.current.loop = !isLooping;
    }
  };

  return (
    <div className="relaxing-sounds">
      <h2>Relaxing Sounds</h2>
      
      {/* Category Buttons */}
      {!selectedCategory && (
        <div className="category-buttons">
          {categories.map((category, index) => (
            <button key={index} onClick={() => setSelectedCategory(category)}>
              {category.name}
            </button>
          ))}
        </div>
      )}
      
      {/* Sound Buttons for Selected Category */}
      {selectedCategory && (
        <div className="sound-panel">
          <h3>{selectedCategory.name}</h3>
          <div className="sound-buttons">
            {selectedCategory.sounds.map((sound, index) => (
              <button key={index} onClick={() => playSound(sound.src)}>
                {sound.name}
              </button>
            ))}
          </div>
          <div className="sound-controls">
            <button onClick={stopSound} disabled={!isPlaying}>
              Stop
            </button>
            <button onClick={toggleLoop}>
              {isLooping ? "Disable Loop" : "Enable Loop"}
            </button>
          </div>
          <button className="back-button" onClick={() => setSelectedCategory(null)}>
            Back to Categories
          </button>
        </div>
      )}
    </div>
  );
}

export default SoundButtons;
