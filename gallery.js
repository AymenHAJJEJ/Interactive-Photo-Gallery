/*Name this external file gallery.js*/

function upDate(previewPic) {
    // Log for debugging
    console.log("Mouseover event triggered.");
    console.log("Image source: " + previewPic.src);
    console.log("Alt text: " + previewPic.alt);

    // Get the div with id "image"
    let imageDiv = document.getElementById("image");

    // Change background image to preview image src
    imageDiv.style.backgroundImage = "url('" + previewPic.src + "')";

    // Change the text to the alt text of the image
    imageDiv.innerHTML = previewPic.alt;
}

function unDo() {
    // Log for debugging
    console.log("Mouseout event triggered.");

    // Get the div with id "image"
    let imageDiv = document.getElementById("image");

    // Reset background image to none (as in original CSS: url(''))
    imageDiv.style.backgroundImage = "url('')";

    // Reset text
    imageDiv.innerHTML = "Hover over an image below to display here.";
}
