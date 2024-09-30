console.log("Bishmillah")

// Mobile Javascript for front display 
var audioPlayer = document.getElementById('audio-player');
var seekbar = document.getElementById('seekbar');
var playPauseBtn = document.getElementById('play-pause-btn');
var currentSongIndex = 0;
var isPlaying = false;
var dslist = [
    { title: "Brown rang", img: "Songs/Honey singh/images/Brown rang.jfif", src: "Songs/Honey singh/Brown rang honey singh.mp3", content: "Yo Yo honey singh" },
    { title: "Haareya", img: "Songs/Arijit singh/images/Haareya.jfif", src: "Songs/Arijit singh/Haareya.mp3", content: "Arijit singh" },
    { title: "Lo Maan Liya", img: "Songs/Arijit singh/images/Lo Maan Liya.jfif", src: "Songs/Arijit singh/Lo Maan Liya.mp3", content: "Arijit singh" },
    { title: "Sanam Teri kasam", img: "Songs/Arijit singh/images/Sanam Teri Kasam.jfif", src: "Songs/Arijit singh/Sanam Teri Kasam.mp3", content: "Sanam teri kasam" },
    { title: "Kabooter", img: "Songs/Haryanvi/images/Kabooter.jfif", src: "Songs/Haryanvi/Kabooter.mp3", content: "Haryanvi" },
    { title: "Badli Badli Laage", img: "Songs/Haryanvi/images/Badli Badli Laage.jfif", src: "Songs/Haryanvi/Badli Badli Laage.mp3", content: "Haryanvi"},
    { title: "Palang Sagwan Ke", img: "Songs/Bhojpuri/images/Palang sagwan.jfif", src: "Songs/Bhojpuri/Palang sagwan.mp3", content: "Khesari Lal"},
    { title: "Banaras Ghumai Da", img: "Songs/Bhojpuri/images/Banaras Ghumai da.jfif", src: "Songs/Bhojpuri/A raja hamka banaras ghumai da.mp3", content: "Bhojpuri"},
    { title: "Bewafa", img: "Songs/Bhojpuri/images/Bewafa.jfif", src: "Songs/Bhojpuri/Bewafa Bhojpuri.mp3", content: "In Bhojpuri"},
    { title: "Aa Toh Sahi", img: "Songs/Bollywood/images/Aa Toh Sahi.jfif", src: "Songs/Bollywood/Aa Toh Sahi.mp3", content: "Judwaa 2"},
    { title: "Apka Kiya Hoga", img: "Songs/Bollywood/images/Apka kya Hoga.jfif", src: "Songs/Bollywood/Apka Kya Hoga.mp3", content: "Slowed & Reverb"},
    // { title: "", img: "", src: "", content: ""},
    // { title: "", img: "", src: "", content: ""},
]

// Function to render music cards
function DisplaySong(img, title, content, index) {
    let html = `<div class="song-card" data-index="${index}">
                    <img src="${img}" alt="">
                    <div class="song-title">
                        <span>${title}</span>
                        <p>Song - ${content}</p>
                    </div>
                </div>`;
    document.querySelector(".display-songs").innerHTML += html;
}

// Render all cards
dslist.forEach((song, index) => {
    DisplaySong(song.img, song.title, song.content, index);

});

// Function for Display Seekbar : 
function SeekBar() {
    const songcard = document.querySelector(".display-songs")
    songcard.addEventListener('click', function () {
        const el = document.getElementById("seekbbb")
        el.removeAttribute("style")
    })

}
SeekBar()

// Play song when music card is clicked
document.querySelector('.display-songs').addEventListener('click', function (event) {
    var card = event.target.closest('.song-card');
    if (card) {
        var index = card.getAttribute('data-index');
        loadSong(index);
        playSong();
    }
});

// Load and play song
function loadSong(index) {
    currentSongIndex = index;
    audioPlayer.src = dslist[index].src;
}

function playSong() {
    audioPlayer.play();
    isPlaying = true;
    playPauseBtn.src = 'svgFile/pause.svg';
}

function pauseSong() {
    audioPlayer.pause();
    isPlaying = false;
    playPauseBtn.src = 'svgFile/play.svg';
}

// Play/Pause functionality
playPauseBtn.addEventListener('click', function () {
    if (isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
});

// Update seekbar as song plays
audioPlayer.addEventListener('timeupdate', function () {
    var percentage = (audioPlayer.currentTime / audioPlayer.duration) * 100;
    seekbar.value = percentage;
});

// Seek song using seekbar
seekbar.addEventListener('input', function () {
    var seekTo = (seekbar.value / 100) * audioPlayer.duration;
    audioPlayer.currentTime = seekTo;
});




// Login
document.getElementById("email").addEventListener("click", function () {
    setTimeout(() => {
        let div = document.createElement("button")
        div.setAttribute("class", "btn")
        div.innerText = "Login"
        document.querySelector(".account").insertAdjacentElement("beforeend", div)
    }, 2000);
})

// Playlist
// Working.......


// Music container
function MusicCard(page_url, img, title, content) {
    let html = ` <a href="${page_url}">
                    <div class="music-card">
                        <img src="${img}" alt="">
                        <div class="play-button">
                        <img src="svgFile/songicon.svg" alt="">
                        <div class="m-title">
                            <span>${title}</span>
                            <p>${content}</p>
                        </div>
                        </div>
                    </div>
                 </a>`

    document.querySelector(".music-container").innerHTML += html
}
MusicCard("honeysingh.html", "images/honeysingh.jpg", "Honey Singh", "All Yo Yo honey singh raps listen now.")
MusicCard("Bollywood.html", "images/Bollywood songs.jpg", "Bollywood", "New Bollywood songs listen and enjoy")
MusicCard("karanaujla.html", "images/karan-Aujla.jpg", "Karan Aujla", "Karan Aujla punjabi songs here on website.")
MusicCard("Arijitsingh.html", "images/Arjit singh.jpg", "Arijit singh", "Love songs from Arjit singh.")
MusicCard("hindisongs.html", "images/hindi songs img.jpg", "Hindi Songs", "All 90's hindi songs available. ")
MusicCard("Bhojpuri.html", "images/bhojpuri.jpg", "Bhojpuri", "Real vibes in Bhojpuri songs.")
MusicCard("English.html", "images/English.jpg", "English", "English songs are available.")
MusicCard("Haryanvi.html", "images/Haryanvi.jpg", "Haryanvi", "New and Old haryanvi songs")
// MusicCard("", "", "", "")
// MusicCard("", "", "", "")
// MusicCard("", "", "", "")