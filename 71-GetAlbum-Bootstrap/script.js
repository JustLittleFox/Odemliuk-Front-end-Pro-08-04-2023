async function getAlbums() {
    let response = await fetch('https://jsonplaceholder.typicode.com/albums');
    let data = await response.json();
    return data;
}

function displayAlbums(albums) {
    const albumList = document.getElementById('albumList');
    albums.forEach(album => {
        let listItem = document.createElement('a');
        listItem.textContent = album.title;
        listItem.href = `album.html?id=${album.id}`;
        listItem.classList.add('list-group-item', 'list-group-item-action');
        albumList.appendChild(listItem);
    });
}

getAlbums().then(displayAlbums);
