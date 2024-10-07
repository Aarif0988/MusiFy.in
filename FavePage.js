
// Function Listing All Fav-Song Cards ;
const FavCard = (img, title, content) => {
    let html = `<div class="Fav-card">
            <div class="Fav-songContent">
                <img src="${img}" alt="">
                <div class="Fav-songName">
                    <span>${title}</span>
                    <p>${content} The Wesbite is best Music Platform here you can listen.</p>
                </div>
                </div>
                <img src="svgFile/play.svg" alt="">
        </div>`
    document.querySelector('.lower-content').innerHTML += html
}

// Event Listner on Profile Favourite Songs ;
const FavSongBtn = document.querySelector('.fav')
const FavPage = document.querySelector('.Fav-page')
const homeBtn = document.querySelector('.home')
FavSongBtn.addEventListener('click', function () {
    hideAll()
    FavPage.style.display = 'block'
})
homeBtn.addEventListener('click', function () {
    ShowAll()
    FavPage.style.display = 'none'
})
// All Data ;
const Nav = document.getElementsByTagName('nav')[0]
const MobileDisplay = document.querySelector('.mobile-display')
const Main = document.getElementsByTagName('main')[0]
const Profile = document.querySelector('.profile')
// hide All page ;
function hideAll() {
    Nav.style.display = 'none'
    MobileDisplay.style.display = 'none'
    Main.style.display = 'none'
    Profile.style.display = 'none'
}
function ShowAll() {
    Nav.style.display = ''
    MobileDisplay.style.display = ''
    Main.style.display = ''
    Profile.style.display = ''
}



// Add to Favourite song ;
document.querySelector('.display-songs').addEventListener('click', function (event) {
    var card = event.target.closest('.song-card');
    if (card) {
        var index = card.getAttribute('data-index');
        loadSong(index);
        playSong();



        // Fav Button ;
        const songData = dslist[index];
        const FavBtn = document.querySelectorAll('#heart')
        FavBtn.forEach(Fav => {
            Fav.addEventListener('click', function () {
                if (songData) {
                    FavCard(songData.img, songData.title, songData.content)
                }
            }, { once: true })
        })

    }
});
