var book = { title: "The Hobbit", author: "J.R.R. Tolkien", year: 1937 };

var result = '';
for (var key in book) {
    result += `${key}: ${book[key]} `;
}

console.log(result.trim());
