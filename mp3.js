    const playlist = [
        {
            title: "the horizon",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/the horizon.wav",
            image: "assets/ph.png",
        },
        {
            title: "amau",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/Amau.wav",
            image: "covers/amau.jpg",
        },
        {
            title: "i never learned to dance",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/i never learned to dance.wav",
            image: "covers/inltd.jpg",
        },
        {
            title: "wasteland",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/wasteland.wav",
            image: "covers/wasteland.jpg",
        },
        {
            title: "lesnir",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/lesnir.wav",
            image: "assets/ph.png",
        },
        {
            title: "calligraphy",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/calligraphy.wav",
            image: "assets/ph.png",
        },
        {
            title: "K.I.W.Y.K.I.K.I.K.K.I.",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/KallItWhatYaKallItKauseIKantKallIt.wav",
            image: "assets/ph.png",
        },
        {
            title: "the park",
            artist: "KLAYMORR",
            album: "LIMINAL RELAXATION",
            src: "audio/get back to work.wav",
            image: "assets/ph.png",
        },
        {
            title: "show must still go on",
            artist: "KLAYMORR",
            album: "The Tale Of Mr. Magala Midnight",
            src: "audio/show still must go on2 (DEMO).wav",
            image: "assets/ph.png",
        },
        {
            title: "the wild south",
            artist: "KLAYMORR",
            album: "The Tale Of Mr. Magala Midnight",
            src: "audio/The Wild South (MS).wav",
            image: "assets/ph.png",
        },
    ];

    let currentSong = 0;

    const mediaSpace = document.querySelector(".media-space");
    const audio = document.getElementById("audio");
    const playPauseBtn = document.getElementById("playPauseBtn");
    const prevBtn = document.getElementById("prevBtn");
    const nextBtn = document.getElementById("nextBtn");
    const songTitle = document.getElementById("songTitle");
    const songArtist = document.getElementById("songArtist");
    const songAlbum = document.getElementById("songAlbum");
    const songImage = document.getElementById("songImage");
    const progressBar = document.getElementById("progressBar");
    const currentTimeEl = document.getElementById("currentTime");
    const totalTimeEl = document.getElementById("totalTime");
    const forward10 = document.getElementById("forward10");
    const rewind10 = document.getElementById("rewind10");

    function loadSong(index) {
        const song = playlist[index];
        audio.src = song.src;
        songTitle.textContent = song.title;
        songArtist.textContent = song.artist;
        songAlbum.textContent = song.album;
        songImage.src = song.image;

        mediaSpace.style.background = song.bg;
    }

    function playPause() {
        if (audio.paused) {
            audio.play();
            playPauseBtn.textContent = "⏸";
        } else {
            audio.pause();
            playPauseBtn.textContent = "►";
        }
    }

    function skipForward() {
        audio.currentTime = Math.min(audio.currentTime + 10, audio.duration);
    }

    function skipBackward() {
        audio.currentTime = Math.max(audio.currentTime - 10, 0);
    }

    function nextSong() {
        currentSong = (currentSong + 1) % playlist.length;
        loadSong(currentSong);
        audio.play();
        playPauseBtn.textContent = "⏸";
    }

    function previousSong() {
        currentSong = (currentSong - 1 + playlist.length) % playlist.length;
        loadSong(currentSong);
        audio.play();
        playPauseBtn.textContent = "⏸";
    }

    audio.addEventListener("timeupdate", () => {
        const progress = (audio.currentTime / audio.duration) * 100;
        progressBar.value = progress;

        let mins = Math.floor(audio.currentTime / 60);
        let secs = Math.floor(audio.currentTime % 60).toString().padStart(2, "0");
        currentTimeEl.textContent = `${mins}:${secs}`;

        let totalMins = Math.floor(audio.duration / 60);
        let totalSecs = Math.floor(audio.duration % 60).toString().padStart(2, "0");
        totalTimeEl.textContent = `${totalMins}:${totalSecs}`;
    });

    progressBar.addEventListener("input", () => {
        audio.currentTime = (progressBar.value / 100) * audio.duration;
    });

    playPauseBtn.addEventListener("click", playPause);
    nextBtn.addEventListener("click", nextSong);
    prevBtn.addEventListener("click", previousSong);
    forward10.addEventListener("click", skipForward);
    rewind10.addEventListener("click", skipBackward);
    audio.addEventListener("ended", () => {
        nextSong();
    });

    loadSong(currentSong);