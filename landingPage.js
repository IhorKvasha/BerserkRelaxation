const audio = document.getElementById("backgroundMusic");


window.addEventListener("DOMContentLoaded", () => {
    if (audio) {
        audio.volume = 0;
        audio.play();

        let volume = 0;
        let increaseVolumeInterval = setInterval(() => {
            volume += 0.01;
            audio.volume = Math.min(volume, 1);

            if (volume >= 1) {
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

function showDropdown() {
    dropdownContent.style.display = "flex";
}

function hideDropdown() {
    dropdownContent.style.display = "none";
}

function toggleDropdown() {
    const computedStyle = window.getComputedStyle(dropdownContent);
    if (computedStyle.display === "none") {
        showDropdown();
    } else {
        hideDropdown();
    }
}

function handleDocumentClick(event) {
    const isClickInsideDropdown = dropdownContent.contains(event.target);
    if (!isClickInsideDropdown) {
        hideDropdown();
        document.removeEventListener("click", handleDocumentClick);
    }
}

function showOrHide(event) {
    event.stopPropagation();
    toggleDropdown();

    const computedStyle = window.getComputedStyle(dropdownContent);
    if (computedStyle.display === "flex") {
        document.addEventListener("click", handleDocumentClick);
    } else {
        document.removeEventListener("click", handleDocumentClick);
    }
}
