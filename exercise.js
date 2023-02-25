

let myLibrary = [];

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
    this.info = function() {
        return(title, author, pages, read);
    }
}

window.onload=function() {
    document.getElementById("add").addEventListener("click", function(event){
        event.preventDefault();
        addBookToLibrary();
    });
}

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }
  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }


function addBookToLibrary() {
    var book = new Book(
        document.getElementById('title').value,
        document.getElementById('author').value,
        document.getElementById('pages').value,
        document.getElementById('read').value
    );
    myLibrary.push(book);
    
    function addCard() {
        const cards = document.querySelector('#cards');
        let card =document.createElement('div');
        card.classList.add('card');
        let tittle = document.createElement('h3');
        tittle.classList.add('tittle');
        let athor = document.createElement('h3');
        let pagenum = document.createElement('h3');
        let reads = document.createElement('button');
        let rmv = document.createElement('button');
        rmv.classList.add('rmv')
    
        tittle.textContent = book.title;
        athor.textContent = book.author;
        pagenum.textContent = (book.pages + "pgs");
        rmv.textContent = "Remove";
        rmv.addEventListener('click', () => {
            card.remove();
        });

        const cb = document.querySelector('#read');
        if(cb.checked == true) {
            reads.textContent = 'Read';
            reads.classList.add('isread');
        }
        else {
            reads.textContent = 'Not Read';
            reads.classList.add('notread');
        };


        reads.addEventListener('click', () => {
            if(cb.checked == true) {
                reads.textContent = 'Not Read';
                reads.classList.add('notread');
            }
            else {
                reads.textContent = 'Read';
                reads.classList.add('isread');
                reads.classList.remove('notread');
            };
        });


        cards.appendChild(card);
        card.appendChild(tittle);
        card.appendChild(athor);
        card.appendChild(pagenum);
        card.appendChild(reads);
        card.appendChild(rmv);
        
    }

    addCard(book);

}

