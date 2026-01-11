function checkBook() {
  let book = {
    title: document.getElementById("title").value,
    author: document.getElementById("author").value,
    readingStatus: document.getElementById("status").checked,

    info: function () {
      if (this.readingStatus === true) {
        return "Already read '" + this.title + "' by " + this.author + ".";
      } else {
        return "You still need to read '" + this.title + "' by " + this.author + ".";
      }
    }
  };

  console.log(book.info());
}
