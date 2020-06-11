import React, { useState } from 'react';

const Submit = () => {

  const [name, setName] = useState(null);
  const [categories, setCategories] = useState([]);
  const [books, setBooks] = useState([]);
  const [read, setRead] = useState(false);

  const handleDeleteList = () => {
    setName(null);
    setCategories([]);
    setBooks([]);
    
    localStorage.removeItem('name');
    localStorage.removeItem('categories');
    localStorage.removeItem('books');

    document.querySelector('.marathon__list').remove();
}

  const handleSubmit = () => {
    // div with list
    let marathonList = document.createElement('div');
    marathonList.setAttribute('class', 'marathon__list');
    document.querySelector('.marathon').appendChild(marathonList);
    let list = document.querySelector('.marathon__list'); 

    // button which deletes list
    let deleteBtn = document.createElement('div');
    deleteBtn.innerHTML = 'x'; //delete this later when css'll be fixed
    deleteBtn.onclick = handleDeleteList;
    deleteBtn.setAttribute('class', 'marathon__list__delete-list-btn');
    list.appendChild(deleteBtn);

    //adding title of marathon into DOM
    const name = document.querySelector('.create-list__name-input').value;
    let title = document.createElement('h2');
    title.innerHTML = `${name}`;
    title.setAttribute('class', 'marathon__list__title')
    list.appendChild(title);


    //adding categories and books into DOM
    const categories = [];
    document.querySelectorAll('.create-list__category-input').forEach(c=>{
      categories.push(c.value);
    });
    const books = [];
    document.querySelectorAll('.create-list__book-input').forEach(b=>{
      books.push(b.value);
    });
    for(let i=0; i<categories.length; i++) {
       let checkbox = document.createElement('input');
       checkbox.setAttribute('type', 'checkbox');
       checkbox.setAttribute('id', `book${i}`);
       checkbox.setAttribute('class', 'marathon__list__checkbox');
       list.appendChild(checkbox);
       let book = document.createElement('label');
       book.setAttribute('for', `book${i}`);
       book.setAttribute('class', 'marathon__list__book');
       book.innerHTML = `${categories[i]} - ${books[i]}`;
       list.appendChild(book);
       list.appendChild(document.createElement('br'));
    };

    //adding name, categories and books into hooks and localStorage
    setName(name);
    localStorage.setItem(`name`,JSON.stringify(name));
    setCategories(categories);
    localStorage.setItem(`categories`,JSON.stringify(categories));
    setBooks(books);
    localStorage.setItem(`books`,JSON.stringify(books));
  }

      return (
         <>
           <button onClick={handleSubmit}>Submit</button>
           <div className='marathon'></div>
         </>
      )
}

export default Submit;