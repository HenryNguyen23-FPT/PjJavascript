function upDate(previewPic) {
    console.log("Event triggered!");
    console.log("Image alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);

    let imageDiv = document.getElementById("image");

    // Change the background image
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Change the text
    imageDiv.innerHTML = previewPic.alt;
}

function undo() {
    console.log("Undo event triggered!");

    let imageDiv = document.getElementById("image");

    // Revert background image and text
    imageDiv.style.backgroundImage = "url('')";
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
