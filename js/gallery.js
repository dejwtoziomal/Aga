let imgCount = 4;
let imgNow = 0;

function openImage(el) {
    document.getElementById('fullscreen').style.display = "flex";
    document.getElementById('fullscreenImg').src = el.src;

    imgNow = el.src.substring(el.src.length - 5, el.src.length - 4);
}

function closeImage() {
    document.getElementById('fullscreen').style.display = "none";
}

function nextImage() {
    imgNow++;

    if(imgNow > imgCount)
        imgNow = 1;

    changeImage();
}

function prevImage() {
    imgNow--;

    if(imgNow < 1)
        imgNow = imgCount;

    changeImage();
}

function changeImage() {
    document.getElementById('fullscreenImg').src = "./img/gallery/" + imgNow + ".jpg";
}

document.addEventListener('keydown', checkKey);

function checkKey(e) {
    if(document.getElementById('fullscreen').style.display == "flex") {
        e = e || window.event;

        if (e.keyCode == '37') {
            prevImage();
        }
        else if (e.keyCode == '39') {
            nextImage();
        }
        else if (e.keyCode == '27') {
            closeImage();
        }
    }
}