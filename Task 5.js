function displayBooks(bookList) {
  for (let i = 0; i < bookList.length; i++) {
      document.write(bookList[i]);
      document.write("<br>");
  }
}

const myBookList = ["The Great Gatsby", "To Kill a Mockingbird", "Pride and Prejudice", "1984", "Harry Potter"];
displayBooks(myBookList);
