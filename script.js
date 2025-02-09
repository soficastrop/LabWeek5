document.addEventListener("DOMContentLoaded", function () {
    const descriptions = document.querySelectorAll(".description");
    const infoBox = document.getElementById("info-box");
    const infoTitle = document.getElementById("info-title");
    const infoText = document.getElementById("info-text");
    const closeInfo = document.getElementById("close-info");

    descriptions.forEach(description => {
        description.addEventListener("click", function () {
            const title = this.getAttribute("data-title");
            const text = this.getAttribute("data-text");

            infoTitle.innerHTML = title;
            infoText.innerHTML = text;

            infoBox.classList.remove("hidden");
            infoBox.style.visibility = "visible";
        });
    });

    closeInfo.addEventListener("click", function (event) {
        event.preventDefault();
        infoBox.classList.add("hidden");
        infoBox.style.visibility = "hidden";
    });
});