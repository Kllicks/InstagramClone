// Instagram clone
const IMAGES = [
    "https://i.pinimg.com/originals/11/7e/7f/117e7ff84b972970c000250f69d9f98e.jpg",
    "https://www.pixel-creation.com/wp-content/uploads/houston-texans-computer-wallpaper-52917-1600x900-px-hdwallsource-800x800.jpg",
    "http://ava7.com/w/basketball-teams/houston-rockets/houston-rockets-nba-basketball-team.jpg"
]
const outputElement = document.querySelector('[data-output]');
let index = 0;

// function that generates the thumbnail div
// function that generates an imag element
function createImage(imageURL) {
    const theImage = document.createElement(`img`);

    theImage.src =imageURL;
    // theImage.setAttribute('src', imageURL);

    // add an event listener to the image
    theImage.addEventListener('click', function(event) {
        console.log('test');
        console.log(event.target.src);
        // the element that got clicked is accessible
        // as `event.target`
        // and, i can read the `src` attribute!
        // i can now set the image's/outputElement's src 
        // to `event.target.src`
        theImage.parentNode.removeChild(theImage);
        outputElement.src = event.target.src;
        
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

// style this larger version of the image so that it's at least 500px x 500px