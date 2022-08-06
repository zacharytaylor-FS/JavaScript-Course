console.log("hello");

let titleDiv = document.getElementById("title");

console.log("before: ", title.innerText);

let message = "Goodbye my lover";

title.innerText = message;

console.log("after: ", title.innerText);

title.innerHTML = `<p>${message}</p>`;
