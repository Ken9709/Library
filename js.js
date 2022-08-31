const container = document.querySelector('#container');
var button = document.getElementById("button");
let myLibrary = [];



function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
    this.info = function(){
        if (hasRead == true)
        return title + " by " + author + " has " + pages +" pages, has been read"
        if (hasRead == false)
        return title + " by " + author + " has " + pages +" pages, has not been read"
    } 
}

function addBookToLibrary(title, author, pages, hasRead) {
    newBook =  new Book(title,author,pages,hasRead)
    myLibrary.push(newBook)
}

button.onclick = function() {
    document.getElementById("myForm").style.display = "block";
    const form = document.querySelector('.signup');
    //Todo: Need to make the submit button change the page, this button is simply opening the form
    //addBookToLibrary(form.elements['author'], dasda, 15, true)
    addBookToLibrary('steve', 'X', 12, true)
    addBookToLibrary('sasdasd', 'asda', 122, true)
    addBookToLibrary('zxczx', 'asda', 122,   true)
    
    for(let i = 0; i<myLibrary.length; i++){
    var newDiv = document.createElement('div')
    newDiv.id = "newDiv" + i
    newDiv.textContent = myLibrary[i].info();
    container.appendChild(newDiv)
    
}

}






