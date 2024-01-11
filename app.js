// const body = document.querySelector("body");

// console.log(body);

// const h1 = document.querySelector("h1");

// console.log(h1);

// const h1 = document.querySelector("h1");

// h1.textContent = "Hello world!";

// const image = document.querySelector("img");

// image.src = "/images/myimage.jpg";

const body = document.querySelector("body");

// const h1 = document.createElement("h1");

const h1 = document.querySelector("h1");
h1.textContent = "This is a Heading";
body.appendChild(h1);

h1.remove();
