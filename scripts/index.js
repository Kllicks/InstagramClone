// Instagram clone
const IMAGES = [
    "https://i.pinimg.com/originals/11/7e/7f/117e7ff84b972970c000250f69d9f98e.jpg",
    "https://www.pixel-creation.com/wp-content/uploads/houston-texans-computer-wallpaper-52917-1600x900-px-hdwallsource-800x800.jpg",
    "http://ava7.com/w/basketball-teams/houston-rockets/houston-rockets-nba-basketball-team.jpg"
]
const thumbnailContainer = document.querySelector('[data-container]');
const outputElement = document.querySelector('[data-output]');
const modalElement = document.querySelector('[data-modal]');
// console.log(modalElement);

// function that generates the thumbnail div
// function that generates an imag element
function createImage(imageURL) {
    const theImage = document.createElement(`img`);

    theImage.src =imageURL;
    // theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function(event) {
        console.log('test');
        // the element that got clicked is accessible
        // as `event.target`
        // and, i can read the `src` attribute!
        console.log(event.target.src);

        // i can now set the image's/outputElement's src 
        // to `event.target.src`
        // theImage.parentNode.removeChild(theImage);
        // outputElement.setAttribute(`src`, event.target.src);
        outputElement.src = event.target.src;
        // modalElement.classList.toggle(`modal-hidden`);
        // "remove" is more specific, so we'll use that
        modalElement.classList.remove(`modal-hidden`);
        
    });

    return theImage;
}

// function that generates the thumbnail div
function createThumbnail(imageURL) {
    const theContainer = document.createElement('div');
    theContainer.classList.add(`thumbnail-item`);
    theContainer.appendChild(createImage(imageURL));

    return theContainer;
}

// MY ATTEMPT:
// function drawThumbnail() {
//     let firstImageURL = IMAGES[index];
//     let testThumb = createThumbnail(firstImageURL);
//     document.body.appendChild(testThumb);
//     index ++;
// }

// CHRIS's walkthrough:
// loop through the IMAGES array
// for each image, call the anonymous function
// the anon func should expect to receive an image URL
IMAGES.forEach(function (anImageUrl) {

    // We pass that image URL ro our createThumbnail func
    let aThumbnail = createThumbnail(anImageUrl);

    // then append that thumbnail to the page
    thumbnailContainer.appendChild(aThumbnail);
});

window.addEventListener('keydown', function () {
    // console.log(`you pressed a key`);
    // console.log(event);
    // key: "Escape"
    // keyCode: 27
    if (event.keyCode === 27) {
        this.console.log(`i want to hide the modal`);
        modalElement.classList.add(`modal-hidden`);
    }
});