function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  const result = fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json())
    .then(data => renderBooks(data))

    return result;
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    main.appendChild(h2);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});

// function json(series) {
//   let characterCount = 0;
//   let targetObj = {
// 	targetUrl : null,
// 	book : null
//   }
//   for (book of series) {
//     const characters = book.characters;
//     for (url of characters) {
//       const charArray = url.split("/");
//       characterCount += parseInt(charArray[charArray.length - 1]);
//       if (characterCount >= 1031) {
//         targetObj.targetUrl = url;
// 		targetObj.book = book.url.split("/").length - 1;
//       }
//     }
//   }
//   return targetObj;
// }

// fetch("https://anapioficeandfire.com/api/books")
//   .then((resp) => resp.json())
//   .then(json)
//   .then((result) => console.log(result));