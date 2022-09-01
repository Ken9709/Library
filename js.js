const container = document.querySelector('#container');
var button = document.getElementById("button");
let myLibrary = [];
let count = 0;


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
}

    const form = document.querySelector("#book");
    const submitBtn = document.querySelector("#submitBtn")
        submitBtn.addEventListener('click',  function (e) {
            e.preventDefault();
        
                addBookToLibrary(form.title.value, form.author.value, form.pages.value, true)    
                var newDiv = document.createElement('div')
                newDiv.id = "newDiv" + count
                newDiv.textContent = myLibrary[count].info();
                count++
                container.appendChild(newDiv)
        });
        







