// Instagram clone
const IMAGES = [
    "https://i.pinimg.com/originals/11/7e/7f/117e7ff84b972970c000250f69d9f98e.jpg",
    "https://www.pixel-creation.com/wp-content/uploads/houston-texans-computer-wallpaper-52917-1600x900-px-hdwallsource-800x800.jpg",
    "http://ava7.com/w/basketball-teams/houston-rockets/houston-rockets-nba-basketball-team.jpg"
]

// Array Navigation functions
function getNextImage(currentURL) {
    // find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    // TODO: check if index is -1 at this point
    // show an error or do something nice.

    // increment the index
    index++;

    // check if its within bounds, reset if necessary
    if (index === IMAGES.length) {
        index = 0;
    }

    // then return the images URL at the new index
    return IMAGES[index];
}

function getPrevImage(currentURL) {
    // find the currentURL's index in the IMAGES array
    let index = IMAGES.indexOf(currentURL);
    // TODO: check if index is -1 at this point
    // show an error or do something nice.

    // decrement the index
    index--;

    // check if its within bounds, reset if necessary
    if (index < 0) {
        index = IMAGES.length - 1;
    }

    // then return the images URL at the new index
    return IMAGES[index];
}

// Dom element entries
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
    
    
    // // add left and right keyboard clicks to go between images --------------------------------------------------------------
    // window.addEventListener('keydown', function () {
        //     // console.log(`you pressed a key`);
        //     console.log(event);
        //     // key: "ArrowLeft"
        //     // keyCode: 37
        //     // key: "ArrowRight"
        //     // keyCode: 39
        //     if (event.keyCode === 37) {
            //         this.console.log(`this should go left`);
            //     if (event.keyCode === 39) {
                //         this.console.log(`this should go right`);
                //         // modalElement.classList.add(`modal-hidden`);
                //     }
                // });

// wrap the following in a main(){}
// then after just call the main();
window.addEventListener('keydown', function (event) {
    // console.log(`you pressed a key`);
    // console.log(event);
    // key: "Escape"
    // keyCode: 27
    if (event.keyCode === 27) {
        console.log(`i want to hide the modal`);
        modalElement.classList.add(`modal-hidden`);
    }
});
// have it so when you click the image goes away
window.addEventListener('click', function (event) {
    if (event.target == outputElement) {
        modalElement.classList.add(`modal-hidden`);
    }
});
  // Add global previous/next keyboard listeners
window.addEventListener(`keydown`, function (event) {
    // console.log(event.keyCode);
    if (event.keyCode === 37) {
        // console.log(`go to previous image`);
        let curr = outputElement.getAttribute(`src`);
        let prev = getPrevImage(curr);
        outputElement.setAttribute(`src`, prev);
    } else if (event.keyCode === 39) {
        // console.log(`go to the next image`);
        let curr = outputElement.getAttribute(`src`);
        let next = getNextImage(curr);
        outputElement.setAttribute(`src`, next);
    }
});