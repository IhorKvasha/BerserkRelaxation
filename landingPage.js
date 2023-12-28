const audio = document.getElementById("backgroundMusic");


window.addEventListener("DOMContentLoaded", () => {
    if (audio) {
        audio.volume = 0; // начинаем с громкости 0
        audio.play();

        let volume = 0;
        let increaseVolumeInterval = setInterval(() => {
            volume += 0.01; // увеличиваем громкость на 0.01 каждые 100 мс
            audio.volume = Math.min(volume, 1); // Ensure volume is within the range [0, 1]

            if (volume >= 1) { // если громкость достигла максимума, останавливаем увеличение
                clearInterval(increaseVolumeInterval);
            }
        }, 100);
    } else {
        console.error("Audio element not found.");
    }
});

function audioController() {
    if (!audio.paused) {
        audio.pause();
    } else {
        audio.play();
    }
}

let imageTracker = "off";

function imageChange() {
    let image = document.getElementById("audioController");

    if(imageTracker == "off") {
        image.src = "resources/pictures/audioControllerOn.png";
        imageTracker = "on";
    } else {
        image.src = "resources/pictures/audioControllerOff.png";
        imageTracker = "off";
    }
}

const dropdownContent = document.querySelector(".dropdownContent");

function f() {
    dropdownContent.style.display = "flex";
}

function n() {
    dropdownContent.style.display = "none";
}

function showOrHide() {
    var computedStyle = window.getComputedStyle(dropdownContent);
    if(computedStyle.display === "none") {
        f()
    } else {
        n()
    }
}