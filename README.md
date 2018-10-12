# Handy DOM functions

## document.createElement

```js
let myHeader = document.createElement('h1');
let myDiv = document.createElement(`div`);
let myImage = document.createElement(`img`);
```

- you pass it a string
- it gives you a new DOM element that has not been added to the page

## element.appendChild

```js
myDib.appendChild(myImage);
```

- you pass it a DOM element
- it nests one element inside the other

## element.setAttribute

```js
myImage.setAttribute('src', 'images/cat.jpg');
myImage.setAttribute('alt', 'beautiful magnificent cat');
```

- you pass it two strings:
    - the name of the HTML attribute
    - the value of the HTML attribute

## element.classList.add

```js
myDiv.classList.add('thumbnail-item');
```

- you pass it a string that contains the CSS class you want to add

## element.addEventListener

```js
myDiv.addEventListener('click', function() {
    console.log('you clicked the thumbnail');
});
```

- you pass it two arguments
    - a string with the name of the event
    - a function that will be run whenever the event is triggered for that element

## element.textContent

```js
myHeader.textContent = "Instaclone: way better than Instagram.";
```

- you assign it a string, and that puts that text in between the opening and closing tag of that element

## document.querySelector

Given this HTML:

```js
<body>
    <div data-output> </div>
</body>
```

You can do this:

```js
let outputElement = document.querySelector('[data-output]');
```

- you pass it a string that contains a CSS selector
- it returns _one_ matching element
    - if it doesn't find one, it returns `null`
    - if there are multiple matches, it returns the first one

## document.querySelectorAll

Imagine that there are a bunch of anchor tags on a page. 
Then you write this: 

```js
let allImagesOnPage = document.querySelectorAll('a');
```

- you pass it 
-