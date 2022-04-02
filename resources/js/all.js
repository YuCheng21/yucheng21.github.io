const imageUrls = [
    "resources/img/avatar/avatar-1.jpg",
    "resources/img/avatar/avatar-2.jpg",
    "resources/img/avatar/avatar-3.jpg",
    "resources/img/avatar/avatar-4.jpg",
    "resources/img/avatar/avatar-5.jpg",
]
const img = document.getElementById('avatar');
let count = 1;
window.setInterval(function () {
    img.src = imageUrls[(count % imageUrls.length)];
    count++;
}, 15000)
