const title = document.getElementById("title");
const author = document.getElementById("author");
const year = document.getElementById("year");
const bookList = document.getElementById("book-list");
const form = document.getElementById("book-form");

form.addEventListener('submit', function(e) {
    e.preventDefault();

    // Check if any of the fields are empty
    if (title.value === "" || author.value === "" || year.value === "") {
        alert("Fill The Form");
    } else {
        const newRow = document.createElement('section');

        const newTitle = document.createElement("div");
        newTitle.innerHTML = title.value;
        newRow.appendChild(newTitle);

        const newAuthor = document.createElement("div");
        newAuthor.innerHTML = author.value;
        newRow.appendChild(newAuthor);

        const newYear = document.createElement("div");
        newYear.innerHTML = year.value;
        newRow.appendChild(newYear);

        // Append the new row to the book list
        bookList.appendChild(newRow);

        // Clear input fields after adding the book
        title.value = "";
        author.value = "";
        year.value = "";
    }
});
