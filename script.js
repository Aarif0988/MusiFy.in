console.log("Bishmillah")

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
function getSongs(title, artist) {
    let songs = `<div id="${title}" class="songs">
    <img src="svgFile/songicon.svg" alt="">
                <div class="song-name">${title} <br> <span>Artist - ${artist}</span></div>
                <img id="play-button" src="svgFile/play.svg" alt="">
                </div>`

    document.querySelector(".playlist-items").innerHTML += songs
}
getSongs("Millionaire", "honey singh");
getSongs("Fan ikko nar da", "Karan Aujla");
getSongs("Chali samiyana me...", "Akela kallu");
getSongs("Chuye mor jawani", "Samar singh");
getSongs("Hamar Ganna ke ras", "Samar singh");
getSongs("Chikan Chikan petwa", "luck raja holi");
getSongs("Cheques", "Subh");
getSongs("", "");
getSongs("", "");



// Declare a global variable to hold the audio object
let currentAudio = null;

function playSong(song_url) {
    // If the current audio is not playing the same song, create a new one
    if (!currentAudio || currentAudio.src !== song_url) {
        currentAudio = new Audio(song_url); // Create a new Audio object
    }
    currentAudio.play(); // Play the audio
}

function pauseSong() {
    if (currentAudio) { // Only pause if there's a song currently playing
        currentAudio.pause();
    }
}

// Event listeners
// First song : 
document.getElementById("Millionaire").addEventListener("click", () => {
    playSong("Songs/Millioner honey singh.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Second Song : 
document.getElementById("Fan ikko nar da").addEventListener("click", () => {
    playSong("Songs/Fan ikko nar da me karan Aujla.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Third song : 
document.getElementById("Chali samiyana me...").addEventListener("click", () => {
    playSong("Songs/Chali samiyana me.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Fourth song : 
document.getElementById("Chuye mor jawani").addEventListener("click", () => {
    playSong("Songs/Chuwe mor jawani.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Fifth song : 
document.getElementById("Hamar Ganna ke ras").addEventListener("click", () => {
    playSong("Songs/Ganna ke rass.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Sixth song : 
document.getElementById("Chikan Chikan petwa").addEventListener("click", () => {
    playSong("Songs/chikan chikan petwa.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});

// Seventh song :
document.getElementById("Cheques").addEventListener("click", () => {
    playSong("Songs/Bhojpuri/Cheques.mp3");
});

document.getElementById("pause").addEventListener("click", () => {
    pauseSong();
});




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
MusicCard("ArijitSingh.html", "images/Arjit singh.jpg", "Arijit singh", "Love songs from Arjit singh.")
MusicCard("hindisongs.html", "images/hindi songs img.jpg", "Hindi Songs", "All 90's hindi songs available. ")
MusicCard("Bhojpuri.html", "images/bhojpuri.jpg", "Bhojpuri", "Real vibes in Bhojpuri songs.")
MusicCard("English.html", "images/English.jpg", "English", "English songs are available.")
MusicCard("Haryanvi.html", "images/Haryanvi.jpg", "Haryanvi", "New and Old haryanvi songs")
// MusicCard("", "", "", "")
// MusicCard("", "", "", "")
// MusicCard("", "", "", "")
