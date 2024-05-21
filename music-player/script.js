document.addEventListener("DOMContentLoaded", () => {
  const audio = document.getElementById("audio");
  const playPauseButton = document.getElementById("playPause");
  const prevButton = document.getElementById("prev");
  const nextButton = document.getElementById("next");
  const shuffleButton = document.getElementById("shuffle");
  const playlistElement = document.getElementById("playlist");

  const playlist = [
    { title: "Song 1", url: "songs/song1.mp3" },
    { title: "Song 2", url: "songs/song2.mp3" },
    { title: "Song 3", url: "songs/song3.mp3" },
  ];
  let currentIndex = 0;
  let isPlaying = false;
  let isShuffling = false;

  function loadSong(index) {
    audio.src = playlist[index].url;
    audio.load();
  }

  function updatePlaylist() {
    //playlistElement.innerHTML = "";
    playlist.forEach((song, index) => {
      const li = document.createElement("li");
      li.textContent = song.title;
      li.addEventListener("click", () => {
        currentIndex = index;
        loadSong(currentIndex);
        playSong();
      });
      playlistElement.appendChild(li);
    });
  }

  function playSong() {
    audio.play();
    isPlaying = true;
    playPauseButton.textContent = "Pause";
  }

  function pauseSong() {
    audio.pause();
    isPlaying = false;
    playPauseButton.textContent = "Play";
  }

  function nextSong() {
    currentIndex = (currentIndex + 1) % playlist.length;
    loadSong(currentIndex);
    playSong();
  }
  function prevSong() {
    currentIndex = (currentIndex - 1 + playlist.length) % playlist.length;
    loadSong(currentIndex);
    playSong();
  }

  function suffleSongs() {
    for (let i = playlist.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [playlist[i], (playlist[j] = playlist[j]), playlist[i]];
    }
    updatePlaylist();
  }
  playPauseButton.addEventListener("click", () => {
    if (isPlaying) {
      pauseSong();
    } else {
      playSong();
    }
  });
  prevButton.addEventListener("click", prevSong);
  nextButton.addEventListener("click", nextSong);
  shuffleButton.addEventListener("click", () => {
    isShuffling = !isShuffling;
    suffleSongs();
  });
  audio.addEventListener("ended", nextSong);
  loadSong(currentIndex);
  updatePlaylist();
});
