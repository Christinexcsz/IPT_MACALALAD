function showAlbum(albumId) {
    const albums = document.querySelectorAll('.album-photos');
    albums.forEach(album => {
        album.classList.remove('show');
    });

    const albumFolders = document.querySelectorAll('.album');
    albumFolders.forEach(album => {
        album.style.display = 'none';
    });

    const selectedAlbum = document.getElementById(albumId);
    selectedAlbum.classList.add('show');
}

function backToAlbums() {
    const albums = document.querySelectorAll('.album-photos');
    albums.forEach(album => {
        album.classList.remove('show');
    });

    const albumElements = document.querySelectorAll('.album');
    albumElements.forEach(album => {
        album.style.display = 'block';
    });
}
