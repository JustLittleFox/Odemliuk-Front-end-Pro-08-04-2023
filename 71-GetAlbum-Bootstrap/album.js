async function getPhotos(albumId) {
    let response = await fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`);
    let data = await response.json();
    return data;
}

function displayPhotos(photos) {
    const photoList = document.getElementById('photoList');
    photos.forEach(photo => {
        let photoCard = document.createElement('div');
        photoCard.innerHTML = `
            <div class="card" style="width: 18rem;">
                <img src="${photo.thumbnailUrl}" class="card-img-top" alt="${photo.title}">
                <div class="card-body">
                    <p class="card-text">${photo.title}</p>
                </div>
            </div>
        `;
        photoCard.classList.add('col-sm-4', 'mb-4');
        photoList.appendChild(photoCard);
    });
}

let params = new URLSearchParams(window.location.search);
let albumId = params.get('id');
getPhotos(albumId).then(displayPhotos);
