// Instagram clone
const IMAGES = [
    "https://i.pinimg.com/originals/11/7e/7f/117e7ff84b972970c000250f69d9f98e.jpg",
    "https://www.pixel-creation.com/wp-content/uploads/houston-texans-computer-wallpaper-52917-1600x900-px-hdwallsource-800x800.jpg",
    "http://ava7.com/w/basketball-teams/houston-rockets/houston-rockets-nba-basketball-team.jpg"
]

// function that generates the thumbnail div
// function that generates an imag element
function createImage(imageURL) {
    const theImage = document.createElement(`img`);

    theImage.src =imageURL;
    // theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function() {
        console.log('hello');
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

// just draw a thumbnail to the body
// so we can test the click ability
let firstImageURL = IMAGES[0];
let testThumb = createThumbnail(firstImageURL)
document.body.appendChild(testThumb);